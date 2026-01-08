import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Star, GitFork, ExternalLink, Download, AlertCircle, CheckCircle2, FileArchive, Smartphone } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { getRepository, getReadme, getReleases } from '@/lib/github';
import { mapRepoToApp } from '@/lib/adapters';

export const revalidate = 3600;

interface PageProps {
  params: {
    owner: string;
    repo: string;
  };
}

export async function generateMetadata({ params }: PageProps) {
  const { owner, repo: repoName } = params;
  const repo = await getRepository(owner, repoName);
  
  if (!repo) {
    return {
      title: 'App Not Found - OpenStore',
    };
  }

  return {
    title: `${repo.name} - OpenStore`,
    description: repo.description,
  };
}

function getFileIcon(filename: string) {
  const lower = filename.toLowerCase();
  if (lower.endsWith('.apk')) return <Smartphone className="h-4 w-4" />;
  if (lower.endsWith('.zip') || lower.endsWith('.tar.gz') || lower.endsWith('.gz')) return <FileArchive className="h-4 w-4" />;
  if (lower.endsWith('.exe') || lower.endsWith('.msi')) return <Download className="h-4 w-4" />;
  if (lower.endsWith('.dmg') || lower.endsWith('.pkg')) return <Download className="h-4 w-4" />;
  if (lower.endsWith('.deb') || lower.endsWith('.rpm') || lower.endsWith('.appimage')) return <Download className="h-4 w-4" />;
  return <Download className="h-4 w-4" />;
}

function formatBytes(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
}

