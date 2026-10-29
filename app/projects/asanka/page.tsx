import type { Metadata } from "next";
import CaseStudy from "@/components/case-study";

export const metadata: Metadata = {
  title: "Asanka",
  description:
    "Concept website for a modern Ghanaian restaurant with an interactive menu, pre-orders and table reservations.",
};

export default function AsankaCaseStudy() {
  return (
    <CaseStudy
      eyebrow="Concept • Restaurant • Hospitality"
      title="Asanka"
      summary="A concept site for a modern Ghanaian kitchen and bar in Osu. Dark, warm and loud, it is built to make people hungry and then get them booked in."
      image="/projects/asanka.png"
      links={[
        { label: "Visit the live site", href: "https://rest.hansopoku.com" },
        { label: "Source on GitHub", href: "https://github.com/HansOheneba/rest" },
      ]}
      facts={[
        { label: "Menu", value: "16 dishes, 4 courses" },
        { label: "Booking", value: "4-step reservation" },
        { label: "Extras", value: "Pre-order to your table" },
        { label: "Live info", value: "Open-now status" },
      ]}
      stack={["Next.js 16", "TypeScript", "Tailwind CSS 4", "Framer Motion"]}
      sections={[
        {
          title: "The experience",
          items: [
            {
              title: "A proper entrance",
              body: "An ember-orange curtain reveals the name letter by letter, then lifts away into a hero where the giant wordmark is filled with the dining room itself.",
            },
            {
              title: "A menu you can see",
              body: "Hover any dish and its photo follows your cursor. Filter by vegetarian, gluten-free or mild, with spice levels shown as flames.",
            },
            {
              title: "Build your table",
              body: "Add dishes as you browse and a tray keeps a running total. The pre-order follows you into the booking and onto the confirmation.",
            },
            {
              title: "Reservations in four steps",
              body: "Party size, date, time and details, with real opening hours, booked-out slots and a ticket-style confirmation at the end.",
            },
            {
              title: "Motion with a point",
              body: "A marquee that speeds up as you scroll, story cards that stack, a draggable gallery and event cards that flip to show the details.",
            },
            {
              title: "Always up to date",
              body: "An open-now badge and hours table follow Accra time, so guests know at a glance whether they can walk in.",
            },
          ],
        },
      ]}
      outcome="Asanka is my blueprint for hospitality sites: atmosphere first, then a frictionless path from browsing the menu to a confirmed table."
    />
  );
}
