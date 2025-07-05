import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MagicCursor from "@/components/MagicCursor";
import ParticleField from "@/components/ParticleField";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: "Kent Daria - Full Stack Developer",
  description: "Passionate developer with expertise in AI, Mobile, and Web Technologies. I love creating software systems and bringing ideas to life through code.",
  keywords: "developer, web development, react, nextjs, typescript, portfolio",
  authors: [{ name: "Kent Lorenz Daria" }],
  openGraph: {
    title: "Kent Daria - Full Stack Developer",
    description: "Passionate developer with expertise in modern web technologies.",
    url: "https://yourportfolio.com",
    siteName: "Kent Daria Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kent Daria - Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kent Daria - Full Stack Developer",
    description: "Passionate developer with expertise in AI, Mobile, and Web Technologies.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ParticleField />
        <MagicCursor />
        {children}
      </body>
    </html>
  );
}
