import { FileText, Scale, AlertCircle, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Terms of Service - AppForge',
  description: 'Terms and conditions for using the AppForge platform.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen pb-20 pt-20">
      {/* Hero Section */}
      <div className="relative overflow-hidden border-b bg-background">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-500/10 via-background to-background pointer-events-none" />
        
        <div className="container-custom py-16 md:py-20 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-500/10 text-slate-600 dark:text-slate-400 border border-slate-500/20 text-sm font-medium">
              <FileText className="h-4 w-4" />
              Legal
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-heading tracking-tight">
              Terms of Service
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
              <Scale className="h-6 w-6 text-primary" />
              <h2 className="text-xl font-bold m-0">Agreement</h2>
            </div>
            <p className="text-muted-foreground m-0">
              By using AppForge, you agree to these terms. Please read them carefully.
            </p>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-bold mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By accessing or using AppForge, you agree to be bound by these Terms of Service. 
                If you disagree with any part of the terms, you may not access the service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4">2. Use of Service</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>AppForge provides a platform to discover and access open source software. You agree to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Use the service only for lawful purposes</li>
                  <li>Not attempt to gain unauthorized access to our systems</li>
                  <li>Not use the service to distribute malware or harmful content</li>
                  <li>Respect the intellectual property rights of software developers</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4">3. Software Downloads</h2>
              <div className="glass-card rounded-xl p-6 bg-amber-500/5 border-amber-500/20">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-muted-foreground">
                    <p className="font-semibold text-foreground mb-1">Important Disclaimer</p>
                    <p>
                      Software available through AppForge is provided by third-party developers. 
                      While we make efforts to verify safety, we cannot guarantee the security of 
                      all applications. Download and install software at your own risk.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4">4. Intellectual Property</h2>
              <p className="text-muted-foreground">
                AppForge respects the intellectual property rights of others. All software listed 
                on our platform is subject to its respective open source license. The AppForge 
                platform itself is licensed under the MIT License.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4">5. Limitation of Liability</h2>
              <p className="text-muted-foreground">
                AppForge is provided &quot;as is&quot; without warranties of any kind. We are not liable 
                for any damages arising from the use of our service or any software downloaded 
                through our platform.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4">6. Changes to Terms</h2>
              <p className="text-muted-foreground">
                We reserve the right to modify these terms at any time. We will notify users of 
                significant changes by posting a notice on our website.
              </p>
            </section>

            <div className="glass-card rounded-xl p-6 bg-primary/5 border-primary/20">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="font-semibold mb-1">Questions about these terms?</p>
                  <p className="text-muted-foreground">
                    Contact us at{' '}
                    <a href="mailto:legal@appforge.dev" className="text-primary hover:underline">
                      legal@appforge.dev
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
