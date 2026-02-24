"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink } from "lucide-react";

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

type TechLogo = {
  name: string;
  logo: string;
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

export default function HMWeddingCaseStudy() {
  const reduceMotion = useReducedMotion();

  const techLogos: TechLogo[] = [
    { name: "TypeScript", logo: "/logos/ts.png" },
    { name: "NextJS", logo: "/logos/nextjs.png" },
    { name: "Tailwind CSS", logo: "/logos/tailwind.jpeg" },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#070A12] text-white">
      {/* Ambient background */}
      <GlowBlob className="left-[-12%] top-[-10%] h-[420px] w-[420px] bg-white" />
      <GlowBlob className="right-[-18%] top-[18%] h-[520px] w-[520px] bg-white" />

      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,255,255,0.10),transparent_70%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.06),transparent_40%,rgba(255,255,255,0.02))]" />

      <div className="relative mx-auto max-w-4xl px-6 py-16 md:py-20 space-y-10">
        {/* Header */}
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            H&M Wedding Website
          </h1>

          <p className="text-lg text-white/70 leading-relaxed">
            I built this wedding website for a close friend who was getting
            married. The goal was to create a clean, elegant landing experience
            where guests could view event details, RSVP, and easily stay
            informed.
          </p>

          <p className="text-white/70 leading-relaxed">
            The platform was built using Nextjs with TypeScript and Tailwind CSS for a
            responsive, modern layout. I also integrated a calendar feature so
            guests could add the wedding event directly to their personal
            calendars with one click.
          </p>

          <Link
            href="https://harunawedsnaia.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-white text-[#070A12] px-5 py-3 font-medium hover:opacity-90 transition"
          >
            View Live Website <ExternalLink size={16} />
          </Link>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 14 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
        >
          <h2 className="text-2xl font-semibold mb-6">Tech Stack</h2>

          <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 items-center">
            {techLogos.map((tech) => (
              <div
                key={tech.name}
                className="flex flex-col items-center justify-center opacity-80 hover:opacity-100 transition"
              >
                <Image
                  src={tech.logo}
                  alt={tech.name}
                  width={70}
                  height={70}
                  className="object-contain grayscale hover:grayscale-0 transition duration-300"
                />
                <p className="mt-2 text-sm text-white/60">{tech.name}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="text-xs text-white/45">
          Built as a custom event website for a real wedding celebration.
        </div>
      </div>
    </section>
  );
}
