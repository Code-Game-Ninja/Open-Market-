import { BookOpen, CheckCircle2, XCircle, AlertTriangle, FileCode, Shield } from 'lucide-react';
import Link from 'next/link';
import { LucideIcon } from 'lucide-react';

export const metadata = {
  title: 'Submission Guidelines - AppForge',
  description: 'Learn how to submit your open source application to AppForge.',
};

export default function GuidelinesPage() {
  return (
    <div className="min-h-screen pb-20 pt-20">
      {/* Hero Section */}
      <div className="relative overflow-hidden border-b bg-background">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-background to-background pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl opacity-50" />
        
        <div className="container-custom py-16 md:py-24 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 text-sm font-medium">
              <BookOpen className="h-4 w-4" />
              Documentation
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-heading tracking-tight">
              Submission Guidelines
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Everything you need to know about listing your open source project on AppForge.
            </p>
          </div>
        </div>
      </div>

      <div className="container-custom py-12 md:py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Requirements Section */}
          <section className="glass-card rounded-2xl p-8">
            <h2 className="text-2xl font-bold font-heading mb-6 flex items-center gap-3">
              <Shield className="h-6 w-6 text-primary" />
              Requirements
            </h2>
            <div className="space-y-4">
              <Requirement 
                icon={CheckCircle2}
                title="Open Source License"
                description="Your project must have a valid open source license (MIT, GPL, Apache, BSD, etc.)"
                status="required"
              />
              <Requirement 
                icon={CheckCircle2}
                title="Public GitHub Repository"
                description="The repository must be publicly accessible on GitHub"
                status="required"
              />
              <Requirement 
                icon={CheckCircle2}
                title="README Documentation"
                description="Include a comprehensive README with installation and usage instructions"
                status="required"
              />
              <Requirement 
                icon={CheckCircle2}
                title="Downloadable Releases"
                description="Provide pre-built binaries or packages in GitHub Releases (recommended)"
                status="recommended"
              />
            </div>
          </section>

          {/* What We Accept */}
          <section className="glass-card rounded-2xl p-8">
            <h2 className="text-2xl font-bold font-heading mb-6 flex items-center gap-3">
              <FileCode className="h-6 w-6 text-green-500" />
              What We Accept
            </h2>
            <ul className="grid md:grid-cols-2 gap-4">
              {[
                'Desktop applications (Windows, macOS, Linux)',
                'Mobile apps (Android APKs, iOS)',
                'Web applications',
                'CLI tools and utilities',
                'Developer tools and IDEs',
                'Games and entertainment software',
                'Productivity applications',
                'Security and privacy tools'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* What We Don't Accept */}
          <section className="glass-card rounded-2xl p-8">
            <h2 className="text-2xl font-bold font-heading mb-6 flex items-center gap-3">
              <XCircle className="h-6 w-6 text-red-500" />
              What We Don&apos;t Accept
            </h2>
            <ul className="grid md:grid-cols-2 gap-4">
              {[
                'Closed source or proprietary software',
                'Malware or harmful applications',
                'Projects without active maintenance',
                'Libraries or frameworks (code-only)',
                'Content that violates GitHub ToS',
                'Cryptocurrency mining software',
                'Spam or low-quality submissions',
                'Projects with security vulnerabilities'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-muted-foreground">
                  <XCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Best Practices */}
          <section className="glass-card rounded-2xl p-8">
            <h2 className="text-2xl font-bold font-heading mb-6 flex items-center gap-3">
              <AlertTriangle className="h-6 w-6 text-amber-500" />
              Best Practices
            </h2>
            <div className="space-y-6 text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Use Descriptive Topics</h3>
                <p>Add relevant GitHub topics to your repository (e.g., &quot;desktop&quot;, &quot;cli&quot;, &quot;productivity&quot;). This helps us categorize your app correctly.</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Provide Screenshots</h3>
                <p>Include screenshots or GIFs in your README to showcase your application&apos;s interface.</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Semantic Versioning</h3>
                <p>Use semantic versioning (v1.0.0) for your releases to help users understand update significance.</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Cross-Platform Support</h3>
                <p>If possible, provide builds for multiple platforms (Windows, macOS, Linux) to reach more users.</p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <div className="text-center py-8">
            <h3 className="text-2xl font-bold mb-4">Ready to submit?</h3>
            <p className="text-muted-foreground mb-6">Your app will be automatically indexed within minutes.</p>
            <Link href="/submit" className="btn-primary h-12 px-8 text-base">
              Submit Your App
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function Requirement({ 
  icon: Icon, 
  title, 
  description, 
  status 
}: { 
  icon: LucideIcon; 
  title: string; 
  description: string; 
  status: 'required' | 'recommended';
}) {
  return (
    <div className="flex items-start gap-4 p-4 rounded-xl bg-secondary/30 border border-border/50">
      <Icon className={`h-6 w-6 flex-shrink-0 ${status === 'required' ? 'text-green-500' : 'text-blue-500'}`} />
      <div>
        <div className="flex items-center gap-2">
          <h3 className="font-semibold">{title}</h3>
          <span className={`text-xs px-2 py-0.5 rounded-full ${
            status === 'required' 
              ? 'bg-green-500/10 text-green-600 dark:text-green-400' 
              : 'bg-blue-500/10 text-blue-600 dark:text-blue-400'
          }`}>
            {status}
          </span>
        </div>
        <p className="text-sm text-muted-foreground mt-1">{description}</p>
      </div>
    </div>
  );
}
