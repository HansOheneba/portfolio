// components/sections/hero.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faDownload } from "@fortawesome/free-solid-svg-icons";

type HeroProps = {
  step?: string;
  eyebrow?: string; 
  title?: string; 
  blurb?: string;
  primaryCtaLabel?: string;
  primaryCtaHref?: string; 
  secondaryCtaLabel?: string;
  cvHref?: string; 
  imageSrc?: string;
};

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function Hero({
  title = "Hans Opoku",
  blurb = "I am building modern front-end experiences with secure defaults, clean design systems, and performance-first execution.",
  primaryCtaLabel = "Get in touch",
  primaryCtaHref = "#contact",
  secondaryCtaLabel = "Download CV",
  cvHref = "https://docs.google.com/document/d/1SkR03pjMKOKuxSXT2qC__iFoGoVD5mwR/edit?usp=sharing&ouid=107804991562370370216&rtpof=true&sd=true",
  imageSrc = "/hero.jpg",
}: HeroProps) {
  return (
    <section
      id="top"
      className="bg-white w-full py-10 sm:py-12 lg:py-16 mx-auto"
      aria-label="Hero"
    >
      <div className="mx-auto w-full  px-4 sm:px-6">
        <div
          className={cn(
            "relative overflow-hidden ",

          )}
        >
          {/* subtle edge glow */}
       

          <div className="relative grid gap-6 p-6 sm:p-8 lg:grid-cols-2 lg:gap-10 lg:p-10 max-w-7xl mx-auto">
            {/* Left */}
            <div className="flex flex-col justify-center">
              <h1 className="mt-4 text-4xl font-semibold leading-[1.05] text-black sm:text-5xl">
                {title}
              </h1>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-black/65 sm:text-lg">
                {blurb}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                {/* Primary */}
                <Link
                  href={primaryCtaHref}
                  className={cn(
                    "inline-flex items-center justify-center gap-3 rounded-2xl",
                    "bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/90",
                    "focus:outline-none focus:ring-2 focus:ring-white/30",
                  )}
                >
                  {primaryCtaLabel}
                  <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4" />
                </Link>

                {/* Secondary */}
                <a
                  href={cvHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "inline-flex items-center justify-center gap-3 rounded-2xl",
                    "border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-black/85",
                    "transition hover:bg-black/50 hover:text-white",
                    "focus:outline-none focus:ring-2 focus:ring-white/30",
                  )}
                >
                  <FontAwesomeIcon icon={faDownload} className="h-4 w-4" />
                  {secondaryCtaLabel}
                </a>
              </div>
            </div>

            {/* Right */}
            <div className="relative">
              <div
                className={cn(
                  "relative aspect-4/3 w-full overflow-hidden rounded-[26px]",
                  "border border-white/10 bg-white/5",
                )}
              >
                <Image
                  src={imageSrc}
                  alt="Featured work preview"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center opacity-90"
                  priority
                />

                {/* overlay gradient */}
                <div className="pointer-events-none absolute inset-0 bg-linear-to-tr from-black/40 via-transparent to-black/15" />

                {/* center mark, optional */}
                <div className="pointer-events-none absolute inset-0 grid place-items-center">
                  <div className="flex items-center gap-3 opacity-90">
                    <span className="h-10 w-10 rounded-md bg-white/90" />
                    <span className="h-10 w-10 rounded-full bg-white/90" />
                    <span className="h-10 w-10 rounded-full bg-white/90" />
                  </div>
                </div>
              </div>

         
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
