import { Shield, Eye, Database, Lock, UserCheck, Globe } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy - AppForge',
  description: 'Learn how AppForge handles your data and protects your privacy.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen pb-20 pt-20">
      {/* Hero Section */}
      <div className="relative overflow-hidden border-b bg-background">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-background to-background pointer-events-none" />
        
        <div className="container-custom py-16 md:py-20 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 text-sm font-medium">
              <Shield className="h-4 w-4" />
              Legal
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-heading tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground">
              Last updated: January 1, 2026
            </p>
          </div>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="max-w-3xl mx-auto prose prose-slate dark:prose-invert">
          <div className="glass-card rounded-2xl p-8 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Eye className="h-6 w-6 text-primary" />
              <h2 className="text-xl font-bold m-0">Overview</h2>
            </div>
            <p className="text-muted-foreground m-0">
              AppForge is committed to protecting your privacy. This policy explains how we collect, 
              use, and safeguard your information when you use our platform.
            </p>
          </div>

          <section className="space-y-6">
            <div>
              <h2 className="flex items-center gap-2 text-xl font-bold">
                <Database className="h-5 w-5 text-primary" />
                Information We Collect
              </h2>
              <ul className="text-muted-foreground space-y-2">
                <li><strong>Usage Data:</strong> We collect anonymous usage statistics to improve our service, including pages visited and search queries.</li>
                <li><strong>Device Information:</strong> Basic device information like browser type and operating system for compatibility purposes.</li>
                <li><strong>GitHub Data:</strong> When you submit an app, we fetch public repository information from GitHub&apos;s API.</li>
              </ul>
            </div>

            <div>
              <h2 className="flex items-center gap-2 text-xl font-bold">
                <Lock className="h-5 w-5 text-primary" />
                How We Use Your Information
              </h2>
              <ul className="text-muted-foreground space-y-2">
                <li>To provide and maintain the AppForge service</li>
                <li>To improve user experience and platform functionality</li>
                <li>To detect and prevent abuse or security issues</li>
                <li>To communicate important updates (if you subscribe)</li>
              </ul>
            </div>

            <div>
              <h2 className="flex items-center gap-2 text-xl font-bold">
                <UserCheck className="h-5 w-5 text-primary" />
                Your Rights
              </h2>
              <p className="text-muted-foreground">
                You have the right to access, correct, or delete your personal data. 
                Since we collect minimal data and don&apos;t require accounts, most users 
                don&apos;t have personal data stored with us.
              </p>
            </div>

            <div>
              <h2 className="flex items-center gap-2 text-xl font-bold">
                <Globe className="h-5 w-5 text-primary" />
                Third-Party Services
              </h2>
              <p className="text-muted-foreground">
                We use GitHub&apos;s API to fetch repository information. Please refer to 
                GitHub&apos;s privacy policy for information about how they handle data. 
                We do not sell or share your data with any other third parties.
              </p>
            </div>

            <div className="glass-card rounded-xl p-6 bg-primary/5 border-primary/20">
              <h3 className="font-bold mb-2">Questions?</h3>
              <p className="text-muted-foreground text-sm m-0">
                If you have any questions about this Privacy Policy, please contact us at{' '}
                <a href="mailto:privacy@appforge.dev" className="text-primary hover:underline">
                  privacy@appforge.dev
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
