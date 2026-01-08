// Production app list - Dynamically curated open source applications
// Instead of a static list, we'll fetch from GitHub's "awesome" lists and trending repos

export interface AppSource {
  repo: string;
  featured?: boolean;
  category?: string;
}

// Curated list of high-quality open source applications
// This serves as a seed list for featured apps and ensures quality content
export const CURATED_APPS: AppSource[] = [
  // Featured Applications
  { repo: 'microsoft/vscode', featured: true, category: 'developer-tools' },
  { repo: 'obsidianmd/obsidian-releases', featured: true, category: 'productivity' },
  { repo: 'videolan/vlc', featured: true, category: 'media' },
  
  // Developer Tools
  { repo: 'neovim/neovim', category: 'developer-tools' },
  { repo: 'junegunn/fzf', category: 'cli-tools' },
  { repo: 'starship/starship', category: 'cli-tools' },
  
  // Productivity
  { repo: 'notion-enhancer/notion-repackaged', category: 'productivity' },
  { repo: 'laurent22/joplin', category: 'productivity' },
  { repo: 'logseq/logseq', category: 'productivity' },
  
  // Media & Entertainment
  { repo: 'mpv-player/mpv', category: 'media' },
  { repo: 'audacity/audacity', category: 'media' },
  { repo: 'olive-editor/olive', category: 'media' },
  
  // Communication
  { repo: 'element-hq/element-web', category: 'communication' },
  { repo: 'signalapp/Signal-Desktop', category: 'communication' },
  
  // Utilities
  { repo: 'ShareX/ShareX', category: 'utilities' },
  { repo: 'KDE/krita', category: 'utilities' },
  { repo: 'GNOME/gimp', category: 'utilities' },
  
  // Security & Privacy
  { repo: 'bitwarden/clients', category: 'security' },
  { repo: 'keepassxreboot/keepassxc', category: 'security' },
  
  // AI & ML
  { repo: 'oobabooga/text-generation-webui', category: 'ai-ml' },
  { repo: 'AUTOMATIC1111/stable-diffusion-webui', category: 'ai-ml' },
  
  // Finance
  { repo: 'firefly-iii/firefly-iii', category: 'finance' },
  { repo: 'actualbudget/actual', category: 'finance' },
  { repo: 'maybe-finance/maybe', category: 'finance' },
];

// Get repositories to display
export function getAppRepositories(limit?: number, featuredOnly = false): string[] {
  let apps = featuredOnly 
    ? CURATED_APPS.filter(app => app.featured)
    : CURATED_APPS;
  
  if (limit) {
    apps = apps.slice(0, limit);
  }
  
  return apps.map(app => app.repo);
}

// Get full app configurations
export function getAppConfigs(limit?: number, featuredOnly = false): AppSource[] {
  let apps = featuredOnly 
    ? CURATED_APPS.filter(app => app.featured)
    : CURATED_APPS;
  
  if (limit) {
    apps = apps.slice(0, limit);
  }
  
  return apps;
}

// For backward compatibility
export const INITIAL_APPS = getAppRepositories();
