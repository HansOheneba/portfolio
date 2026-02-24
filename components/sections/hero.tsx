"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

type HeroSimpleProps = {
  avatarSrc?: string;
  avatarAlt?: string;

  headlineTop?: string; 
  headlineEmphasis?: string; // "a Software Artisan"
  headlineBottom?: string; // "based in Ghana"

  supportingLine?: React.ReactNode;

  ctaLabel?: string;
  ctaHref?: string;

  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;

  // floating badge
  badgeLabel?: string; // "OPEN FOR PROJECTS"
  badgeHref?: string;

  className?: string;
};

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function HeroSimple({
  className,
  avatarSrc = "/hero.jpg",
  avatarAlt = "Profile image",
  headlineTop = "Hey, I’m Hans Oheneba,",
  headlineEmphasis = "a Software Artisan",
  headlineBottom = "based in Ghana",
  supportingLine = (
    <>
      I build secure, polished web products with a cybersecurity mindset,
      focused on performance, clarity, and strong user experience.
    </>
  ),
  ctaLabel = "View work",
  ctaHref = "/projects",
  secondaryCtaLabel = "View CV",
  secondaryCtaHref = "https://docs.google.com/document/d/1SkR03pjMKOKuxSXT2qC__iFoGoVD5mwR/edit?usp=sharing&ouid=107804991562370370216&rtpof=true&sd=true",
  badgeLabel = "OPEN FOR PROJECTS",
  badgeHref = "#contact",
}: HeroSimpleProps) {
  return (
    <section className={cn("relative w-full bg-black text-white", className)}>
      {/* subtle background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_50%_-150px,rgba(255,255,255,0.10),transparent_60%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
      </div>

      {/* floating circular badge */}
      <div className="absolute left-6 top-6 z-20">
        <Link
          href={badgeHref}
          onClick={
            badgeHref === "#contact"
              ? (e) => {
                  e.preventDefault();
                  const el = document.getElementById("contact");
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                  }
                }
              : undefined
          }
          className={cn(
            "group relative grid place-items-center",
            "h-[86px] w-[86px] rounded-full border border-white/10",
            "bg-white/5 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.55)]",
            "transition hover:bg-white/10",
          )}
          aria-label={badgeLabel}
        >
          {/* spinning ring text */}
          <span
            className={cn(
              "absolute inset-0 grid place-items-center",
              "animate-[spin_14s_linear_infinite]",
            )}
          >
            <svg
              viewBox="0 0 100 100"
              className="h-[86px] w-[86px] opacity-90"
              aria-hidden="true"
            >
              <defs>
                <path
                  id="circlePath"
                  d="M 50, 50 m -34, 0 a 34,34 0 1,1 68,0 a 34,34 0 1,1 -68,0"
                />
              </defs>
              <text
                fill="rgba(255,255,255,0.75)"
                fontSize="9"
                letterSpacing="3"
              >
                <textPath
                  href="#circlePath"
                  startOffset="50%"
                  textAnchor="middle"
                >
                  {`${badgeLabel} • ${badgeLabel} •`}
                </textPath>
              </text>
            </svg>
          </span>

          {/* center button */}
          <span
            className={cn(
              "relative z-10 grid place-items-center",
              "h-12 w-12 rounded-full bg-white text-black",
              "transition group-hover:scale-[1.03]",
            )}
          >
            <ExternalLink className="h-5 w-5" />
          </span>
        </Link>
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="py-16 sm:py-20">
          <div className="mx-auto max-w-3xl text-center">
            {/* top image (you said you will put an image here) */}
            <div className="mx-auto mb-10 grid place-items-center">
              <div
                className={cn(
                  "relative h-16 w-16 overflow-hidden rounded-full",
                  "border border-white/10 bg-white/5",
                )}
              >
                <Image
                  src={avatarSrc}
                  alt={avatarAlt}
                  fill
                  sizes="64px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* headline */}
            <h1 className="leading-[0.95] tracking-tight">
              <span className="block text-[44px] font-semibold sm:text-[64px] md:text-[78px]">
                {headlineTop}
              </span>

              <span className="block text-[44px] sm:text-[64px] md:text-[78px]">
                <span className="font-serif italic font-medium">
                  {headlineEmphasis}
                </span>
              </span>

              <span className="block text-[44px] font-semibold sm:text-[64px] md:text-[78px]">
                {headlineBottom.split(" ").slice(0, -1).join(" ")}{" "}
                <span className="font-serif italic font-medium">
                  {headlineBottom.split(" ").slice(-1)[0]}
                </span>
              </span>
            </h1>

            {/* supporting line */}
            <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
              {supportingLine}
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link
                href={ctaHref}
                className={cn(
                  "inline-flex items-center justify-center rounded-2xl",
                  "bg-white px-5 py-2.5 text-sm font-medium text-black",
                  "transition hover:bg-white/90",
                )}
              >
                {ctaLabel}
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>

              <Link
                href={secondaryCtaHref}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex items-center justify-center rounded-2xl",
                  "border border-white/10 bg-white/5 px-5 py-2.5",
                  "text-sm font-medium text-white/80 transition",
                  "hover:bg-white/10 hover:text-white",
                )}
              >
                {secondaryCtaLabel}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
