import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abdelhadi boudjemline - Full-Stack Developer | Modern Web & Mobile Solutions",
  description: "Award-winning Full-Stack Developer crafting exceptional digital experiences. Specializing in React.js, Next.js, React Native, Node.js with 1.5+ years of innovation and 50+ successful projects.",
  keywords: "Full-Stack Developer, React.js, Next.js, React Native, Node.js, JavaScript, Web Development, Mobile Apps, UI/UX Design",
  authors: [{ name: "Abdelhadi boudjemline" }],
  creator: "Abdelhadi boudjemline",
  openGraph: {
    title: "Abdelhadi boudjemline - Full-Stack Developer",
    description: "Crafting exceptional digital experiences with modern web technologies",
    type: "website",
    url: "https://abdelhadi-portfolio.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdelhadi boudjemline - Full-Stack Developer",
    description: "Crafting exceptional digital experiences with modern web technologies",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
