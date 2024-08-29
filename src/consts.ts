import type { Links, Page, Site, Socials } from '@types';

// Global
export const SITE: Site = {
  TITLE: 'SP Technologies',
  DESCRIPTION: 'Welcome to SP Technologies - where dreams come true.',
  AUTHOR: 'Andras Hejj',
};

// Blog Page
export const BLOG: Page = {
  TITLE: 'Blog',
  DESCRIPTION: 'Writing on topics I am passionate about.',
};

// Projects Page
export const PROJECTS: Page = {
  TITLE: 'Projects',
  DESCRIPTION: 'Recent projects I have worked on.',
};

// Search Page
export const SEARCH: Page = {
  TITLE: 'Search',
  DESCRIPTION: 'Search all posts and projects by keyword.',
};

// Links
export const LINKS: Links = [
  {
    TEXT: 'Home',
    HREF: '/',
  },
  {
    TEXT: 'Projects',
    HREF: '/projects',
  },
];

// Socials
export const SOCIALS: Socials = [
  {
    NAME: 'Email',
    ICON: 'email',
    TEXT: 'info@sptech.ch',
    HREF: 'mailto:info@sptech.ch',
  },
];
