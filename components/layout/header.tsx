"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

type NavItem = {
  label: string;
  href: string; // can be "#section" or "/projects"
};

type SiteHeaderProps = {
  name?: string;
  logoSrc?: string;
  nav?: NavItem[];
  ctaLabel?: string;
  ctaHref?: string;
  subtitle?: string;
  showSocials?: boolean;

  /**
   * Which nav item should get a "spotlight" treatment.
   * Defaults to "Work".
   */
  spotlightLabel?: string;
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
  spotlightLabel = "Work",
}: SiteHeaderProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  React.useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  function handleBrandClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();

    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      if (window.location.hash) {
        history.replaceState(null, "", window.location.pathname);
      }
    } else {
      router.push("/");
    }
  }

  function handleNavClick(
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    opts?: { closeMenu?: boolean },
  ) {
    const closeMenu = opts?.closeMenu ?? false;

    if (!href.startsWith("#")) {
      if (closeMenu) setOpen(false);
      return;
    }

    e.preventDefault();

    if (pathname !== "/") {
      router.push(`/${href}`);
      if (closeMenu) setOpen(false);
      return;
    }

    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });

    if (closeMenu) setOpen(false);
  }

  const isSpotlight = (item: NavItem) => item.label === spotlightLabel;

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* translucent look */}
      <div className="absolute inset-0 -z-10 border-b border-white/10 bg-black/35 backdrop-blur-xl" />

      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Left: Brand */}
        <Link
          href="/"
          onClick={handleBrandClick}
          className="group inline-flex min-w-0 items-center gap-3 rounded-xl px-2 py-1 transition hover:bg-white/5"
          aria-label={`${name} home`}
        >
          {logoSrc ? (
            <span className="relative h-9 w-9 flex-none overflow-hidden rounded-xl border border-white/10 bg-white/5">
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
                "grid h-9 w-9 flex-none place-items-center rounded-xl border border-white/10",
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

          <div className="min-w-0 leading-tight">
            <p className="truncate text-sm font-semibold text-white">{name}</p>
            <p className="hidden truncate text-xs text-white/60 sm:block">
              {subtitle}
            </p>
          </div>
        </Link>

        {/* Center nav: desktop only */}
        <nav className="hidden items-center justify-center md:flex">
          <ul className="flex items-center gap-2 text-sm text-white/70">
            {nav.map((item, idx) => {
              const isHash = item.href.startsWith("#");
              const spotlight = isSpotlight(item);

              return (
                <li key={item.href} className="flex items-center">
                  <Link
                    href={item.href}
                    onClick={
                      isHash ? (e) => handleNavClick(e, item.href) : undefined
                    }
                    className={cn(
                      "relative rounded-lg px-2 py-1 transition",
                      spotlight
                        ? "text-white"
                        : "hover:bg-white/5 hover:text-white",

                      // spotlight styling
                      spotlight &&
                        cn(
                          "px-3",
                          "bg-white/5 border border-white/10",
                          "shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_0_28px_rgba(255,255,255,0.12)]",
                          "animate-[workPulse_2.2s_ease-in-out_infinite]",
                          "hover:bg-white/10 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.10),0_0_36px_rgba(255,255,255,0.16)]",
                        ),
                    )}
                    aria-label={spotlight ? "Work (highlighted)" : item.label}
                  >
                    {/* subtle moving shimmer */}
                    {spotlight ? (
                      <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-lg">
                        <span className="absolute -left-10 top-0 h-full w-24 rotate-12 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[workShine_2.6s_linear_infinite]" />
                      </span>
                    ) : null}

                    <span className="relative z-10">{item.label}</span>
                  </Link>

                  {idx !== nav.length - 1 ? (
                    <span className="select-none px-1 text-white/30">/</span>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right */}
        <div className="flex items-center gap-2 sm:gap-3">
          {showSocials ? (
            <div className="hidden items-center gap-2 sm:flex">
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
            </div>
          ) : null}

          <Link
            href={ctaHref}
            className={cn(
              "hidden sm:inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2",
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

          <Link
            href={ctaHref}
            aria-label={ctaLabel}
            className={cn(
              "inline-flex sm:hidden items-center justify-center rounded-xl",
              "border border-white/10 bg-white/5 p-2 text-white/80 transition",
              "hover:bg-white/10 hover:text-white",
            )}
            onClick={
              ctaHref.startsWith("#")
                ? (e) => handleNavClick(e, ctaHref)
                : undefined
            }
          >
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              className="h-4 w-4"
            />
          </Link>

          <button
            type="button"
            className={cn(
              "inline-flex md:hidden items-center justify-center rounded-xl",
              "border border-white/10 bg-white/5 p-2 text-white/80 transition",
              "hover:bg-white/10 hover:text-white",
            )}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <FontAwesomeIcon
              icon={open ? faXmark : faBars}
              className="h-4 w-4"
            />
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div className={cn("md:hidden", open ? "block" : "hidden")}>
        <button
          type="button"
          aria-label="Close menu overlay"
          className="fixed inset-0 z-40 bg-black/55 backdrop-blur-[2px]"
          onClick={() => setOpen(false)}
        />

        <div className="fixed left-0 right-0 top-[56px] z-50 mx-auto w-full max-w-6xl px-4 sm:px-6">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/60 shadow-xl backdrop-blur-xl">
            <div className="flex flex-col gap-1 p-3">
              {nav.map((item) => {
                const isHash = item.href.startsWith("#");
                const spotlight = isSpotlight(item);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={
                      isHash
                        ? (e) =>
                            handleNavClick(e, item.href, { closeMenu: true })
                        : () => setOpen(false)
                    }
                    className={cn(
                      "relative flex items-center justify-between rounded-xl px-3 py-3",
                      "text-sm font-medium transition",
                      spotlight
                        ? cn(
                            "text-white",
                            "border border-white/10 bg-white/5",
                            "shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_0_28px_rgba(255,255,255,0.12)]",
                          )
                        : "text-white/85 hover:bg-white/5 hover:text-white",
                    )}
                  >
                    {spotlight ? (
                      <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-xl">
                        <span className="absolute -left-10 top-0 h-full w-24 rotate-12 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[workShine_2.6s_linear_infinite]" />
                      </span>
                    ) : null}

                    <span className="relative z-10">{item.label}</span>
                    <span className="relative z-10 text-white/30">→</span>
                  </Link>
                );
              })}

              {showSocials ? (
                <div className="mt-2 flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-3">
                  <p className="text-xs text-white/60">Socials</p>
                  <div className="flex items-center gap-2">
                    <Link
                      href="https://github.com/HansOheneba"
                      target="_blank"
                      aria-label="GitHub"
                      className="rounded-xl border border-white/10 bg-black/20 p-2 text-white/70 transition hover:bg-white/10 hover:text-white"
                      onClick={() => setOpen(false)}
                    >
                      <FontAwesomeIcon icon={faGithub} className="h-4 w-4" />
                    </Link>
                    <Link
                      href="https://www.linkedin.com/in/hansopoku/"
                      target="_blank"
                      aria-label="LinkedIn"
                      className="rounded-xl border border-white/10 bg-black/20 p-2 text-white/70 transition hover:bg-white/10 hover:text-white"
                      onClick={() => setOpen(false)}
                    >
                      <FontAwesomeIcon icon={faLinkedin} className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ) : null}

              <Link
                href={ctaHref}
                className={cn(
                  "mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl",
                  "bg-white px-4 py-3 text-sm font-medium text-black transition hover:bg-white/90",
                )}
                onClick={
                  ctaHref.startsWith("#")
                    ? (e) => handleNavClick(e, ctaHref, { closeMenu: true })
                    : () => setOpen(false)
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
        </div>
      </div>

      {/* local keyframes for the spotlight */}
      <style jsx global>{`
        @keyframes workPulse {
          0%,
          100% {
            transform: translateY(0);
            filter: brightness(1);
          }
          50% {
            transform: translateY(-1px);
            filter: brightness(1.08);
          }
        }

        @keyframes workShine {
          0% {
            transform: translateX(-30px) rotate(12deg);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          60% {
            opacity: 1;
          }
          100% {
            transform: translateX(220px) rotate(12deg);
            opacity: 0;
          }
        }
      `}</style>
    </header>
  );
}
