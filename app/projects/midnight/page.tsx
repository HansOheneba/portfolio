"use client";

import * as React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

type TechLogo = {
  name: string;
  logo: string; // /public path
};

type Shot = {
  src: string; // /public path
  alt: string;
  caption: string;
};

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

function Pill({
  children,
  tone = "green",
}: {
  children: React.ReactNode;
  tone?: "green" | "blue" | "purple" | "slate";
}) {
  const tones: Record<string, string> = {
    green: "border-emerald-400/20 bg-emerald-400/10 text-emerald-200",
    blue: "border-sky-400/20 bg-sky-400/10 text-sky-200",
    purple: "border-violet-400/20 bg-violet-400/10 text-violet-200",
    slate: "border-white/10 bg-white/[0.04] text-white/75",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium",
        tones[tone],
      )}
    >
      {children}
    </span>
  );
}

function StatCard({
  label,
  value,
  hint,
}: {
  label: string;
  value: string;
  hint?: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
      <p className="text-xs text-white/50">{label}</p>
      <p className="mt-2 text-xl font-semibold text-white">{value}</p>
      {hint ? <p className="mt-2 text-sm text-white/60">{hint}</p> : null}
    </div>
  );
}

function SectionTitle({
  eyebrow,
  title,
  sub,
}: {
  eyebrow?: string;
  title: string;
  sub?: string;
}) {
  return (
    <div className="space-y-2">
      {eyebrow ? (
        <p className="text-xs tracking-widest text-white/50 uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-2xl font-semibold text-white">{title}</h2>
      {sub ? <p className="text-sm text-white/60 max-w-3xl">{sub}</p> : null}
    </div>
  );
}

function ScreenshotCard({
  shot,
  index,
  reduceMotion,
}: {
  shot: Shot;
  index: number;
  reduceMotion: boolean;
}) {
  return (
    <motion.figure
      initial={reduceMotion ? undefined : { opacity: 0, y: 14 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55, delay: index * 0.05 }}
      className="rounded-3xl border border-white/10 bg-white/[0.03] overflow-hidden"
    >
      <div className="relative aspect-[16/10] w-full">
        <Image
          src={shot.src}
          alt={shot.alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={index === 0}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
      </div>

      <figcaption className="p-5">
        <p className="text-sm font-medium text-white/90">{shot.caption}</p>
        <p className="mt-2 text-xs text-white/50">
          Replace image paths with your actual screenshots in{" "}
          <code>/public</code>.
        </p>
      </figcaption>
    </motion.figure>
  );
}

export default function MidnightMadnessCaseStudy() {
  const reduceMotion = useReducedMotion();

  // Put your actual screenshots in /public and replace these paths.
  const screenshots: Shot[] = [
    {
      src: "/projects/midnight-madness/hero.png",
      alt: "Midnight Madness event page showing date, location map, and poster",
      caption:
        "Event landing page (date, location, and poster preview) with a clear ticket CTA.",
    },
    {
      src: "/projects/midnight-madness/tickets.png",
      alt: "Ticket selection page showing tiers and summary",
      caption:
        "Ticket selection flow with tier states (sold out, active, coming soon) and a real-time summary.",
    },
    {
      src: "/projects/midnight-madness/checkout.png",
      alt: "Checkout and payment step",
      caption:
        "Checkout step integrating payments with a friction-minimized confirmation experience.",
    },
    {
      src: "/projects/midnight-madness/admin.png",
      alt: "Admin dashboard showing payments and attendance data",
      caption:
        "Admin dashboard for payment verification, attendance tracking, and operational visibility.",
    },
  ];

  const techLogos: TechLogo[] = [
    { name: "TypeScript", logo: "/logos/ts.png" },
    { name: "Tailwind CSS", logo: "/logos/tailwind.jpeg" },
    { name: "Python (Flask)", logo: "/logos/python.svg" },
    { name: "MySQL", logo: "/logos/sql.svg" },
    { name: "Clerk", logo: "/logos/clerk.svg" },
    { name: "Paystack", logo: "/logos/paystack.svg" },
    { name: "Hubtel (SMS)", logo: "/logos/hubtel.png" },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#070A12] text-white">
      {/* Ambient background */}
      <GlowBlob className="left-[-12%] top-[-10%] h-[420px] w-[420px] bg-emerald-300" />
      <GlowBlob className="right-[-18%] top-[18%] h-[520px] w-[520px] bg-sky-300" />
      <GlowBlob className="left-[18%] bottom-[-18%] h-[520px] w-[520px] bg-violet-300" />

      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,255,255,0.10),transparent_70%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.06),transparent_40%,rgba(255,255,255,0.02))]" />
      <div className="absolute inset-0 opacity-[0.08] [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.6)_1px,transparent_0)] [background-size:18px_18px]" />

      <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-20">
        {/* Header */}
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="space-y-6"
        >
      

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Midnight Madness: The Meltdown
          </h1>

          <p className="text-lg text-white/70 max-w-3xl leading-relaxed">
            I built Midnight Madness as an end-to-end ticketing experience for a
            Halloween party, covering event discovery, ticket selection,
            payment, and post-payment communication. I also built an admin side
            that tracked payments, attendee status, and entry verification, so
            the team could run the night with less guesswork.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <div className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5">
              <p className="text-sm text-white/70">
                Live link not available as event has already ended.
              </p>
            </div>

            {/* Optional: if you have a public recap link, you can use this */}
            {/* <Link
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white text-[#070A12] px-4 py-2.5 font-medium shadow-sm hover:opacity-90 transition"
            >
              View recap <ExternalLink size={16} />
            </Link> */}
          </div>
        </motion.div>

        {/* Tech Stack */}
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
                Tailwind • TypeScript • Flask • MySQL • Clerk • Paystack •
                Hubtel (SMS)
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-x-10 gap-y-8 items-center">
            {techLogos.map((tech) => (
              <div
                key={tech.name}
                className="flex flex-col items-center justify-center opacity-70 hover:opacity-100 transition"
                title={tech.name}
              >
                <Image
                  src={tech.logo}
                  alt={tech.name}
                  width={60}
                  height={60}
                  className="object-contain grayscale hover:grayscale-0 transition duration-300 w-14 h-14 sm:w-20 sm:h-20"
                />
                <p className="mt-2 text-xs text-white/55">{tech.name}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Project Overview */}
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mt-14 space-y-6"
        >
          <SectionTitle
            eyebrow="Context"
            title="Project Overview"
            sub="The product was built to handle high-intent traffic close to the event date, reduce failed purchases, and give organizers a reliable view of payments and attendance."
          />

          <div className="grid md:grid-cols-12 gap-6">
            <div className="md:col-span-7 space-y-4 text-white/75 leading-relaxed">
              <p>
                The landing experience was structured around quick answers: what
                the event was, when it was happening, where it was located, and
                how to get a ticket in under a minute. The ticket flow was
                intentionally short, with clear tier states like sold out and
                coming soon.
              </p>

              <p>
                After payment, the platform sent SMS notifications via Hubtel,
                so buyers received a fast, mobile-first confirmation even if
                they never checked email. Authentication and admin access were
                protected with Clerk to keep operational tooling separate from
                the public flow.
              </p>

              <p>
                The admin side was built as a true operations panel, not a basic
                table: it tracked who paid, when they paid, the ticket tier, and
                attendance status, so the team could validate entry and
                reconcile payments without spreadsheets.
              </p>
            </div>

            <div className="md:col-span-5 space-y-4">
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                <p className="text-sm text-white/55">Built to optimize for</p>
                <ul className="mt-4 space-y-3 text-sm">
                  <li className="flex items-center justify-between">
                    <span className="text-white/80">Purchase clarity</span>
                    <span className="text-white/45">Simple ticket tiers</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-white/80">Trust & verification</span>
                    <span className="text-white/45">Payment confirmation</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-white/80">Operational control</span>
                    <span className="text-white/45">Admin attendance view</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-white/80">Perceived performance</span>
                    <span className="text-white/45">Loading states</span>
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <StatCard
                  label="Primary users"
                  value="Party-goers"
                  hint="Fast ticket purchase flow"
                />
                <StatCard
                  label="Internal users"
                  value="Event staff"
                  hint="Payments + attendance tracking"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Screenshots */}
        <div className="mt-14 space-y-6">
          <SectionTitle
            eyebrow="UI"
            title="Screenshots"
            sub="These were the key screens I designed to move users from interest to paid tickets, and to give organizers a clean operational view."
          />

          <div className="grid md:grid-cols-2 gap-5">
            {screenshots.map((shot, idx) => (
              <ScreenshotCard
                key={shot.src}
                shot={shot}
                index={idx}
                reduceMotion={!!reduceMotion}
              />
            ))}
          </div>
        </div>

        {/* Key Product Decisions */}
        <div className="mt-14 space-y-8">
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <SectionTitle
              eyebrow="Decisions"
              title="Key Product Decisions"
              sub="I built the flow like an event funnel: fast context, clear ticket choice, reliable payment, immediate confirmation, and a back-office that stayed accurate during the rush."
            />
            <p className="text-sm text-white/55">
              Scroll-driven reveal with Framer Motion
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                title: "I designed ticket tiers with clear states",
                body: "I treated tiers as a predictable system: early bird could be sold out, regular could be active, and late could be coming soon. This reduced confusion and prevented users from attempting unavailable options.",
              },
              {
                title: "I integrated Paystack for payments",
                body: "I implemented a payment flow that focused on conversion reliability and clean post-payment verification, so organizers could trust what the dashboard was showing.",
              },
              {
                title: "I used Hubtel SMS for confirmations",
                body: "I sent SMS confirmations after successful payment so buyers got immediate feedback on mobile. It also reduced support messages like “Did my payment go through?”",
              },
              {
                title: "I protected admin access with Clerk",
                body: "I implemented role-protected access for the admin side so internal data stayed private and only authorized staff could view payments and update attendance status.",
              },
              {
                title: "I built the admin side as an operations panel",
                body: "I stored payment records with timestamps and linked them to attendance. Staff could verify entry quickly and keep a reliable record of who had attended.",
              },
              {
                title: "I implemented loading states for perceived performance",
                body: "I used structured loading states to keep layouts stable, reduce visual jumping, and make the flow feel fast during peak traffic windows.",
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
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-semibold text-lg text-white">
                    {d.title}
                  </h3>
                  <span className="shrink-0 text-xs rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-white/55">
                    Decision {idx + 1}
                  </span>
                </div>
                <p className="mt-3 text-white/70 leading-relaxed">{d.body}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Architecture & Data Flow */}
        <motion.div
          id="architecture"
          initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mt-14 space-y-6"
        >
          <SectionTitle
            eyebrow="Build"
            title="Architecture & Data Flow"
            sub="The platform separated the public purchase journey from internal operations, while keeping one consistent source of truth in the database."
          />

          <div className="grid md:grid-cols-12 gap-6">
            <div className="md:col-span-7 space-y-4 text-white/75 leading-relaxed">
              <p>
                The frontend was built with TypeScript and Tailwind for fast UI
                iteration and consistent styling. The backend API was built in
                Flask and connected to MySQL for durable storage of ticket
                purchases, attendee records, and admin actions.
              </p>

              <p>
                Clerk handled authentication and gated access to admin routes.
                Paystack handled payment initiation and confirmation, and Hubtel
                delivered SMS confirmations after successful transactions. The
                admin dashboard pulled from the same payment records, so staff
                always saw the latest verified state.
              </p>
            </div>

            <div className="md:col-span-5">
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                <p className="text-sm text-white/55">Data path</p>
                <ol className="mt-4 space-y-3 text-sm text-white/75">
                  <li className="flex gap-3">
                    <span className="text-white/40">1</span>
                    <span>
                      User landed on the event page and selected a ticket tier
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-white/40">2</span>
                    <span>Frontend initiated payment via Paystack</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-white/40">3</span>
                    <span>
                      Flask validated and stored the transaction in MySQL
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-white/40">4</span>
                    <span>Hubtel sent SMS confirmation to the buyer</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-white/40">5</span>
                    <span>
                      Admin dashboard displayed payment and attendance state
                      (Clerk-protected)
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-white/40">6</span>
                    <span>Staff updated attendance when attendees arrived</span>
                  </li>
                </ol>
              </div>

              <div className="mt-4 rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                <p className="text-sm text-white/55">Admin capabilities</p>
                <ul className="mt-4 space-y-2 text-sm text-white/75">
                  <li>• View all paid tickets with timestamps and tier</li>
                  <li>
                    • Search/filter attendees by name, phone, or ticket type
                  </li>
                  <li>• Mark attendance status at entry</li>
                  <li>• Track totals for paid vs attended</li>
                </ul>
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
            The final result was a production-ready event ticketing platform
            that handled the full buyer journey and gave organizers a clean
            admin view for reconciling payments and managing attendance. The
            combination of Paystack verification, Hubtel SMS confirmations, and
            a Clerk-protected admin panel reduced operational friction and kept
            event-day decisions data-driven.
          </p>

          <div className="flex flex-wrap gap-3">
            <Pill tone="green">Clear ticketing flow</Pill>
            <Pill tone="blue">Verified payments</Pill>
            <Pill tone="purple">Attendance tracking</Pill>
            <Pill tone="slate">Loading states</Pill>
          </div>

          {/* Optional: If you want a CTA but no live link */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-sm text-white/70">
              Want the full breakdown (DB schema, endpoints, and admin
              workflows)? I can add a short “Implementation Notes” section
              beneath this case study.
            </p>
          </div>
        </motion.div>

        {/* Footer note */}
        <div className="mt-10 text-xs text-white/45">
          Tip: Add your screenshots to{" "}
          <code>/public/projects/midnight-madness/</code> and keep the names
          aligned with the <code>screenshots</code> array above.
        </div>
      </div>
    </section>
  );
}
