"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { MouseEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

type NavItem = {
  label: string;
  href: string; // can be "#section" or "/projects"
};

type SiteHeaderProps = {
  name?: string;
  logoSrc?: string;

  // center links (to mimic: Home / About / Features)
  nav?: NavItem[];

  // right CTA (to mimic: Get it Now ↗)
  ctaLabel?: string;
  ctaHref?: string;

  subtitle?: string;

  // optional: show social icons
  showSocials?: boolean;
};

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function SiteHeader({
  name = "Hans Opoku",
  logoSrc,
  subtitle = "Security First • Design Minded",
  nav = [
    { label: "Home", href: "#top" },
    { label: "Work", href: "/projects" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" },
  ],
  ctaLabel = "Get in touch",
  ctaHref = "#contact",
  showSocials = true,
}: SiteHeaderProps) {
  const router = useRouter();
  const pathname = usePathname();

  // Brand click behavior:
  // - On home: scroll to top
  // - On any other page: go home
  function handleBrandClick(e: MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();

    if (pathname === "/") {
      // top of document
      window.scrollTo({ top: 0, behavior: "smooth" });
      // also ensure hash cleared
      if (window.location.hash) {
        history.replaceState(null, "", window.location.pathname);
      }
    } else {
      router.push("/");
    }
  }

  // Hash links:
  // - If on home: smooth scroll
  // - If not on home: go home with hash (your Home useEffect handles the scroll)
  function handleNavClick(e: MouseEvent<HTMLAnchorElement>, href: string) {
    if (!href.startsWith("#")) return;

    e.preventDefault();

    if (pathname !== "/") {
      router.push(`/${href}`);
      return;
    }

    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* keep your current translucent look */}
      <div className="absolute inset-0 -z-10 border-b border-white/10 bg-black/35 backdrop-blur-xl" />

      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Left: Brand (logo + name) */}
        <Link
          href="/"
          onClick={handleBrandClick}
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

        {/* Center: “Home / About / Features …” style */}
        <nav className="hidden items-center justify-center md:flex">
          <ul className="flex items-center gap-2 text-sm text-white/70">
            {nav.map((item, idx) => {
              const isHash = item.href.startsWith("#");
              const isExternalOrPage = !isHash;

              return (
                <li key={item.href} className="flex items-center">
                  <Link
                    href={item.href}
                    className="rounded-lg px-2 py-1 transition hover:bg-white/5 hover:text-white"
                    onClick={
                      isHash ? (e) => handleNavClick(e, item.href) : undefined
                    }
                  >
                    {item.label}
                  </Link>

                  {idx !== nav.length - 1 ? (
                    <span className="select-none px-1 text-white/30">/</span>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right: Socials + CTA like “Get it Now ↗” */}
        <div className="flex items-center gap-3">
          {showSocials ? (
            <>
              <Link
                href="https://github.com/HansOheneba"
                target="_blank"
                aria-label="GitHub"
                className="rounded-xl border border-white/10 bg-white/5 p-2 text-white/70 transition hover:bg-white/10 hover:text-white"
              >
                <FontAwesomeIcon icon={faGithub} className="h-4 w-4" />
              </Link>

              <Link
                href="https://www.linkedin.com/in/hansopoku/"
                target="_blank"
                aria-label="LinkedIn"
                className="rounded-xl border border-white/10 bg-white/5 p-2 text-white/70 transition hover:bg-white/10 hover:text-white"
              >
                <FontAwesomeIcon icon={faLinkedin} className="h-4 w-4" />
              </Link>
            </>
          ) : null}

          <Link
            href={ctaHref}
            className={cn(
              "inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2",
              "text-sm font-medium text-black transition hover:bg-white/90",
            )}
            onClick={
              ctaHref.startsWith("#")
                ? (e) => handleNavClick(e, ctaHref)
                : undefined
            }
          >
            {ctaLabel}
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              className="h-3.5 w-3.5"
            />
          </Link>
        </div>
      </div>
    </header>
  );
}
