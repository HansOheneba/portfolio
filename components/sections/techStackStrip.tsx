"use client";

import Image from "next/image";

type Tech = {
  name: string;
  logo: string; // path in /public
};

const technologies: Tech[] = [
  { name: "Next.js", logo: "/logos/nextjs.png" },
  { name: "TypeScript", logo: "/logos/ts.png" },
  { name: "Laravel", logo: "/logos/laravel.jpeg" },
  { name: "GitHub", logo: "/logos/github.png" },
  { name: "Vercel", logo: "/logos/vercel.png" },
  { name: "Django", logo: "/logos/django.jpeg" },
  { name: "Tailwind CSS", logo: "/logos/tailwind.jpeg" },
  { name: "Hostinger", logo: "/logos/hostinger.jpeg" },
  { name: "Python", logo: "/logos/python.svg" },
  { name: "MySQL", logo: "/logos/sql.svg" },
  { name: "PHP", logo: "/logos/php.jpeg" },
];

export default function TechStackStrip() {
  return (
    <section className="w-full bg-white py-16 border-y border-slate-200">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-center text-sm uppercase tracking-widest text-blue-950 mb-10">
          Core Technologies
        </p>

        <div className="flex flex-wrap justify-center gap-x-10 gap-y-8 items-center">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className={[
                "group relative flex flex-col items-center justify-center",
                "opacity-70 hover:opacity-100 transition",
                "focus-within:opacity-100",
              ].join(" ")}
            >
              <Image
                src={tech.logo}
                alt={tech.name}
                width={56}
                height={56}
                className={[
                  "object-contain w-14 h-14 sm:w-20 sm:h-20",
                  "grayscale group-hover:grayscale-0 transition duration-300",
                  "group-hover:scale-[1.03]",
                ].join(" ")}
              />

              {/* Tooltip: keep the same behavior, but tuned for light mode */}
              <span
                className={[
                  "pointer-events-none absolute left-1/2 top-full mt-3 -translate-x-1/2",
                  "rounded-xl border border-slate-200 bg-white/95 px-3 py-1.5",
                  "text-xs text-slate-800 shadow-lg backdrop-blur",
                  "opacity-0 translate-y-0",
                  "group-hover:opacity-100 group-hover:translate-y-1",
                  "transition-all whitespace-nowrap z-10",
                ].join(" ")}
                style={{ minWidth: "max-content" }}
              >
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
