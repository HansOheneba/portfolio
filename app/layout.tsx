import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/layout/header";
import SiteFooter from "@/components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Hans Opoku | Full-Stack Web Developer",
    template: "%s | Hans Opoku",
  },
  description:
    "Hans Opoku is a full-stack web developer in Accra, Ghana, building e-commerce stores, real estate and listing sites, and the admin dashboards behind them.",
  keywords: [
    "Hans Opoku",
    "Full-Stack Developer",
    "Freelance Web Developer Ghana",
    "E-commerce Website",
    "Real Estate Website",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Web Security",
    "Cybersecurity",
    "UI Engineering",
  ],
  authors: [{ name: "Hans Opoku" }],
  creator: "Hans Opoku",
  openGraph: {
    title: "Hans Opoku | Full-Stack Web Developer",
    description:
      "Websites, online stores and admin dashboards built with Next.js and TypeScript.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hans Opoku | Full-Stack Web Developer",
    description:
      "Websites, online stores and admin dashboards built with Next.js and TypeScript.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-dvh bg-black text-white`}
      >
        <SiteHeader />

        <main className="mx-auto w-full">
          {children}
        </main>

        <SiteFooter />
      </body>
    </html>
  );
}
