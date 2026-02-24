// app/projects/page.tsx
import Link from "next/link";
import Image from "next/image";

type Project = {
  slug: string;
  title: string;
  summary: string;
  image: string;
  span?: "normal" | "wide";
  height?: "short" | "tall";
};

const projects: Project[] = [
  {
    slug: "airban",
    title: "Airban Homes",
    summary: "E-commerce flows with strong data integrity and admin tooling.",
    image: "/projects/airban.png",
    span: "wide",
    height: "short",
  },
  {
    slug: "midnight",
    title: "Midnight Madness",
    summary:
      "Event landing, ticket selection, and checkout flow for a Halloween party, paired with an admin dashboard for payments and entry control.",
    image: "/projects/mm3.png",
    span: "normal",
    height: "short",
  },
  {
    slug: "wealth-overview-dashboard",
    title: "Wealth Overview Dashboard",
    summary: "Front-end dashboard UI with insights and clean data visuals.",
    image: "/projects/wealth-dashboard.jpg",
    span: "normal",
    height: "short",
  },
  {
    slug: "bubble",
    title: "Bubble Bliss Cafe",
    summary:
      "Mobile and desktop ordering flow with fast cart edits, structured checkout, Hubtel SMS confirmations, and an admin dashboard.",
    image: "/projects/bb.png",
    span: "wide",
    height: "short",
  },
  {
    slug: "liftoff",
    title: "Liftoff",
    summary:
      "Design-forward wedding website with RSVP management, photo gallery, event timeline, and seamless guest coordination.",
    image: "/projects/lift.png",
    span: "wide",
    height: "short",
  },
  {
    slug: "hn",
    title: "H&M",
    summary:
      "Custom wedding platform with RSVP tracking, event scheduling, countdown timers, and a polished guest journey.",
    image: "/projects/hn.png",
    span: "normal",
    height: "short",
  },
];

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function ProjectsPage() {
  return (
    <div className="bg-white py-10 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Heading */}
        <div className="mb-6 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col gap-3">
            <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              Projects
            </h1>

            <p className="max-w-2xl text-slate-600">
              A selection of front-end and security-minded builds. Some
              additional projects are not displayed here due to privacy and
              confidentiality constraints.
            </p>
          </div>

          <Link
            href="/#contact"
            className="inline-flex w-fit items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-900"
          >
            Reach out
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6">
          {projects.map((p) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className={cn(
                "group relative flex items-end overflow-hidden rounded-3xl border border-slate-200 bg-white",
                "shadow-sm transition hover:shadow-lg",
                p.span === "wide" ? "sm:col-span-2" : "sm:col-span-1",
                p.height === "tall" ? "h-64 sm:h-96" : "h-48 sm:h-72",
              )}
            >
              {/* Image */}
              <Image
                src={p.image}
                alt={p.title}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 33vw"
                className="object-cover object-center transition duration-300 group-hover:scale-105"
              />

              {/* Always-on dark gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition group-hover:from-black/90 group-hover:via-black/60" />

              {/* Text Content */}
              <div className="relative w-full p-4">
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-semibold text-white sm:text-base">
                    {p.title}
                  </span>
                  <span className="text-xs text-white/80 sm:text-sm">
                    {p.summary}
                  </span>
                </div>

                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xs text-white/70">View project</span>
                  <span className="text-sm text-white transition group-hover:translate-x-0.5">
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
