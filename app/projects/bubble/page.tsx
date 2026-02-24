"use client";

import * as React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

type TechLogo = {
  name: string;
  logo: string; // /public path
};

type Shot = {
  src: string; // /public path
  alt: string;
  caption: string;
};

function GlowBlob({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute rounded-full blur-3xl opacity-25",
        className,
      )}
    />
  );
}

function SectionTitle({ title, sub }: { title: string; sub?: string }) {
  return (
    <div className="space-y-2">
      <h2 className="text-2xl font-semibold text-white">{title}</h2>
      {sub ? <p className="text-sm text-white/60 max-w-3xl">{sub}</p> : null}
    </div>
  );
}

function StatCard({
  label,
  value,
  hint,
}: {
  label: string;
  value: string;
  hint?: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
      <p className="text-xs text-white/50">{label}</p>
      <p className="mt-2 text-xl font-semibold text-white">{value}</p>
      {hint ? <p className="mt-2 text-sm text-white/60">{hint}</p> : null}
    </div>
  );
}

function ScreenshotCard({
  shot,
  index,
  reduceMotion,
}: {
  shot: Shot;
  index: number;
  reduceMotion: boolean;
}) {
  return (
    <motion.figure
      initial={reduceMotion ? undefined : { opacity: 0, y: 14 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55, delay: index * 0.05 }}
      className="rounded-3xl border border-white/10 bg-white/[0.03] overflow-hidden"
    >
      <div className="relative aspect-[16/10] w-full">
        <Image
          src={shot.src}
          alt={shot.alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={index === 0}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
      </div>

      <figcaption className="p-5">
        <p className="text-sm font-medium text-white/90">{shot.caption}</p>
        <p className="mt-2 text-xs text-white/50">
          Replace image paths with your actual screenshots in{" "}
          <code>/public</code>.
        </p>
      </figcaption>
    </motion.figure>
  );
}

function FlowStep({
  index,
  title,
  body,
}: {
  index: number;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.06] ring-1 ring-white/10 text-sm text-white/80">
          {index}
        </span>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
      <p className="mt-3 text-white/70 leading-relaxed">{body}</p>
    </div>
  );
}

