import type { Metadata } from "next";
import CaseStudy from "@/components/case-study";

export const metadata: Metadata = {
  title: "Haven & Co.",
  description:
    "Concept website for an Accra real estate agency with interactive listings, a room tour and a mortgage calculator.",
};

export default function HavenCaseStudy() {
  return (
    <CaseStudy
      eyebrow="Concept • Real estate • Interactive"
      title="Haven & Co."
      summary="A concept site for a premium Accra estate agency. I wanted browsing homes to feel like walking through them, so the site leans on motion, big photography and tools buyers actually use."
      image="/projects/haven.png"
      links={[
        { label: "Visit the live site", href: "https://est.hansopoku.com" },
        { label: "Source on GitHub", href: "https://github.com/HansOheneba/Est" },
      ]}
      facts={[
        { label: "Pages", value: "Home, listings, 8 homes" },
        { label: "Interactions", value: "Scroll, hover, drag" },
        { label: "Tools", value: "Filters, compare, calculator" },
        { label: "Booking", value: "Viewing scheduler" },
      ]}
      stack={["Next.js 16", "TypeScript", "Tailwind CSS 4", "Framer Motion"]}
      sections={[
        {
          title: "The experience",
          items: [
            {
              title: "Cinematic hero and search",
              body: "The headline rises word by word while the hero photo zooms and rounds off as you scroll. A Buy/Rent search sends visitors straight into filtered results.",
            },
            {
              title: "Pinned horizontal gallery",
              body: "Featured homes slide sideways as you scroll down, with a progress bar keeping you oriented.",
            },
            {
              title: "Neighbourhood explorer",
              body: "Hover Cantonments, East Legon or Aburi and the photo wipes in with typical prices, commute times and a link to homes there.",
            },
            {
              title: "Room tour with hotspots",
              body: "Switch between rooms and tap pulsing markers to learn about finishes and features before booking a viewing.",
            },
            {
              title: "Listings that react",
              body: "Filters, sorting and saved homes reshuffle the grid with spring animations. Pick up to three homes and compare them side by side.",
            },
            {
              title: "Mortgage calculator",
              body: "Sliders for price, deposit, term and rate drive a live donut chart of deposit, loan and interest.",
            },
          ],
        },
      ]}
      outcome="Haven & Co. shows how I would build a real estate site that sells: fast, image-led and full of the details buyers look for, from neighbourhood context to a viewing booked in three taps."
    />
  );
}
