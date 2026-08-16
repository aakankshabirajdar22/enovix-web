export const siteConfig = {
  name: "EnovixWeb",
  description: "A future-focused digital design agency.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  calendlyUrl: process.env.NEXT_PUBLIC_CALENDLY_URL ?? "https://calendly.com/YOUR-CALENDLY-USERNAME",
} as const;
