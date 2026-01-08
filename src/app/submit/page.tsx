'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Github, AlertCircle, CheckCircle2, Send, ArrowRight } from 'lucide-react';

export default function SubmitPage() {
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    let owner = '';
    let repo = '';

    try {
      const cleanUrl = url.trim();
      if (cleanUrl.includes('github.com')) {
        const parts = new URL(cleanUrl).pathname.split('/').filter(Boolean);
        if (parts.length >= 2) {
          owner = parts[0];
          repo = parts[1];
        }
      } else if (cleanUrl.split('/').length === 2) {
        [owner, repo] = cleanUrl.split('/');
      } else {
        throw new Error('Invalid format');
      }

      if (!owner || !repo) {
         throw new Error('Could not parse repository owner and name');
      }

      router.push(`/apps/${owner}/${repo}`);
    } catch {
      setError('Please enter a valid GitHub repository URL (e.g., https://github.com/owner/repo) or slug (owner/repo).');
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen pb-20 pt-20">
      {/* Hero Section */}
      <div className="relative overflow-hidden border-b bg-background">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        
        <div className="container-custom py-16 md:py-24 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium">
              <Github className="h-4 w-4" />
              GitHub Integration
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-heading tracking-tight">
              Submit Your App
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              AppForge automatically indexes applications from GitHub. 
              Just paste the repository link below and we&apos;ll fetch all the details instantly.
            </p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="container-custom py-12 md:py-16">
        <div className="max-w-2xl mx-auto">
          {/* Main Form Card */}
          <div className="glass-card rounded-2xl p-8 md:p-12 shadow-soft-lg border-2 border-border/50">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="repo-url" className="text-sm font-medium text-foreground">
                  GitHub Repository URL
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                    <Github className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <input
                    id="repo-url"
                    type="text"
                    placeholder="https://github.com/owner/repo"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="flex h-14 w-full rounded-xl border-2 border-input bg-background/50 px-4 pl-12 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-primary transition-all disabled:cursor-not-allowed disabled:opacity-50"
                    required
                  />
                </div>
                <p className="text-xs text-muted-foreground">
                  Example: https://github.com/microsoft/vscode or microsoft/vscode
                </p>
              </div>

              {error && (
                <div className="flex items-start gap-3 text-sm text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950/30 p-4 rounded-xl border border-red-200 dark:border-red-900/50">
                  <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span>{error}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="btn-primary h-14 w-full text-base shadow-lg shadow-primary/25 group"
              >
                {isLoading ? (
                  <>
                    <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    Index Repository
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="glass-card rounded-xl p-6 text-center space-y-3">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <Github className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold">Instant Sync</h3>
              <p className="text-sm text-muted-foreground">
                We fetch metadata directly from GitHub in real-time
              </p>
            </div>

            <div className="glass-card rounded-xl p-6 text-center space-y-3">
              <div className="h-12 w-12 rounded-full bg-green-500/10 flex items-center justify-center mx-auto">
                <CheckCircle2 className="h-6 w-6 text-green-500" />
              </div>
              <h3 className="font-semibold">Always Updated</h3>
              <p className="text-sm text-muted-foreground">
                Repository data refreshes every hour automatically
              </p>
            </div>

            <div className="glass-card rounded-xl p-6 text-center space-y-3">
              <div className="h-12 w-12 rounded-full bg-purple-500/10 flex items-center justify-center mx-auto">
                <Send className="h-6 w-6 text-purple-500" />
              </div>
              <h3 className="font-semibold">No Approval</h3>
              <p className="text-sm text-muted-foreground">
                Public repositories are indexed immediately
              </p>
            </div>
          </div>

          {/* Guidelines */}
          <div className="glass-card rounded-xl p-8 mt-12">
            <h2 className="text-xl font-bold mb-6 font-heading">Submission Guidelines</h2>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span>Repository must be <strong className="text-foreground">public</strong> on GitHub</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span>Should contain a <strong className="text-foreground">README.md</strong> with app description</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span>Include <strong className="text-foreground">releases</strong> with downloadable binaries (optional)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span>Add <strong className="text-foreground">topics/tags</strong> for better discoverability</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span>Include a valid <strong className="text-foreground">open source license</strong></span>
              </li>
            </ul>
          </div>

          {/* Footer Note */}
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              By submitting, you confirm the repository is public and complies with our terms.
              We fetch metadata, releases, and readme files directly from GitHub API.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
