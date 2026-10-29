// Single source of truth for the projects grid and every case study page.

export type Shot = { src: string; caption: string };
export type Step = { title: string; body: string };

export type Project = {
  slug: string;
  title: string;
  /** Plain-language label clients scan for, e.g. "Restaurant website". */
  label: string;
  status: "Live" | "Concept";
  /** One line that leads with the result. */
  tagline: string;
  /** Short line shown when a grid tile is hovered. */
  cardSummary: string;
  thumb: string;
  url: string;
  source?: string;
  /** Brand colour from the project itself, used for accents on its case study. */
  accent: string;
  accentInk: string;
  client: string;
  role: string[];
  stack: string[];
  brief: string;
  goals: string[];
  approach: Step[];
  showcase: Shot[];
  highlights: Step[];
  engineering: string[];
  outcome: string;
  outcomePoints: string[];
  pitch: string;
};

export const projects: Project[] = [
  {
    slug: "asanka",
    title: "Asanka",
    label: "Restaurant website",
    status: "Concept",
    tagline:
      "A restaurant site built to make people hungry, then get them to a confirmed table in four steps.",
    cardSummary: "Make people hungry before they arrive.",
    thumb: "/projects/asanka.png",
    url: "https://asanka.hansopoku.com",
    source: "https://github.com/HansOheneba/rest",
    accent: "#e4572e",
    accentInk: "#ffffff",
    client: "Concept build for a modern Ghanaian restaurant in Osu, Accra",
    role: ["Brand & UI design", "Front-end development", "Interaction design"],
    stack: ["Next.js 16", "TypeScript", "Tailwind CSS 4", "Framer Motion"],
    brief:
      "Too many restaurant websites are a PDF menu and an Instagram link. Guests can't see the food properly, can't tell whether you're open, and have to call or DM to book, so plenty of them don't. I set out to build the site I'd want as a restaurant owner: one that sells the atmosphere of the room and takes the booking.",
    goals: [
      "Show the food and the room the way they feel in person",
      "Let guests check opening hours and book without calling",
      "Capture pre-orders and occasions so the kitchen can prepare",
      "Feel unmistakably Ghanaian, not like a template",
    ],
    approach: [
      {
        title: "Brand first",
        body: "I named it after the asanka, the clay grinding bowl every Ghanaian kitchen knows, then built the identity around it: ember and saffron on near-black, Shrikhand for a hand-painted signboard voice, Bricolage Grotesque for clarity.",
      },
      {
        title: "Make the menu the hero",
        body: "The menu is the most-visited page on any restaurant site, so it got the most care: photos that appear as you hover, dietary filters, spice levels and prices you can read at a glance.",
      },
      {
        title: "Take the booking",
        body: "A four-step reservation that follows real opening hours, skips the day the restaurant is closed, greys out fully booked slots and ends with a ticket-style confirmation.",
      },
      {
        title: "Give every animation a job",
        body: "Motion either sets the mood (the opening curtain, the scrolling dish banner) or guides the next action (the magnetic Book button, the table tray that follows you down the page).",
      },
    ],
    showcase: [
      { src: "/projects/asanka.png", caption: "The opening: the name is filled with a photo of the dining room, beside a rotating signature dish." },
      { src: "/projects/cs/asanka-menu.jpg", caption: "Hover a dish and its photo follows the cursor. Filters and spice levels sit above the list." },
      { src: "/projects/cs/asanka-booking.jpg", caption: "Dishes added while browsing carry into the booking and onto the confirmation ticket." },
      { src: "/projects/cs/asanka-events.jpg", caption: "Weekly events as cards that flip to show times, prices and details." },
    ],
    highlights: [
      { title: "Cursor-led menu", body: "Dish photos trail the cursor on desktop and sit inline on phones." },
      { title: "Build your table", body: "Guests add dishes as they browse; the order and running total follow them into the booking." },
      { title: "Live opening status", body: "An 'Open now · until 11pm' badge and an hours table that run on Accra time." },
      { title: "Four-step reservations", body: "Party size, date, time, details. Closed days and booked-out slots are handled for you." },
      { title: "Events that sell themselves", body: "Highlife Fridays, Jollof Brunch and the Chef's Long Table, each with details on the back." },
      { title: "Fast on any connection", body: "Photography is served from the site itself and resized per device." },
    ],
    engineering: [
      "Statically generated with Next.js 16, so the page is served straight from a CDN.",
      "A tiny shared store links the menu tray to the booking form without a heavy state library.",
      "Opening hours and slot availability are plain data, ready to be swapped for a booking API, a Google Sheet or a WhatsApp hand-off.",
      "The custom cursor only appears on devices with a mouse; touch screens get inline photos instead.",
    ],
    outcome:
      "Asanka is the blueprint I bring to hospitality clients: a site that carries the atmosphere of the room and turns that feeling into confirmed tables and pre-orders.",
    outcomePoints: [
      "Ready to connect to Paystack deposits, WhatsApp confirmations or an existing booking system",
      "The same structure fits hotels, lounges, cafés and event venues",
    ],
    pitch: "Running a restaurant, lounge or hotel? I'll build you a site like this, connected to how you actually take bookings.",
  },
  {
    slug: "haven",
    title: "Haven & Co.",
    label: "Real estate website",
    status: "Concept",
    tagline:
      "A property site shot like a film, with the tools buyers actually use to shortlist a home and book a viewing.",
    cardSummary: "See the area, tour the rooms, book a viewing.",
    thumb: "/projects/haven.png",
    url: "https://haven.hansopoku.com",
    source: "https://github.com/HansOheneba/Est",
    accent: "#b5523b",
    accentInk: "#ffffff",
    client: "Concept build for a premium estate agency in Accra",
    role: ["Art direction & UI design", "Front-end development", "Interaction design"],
    stack: ["Next.js 16", "TypeScript", "Tailwind CSS 4", "Framer Motion"],
    brief:
      "Many buyers in Accra (diplomats, relocating families, Ghanaians abroad) shortlist homes from another city or country. Most listing sites hand them a grid of photos and a phone number. I wanted to show how an agency can feel premium and still answer the questions buyers ask before they book a viewing: what's the area like, what's inside, and what will it cost each month?",
    goals: [
      "Make the agency feel premium from the first second",
      "Help remote buyers understand neighbourhoods, not just houses",
      "Let people filter, save and compare without signing up",
      "Turn interest into a booked viewing",
    ],
    approach: [
      {
        title: "Cinematic art direction",
        body: "A warm, dark palette of laterite clay, wine and lamplight amber; DM Serif Display headlines with Manrope for every number; photography graded like film stills.",
      },
      {
        title: "Answer buyers' questions in order",
        body: "Where (a neighbourhood explorer), what (a room tour), how much (a mortgage calculator), then when (a viewing scheduler).",
      },
      {
        title: "Listings that feel like a product",
        body: "Filters, sorting, saved homes and side-by-side comparison, all instant and animated.",
      },
      {
        title: "Detail pages that sell",
        body: "A full-screen gallery with swipe and keyboard support, the features that matter, and a booking card that stays in reach.",
      },
    ],
    showcase: [
      { src: "/projects/haven.png", caption: "Letterbox bars pull away from a dusk shot, then the search sends buyers straight into results." },
      { src: "/projects/cs/haven-areas.jpg", caption: "Hover a neighbourhood for typical prices, commute times and character." },
      { src: "/projects/cs/haven-tour.jpg", caption: "Switch rooms and tap the markers to learn about finishes before the viewing." },
      { src: "/projects/cs/haven-listings.jpg", caption: "Listings filter, sort, save and compare instantly." },
      { src: "/projects/cs/haven-calculator.jpg", caption: "Price, deposit, term and rate drive a live monthly breakdown." },
    ],
    highlights: [
      { title: "Film-title opening", body: "The hero settles like a title sequence, then the headline rises word by word." },
      { title: "Neighbourhood explorer", body: "Cantonments, East Legon, Airport Residential, Trasacco and Aburi, side by side." },
      { title: "Room tour", body: "Hotspots on every room explain the details buyers ask about." },
      { title: "Compare up to three homes", body: "Price, size, bedrooms and year built in one view." },
      { title: "Mortgage calculator", body: "A live chart of deposit, loan and interest as you move the sliders." },
      { title: "Viewing scheduler", body: "Pick a day and a free slot and leave a number. Booked times are greyed out." },
    ],
    engineering: [
      "Every listing page is pre-rendered from typed data, ready to swap for a CMS or the agency's own admin.",
      "Saved homes are kept on the visitor's device, so there's no sign-up wall.",
      "Scroll-linked motion with Framer Motion: the pinned horizontal gallery and the hero transitions.",
      "Photography is served locally and resized per device, so heavy imagery doesn't mean a slow site.",
    ],
    outcome:
      "Haven shows the kind of property site I build for agencies and developers: premium enough to match the homes, practical enough to move buyers from browsing to a booked viewing.",
    outcomePoints: [
      "Pairs with an admin panel like the one I built for Airban Homes, so staff manage their own listings",
      "The structure fits estate agencies, developers and short-let operators",
    ],
    pitch: "Selling or letting property? I'll build a site that does your listings justice and books the viewings.",
  },
  {
    slug: "unapologetic",
    title: "Unapologetic",
    label: "E-commerce platform",
    status: "Live",
    tagline:
      "A storefront, an admin dashboard and a delivery app for a streetwear brand, all running from one system.",
    cardSummary: "A streetwear store with its own voice, and the back office behind it.",
    thumb: "/projects/unapologetic.png",
    url: "https://unapologeticnm.com",
    accent: "#1a1a1a",
    accentInk: "#ffffff",
    client: "Unapologetic, a streetwear brand",
    role: ["UI design", "Front-end development for 3 apps", "API integration"],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "TanStack Query & Table", "React Hook Form + Zod", "Recharts", "Paystack", "PWA"],
    brief:
      "Unapologetic needed more than a shop. The brand wanted a storefront with its own voice, and the team needed a back office to run the whole business from: stock, customers, promo codes, and deliveries that had to be coordinated between staff, riders and customers.",
    goals: [
      "A storefront that carries the brand's voice",
      "Online payments and passwordless sign-in",
      "One dashboard for orders, stock, customers and marketing",
      "Delivery tracking from rider to customer",
    ],
    approach: [
      {
        title: "Three apps, one source of truth",
        body: "The storefront, the staff admin and the rider app all work through the same API, so an order placed online shows up in the dashboard and on a rider's phone without anyone re-entering it.",
      },
      {
        title: "Admin built ahead of the backend",
        body: "I built the admin against a mock API seeded from the real catalogue, so the team could review every screen while the backend was still being finished.",
      },
      {
        title: "Designed for the people using it",
        body: "A bold, editorial storefront for customers; dense, fast tables for staff; big buttons and an offline fallback for riders on the road.",
      },
    ],
    showcase: [
      { src: "/projects/unapologetic.png", caption: "The storefront leads with the brand's voice and a single call to shop." },
      { src: "/projects/cs/unap-collections.jpg", caption: "Collections and product pages run off one shared catalogue." },
      { src: "/projects/cs/unap-home2.jpg", caption: "Editorial sections tell the brand story between the products." },
    ],
    highlights: [
      { title: "Paystack checkout", body: "Payments are verified on callback before an order is confirmed." },
      { title: "Passwordless sign-in", body: "One-time codes for customers and staff alike." },
      { title: "Order tracking", body: "Customers follow any order by its tracking number." },
      { title: "Orders & rider dispatch", body: "Staff assign in-house riders or partners and see every pickup and delivery event." },
      { title: "Catalogue & marketing", body: "Variants, collections, promo codes, newsletter, reviews and a site-wide announcement bar." },
      { title: "Rider app", body: "An installable web app for riders, with an offline fallback for patchy connections." },
    ],
    engineering: [
      "Next.js App Router and TypeScript across all three apps.",
      "TanStack Query and Table keep admin screens fast and cache-aware; React Hook Form with Zod stops bad data reaching the shop.",
      "Sales and analytics dashboards built with Recharts.",
      "Set up to deploy on the client's existing cPanel Node.js hosting.",
    ],
    outcome:
      "Unapologetic runs its operation on this platform: customers shop and pay online, staff manage stock, orders and marketing in one place, and riders close the loop on delivery.",
    outcomePoints: ["Live at unapologeticnm.com", "Admin and rider apps deploy separately from the storefront"],
    pitch: "Selling products online? I'll build the shop and the back office that runs it.",
  },
  {
    slug: "airban",
    title: "Airban Homes",
    label: "Real estate & product catalogue",
    status: "Live",
    tagline:
      "A property and doors platform with a staff admin, first built in 2023 and rebuilt from the ground up in 2026.",
    cardSummary: "Homes and doors, with an admin the team runs itself.",
    thumb: "/projects/airban-v2.png",
    url: "https://airban.hansopoku.com",
    accent: "#1c5aa6",
    accentInk: "#ffffff",
    client: "Airban Homes, a real estate developer and door supplier",
    role: ["UI design", "Full-stack development", "Admin CMS"],
    stack: ["Next.js 16", "TypeScript", "Tailwind CSS 4", "Server Actions", "SQLite"],
    brief:
      "Airban sells two very different things under one brand: homes and premium doors. Buyers needed rich property pages and an easy way to enquire, door customers needed a quick catalogue, and staff needed to update both without calling a developer.",
    goals: [
      "Separate journeys for property buyers and door customers",
      "Enquiries that land somewhere trackable, not in scattered emails",
      "An admin non-technical staff can use",
      "A faster, simpler stack for the long run",
    ],
    approach: [
      {
        title: "Two journeys, one brand",
        body: "Properties lead with galleries, location and an enquiry form; doors lead with quick, grid-based browsing and a quote cart.",
      },
      {
        title: "Admin first",
        body: "In the 2023 build I wrote a custom CMS so staff could add and edit listings and move enquiries from Pending to Resolved.",
      },
      {
        title: "The 2026 rebuild",
        body: "I rebuilt it on Next.js 16 with server actions and an embedded database, replacing the separate API with one codebase that's simpler to host and maintain.",
      },
    ],
    showcase: [
      { src: "/projects/airban-v2.png", caption: "Location and price search front and centre on the homepage." },
      { src: "/projects/cs/airban-properties.jpg", caption: "Property listings with the details buyers compare first." },
      { src: "/projects/cs/airban-doors.jpg", caption: "The doors catalogue, built for quick browsing and quotes." },
    ],
    highlights: [
      { title: "Location & price search", body: "Buyers filter by area and budget straight from the homepage." },
      { title: "Property pages", body: "Galleries, key facts and an enquiry form alongside the content." },
      { title: "Doors catalogue & cart", body: "Customers collect doors into a cart to request a quote." },
      { title: "News & brochure", body: "Company news and a downloadable brochure for offline sharing." },
      { title: "Staff admin", body: "A protected panel for adding, editing and removing properties and doors." },
      { title: "Enquiries as a workflow", body: "Each enquiry is tracked with a status instead of getting lost in email." },
    ],
    engineering: [
      "2026: Next.js 16 server components and server actions with an embedded SQLite database, behind a protected admin login.",
      "2023: a Next.js front end with a Python Flask API, MySQL, transactional emails via Resend and skeleton loading states.",
    ],
    outcome:
      "Staff manage the catalogue and enquiries themselves, and the 2026 rebuild leaves Airban with one modern codebase in place of two.",
    outcomePoints: ["Live at airban.hansopoku.com", "The original site still runs at myairbanhomes.com"],
    pitch: "Developing or selling property? I'll build the site and the admin your team will actually use.",
  },
  {
    slug: "raj",
    title: "Raj Kollections",
    label: "E-commerce store",
    status: "Live",
    tagline:
      "An online store built for how Ghana shops: Mobile Money checkout, nationwide delivery and orders you can track.",
    cardSummary: "Pay with Mobile Money, then track it to the door.",
    thumb: "/projects/raj.png",
    url: "https://raj.hansopoku.com",
    accent: "#b4652a",
    accentInk: "#ffffff",
    client: "Raj Kollections, an everyday-essentials retailer",
    role: ["UI design", "Front-end development", "Checkout & payments"],
    stack: ["Next.js 16", "TypeScript", "Tailwind CSS 4", "Framer Motion", "Radix UI", "jsPDF", "Hubtel"],
    brief:
      "Raj sells everything from pantry staples to fragrance. Customers across Ghana wanted to order without a back-and-forth over WhatsApp, pay with Mobile Money, and know when their order would arrive.",
    goals: [
      "A catalogue that feels like walking the aisles",
      "Checkout that fits local addresses and Mobile Money",
      "Clear delivery fees for Accra and beyond",
      "Tracking and receipts customers can rely on",
    ],
    approach: [
      {
        title: "Shop by aisle",
        body: "Departments, on-sale and new-arrival views plus search, so a big catalogue still feels like a neighbourhood store.",
      },
      {
        title: "Checkout built for Ghana",
        body: "Region and town pickers for every part of the country, delivery fees that follow the location, and Mobile Money payment started server-side through Hubtel.",
      },
      {
        title: "After the sale",
        body: "Every order gets a tracking number with a step-by-step timeline and a PDF invoice customers can download any time.",
      },
    ],
    showcase: [
      { src: "/projects/raj.png", caption: "The homepage leads with departments and a clear delivery promise." },
      { src: "/projects/cs/raj-shop.jpg", caption: "Shop-all with departments and filters." },
      { src: "/projects/cs/raj-home2.jpg", caption: "New arrivals sit right under the departments on the homepage." },
    ],
    highlights: [
      { title: "Mobile Money checkout", body: "Payment prompts go straight to the customer's phone via Hubtel." },
      { title: "Nationwide delivery", body: "Location-aware fees with free Accra delivery over a set amount." },
      { title: "Accounts", body: "Email verification, saved items and stored delivery addresses." },
      { title: "Order tracking", body: "A timeline from confirmation to doorstep for every order." },
      { title: "PDF invoices", body: "Downloadable receipts generated in the browser." },
      { title: "Search & departments", body: "Fast browsing across a broad catalogue." },
    ],
    engineering: [
      "Next.js 16 and TypeScript, with Radix UI primitives for accessible popovers and pickers.",
      "Invoices are generated client-side with jsPDF, so there's no extra server work for receipts.",
      "Payment is started server-side, so no payment secrets are ever exposed in the browser.",
    ],
    outcome:
      "Ordering moves out of DMs and into a proper checkout, with Mobile Money, delivery fees, receipts and tracking built in.",
    outcomePoints: ["Live at raj.hansopoku.com", "Shoppable from anywhere in Ghana"],
    pitch: "Selling across Ghana? I'll build a store with Mobile Money and delivery built in.",
  },
  {
    slug: "samaa",
    title: "Samaa Charity Projects",
    label: "Non-profit website & campaign",
    status: "Live",
    tagline:
      "A story-led charity site that explains four causes in seconds and turns visitors into donors, volunteers and guests.",
    cardSummary: "Four causes, one clear way to give.",
    thumb: "/projects/samaa.png",
    url: "https://samaa.hansopoku.com",
    accent: "#b3122e",
    accentInk: "#ffffff",
    client: "Samaa Charity Projects",
    role: ["UI design", "Front-end development", "Content structure"],
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    brief:
      "Samaa works across education, health, housing and women's empowerment, and was preparing its Red for a Reason charity tennis fundraiser. The site needed to make a broad mission feel focused and give every visitor one clear next step.",
    goals: [
      "Explain four causes without overwhelming people",
      "Put a donate button beside every story",
      "Promote the fundraiser and fill the seats",
      "Show that small, regular gifts add up",
    ],
    approach: [
      { title: "One story per cause", body: "Education, Health, Housing and Women's Empowerment each get their own section and page, each ending in a direct donate button." },
      { title: "Campaign mode", body: "A banner and live countdown for Red for a Reason, with routes to request a seat, donate or read the full campaign." },
      { title: "Make giving feel possible", body: "An interactive calculator shows how small monthly gifts add up across a community." },
    ],
    showcase: [
      { src: "/projects/samaa.png", caption: "Photography leads, with the fundraiser promoted from the first screen." },
      { src: "/projects/cs/samaa-causes.jpg", caption: "Mission, vision and values set the tone before the causes." },
      { src: "/projects/cs/samaa-giving.jpg", caption: "Each cause gets its own chapter, with a direct path to give." },
    ],
    highlights: [
      { title: "Cause pages", body: "Seven programmes grouped into four clear causes." },
      { title: "Live countdown", body: "Days, hours and minutes to the fundraiser's first serve." },
      { title: "Giving calculator", body: "Visitors plug in their own numbers to see the impact." },
      { title: "Values-led design", body: "Dignity, access, togetherness and accountability shape the copy and layout." },
    ],
    engineering: [
      "Next.js and TypeScript, with content structured so new causes and campaigns slot in without redesign.",
      "Responsive, photo-first layouts that keep donate buttons in reach on phones.",
    ],
    outcome:
      "Samaa now has a site that explains what it does at a glance and gives every visitor a next step: donate, get involved or attend the next event.",
    outcomePoints: ["Live at samaa.hansopoku.com", "The same pattern suits venues and hotels promoting events"],
    pitch: "Running a charity, church or event? I'll build a site that turns interest into support.",
  },
  {
    slug: "aequitas",
    title: "Aequitas Foundation",
    label: "Non-profit website",
    status: "Live",
    tagline:
      "A hopeful, credible home for a youth development foundation: programmes, impact, alumni stories and events.",
    cardSummary: "A youth programme, told through its graduates.",
    thumb: "/projects/aequitas.png",
    url: "https://aequitas.hansopoku.com",
    accent: "#1fa3d9",
    accentInk: "#ffffff",
    client: "Aequitas Foundation",
    role: ["UI design", "Front-end development"],
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    brief:
      "Aequitas runs the Aequitas Experience for young graduates, plus concerts, alumni forums and seasonal drives. The foundation needed one place that made the programme credible to applicants and donors and kept its community up to date.",
    goals: [
      "Explain the programme in seconds",
      "Prove impact with real numbers",
      "Put alumni at the centre of the story",
      "Keep events and calls to action current",
    ],
    approach: [
      { title: "One clear message", body: "A full-bleed hero with a single line and one path into the programmes." },
      { title: "Impact you can see", body: "Animated stats for hours of learning, cohorts, graduates and female participation, plus a year-by-year milestone timeline." },
      { title: "Community first", body: "An alumni testimonial carousel, featured stories and an events calendar for concerts, forums and drives." },
    ],
    showcase: [
      { src: "/projects/aequitas.png", caption: "One line, one action: explore the programmes." },
      { src: "/projects/cs/aequitas-impact.jpg", caption: "Founding story and headline numbers, leading into the impact section." },
    ],
    highlights: [
      { title: "Animated impact stats", body: "Numbers that count up when they come into view." },
      { title: "Milestone timeline", body: "From the first cohort to the latest, year by year." },
      { title: "Alumni voices", body: "A testimonial carousel built around real graduates." },
      { title: "Events calendar", body: "Dates and venues for concerts, forums and seasonal drives." },
    ],
    engineering: [
      "Next.js and TypeScript, with reusable sections for programmes, stories and events.",
      "Scroll-triggered animation that only runs when sections come into view.",
    ],
    outcome:
      "Aequitas has a site that reads like its mission: hopeful, credible and clear about how to apply, give or attend.",
    outcomePoints: ["Live at aequitas.hansopoku.com"],
    pitch: "Leading a foundation or programme? I'll build a site that earns trust and drives sign-ups.",
  },
  {
    slug: "stacey",
    title: "Stacey Elsie Lamptey",
    label: "Personal brand website",
    status: "Live",
    tagline:
      "A speaker's website that turns visitors into booking requests and subscribers, with leads landing in a spreadsheet the team already uses.",
    cardSummary: "Speaking requests that land straight in a spreadsheet.",
    thumb: "/projects/stacey.png",
    url: "https://www.staceyelsie.com",
    accent: "#d3962b",
    accentInk: "#ffffff",
    client: "Stacey Elsie Lamptey, speaker & growth strategist",
    role: ["UI design", "Full-stack development", "Email & integrations"],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Resend", "React Email", "Google Sheets API"],
    brief:
      "Stacey needed a professional home for her speaking work: somewhere event organisers could learn about her and book her, and where her audience could subscribe. Her team didn't want yet another dashboard to log into.",
    goals: [
      "A confident first impression for event organisers",
      "Booking requests that are easy to act on",
      "A growing newsletter list",
      "No new tools for the team to learn",
    ],
    approach: [
      { title: "Book Stacey, everywhere", body: "A bold portrait hero and a 'Book Stacey' call to action that stays in reach on every page." },
      { title: "Leads in a spreadsheet", body: "Booking enquiries and newsletter sign-ups go straight into Google Sheets through a service account, so the team works in a tool it already uses." },
      { title: "Emails that look the part", body: "Each enquiry triggers branded emails, built with React Email and sent through Resend, to the sender and to the team." },
    ],
    showcase: [
      { src: "/projects/stacey.png", caption: "A portrait-led hero with the booking call to action up front." },
      { src: "/projects/cs/stacey-about.jpg", caption: "The About page tells the story behind the speaker." },
      { src: "/projects/cs/stacey-contact.jpg", caption: "The booking form feeds straight into the team's spreadsheet." },
    ],
    highlights: [
      { title: "Persistent booking CTA", body: "'Book Stacey' is never more than a glance away." },
      { title: "Google Sheets pipeline", body: "Enquiries and subscribers land in organised tabs with headers." },
      { title: "Branded emails", body: "Confirmation for the sender, an alert for the team." },
      { title: "Light, smooth motion", body: "Framer Motion reveals that add polish without slowing the site down." },
    ],
    engineering: [
      "Next.js route handlers process the contact and newsletter forms on the server.",
      "A Google service account writes to Sheets; credentials stay in environment variables, never in the browser.",
      "Emails are built as React components with React Email and delivered through Resend.",
    ],
    outcome:
      "A fast personal site that turns visitors into booking requests and subscribers, with a lead pipeline the client runs from a spreadsheet.",
    outcomePoints: ["Live at staceyelsie.com"],
    pitch: "Speaker, coach or consultant? I'll build a site that fills your calendar.",
  },
];

export const legacy = [
  { slug: "bubble", title: "Bubble Bliss Cafe", summary: "Cafe ordering with SMS updates." },
  { slug: "midnight", title: "Midnight Madness", summary: "Event tickets and checkout." },
  { slug: "liftoff", title: "Liftoff", summary: "Wedding site with RSVPs." },
  { slug: "hn", title: "H&M", summary: "Wedding site with RSVPs." },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
