import type { Links, Page, Site, Socials } from "@types";

// Global
export const SITE: Site = {
  TITLE: "SP Technologies",
  DESCRIPTION: "We specialize in building and operating advanced data platforms, system integration, data science, and computer vision solutions.",
  AUTHOR: "SP Technologies",
};

// Projects Page
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects we have worked on.",
};

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
};

// Links
export const LINKS: Links = [
  {
    TEXT: "Home",
    HREF: "/",
  },
  {
    TEXT: "Projects",
    HREF: "/projects",
  },
  {
    TEXT: "Blog",
    HREF: "/blog",
  },
];

// Socials
export const SOCIALS: Socials = [
  {
    NAME: "Email",
    ICON: "email",
    TEXT: "info@sptech.ch",
    HREF: "mailto:info@sptech.ch",
  },
];
