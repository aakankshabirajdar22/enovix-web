export type Service = {
  slug: string;
  title: string;
  summary: string;
};

export type CaseStudyImage = {
  src: string | null;
  alt: string;
};

export type CaseStudyShowcaseSection = {
  title: string;
  image: CaseStudyImage;
  description: string;
};

export type CaseStudyTimeline = {
  image: CaseStudyImage;
  description: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  service: string;
  category: string;
  duration: string;
  developmentType: string;
  description: string;
  heroImage: CaseStudyImage;
  contentImages: readonly CaseStudyImage[];
  productShots: CaseStudyImage;
  showcaseSections: readonly CaseStudyShowcaseSection[];
  timeline: CaseStudyTimeline;
};

export type RecentWorkItem = {
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
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
