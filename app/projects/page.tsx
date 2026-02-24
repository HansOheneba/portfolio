// app/projects/page.tsx
import Link from "next/link";
import Image from "next/image";

type Project = {
  slug: string;
  title: string;
  summary: string;
  image: string; // put images in /public/projects/*
  span?: "normal" | "wide";
  height?: "short" | "tall";
};

const projects: Project[] = [
  {
    slug: "wealth-overview-dashboard",
    title: "Wealth Overview Dashboard",
    summary: "Front-end dashboard UI with insights and clean data visuals.",
    image: "/projects/wealth-dashboard.jpg",
    span: "normal",
    height: "short",
  },
  {
    slug: "midnight",
    title: "Midnight Madness",
    summary: "Onboarding and upgrade flow with conversion-focused UX.",
    image: "/projects/celerey.jpg",
    span: "wide",
    height: "short",
  },
  {
    slug: "airban",
    title: "Airban Doors Platform",
    summary: "E-commerce flows with strong data integrity and admin tooling.",
    image: "/projects/airban.jpg",
    span: "wide",
    height: "short",
  },
  {
    slug: "bubble",
    title: "Bubble Bliss Ordering",
    summary: "Cart, checkout, and ordering experience for a food brand.",
    image: "/projects/bubblebliss.jpg",
    span: "normal",
    height: "short",
  },
];

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function ProjectsPage() {
  return (
    <div className="bg-black py-10 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Heading row */}
        <div className="mb-6 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col gap-3">
            <h1 className="text-3xl font-semibold text-white sm:text-4xl">
              Projects
            </h1>

            <p className="max-w-2xl text-white/65">
              A selection of front-end and security-minded builds. Some
              additional projects are not displayed here due to privacy and
              confidentiality constraints. Hover to preview the title. Click to
              open the dedicated project page.
            </p>
          </div>

          <Link
            href="/#contact"
            className="inline-flex w-fit items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
          >
            Reach out
          </Link>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6">
          {projects.map((p) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className={cn(
                "group relative flex items-end overflow-hidden rounded-3xl border border-white/10 bg-white/5",
                "shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition",
                "hover:border-white/20 hover:bg-white/7 focus:outline-none focus:ring-2 focus:ring-white/30",
                p.span === "wide" ? "sm:col-span-2" : "sm:col-span-1",
                p.height === "tall" ? "h-64 sm:h-96" : "h-48 sm:h-72",
              )}
              aria-label={`Open project: ${p.title}`}
            >
              {/* Image */}
              <Image
                src={p.image}
                alt={p.title}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 33vw"
                className="object-cover object-center transition duration-300 group-hover:scale-110"
                priority={false}
              />

              {/* Dark gradient overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-70 transition group-hover:opacity-90" />

              {/* Hover overlay content */}
              <div className="relative w-full p-4 sm:p-5">
                <div
                  className={cn(
                    "inline-flex max-w-full flex-col gap-1 bg-gradient-to-t from-black/55 via  to-transparent px-3 py-2",
                    "backdrop-blur-md transition",
                    "opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0",
                  )}
                >
                  <span className="text-sm font-semibold text-white sm:text-base">
                    {p.title}
                  </span>
                  <span className="text-xs text-white/65 sm:text-sm">
                    {p.summary}
                  </span>
                </div>

                {/* Always-visible hint */}
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xs text-white/50">View project</span>
                  <span className="text-sm text-white/70 transition group-hover:translate-x-0.5">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
