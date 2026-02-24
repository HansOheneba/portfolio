"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function SiteFooter() {
  return (
    <footer className="w-full border-t border-white/10 bg-black">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex items-center justify-center gap-6">
          <Link
            href="https://github.com/HansOheneba"
            target="_blank"
            aria-label="GitHub"
            className="text-white/60 transition hover:text-white"
          >
            <FontAwesomeIcon icon={faGithub} className="h-5 w-5" />
          </Link>

          <Link
            href="https://www.linkedin.com/in/hansopoku/"
            target="_blank"
            aria-label="LinkedIn"
            className="text-white/60 transition hover:text-white"
          >
            <FontAwesomeIcon icon={faLinkedin} className="h-5 w-5" />
          </Link>
        </div>

        <p className="mt-6 text-center text-xs text-white/40">
          © {new Date().getFullYear()} Hans Opoku
        </p>
      </div>
    </footer>
  );
}