export default function BubbleBlissCaseStudy() {
  const reduceMotion = useReducedMotion();

  // Put your real screenshots in /public and replace these paths.
  // Suggestion: include "old" and "new" versions side-by-side in the grid.
  const screenshots: Shot[] = [
    {
      src: "/projects/bubble-bliss/old-flow.png",
      alt: "Old Bubble Bliss ordering flow (not optimized for larger screens)",
      caption: "Old flow: ordering experience before the responsive upgrade.",
    },
    {
      src: "/projects/bubble-bliss/new-flow.png",
      alt: "New Bubble Bliss ordering flow with improved layout and navigation",
      caption:
        "New flow: responsive layout with clearer ordering steps and better usability.",
    },
    {
      src: "/projects/bubble-bliss/cart.png",
      alt: "Cart panel showing items, quantity controls, and checkout CTA",
      caption:
        "Cart: quick edits (increment, decrement, remove) with a visible total and a single checkout CTA.",
    },
    {
      src: "/projects/bubble-bliss/checkout.png",
      alt: "Checkout screen showing delivery or pickup, contact details, and delivery location inputs",
      caption:
        "Checkout: delivery or pickup selection, contact details, and location capture with optional directions.",
    },
    {
      src: "/projects/bubble-bliss/item-customization.png",
      alt: "Item customization screen for a drink with size, sugar level, and toppings",
      caption:
        "Item customization: size selection, sugar level, and toppings to match how real customers order.",
    },
    {
      src: "/projects/bubble-bliss/admin.png",
      alt: "Admin dashboard showing orders and product management",
      caption:
        "Admin: order management plus products editing, pricing, and availability control.",
    },
  ];

  const techLogos: TechLogo[] = [
    { name: "TypeScript", logo: "/logos/ts.png" },
    { name: "Tailwind CSS", logo: "/logos/tailwind.jpeg" },
    { name: "Python (Flask)", logo: "/logos/python.svg" },
    { name: "MySQL", logo: "/logos/sql.svg" },
    { name: "Hubtel (SMS & Payments)", logo: "/logos/hubtel.png" },
 // replace with your payment provider logo if you want
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#070A12] text-white">
      {/* Ambient background */}
      <GlowBlob className="left-[-12%] top-[-10%] h-[420px] w-[420px] bg-white" />
      <GlowBlob className="right-[-18%] top-[18%] h-[520px] w-[520px] bg-white" />
      <GlowBlob className="left-[18%] bottom-[-18%] h-[520px] w-[520px] bg-white" />

      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,255,255,0.10),transparent_70%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.06),transparent_40%,rgba(255,255,255,0.02))]" />
      <div className="absolute inset-0 opacity-[0.08] [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.6)_1px,transparent_0)] [background-size:18px_18px]" />

      <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-20">
        {/* Header */}
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Bubble Bliss Ordering Platform
          </h1>

          <p className="text-lg text-white/70 max-w-3xl leading-relaxed">
            I upgraded Bubble Bliss from an older ordering flow that did not
            scale well on larger screens into a more responsive, more intuitive
            ordering experience. The update focused on improving navigation,
            making cart and checkout actions clearer, and reducing the number of
            steps customers needed to complete an order. I also built an admin
            side for managing orders and products, and integrated SMS
            notifications through Hubtel plus payments for smoother order
            confirmation.
          </p>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 14 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          className="mt-14 rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8"
        >
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <div>
              <h2 className="text-2xl font-semibold">Tech Stack</h2>
              <p className="mt-2 text-sm text-white/55">
                Tailwind • TypeScript • Flask • MySQL • Hubtel (SMS) • Payments
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-x-10 gap-y-8 items-center">
            {techLogos.map((tech) => (
              <div
                key={tech.name}
                className="flex flex-col items-center justify-center opacity-70 hover:opacity-100 transition"
                title={tech.name}
              >
                <Image
                  src={tech.logo}
                  alt={tech.name}
                  width={60}
                  height={60}
                  className="object-contain grayscale hover:grayscale-0 transition duration-300 w-14 h-14 sm:w-20 sm:h-20"
                />
                <p className="mt-2 text-xs text-white/55">{tech.name}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Overview */}
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mt-14 space-y-6"
        >
          <SectionTitle
            title="Project Overview"
            sub="The goal was to make ordering feel effortless on mobile and desktop, while giving the business a reliable admin workflow for operations."
          />

          <div className="grid md:grid-cols-12 gap-6">
            <div className="md:col-span-7 space-y-4 text-white/75 leading-relaxed">
              <p>
                The previous ordering flow worked on smaller screens but became
                frustrating on larger devices. The upgraded version introduced a
                layout that scaled cleanly, improved spacing and hierarchy, and
                made the most important actions obvious: add to cart, edit cart,
                and checkout.
              </p>

              <p>
                I redesigned the ordering journey so customers could browse,
                customize items, and confirm delivery or pickup without getting
                lost. I also added structured loading states so the interface
                stayed stable while menu data and cart state were updating.
              </p>

              <p>
                On the business side, I built an admin dashboard to manage
                orders and products. Orders could be tracked from creation to
                fulfillment, and the team could update product availability and
                pricing without touching code.
              </p>
            </div>

            <div className="md:col-span-5 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <StatCard
                  label="Customer goal"
                  value="Order fast"
                  hint="Clear cart and checkout path"
                />
                <StatCard
                  label="Business goal"
                  value="Fulfill smoothly"
                  hint="Admin view for operations"
                />
                <StatCard
                  label="Notifications"
                  value="Hubtel SMS"
                  hint="Order received and updates"
                />
                <StatCard
                  label="Payments"
                  value="Integrated"
                  hint="Reduced cash friction"
                />
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                <p className="text-sm text-white/55">What changed</p>
                <ul className="mt-4 space-y-2 text-sm text-white/75">
                  <li>
                    • Responsive layout that worked better on larger screens
                  </li>
                  <li>
                    • Clearer ordering steps with stronger visual hierarchy
                  </li>
                  <li>
                    • Better cart usability with quick edits and totals always
                    visible
                  </li>
                  <li>
                    • More structured checkout with delivery or pickup selection
                  </li>
                  <li>
                    • Loading states to reduce layout shift and improve
                    perceived speed
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Updated Customer Flow */}
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          className="mt-14 space-y-6"
        >
          <SectionTitle
            title="Updated Ordering Flow"
            sub="The flow was rebuilt to reduce friction, keep users oriented, and make checkout feel like a simple two-step finish."
          />

          <div className="grid md:grid-cols-2 gap-5">
            <FlowStep
              index={1}
              title="Browse and search the menu"
              body="Customers could scan categories, use search, and find items quickly without long scrolling. The layout stayed readable on both mobile and desktop."
            />
            <FlowStep
              index={2}
              title="Customize items with realistic options"
              body="Customers could choose size, sweetness level, and toppings for drinks, and add notes where needed. This matched how people ordered in real life and reduced clarification calls."
            />
            <FlowStep
              index={3}
              title="Review cart with fast edits"
              body="Cart changes were quick and obvious: increment, decrement, and remove actions were near the item, and totals stayed visible to reduce surprises at checkout."
            />
            <FlowStep
              index={4}
              title="Checkout with delivery or pickup"
              body="Checkout captured contact details and a delivery method. For delivery, the user could use their location, search a landmark, and add optional directions to help riders."
            />
            <FlowStep
              index={5}
              title="Pay and confirm"
              body="Payments were integrated so confirmations happened immediately after a successful transaction. This reduced failed orders and made the process more consistent."
            />
            <FlowStep
              index={6}
              title="SMS notification via Hubtel"
              body="After checkout, the system sent SMS updates to confirm the order and keep the customer informed. This improved trust and reduced support messages."
            />
          </div>
        </motion.div>

        {/* Admin Flow */}
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          className="mt-14 space-y-6"
        >
          <SectionTitle
            title="Admin Workflow"
            sub="The admin side focused on day-to-day operations: order handling, status updates, and product management."
          />

          <div className="grid md:grid-cols-2 gap-5">
            <FlowStep
              index={1}
              title="Order intake"
              body="Incoming orders appeared in the dashboard with customer details, items, notes, delivery method, and payment state, so staff could confirm quickly."
            />
            <FlowStep
              index={2}
              title="Order status updates"
              body="Orders were updated through stages like received, preparing, out for delivery, and completed. This kept fulfillment organized and helped the team coordinate."
            />
            <FlowStep
              index={3}
              title="Product management"
              body="Products could be added and edited, prices updated, and items marked as available or unavailable, so the menu stayed accurate without developer involvement."
            />
            <FlowStep
              index={4}
              title="Operational visibility"
              body="The dashboard supported quick checks on what was pending, what was in progress, and what had been completed, which reduced missed orders during busy periods."
            />
          </div>
        </motion.div>

        {/* Screenshots */}
        <div className="mt-14 space-y-6">
          <SectionTitle
            title="Screenshots"
            sub="Add your old flow vs new flow shots, plus key UI screens like cart, customization, checkout, and admin."
          />

          <div className="grid md:grid-cols-2 gap-5">
            {screenshots.map((shot, idx) => (
              <ScreenshotCard
                key={shot.src}
                shot={shot}
                index={idx}
                reduceMotion={!!reduceMotion}
              />
            ))}
          </div>
        </div>

        {/* Architecture */}
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mt-14 space-y-6"
        >
          <SectionTitle
            title="Architecture & Data Flow"
            sub="I kept the ordering experience fast on the frontend while making the backend the source of truth for orders, products, payments, and notifications."
          />

          <div className="grid md:grid-cols-12 gap-6">
            <div className="md:col-span-7 space-y-4 text-white/75 leading-relaxed">
              <p>
                The frontend was built with TypeScript and Tailwind to keep the
                UI consistent and responsive. The backend API was built with
                Flask and connected to MySQL for durable storage.
              </p>

              <p>
                Orders were written to the database and then used to drive both
                the admin dashboard and customer-facing status updates. SMS
                notifications were triggered through Hubtel to keep customers
                informed without relying on email delivery.
              </p>

              <p>
                Loading states were used across key surfaces such as menu
                loading, cart updates, and checkout submission so users stayed
                oriented and the interface felt stable during network delays.
              </p>
            </div>

            <div className="md:col-span-5">
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                <p className="text-sm text-white/55">Data path</p>
                <ol className="mt-4 space-y-3 text-sm text-white/75">
                  <li className="flex gap-3">
                    <span className="text-white/40">1</span>
                    <span>Customer browsed menu and customized items</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-white/40">2</span>
                    <span>Cart updates synced and totals recalculated</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-white/40">3</span>
                    <span>Checkout captured delivery or pickup details</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-white/40">4</span>
                    <span>
                      Payment was processed and order was stored in MySQL
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-white/40">5</span>
                    <span>Hubtel SMS was sent to confirm the order</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-white/40">6</span>
                    <span>
                      Admin dashboard displayed the order for fulfillment
                    </span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Outcome */}
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          className="mt-14 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-8 space-y-4"
        >
          <h2 className="text-2xl font-semibold">Outcome & Impact</h2>

          <p className="text-white/75 leading-relaxed max-w-4xl">
            The redesign improved the ordering experience across device sizes,
            reduced confusion during checkout, and made cart actions easier to
            understand. On the operations side, the admin dashboard made it
            simpler to track incoming orders, update fulfillment status, and
            maintain the menu without delays. Combined with payments and Hubtel
            SMS confirmations, the system supported faster customer feedback and
            a smoother handoff between online ordering and real-world
            fulfillment.
          </p>
        </motion.div>

        <div className="mt-10 text-xs text-white/45">
          Tip: Put images in <code>/public/projects/bubble-bliss/</code> and
          update the <code>screenshots</code> array paths.
        </div>
      </div>
    </section>
  );
}
