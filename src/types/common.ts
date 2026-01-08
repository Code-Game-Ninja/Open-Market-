// Common Types for AppForge

// Filter state for app listing
export interface FilterState {
  search: string;
  categories: string[];
  platforms: string[];
  minStars: number | null;
  updatedWithin: 'week' | 'month' | 'year' | null;
  licenses: string[];
}

// Sort options
export type SortOption = 'stars' | 'updated' | 'name' | 'downloads';

// View mode
export type ViewMode = 'grid' | 'list';

// Pagination
export interface PaginationState {
  page: number;
  perPage: number;
  totalItems: number;
  totalPages: number;
}

// API Response wrapper
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  error?: string;
  pagination?: PaginationState;
}

// Theme
export type Theme = 'light' | 'dark' | 'system';

// Navigation item
export interface NavItem {
  label: string;
  href: string;
  icon?: string;
  external?: boolean;
}

// Social link
export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

// FAQ item
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

// Step item for instructions
export interface Step {
  number: number;
  title: string;
  description: string;
  code?: string;
  language?: string;
}

// Feature item
export interface Feature {
  icon: string;
  title: string;
  description: string;
}

// Technology item
export interface Technology {
  name: string;
  icon: string;
  url: string;
  description?: string;
}

// Contributor
export interface Contributor {
  name: string;
  username: string;
  avatar: string;
  githubUrl: string;
  contributions?: number;
}

// Toast notification
export interface Toast {
  id: string;
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
  duration?: number;
}

// Breadcrumb item
export interface BreadcrumbItem {
  label: string;
  href?: string;
}

// Select option
export interface SelectOption {
  value: string;
  label: string;
  icon?: string;
  disabled?: boolean;
}

// Tab item
export interface TabItem {
  id: string;
  label: string;
  icon?: string;
  badge?: string | number;
  disabled?: boolean;
}

// Accordion item
export interface AccordionItem {
  id: string;
  title: string;
  content: string;
  icon?: string;
}
