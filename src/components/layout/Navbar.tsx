'use client';

import Link from 'next/link';
import { useState, KeyboardEvent, useEffect } from 'react';
import { Menu, X, Search, Github, Sparkles } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

// Custom AppForge Logo Component - Anvil/Forge inspired
function AppForgeLogo({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Anvil base */}
      <path 
        d="M4 18h16v2H4v-2z" 
        fill="currentColor" 
        opacity="0.8"
      />
      {/* Anvil body */}
      <path 
        d="M6 14h12l2 4H4l2-4z" 
        fill="currentColor"
      />
      {/* Anvil top */}
      <path 
        d="M8 10h8v4H8v-4z" 
        fill="currentColor"
        opacity="0.9"
      />
      {/* Hammer spark */}
      <path 
        d="M12 4l1 2h-2l1-2z" 
        fill="currentColor"
        className="animate-pulse"
      />
      {/* Sparks */}
      <circle cx="9" cy="6" r="1" fill="currentColor" opacity="0.6" className="animate-ping" style={{ animationDuration: '2s' }} />
      <circle cx="15" cy="7" r="0.8" fill="currentColor" opacity="0.5" className="animate-ping" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }} />
      <circle cx="12" cy="8" r="0.6" fill="currentColor" opacity="0.7" className="animate-ping" style={{ animationDuration: '3s', animationDelay: '1s' }} />
    </svg>
  );
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const query = e.currentTarget.value;
      if (query.trim()) {
        router.push(`/apps?q=${encodeURIComponent(query)}`);
        setIsOpen(false);
      }
    }
  };

  const links = [
    { name: 'Discover', href: '/apps' },
    { name: 'Categories', href: '/categories' },
    { name: 'Submit', href: '/submit' },
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'py-4' 
            : 'py-6'
        }`}
      >
        <div className="container-custom">
          <div className={`
            relative mx-auto rounded-full transition-all duration-300
            ${scrolled 
              ? 'bg-background/80 backdrop-blur-md shadow-lg border border-white/20 dark:border-white/10 px-6 h-16' 
              : 'bg-transparent px-4 h-16'
            }
            flex items-center justify-between
          `}>
            {/* Logo Section */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2.5 group">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 blur-lg opacity-30 group-hover:opacity-50 transition-opacity rounded-full" />
                  <div className="relative rounded-xl bg-gradient-to-br from-orange-500/20 to-amber-500/10 p-2 text-orange-500 ring-1 ring-orange-500/30 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg shadow-orange-500/20">
                    <AppForgeLogo className="h-5 w-5" />
                  </div>
                </div>
                <span className={`text-xl font-bold font-heading hidden sm:inline-block tracking-tight transition-colors`}>
                  <span className="text-orange-500">App</span>
                  <span className="text-foreground">Forge</span>
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:absolute md:left-1/2 md:-translate-x-1/2 md:flex items-center space-x-1">
              <div className={`
                p-1.5 rounded-full flex items-center space-x-1 border transition-all duration-300
                ${scrolled 
                  ? 'bg-secondary/50 border-transparent shadow-inner' 
                  : 'bg-background/50 border-border/50 backdrop-blur-sm'
                }
              `}>
                {links.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`
                      relative px-5 py-2 text-sm font-medium rounded-full transition-all duration-300
                      ${pathname === link.href
                        ? 'text-primary-foreground'
                        : 'text-muted-foreground hover:text-foreground'
                      }
                    `}
                  >
                    {pathname === link.href && (
                      <motion.div
                        layoutId="nav-pill"
                        className="absolute inset-0 bg-primary rounded-full shadow-lg shadow-primary/25"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className="relative z-10">{link.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              {/* Search Bar - Expandable */}
              <div className={`hidden md:flex relative group transition-all duration-300 ${searchFocused ? 'w-64' : 'w-10'}`}>
                <div 
                  className={`
                    absolute inset-y-0 left-0 flex items-center justify-center w-10 pointer-events-none z-10
                    ${searchFocused ? 'text-primary' : 'text-muted-foreground'}
                  `}
                >
                  <Search className="h-4 w-4" />
                </div>
                <input 
                  type="search" 
                  placeholder={searchFocused ? "Search apps..." : ""}
                  className={`
                    h-10 rounded-full border bg-background/50 backdrop-blur-sm px-3 pl-10 text-sm 
                    ring-offset-background placeholder:text-muted-foreground/0
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50
                    transition-all duration-300 ease-in-out
                    ${searchFocused 
                      ? 'w-full pl-10 border-primary/20 bg-background shadow-lg placeholder:text-muted-foreground' 
                      : 'w-10 border-transparent bg-transparent cursor-pointer hover:bg-secondary/50'
                    }
                  `}
                  onFocus={() => setSearchFocused(true)}
                  onBlur={(e) => {
                    if (!e.target.value) setSearchFocused(false);
                  }}
                  onKeyDown={handleSearch}
                />
              </div>

              {/* GitHub Link */}
              <Link 
                href="https://github.com/your-username/open-store"
                target="_blank"
                className="hidden sm:flex p-2 text-muted-foreground hover:text-foreground transition-colors hover:bg-secondary/80 rounded-full"
              >
                <Github className="h-5 w-5" />
              </Link>

              {/* Mobile Menu Button */}
              <div className="flex md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="inline-flex items-center justify-center rounded-full p-2 text-muted-foreground hover:bg-secondary hover:text-foreground focus:outline-none transition-colors"
                >
                  <span className="sr-only">Open main menu</span>
                  {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-xl z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div 
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="fixed top-24 left-4 right-4 z-50 md:hidden bg-card border border-border shadows-2xl rounded-3xl overflow-hidden p-6"
            >
              <div className="space-y-6">
                <div className="relative">
                   <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Search className="h-4 w-4 text-muted-foreground" />
                   </div>
                   <input 
                    type="search" 
                    placeholder="Search apps..." 
                    className="w-full h-12 rounded-2xl border border-border bg-secondary/30 px-3 pl-10 text-base focus:outline-none focus:ring-2 focus:ring-primary/50"
                    onKeyDown={handleSearch}
                    autoFocus
                  />
                </div>
                
                <nav className="grid gap-2">
                   {links.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className={`flex items-center justify-between p-4 rounded-2xl transition-all ${
                          pathname === link.href
                            ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20'
                            : 'bg-secondary/30 text-foreground hover:bg-secondary'
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        <span className="font-medium">{link.name}</span>
                        {pathname === link.href && <Sparkles className="h-4 w-4" />}
                      </Link>
                    ))}
                </nav>

                <div className="pt-6 border-t flex justify-center">
                  <Link 
                    href="https://github.com"
                    target="_blank"
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                  >
                    <Github className="h-5 w-5" />
                    <span>View on GitHub</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
