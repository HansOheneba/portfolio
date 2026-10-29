import type { Metadata } from "next";
import CaseStudy from "@/components/case-study";

export const metadata: Metadata = {
  title: "Aequitas Foundation",
  description:
    "Website for a faith-based youth development foundation, with programmes, impact stats, events and stories.",
};

export default function AequitasCaseStudy() {
  return (
    <CaseStudy
      eyebrow="Non-profit • Programmes • Events"
      title="Aequitas Foundation"
      summary="A cinematic website for a faith-based foundation equipping Africa's youth for work and leadership. It tells the story of the Aequitas Experience, shows the impact in numbers, and keeps the community up to date with events."
      image="/projects/aequitas.png"
      links={[{ label: "Visit aequitas.hansopoku.com", href: "https://aequitas.hansopoku.com" }]}
      facts={[
        { label: "Audience", value: "Youth, alumni, donors" },
        { label: "Highlights", value: "Impact stats, timeline" },
        { label: "Events", value: "Concerts, forums, drives" },
        { label: "Calls to action", value: "Apply & donate" },
      ]}
      stack={["Next.js", "TypeScript", "Tailwind CSS"]}
      sections={[
        {
          title: "What I built",
          items: [
            {
              title: "Full-screen hero",
              body: "A full-bleed photo hero with one clear message and a single path into the programmes, so first-time visitors know what the foundation does in seconds.",
            },
            {
              title: "Impact that counts up",
              body: "Animated stats for hours of learning, cohorts, graduates and female participation, plus a year-by-year milestone timeline.",
            },
            {
              title: "Alumni voices and stories",
              body: "A testimonial carousel and featured stories that put real graduates at the centre of the site.",
            },
            {
              title: "Events calendar",
              body: "Upcoming concerts, alumni forums and seasonal drives with dates and venues, linking through to the full events page.",
            },
          ],
        },
      ]}
      outcome="Aequitas now has a site that reads like their mission: hopeful, credible and clear about how to get involved, whether you want to apply, give or attend."
    />
  );
}
