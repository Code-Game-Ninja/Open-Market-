import { Cookie, Settings, ToggleLeft, Info } from 'lucide-react';

export const metadata = {
  title: 'Cookie Policy - AppForge',
  description: 'Information about how AppForge uses cookies.',
};

export default function CookiesPage() {
  return (
    <div className="min-h-screen pb-20 pt-20">
      {/* Hero Section */}
      <div className="relative overflow-hidden border-b bg-background">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-background to-background pointer-events-none" />
        
        <div className="container-custom py-16 md:py-20 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20 text-sm font-medium">
              <Cookie className="h-4 w-4" />
              Legal
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-heading tracking-tight">
              Cookie Policy
            </h1>
            <p className="text-muted-foreground">
              Last updated: January 1, 2026
            </p>
          </div>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="max-w-3xl mx-auto">
          <div className="glass-card rounded-2xl p-8 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Info className="h-6 w-6 text-primary" />
              <h2 className="text-xl font-bold m-0">What Are Cookies?</h2>
            </div>
            <p className="text-muted-foreground m-0">
              Cookies are small text files stored on your device when you visit a website. 
              They help websites remember your preferences and improve your experience.
            </p>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Settings className="h-5 w-5 text-primary" />
                Cookies We Use
              </h2>
              <div className="space-y-4">
                <CookieItem 
                  name="Essential Cookies"
                  description="Required for the website to function properly. These cannot be disabled."
                  examples={['Session management', 'Security tokens', 'Load balancing']}
                  required
                />
                <CookieItem 
                  name="Analytics Cookies"
                  description="Help us understand how visitors interact with our website."
                  examples={['Page views', 'Time on site', 'Navigation patterns']}
                />
                <CookieItem 
                  name="Preference Cookies"
                  description="Remember your settings and preferences."
                  examples={['Theme preference (dark/light)', 'Language settings']}
                />
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <ToggleLeft className="h-5 w-5 text-primary" />
                Managing Cookies
              </h2>
              <p className="text-muted-foreground mb-4">
                You can control and manage cookies in several ways:
              </p>
              <ul className="text-muted-foreground space-y-2 list-disc pl-6">
                <li>
                  <strong>Browser Settings:</strong> Most browsers allow you to refuse or delete cookies 
                  through their settings menu.
                </li>
                <li>
                  <strong>Third-Party Tools:</strong> Various browser extensions can help manage cookies 
                  and tracking.
                </li>
                <li>
                  <strong>Our Settings:</strong> We provide options to manage non-essential cookies 
                  where applicable.
                </li>
              </ul>
            </section>

            <section className="glass-card rounded-xl p-6 bg-blue-500/5 border-blue-500/20">
              <h3 className="font-bold mb-2">Minimal Cookie Usage</h3>
              <p className="text-muted-foreground text-sm">
                AppForge is designed with privacy in mind. We use minimal cookies and do not 
                use cookies for advertising or cross-site tracking. Your privacy matters to us.
              </p>
            </section>

            <section className="glass-card rounded-xl p-6 bg-primary/5 border-primary/20">
              <h3 className="font-bold mb-2">Questions?</h3>
              <p className="text-muted-foreground text-sm">
                If you have questions about our cookie policy, contact us at{' '}
                <a href="mailto:privacy@appforge.dev" className="text-primary hover:underline">
                  privacy@appforge.dev
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

function CookieItem({ 
  name, 
  description, 
  examples, 
  required = false 
}: { 
  name: string; 
  description: string; 
  examples: string[];
  required?: boolean;
}) {
  return (
    <div className="glass-card rounded-xl p-6">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-semibold">{name}</h3>
        {required && (
          <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">
            Required
          </span>
        )}
      </div>
      <p className="text-sm text-muted-foreground mb-3">{description}</p>
      <div className="flex flex-wrap gap-2">
        {examples.map((example) => (
          <span key={example} className="text-xs px-2 py-1 rounded bg-secondary text-secondary-foreground">
            {example}
          </span>
        ))}
      </div>
    </div>
  );
}
