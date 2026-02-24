"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
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
    title: "Foundations of User Experience (UX) Design",
    issuer: "Coursera",
    issuerKey: "Coursera",
    date: "March 2023",
    href: "https://coursera.org/share/94d6db46b9644d6ae03a348f8ecef2e1",
    category: "Engineering & UX",
  },
  {
    title: "Certified in Project Management",
    issuer: "Google",
    issuerKey: "Google",
    date: "August 2024",
    href: "https://coursera.org/share/80a4bc2bfa93f002727d05b4c592051e",
    category: "Strategy & Leadership",
  },
  {
    title: "Certification of Participation in 13th African Games",
    issuer: "African Union",
    issuerKey: "African Union",
    date: "March 2024",
    href: "https://drive.google.com/file/d/1nfCt0MaWgeCgYPuHI7pw8bU6boCWbt6Y/view?usp=sharing",
    category: "Strategy & Leadership",
  },
  {
    title: "Certified in AI Essentials",
    issuer: "Google",
    issuerKey: "Google",
    date: "August 2024",
    href: "https://drive.google.com/file/d/1dDWZicoGHnJamDejnmNqW3ozBENbu_Vh/view?usp=sharing",
    category: "AI & Emerging Tech",
  },
  {
    title: "AI Career Essentials",
    issuer: "ALX",
    issuerKey: "ALX",
    date: "September 2024",
    href: "https://drive.google.com/file/d/1uPjyt6_trM5pPwExs_3OUoUvjshnWCSx/view?usp=sharing",
    category: "AI & Emerging Tech",
  },
  {
    title:
      "ISO/IEC 27001:2022 – Information Security Management System (ISMS) Foundation",
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
        <span className="text-[10px] font-semibold text-gray-700" aria-hidden>
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
        "flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white",
        "text-gray-700 shadow-[0_1px_0_rgba(0,0,0,0.04)]",
        "sm:h-9 sm:w-9",
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
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.35 }}
      className={cn(
        "group relative rounded-2xl border border-gray-200 bg-white p-4 sm:p-5",
        "shadow-sm transition hover:shadow-md",
      )}
    >
      {/* soft glow hover */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="h-full w-full rounded-2xl bg-[radial-gradient(circle_at_40%_20%,rgba(99,102,241,0.14),transparent_60%)]" />
      </div>

      <div className="relative z-10 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
        <div className="flex min-w-0 items-start gap-3">
          <IssuerBadge issuerKey={cert.issuerKey} />

          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="min-w-0 break-words text-sm font-semibold text-gray-900 sm:truncate">
                {cert.title}
              </h3>
            </div>
            <div className="flex gap-1">
              {cert.highlight ? (
                <span className="shrink-0 rounded-full border border-indigo-200 bg-indigo-50 px-1 py-0.5 text-[10px] font-medium text-indigo-700">
                  ISC2 Member
                </span>
              ) : null}
              <p className="mt-1 text-xs text-gray-500">
                {cert.issuer} • {cert.date}
              </p>
            </div>
          </div>
        </div>

        <Link
          href={cert.href}
          target="_blank"
          rel="noreferrer"
          className={cn(
            "inline-flex w-full items-center justify-center gap-1 rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-xs font-medium text-gray-800",
            "transition hover:bg-gray-100",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300",
            "sm:w-auto sm:justify-start sm:px-2.5 sm:py-1",
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
      (acc[cert.category] ||= []).push(cert);
      return acc;
    },
    {} as Record<CertCategory, Cert[]>,
  );

  const categoryOrder: CertCategory[] = [
    "Security & Risk",
    "Engineering & UX",
    "AI & Emerging Tech",
    "Strategy & Leadership",
  ];

  return (
    <section
      id="certifications"
      className="w-full bg-gray-50 py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
              Certifications
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-600 sm:text-base">
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
                <div className="mb-4 flex items-center justify-between gap-4">
                  <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-500 sm:text-sm">
                    {category}
                  </h3>

                  <div className="h-px flex-1 bg-gray-200/70" />
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
