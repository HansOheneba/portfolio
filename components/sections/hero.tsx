// components/sections/hero.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faDownload,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

type HeroProps = {
  primaryCtaHref?: string;
  cvHref?: string;
  projectImage1?: string;
  projectImage2?: string;
  projectImage3?: string;
};

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function Hero({
  primaryCtaHref = "/projects",
  cvHref = "https://docs.google.com/document/d/1SkR03pjMKOKuxSXT2qC__iFoGoVD5mwR/edit?usp=sharing&ouid=107804991562370370216&rtpof=true&sd=true",
  projectImage1 = "/projects/proj1.png",
  projectImage2 = "/projects/proj2.png",
  projectImage3 = "/projects/proj3.png",
}: HeroProps) {
  return (
    <section
      id="top"
      aria-label="Hero"
      className="w-full bg-[#efefe9] text-black"
    >
      <div className="mx-auto max-w-7xl px-4 pb-14 pt-12 sm:px-6 sm:pb-20 sm:pt-16 lg:pb-24 lg:pt-20">
        {/* Intro Tagline */}
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mt-6 font-serif text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Leave Nothing to Chance.
            <br />
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-black/65 sm:text-lg">
            I am <span className="font-semibold text-black">Hans Opoku</span>, a
            developer building modern, secure, and scalable web systems.
            Thoughtful interfaces. Clean architecture. Security by default.
          </p>

          {/* Location highlight */}
          <div className="mt-4 flex items-center justify-center gap-2 text-sm font-medium text-black/80">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="h-4 w-4 text-orange-500"
            />
            <span>
              Based in{" "}
              <span className="font-semibold text-black">Accra, Ghana</span>
            </span>
          </div>

          {/* CTA row */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            {/* Primary */}
            <Link
              href={primaryCtaHref}
              className={cn(
                "group inline-flex h-12 items-center gap-3 rounded-2xl px-6",
                "bg-purple-800 text-sm font-semibold text-white shadow-sm",
                "transition hover:bg-purple-900",
                "focus:outline-none focus:ring-2 focus:ring-purple-500/30",
              )}
            >
              <span>View Projects</span>
              <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4" />
            </Link>

            {/* Secondary */}
            <a
              href={cvHref}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex h-12 items-center gap-3 rounded-2xl px-6",
                "border border-black/10 bg-white/60",
                "text-sm font-semibold text-black/85",
                "transition hover:bg-white/80",
                "focus:outline-none focus:ring-2 focus:ring-black/10",
              )}
            >
              <FontAwesomeIcon icon={faDownload} className="h-4 w-4" />
              <span>Download CV</span>
            </a>
          </div>
        </div>

        {/* Showcase Panel */}
        <div className="relative mx-auto mt-14 max-w-6xl">
          <div className="relative overflow-hidden rounded-[34px] bg-white/40 p-6 sm:p-8">
            <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent" />

            <div className="relative mx-auto mt-4 grid min-h-[320px] place-items-center sm:min-h-[380px] lg:min-h-[430px]">
              {/* Left */}
              <div className="absolute left-4 top-16 w-[38%] min-w-[220px] max-w-[360px] rotate-[-10deg] sm:left-10">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-black/5">
                  <Image
                    src={projectImage1}
                    alt="Project 1"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Center */}
              <div className="relative z-10 w-[44%] min-w-[240px] max-w-[420px]">
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-black/5">
                  <Image
                    src={projectImage2}
                    alt="Project 2"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Right */}
              <div className="absolute right-4 top-16 w-[38%] min-w-[220px] max-w-[360px] rotate-[10deg] sm:right-10">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-black/5">
                  <Image
                    src={projectImage3}
                    alt="Project 3"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/5 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
