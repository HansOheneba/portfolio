"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { MouseEvent } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

type NavItem = {
  label: string;
  href: string;
};

type SiteHeaderProps = {
  name?: string;
  logoSrc?: string;
  nav?: NavItem[];
  ctaLabel?: string;
  ctaHref?: string;
  subtitle?: string;
};

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function SiteHeader({
  name = "Hans Opoku",
  logoSrc,
  nav = [
    { label: "Work", href: "/projects" },
    { label: "Contact", href: "#contact" },
  ],
  subtitle = "Security First • Design Minded",
  ctaLabel = "Contact",
  ctaHref = "#contact",
}: SiteHeaderProps) {
  const router = useRouter();
  const pathname = usePathname();

  // Handles hash links: if not on home, go home then scroll
  function handleNavClick(e: MouseEvent<HTMLAnchorElement>, href: string) {
    if (href.startsWith("#")) {
      e.preventDefault();
      if (pathname !== "/") {
        // Go to home with hash, then scroll on mount
        router.push(`/${href}`);
      } else {
        // Already on home, scroll
        const id = href.replace("#", "");
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="absolute inset-0 -z-10 border-b border-white/10 bg-black/35 backdrop-blur-xl" />

      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Brand */}
        <Link
          href="#top"
          className="group inline-flex items-center gap-3 rounded-xl px-2 py-1 transition hover:bg-white/5"
          aria-label={`${name} home`}
        >
          {logoSrc ? (
            <span className="relative h-9 w-9 overflow-hidden rounded-xl border border-white/10 bg-white/5">
              <Image
                src={logoSrc}
                alt={`${name} logo`}
                fill
                className="object-cover"
                priority
              />
            </span>
          ) : (
            <span
              className={cn(
                "grid h-9 w-9 place-items-center rounded-xl border border-white/10",
                "bg-gradient-to-br from-white/10 to-white/5",
              )}
            >
              <span className="text-sm font-semibold text-white">
                {name
                  .split(" ")
                  .slice(0, 2)
                  .map((w) => w[0])
                  .join("")}
              </span>
            </span>
          )}

          <div className="leading-tight">
            <p className="text-sm font-semibold text-white">{name}</p>
            <p className="text-xs text-white/60">{subtitle}</p>
          </div>
        </Link>

        {/* Nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-xl px-3 py-2 text-sm text-white/70 transition hover:bg-white/5 hover:text-white"
              onClick={
                item.href.startsWith("#")
                  ? (e) => handleNavClick(e, item.href)
                  : undefined
              }
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          {/* GitHub */}
          <Link
            href="https://github.com/HansOheneba"
            target="_blank"
            aria-label="GitHub"
            className="rounded-xl border border-white/10 bg-white/5 p-2 text-white/70 transition hover:bg-white/10 hover:text-white"
          >
            <FontAwesomeIcon icon={faGithub} className="h-4 w-4" />
          </Link>

          {/* LinkedIn */}
          <Link
            href="https://www.linkedin.com/in/hansopoku/"
            target="_blank"
            aria-label="LinkedIn"
            className="rounded-xl border border-white/10 bg-white/5 p-2 text-white/70 transition hover:bg-white/10 hover:text-white"
          >
            <FontAwesomeIcon icon={faLinkedin} className="h-4 w-4" />
          </Link>

          {/* CTA */}
          <Link
            href={ctaHref}
            className="hidden rounded-xl bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-white/90 md:inline-flex"
            onClick={
              ctaHref.startsWith("#")
                ? (e) => handleNavClick(e, ctaHref)
                : undefined
            }
          >
            {ctaLabel}
          </Link>
        </div>
      </div>
    </header>
  );
}
