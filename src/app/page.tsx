import Link from 'next/link';
import { ArrowRight, Star, Sparkles, TrendingUp, ShieldCheck, Zap } from 'lucide-react';
import { AppCard } from '@/components/apps/AppCard';
import { getFeaturedApps } from '@/lib/apps';

export default async function Home() {
  const featuredApps = await getFeaturedApps();

  return (
    <div className="flex flex-col gap-20 pb-20 overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 md:pt-32 pb-16 px-4">
        {/* Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none z-[-1]">
          <div className="absolute top-[10%] left-[20%] w-72 h-72 bg-primary/20 rounded-full blur-[100px] opacity-70 animate-pulse" style={{ animationDuration: '4s' }} />
          <div className="absolute top-[30%] right-[20%] w-96 h-96 bg-blue-400/20 rounded-full blur-[120px] opacity-60 animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />
        </div>

        <div className="container-custom relative flex flex-col items-center text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-border backdrop-blur-md animate-fade-in opacity-0" style={{ animationFillMode: 'forwards' }}>
            <Sparkles className="h-3.5 w-3.5 text-amber-500 fill-amber-500" />
            <span className="text-xs font-medium text-muted-foreground">Discover the open source universe</span>
          </div>
          
          <div className="space-y-4 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold font-heading tracking-tight text-balance animate-fade-up opacity-0" style={{ animationFillMode: 'forwards', animationDelay: '0.1s' }}>
              Your <span className="text-gradient">Trusted Marketplace</span> for Open Source Apps
            </h1>
            <p className="mx-auto max-w-2xl text-lg md:text-xl text-muted-foreground text-balance animate-fade-up opacity-0" style={{ animationFillMode: 'forwards', animationDelay: '0.2s' }}>
              Explore, install, and contribute to high-quality developer tools and applications. 
              Verified, secure, and free as in freedom.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-up opacity-0" style={{ animationFillMode: 'forwards', animationDelay: '0.3s' }}>
            <Link 
              href="/apps"
              className="btn-primary h-12 px-8 text-base rounded-full"
            >
              Browse Apps
            </Link>
            <Link
              href="/submit" 
              className="btn-outline h-12 px-8 text-base rounded-full bg-background/50 backdrop-blur-sm hover:bg-background/80"
            >
              Submit App
            </Link>
          </div>

          <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 text-center animate-fade-in opacity-0" style={{ animationFillMode: 'forwards', animationDelay: '0.5s' }}>
             <div className="flex flex-col items-center gap-2">
                <div className="p-3 bg-blue-500/10 rounded-full text-blue-500 mb-2">
                   <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-lg">Verified Code</h3>
                <p className="text-sm text-muted-foreground">Scanned for safety</p>
             </div>
             <div className="flex flex-col items-center gap-2">
                <div className="p-3 bg-purple-500/10 rounded-full text-purple-500 mb-2">
                   <Zap className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-lg">Fast & Free</h3>
                <p className="text-sm text-muted-foreground">No hidden costs</p>
             </div>
             <div className="flex flex-col items-center gap-2">
                <div className="p-3 bg-amber-500/10 rounded-full text-amber-500 mb-2">
                   <Star className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-lg">Community Driven</h3>
                <p className="text-sm text-muted-foreground">Curated by you</p>
             </div>
             <div className="flex flex-col items-center gap-2">
                <div className="p-3 bg-green-500/10 rounded-full text-green-500 mb-2">
                   <TrendingUp className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-lg">Trending Apps</h3>
                <p className="text-sm text-muted-foreground">Daily updates</p>
             </div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="container-custom">
        <div className="flex items-end justify-between mb-10">
          <div className="space-y-1">
            <h2 className="text-3xl font-bold tracking-tight font-heading">Featured Apps</h2>
            <p className="text-muted-foreground">Hand-picked by our community for quality and utility.</p>
          </div>
          <Link href="/featured" className="text-sm font-medium text-primary hover:underline flex items-center group">
            View all <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      </section>

       {/* Categories Gradient Grid */}
       <section className="container-custom py-12">
         <div className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden border border-white/10 dark:border-white/5">
           <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
           
           <div className="text-center mb-12 relative z-10">
              <h2 className="text-3xl font-bold tracking-tight font-heading mb-4">Browse by Category</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Find exactly what you need. From development tools to productivity suites.
              </p>
           </div>

           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
              {[
                { name: 'Developer Tools', id: 'developer-tools', color: 'bg-blue-500' },
                { name: 'Productivity', id: 'productivity', color: 'bg-orange-500' },
                { name: 'Media', id: 'media', color: 'bg-pink-500' },
                { name: 'Communication', id: 'communication', color: 'bg-cyan-500' },
                { name: 'Utilities', id: 'utilities', color: 'bg-slate-500' },
                { name: 'Finance', id: 'finance', color: 'bg-green-500' },
                { name: 'Security', id: 'security', color: 'bg-yellow-500' },
                { name: 'Games', id: 'games', color: 'bg-purple-500' }
              ].map((cat) => (
                 <Link 
                  key={cat.id} 
                  href={`/apps?category=${cat.id}`}
                  className="group relative overflow-hidden rounded-xl bg-background/50 hover:bg-background border border-border/50 hover:border-primary/30 p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                 >
                    <div className={`absolute top-0 right-0 w-16 h-16 ${cat.color} opacity-10 rounded-bl-[50%] transition-transform group-hover:scale-150 group-hover:opacity-20`} />
                    <span className="font-semibold text-lg relative z-10">{cat.name}</span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground absolute bottom-4 right-4 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                 </Link>
              ))}
           </div>
         </div>
       </section>

       {/* CTA */}
       <section className="container-custom text-center py-20">
          <div className="bg-primary text-primary-foreground rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,rgba(255,255,255,0.1)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.1)_50%,rgba(255,255,255,0.1)_75%,transparent_75%,transparent)] bg-[length:64px_64px] opacity-10" />
            
            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold font-heading">Have an open source project?</h2>
              <p className="text-primary-foreground/80 text-lg">
                Submit your app to OpenStore today and reach thousands of developers and users. 
                It takes less than a minute.
              </p>
              <Link href="/submit" className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-white text-primary font-bold hover:bg-white/90 transition-colors shadow-lg">
                Submit App
              </Link>
            </div>
          </div>
       </section>
    </div>
  );
}
