import { getRepository, searchRepositories } from './github';
import { mapRepoToApp } from './adapters';
import { getAppConfigs } from './data';
import { App, Category } from '@/types';

export const revalidate = 3600;

// Category to search terms mapping for GitHub search
const categorySearchTerms: Record<string, string[]> = {
  'web-apps': ['webapp', 'web-app', 'react', 'vue', 'nextjs', 'frontend'],
  'android': ['android', 'mobile', 'apk', 'flutter', 'react-native'],
  'desktop': ['desktop', 'electron', 'tauri', 'gtk', 'qt'],
  'ai-ml': ['ai', 'machine-learning', 'gpt', 'llm', 'neural-network', 'deep-learning'],
  'cli-tools': ['cli', 'terminal', 'command-line', 'shell', 'bash'],
  'developer-tools': ['developer-tools', 'devtools', 'ide', 'editor', 'debugging'],
  'utilities': ['utility', 'tool', 'helper', 'automation'],
  'games': ['game', 'gaming', 'gamedev', 'game-engine'],
  'productivity': ['productivity', 'note-taking', 'todo', 'organizer', 'task-management'],
  'media': ['media', 'video', 'audio', 'music', 'video-player', 'media-player', 'entertainment'],
  'communication': ['chat', 'messaging', 'communication', 'matrix', 'discord'],
  'security': ['security', 'privacy', 'encryption', 'password-manager', 'vpn'],
  'finance': ['finance', 'budget', 'accounting', 'expense-tracker', 'money']
};

export async function getApps(limit: number = 50): Promise<App[]> {
  // Get full config to access hardcoded categories
  const targetApps = getAppConfigs(limit);

  const apps = await Promise.all(
    targetApps.map(async (appConfig) => {
      try {
        const [owner, name] = appConfig.repo.split('/');
        const repo = await getRepository(owner, name);
        if (!repo) return null;
        return mapRepoToApp(repo, appConfig.category);
      } catch (error) {
        console.error(`Failed to fetch app ${appConfig.repo}:`, error);
        return null;
      }
    })
  );

  return apps.filter((app): app is App => app !== null);
}

export async function getFeaturedApps(): Promise<App[]> {
  const featuredRepos = getAppConfigs(3, true);
  
  const apps = await Promise.all(
    featuredRepos.map(async (appConfig) => {
      try {
        const [owner, name] = appConfig.repo.split('/');
        const repo = await getRepository(owner, name);
        if (!repo) return null;
        return mapRepoToApp(repo, appConfig.category);
// ...existing code...
      } catch (error) {
        console.error(`Failed to fetch featured app ${appConfig.repo}:`, error);
        return null;
      }
    })
  );

  return apps.filter((app): app is App => app !== null);
}

// Get apps by category - searches GitHub for relevant apps
export async function getAppsByCategory(category: string, limit: number = 100): Promise<App[]> {
  const searchTerms = categorySearchTerms[category.toLowerCase()];
  
  if (!searchTerms || searchTerms.length === 0) {
    // Fallback to filtering curated apps
    const allApps = await getApps(100);
    return allApps.filter(app => app.category.toLowerCase() === category.toLowerCase());
  }

  try {
    // Search using the first topic term - no star limit to get ALL repos
    const primaryTopic = searchTerms[0];
    const searchQuery = `topic:${primaryTopic} archived:false`;
    
    console.log(`Searching for category ${category} with query: ${searchQuery}`);
    
    // GitHub API allows max 100 per page, so we may need multiple requests
    const perPage = Math.min(limit, 100);
    const pages = Math.ceil(limit / 100);
    
    let allItems: any[] = [];
    
    for (let page = 1; page <= pages && allItems.length < limit; page++) {
      const searchResults = await searchRepositories(searchQuery, { 
        perPage,
        page,
        sort: 'stars',
        order: 'desc'
      });
      
      allItems = [...allItems, ...searchResults.items];
      
      // Stop if we got less than requested (no more results)
      if (searchResults.items.length < perPage) break;
    }

    console.log(`Found ${allItems.length} results for ${category}`);

    // Convert to apps and force the category
    const apps = await Promise.all(
      allItems.slice(0, limit).map(async (repo) => {
        try {
          return mapRepoToApp(repo, category);
        } catch (error) {
          console.error(`Failed to map repo ${repo.full_name}:`, error);
          return null;
        }
      })
    );

    return apps.filter((app): app is App => app !== null);
  } catch (error) {
    console.error(`Failed to fetch apps for category ${category}:`, error);
    // Fallback to curated apps
    const allApps = await getApps(100);
    return allApps.filter(app => app.category.toLowerCase() === category.toLowerCase());
  }
}

// Search apps with recommendations
export async function searchApps(query: string): Promise<{ 
  apps: App[], 
  recommendations: App[] 
}> {
  if (!query || query.trim().length === 0) {
    return { apps: await getApps(), recommendations: [] };
  }

  try {
    // Search GitHub repositories - no star limit, sorted by stars (most popular first)
    const searchQuery = `${query} in:name,description,readme archived:false`;
    const searchResults = await searchRepositories(searchQuery, { 
      perPage: 100,
      sort: 'stars',
      order: 'desc'
    });
    
    // Convert search results to apps
    const apps = await Promise.all(
      searchResults.items.map(async (repo) => {
        try {
          return mapRepoToApp(repo);
        } catch (error) {
          console.error(`Failed to map repo ${repo.full_name}:`, error);
          return null;
        }
      })
    );

    const filteredApps = apps.filter((app): app is App => app !== null);

    // Get recommendations based on topics/language
    let recommendations: App[] = [];
    if (searchResults.items.length > 0) {
      const firstResult = searchResults.items[0];
      // Type assertion or check if topics exists
      const topics = (firstResult as { topics?: string[] }).topics?.slice(0, 3) || [];
      const language = firstResult.language;

      // Build recommendation query - sorted by stars to show popular ones
      let recQuery = '';
      if (topics.length > 0) {
        recQuery = `topic:${topics[0]} archived:false`;
      } else if (language) {
        recQuery = `language:${language} archived:false`;
      }

      if (recQuery) {
        const recResults = await searchRepositories(recQuery, { 
          perPage: 10,
          sort: 'stars',
          order: 'desc'
        });
        // Filter out results that are already in main results
        const uniqueRecs = recResults.items.filter(
          rec => !searchResults.items.find(sr => sr.id === rec.id)
        );
        
        const recApps = await Promise.all(
          uniqueRecs.slice(0, 4).map(async (repo) => {
            try {
              return mapRepoToApp(repo);
            } catch {
              return null;
            }
          })
        );
        recommendations = recApps.filter((app): app is App => app !== null);
      }
    }

    return { apps: filteredApps, recommendations };
  } catch (error) {
    console.error('Search failed:', error);
    // Fallback to local filtering
    const allApps = await getApps(50);
    const queryLower = query.toLowerCase();
    const filtered = allApps.filter(app => 
      app.name.toLowerCase().includes(queryLower) || 
      app.shortDescription.toLowerCase().includes(queryLower)
    );
    return { apps: filtered, recommendations: [] };
  }
}
