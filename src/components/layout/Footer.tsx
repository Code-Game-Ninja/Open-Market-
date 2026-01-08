'use client';

import Link from 'next/link';
import { Heart, Twitter, Github, Linkedin, Mail, ArrowUpRight, Sparkles, Zap, LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

// Custom AppForge Logo Component
function AppForgeLogo({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M4 18h16v2H4v-2z" fill="currentColor" opacity="0.8" />
      <path d="M6 14h12l2 4H4l2-4z" fill="currentColor" />
      <path d="M8 10h8v4H8v-4z" fill="currentColor" opacity="0.9" />
      <path d="M12 4l1 2h-2l1-2z" fill="currentColor" />
      <circle cx="9" cy="6" r="1" fill="currentColor" opacity="0.6" />
      <circle cx="15" cy="7" r="0.8" fill="currentColor" opacity="0.5" />
    </svg>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-950 text-white overflow-hidden">
      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ 
            x: [0, 100, 0], 
            y: [0, -50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-gradient-to-r from-blue-600/30 to-cyan-500/20 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            x: [0, -80, 0], 
            y: [0, 60, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-gradient-to-r from-purple-600/30 to-pink-500/20 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            x: [0, 50, 0], 
            y: [0, -30, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-emerald-600/20 to-teal-500/10 rounded-full blur-[100px]" 
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Main Content */}
      <div className="relative z-10">
        {/* Top CTA Section */}
        <div className="border-b border-white/10">
          <div className="container-custom py-16">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold font-heading mb-2 flex items-center gap-3 justify-center md:justify-start">
                  <Sparkles className="h-6 w-6 text-amber-400" />
                  Ready to explore?
                </h3>
                <p className="text-slate-400">
                  Discover thousands of open source apps waiting for you.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/apps" 
                  className="group px-6 py-3 bg-white text-slate-900 rounded-full font-semibold hover:bg-slate-100 transition-all flex items-center gap-2"
                >
                  Browse Apps
                  <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
                <Link 
                  href="/submit" 
                  className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full font-semibold hover:bg-white/20 transition-all"
                >
                  Submit App
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="container-custom py-16">
          <div className="grid grid-cols-2 md:grid-cols-12 gap-8 md:gap-12">
            {/* Brand Column */}
            <div className="col-span-2 md:col-span-4 space-y-6">
              <Link href="/" className="inline-flex items-center space-x-3 group">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
                  <div className="relative rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 p-2.5 text-white shadow-lg">
                    <AppForgeLogo className="h-6 w-6" />
                  </div>
                </div>
                <span className="text-2xl font-bold font-heading tracking-tight">
                  <span className="text-orange-400">App</span>
                  <span className="text-white">Forge</span>
                </span>
              </Link>
              <p className="text-slate-400 leading-relaxed">
                The ultimate destination for discovering, downloading, and sharing 
                open source applications. Free forever.
              </p>
              <div className="flex items-center gap-3">
                <SocialLink icon={Github} href="https://github.com/Code-Game-Ninja/Open-Market-" label="GitHub" />
                <SocialLink icon={Twitter} href="https://twitter.com" label="Twitter" />
                <SocialLink icon={Linkedin} href="https://linkedin.com" label="LinkedIn" />
                <SocialLink icon={Mail} href="mailto:hello@appforge.dev" label="Email" />
              </div>
            </div>

            {/* Discover Links */}
            <div className="md:col-span-2 space-y-4">
              <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">Discover</h4>
              <ul className="space-y-3">
                <FooterLink href="/apps">Browse Apps</FooterLink>
                <FooterLink href="/categories">Categories</FooterLink>
                <FooterLink href="/featured">Featured</FooterLink>
                <FooterLink href="/trending">Trending</FooterLink>
              </ul>
            </div>

            {/* Community Links */}
            <div className="md:col-span-2 space-y-4">
              <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">Community</h4>
              <ul className="space-y-3">
                <FooterLink href="/submit">Submit App</FooterLink>
                <FooterLink href="/guidelines">Guidelines</FooterLink>
                <FooterLink href="/contributors">Contributors</FooterLink>
                <FooterLink href="/blog">Blog</FooterLink>
              </ul>
            </div>

            {/* Legal Links */}
            <div className="md:col-span-2 space-y-4">
              <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">Legal</h4>
              <ul className="space-y-3">
                <FooterLink href="/privacy">Privacy Policy</FooterLink>
                <FooterLink href="/terms">Terms of Service</FooterLink>
                <FooterLink href="/cookies">Cookie Policy</FooterLink>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="col-span-2 space-y-4">
              <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">Newsletter</h4>
              <p className="text-sm text-slate-400">
                Get weekly updates on the best new open source apps.
              </p>
              <form className="relative" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="your@email.com" 
                  className="w-full h-12 pl-4 pr-24 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all text-sm"
                />
                <button 
                  type="submit"
                  className="absolute right-1.5 top-1.5 h-9 px-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg text-sm font-medium transition-all flex items-center gap-1.5"
                >
                  <Zap className="h-3.5 w-3.5" />
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="container-custom py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-slate-500 text-sm">
                © {currentYear} AppForge. Open source under MIT License.
              </p>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <span>Crafted with</span>
                <Heart className="h-4 w-4 text-red-500 fill-red-500 animate-pulse" />
                <span>for the open source community</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ icon: Icon, href, label }: { icon: LucideIcon, href: string, label: string }) {
  return (
    <Link 
      href={href} 
      target="_blank"
      className="p-2.5 rounded-xl bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white hover:scale-110 transition-all duration-300 border border-white/5 hover:border-white/20"
      aria-label={label}
    >
      <Icon className="h-5 w-5" />
    </Link>
  );
}

function FooterLink({ href, children }: { href: string, children: React.ReactNode }) {
  return (
    <li>
      <Link 
        href={href} 
        className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-1 group"
      >
        <span className="group-hover:translate-x-1 transition-transform">{children}</span>
      </Link>
    </li>
  );
}
