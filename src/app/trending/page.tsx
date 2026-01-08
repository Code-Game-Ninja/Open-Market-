import { AppCard } from '@/components/apps/AppCard';
import { getApps } from '@/lib/apps';
import { TrendingUp, Flame, Clock } from 'lucide-react';

export const revalidate = 1800; // Revalidate every 30 minutes

export const metadata = {
  title: 'Trending Apps - AppForge',
  description: 'Discover the hottest open source applications trending right now.',
};

export default async function TrendingPage() {
  const allApps = await getApps(100);
  
  // Sort by stars for "hot" apps
  const hotApps = [...allApps].sort((a, b) => b.stats.stars - a.stats.stars).slice(0, 12);
  
  // Sort by recent updates
  const recentlyUpdated = [...allApps]
    .sort((a, b) => new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime())
    .slice(0, 6);

  return (
    <div className="min-h-screen pb-20 pt-20">
      {/* Hero Section */}
      <div className="relative overflow-hidden border-b bg-background">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-background to-background pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/20 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl opacity-50" />
        
        <div className="container-custom py-16 md:py-24 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20 text-sm font-medium">
              <Flame className="h-4 w-4" />
              Hot Right Now
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-heading tracking-tight">
              Trending Apps
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Discover what's popular in the open source community. 
              Updated every 30 minutes.
            </p>
          </div>
        </div>
      </div>

      <div className="container-custom py-12 md:py-16">
        {/* Hot Apps Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-orange-500/10">
              <TrendingUp className="h-5 w-5 text-orange-500" />
            </div>
            <div>
              <h2 className="text-2xl font-bold font-heading">Most Popular</h2>
              <p className="text-muted-foreground">Apps with the highest community engagement</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {hotApps.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        </div>

        {/* Recently Updated Section */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-green-500/10">
              <Clock className="h-5 w-5 text-green-500" />
            </div>
            <div>
              <h2 className="text-2xl font-bold font-heading">Recently Updated</h2>
              <p className="text-muted-foreground">Fresh updates from active projects</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentlyUpdated.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
