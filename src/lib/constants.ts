// App constants

export const SITE_NAME = 'AppForge';
export const SITE_DESCRIPTION = 'Discover and download the best open-source applications';
export const SITE_URL = 'https://appforge.dev';

// GitHub
export const GITHUB_REPO = 'https://github.com/Code-Game-Ninja/Open-Market-';
export const GITHUB_PROFILE = 'https://github.com/Code-Game-Ninja';
export const GITHUB_ISSUES = `${GITHUB_REPO}/issues`;
export const GITHUB_DISCUSSIONS = `${GITHUB_REPO}/discussions`;

// Navigation
export const NAV_ITEMS = [
  { label: 'Apps', href: '/apps' },
  { label: 'Submit', href: '/submit' },
  { label: 'About', href: '/about' },
];

// Footer links
export const FOOTER_LINKS = {
  product: [
    { label: 'Apps', href: '/apps' },
    { label: 'Submit App', href: '/submit' },
    { label: 'About', href: '/about' },
  ],
  resources: [
    { label: 'Documentation', href: '/docs' },
    { label: 'Guidelines', href: '/submit#guidelines' },
    { label: 'FAQ', href: '/submit#faq' },
  ],
  social: [
    { label: 'GitHub', href: GITHUB_REPO, external: true },
    { label: 'Twitter', href: 'https://twitter.com/appforge', external: true },
    { label: 'Discord', href: 'https://discord.gg/appforge', external: true },
  ],
};

// Filter options
export const STARS_FILTER_OPTIONS = [
  { value: '10000', label: '10,000+' },
  { value: '5000', label: '5,000+' },
  { value: '1000', label: '1,000+' },
  { value: '500', label: '500+' },
  { value: '100', label: '100+' },
  { value: '0', label: 'Any' },
];

export const UPDATED_FILTER_OPTIONS = [
  { value: 'week', label: 'This week' },
  { value: 'month', label: 'This month' },
  { value: 'year', label: 'This year' },
  { value: 'any', label: 'Any time' },
];

export const SORT_OPTIONS = [
  { value: 'stars', label: 'Most Stars' },
  { value: 'updated', label: 'Recently Updated' },
  { value: 'name', label: 'Name (A-Z)' },
];

// Pagination
export const DEFAULT_PAGE_SIZE = 20;
export const PAGE_SIZE_OPTIONS = [12, 20, 40, 60];

// LocalStorage keys
export const STORAGE_KEYS = {
  THEME: 'appforge-theme',
  FAVORITES: 'appforge-favorites',
  VIEW_MODE: 'appforge-view-mode',
};

// Animation durations (ms)
export const ANIMATION = {
  FAST: 150,
  NORMAL: 300,
  SLOW: 500,
};

// Breakpoints (matching Tailwind)
export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  '2XL': 1536,
};
