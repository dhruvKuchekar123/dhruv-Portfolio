export const NAV = {
  root: "portfolio-nav",
  brand: "nav-brand",
  linkAbout: "nav-link-about",
  linkSkills: "nav-link-skills",
  linkProjects: "nav-link-projects",
  linkExperience: "nav-link-experience",
  linkContact: "nav-link-contact",
  resumeBtn: "nav-resume-btn",
  mobileToggle: "nav-mobile-toggle",
  mobileMenu: "nav-mobile-menu",
};

export const HERO = {
  root: "hero-section",
  name: "hero-name",
  role: "hero-role",
  intro: "hero-intro",
  ctaProjects: "hero-cta-projects",
  ctaResume: "hero-cta-resume",
  ctaContact: "hero-cta-contact",
  portrait: "hero-portrait",
  availability: "hero-availability",
};

export const ABOUT_IDS = {
  root: "about-section",
  headline: "about-headline",
  paragraph: "about-paragraph",
};

export const SKILLS_IDS = {
  root: "skills-section",
  group: (name) => `skills-group-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
  item: (name) => `skill-item-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
};

export const PROJECTS_IDS = {
  root: "projects-section",
  filter: (name) =>
    `projects-filter-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`,
  grid: "projects-grid",
  card: (slug) => `project-card-${slug}`,
  expand: (slug) => `project-expand-${slug}`,
  github: (slug) => `project-github-${slug}`,
  live: (slug) => `project-live-${slug}`,
  video: (slug) => `project-video-${slug}`,
  shot: (slug, i) => `project-shot-${slug}-${i}`,
  lightbox: "project-lightbox",
};

export const EXPERIENCE_IDS = {
  root: "experience-section",
  item: (i) => `experience-item-${i}`,
};

export const CERTS_IDS = {
  root: "certifications-section",
  item: (i) => `certification-item-${i}`,
};

export const CONTACT_IDS = {
  root: "contact-section",
  form: "contact-form",
  name: "contact-name",
  email: "contact-email",
  subject: "contact-subject",
  message: "contact-message",
  honeypot: "contact-honeypot",
  submit: "contact-submit",
  emailLink: "contact-email-link",
  githubLink: "contact-github-link",
  linkedinLink: "contact-linkedin-link",
  successBanner: "contact-success",
  errorBanner: "contact-error",
};

export const FOOTER_IDS = {
  root: "site-footer",
  backTop: "footer-back-top",
};
