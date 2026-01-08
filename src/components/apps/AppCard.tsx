'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Star, GitFork } from 'lucide-react';
import { App } from '@/types';
import { motion } from 'framer-motion';

interface AppCardProps {
  app: App;
}

function timeAgo(date: string | Date): string {
    const seconds = Math.floor((new Date().getTime() - new Date(date).getTime()) / 1000);
    const intervals: { [key: string]: number } = {
        year: 31536000,
        month: 2592000,
        week: 604800,
        day: 86400,
        hour: 3600,
        minute: 60,
        second: 1
    };

    let counter;
    for (const i in intervals) {
        counter = Math.floor(seconds / intervals[i]);
        if (counter > 0) {
            if (counter === 1) {
                return counter + ' ' + i + ' ago';
            } else {
                return counter + ' ' + i + 's ago';
            }
        }
    }
    return 'Just now';
}

export function AppCard({ app }: AppCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="h-full"
    >
      <Link href={`/apps/${app.maintainer.username}/${app.slug}`} className="group relative block h-full">
        <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-border/50 bg-card text-card-foreground shadow-sm transition-all hover:shadow-glow/20 hover:border-primary/50 glass-card">
          <div className="p-6 flex-grow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-secondary to-background flex items-center justify-center overflow-hidden border border-border/50 shadow-inner">
                  {app.logo ? (
                    <Image 
                      src={app.logo} 
                      alt={app.name} 
                      width={40}
                      height={40}
                      className="h-10 w-10 object-contain" 
                      unoptimized
                    />
                  ) : (
                    <div className="text-2xl font-bold font-heading text-muted-foreground">{app.name.charAt(0)}</div>
                  )}
                </div>
                <div className="overflow-hidden">
                  <h3 className="font-bold leading-none tracking-tight text-lg group-hover:text-primary transition-colors truncate">
                    {app.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1.5 truncate flex items-center gap-1">
                    by <span className="text-foreground/80 font-medium">{app.maintainer.name}</span>
                  </p>
                </div>
              </div>
              {app.stats.stars > 1000 && (
                <div className="flex items-center text-[10px] uppercase font-bold tracking-wider text-amber-500 bg-amber-500/10 px-2 py-1 rounded-full border border-amber-500/20">
                  <Star className="h-3 w-3 mr-1 fill-current" />
                  Popular
                </div>
              )}
            </div>
            
            <p className="text-sm text-muted-foreground line-clamp-3 mb-4 leading-relaxed">
              {app.shortDescription}
            </p>
            
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="inline-flex items-center rounded-md bg-secondary/80 px-2.5 py-1 text-xs font-medium text-secondary-foreground ring-1 ring-inset ring-foreground/5 backdrop-blur-sm">
                {app.category}
              </span>
              {app.license && (
                <span className="inline-flex items-center rounded-md bg-secondary/80 px-2.5 py-1 text-xs font-medium text-secondary-foreground ring-1 ring-inset ring-foreground/5 backdrop-blur-sm">
                  {app.license}
                </span>
              )}
            </div>
          </div>
          
          <div className="border-t border-border/50 bg-secondary/30 p-4 backdrop-blur-sm">
            <div className="flex items-center justify-between text-xs text-muted-foreground font-medium">
              <div className="flex items-center gap-4">
                <span className="flex items-center hover:text-amber-500 transition-colors" title="Stars">
                  <Star className="mr-1.5 h-3.5 w-3.5" />
                  {formatNumber(app.stats.stars)}
                </span>
                <span className="flex items-center hover:text-blue-500 transition-colors" title="Forks">
                  <GitFork className="mr-1.5 h-3.5 w-3.5" />
                  {formatNumber(app.stats.forks)}
                </span>
              </div>
              
              <span title={`Updated ${timeAgo(app.lastUpdated)}`} className="text-[10px] opacity-70 uppercase tracking-widest">
                {timeAgo(app.lastUpdated)}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

function formatNumber(num: number): string {
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'k';
  }
  return num.toString();
}
