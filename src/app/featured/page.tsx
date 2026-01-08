import { AppCard } from '@/components/apps/AppCard';
import { getFeaturedApps, getApps } from '@/lib/apps';
import { Star, Award, TrendingUp } from 'lucide-react';

export const revalidate = 3600;

export const metadata = {
  title: 'Featured Apps - AppForge',
  description: 'Hand-picked open source applications curated by our community.',
};

export default async function FeaturedPage() {
  const featuredApps = await getFeaturedApps();
  const allApps = await getApps(50);
  
  // Get top starred apps
  const topStarred = [...allApps].sort((a, b) => b.stats.stars - a.stats.stars).slice(0, 6);

  return (
    <div className="min-h-screen pb-20 pt-20">
      {/* Hero Section */}
      <div className="relative overflow-hidden border-b bg-background">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-background to-background pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl opacity-50" />
        
        <div className="container-custom py-16 md:py-24 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 text-sm font-medium">
              <Award className="h-4 w-4" />
              Editor's Choice
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-heading tracking-tight">
              Featured Apps
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Hand-picked by our community for exceptional quality, innovation, and utility.
              These are the best open source apps available.
            </p>
          </div>
        </div>
      </div>

      <div className="container-custom py-12 md:py-16">
        {/* Featured Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-amber-500/10">
              <Star className="h-5 w-5 text-amber-500" />
            </div>
            <div>
              <h2 className="text-2xl font-bold font-heading">Staff Picks</h2>
              <p className="text-muted-foreground">Curated by our team for excellence</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredApps.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        </div>

        {/* Top Starred Section */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-blue-500/10">
              <TrendingUp className="h-5 w-5 text-blue-500" />
            </div>
            <div>
              <h2 className="text-2xl font-bold font-heading">Most Popular</h2>
              <p className="text-muted-foreground">Highest starred repositories</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topStarred.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
