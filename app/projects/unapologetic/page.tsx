import type { Metadata } from "next";
import CaseStudy from "@/components/case-study";

export const metadata: Metadata = {
  title: "Unapologetic",
  description:
    "Streetwear e-commerce platform: customer storefront, staff admin dashboard and a rider delivery app.",
};

export default function UnapologeticCaseStudy() {
  return (
    <CaseStudy
      eyebrow="E-commerce • Admin dashboard • Delivery app"
      title="Unapologetic"
      summary="A complete commerce platform for a streetwear brand. I built three connected apps: the storefront customers shop on, the admin dashboard the team runs the business from, and a mobile app riders use to deliver orders across Accra."
      image="/projects/unapologetic.png"
      links={[{ label: "Visit unapologeticnm.com", href: "https://unapologeticnm.com" }]}
      facts={[
        { label: "Apps shipped", value: "Storefront, Admin, Rider" },
        { label: "Payments", value: "Paystack" },
        { label: "Sign-in", value: "Passwordless OTP" },
        { label: "Delivery", value: "In-house riders + partners" },
      ]}
      stack={[
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "TanStack Query",
        "TanStack Table",
        "Zustand",
        "React Hook Form + Zod",
        "Recharts",
        "Serwist (PWA)",
        "Paystack",
      ]}
      sections={[
        {
          title: "The storefront",
          intro:
            "A bold, editorial shop that carries the brand's voice and still makes buying quick.",
          items: [
            {
              title: "Collections, products and search",
              body: "Collection pages, product pages with variants and sizes, a size guide and site-wide search, all driven by one shared catalog.",
            },
            {
              title: "Cart and Paystack checkout",
              body: "A persistent cart, a short checkout and Paystack payments with a verified callback, so orders are only confirmed once the payment clears.",
            },
            {
              title: "Accounts and order tracking",
              body: "Customers sign in with a one-time code, see their order history, and can follow any order with its tracking number.",
            },
            {
              title: "Brand storytelling",
              body: "The Creed, Movement and Inner Circle pages turn the brand story into content, and Inner Circle doubles as the newsletter sign-up.",
            },
          ],
        },
        {
          title: "The admin side",
          intro:
            "The staff dashboard is where the business actually runs. It lives on its own subdomain and covers everything the team needs without touching code.",
          items: [
            {
              title: "Dashboard and analytics",
              body: "KPIs and sales charts on the home screen, with a full analytics view for revenue, orders and top products over time.",
            },
            {
              title: "Orders and rider dispatch",
              body: "Staff review each order, assign it to an in-house rider or a delivery partner, and watch a live timeline of every pickup and delivery event.",
            },
            {
              title: "Catalog management",
              body: "Products with variants, stock and images, plus collections, all edited from forms with validation so bad data never reaches the shop.",
            },
            {
              title: "Customers and marketing",
              body: "A customer CRM, promo codes, newsletter subscribers, review moderation and the announcement bar that runs across the top of the storefront.",
            },
            {
              title: "Roles and settings",
              body: "Store settings and admin user management, with OTP sign-in for staff as well as customers.",
            },
            {
              title: "Built to work before the backend",
              body: "The admin ships with a mock API seeded from the real catalog, so the team could review every screen while the backend was still being built.",
            },
          ],
        },
        {
          title: "The rider app",
          items: [
            {
              title: "Installable on any phone",
              body: "A progressive web app riders add to their home screen, with an offline fallback for patchy connections.",
            },
            {
              title: "Assignments to doorstep",
              body: "Riders see their assigned orders, report pickup and delivery from the road, and every update feeds the same timeline staff and customers see.",
            },
          ],
        },
      ]}
      outcome="Unapologetic runs its whole operation on this platform: customers shop and pay online, staff manage stock, orders and marketing from one dashboard, and riders close the loop on delivery. It is the kind of end-to-end build I can bring to any business that sells, books or delivers."
    />
  );
}
