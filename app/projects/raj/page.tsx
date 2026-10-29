import type { Metadata } from "next";
import CaseStudy from "@/components/case-study";

export const metadata: Metadata = {
  title: "Raj Kollections",
  description:
    "Everyday-essentials e-commerce store for Ghana with Mobile Money checkout, order tracking and PDF invoices.",
};

export default function RajCaseStudy() {
  return (
    <CaseStudy
      eyebrow="E-commerce • Ghana-wide delivery"
      title="Raj Kollections"
      summary="An online store for everyday essentials, beauty, fashion and hard-to-find favourites, built so anyone in Ghana can shop, pay with Mobile Money and follow their order to the door."
      image="/projects/raj.png"
      links={[{ label: "Visit raj.hansopoku.com", href: "https://raj.hansopoku.com" }]}
      facts={[
        { label: "Departments", value: "Pantry to fragrance" },
        { label: "Payments", value: "Mobile Money via Hubtel" },
        { label: "Delivery", value: "Accra & nationwide" },
        { label: "Receipts", value: "Downloadable PDF invoices" },
      ]}
      stack={["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Radix UI", "jsPDF", "Hubtel"]}
      sections={[
        {
          title: "What I built",
          items: [
            {
              title: "Shop by aisle",
              body: "Departments, on-sale and new-arrival views, product pages and fast search, so a big catalog still feels like a neighbourhood store.",
            },
            {
              title: "Checkout that fits Ghana",
              body: "Region and town pickers for every part of the country, delivery fees that change with location, free Accra delivery over a threshold, and Mobile Money payment started server-side.",
            },
            {
              title: "Accounts, saved items and addresses",
              body: "Customers verify their email, save favourites, store delivery addresses and see every order in one place.",
            },
            {
              title: "Tracking and invoices",
              body: "Each order gets a tracking number with a step-by-step timeline, plus a PDF invoice customers can download any time.",
            },
          ],
        },
      ]}
      outcome="Raj Kollections gives a growing retailer a real storefront with payments and delivery built for the local market, not a template stretched to fit."
    />
  );
}
