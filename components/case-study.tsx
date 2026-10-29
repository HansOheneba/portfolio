import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Check, Github, MessageCircle } from "lucide-react";
import type { Project } from "@/lib/projects";

const EMAIL = "hansoheneba.io@gmail.com";
const WHATSAPP = "https://wa.me/233592076527";

const sections = [
  { id: "brief", label: "The brief" },
  { id: "approach", label: "Approach" },
  { id: "showcase", label: "The work" },
  { id: "highlights", label: "Highlights" },
  { id: "build", label: "Under the hood" },
  { id: "outcome", label: "Outcome" },
];

function BrowserFrame({ src, alt, url, priority = false }: { src: string; alt: string; url: string; priority?: boolean }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_30px_80px_-30px_rgba(0,0,0,0.35)]">
      <div className="flex items-center gap-2 border-b border-black/5 bg-[#f1efe9] px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 truncate rounded-md bg-white px-3 py-1 text-xs text-neutral-500">
          {url.replace(/^https?:\/\//, "")}
        </span>
      </div>
      <div className="relative aspect-[16/10]">
        <Image src={src} alt={alt} fill priority={priority} sizes="(min-width: 1280px) 1200px, 100vw" className="object-cover object-top" />
      </div>
    </div>
  );
}

function SectionHeading({ n, title, accent }: { n: number; title: string; accent: string }) {
  return (
    <div className="mb-6 flex items-baseline gap-4">
      <span className="font-mono text-sm font-semibold" style={{ color: accent }}>
        {String(n).padStart(2, "0")}
      </span>
      <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">{title}</h2>
    </div>
  );
}

