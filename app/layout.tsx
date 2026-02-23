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
    default: "Hans Opoku | Front-End Engineer & Security-Focused Developer",
    template: "%s | Hans Opoku",
  },
  description:
    "Personal website of Hans Opoku. I am building modern front-end systems with a strong focus on security, performance, and scalable architecture.",
  keywords: [
    "Hans Opoku",
    "Front-End Engineer",
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
    title: "Hans Opoku | Front-End Engineer & Security-Focused Developer",
    description:
      "I am designing secure, high-performance web applications using React, Next.js, and TypeScript.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hans Opoku | Front-End Engineer & Security-Focused Developer",
    description:
      "Designing secure, high-performance front-end systems with modern web technologies.",
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
