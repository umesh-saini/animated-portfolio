import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Umesh Saini | Full Stack Developer | Python & JavaScript Expert",
  description:
    "Professional portfolio of Umesh Saini, a full stack developer with 2.5+ years experience in React, Next.js, Django, and Node.js. Explore my projects and skills.",
  generator: "Next.js",
  applicationName: "Umesh Saini Portfolio",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Umesh Saini",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Python Developer",
    "Django Developer",
    "Node.js Developer",
    "JavaScript Developer",
    "Portfolio",
    "Web Developer",
    "Software Engineer",
    "umesh-saini.site",
  ],
  authors: [{ name: "Umesh Saini", url: "https://umesh-saini.site" }],
  creator: "Umesh Saini",
  publisher: "Umesh Saini",
  formatDetection: {
    email: true,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://umesh-saini.site"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Umesh Saini | Full Stack Developer",
    description:
      "Professional portfolio showcasing my 2.5+ years of software development experience",
    url: "https://umesh-saini.site",
    siteName: "Umesh Saini Portfolio",
    images: [
      {
        url: "https://res.cloudinary.com/dqq4ccopf/image/upload/v1744430706/IMG_20231028_175016_980_rziha0.jpg",
        width: 1200,
        height: 630,
        alt: "Umesh Saini - Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