export default function CaseStudy({ project, next }: { project: Project; next: Project }) {
  const p = project;
  const mail = `mailto:${EMAIL}?subject=${encodeURIComponent(`Project enquiry: a site like ${p.title}`)}`;

  return (
    <article className="bg-[#f6f3ee] text-neutral-900">
      {/* Header */}
      <header className="mx-auto max-w-[1280px] px-5 pb-10 pt-10 sm:px-8 lg:pt-14">
        <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-neutral-500 transition hover:text-neutral-900">
          <ArrowLeft className="h-4 w-4" /> All projects
        </Link>

        <div className="mt-8 flex flex-wrap items-center gap-2 text-xs font-semibold">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 ring-1 ring-black/5">
            <span className="h-2 w-2 rounded-full" style={{ background: p.accent }} />
            {p.label}
          </span>
        </div>

        <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">{p.title}</h1>
        <p className="mt-6 max-w-3xl text-xl leading-relaxed text-neutral-600 sm:text-2xl">{p.tagline}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition hover:opacity-90"
            style={{ background: p.accent, color: p.accentInk }}
          >
            Visit the live site <ArrowUpRight className="h-4 w-4" />
          </a>
          {p.source ? (
            <a
              href={p.source}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold ring-1 ring-black/10 transition hover:bg-neutral-50"
            >
              <Github className="h-4 w-4" /> Source code
            </a>
          ) : null}
        </div>

        {/* Meta strip */}
        <dl className="mt-12 grid gap-6 border-y border-black/10 py-6 text-sm sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-neutral-400">Client</dt>
            <dd className="mt-2 leading-relaxed">{p.client}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-neutral-400">My role</dt>
            <dd className="mt-2 leading-relaxed">{p.role.join(" · ")}</dd>
          </div>
          <div className="lg:col-span-2">
            <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-neutral-400">Built with</dt>
            <dd className="mt-2 flex flex-wrap gap-1.5">
              {p.stack.map((s) => (
                <span key={s} className="rounded-full bg-white px-2.5 py-1 text-xs ring-1 ring-black/5">
                  {s}
                </span>
              ))}
            </dd>
          </div>
        </dl>
      </header>

      {/* Hero shot */}
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <BrowserFrame src={p.showcase[0].src} alt={`${p.title} homepage`} url={p.url} priority />
      </div>

      {/* Body */}
      <div className="mx-auto grid max-w-[1280px] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[200px_1fr] lg:gap-16">
        <nav aria-label="On this page" className="hidden lg:block">
          <ul className="sticky top-28 space-y-3 text-sm">
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="text-neutral-500 transition hover:text-neutral-900">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="min-w-0 space-y-24">
          <section id="brief" className="scroll-mt-28">
            <SectionHeading n={1} title="The brief" accent={p.accent} />
            <p className="max-w-3xl text-xl leading-relaxed text-neutral-700">{p.brief}</p>
            <ul className="mt-8 grid max-w-3xl gap-3 sm:grid-cols-2">
              {p.goals.map((g) => (
                <li key={g} className="flex items-start gap-3 rounded-2xl bg-white p-4 text-sm leading-relaxed ring-1 ring-black/5">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full" style={{ background: p.accent, color: p.accentInk }}>
                    <Check className="h-3 w-3" />
                  </span>
                  {g}
                </li>
              ))}
            </ul>
          </section>

          <section id="approach" className="scroll-mt-28">
            <SectionHeading n={2} title="Approach" accent={p.accent} />
            <ol className="max-w-3xl divide-y divide-black/10 border-y border-black/10">
              {p.approach.map((step, i) => (
                <li key={step.title} className="grid gap-2 py-6 sm:grid-cols-[48px_1fr]">
                  <span className="font-mono text-sm text-neutral-400">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="text-lg font-semibold">{step.title}</h3>
                    <p className="mt-1 leading-relaxed text-neutral-600">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section id="showcase" className="scroll-mt-28">
            <SectionHeading n={3} title="The work" accent={p.accent} />
            <div className="space-y-12">
              {p.showcase.slice(1).map((shot) => (
                <figure key={shot.src}>
                  <BrowserFrame src={shot.src} alt={shot.caption} url={p.url} />
                  <figcaption className="mt-4 max-w-2xl text-sm leading-relaxed text-neutral-500">{shot.caption}</figcaption>
                </figure>
              ))}
            </div>
          </section>

          <section id="highlights" className="scroll-mt-28">
            <SectionHeading n={4} title="Highlights" accent={p.accent} />
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {p.highlights.map((h) => (
                <div key={h.title} className="rounded-2xl bg-white p-6 ring-1 ring-black/5">
                  <span className="block h-1 w-8 rounded-full" style={{ background: p.accent }} />
                  <h3 className="mt-4 font-semibold">{h.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">{h.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="build" className="scroll-mt-28">
            <SectionHeading n={5} title="Under the hood" accent={p.accent} />
            <ul className="max-w-3xl space-y-4">
              {p.engineering.map((e) => (
                <li key={e} className="flex gap-4 leading-relaxed text-neutral-700">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
                  {e}
                </li>
              ))}
            </ul>
          </section>

          <section id="outcome" className="scroll-mt-28">
            <SectionHeading n={6} title="Outcome" accent={p.accent} />
            <p className="max-w-3xl text-2xl leading-snug tracking-tight text-neutral-900 sm:text-3xl">{p.outcome}</p>
            <ul className="mt-8 max-w-3xl space-y-3">
              {p.outcomePoints.map((o) => (
                <li key={o} className="flex items-start gap-3 text-neutral-700">
                  <Check className="mt-1 h-4 w-4 shrink-0" style={{ color: p.accent }} />
                  {o}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>

      {/* CTA in the project's colour */}
      <section className="px-5 pb-6 sm:px-8">
        <div
          className="mx-auto flex max-w-[1280px] flex-col justify-between gap-8 rounded-[32px] p-8 sm:p-12 lg:flex-row lg:items-end"
          style={{ background: p.accent, color: p.accentInk }}
        >
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] opacity-70">Work with me</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">{p.pitch}</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={mail} className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-100">
              Start a project <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold ring-1 ring-current transition hover:bg-white/10">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Next project */}
      <section className="px-5 pb-16 pt-6 sm:px-8">
        <Link href={`/projects/${next.slug}`} className="group mx-auto grid max-w-[1280px] items-center gap-6 overflow-hidden rounded-[32px] bg-white p-6 ring-1 ring-black/5 sm:grid-cols-[1fr_320px] sm:p-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-400">Next project</p>
            <p className="mt-2 text-3xl font-semibold tracking-tight">{next.title}</p>
            <p className="mt-1 text-neutral-500">{next.label}</p>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
            <Image src={next.thumb} alt={next.title} fill sizes="320px" className="object-cover object-top transition duration-700 group-hover:scale-105" />
          </div>
        </Link>
      </section>
    </article>
  );
}
