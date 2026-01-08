import { Calendar, ArrowRight, Clock, User } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Blog - AppForge',
  description: 'News, updates, and insights from the AppForge team.',
};

const blogPosts = [
  {
    slug: 'introducing-appforge-2',
    title: 'Introducing AppForge 2.0',
    excerpt: 'We\'re excited to announce the biggest update to AppForge yet, featuring a completely redesigned interface, faster search, and more.',
    date: '2026-01-05',
    author: 'AppForge Team',
    category: 'Announcement',
    readTime: '3 min read',
    image: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=800&h=400&fit=crop',
  },
  {
    slug: 'best-cli-tools-2026',
    title: 'The Best Open Source CLI Tools in 2026',
    excerpt: 'A curated list of the most powerful and useful command-line tools that every developer should know about.',
    date: '2026-01-02',
    author: 'Alex Chen',
    category: 'Guides',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&h=400&fit=crop',
  },
  {
    slug: 'security-open-source',
    title: 'How We Verify Open Source Security',
    excerpt: 'Learn about our process for ensuring the applications listed on AppForge are safe and trustworthy.',
    date: '2025-12-28',
    author: 'Security Team',
    category: 'Security',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop',
  },
  {
    slug: 'open-source-sustainability',
    title: 'The Future of Open Source Sustainability',
    excerpt: 'Exploring new models for funding and supporting open source projects in a sustainable way.',
    date: '2025-12-20',
    author: 'Sarah Miller',
    category: 'Opinion',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&h=400&fit=crop',
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen pb-20 pt-20">
      {/* Hero Section */}
      <div className="relative overflow-hidden border-b bg-background">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-background to-background pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/20 rounded-full blur-3xl opacity-50" />
        
        <div className="container-custom py-16 md:py-24 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20 text-sm font-medium">
              <Calendar className="h-4 w-4" />
              Latest Updates
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-heading tracking-tight">
              Blog
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              News, tutorials, and insights about open source software and the AppForge platform.
            </p>
          </div>
        </div>
      </div>

      <div className="container-custom py-12 md:py-16">
        {/* Featured Post */}
        <div className="mb-16">
          <Link href={`/blog/${blogPosts[0].slug}`} className="group block">
            <div className="glass-card rounded-3xl overflow-hidden hover:border-primary/50 transition-all duration-300">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-video md:aspect-auto relative overflow-hidden">
                  <Image 
                    src={blogPosts[0].image} 
                    alt={blogPosts[0].title}
                    width={800}
                    height={450}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:hidden" />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                      {blogPosts[0].category}
                    </span>
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {blogPosts[0].readTime}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold font-heading mb-4 group-hover:text-primary transition-colors">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <User className="h-4 w-4" />
                      {blogPosts[0].author}
                      <span>•</span>
                      {new Date(blogPosts[0].date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}
                    </div>
                    <span className="text-primary font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read more <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
              <article className="glass-card rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
                <div className="aspect-video relative overflow-hidden">
                  <Image 
                    src={post.image} 
                    alt={post.title}
                    width={600}
                    height={340}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    unoptimized
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground text-xs font-medium">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-grow">
                    {post.excerpt}
                  </p>
                  <div className="text-xs text-muted-foreground flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })}
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
