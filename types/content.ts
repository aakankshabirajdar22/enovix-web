export type Service = {
  slug: string;
  title: string;
  summary: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  summary: string;
  image: string;
  services: readonly string[];
};

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image?: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type ServiceProcessStep = {
  title: string;
  description: string;
};

export type ServicePageContent = {
  slug: string;
  metaTitle: string;
  heroTitleTop: string;
  heroTitleHighlight: string;
  heroImage: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  process: readonly ServiceProcessStep[];
  faq: readonly FaqItem[];
};
