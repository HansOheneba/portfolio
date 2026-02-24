"use client";

import * as React from "react";
import {
  Timeline,
  TimelineBody,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
  TimelineTime,
  TimelineTitle,
} from "flowbite-react";
import { HiArrowNarrowRight } from "react-icons/hi";

type TimelineEntry = {
  time: string;
  title: string;
  body: string;
  cta?: {
    label: string;
    href: string;
  };
};

const timeline: TimelineEntry[] = [
  {
    time: "2020–2022",
    title: "Building Web Foundations",
    body: "Built my early front-end muscle with HTML, CSS, and JavaScript, focusing on clean UI and solid fundamentals.",
  },
  {
    time: "Sept 2023 — Oct 2023",
    title: "Website Development Tutor",
    body: "Taught web fundamentals and guided learners through practical projects that helped them ship confidently.",
  },
  {
    time: "June 2023 — June 2024",
    title: "Software Development Intern • Suku Technologies",
    body: "Contributed to product work and improved user-facing experiences, supporting API integrations and UI updates.",
  },
  {
    time: "Sept 2024 — Jan 2026",
    title: "Security Analyst • Margins ID Group",
    body: "Worked close to real threats and real systems, bringing security-minded thinking into how products were built.",
  },
  {
    time: "Jan 2026 — Present",
    title: "Front-End Engineer • Celerey",
    body: "Building responsive interfaces, maintaining design consistency, and improving performance across key user journeys.",
    cta: {
      label: "View my work",
      href: "/projects",
    },
  },
];

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function MouseGlowCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = React.useRef<HTMLDivElement | null>(null);

  function setPos(clientX: number, clientY: number) {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    el.style.setProperty("--x", `${x}px`);
    el.style.setProperty("--y", `${y}px`);
  }

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    setPos(e.clientX, e.clientY);
  }

  function onMouseEnter(e: React.MouseEvent<HTMLDivElement>) {
    setPos(e.clientX, e.clientY);
    ref.current?.setAttribute("data-active", "true");
  }

  function onMouseLeave() {
    ref.current?.setAttribute("data-active", "false");
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={cn(
        "relative overflow-hidden rounded-2xl  bg-white/[0.02] p-5",
        "shadow-[0_0_0_1px_rgba(120,140,255,0.06),0_20px_60px_rgba(0,0,0,0.35)]",
        className,
      )}
      style={
        {
          // default mouse position so it doesn't look broken before hover
          "--x": "50%",
          "--y": "30%",
        } as React.CSSProperties
      }
    >
      {/* cursor-follow glow */}
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200",
          // turn on when active
          "[[data-active=true]_&]:opacity-100",
        )}
        style={{
          background:
            "radial-gradient(600px circle at var(--x) var(--y), rgba(120,140,255,0.22), rgba(120,140,255,0.08) 30%, rgba(0,0,0,0) 60%)",
        }}
      />

      {/* faint grid overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-30 [mask-image:radial-gradient(circle_at_50%_30%,black_0%,transparent_70%)]"
      >
        <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:28px_28px]" />
      </div>

      {/* content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export default function HansTimelineFlowbite() {
  return (
    <section className="relative w-full py-10">
      {/* big ambient glow */}
      <div className="pointer-events-none absolute inset-0 flex justify-center overflow-hidden">
        <div className="mt-[-220px] h-[640px] w-[640px] rounded-full bg-[radial-gradient(circle,rgba(120,140,255,0.14)_0%,rgba(120,140,255,0.05)_30%,transparent_65%)] blur-2xl" />
      </div>

      <div className="relative mx-auto w-full max-w-3xl px-4">
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-white">My timeline</h2>
          <p className="mt-1 text-sm text-white/60">
            Where my journey began and where I am headed. 
          </p>
        </div>

        <MouseGlowCard>
          <Timeline>
            {timeline.map((item) => (
              <TimelineItem key={`${item.time}-${item.title}`}>
                <TimelinePoint className="bg-white/60" />
                <TimelineContent className="grayscale opacity-75 transition duration-300 hover:grayscale-0 hover:opacity-100">
                  <TimelineTime className="text-white/50">
                    {item.time}
                  </TimelineTime>

                  <TimelineTitle className="text-white">
                    {item.title}
                  </TimelineTitle>

                  <TimelineBody className="text-white/70">
                    {item.body}
                  </TimelineBody>

                  {item.cta ? (
                    <a
                      href={item.cta.href}
                      className="mt-3 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-white/80 transition hover:bg-white/[0.06] hover:text-white"
                    >
                      {item.cta.label}
                      <HiArrowNarrowRight className="h-3 w-3" />
                    </a>
                  ) : null}
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </MouseGlowCard>
      </div>
    </section>
  );
}
