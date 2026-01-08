import { Users, Heart, Github, Star, GitPullRequest, Award } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Contributors - AppForge',
  description: 'Meet the amazing people who make AppForge possible.',
};

// Mock contributors data - in production, fetch from GitHub API
const topContributors = [
  { name: 'Alex Chen', username: 'alexchen', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=alex', contributions: 247, role: 'Core Maintainer' },
  { name: 'Sarah Miller', username: 'sarahm', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sarah', contributions: 183, role: 'Core Maintainer' },
  { name: 'James Wilson', username: 'jwilson', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=james', contributions: 156, role: 'Contributor' },
  { name: 'Emma Davis', username: 'emmad', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=emma', contributions: 134, role: 'Contributor' },
  { name: 'Michael Brown', username: 'mbrown', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=michael', contributions: 98, role: 'Contributor' },
  { name: 'Lisa Wang', username: 'lisawang', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=lisa', contributions: 87, role: 'Contributor' },
];

const stats = [
  { label: 'Contributors', value: '150+', icon: Users },
  { label: 'Pull Requests', value: '2.4k', icon: GitPullRequest },
  { label: 'GitHub Stars', value: '12k', icon: Star },
  { label: 'Apps Listed', value: '500+', icon: Award },
];

export default function ContributorsPage() {
  return (
    <div className="min-h-screen pb-20 pt-20">
      {/* Hero Section */}
      <div className="relative overflow-hidden border-b bg-background">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-background to-background pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl opacity-50" />
        
        <div className="container-custom py-16 md:py-24 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20 text-sm font-medium">
              <Heart className="h-4 w-4" />
              Community Powered
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-heading tracking-tight">
              Our Contributors
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              AppForge is built by an amazing community of open source enthusiasts. 
              Thank you to everyone who has contributed!
            </p>
          </div>
        </div>
      </div>

      <div className="container-custom py-12 md:py-16">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="glass-card rounded-2xl p-6 text-center">
              <stat.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
              <div className="text-3xl font-bold font-heading">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Top Contributors */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold font-heading mb-8 flex items-center gap-3">
            <Award className="h-6 w-6 text-amber-500" />
            Top Contributors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topContributors.map((contributor, index) => (
              <div 
                key={contributor.username} 
                className="glass-card rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <div className="relative">
                    {index < 3 && (
                      <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                        index === 0 ? 'bg-amber-500 text-white' :
                        index === 1 ? 'bg-slate-400 text-white' :
                        'bg-amber-700 text-white'
                      }`}>
                        {index + 1}
                      </div>
                    )}
                    <img 
                      src={contributor.avatar} 
                      alt={contributor.name}
                      className="w-16 h-16 rounded-full bg-secondary"
                    />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                      {contributor.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">@{contributor.username}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                        {contributor.role}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {contributor.contributions} commits
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="glass-card rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold font-heading mb-4">
              Want to contribute?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              AppForge is open source! We welcome contributions of all kinds - 
              from code to documentation to design.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="https://github.com/Code-Game-Ninja/Open-Market-" 
                target="_blank"
                className="btn-primary h-12 px-6"
              >
                <Github className="h-5 w-5 mr-2" />
                View on GitHub
              </Link>
              <Link href="/guidelines" className="btn-outline h-12 px-6">
                Read Guidelines
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
