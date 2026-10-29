// app/projects/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "E-commerce stores, real estate platforms, non-profit sites and the admin dashboards behind them.",
};

type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  image: string;
  colSpan?: string;
  rowSpan?: string;
};

type LegacyProject = {
  slug: string;
  title: string;
  summary: string;
};

const projects: Project[] = [
  {
    slug: "unapologetic",
    title: "Unapologetic",
    category: "E-commerce • Admin • Delivery app",
    summary:
      "Streetwear store with Paystack checkout, a full admin dashboard and a rider delivery app.",
    image: "/projects/unapologetic.png",
    colSpan: "md:col-span-2",
    rowSpan: "md:row-span-2",
  },
  {
    slug: "airban",
    title: "Airban Homes",
    category: "Real estate • Admin panel",
    summary:
      "Property and doors platform with location search and a staff admin panel.",
    image: "/projects/airban-v2.png",
    colSpan: "md:col-span-2",
  },
  {
    slug: "raj",
    title: "Raj Kollections",
    category: "E-commerce",
    summary:
      "Everyday-essentials store with nationwide delivery, order tracking and PDF invoices.",
    image: "/projects/raj.png",
  },
  {
    slug: "samaa",
    title: "Samaa Charity Projects",
    category: "Non-profit • Campaign",
    summary: "Cause-led charity site with donations and an event campaign.",
    image: "/projects/samaa.png",
  },
  {
    slug: "asanka",
    title: "Asanka",
    category: "Concept • Restaurant",
    summary:
      "Modern Ghanaian restaurant with a cursor-led menu, pre-orders and a live reservation flow.",
    image: "/projects/asanka.png",
    colSpan: "md:col-span-2",
  },
  {
    slug: "haven",
    title: "Haven & Co.",
    category: "Concept • Real estate",
    summary:
      "Accra property agency with scroll-driven galleries, a room tour, live filters and a mortgage calculator.",
    image: "/projects/haven.png",
    colSpan: "md:col-span-2",
  },
  {
    slug: "aequitas",
    title: "Aequitas Foundation",
    category: "Non-profit • Events",
    summary:
      "Youth development foundation site with programmes, impact stats and an events calendar.",
    image: "/projects/aequitas.png",
    colSpan: "md:col-span-2",
  },
  {
    slug: "stacey",
    title: "Stacey Elsie Lamptey",
    category: "Personal brand • Bookings",
    summary:
      "Speaker website with booking enquiries and a newsletter wired into Google Sheets.",
    image: "/projects/stacey.png",
    colSpan: "md:col-span-2",
  },
];

const legacy: LegacyProject[] = [
  {
    slug: "bubble",
    title: "Bubble Bliss Cafe",
    summary: "Cafe ordering with cart, checkout and Hubtel SMS.",
  },
  {
    slug: "midnight",
    title: "Midnight Madness",
    summary: "Event ticketing, checkout and admin dashboard.",
  },
  {
    slug: "liftoff",
    title: "Liftoff",
    summary: "Wedding website with RSVP management.",
  },
  {
    slug: "hn",
    title: "H&M",
    summary: "Custom wedding platform with RSVP tracking.",
  },
];

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function ProjectsPage() {
  return (
    <div className="bg-white py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Heading */}
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col gap-3">
            <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              Projects
            </h1>

            <p className="max-w-2xl text-slate-600">
              Stores, listing platforms, campaign sites and the dashboards
              behind them. Hover a project to see what it is.
            </p>
          </div>

          <Link
            href="/#contact"
            className="inline-flex w-fit items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-900"
          >
            Start a project
          </Link>
        </div>

        {/* Bento Grid: image-only until hovered */}
        <div className="group/grid grid auto-rows-[240px] grid-cols-1 gap-4 sm:auto-rows-[280px] md:grid-cols-4 lg:auto-rows-[300px]">
          {projects.map((p, i) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className={cn(
                "group relative overflow-hidden rounded-3xl bg-slate-100 outline-none",
                "transition duration-500 ease-out",
                // dim the rest of the grid when one card is hovered or focused
                "[@media(hover:hover)]:group-hover/grid:opacity-40 [@media(hover:hover)]:group-hover/grid:saturate-50",
                "[@media(hover:hover)]:hover:!opacity-100 [@media(hover:hover)]:hover:!saturate-100",
                "focus-visible:ring-4 focus-visible:ring-slate-900/20",
                p.colSpan,
                p.rowSpan,
              )}
            >
              <Image
                src={p.image}
                alt={p.title}
                fill
                sizes={
                  p.colSpan
                    ? "(min-width: 768px) 50vw, 100vw"
                    : "(min-width: 768px) 25vw, 100vw"
                }
                priority={i < 2}
                className="object-cover object-top transition duration-700 ease-out group-hover:scale-[1.04]"
              />

              {/* Overlay: always visible on touch, revealed on hover elsewhere */}
              <div
                className={cn(
                  "absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent",
                  "transition duration-500",
                  "[@media(hover:hover)]:opacity-0 group-hover:!opacity-100 group-focus-visible:!opacity-100",
                )}
              />

              <div
                className={cn(
                  "absolute inset-x-0 bottom-0 flex flex-col gap-2 p-5 text-white sm:p-6",
                  "transition duration-500 ease-out",
                  "[@media(hover:hover)]:translate-y-4 [@media(hover:hover)]:opacity-0",
                  "group-hover:!translate-y-0 group-hover:!opacity-100 group-focus-visible:!translate-y-0 group-focus-visible:!opacity-100",
                )}
              >
                <span className="text-[11px] uppercase tracking-[0.18em] text-white/70">
                  {p.category}
                </span>
                <h2 className="text-lg font-semibold sm:text-xl">{p.title}</h2>
                <p className="max-w-md text-sm text-white/80">{p.summary}</p>
                <span className="mt-1 inline-flex items-center gap-2 text-xs font-medium text-white">
                  View case study
                  <span className="transition group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Legacy */}
        <div className="mt-20">
          <div className="mb-6 flex items-center gap-4">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Legacy
            </h2>
            <div className="h-px flex-1 bg-slate-200" />
          </div>
          <p className="mb-6 max-w-2xl text-sm text-slate-500">
            Earlier client builds whose events have passed or whose sites are
            no longer hosted. The write-ups are still here.
          </p>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {legacy.map((p) => (
              <Link
                key={p.slug}
                href={`/projects/${p.slug}`}
                className="group rounded-2xl border border-slate-200 p-4 transition hover:border-slate-300 hover:bg-slate-50"
              >
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>Archived</span>
                  <span className="transition group-hover:translate-x-1">
                    →
                  </span>
                </div>
                <h3 className="mt-2 font-medium text-slate-900">{p.title}</h3>
                <p className="mt-1 text-sm text-slate-500">{p.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
