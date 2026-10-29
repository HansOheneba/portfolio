import type { Metadata } from "next";
import CaseStudy from "@/components/case-study";

export const metadata: Metadata = {
  title: "Samaa Charity Projects",
  description:
    "Website for a charity working on education, health and empowerment across Africa, with an event campaign and donation flows.",
};

export default function SamaaCaseStudy() {
  return (
    <CaseStudy
      eyebrow="Non-profit • Campaign site • Donations"
      title="Samaa Charity Projects"
      summary="A warm, story-led website for a charity widening access to education, health and empowerment across Africa. It explains the causes, drives donations, and runs the campaign for their Red for a Reason charity tennis event."
      image="/projects/samaa.png"
      links={[{ label: "Visit samaa.hansopoku.com", href: "https://samaa.hansopoku.com" }]}
      facts={[
        { label: "Focus areas", value: "4 causes, 7 programmes" },
        { label: "Event", value: "Red for a Reason" },
        { label: "Goal", value: "Donations & volunteers" },
        { label: "Style", value: "Story-led, photo-first" },
      ]}
      stack={["Next.js", "TypeScript", "Tailwind CSS"]}
      sections={[
        {
          title: "What I built",
          items: [
            {
              title: "A clear story for every cause",
              body: "Education, Health, Housing and Women's Empowerment each get their own section and page, with a direct donate button so interest turns into action.",
            },
            {
              title: "Event campaign with live countdown",
              body: "A campaign banner and countdown for the Red for a Reason tennis fundraiser, with places to request a seat, donate or read the full campaign.",
            },
            {
              title: "Interactive giving calculator",
              body: "Visitors plug in their own numbers to see how small monthly gifts add up, turning a big idea into something people can act on.",
            },
            {
              title: "Built on the brand's values",
              body: "Dignity, access, togetherness and accountability shape the copy and the design, with photography leading and a restrained red palette.",
            },
          ],
        },
      ]}
      outcome="Samaa now has a site that explains what they do in seconds and gives every visitor a clear next step: donate, get involved or attend the next event. The same pattern works for hotels, restaurants and venues that need to promote events and take bookings."
    />
  );
}
