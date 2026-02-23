"use client";

import { useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

type ContactSectionProps = {
  email?: string;
};

export default function ContactSection({
  email = "youremail@example.com",
}: ContactSectionProps) {
  const mailtoLink = useMemo(() => {
    const subject = encodeURIComponent(
      "Portfolio Inquiry - Let’s Work Together",
    );

    const body = encodeURIComponent(
      `Hi Hans,

I came across your portfolio and would love to connect.

Here’s a little about what I’m looking for:
- Project / Role:
- Timeline:
- Budget (if applicable):

Looking forward to hearing from you.

Best regards,
`,
    );

    return `mailto:${email}?subject=${subject}&body=${body}`;
  }, [email]);

  return (
    <section id="contact" className="scroll-mt-32 bg-black py-24 mx-auto">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">
          Let’s Build Something Secure & Beautiful
        </h2>

        <p className="mt-4 text-white/65">
          I design modern front-end systems with security built in from the
          start. Whether you are hiring, collaborating, or exploring an idea, I
          would love to hear from you.
        </p>

        <div className="mt-10 flex items-center justify-center gap-3">
          <a
            href={mailtoLink}
            className="inline-flex items-center gap-3 rounded-2xl bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/90"
          >
            <FontAwesomeIcon icon={faPaperPlane} className="h-4 w-4" />
            Send Me an Email
          </a>
          <a
            href="https://wa.me/233592076527"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-2xl bg-green-500 px-6 py-3 text-sm font-medium text-white transition hover:bg-green-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 13.487c-.263-.131-1.558-.77-1.799-.858-.24-.088-.415-.131-.59.132-.175.263-.676.858-.828 1.033-.151.175-.304.197-.567.066-.263-.132-1.11-.409-2.114-1.304-.782-.696-1.31-1.556-1.464-1.819-.151-.263-.016-.405.115-.536.118-.117.263-.304.395-.456.132-.151.175-.263.263-.438.088-.175.044-.329-.022-.46-.066-.132-.59-1.424-.808-1.95-.213-.512-.429-.442-.59-.45l-.502-.009c-.175 0-.46.066-.701.329-.24.263-.92.899-.92 2.188 0 1.289.942 2.534 1.073 2.708.132.175 1.853 2.834 4.49 3.858.628.271 1.117.433 1.498.554.63.2 1.204.172 1.658.104.506-.075 1.558-.637 1.779-1.253.22-.616.22-1.144.154-1.253-.066-.109-.24-.175-.502-.307z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12c0 1.708.438 3.313 1.205 4.704L2.25 21.75l5.19-1.361A9.708 9.708 0 0012 21.75c5.385 0 9.75-4.365 9.75-9.75z"
              />
            </svg>
            Chat on WhatsApp
          </a>
        </div>

        <p className="mt-6 text-sm text-white/45">
          Or reach me directly at <span className="text-white">{email}</span>
        </p>
        <p className="mt-2 text-sm text-white/45">
          & on WhatsApp: <span className="text-white">+233 59 207 6527</span>
        </p>

        {/* subtle divider glow */}
        <div className="mx-auto mt-12 h-px w-40 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>
    </section>
  );
}
