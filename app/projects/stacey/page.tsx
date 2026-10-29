import type { Metadata } from "next";
import CaseStudy from "@/components/case-study";

export const metadata: Metadata = {
  title: "Stacey Elsie Lamptey",
  description:
    "Personal brand website for a speaker and growth strategist, with booking enquiries and a newsletter.",
};

export default function StaceyCaseStudy() {
  return (
    <CaseStudy
      eyebrow="Personal brand • Bookings • Newsletter"
      title="Stacey Elsie Lamptey"
      summary="A personal brand site for a speaker and growth strategist. It introduces Stacey, makes booking her for an event effortless, and grows her audience through a newsletter."
      image="/projects/stacey.png"
      links={[{ label: "Visit staceyelsie.com", href: "https://www.staceyelsie.com" }]}
      facts={[
        { label: "Goal", value: "Speaking bookings" },
        { label: "Enquiries", value: "Saved to Google Sheets" },
        { label: "Email", value: "Branded via Resend" },
        { label: "Pages", value: "Home, About, Contact" },
      ]}
      stack={["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Resend", "React Email", "Google Sheets API"]}
      sections={[
        {
          title: "What I built",
          items: [
            {
              title: "A confident first impression",
              body: "A bold portrait hero with a clear 'Book Stacey' call to action that stays in reach on every page.",
            },
            {
              title: "Bookings without a backend",
              body: "Booking enquiries and newsletter sign-ups are written straight into Google Sheets, so Stacey's team manages leads in a tool they already use.",
            },
            {
              title: "Branded emails",
              body: "Every enquiry triggers designed emails through Resend and React Email, confirming to the sender and alerting the team.",
            },
            {
              title: "Smooth, light motion",
              body: "Framer Motion reveals give the site polish without slowing it down.",
            },
          ],
        },
      ]}
      outcome="A fast, personal site that turns visitors into booking requests and subscribers, with a lead pipeline the client can run from a spreadsheet."
    />
  );
}
