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
    <section className="py-16 border-y border-neutral-200 dark:border-neutral-800 w-full">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-center text-sm uppercase tracking-widest text-neutral-500 mb-10">
          Core Technologies
        </p>

        <div className="flex flex-wrap justify-center gap-x-10 gap-y-8 items-center">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="group flex flex-col items-center justify-center opacity-70 hover:opacity-100 transition relative"
            >
              <Image
                src={tech.logo}
                alt={tech.name}
                width={56}
                height={56}
                className="object-contain grayscale group-hover:grayscale-0 transition duration-300 w-14 h-14 sm:w-20 sm:h-20"
              />
              <span
                className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 rounded bg-black/80 px-3 py-1 text-xs text-white opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all whitespace-nowrap z-10 shadow-lg"
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
