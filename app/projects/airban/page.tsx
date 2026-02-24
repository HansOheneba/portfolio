"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useMemo } from "react";
import Image from "next/image";

const LIVE_URL = "https://myairbanhomes.com";

type TechItem = {
  name: string;
  href?: string;
};

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function SparkleIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={cn("fill-none stroke-current", className)}
    >
      <path
        d="M12 2l1.2 5.2L18 9l-4.8 1.8L12 16l-1.2-5.2L6 9l4.8-1.8L12 2Z"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M19.5 13.5l.6 2.6 2.4.9-2.4.9-.6 2.6-.6-2.6-2.4-.9 2.4-.9.6-2.6Z"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function NextIcon({ className }: { className?: string }) {
  // Minimal “Next-like” mark
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <circle cx="12" cy="12" r="10" className="fill-current opacity-20" />
      <path
        d="M7.5 8.2v7.6h1.9V11l6.2 7.1h1.9V8.2h-1.9V13L9.4 8.2H7.5Z"
        className="fill-current"
      />
    </svg>
  );
}

function TsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="4"
        className="fill-current"
      />
      <path
        d="M7 9h10v2h-4v7h-2v-7H7V9Zm9.2 9.2c-.7.6-1.7.9-2.7.9-2 0-3.2-1-3.2-2.5 0-1.4 1-2.1 2.4-2.4l1.2-.3c.9-.2 1.2-.4 1.2-.8 0-.5-.6-.8-1.4-.8-.9 0-1.6.3-2.2.9l-1.2-1.3c.8-.9 2-1.4 3.4-1.4 2 0 3.3 1 3.3 2.6 0 1.3-.9 2.1-2.4 2.4l-1.2.3c-.9.2-1.3.4-1.3.8 0 .5.6.8 1.5.8.9 0 1.8-.4 2.4-1.1l1.2 1.3Z"
        className="fill-white"
        opacity="0.92"
      />
    </svg>
  );
}

function TailwindIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path
        d="M12 7c-2.7 0-4.4 1.3-5.2 3.8C7.9 9.4 9.3 8.7 11 8.7c1.5 0 2.6.6 3.6 1.7.9 1 1.6 1.6 2.9 1.6 2.7 0 4.4-1.3 5.2-3.8-1.1 1.4-2.5 2.1-4.2 2.1-1.5 0-2.6-.6-3.6-1.7-.9-1-1.6-1.6-2.9-1.6ZM6.8 13.8C5.9 16.3 7.6 18 10.3 18c1.3 0 2-.6 2.9-1.6 1-1.1 2.1-1.7 3.6-1.7 1.7 0 3.1-.7 4.2-2.1-.8 2.5-2.5 3.8-5.2 3.8-1.3 0-2-.6-2.9-1.6-1-1.1-2.1-1.7-3.6-1.7-1.7 0-3.1.7-4.2 2.1Z"
        className="fill-current"
      />
    </svg>
  );
}

function FlaskIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path
        d="M9 2h6v2l-1 2v3.5l4.7 7.6c.8 1.3-.1 3-1.6 3H6.9c-1.5 0-2.4-1.7-1.6-3L10 9.5V6L9 4V2Z"
        className="fill-current opacity-25"
      />
      <path
        d="M10.3 10.1h3.4l3.6 5.9c.3.5-.1 1.2-.7 1.2H7.4c-.6 0-1-.7-.7-1.2l3.6-5.9Z"
        className="fill-current"
      />
    </svg>
  );
}

function MysqlIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path
        d="M6 16c0-3.3 2.7-6 6-6s6 2.7 6 6v3H6v-3Z"
        className="fill-current opacity-25"
      />
      <path
        d="M7.2 16c.4-2.6 2.4-4.5 4.8-4.5s4.4 1.9 4.8 4.5H7.2Z"
        className="fill-current"
      />
      <path
        d="M9 10.2c.5-1.7 1.6-2.9 3-3.7 1.4.8 2.5 2 3 3.7"
        className="fill-none stroke-current"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ResendIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path d="M3.5 7.5h17v9h-17v-9Z" className="fill-current opacity-25" />
      <path
        d="M4.5 8.5 12 13.2 19.5 8.5"
        className="fill-none stroke-current"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M4.8 15.5 9.8 12.4M19.2 15.5 14.2 12.4"
        className="fill-none stroke-current"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function GlowBlob({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute rounded-full blur-3xl opacity-25",
        className,
      )}
    />
  );
}