export default async function AppPage({ params }: PageProps) {
  const { owner, repo: repoName } = params;
  
  const repo = await getRepository(owner, repoName);

  if (!repo) {
    return (
      <div className="container-custom py-20 text-center">
        <div className="glass-card rounded-2xl p-12 max-w-md mx-auto">
          <AlertCircle className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
          <h1 className="text-3xl font-bold mb-4">App not found</h1>
          <p className="text-muted-foreground mb-8">The repository &quot;{owner}/{repoName}&quot; could not be retrieved from GitHub.</p>
          <Link href="/apps" className="btn-primary">Back to Apps</Link>
        </div>
      </div>
    );
  }

  const readme = await getReadme(owner, repoName);
  const releases = await getReleases(owner, repoName);

  const app = await mapRepoToApp(repo);
  const latestRelease = releases && releases.length > 0 ? releases[0] : null;
  
  const downloadableAssets = latestRelease?.assets.filter(asset => {
    const name = asset.name.toLowerCase();
    return name.endsWith('.apk') || 
           name.endsWith('.zip') || 
           name.endsWith('.exe') || 
           name.endsWith('.dmg') ||
           name.endsWith('.deb') ||
           name.endsWith('.rpm') ||
           name.endsWith('.appimage') ||
           name.endsWith('.tar.gz') ||
           name.endsWith('.msi') ||
           name.endsWith('.pkg');
  }) || [];

  return (
    <div className="min-h-screen pb-20 pt-24">
      <div className="relative overflow-hidden border-b bg-background">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background pointer-events-none" />
        
        <div className="container-custom py-12 md:py-16 relative z-10">
          <Link href="/apps" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-8 transition-colors group">
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" /> Back to apps
          </Link>

          <div className="flex flex-col lg:flex-row items-start gap-8">
            <div className="h-32 w-32 md:h-40 md:w-40 rounded-2xl bg-white dark:bg-slate-900 shadow-xl flex items-center justify-center border border-white/20 p-6 flex-shrink-0 backdrop-blur-sm">
               {app.logo ? (
                  <Image 
                    src={app.logo} 
                    alt={app.name} 
                    width={160}
                    height={160}
                    className="h-full w-full object-contain drop-shadow-md" 
                    unoptimized
                  />
                ) : (
                  <div className="text-5xl font-bold font-heading text-primary/40">{app.name.charAt(0)}</div>
                )}
            </div>

            <div className="flex-grow space-y-6 min-w-0">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold font-heading tracking-tight break-words">{app.name}</h1>
                <p className="text-xl text-muted-foreground mt-3 leading-relaxed">{app.shortDescription}</p>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-sm font-medium">
                <Link href={`/apps?category=${app.category}`} className="inline-flex items-center rounded-full bg-secondary/80 px-4 py-1.5 text-secondary-foreground hover:bg-secondary transition-colors border border-border/50">
                  {app.category}
                </Link>
                <div className="flex flex-wrap items-center gap-4 md:gap-6 text-muted-foreground">
                  <span className="flex items-center text-amber-500/90" title="Stars">
                    <Star className="mr-1.5 h-4 w-4 fill-current" /> {app.stats.stars.toLocaleString()}
                  </span>
                  <span className="flex items-center text-blue-500/90" title="Forks">
                    <GitFork className="mr-1.5 h-4 w-4" /> {app.stats.forks.toLocaleString()}
                  </span>
                  <span className="flex items-center">
                   Verified by <span className="text-foreground ml-1">{app.maintainer.name}</span>
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 w-full lg:w-auto lg:min-w-[240px]">
              {downloadableAssets.length > 0 ? (
                <>
                  <a 
                    href={downloadableAssets[0].browser_download_url} 
                    download
                    className="btn-primary h-12 text-base w-full shadow-lg shadow-primary/25"
                  >
                    {getFileIcon(downloadableAssets[0].name)}
                    <span className="ml-2">Download {downloadableAssets[0].name.split('.').pop()?.toUpperCase()}</span>
                  </a>
                  {latestRelease && (
                    <div className="text-xs text-center text-muted-foreground flex flex-col gap-1">
                      <span className="font-mono bg-secondary px-2 py-0.5 rounded">v{latestRelease.tag_name}</span>
                      <span className="text-muted-foreground/60">{formatBytes(downloadableAssets[0].size)}</span>
                    </div>
                  )}
                </>
              ) : (
                <>
                  <a 
                    href={latestRelease ? latestRelease.html_url : repo.html_url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-primary h-12 text-base w-full shadow-lg shadow-primary/25"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    {latestRelease ? 'Get Latest Version' : 'View on GitHub'}
                  </a>
                  {latestRelease && (
                    <div className="text-xs text-center text-muted-foreground">
                      <span className="font-mono bg-secondary px-2 py-0.5 rounded">v{latestRelease.tag_name}</span>
                    </div>
                  )}
                </>
              )}
              
              <a 
                href={repo.html_url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-outline h-12 w-full"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Source Code
              </a>
              
              {downloadableAssets.length > 1 && (
                <details className="glass-card rounded-lg p-3 cursor-pointer">
                  <summary className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                    More Downloads ({downloadableAssets.length - 1})
                  </summary>
                  <div className="mt-3 space-y-2">
                    {downloadableAssets.slice(1).map((asset) => (
                      <a
                        key={asset.id}
                        href={asset.browser_download_url}
                        download
                        className="flex items-center justify-between p-2 rounded-lg hover:bg-secondary/50 transition-colors text-sm"
                      >
                        <div className="flex items-center gap-2 min-w-0">
                          {getFileIcon(asset.name)}
                          <span className="truncate">{asset.name}</span>
                        </div>
                        <span className="text-xs text-muted-foreground flex-shrink-0 ml-2">
                          {formatBytes(asset.size)}
                        </span>
                      </a>
                    ))}
                  </div>
                </details>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div className="glass-card rounded-2xl p-6 md:p-10 min-h-[500px]">
               {readme ? (
                 <article className="prose prose-zinc dark:prose-invert max-w-none prose-headings:font-heading prose-a:text-primary prose-img:rounded-xl prose-pre:bg-secondary/50">
                   <ReactMarkdown>
                     {readme}
                   </ReactMarkdown>
                 </article>
               ) : (
                 <div className="flex flex-col items-center justify-center h-64 text-center text-muted-foreground">
                   <AlertCircle className="h-10 w-10 mb-4 opacity-20" />
                   <p className="text-lg">No README available for this repository.</p>
                 </div>
               )}
            </div>
          </div>

          <div className="space-y-6 lg:sticky lg:top-24 h-fit">
            <div className="glass-card rounded-xl p-6">
              <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                App Details
              </h3>
              <dl className="space-y-4 text-sm divide-y divide-border/50">
                <div className="flex justify-between py-2 first:pt-0">
                  <dt className="text-muted-foreground">License</dt>
                  <dd className="font-medium text-foreground">{app.license}</dd>
                </div>
                <div className="flex justify-between py-2">
                  <dt className="text-muted-foreground">Last Updated</dt>
                  <dd className="font-medium text-foreground">{new Date(app.lastUpdated).toLocaleDateString()}</dd>
                </div>
                <div className="flex justify-between py-2">
                  <dt className="text-muted-foreground">Open Issues</dt>
                  <dd className="font-medium text-foreground">{app.stats.openIssues}</dd>
                </div>
                <div className="flex justify-between py-2">
                   <dt className="text-muted-foreground">Platforms</dt>
                   <dd className="font-medium text-right gap-1 flex flex-wrap justify-end">
                      {app.platforms.map(p => (
                         <span key={p} className="capitalize px-1.5 py-0.5 bg-secondary rounded text-xs">{p}</span>
                      ))}
                   </dd>
                </div>
              </dl>
            </div>

            <div className="glass-card rounded-xl p-6 border-l-4 border-l-amber-500/50">
              <h3 className="font-bold text-lg mb-4">Security & Privacy</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground"><strong className="text-foreground">Open Source:</strong> Code is publicly available for audit.</span>
                </li>
                 <li className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground"><strong className="text-foreground">Community Build:</strong> This build is not verified by the original author.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
