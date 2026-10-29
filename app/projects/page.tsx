// app/projects/page.tsx
import Link from "next/link";
import Image from "next/image";

type Project = {
  slug: string;
  title: string;
  summary: string;
  image: string;
  colSpan?: string;
  rowSpan?: string;
};

const projects: Project[] = [
  {
    slug: "unapologetic",
    title: "Unapologetic",
    summary:
      "Streetwear store with Paystack checkout, a full admin dashboard and a rider delivery app.",
    image: "/projects/unapologetic.png",
    colSpan: "lg:col-span-2",
    rowSpan: "lg:row-span-2",
  },
  {
    slug: "airban",
    title: "Airban Homes",
    summary:
      "Real estate and doors platform with property search and a staff admin panel.",
    image: "/projects/airban-v2.png",
    colSpan: "lg:col-span-2",
  },
  {
    slug: "samaa",
    title: "Samaa Charity Projects",
    summary: "Cause-led charity site with donations and an event campaign.",
    image: "/projects/samaa.png",
  },
  {
    slug: "bubble",
    title: "Bubble Bliss Cafe",
    summary:
      "Cafe ordering with cart, checkout, Hubtel SMS and an admin dashboard.",
    image: "/projects/bb.png",
  },
  {
    slug: "midnight",
    title: "Midnight Madness",
    summary:
      "Event landing, ticket selection, and checkout flow with admin dashboard.",
    image: "/projects/mm3.png",
  },
  {
    slug: "liftoff",
    title: "Liftoff",
    summary:
      "Design-forward wedding website with RSVP management and guest coordination.",
    image: "/projects/lift.png",
    colSpan: "lg:col-span-2",
  },
  {
    slug: "hn",
    title: "H&M",
    summary:
      "Custom wedding platform with RSVP tracking and polished guest journey.",
    image: "/projects/hn.png",
  },
];

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function ProjectsPage() {
  return (
    <div className="bg-white py-12 lg:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Heading */}
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col gap-3">
            <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              Projects
            </h1>

            <p className="max-w-2xl text-slate-600">
              Stores, listing platforms, campaign sites and the dashboards
              behind them. A few client projects are not shown here for
              confidentiality reasons.
            </p>
          </div>

          <Link
            href="/#contact"
            className="inline-flex w-fit items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-900"
          >
            Start a project
          </Link>
        </div>

        {/* Bento Grid */}
        <div className="grid auto-rows-[180px] grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:auto-rows-[220px]">
          {projects.map((p) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className={cn(
                "group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:shadow-xl",
                p.colSpan,
                p.rowSpan,
              )}
            >
              {/* Image */}
              <Image
                src={p.image}
                alt={p.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition group-hover:from-black/90 group-hover:via-black/60" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                <div className="space-y-1">
                  <h2 className="text-sm font-semibold sm:text-base">
                    {p.title}
                  </h2>
                  <p className="text-xs text-white/80 sm:text-sm">
                    {p.summary}
                  </p>
                </div>

                <div className="mt-3 flex items-center justify-between text-xs text-white/70">
                  <span>View project</span>
                  <span className="transition group-hover:translate-x-1">
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
