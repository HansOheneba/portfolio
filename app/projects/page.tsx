// app/projects/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { getProject, legacy, type Project } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Restaurant, property, e-commerce and charity websites by Hans Opoku.",
};

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

// Bento placement. Below xl the grid collapses to 1–2 columns and tiles flow
// in source order; at xl every tile is pinned to a 6-column, 84px-row layout.
const place = {
  intro: "md:col-span-2 row-span-5 xl:col-[1/3] xl:row-[1/7]",
  newBar: "md:col-span-2 row-span-1 xl:col-[3/7] xl:row-[1/2]",
  asanka: "row-span-4 xl:col-[3/5] xl:row-[2/7]",
  haven: "row-span-4 xl:col-[5/7] xl:row-[2/7]",
  clientBar: "md:col-span-2 row-span-1 xl:col-[1/3] xl:row-[7/8]",
  unapologetic: "row-span-4 md:col-span-2 xl:col-[1/3] xl:row-[8/13]",
  airban: "row-span-4 xl:col-[3/5] xl:row-[7/10]",
  raj: "row-span-4 xl:col-[5/6] xl:row-[7/10]",
  samaa: "row-span-4 xl:col-[6/7] xl:row-[7/10]",
  dashboards: "row-span-7 md:col-span-2 md:row-span-4 xl:col-[3/7] xl:row-[10/13]",
  aequitas: "row-span-4 xl:col-[1/4] xl:row-[13/17]",
  stacey: "row-span-4 xl:col-[4/7] xl:row-[13/17]",
};

function ProjectTile({ project, className }: { project: Project; className: string }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      data-tile
      className={cn(
        "group relative overflow-hidden rounded-[28px] bg-neutral-900 outline-none",
        "transition duration-500 ease-out",
        "focus-visible:ring-4 focus-visible:ring-white/40",
        className,
      )}
    >
      <Image
        src={project.thumb}
        alt={project.title}
        fill
        sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
        className="object-cover object-top transition duration-700 ease-out group-hover:scale-[1.04]"
      />

      {/* Overlay: always visible on touch, revealed on hover elsewhere */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent transition duration-500 [@media(hover:hover)]:opacity-0 group-hover:!opacity-100 group-focus-visible:!opacity-100" />
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-white transition duration-500 ease-out [@media(hover:hover)]:translate-y-4 [@media(hover:hover)]:opacity-0 group-hover:!translate-y-0 group-hover:!opacity-100 group-focus-visible:!translate-y-0 group-focus-visible:!opacity-100 sm:p-6">
        <div className="min-w-0">
          <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/70">{project.label}</p>
          <h2 className="mt-1 text-xl font-semibold sm:text-2xl">{project.title}</h2>
          <p className="mt-1 max-w-md text-sm text-white/80">{project.cardSummary}</p>
        </div>
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white text-neutral-900 transition group-hover:rotate-45">
          <ArrowUpRight className="h-5 w-5" />
        </span>
      </div>
    </Link>
  );
}

function Bar({ children, className, tone }: { children: React.ReactNode; className: string; tone: string }) {
  return (
    <div className={cn("flex items-center justify-between gap-4 rounded-[22px] px-6 text-lg font-semibold sm:text-xl", tone, className)}>
      {children}
    </div>
  );
}

export default function ProjectsPage() {
  const p = (slug: string) => getProject(slug)!;

  return (
    <div className="bg-[#0f0f0f] py-10 lg:py-14">
      <div className="mx-auto w-full max-w-[1680px] px-4 sm:px-6 lg:px-10">
        <div
          className={cn(
            "grid auto-rows-[84px] grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-6",
            // dim the other project tiles while one is hovered
            "[@media(hover:hover)]:[&:has([data-tile]:hover)_[data-tile]:not(:hover)]:opacity-45",
          )}
        >
          {/* Intro */}
          <section className={cn("flex flex-col justify-between rounded-[28px] bg-[#f3ede2] p-7 text-neutral-900 sm:p-9", place.intro)}>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#b5523b]">Work</p>
              <h1 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
                Sites that bring in bookings and sales.
              </h1>
              <p className="mt-5 max-w-md text-base leading-relaxed text-neutral-600">
                Restaurants, property, shops and charities. I design and build each one, and most come with
                an admin the owner runs.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link href="/#contact" className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-neutral-700">
                Start a project <ArrowUpRight className="h-4 w-4" />
              </Link>
              <a href="https://wa.me/233592076527" target="_blank" rel="noopener noreferrer" className="rounded-full border border-neutral-900/15 px-5 py-3 text-sm font-semibold transition hover:bg-neutral-900/5">
                WhatsApp me
              </a>
            </div>
          </section>

          <Bar tone="bg-[#f3a712] text-neutral-900" className={place.newBar}>
            <span>Hospitality &amp; property</span>
          </Bar>
          <ProjectTile project={p("asanka")} className={place.asanka} />
          <ProjectTile project={p("haven")} className={place.haven} />

          <Bar tone="bg-[#e4572e] text-white" className={place.clientBar}>
            <span>Client work</span>
          </Bar>
          <ProjectTile project={p("unapologetic")} className={place.unapologetic} />
          <ProjectTile project={p("airban")} className={place.airban} />
          <ProjectTile project={p("raj")} className={place.raj} />
          <ProjectTile project={p("samaa")} className={place.samaa} />

          {/* What sets the builds apart */}
          <section className={cn("relative flex flex-col justify-between overflow-hidden rounded-[28px] bg-[#12355b] p-7 text-white sm:p-9", place.dashboards)}>
            <div className="max-w-2xl">
              <h2 className="text-2xl font-semibold sm:text-3xl">Built to run the business.</h2>
              <p className="mt-3 leading-relaxed text-white/75">
                Unapologetic dispatches riders from its admin. Airban staff edit their own listings. Raj takes
                Mobile Money. Stacey&apos;s enquiries land in a Google Sheet.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {["Admin dashboards", "Payments", "Bookings", "Delivery tracking"].map((t) => (
                  <span key={t} className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium ring-1 ring-white/15">
                    {t}
                  </span>
                ))}
              </div>
              <Link href="/#contact" aria-label="Start a project" className="grid h-11 w-11 place-items-center rounded-full bg-white text-[#12355b] transition hover:rotate-45">
                <ArrowUpRight className="h-5 w-5" />
              </Link>
            </div>
          </section>

          <ProjectTile project={p("aequitas")} className={place.aequitas} />
          <ProjectTile project={p("stacey")} className={place.stacey} />
        </div>

        {/* Legacy row, styled like a partner strip */}
        <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-6">
          <Bar tone="bg-white/10 text-white" className="min-h-[96px] sm:col-span-2">
            <span>Older work</span>
          </Bar>
          {legacy.map((l) => (
            <Link
              key={l.slug}
              href={`/projects/${l.slug}`}
              className="group flex min-h-[96px] flex-col justify-center rounded-[22px] bg-white px-5 py-4 text-neutral-900 transition hover:bg-neutral-100"
            >
              <span className="flex items-center justify-between font-semibold">
                {l.title}
                <ArrowUpRight className="h-4 w-4 text-neutral-400 transition group-hover:rotate-45 group-hover:text-neutral-900" />
              </span>
              <span className="mt-1 text-xs text-neutral-500">{l.summary}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
