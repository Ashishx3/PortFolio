import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Dotbgc } from "@/components/Background";
import SocialSidebar from "@/ui/Socialmediaicons";

// Load Google Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata for SEO & Social Sharing
export const metadata = {
  title: "Ashish Singh | Portfolio",
  description:
    "Explore projects, skills, and work of Ashish Singh – a Full Stack Developer and Data Science enthusiast.",
  keywords: [
    "Ashish Singh",
    "Portfolio",
    "Web Developer",
    "Full Stack",
    "Data Science",
    "React",
    "Next.js",
  ],
  authors: [{ name: "Ashish Singh", url: "https://ashishsinghportfolio.vercel.app" }],
  themeColor: "#000000",
  icons: {
    icon: "/favicon.ico", // Make sure this file exists in /public
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "Ashish Singh | Portfolio",
    description: "Full Stack Developer & Data Science Student",
    url: "https://ashishsinghportfolio.vercel.app",
    siteName: "Ashish Singh Portfolio",
    images: [
      {
        url: "https://ashishsinghportfolio.vercel.app/projectsimage/AS.png",
        width: 1200,
        height: 630,
        alt: "Ashish Singh Portfolio",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Fallback favicon (for completeness) */}
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="font-sans items-center justify-items-center bg-black min-h-screen w-full">
          <Dotbgc>
            <Navbar />
            {children}
            <SocialSidebar />
          </Dotbgc>
        </div>
      </body>
    </html>
  );
}