function TechLogoCard({
  item,
  index,
  reduceMotion,
}: {
  item: TechItem;
  index: number;
  reduceMotion: boolean;
}) {
  const base = (
    <motion.div
      initial={reduceMotion ? undefined : { opacity: 0, y: 10 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      className="group relative"
    >
      <div className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition will-change-transform group-hover:-translate-y-0.5">
        <div className="flex items-center justify-between">
          <div className="h-12 w-12 rounded-xl bg-white/[0.06] ring-1 ring-white/10 flex items-center justify-center">
          </div>

          <div className="h-9 w-9 rounded-xl bg-white/[0.06] ring-1 ring-white/10 flex items-center justify-center opacity-0 scale-95 transition group-hover:opacity-100 group-hover:scale-100">
            <SparkleIcon className="h-5 w-5 text-white/80" />
          </div>
        </div>

        {/* Hover label */}
        <div className="mt-3">
          <div className="h-5 overflow-hidden">
            <div className="translate-y-6 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-sm font-medium text-white/90">{item.name}</p>
            </div>
          </div>
          <p className="mt-1 text-xs text-white/40">
            Hover to reveal • Tap to open
          </p>
        </div>

        <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.10] to-transparent" />
        </div>
      </div>
    </motion.div>
  );

  if (!item.href) return base;

  return (
    <Link
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
      aria-label={item.name}
    >
      {base}
    </Link>
  );
}

export default function AirbanHomesCaseStudy() {
  const reduceMotion = useReducedMotion();

  const techLogos = [
    { name: "Next.js", logo: "/logos/nextjs.png" },
    { name: "TypeScript", logo: "/logos/ts.png" },
    { name: "Tailwind CSS", logo: "/logos/tailwind.jpeg" },
    { name: "Python", logo: "/logos/python.svg" },
    { name: "MySQL", logo: "/logos/sql.svg" },
    { name: "Resend", logo: "/logos/resend.svg" },
  ];

  const enter = {
    hidden: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 },
    show: reduceMotion
      ? { opacity: 1 }
      : {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: "easeOut" },
        },
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#070A12] text-white">
      {/* Ambient background */}
      <GlowBlob className="left-[-12%] top-[-10%] h-[420px] w-[420px] bg-white" />
      <GlowBlob className="right-[-18%] top-[18%] h-[520px] w-[520px] bg-white" />
      <GlowBlob className="left-[18%] bottom-[-18%] h-[520px] w-[520px] bg-white" />

      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,255,255,0.10),transparent_70%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.06),transparent_40%,rgba(255,255,255,0.02))]" />
      <div className="absolute inset-0 opacity-[0.08] [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.6)_1px,transparent_0)] [background-size:18px_18px]" />

      <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-20">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="show"
          className="space-y-6"
        >
          

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Airban Homes Platform
          </h1>

          <p className="text-lg text-white/70 max-w-3xl leading-relaxed">
            I built Airban Homes as a full-stack real estate and product
            platform where users could browse properties and doors, submit
            enquiries, and where internal staff could manage content through a
            custom CMS.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href={LIVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white text-[#070A12] px-4 py-2.5 font-medium shadow-sm hover:opacity-90 transition"
            >
              View Live Site <ExternalLink size={16} />
            </Link>

          </div>
        </motion.div>

        {/* Tech Stack Experience */}
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 14 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          className="mt-14 rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8"
        >
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <div>
              <h2 className="text-2xl font-semibold">Tech Stack</h2>
              <p className="mt-2 text-sm text-white/55">
                Core technology logos only
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-x-10 gap-y-8 items-center">
            {techLogos.map((tech) => (
              <div
                key={tech.name}
                className="flex flex-col items-center justify-center opacity-70 hover:opacity-100 transition relative"
              >
                <Image
                  src={tech.logo}
                  alt={tech.name}
                  width={56}
                  height={56}
                  className="object-contain grayscale hover:grayscale-0 transition duration-300 w-14 h-14 sm:w-20 sm:h-20"
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Overview */}
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mt-14 space-y-6"
        >
          <h2 className="text-2xl font-semibold">Project Overview</h2>

          <div className="grid md:grid-cols-12 gap-6">
            <div className="md:col-span-7 space-y-4 text-white/75 leading-relaxed">
              <p>
                I built the platform to serve two distinct product journeys:
                property listings and door products. Although both existed under
                the same brand, they required different UX approaches.
              </p>
              <p>
                Properties needed strong visual storytelling and enquiry
                capture, while doors needed fast catalog browsing and filtering.
              </p>
              <p>
                The goal was a polished frontend plus a backend that empowered
                non-technical staff to manage content, listings, and enquiries
                without relying on a developer.
              </p>
            </div>

            <div className="md:col-span-5">
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                <p className="text-sm text-white/55">Built to optimize for</p>
                <ul className="mt-4 space-y-3 text-sm">
                  <li className="flex items-center justify-between">
                    <span className="text-white/80">Conversion clarity</span>
                    <span className="text-white/45">Enquiry-first UX</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-white/80">Operational speed</span>
                    <span className="text-white/45">CMS workflow</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-white/80">Perceived performance</span>
                    <span className="text-white/45">Skeleton states & Loaders</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Key Decisions as an "Experience" */}
        <div className="mt-14 space-y-8">
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <h2 className="text-2xl font-semibold">Key Product Decisions</h2>
            <p className="text-sm text-white/55">
              Scroll-driven reveal using Framer Motion
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                title: "I separated product journeys",
                body: "Doors and Properties were designed as distinct experiences. Doors emphasized grid-based browsing with clear CTAs, while properties emphasized galleries, location context, and enquiry forms alongside content.",
              },
              {
                title: "I implemented skeleton loading states",
                body: "Structured skeletons reduced layout shifting and made the interface feel faster by keeping users oriented while data was fetching.",
              },
              {
                title: "I built a custom CMS",
                body: "Internal staff could add, edit, and remove doors and properties, plus update enquiry statuses. Submissions became trackable items rather than scattered email threads.",
              },
              {
                title: "I designed enquiries as a workflow",
                body: "Enquiries were stored with statuses like Pending and Resolved, so the team could track operational progress inside the dashboard.",
              },
            ].map((d, idx) => (
              <motion.div
                key={d.title}
                initial={reduceMotion ? undefined : { opacity: 0, y: 14 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.55, delay: idx * 0.05 }}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.05] transition"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-lg">{d.title}</h3>
                  <span className="text-xs rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-white/55">
                    Decision {idx + 1}
                  </span>
                </div>
                <p className="mt-3 text-white/70 leading-relaxed">{d.body}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Architecture */}
        <motion.div
          id="architecture"
          initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mt-14 space-y-6"
        >
          <h2 className="text-2xl font-semibold">Architecture & Data Flow</h2>

          <div className="grid md:grid-cols-12 gap-6">
            <div className="md:col-span-7 space-y-4 text-white/75 leading-relaxed">
              <p>
                The frontend was built with Next.js and TypeScript, while the
                backend API was developed using Python Flask. The API handled
                validation and database communication with MySQL.
              </p>

              <p>
                When users submitted enquiries, the data was stored and
                triggered transactional emails using Resend. This separation
                kept the frontend performant and the backend clean, secure, and
                database-driven.
              </p>
            </div>

            <div className="md:col-span-5">
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                <p className="text-sm text-white/55">Data path</p>
                <ol className="mt-4 space-y-3 text-sm text-white/75">
                  <li className="flex gap-3">
                    <span className="text-white/40">1</span>
                    <span>Browse Doors or Properties</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-white/40">2</span>
                    <span>Submit enquiry form</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-white/40">3</span>
                    <span>Flask validates and stores in MySQL</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-white/40">4</span>
                    <span>Resend sends transactional emails</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-white/40">5</span>
                    <span>Staff updates status in CMS</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Outcome */}
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          className="mt-14 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-8 space-y-4"
        >
          <h2 className="text-2xl font-semibold">Outcome & Impact</h2>
          <p className="text-white/75 leading-relaxed max-w-4xl">
            The final result was a production-ready real estate and product
            platform with a structured backend, operational CMS, and a clear
            conversion-focused user journey. The system reduced dependency on
            technical staff for updates and introduced a more organized approach
            to handling customer enquiries.
          </p>

          <Link
            href={LIVE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-white text-[#070A12] px-4 py-2.5 font-medium shadow-sm hover:opacity-90 transition"
          >
            Visit myairbanhomes.com <ExternalLink size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
