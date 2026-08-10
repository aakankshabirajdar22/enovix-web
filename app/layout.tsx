import type { Metadata } from "next";
import type { ReactNode } from "react";
import localFont from "next/font/local";

import "./globals.css";
import { siteConfig } from "@/content/site";

const oughter = localFont({
  src: "../fonts/Oughter.otf",
  variable: "--font-oughter",
  display: "swap",
});

const bricolage = localFont({
  src: "../fonts/bricolage.otf",
  variable: "--font-bricolage",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html className={`${oughter.variable} ${bricolage.variable}`} lang="en">
      <body>{children}</body>
    </html>
  );
}
