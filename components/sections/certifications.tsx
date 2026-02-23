"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { SiCoursera, SiGoogle, SiIsc2, SiCisco } from "react-icons/si";

type CertCategory =
  | "Security & Risk"
  | "Engineering & UX"
  | "AI & Emerging Tech"
  | "Strategy & Leadership";

type IssuerKey =
  | "Coursera"
  | "Google"
  | "ISC2"
  | "Cisco"
  | "African Union"
  | "ALX"
  | "ISO/IEC";

type Cert = {
  title: string;
  issuer: string;
  issuerKey: IssuerKey;
  date: string;
  href: string;
  category: CertCategory;
  highlight?: boolean;
};

const certs: Cert[] = [
  {
    title: "Certified in HTML, CSS & JavaScript",
    issuer: "Coursera",
    issuerKey: "Coursera",
    date: "November 2022",
    href: "https://coursera.org/share/3a119241b8fb1d67470637046c484f9b",
    category: "Engineering & UX",
  },
  {
    title: "Certified in Project Management",
    issuer: "Google",
    issuerKey: "Google",
    date: "August 2024",
    href: "https://drive.google.com/file/d/1nfCt0MaWgeCgYPuHI7pw8bU6boCWbt6Y/view?usp=sharing",
    category: "Strategy & Leadership",
  },
  {
    title: "Certified in Foundation of User Experience (UX) Design",
    issuer: "Coursera",
    issuerKey: "Coursera",
    date: "March 2023",
    href: "https://coursera.org/share/80a4bc2bfa93f002727d05b4c592051e",
    category: "Engineering & UX",
  },
  {
    title: "Certification of Participation in 13th African Games",
    issuer: "African Union",
    issuerKey: "African Union",
    date: "March 2024",
    href: "https://drive.google.com/file/d/1dDWZicoGHnJamDejnmNqW3ozBENbu_Vh/view?usp=sharing",
    category: "Strategy & Leadership",
  },
  {
    title: "Certified in AI Essentials",
    issuer: "Google",
    issuerKey: "Google",
    date: "August 2024",
    href: "https://drive.google.com/file/d/1uPjyt6_trM5pPwExs_3OUoUvjshnWCSx/view?usp=sharing",
    category: "AI & Emerging Tech",
  },
  {
    title: "AI Career Essentials",
    issuer: "ALX",
    issuerKey: "ALX",
    date: "September 2024",
    href: "https://drive.google.com/file/d/1w770rIfICy0nBYf_NI-kE8UIqzAsFEeu/view?usp=sharing",
    category: "AI & Emerging Tech",
  },
  {
    title: "ISO/IEC 27001:2022 – ISMS Foundation",
    issuer: "ISO/IEC",
    issuerKey: "ISO/IEC",
    date: "October 2024",
    href: "https://drive.google.com/file/d/1w770rIfICy0nBYf_NI-kE8UIqzAsFEeu/view?usp=sharing",
    category: "Security & Risk",
  },
  {
    title: "Certified in Cybersecurity (CC)",
    issuer: "ISC2",
    issuerKey: "ISC2",
    date: "June 2025",
    href: "https://www.credly.com/badges/615e64c7-3001-4ddb-b6f7-99f676f71282/public_url",
    category: "Security & Risk",
    highlight: true,
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    issuerKey: "Cisco",
    date: "March 2025",
    href: "https://www.credly.com/badges/929c7530-7804-439e-8d94-e59fdcd35cf9/public_url",
    category: "Security & Risk",
  },
];

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function IssuerLogo({ issuerKey }: { issuerKey: IssuerKey }) {
  // Using react-icons for widely available logos. For issuers without icons,
  // we render a clean monogram badge to keep the layout consistent.
  const commonClass = "h-5 w-5";

  switch (issuerKey) {
    case "Coursera":
      return <SiCoursera className={commonClass} aria-hidden="true" />;
    case "Google":
      return <SiGoogle className={commonClass} aria-hidden="true" />;
    case "ISC2":
      return <SiIsc2 className={commonClass} aria-hidden="true" />;
    case "Cisco":
      return <SiCisco className={commonClass} aria-hidden="true" />;
    default:
      return (
        <span
          className="text-[10px] font-semibold text-gray-700"
          aria-hidden="true"
        >
          {issuerKey === "African Union"
            ? "AU"
            : issuerKey === "ALX"
              ? "ALX"
              : "ISO"}
        </span>
      );
  }
}

function IssuerBadge({ issuerKey }: { issuerKey: IssuerKey }) {
  return (
    <div
      className={cn(
        "flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white",
        "text-gray-700 shadow-[0_1px_0_rgba(0,0,0,0.04)]",
      )}
      title={issuerKey}
    >
      <IssuerLogo issuerKey={issuerKey} />
    </div>
  );
}

function CertCard({ cert }: { cert: Cert }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35 }}
      className={cn(
        "group relative rounded-xl border border-gray-200 bg-white p-5",
        "shadow-sm transition hover:shadow-md",
      )}
    >
      {/* soft glow hover */}
      <div className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="h-full w-full rounded-xl bg-[radial-gradient(circle_at_40%_20%,rgba(99,102,241,0.14),transparent_60%)]" />
      </div>

      <div className="relative z-10 flex items-start justify-between gap-4">
        <div className="flex min-w-0 items-start gap-3">
          {/* Logo spot */}
          <IssuerBadge issuerKey={cert.issuerKey} />

          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <h3 className="truncate text-sm font-semibold text-gray-900">
                {cert.title}
              </h3>
              {cert.highlight ? (
                <span className="shrink-0 rounded-full border border-indigo-200 bg-indigo-50 px-2 py-0.5 text-[10px] font-medium text-indigo-700">
                 ISC2 Member
                </span>
              ) : null}
            </div>

            <p className="mt-1 text-xs text-gray-500">
              {cert.issuer} • {cert.date}
            </p>
          </div>
        </div>

        <Link
          href={cert.href}
          target="_blank"
          rel="noreferrer"
          className={cn(
            "inline-flex shrink-0 items-center gap-1 rounded-md border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs font-medium text-gray-800",
            "transition hover:bg-gray-100",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300",
          )}
          aria-label={`View ${cert.title} in a new tab`}
        >
          View
          <ExternalLink className="h-3 w-3" />
        </Link>
      </div>
    </motion.div>
  );
}

export default function CertificationsSection() {
  const grouped = certs.reduce(
    (acc, cert) => {
      acc[cert.category] = acc[cert.category] || [];
      acc[cert.category].push(cert);
      return acc;
    },
    {} as Record<CertCategory, Cert[]>,
  );

  // Keep category ordering stable (instead of Object.entries default order)
  const categoryOrder: CertCategory[] = [
    "Security & Risk",
    "Engineering & UX",
    "AI & Emerging Tech",
    "Strategy & Leadership",
  ];

  return (
    <section id="certifications" className="w-full bg-gray-50 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              Certifications
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Verified credentials across security, engineering, AI, and
              leadership.
            </p>
          </div>

         
        </div>

        <div className="grid gap-10">
          {categoryOrder.map((category) => {
            const items = grouped[category] ?? [];
            if (items.length === 0) return null;

            return (
              <div key={category}>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-500">
                  {category}
                </h3>

                <div className="grid gap-4 sm:grid-cols-2">
                  {items.map((cert) => (
                    <CertCard key={`${cert.title}-${cert.date}`} cert={cert} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
