import { brandingFaqItems, servicesFaqItems } from "@/content/faq";
import type { Service, ServicePageContent } from "@/types/content";

export const services: readonly Service[] = [];

export const servicePages: Readonly<Record<string, ServicePageContent>> = {
  "ui-ux": {
    slug: "ui-ux",
    metaTitle: "UI/UX Designing",
    heroTitleTop: "Uiux",
    heroTitleHighlight: "Designing",
    heroImage: {
      src: "/images/services/uiux-hero.png",
      alt: "UI/UX design process preview",
      width: 1280,
      height: 720,
    },
    process: [
      {
        title: "Discuss",
        description:
          "We start by understanding your business, goals, audience, and market before choosing the right web solution. For small businesses, we use WordPress for fast, flexible website development. For larger projects, we plan custom features, systems, and scalable code around your exact needs and future growth, without wasting time, budget, or effort unnecessarily.",
      },
      {
        title: "Ideate",
        description:
          "We turn your strategy and design into fast, responsive websites built for real users. WordPress helps us launch smaller websites quickly, while custom coding gives larger projects the flexibility, speed, security, and control needed for complex business and digital product requirements at scale.",
      },
      {
        title: "Ideate",
        description:
          "Before launch, we test every part across devices, browsers, speed, usability, and search readiness. We deliver a polished, responsive, SEO-friendly website built to perform today and scale with your business as your needs, content, traffic, and digital goals grow with confidence.",
      },
    ],
    faq: servicesFaqItems,
  },
  "website-development": {
    slug: "website-development",
    metaTitle: "Website Design + Development",
    heroTitleTop: "Website",
    heroTitleHighlight: "Design + Development",
    heroImage: {
      src: "/images/services/website-development-hero.png",
      alt: "Website design and development process preview",
      width: 1280,
      height: 720,
    },
    process: [
      {
        title: "Discover",
        description:
          "We start by understanding your business, goals, audience, and market before choosing the right web solution. For small businesses, we use WordPress for fast, flexible website development. For larger projects, we plan custom features, systems, and scalable code around your exact needs and future growth, without wasting time, budget, or effort unnecessarily.",
      },
      {
        title: "Build",
        description:
          "We turn your strategy and design into fast, responsive websites built for real users. WordPress helps us launch smaller websites quickly, while custom coding gives larger projects the flexibility, speed, security, and control needed for complex business and digital product requirements at scale.",
      },
      {
        title: "Launch",
        description:
          "Before launch, we test every part across devices, browsers, speed, usability, and search readiness. We deliver a polished, responsive, SEO-friendly website built to perform today and scale with your business as your needs, content, traffic, and digital goals grow with confidence.",
      },
    ],
    faq: servicesFaqItems,
  },
  branding: {
    slug: "branding",
    metaTitle: "Branding",
    heroTitleTop: "Brand",
    heroTitleHighlight: "Building",
    heroImage: {
      src: "/images/services/uiux-hero.png",
      alt: "IMAGE NEED TO BE UPDATED",
      width: 1280,
      height: 720,
    },
    process: [
      {
        title: "Discover",
        description:
          "We start by learning about your business, audience, goals, and market. This helps us shape a clear brand direction that fits your story, speaks to the right people, and creates a strong base for every visual and business need.",
      },
      {
        title: "Design",
        description:
          "We turn your brand idea into a clear visual identity through logo design, colors, type, layouts, and modern brand assets. From digital screens to printed materials, every detail is designed to keep your brand clear, bold, and easy to remember.",
      },
      {
        title: "Deliver",
        description:
          "We create the final brand assets you need to use your identity with ease. This can include logos, visiting cards, brochures, print designs, social media assets, and brand guidelines, giving your business a consistent look across every touchpoint.",
      },
    ],
    faq: brandingFaqItems,
  },
};
