"use client";

import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

export type CaseStudyLink = { label: string; href: string };

export type CaseStudySection = {
  title: string;
  intro?: string;
  items: { title: string; body: string }[];
};

export type CaseStudyProps = {
  eyebrow: string;
  title: string;
  summary: string;
  image: string;
  links: CaseStudyLink[];
  facts: { label: string; value: string }[];
  stack: string[];
  sections: CaseStudySection[];
  outcome: string;
};

function FadeIn({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function CaseStudy({
  eyebrow,
  title,
  summary,
  image,
  links,
  facts,
  stack,
  sections,
  outcome,
}: CaseStudyProps) {
  return (
    <section className="relative w-full overflow-hidden bg-[#070A12] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,255,255,0.10),transparent_70%)]" />
      <div className="absolute inset-0 opacity-[0.08] [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.6)_1px,transparent_0)] [background-size:18px_18px]" />

      <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-20">
        {/* Header */}
        <FadeIn className="space-y-6">
          <p className="text-xs uppercase tracking-[0.2em] text-white/50">
            {eyebrow}
          </p>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            {title}
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-white/70">
            {summary}
          </p>

          <div className="flex flex-wrap gap-3">
            {links.map((l, i) => (
              <Link
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  i === 0
                    ? "inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 font-medium text-[#070A12] shadow-sm transition hover:opacity-90"
                    : "inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-4 py-2.5 font-medium text-white/85 transition hover:bg-white/[0.08]"
                }
              >
                {l.label} <ExternalLink size={16} />
              </Link>
            ))}
          </div>
        </FadeIn>

        {/* Screenshot */}
        <FadeIn className="mt-12">
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
            <Image
              src={image}
              alt={`${title} homepage`}
              fill
              sizes="(min-width: 1152px) 1104px, 100vw"
              className="object-cover object-top"
              priority
            />
          </div>
        </FadeIn>

        {/* Facts + stack */}
        <FadeIn className="mt-10 grid gap-6 md:grid-cols-12">
          <div className="grid grid-cols-2 gap-4 md:col-span-7">
            {facts.map((f) => (
              <div
                key={f.label}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
              >
                <p className="text-xs text-white/50">{f.label}</p>
                <p className="mt-1 font-medium text-white/90">{f.value}</p>
              </div>
            ))}
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 md:col-span-5">
            <p className="text-xs text-white/50">Built with</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {stack.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs text-white/80"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Sections */}
        {sections.map((section) => (
          <div key={section.title} className="mt-16 space-y-6">
            <FadeIn>
              <h2 className="text-2xl font-semibold">{section.title}</h2>
              {section.intro ? (
                <p className="mt-2 max-w-3xl leading-relaxed text-white/65">
                  {section.intro}
                </p>
              ) : null}
            </FadeIn>
            <div className="grid gap-5 md:grid-cols-2">
              {section.items.map((item, idx) => (
                <FadeIn
                  key={item.title}
                  delay={idx * 0.05}
                  className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:bg-white/[0.05]"
                >
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-3 leading-relaxed text-white/70">
                    {item.body}
                  </p>
                </FadeIn>
              ))}
            </div>
          </div>
        ))}

        {/* Outcome */}
        <FadeIn className="mt-16 space-y-4 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-8">
          <h2 className="text-2xl font-semibold">Outcome</h2>
          <p className="max-w-4xl leading-relaxed text-white/75">{outcome}</p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-4 py-2.5 text-sm text-white/80 transition hover:bg-white/[0.06]"
            >
              ← All projects
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-medium text-[#070A12] transition hover:opacity-90"
            >
              Start a project like this
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
