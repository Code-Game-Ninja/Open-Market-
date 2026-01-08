import { AppCard } from '@/components/apps/AppCard';
import { getApps, searchApps, getAppsByCategory } from '@/lib/apps';
import { Search, Sparkles } from 'lucide-react';
import { App } from '@/types';
import Link from 'next/link';

export const revalidate = 3600; // Revalidate every hour

// Helper to format category name for display
function formatCategoryName(category: string): string {
  const names: Record<string, string> = {
    'web-apps': 'Web Apps',
    'android': 'Mobile',
    'desktop': 'Desktop',
    'ai-ml': 'AI & Machine Learning',
    'cli-tools': 'CLI Tools',
    'developer-tools': 'Developer Tools',
    'utilities': 'Utilities',
    'games': 'Games',
    'productivity': 'Productivity',
    'media': 'Media & Entertainment',
    'communication': 'Communication',
    'security': 'Security & Privacy',
    'finance': 'Finance'
  };
  return names[category] || category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ');
}

export default async function AppsPage({
  searchParams,
}: {
  searchParams: { q?: string; category?: string; page?: string };
}) {
  const searchQuery = searchParams.q?.trim();
  const categoryFilter = searchParams.category?.toLowerCase();
  const page = parseInt(searchParams.page || '1');
  const itemsPerPage = 24;

  let apps: App[];
  let recommendations: App[] = [];

  // Use different data fetching strategies based on filters
  if (searchQuery) {
    // Text search
    const searchResult = await searchApps(searchQuery);
    apps = searchResult.apps;
    recommendations = searchResult.recommendations;
  } else if (categoryFilter) {
    // Category filter - search GitHub for apps in this category (up to 100)
    apps = await getAppsByCategory(categoryFilter, 100);
  } else {
    // No filter - show curated apps
    apps = await getApps(100);
  }

  const totalItems = apps.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const paginatedApps = apps.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <div className="min-h-screen pb-20 pt-20">
       {/* Header Section */}
      <div className="relative border-b bg-background/50 backdrop-blur-xl mb-8">
        <div className="container-custom py-12">
            <h1 className="text-3xl md:text-5xl font-bold font-heading tracking-tight mb-4">
              {searchQuery ? `Results for "${searchQuery}"` : 
               categoryFilter ? formatCategoryName(categoryFilter) : 
               'Explore Apps'}
            </h1>
            <p className="text-xl text-muted-foreground">
              {totalItems} open source {totalItems === 1 ? 'application' : 'applications'} available
            </p>
        </div>
      </div>

      <div className="container-custom">
        {paginatedApps.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center glass-card rounded-2xl">
            <Search className="h-16 w-16 text-muted-foreground/30 mb-6" />
            <h3 className="text-xl font-semibold mb-2">No apps found</h3>
            <p className="text-muted-foreground max-w-md">
              {searchQuery 
                ? `We couldn't find any apps matching "${searchQuery}". Try a different search term.`
                : categoryFilter 
                  ? `No apps found in the "${categoryFilter}" category. Our catalog is growing every day!`
                  : 'Try adjusting your filters to see more results.'
              }
            </p>
            {categoryFilter && (
              <Link href="/apps" className="btn-primary mt-6">
                View All Apps
              </Link>
            )}
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {paginatedApps.map((app) => (
                <AppCard key={app.id} app={app} />
              ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="mt-16 flex justify-center gap-2">
                {page > 1 && (
                  <Link
                    href={{
                      query: { ...searchParams, page: page - 1 },
                    }}
                    className="btn-outline px-4 py-2"
                  >
                    Previous
                  </Link>
                )}
                
                <div className="flex items-center gap-2 px-4">
                  <span className="text-sm text-muted-foreground">
                    Page {page} of {totalPages}
                  </span>
                </div>

                {page < totalPages && (
                  <Link
                    href={{
                      query: { ...searchParams, page: page + 1 },
                    }}
                    className="btn-outline px-4 py-2"
                  >
                    Next
                  </Link>
                )}
              </div>
            )}

            {/* Recommendations Section */}
            {recommendations.length > 0 && (
              <div className="mt-24 pt-12 border-t border-border/50">
                <div className="flex items-center gap-3 mb-8">
                  <Sparkles className="h-6 w-6 text-primary" />
                  <div>
                    <h2 className="text-2xl font-bold font-heading">You might also like</h2>
                    <p className="text-sm text-muted-foreground mt-1">
                      Similar apps based on your search
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {recommendations.map((app) => (
                    <AppCard key={app.id} app={app} />
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
