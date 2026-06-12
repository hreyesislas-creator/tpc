/**
 * Content + SEO config for every dedicated local landing page.
 *
 * Each entry drives: the page metadata (title/description/canonical/OG),
 * the on-page copy (H1, H2 sections, intro, benefits, FAQs) and the
 * structured data (Service + FAQ + Breadcrumb schema). One config object →
 * one fully-optimized, NAP-consistent page.
 */
import { IMAGES } from "./images";

export type Landing = {
  slug: string;
  /** Primary city the page targets. */
  city: string;
  /** Short eyebrow shown above the H1. */
  eyebrow: string;
  /** Hero background photo. */
  hero: string;

  // --- SEO metadata ---
  title: string;
  description: string;
  keywords: string[];

  // --- On-page content ---
  h1: string;
  intro: string[];
  /** Body sections, each an <h2> + paragraphs. */
  sections: { h2: string; body: string[] }[];
  /** Benefit / feature grid. */
  highlights: { title: string; desc: string }[];

  // --- Structured data ---
  serviceType: string;
  serviceName: string;
  serviceDescription: string;
  faqs: { q: string; a: string }[];

  /**
   * Page category — drives the internal-linking sections:
   *  - "city"    → location-targeted (Wilmington, Long Beach, San Pedro, …)
   *  - "service" → service-type-targeted (Ceramic / Residential / Commercial)
   *  - "vehicle" → model-specific (Tahoe, Bronco, Model Y, …)
   */
  kind: "city" | "service" | "vehicle";

  /** Short label used in chip-style internal-link grids (city or model name). */
  chip?: string;
};

export const LANDINGS: Landing[] = [
  // 1 ──────────────────────────────────────────────────────────────────────
  {
    slug: "window-tinting-wilmington-ca",
    city: "Wilmington",
    eyebrow: "Wilmington, CA",
    hero: IMAGES.camaro,
    title: "Window Tinting in Wilmington, CA | TPC Window Tinting Shop",
    description:
      "Professional auto window tinting in Wilmington, CA. Heat rejection, UV protection, privacy and a clean blacked-out look. Free quotes — call (310) 872-3644.",
    keywords: [
      "window tinting Wilmington CA",
      "auto window tint Wilmington",
      "car window tinting Wilmington",
      "window tint shop Wilmington",
      "best window tinting near me Wilmington",
    ],
    h1: "Window Tinting in Wilmington, CA",
    intro: [
      "TPC Window Tinting Shop is Wilmington's go-to spot for clean, professional window tint. Located right on N Wilmington Blvd, we tint cars, SUVs, trucks and vans every day — and we know exactly how brutal the Southern California sun gets on the 110 and the harbor.",
      "Whether you want to beat the heat, protect your interior, add privacy or just get that finished blacked-out look, our installers dial in the perfect shade and lay the film bubble-free, edge to edge.",
    ],
    sections: [
      {
        h2: "Why Wilmington Drivers Choose TPC",
        body: [
          "We're not a mall kiosk or a side hustle — we're a dedicated tint shop with a clean install bay minutes from the Wilmington Waterfront. Local drivers send us their friends because the work holds up: no purple film, no peeling edges, no bubbles.",
          "Every job is backed by quality film, careful prep and a finish we'd put on our own vehicles. Same-day appointments are often available — call or text and we'll get you on the schedule.",
        ],
      },
      {
        h2: "Tint That Handles the SoCal Heat",
        body: [
          "Wilmington summers don't play around. Our films reject solar heat and block over 99% of UV rays, so your cabin stays cooler, your A/C works less and your dash and seats don't bake and crack over time.",
          "Prefer the best of the best? Our ceramic tint delivers maximum heat rejection without going so dark you can't see at night — ideal for daily commuters and work trucks alike.",
        ],
      },
      {
        h2: "California Tint Laws — Done Right",
        body: [
          "California has specific rules about how dark you can go on front side windows and windshields. We walk you through the legal limits and the look you want so you end up with tint you love that won't get you a fix-it ticket.",
        ],
      },
    ],
    highlights: [
      { title: "Heat Rejection", desc: "Stay cool through Wilmington summers and harbor glare." },
      { title: "99% UV Block", desc: "Protect your skin and keep your interior from fading." },
      { title: "Privacy & Security", desc: "Keep valuables out of sight with a darker cabin." },
      { title: "Clean, Lasting Finish", desc: "Bubble-free film with edges that stay put." },
    ],
    serviceType: "Automotive Window Tinting",
    serviceName: "Auto Window Tinting in Wilmington, CA",
    serviceDescription:
      "Professional automotive window tinting in Wilmington, CA — heat-rejection and ceramic films for cars, trucks, SUVs and vans, installed bubble-free with a lifetime-quality finish.",
    faqs: [
      {
        q: "How much does window tinting cost in Wilmington, CA?",
        a: "Pricing depends on your vehicle, the number of windows and the film you choose (standard vs. ceramic). Call or text TPC Window Tinting Shop at (310) 872-3644 for a fast, free quote on your exact vehicle.",
      },
      {
        q: "How long does it take to tint my car?",
        a: "Most full-vehicle tints are completed the same day, typically in 2–4 hours depending on the vehicle and film. We'll give you an exact time when you book.",
      },
      {
        q: "Is your window tint legal in California?",
        a: "Yes. We install to California's tint laws and explain the legal limits for front side windows and windshield strips so your tint looks great and stays compliant.",
      },
      {
        q: "Where is TPC Window Tinting Shop located?",
        a: "We're at 1454 N Wilmington Blvd, Wilmington, CA 90744 — open Monday through Saturday, 9:00 AM to 6:00 PM, with Sundays by appointment.",
      },
    ],
    kind: "city",
  },

  // 2 ──────────────────────────────────────────────────────────────────────
  {
    slug: "ceramic-window-tint-wilmington-ca",
    city: "Wilmington",
    eyebrow: "Wilmington, CA",
    hero: IMAGES.serviceCeramic,
    title: "Ceramic Window Tint in Wilmington, CA | TPC Window Tinting Shop",
    description:
      "Premium ceramic window tint in Wilmington, CA. Maximum heat rejection, 99% UV block and a true-color finish that never fades or turns purple. Call (310) 872-3644.",
    keywords: [
      "ceramic window tint Wilmington CA",
      "ceramic tint Wilmington",
      "nano ceramic window tint",
      "best ceramic tint near me",
      "heat rejection window tint Wilmington",
    ],
    h1: "Ceramic Window Tint in Wilmington, CA",
    intro: [
      "Ceramic window tint is the top-tier film we install at TPC Window Tinting Shop — and it's the upgrade Wilmington drivers ask for by name. Using nano-ceramic technology, it blocks far more solar heat than standard dyed film while keeping a clean, true-color look.",
      "If you want your car to feel noticeably cooler the second you get in, ceramic is the answer. It rejects infrared heat, blocks 99% of UV rays and never fades, bubbles or turns purple over time.",
    ],
    sections: [
      {
        h2: "What Makes Ceramic Tint Worth It",
        body: [
          "Standard dyed films darken your windows but do little to stop heat. Ceramic film is packed with microscopic ceramic particles that reflect and absorb infrared heat — the part of sunlight you actually feel — so your cabin stays dramatically cooler in Wilmington's summer sun.",
          "Because there's no dye to break down, ceramic stays optically clear and color-stable for years. No purple haze, no signal interference with your phone or GPS, and crisp visibility day and night.",
        ],
      },
      {
        h2: "Cooler Cabin, Protected Interior",
        body: [
          "Ceramic tint can reject a large share of the sun's heat, taking real strain off your A/C and keeping leather, dashboards and trim from cracking and fading. Block 99% of UV and you also protect your skin on long commutes up the 710 and 110.",
        ],
      },
      {
        h2: "True Color, Crystal-Clear Visibility",
        body: [
          "One of the best parts of ceramic film is how natural it looks. You get the privacy and heat control of a darker shade without the murky, mirror-like glare of cheap film — and night driving stays clear and safe.",
        ],
      },
    ],
    highlights: [
      { title: "Maximum Heat Rejection", desc: "Reflects infrared heat for a noticeably cooler cabin." },
      { title: "Color-Stable", desc: "Never fades, bubbles or turns purple." },
      { title: "Signal-Friendly", desc: "No interference with phone, GPS or keyless entry." },
      { title: "99% UV Protection", desc: "Guards your skin and interior on every drive." },
    ],
    serviceType: "Ceramic Window Tinting",
    serviceName: "Ceramic Window Tint in Wilmington, CA",
    serviceDescription:
      "Premium nano-ceramic automotive window tint in Wilmington, CA delivering maximum infrared heat rejection, 99% UV protection and a fade-proof, true-color finish.",
    faqs: [
      {
        q: "Is ceramic window tint worth the extra cost?",
        a: "If you care about staying cool and keeping your tint looking great for years, yes. Ceramic film rejects far more heat than standard film, blocks 99% of UV, and won't fade or turn purple — so it pays you back in comfort and longevity.",
      },
      {
        q: "Does ceramic tint reduce heat better than regular tint?",
        a: "Significantly. Ceramic film targets infrared heat — the energy you actually feel — so your cabin stays cooler at the same shade compared to standard dyed film.",
      },
      {
        q: "Will ceramic tint interfere with my phone or GPS?",
        a: "No. Unlike metalized films, ceramic tint is non-conductive, so it won't block cell, GPS, Bluetooth or keyless-entry signals.",
      },
      {
        q: "How much is ceramic tint in Wilmington?",
        a: "It depends on your vehicle and how many windows you're doing. Call or text TPC Window Tinting Shop at (310) 872-3644 for a free ceramic-tint quote.",
      },
    ],
    kind: "service",
  },

  // 3 ──────────────────────────────────────────────────────────────────────
  {
    slug: "window-tinting-long-beach-ca",
    city: "Long Beach",
    eyebrow: "Serving Long Beach, CA",
    hero: IMAGES.bronco,
    title: "Window Tinting in Long Beach, CA | TPC Window Tinting Shop",
    description:
      "Quality auto window tinting for Long Beach, CA drivers. Ceramic & standard film, heat rejection, UV block and a clean look. Minutes from Long Beach. Call (310) 872-3644.",
    keywords: [
      "window tinting Long Beach CA",
      "car tint Long Beach",
      "auto window tint Long Beach",
      "ceramic tint Long Beach",
      "window tint shop near Long Beach",
    ],
    h1: "Window Tinting for Long Beach, CA",
    intro: [
      "Long Beach drivers don't have to go far for professional window tint. TPC Window Tinting Shop sits just up the road in Wilmington — a quick hop from Long Beach via the 710 — and we tint vehicles from across the LBC every week.",
      "From daily commuters parked under the Long Beach sun to weekend builds heading to the coast, we deliver heat-blocking, UV-rejecting tint with a flawless, bubble-free finish.",
    ],
    sections: [
      {
        h2: "A Short Drive From Long Beach",
        body: [
          "We're located at 1454 N Wilmington Blvd in Wilmington — minutes from Downtown Long Beach, West Long Beach and the 710 corridor. Drop the car off, grab a coffee nearby, and most jobs are ready the same day.",
          "Long Beach customers come back to us because the work lasts. No bubbling, no peeling, no purple film — just clean, professional tint done right the first time.",
        ],
      },
      {
        h2: "Beat the Heat by the Coast",
        body: [
          "Even with the ocean breeze, parked cars in Long Beach turn into ovens. Our heat-rejection and ceramic films keep your cabin cooler, cut glare off the water and protect your interior from fading and cracking under constant UV.",
        ],
      },
      {
        h2: "Every Vehicle, Every Shade",
        body: [
          "Cars, trucks, SUVs, vans and work fleets — we tint them all, and we'll help you pick a legal shade that matches the look you're going for. Want maximum heat control? Ask about our ceramic upgrade.",
        ],
      },
    ],
    highlights: [
      { title: "Minutes Away", desc: "Quick trip up the 710 from Long Beach." },
      { title: "Same-Day Service", desc: "Most tints finished the day you drop off." },
      { title: "Cooler & Clearer", desc: "Cut heat and glare off the coast." },
      { title: "Lasting Quality", desc: "No bubbling, peeling or purple film." },
    ],
    serviceType: "Automotive Window Tinting",
    serviceName: "Window Tinting for Long Beach, CA",
    serviceDescription:
      "Professional automotive window tinting serving Long Beach, CA from our Wilmington shop — ceramic and heat-rejection films installed same-day with a clean, lasting finish.",
    faqs: [
      {
        q: "Do you serve Long Beach from your Wilmington shop?",
        a: "Absolutely. We're just minutes from Long Beach at 1454 N Wilmington Blvd, Wilmington, CA 90744, and we tint vehicles for Long Beach drivers every week.",
      },
      {
        q: "Can I get my car tinted the same day?",
        a: "In most cases, yes. Call or text (310) 872-3644 to check availability — many Long Beach customers drop off and pick up the same day.",
      },
      {
        q: "What's the best tint for blocking heat in Long Beach?",
        a: "Our ceramic film offers the best heat rejection while staying true-color and signal-friendly. It's the top pick for coastal commuters dealing with sun and glare.",
      },
      {
        q: "How do I get a quote?",
        a: "Call or text TPC Window Tinting Shop at (310) 872-3644 with your vehicle and the windows you want done, and we'll give you a fast, free quote.",
      },
    ],
    kind: "city",
  },

  // 4 ──────────────────────────────────────────────────────────────────────
  {
    slug: "window-tinting-san-pedro-ca",
    city: "San Pedro",
    eyebrow: "Serving San Pedro, CA",
    hero: IMAGES.hummer,
    title: "Window Tinting in San Pedro, CA | TPC Window Tinting Shop",
    description:
      "Auto window tinting for San Pedro, CA. Ceramic & standard film with heat rejection, UV block and a clean finish — minutes away in Wilmington. Call (310) 872-3644.",
    keywords: [
      "window tinting San Pedro CA",
      "car tint San Pedro",
      "auto window tint San Pedro",
      "ceramic tint San Pedro",
      "window tint shop near San Pedro",
    ],
    h1: "Window Tinting for San Pedro, CA",
    intro: [
      "San Pedro drivers trust TPC Window Tinting Shop for clean, professional tint without the trek across town. We're right next door in Wilmington — a quick drive over the bridge — and we tint vehicles from the harbor area every week.",
      "Salt air, harbor sun and hillside glare are tough on a vehicle. Our films keep your cabin cooler, block damaging UV and give your car that sharp, finished look.",
    ],
    sections: [
      {
        h2: "Right Next Door to San Pedro",
        body: [
          "Our shop at 1454 N Wilmington Blvd is just minutes from San Pedro and the Port of LA. Easy drop-off, same-day turnaround on most vehicles, and a finish that holds up to the coastal climate.",
          "Harbor-area customers keep coming back because we don't cut corners — careful prep, quality film, and edges that stay sealed against the salt air.",
        ],
      },
      {
        h2: "Built for the Harbor Climate",
        body: [
          "Between the sun off the water and the marine layer burning off by midday, San Pedro vehicles take a beating. Heat-rejection and ceramic films cut cabin heat and glare while blocking 99% of UV to protect your interior.",
        ],
      },
      {
        h2: "Cars, Trucks, Work Vehicles & More",
        body: [
          "Whether it's a daily driver, a lifted truck, or a work van for a harbor business, we'll match the right film and a legal shade to your needs. Ask about ceramic if you want the strongest heat control we offer.",
        ],
      },
    ],
    highlights: [
      { title: "Just Over the Bridge", desc: "A quick drive from San Pedro to our shop." },
      { title: "Coastal-Tough", desc: "Edges sealed to handle salt air and sun." },
      { title: "Same-Day Tint", desc: "Most vehicles done the day you drop off." },
      { title: "UV & Heat Block", desc: "Cooler cabin, protected interior, less glare." },
    ],
    serviceType: "Automotive Window Tinting",
    serviceName: "Window Tinting for San Pedro, CA",
    serviceDescription:
      "Professional automotive window tinting serving San Pedro, CA from our nearby Wilmington shop — ceramic and heat-rejection films built to handle the harbor climate.",
    faqs: [
      {
        q: "Do you tint cars for San Pedro residents?",
        a: "Yes — we're minutes from San Pedro at 1454 N Wilmington Blvd, Wilmington, CA 90744, and harbor-area drivers are some of our most frequent customers.",
      },
      {
        q: "Will the tint hold up against the salt air?",
        a: "It will. We prep every window carefully and seal the edges, and we use quality film built to resist peeling and bubbling in coastal conditions.",
      },
      {
        q: "What shade can I legally get on my front windows?",
        a: "California limits how dark front side windows can be. We'll explain the legal limits and help you choose a shade that looks great and stays compliant.",
      },
      {
        q: "How do I book?",
        a: "Call or text TPC Window Tinting Shop at (310) 872-3644 with your vehicle details and we'll get you scheduled — often the same day.",
      },
    ],
    kind: "city",
  },

  // 5 ──────────────────────────────────────────────────────────────────────
  {
    slug: "residential-window-tint-wilmington-ca",
    city: "Wilmington",
    eyebrow: "Wilmington, CA",
    hero: IMAGES.interior,
    title: "Residential Window Tinting in Wilmington, CA | TPC Window Tinting Shop",
    description:
      "Home window tinting in Wilmington, CA. Cut heat, glare and UV, add privacy and lower energy bills with professional residential window film. Call (310) 872-3644.",
    keywords: [
      "residential window tint Wilmington CA",
      "home window tinting Wilmington",
      "house window film Wilmington",
      "privacy window film",
      "energy saving window tint",
    ],
    h1: "Residential Window Tinting in Wilmington, CA",
    intro: [
      "It's not just cars — TPC Window Tinting Shop also tints homes across Wilmington and the South Bay. Residential window film cuts heat and glare, blocks UV that fades your floors and furniture, and adds privacy without giving up your natural light.",
      "If certain rooms turn into a greenhouse every afternoon or your A/C never seems to keep up, home window tint is one of the most cost-effective upgrades you can make.",
    ],
    sections: [
      {
        h2: "Lower Bills, Cooler Rooms",
        body: [
          "Untreated windows let in a flood of solar heat, forcing your A/C to run nonstop. Residential window film rejects a large share of that heat, evens out hot and cold spots room to room, and can help bring down your energy bills through Wilmington's long, hot season.",
        ],
      },
      {
        h2: "Protect Your Floors & Furniture",
        body: [
          "UV and intense sunlight fade hardwood, carpet, artwork and upholstery over time. Our films block 99% of UV rays and cut glare on TVs and screens — protecting what's inside while keeping your view clear.",
        ],
      },
      {
        h2: "Privacy Without Losing Light",
        body: [
          "Want more privacy from the street or neighboring units? We offer films that make it harder to see in during the day while still letting daylight pour through. It's privacy and comfort without turning your home dark.",
        ],
      },
    ],
    highlights: [
      { title: "Heat & Glare Control", desc: "Tame hot rooms and screen glare all day." },
      { title: "Lower Energy Bills", desc: "Ease the load on your A/C through summer." },
      { title: "Fade Protection", desc: "Block 99% of UV that damages interiors." },
      { title: "Daytime Privacy", desc: "Harder to see in — without losing daylight." },
    ],
    serviceType: "Residential Window Tinting",
    serviceName: "Residential Window Tinting in Wilmington, CA",
    serviceDescription:
      "Residential window film installation in Wilmington, CA — heat- and glare-reducing, UV-blocking and privacy films for homes that cut energy bills and protect interiors.",
    faqs: [
      {
        q: "Does home window tint really lower energy bills?",
        a: "Yes. By rejecting solar heat, residential film reduces how hard your A/C has to work, which can lower cooling costs during Wilmington's hot months while making rooms more comfortable.",
      },
      {
        q: "Will residential tint make my home too dark?",
        a: "No. We offer films that cut heat, glare and UV while keeping plenty of natural light — including options that add daytime privacy without a heavy, dark look.",
      },
      {
        q: "Can window film really stop my furniture from fading?",
        a: "Our films block 99% of UV rays — a major cause of fading — and reduce overall solar exposure, which helps protect floors, furniture, artwork and upholstery.",
      },
      {
        q: "Do you provide quotes for homes in Wilmington?",
        a: "Yes. Call or text TPC Window Tinting Shop at (310) 872-3644 and we'll discuss your windows, goals and a free estimate for your home.",
      },
    ],
    kind: "service",
  },

  // 6 ──────────────────────────────────────────────────────────────────────
  {
    slug: "commercial-window-tint-wilmington-ca",
    city: "Wilmington",
    eyebrow: "Wilmington, CA",
    hero: IMAGES.shop2,
    title: "Commercial Window Tinting in Wilmington, CA | TPC Window Tinting Shop",
    description:
      "Commercial window tinting in Wilmington, CA for offices, storefronts & buildings. Cut heat, glare and energy costs, add privacy and security. Call (310) 872-3644.",
    keywords: [
      "commercial window tint Wilmington CA",
      "office window tinting Wilmington",
      "storefront window film",
      "building window tint",
      "security window film Wilmington",
    ],
    h1: "Commercial Window Tinting in Wilmington, CA",
    intro: [
      "TPC Window Tinting Shop helps Wilmington businesses cut costs and look sharper with professional commercial window film. From storefronts and offices to warehouses and harbor-area facilities, we tint the glass that keeps your space comfortable, private and protected.",
      "Commercial film pays for itself — lower cooling bills, less glare on screens, a more consistent indoor temperature, and an cleaner exterior look for your building.",
    ],
    sections: [
      {
        h2: "Cut Energy Costs & Glare",
        body: [
          "Big commercial windows mean big solar heat gain and uncomfortable, glare-filled workspaces. Our films reject a large portion of that heat, balance the temperature from front to back of the building, and kill the glare that makes screens unreadable — so your team stays comfortable and your HVAC works less.",
        ],
      },
      {
        h2: "Privacy, Branding & Security",
        body: [
          "Need privacy for an office or conference room? Want to deter break-ins or hold glass together if it's hit? We offer privacy and security films, plus clean, professional finishes that elevate your storefront's curb appeal.",
        ],
      },
      {
        h2: "Built for Wilmington Businesses",
        body: [
          "We're a local Wilmington shop and we work around your hours to keep disruption to a minimum. Offices, retail, restaurants, fleets and industrial facilities across the harbor area trust us for tint that looks right and performs.",
        ],
      },
    ],
    highlights: [
      { title: "Lower Operating Costs", desc: "Reduce cooling load and energy spend." },
      { title: "Comfortable Workspace", desc: "Even temps and far less screen glare." },
      { title: "Privacy & Security", desc: "Privacy and safety/security film options." },
      { title: "Local & Flexible", desc: "Wilmington-based; we work around your hours." },
    ],
    serviceType: "Commercial Window Tinting",
    serviceName: "Commercial Window Tinting in Wilmington, CA",
    serviceDescription:
      "Commercial window film for offices, storefronts and buildings in Wilmington, CA — heat-, glare- and energy-reducing films plus privacy and security options installed around your schedule.",
    faqs: [
      {
        q: "What are the benefits of commercial window tint?",
        a: "Commercial film lowers cooling costs, reduces glare for a more productive workspace, evens out building temperatures, adds privacy and can improve security and curb appeal — often paying for itself over time.",
      },
      {
        q: "Can you tint a storefront or office in Wilmington?",
        a: "Yes. We tint storefronts, offices, conference rooms, warehouses and harbor-area facilities throughout Wilmington and the South Bay.",
      },
      {
        q: "Do you offer security or privacy film?",
        a: "We do. We carry privacy films for offices and meeting spaces as well as security films that help hold glass together and deter break-ins.",
      },
      {
        q: "Will the install disrupt my business?",
        a: "We work around your hours to minimize downtime. Call or text (310) 872-3644 and we'll plan an install that fits your schedule.",
      },
    ],
    kind: "service",
  },

  // ── ADDITIONAL CITY PAGES ────────────────────────────────────────────────
  {
    slug: "window-tinting-carson-ca",
    city: "Carson",
    chip: "Carson",
    eyebrow: "Serving Carson, CA",
    hero: IMAGES.lexus,
    title: "Window Tinting in Carson, CA | TPC Window Tinting Shop",
    description:
      "Auto window tinting for Carson, CA — ceramic & standard film, heat rejection and a clean look, minutes away in Wilmington. Free quote: call (310) 872-3644.",
    keywords: [
      "window tinting Carson CA",
      "car tint Carson",
      "auto window tint Carson",
      "ceramic tint Carson",
      "window tint shop near Carson",
    ],
    h1: "Window Tinting for Carson, CA",
    intro: [
      "Carson sits right on our doorstep — just north of our Wilmington shop near the 405 and 110. We tint cars, trucks and SUVs for Carson drivers every week, from daily commuters to weekend builds rolling to Dignity Health Sports Park.",
      "Carson's wide, sun-baked streets mean serious heat soak in parked vehicles. Our films cut that heat, block UV and finish your ride with a clean, sharp look.",
    ],
    sections: [
      {
        h2: "Minutes From Carson",
        body: [
          "You're a short hop down Avalon or Wilmington Ave from our install bay at 1454 N Wilmington Blvd. Drop off in the morning and most vehicles are ready the same afternoon.",
          "Carson customers keep referring friends because the work lasts — no bubbling, peeling or purple film, just clean tint done right.",
        ],
      },
      {
        h2: "Heat & Glare Control for Flat, Sunny Streets",
        body: [
          "Between CSU Dominguez Hills commutes and long stretches of open road, Carson vehicles bake in direct sun. Ceramic and heat-rejection films keep the cabin cooler and your A/C working less.",
        ],
      },
      {
        h2: "Legal, Clean, and Built to Last",
        body: [
          "We install to California's tint limits and walk you through the legal shade for your front windows, so your Carson ride looks great without risking a fix-it ticket.",
        ],
      },
    ],
    highlights: [
      { title: "Heat Rejection", desc: "Beat Carson's flat, sun-soaked streets." },
      { title: "99% UV Block", desc: "Protect your skin and interior from fading." },
      { title: "Same-Day Service", desc: "Most vehicles finished the day you drop off." },
      { title: "Lasting Finish", desc: "No bubbling, peeling or purple film." },
    ],
    serviceType: "Automotive Window Tinting",
    serviceName: "Window Tinting for Carson, CA",
    serviceDescription:
      "Professional automotive window tinting serving Carson, CA from our nearby Wilmington shop — ceramic and heat-rejection films installed same-day with a clean, lasting finish.",
    faqs: [
      {
        q: "Do you tint cars for Carson residents?",
        a: "Yes — we're just minutes from Carson at 1454 N Wilmington Blvd, Wilmington, CA 90744, and Carson drivers are some of our most frequent customers.",
      },
      {
        q: "How much does window tint cost?",
        a: "It depends on your vehicle, the number of windows and the film you choose. Call or text (310) 872-3644 for a fast, free quote.",
      },
      {
        q: "What tint is best for blocking heat?",
        a: "Our ceramic film offers the strongest heat rejection while staying true-color and signal-friendly — ideal for Carson's open, sunny roads.",
      },
      {
        q: "Can I get tinted the same day?",
        a: "Usually yes. Call ahead and we'll check the schedule — most Carson jobs are completed same-day.",
      },
    ],
    kind: "city",
  },
  {
    slug: "window-tinting-harbor-city-ca",
    city: "Harbor City",
    chip: "Harbor City",
    eyebrow: "Serving Harbor City, CA",
    hero: IMAGES.shop2,
    title: "Window Tinting in Harbor City, CA | TPC Window Tinting Shop",
    description:
      "Window tinting for Harbor City, CA. Ceramic & standard auto film, heat and UV protection, just minutes away in Wilmington. Call (310) 872-3644 for a free quote.",
    keywords: [
      "window tinting Harbor City CA",
      "car tint Harbor City",
      "auto window tint Harbor City",
      "ceramic tint Harbor City",
    ],
    h1: "Window Tinting for Harbor City, CA",
    intro: [
      "Harbor City is practically our neighbor — a quick drive up the 110 from our Wilmington shop. We've tinted countless vehicles for Harbor City drivers, and we know the harbor-area sun and marine air well.",
      "Whether it's a commuter sedan or a lifted truck, we lay film bubble-free and dial in a shade that beats the heat and looks clean.",
    ],
    sections: [
      {
        h2: "Right Around the Corner",
        body: [
          "At 1454 N Wilmington Blvd we're one of the closest dedicated tint shops to Harbor City. Easy drop-off, fast same-day turnaround, and a finish that holds up to coastal conditions.",
        ],
      },
      {
        h2: "Built for the Harbor Climate",
        body: [
          "Sun off the harbor plus the morning marine layer is tough on vehicles. Our heat-rejection and ceramic films cut cabin heat and glare while blocking 99% of UV to protect your interior.",
        ],
      },
      {
        h2: "Every Vehicle, Every Shade",
        body: [
          "Cars, trucks, SUVs and work vans — we'll match the right film and a legal shade to the look you want. Ask about ceramic for the strongest heat control.",
        ],
      },
    ],
    highlights: [
      { title: "Right Next Door", desc: "One of the closest tint shops to Harbor City." },
      { title: "Coastal-Tough", desc: "Edges sealed against harbor salt air." },
      { title: "UV & Heat Block", desc: "Cooler cabin and protected interior." },
      { title: "Same-Day Tint", desc: "Most vehicles done the day you drop off." },
    ],
    serviceType: "Automotive Window Tinting",
    serviceName: "Window Tinting for Harbor City, CA",
    serviceDescription:
      "Professional automotive window tinting serving Harbor City, CA from our adjacent Wilmington shop — ceramic and heat-rejection films built for the harbor climate.",
    faqs: [
      {
        q: "Are you close to Harbor City?",
        a: "Very — we're minutes away at 1454 N Wilmington Blvd, Wilmington, CA 90744, just up the 110.",
      },
      {
        q: "Will tint hold up to the marine air?",
        a: "Yes. We prep and seal every window with quality film built to resist peeling and bubbling near the coast.",
      },
      {
        q: "What's the legal front-window shade in California?",
        a: "California limits how dark front side windows can be — we'll explain the limits and help you choose a compliant shade.",
      },
      {
        q: "How do I book?",
        a: "Call or text (310) 872-3644 with your vehicle details and we'll get you scheduled, often the same day.",
      },
    ],
    kind: "city",
  },
  {
    slug: "window-tinting-torrance-ca",
    city: "Torrance",
    chip: "Torrance",
    eyebrow: "Serving Torrance, CA",
    hero: IMAGES.camaro,
    title: "Window Tinting in Torrance, CA | TPC Window Tinting Shop",
    description:
      "Quality auto window tinting for Torrance, CA. Ceramic & heat-rejection film, UV block and a clean finish from our Wilmington shop. Call (310) 872-3644.",
    keywords: [
      "window tinting Torrance CA",
      "car tint Torrance",
      "auto window tint Torrance",
      "ceramic tint Torrance",
      "window tint shop Torrance",
    ],
    h1: "Window Tinting for Torrance, CA",
    intro: [
      "Torrance drivers come to TPC Window Tinting Shop for clean, professional tint that lasts. We're a short drive from Torrance via the 110 or PCH, and we tint everything from Del Amo daily drivers to weekend project cars.",
      "With so much time on the 405 and surface streets, Torrance vehicles soak up serious heat and UV. Our films keep your cabin cooler and your interior protected.",
    ],
    sections: [
      {
        h2: "A Quick Drive From Torrance",
        body: [
          "Our bay at 1454 N Wilmington Blvd is an easy trip from Torrance. Most vehicles are tinted same-day, so you can drop off and get back to your day.",
        ],
      },
      {
        h2: "Cooler Commutes, Less Glare",
        body: [
          "Long South Bay commutes mean hours in direct sun. Heat-rejection and ceramic films cut cabin temperature and knock down glare for a more comfortable, safer drive.",
        ],
      },
      {
        h2: "From Daily Drivers to Enthusiast Builds",
        body: [
          "Torrance has a strong car culture, and we tint to match — clean, even shades, legal fronts, and ceramic upgrades for owners who want the best heat performance.",
        ],
      },
    ],
    highlights: [
      { title: "Short Drive", desc: "Easy trip from Torrance via 110 or PCH." },
      { title: "Enthusiast-Grade", desc: "Clean, even shades for any build." },
      { title: "Heat & Glare Cut", desc: "Cooler cabin on long 405 commutes." },
      { title: "Ceramic Option", desc: "Top-tier heat rejection available." },
    ],
    serviceType: "Automotive Window Tinting",
    serviceName: "Window Tinting for Torrance, CA",
    serviceDescription:
      "Professional automotive window tinting serving Torrance, CA from our Wilmington shop — ceramic and heat-rejection films for daily drivers and enthusiast builds alike.",
    faqs: [
      {
        q: "Do you serve Torrance?",
        a: "Yes — we're a quick drive from Torrance at 1454 N Wilmington Blvd, Wilmington, CA 90744.",
      },
      {
        q: "Can you do enthusiast or show-car tint?",
        a: "Absolutely. We dial in clean, even shades and offer premium ceramic film for the best look and heat performance.",
      },
      {
        q: "How long does tinting take?",
        a: "Most full-vehicle tints are done same-day, typically 2–4 hours depending on the car.",
      },
      {
        q: "How do I get a quote?",
        a: "Call or text (310) 872-3644 with your vehicle and we'll give you a fast, free quote.",
      },
    ],
    kind: "city",
  },
  {
    slug: "window-tinting-lomita-ca",
    city: "Lomita",
    chip: "Lomita",
    eyebrow: "Serving Lomita, CA",
    hero: IMAGES.build1,
    title: "Window Tinting in Lomita, CA | TPC Window Tinting Shop",
    description:
      "Auto window tinting for Lomita, CA — ceramic & standard film, heat rejection and UV protection minutes away in Wilmington. Free quote: call (310) 872-3644.",
    keywords: [
      "window tinting Lomita CA",
      "car tint Lomita",
      "auto window tint Lomita",
      "ceramic tint Lomita",
    ],
    h1: "Window Tinting for Lomita, CA",
    intro: [
      "Lomita — the 'Friendly City' — is just up the road from our Wilmington shop, and we treat every Lomita customer like a neighbor. We tint cars, trucks and SUVs with clean, lasting film and honest advice.",
      "Tucked between Torrance and Harbor City, Lomita gets plenty of South Bay sun. Our films cut the heat, block UV and finish your vehicle with a sharp look.",
    ],
    sections: [
      {
        h2: "Close to Home",
        body: [
          "From Lomita, our bay at 1454 N Wilmington Blvd is a short hop down Narbonne or PCH. Drop off and most vehicles are ready the same day.",
        ],
      },
      {
        h2: "Beat the South Bay Sun",
        body: [
          "Even a few hours parked in Lomita's sun turns a cabin into an oven. Ceramic and heat-rejection films keep things cooler and protect your dash and seats from fading and cracking.",
        ],
      },
      {
        h2: "Honest Work, Lasting Tint",
        body: [
          "We'll recommend the right film for your needs and a legal shade for your fronts — no upsells, just clean tint that holds up.",
        ],
      },
    ],
    highlights: [
      { title: "Neighborly Service", desc: "We treat Lomita customers like neighbors." },
      { title: "Quick Trip", desc: "Minutes away via Narbonne or PCH." },
      { title: "Heat & UV Block", desc: "Cooler cabin, protected interior." },
      { title: "Lasting Quality", desc: "Clean film with edges that stay put." },
    ],
    serviceType: "Automotive Window Tinting",
    serviceName: "Window Tinting for Lomita, CA",
    serviceDescription:
      "Professional automotive window tinting serving Lomita, CA from our nearby Wilmington shop — ceramic and heat-rejection films installed with honest advice and a lasting finish.",
    faqs: [
      {
        q: "Is your shop near Lomita?",
        a: "Yes — we're minutes away at 1454 N Wilmington Blvd, Wilmington, CA 90744.",
      },
      {
        q: "What does tint cost in Lomita?",
        a: "It varies by vehicle and film. Call or text (310) 872-3644 for a free, no-pressure quote.",
      },
      {
        q: "Do you offer ceramic tint?",
        a: "We do — ceramic gives the best heat rejection and a fade-proof, true-color finish.",
      },
      {
        q: "Can I get a same-day appointment?",
        a: "Often yes. Call ahead and we'll check availability for your Lomita vehicle.",
      },
    ],
    kind: "city",
  },
  {
    slug: "window-tinting-gardena-ca",
    city: "Gardena",
    chip: "Gardena",
    eyebrow: "Serving Gardena, CA",
    hero: IMAGES.build2,
    title: "Window Tinting in Gardena, CA | TPC Window Tinting Shop",
    description:
      "Auto window tinting for Gardena, CA. Ceramic & heat-rejection film, UV block and a clean look from our nearby Wilmington shop. Call (310) 872-3644.",
    keywords: [
      "window tinting Gardena CA",
      "car tint Gardena",
      "auto window tint Gardena",
      "ceramic tint Gardena",
    ],
    h1: "Window Tinting for Gardena, CA",
    intro: [
      "Gardena sits right in the heart of the South Bay, and its drivers trust TPC Window Tinting Shop for clean, professional tint. We're a straight shot down the 110 from Gardena and tint vehicles from the area all the time.",
      "With heavy commuting along the 91 and 110, Gardena cars rack up hours in the sun. Our films keep the cabin cool and the interior protected.",
    ],
    sections: [
      {
        h2: "An Easy Trip From Gardena",
        body: [
          "Our shop at 1454 N Wilmington Blvd is a quick drive south from Gardena. Same-day service on most vehicles means minimal disruption to your day.",
        ],
      },
      {
        h2: "Cut the Commuter Heat",
        body: [
          "Stuck on the 110 in afternoon sun? Ceramic and heat-rejection films lower cabin temperature and glare so your commute is cooler and easier on the eyes.",
        ],
      },
      {
        h2: "Any Vehicle, Done Right",
        body: [
          "Sedans, SUVs, trucks and work vehicles — we match the right film and a legal shade, and lay it bubble-free for a finish that lasts.",
        ],
      },
    ],
    highlights: [
      { title: "Straight Down the 110", desc: "Quick trip from Gardena to our bay." },
      { title: "Commuter-Ready", desc: "Beat the heat on the 91 and 110." },
      { title: "99% UV Block", desc: "Protect your skin and interior." },
      { title: "Bubble-Free Finish", desc: "Clean install that holds up." },
    ],
    serviceType: "Automotive Window Tinting",
    serviceName: "Window Tinting for Gardena, CA",
    serviceDescription:
      "Professional automotive window tinting serving Gardena, CA from our Wilmington shop — ceramic and heat-rejection films for commuters and work vehicles alike.",
    faqs: [
      {
        q: "Do you serve Gardena drivers?",
        a: "Yes — we're a short drive away at 1454 N Wilmington Blvd, Wilmington, CA 90744.",
      },
      {
        q: "What's the best tint for a daily commuter?",
        a: "Ceramic film — it blocks the most heat while staying clear for safe night driving.",
      },
      {
        q: "How long will my car be in the shop?",
        a: "Most tints are completed the same day in just a few hours.",
      },
      {
        q: "How do I book?",
        a: "Call or text (310) 872-3644 with your vehicle details and we'll schedule you in.",
      },
    ],
    kind: "city",
  },
  {
    slug: "window-tinting-lawndale-ca",
    city: "Lawndale",
    chip: "Lawndale",
    eyebrow: "Serving Lawndale, CA",
    hero: IMAGES.build3,
    title: "Window Tinting in Lawndale, CA | TPC Window Tinting Shop",
    description:
      "Window tinting for Lawndale, CA — ceramic & standard auto film with heat and UV protection from our Wilmington shop. Free quote: call (310) 872-3644.",
    keywords: [
      "window tinting Lawndale CA",
      "car tint Lawndale",
      "auto window tint Lawndale",
      "ceramic tint Lawndale",
    ],
    h1: "Window Tinting for Lawndale, CA",
    intro: [
      "Lawndale drivers don't have to go far for quality tint. From Hawthorne Blvd it's a quick run down to our Wilmington shop, where we tint cars, trucks and SUVs with clean, lasting film.",
      "Sitting along the 405 corridor, Lawndale sees steady sun and traffic. Our films cut heat, block UV and finish your ride with a sharp, even shade.",
    ],
    sections: [
      {
        h2: "A Short Run From Lawndale",
        body: [
          "Our bay at 1454 N Wilmington Blvd is an easy drive from Lawndale. Drop off in the morning and most vehicles are ready by afternoon.",
        ],
      },
      {
        h2: "Stay Cool in 405 Traffic",
        body: [
          "Crawling down the 405 in the sun heats up any cabin fast. Heat-rejection and ceramic films keep you cooler and reduce glare for safer driving.",
        ],
      },
      {
        h2: "Clean, Legal, Lasting",
        body: [
          "We install to California's tint laws and help you pick a front-window shade that looks great and keeps you compliant.",
        ],
      },
    ],
    highlights: [
      { title: "Easy Drive", desc: "Quick trip from Lawndale via the 405." },
      { title: "Cooler Cabin", desc: "Beat the heat in stop-and-go traffic." },
      { title: "UV Protection", desc: "Block 99% of fading, skin-damaging rays." },
      { title: "Even Shade", desc: "Clean, uniform film front to back." },
    ],
    serviceType: "Automotive Window Tinting",
    serviceName: "Window Tinting for Lawndale, CA",
    serviceDescription:
      "Professional automotive window tinting serving Lawndale, CA from our Wilmington shop — ceramic and heat-rejection films installed clean, legal and built to last.",
    faqs: [
      {
        q: "Are you near Lawndale?",
        a: "Yes — we're a short drive away at 1454 N Wilmington Blvd, Wilmington, CA 90744.",
      },
      {
        q: "How much is window tint?",
        a: "Pricing depends on your vehicle and film. Call or text (310) 872-3644 for a free quote.",
      },
      {
        q: "Is ceramic worth it?",
        a: "If you want maximum heat rejection and a fade-proof finish, yes — it's our top film.",
      },
      {
        q: "Can you remove old tint too?",
        a: "We do — we cleanly remove bubbled or peeling film and prep for a fresh install.",
      },
    ],
    kind: "city",
  },
  {
    slug: "window-tinting-redondo-beach-ca",
    city: "Redondo Beach",
    chip: "Redondo Beach",
    eyebrow: "Serving Redondo Beach, CA",
    hero: IMAGES.build4,
    title: "Window Tinting in Redondo Beach, CA | TPC Window Tinting Shop",
    description:
      "Auto window tinting for Redondo Beach, CA. Ceramic film to cut coastal sun, glare and UV with a clean, lasting finish. Call (310) 872-3644 for a free quote.",
    keywords: [
      "window tinting Redondo Beach CA",
      "car tint Redondo Beach",
      "auto window tint Redondo Beach",
      "ceramic tint Redondo Beach",
    ],
    h1: "Window Tinting for Redondo Beach, CA",
    intro: [
      "Redondo Beach drivers deal with bright coastal sun and glare off the water every day. TPC Window Tinting Shop helps with ceramic and heat-rejection film that cools your cabin and sharpens your view — and we're an easy drive from the beach.",
      "From King Harbor commuters to weekend cruisers along PCH, we tint clean, even shades that look right and last.",
    ],
    sections: [
      {
        h2: "From the Beach to Our Bay",
        body: [
          "It's a straightforward drive from Redondo Beach to 1454 N Wilmington Blvd. Most vehicles are tinted same-day so you're back to the coast quickly.",
        ],
      },
      {
        h2: "Tame Coastal Sun and Glare",
        body: [
          "Glare bouncing off the ocean and harbor is hard on your eyes and your interior. Our films cut that glare, block 99% of UV and keep the cabin comfortable.",
        ],
      },
      {
        h2: "Protect Premium Interiors",
        body: [
          "Beach-city vehicles often have nicer interiors worth protecting. Ceramic film guards leather and trim from sun damage while keeping a true, natural look.",
        ],
      },
    ],
    highlights: [
      { title: "Glare Control", desc: "Cut harsh glare off the water." },
      { title: "99% UV Block", desc: "Protect skin and premium interiors." },
      { title: "True-Color Ceramic", desc: "Natural look, maximum heat rejection." },
      { title: "Same-Day Service", desc: "Back to the beach fast." },
    ],
    serviceType: "Automotive Window Tinting",
    serviceName: "Window Tinting for Redondo Beach, CA",
    serviceDescription:
      "Professional automotive window tinting serving Redondo Beach, CA from our Wilmington shop — ceramic film that cuts coastal sun, glare and UV with a natural finish.",
    faqs: [
      {
        q: "Do you serve Redondo Beach?",
        a: "Yes — we're an easy drive away at 1454 N Wilmington Blvd, Wilmington, CA 90744.",
      },
      {
        q: "What tint is best for coastal glare?",
        a: "Ceramic film cuts heat and glare while staying clear for safe driving and a natural look.",
      },
      {
        q: "Will tint protect my leather interior?",
        a: "Yes — blocking 99% of UV helps prevent fading and cracking of leather and trim.",
      },
      {
        q: "How do I get a quote?",
        a: "Call or text (310) 872-3644 with your vehicle details for a free estimate.",
      },
    ],
    kind: "city",
  },
  {
    slug: "window-tinting-rancho-palos-verdes-ca",
    city: "Rancho Palos Verdes",
    chip: "Rancho Palos Verdes",
    eyebrow: "Serving Rancho Palos Verdes, CA",
    hero: IMAGES.hummer,
    title: "Window Tinting in Rancho Palos Verdes, CA | TPC Window Tinting Shop",
    description:
      "Premium window tinting for Rancho Palos Verdes, CA. Ceramic film for intense hilltop sun, glare and UV — luxury-grade finish. Call (310) 872-3644.",
    keywords: [
      "window tinting Rancho Palos Verdes CA",
      "car tint Rancho Palos Verdes",
      "ceramic tint Palos Verdes",
      "auto window tint RPV",
    ],
    h1: "Window Tinting for Rancho Palos Verdes, CA",
    intro: [
      "Up on the Palos Verdes peninsula, the sun is relentless and the ocean views come with serious glare. TPC Window Tinting Shop gives RPV drivers premium ceramic tint that cools the cabin and protects fine interiors — just down the hill from us in Wilmington.",
      "We tint luxury sedans, SUVs and EVs to a clean, true-color shade that complements the vehicle and beats the peninsula sun.",
    ],
    sections: [
      {
        h2: "Down the Hill From RPV",
        body: [
          "From the peninsula it's a short drive to our shop at 1454 N Wilmington Blvd. We schedule around you and finish most vehicles same-day.",
        ],
      },
      {
        h2: "Built for Intense Hilltop Sun",
        body: [
          "With wide-open sky and reflective ocean light, RPV vehicles take more sun than most. Ceramic film rejects infrared heat and blocks 99% of UV to keep the cabin cool and interiors pristine.",
        ],
      },
      {
        h2: "Luxury-Grade, True-Color Finish",
        body: [
          "Premium vehicles deserve premium film. Our ceramic tint stays optically clear and color-stable — no purple, no haze — for a finish worthy of the car.",
        ],
      },
    ],
    highlights: [
      { title: "Premium Ceramic", desc: "Luxury-grade heat rejection and clarity." },
      { title: "Intense-Sun Ready", desc: "Built for open peninsula exposure." },
      { title: "Interior Protection", desc: "Guard leather, wood and trim from UV." },
      { title: "True-Color Finish", desc: "No purple, no haze — ever." },
    ],
    serviceType: "Automotive Window Tinting",
    serviceName: "Window Tinting for Rancho Palos Verdes, CA",
    serviceDescription:
      "Premium automotive window tinting serving Rancho Palos Verdes, CA from our Wilmington shop — color-stable ceramic film for intense hilltop sun and luxury interiors.",
    faqs: [
      {
        q: "Do you serve Rancho Palos Verdes?",
        a: "Yes — we're a short drive down the hill at 1454 N Wilmington Blvd, Wilmington, CA 90744.",
      },
      {
        q: "What's the best tint for a luxury car?",
        a: "Ceramic film — it delivers the most heat rejection with a clear, color-stable, signal-friendly finish.",
      },
      {
        q: "Will ceramic interfere with my car's electronics?",
        a: "No. Ceramic film is non-metal, so it won't disrupt GPS, cell, or keyless-entry signals.",
      },
      {
        q: "How do I book?",
        a: "Call or text (310) 872-3644 to schedule your RPV vehicle.",
      },
    ],
    kind: "city",
  },
  {
    slug: "window-tinting-manhattan-beach-ca",
    city: "Manhattan Beach",
    chip: "Manhattan Beach",
    eyebrow: "Serving Manhattan Beach, CA",
    hero: IMAGES.lexus,
    title: "Window Tinting in Manhattan Beach, CA | TPC Window Tinting Shop",
    description:
      "Premium window tinting for Manhattan Beach, CA. Ceramic film for beach sun, glare and UV with a clean, true-color look. Call (310) 872-3644 for a quote.",
    keywords: [
      "window tinting Manhattan Beach CA",
      "car tint Manhattan Beach",
      "ceramic tint Manhattan Beach",
      "auto window tint Manhattan Beach",
    ],
    h1: "Window Tinting for Manhattan Beach, CA",
    intro: [
      "Manhattan Beach is all about style and sun — and both are reasons to tint. TPC Window Tinting Shop gives MB drivers premium ceramic film that keeps cabins cool, cuts glare off the sand and water, and looks clean on any vehicle.",
      "We tint luxury cars, EVs and family SUVs to a true-color shade that fits the beach-city aesthetic and protects the interior.",
    ],
    sections: [
      {
        h2: "An Easy Trip From Manhattan Beach",
        body: [
          "From MB it's a simple drive to our shop at 1454 N Wilmington Blvd. We work around your schedule and finish most vehicles same-day.",
        ],
      },
      {
        h2: "Cool, Clear, and Stylish",
        body: [
          "Beach sun heats a parked car fast. Ceramic film rejects infrared heat and blocks 99% of UV while staying crystal-clear for night driving and a natural look.",
        ],
      },
      {
        h2: "Protect High-End Interiors",
        body: [
          "Premium leather and trim fade under constant sun. Our film shields your interior and keeps the cabin comfortable, all with a finish that complements the vehicle.",
        ],
      },
    ],
    highlights: [
      { title: "Style-First Finish", desc: "Clean, true-color look for any vehicle." },
      { title: "Beach-Sun Cooling", desc: "Reject infrared heat off sand and water." },
      { title: "99% UV Block", desc: "Protect skin and premium interiors." },
      { title: "Crystal-Clear", desc: "Safe night driving, natural appearance." },
    ],
    serviceType: "Automotive Window Tinting",
    serviceName: "Window Tinting for Manhattan Beach, CA",
    serviceDescription:
      "Premium automotive window tinting serving Manhattan Beach, CA from our Wilmington shop — true-color ceramic film that cuts beach sun and glare and protects interiors.",
    faqs: [
      {
        q: "Do you serve Manhattan Beach?",
        a: "Yes — we're an easy drive away at 1454 N Wilmington Blvd, Wilmington, CA 90744.",
      },
      {
        q: "What tint looks best on a luxury car?",
        a: "Ceramic film offers a clean, true-color look with maximum heat rejection and no purple fade.",
      },
      {
        q: "Does tint help with beach glare?",
        a: "Yes — it cuts glare off sand and water while protecting your eyes and interior.",
      },
      {
        q: "How do I get a quote?",
        a: "Call or text (310) 872-3644 with your vehicle details.",
      },
    ],
    kind: "city",
  },
  {
    slug: "window-tinting-hermosa-beach-ca",
    city: "Hermosa Beach",
    chip: "Hermosa Beach",
    eyebrow: "Serving Hermosa Beach, CA",
    hero: IMAGES.interior,
    title: "Window Tinting in Hermosa Beach, CA | TPC Window Tinting Shop",
    description:
      "Auto window tinting for Hermosa Beach, CA. Ceramic & heat-rejection film to beat beach sun, glare and UV. Clean finish — call (310) 872-3644 for a quote.",
    keywords: [
      "window tinting Hermosa Beach CA",
      "car tint Hermosa Beach",
      "ceramic tint Hermosa Beach",
      "auto window tint Hermosa Beach",
    ],
    h1: "Window Tinting for Hermosa Beach, CA",
    intro: [
      "Sun, surf and sand define Hermosa Beach — and they're hard on your car. TPC Window Tinting Shop keeps HB drivers cool with ceramic and heat-rejection film, and we're a quick drive from the pier.",
      "From beach cruisers to daily drivers, we lay clean, even tint that blocks UV, cuts glare and gives your vehicle a finished look.",
    ],
    sections: [
      {
        h2: "Close to the Pier",
        body: [
          "It's a short drive from Hermosa Beach to our shop at 1454 N Wilmington Blvd. Drop off and most vehicles are tinted the same day.",
        ],
      },
      {
        h2: "Beat the Beach Heat",
        body: [
          "Park near the strand for a few hours and your cabin bakes. Ceramic film rejects infrared heat and blocks 99% of UV so you slide into a cooler car.",
        ],
      },
      {
        h2: "Clean Tint That Lasts",
        body: [
          "Salt air and sun are tough on cheap film. We use quality tint and seal every edge for a finish that won't bubble or peel by the beach.",
        ],
      },
    ],
    highlights: [
      { title: "Near the Pier", desc: "Quick trip from Hermosa Beach." },
      { title: "Beach-Heat Cooling", desc: "Reject infrared heat all summer." },
      { title: "99% UV Block", desc: "Protect skin and interior." },
      { title: "Coastal-Tough", desc: "Sealed edges that won't peel." },
    ],
    serviceType: "Automotive Window Tinting",
    serviceName: "Window Tinting for Hermosa Beach, CA",
    serviceDescription:
      "Professional automotive window tinting serving Hermosa Beach, CA from our Wilmington shop — ceramic film that beats beach sun, glare and UV with a sealed, lasting finish.",
    faqs: [
      {
        q: "Do you serve Hermosa Beach?",
        a: "Yes — we're a short drive away at 1454 N Wilmington Blvd, Wilmington, CA 90744.",
      },
      {
        q: "Will tint survive the salt air?",
        a: "Yes — we use quality film and seal the edges to resist peeling and bubbling near the coast.",
      },
      {
        q: "What's the best tint for heat?",
        a: "Ceramic film gives the strongest heat rejection while staying clear and natural.",
      },
      {
        q: "How do I book?",
        a: "Call or text (310) 872-3644 with your vehicle details, often same-day.",
      },
    ],
    kind: "city",
  },

  // ── VEHICLE-SPECIFIC PAGES ───────────────────────────────────────────────
  {
    slug: "chevrolet-tahoe-window-tint",
    city: "Wilmington",
    chip: "Chevy Tahoe",
    eyebrow: "Vehicle Window Tinting",
    hero: IMAGES.hummer,
    title: "Chevrolet Tahoe Window Tint | TPC Window Tinting Shop, Wilmington CA",
    description:
      "Chevrolet Tahoe window tinting in Wilmington, CA. Ceramic film to cool a big SUV cabin, match factory privacy glass and block UV. Call (310) 872-3644.",
    keywords: [
      "Chevrolet Tahoe window tint",
      "Tahoe window tinting",
      "Chevy Tahoe ceramic tint",
      "SUV window tint Wilmington",
    ],
    h1: "Chevrolet Tahoe Window Tint",
    intro: [
      "The Chevrolet Tahoe is a lot of glass to keep cool. With three rows and big side windows, the cabin soaks up heat fast — which is exactly why Tahoe owners bring theirs to TPC Window Tinting Shop in Wilmington for ceramic tint.",
      "We tint the front doors, add a windshield strip and treat any uncovered glass to match your Tahoe's factory-tinted rear, for a uniform look and a much cooler third row.",
    ],
    sections: [
      {
        h2: "Cool That Big Tahoe Cabin",
        body: [
          "A full-size SUV like the Tahoe heats up everywhere, especially the second and third rows. Ceramic film rejects infrared heat so the whole cabin stays comfortable and your A/C doesn't have to fight the sun.",
        ],
      },
      {
        h2: "Match the Factory Privacy Glass",
        body: [
          "Most Tahoes come with darker 'privacy glass' behind the front doors. We match your front windows and add a windshield strip so the entire SUV looks consistent and finished, while staying legal up front.",
        ],
      },
      {
        h2: "Protect a Family Interior",
        body: [
          "Tahoes haul families and gear. Blocking 99% of UV protects kids in the back seats and keeps leather and trim from fading and cracking over years of California sun.",
        ],
      },
    ],
    highlights: [
      { title: "Whole-Cabin Cooling", desc: "Comfort all the way to the third row." },
      { title: "Factory-Match Look", desc: "Front glass matched to rear privacy tint." },
      { title: "99% UV Block", desc: "Protect passengers and interior." },
      { title: "Ceramic Performance", desc: "Maximum heat rejection, signal-friendly." },
    ],
    serviceType: "Automotive Window Tinting",
    serviceName: "Chevrolet Tahoe Window Tinting",
    serviceDescription:
      "Professional Chevrolet Tahoe window tinting in Wilmington, CA — ceramic heat-rejection film matched to factory privacy glass for a cooler, uniform full-size SUV.",
    faqs: [
      {
        q: "How much does it cost to tint a Chevrolet Tahoe?",
        a: "It depends on how many windows you need and the film you choose, since the rear is often already privacy-glassed. Call or text (310) 872-3644 for an exact Tahoe quote.",
      },
      {
        q: "Can you match my Tahoe's factory rear tint?",
        a: "Yes — we match your front windows to the factory privacy glass for a consistent look while keeping the fronts legal.",
      },
      {
        q: "Will tint help the third row stay cool?",
        a: "Definitely. Ceramic film rejects infrared heat across all the glass, making the back rows much more comfortable.",
      },
      {
        q: "Where do you tint Tahoes?",
        a: "At our Wilmington shop, 1454 N Wilmington Blvd — serving Long Beach, San Pedro, Torrance, Carson and the South Bay.",
      },
    ],
    kind: "vehicle",
  },
  {
    slug: "ford-bronco-window-tint",
    city: "Wilmington",
    chip: "Ford Bronco",
    eyebrow: "Vehicle Window Tinting",
    hero: IMAGES.bronco,
    title: "Ford Bronco Window Tint | TPC Window Tinting Shop, Wilmington CA",
    description:
      "Ford Bronco window tinting in Wilmington, CA. Ceramic film for hardtop & soft-top Broncos — beat trail sun, block UV, keep it cool. Call (310) 872-3644.",
    keywords: [
      "Ford Bronco window tint",
      "Bronco window tinting",
      "Ford Bronco ceramic tint",
      "Bronco hardtop tint",
    ],
    h1: "Ford Bronco Window Tint",
    intro: [
      "The Ford Bronco's upright glass and removable roof make it a sun magnet. TPC Window Tinting Shop tints Broncos — hardtop and soft-top — so the cabin stays cooler on the street and on the trail.",
      "We work with the Bronco's modular design, tinting the door glass and any fixed windows to a clean, even shade that holds up to off-road life.",
    ],
    sections: [
      {
        h2: "Built for Bronco Adventures",
        body: [
          "Whether you're crawling the trail or commuting the 110, the Bronco's big windows pull in heat and UV. Ceramic film keeps the cabin cooler and protects you on long, sunny days outdoors.",
        ],
      },
      {
        h2: "Hardtop, Soft-Top, We Tint It",
        body: [
          "The Bronco's removable roof and modular panels mean the door and quarter glass do the heavy lifting. We tint those to a uniform shade so your Bronco looks dialed-in no matter the top configuration.",
        ],
      },
      {
        h2: "Tough Film for a Tough Truck",
        body: [
          "Off-road dust, sun and vibration are hard on cheap tint. We use quality ceramic film and seal the edges so it stays put through the rough stuff.",
        ],
      },
    ],
    highlights: [
      { title: "Trail-Ready Cooling", desc: "Beat the sun on and off the road." },
      { title: "Top-Agnostic", desc: "Tint that works with any roof setup." },
      { title: "99% UV Block", desc: "Protect skin on long outdoor days." },
      { title: "Durable Install", desc: "Sealed edges built for off-road life." },
    ],
    serviceType: "Automotive Window Tinting",
    serviceName: "Ford Bronco Window Tinting",
    serviceDescription:
      "Professional Ford Bronco window tinting in Wilmington, CA — ceramic film for hardtop and soft-top Broncos that cuts heat and UV and stands up to off-road use.",
    faqs: [
      {
        q: "Can you tint a Ford Bronco with a soft top?",
        a: "Yes — we tint the door and fixed glass on both hardtop and soft-top Broncos for a cooler, uniform look.",
      },
      {
        q: "How much does Bronco window tint cost?",
        a: "It depends on your top configuration and how many windows you're tinting. Call or text (310) 872-3644 for a Bronco-specific quote.",
      },
      {
        q: "Will the tint hold up off-road?",
        a: "Yes — we use quality ceramic film and seal every edge so it resists peeling through dust, sun and trail vibration.",
      },
      {
        q: "Where are you located?",
        a: "1454 N Wilmington Blvd, Wilmington, CA — serving the South Bay, Long Beach and San Pedro.",
      },
    ],
    kind: "vehicle",
  },
  {
    slug: "tesla-model-y-window-tint",
    city: "Wilmington",
    chip: "Tesla Model Y",
    eyebrow: "EV Window Tinting",
    hero: IMAGES.lexus,
    title: "Tesla Model Y Window Tint | TPC Window Tinting Shop, Wilmington CA",
    description:
      "Tesla Model Y window tinting in Wilmington, CA. Non-metal ceramic film for the glass roof & rear — protect range, block UV, no signal loss. Call (310) 872-3644.",
    keywords: [
      "Tesla Model Y window tint",
      "Model Y ceramic tint",
      "Tesla Model Y glass roof tint",
      "Tesla window tinting Wilmington",
    ],
    h1: "Tesla Model Y Window Tint",
    intro: [
      "The Tesla Model Y's huge panoramic glass roof and expansive windows look amazing — and let in a flood of heat. TPC Window Tinting Shop tints the Model Y with non-metal ceramic film that cools the cabin without touching your signals or sensors.",
      "Because every bit of A/C draws from the battery, heat-rejecting tint can help your Model Y stay cooler and ease the load on range during SoCal summers.",
    ],
    sections: [
      {
        h2: "Tame the Panoramic Glass Roof",
        body: [
          "The Model Y's all-glass roof is a major heat source. We offer film options to cut the heat and UV coming through the roof and windows, so the cabin stays comfortable without losing the open, airy feel.",
        ],
      },
      {
        h2: "Ceramic = No Signal Interference",
        body: [
          "Teslas rely on cameras, sensors and constant connectivity. Our ceramic film is completely non-metal, so it won't interfere with Autopilot sensors, GPS, cell signal or phone-as-key.",
        ],
      },
      {
        h2: "Protect Range and Interior",
        body: [
          "Less heat soak means less A/C draw, which helps preserve range. Blocking 99% of UV also protects the Model Y's interior and screen from sun damage over time.",
        ],
      },
    ],
    highlights: [
      { title: "Glass-Roof Heat Cut", desc: "Tame the panoramic roof's heat soak." },
      { title: "Signal-Safe Ceramic", desc: "No interference with sensors or key." },
      { title: "Range-Friendly", desc: "Less A/C draw in summer heat." },
      { title: "99% UV Block", desc: "Protect the interior and display." },
    ],
    serviceType: "Automotive Window Tinting",
    serviceName: "Tesla Model Y Window Tinting",
    serviceDescription:
      "Professional Tesla Model Y window tinting in Wilmington, CA — non-metal ceramic film that cuts heat from the panoramic glass roof without affecting sensors or signals.",
    faqs: [
      {
        q: "Will window tint interfere with my Model Y's sensors or signal?",
        a: "No. We use non-metal ceramic film that won't disrupt Autopilot sensors, GPS, cell signal or phone-as-key.",
      },
      {
        q: "Can you tint the Model Y's glass roof?",
        a: "Yes — we offer film options for the panoramic roof to cut heat and UV while keeping the open feel. Ask us about roof tint when you call.",
      },
      {
        q: "Does tint help my Tesla's range?",
        a: "Indirectly — reducing cabin heat means less A/C use, which can ease the battery load during hot weather.",
      },
      {
        q: "How much is Model Y tint?",
        a: "It depends on the windows and film, including whether you add roof tint. Call or text (310) 872-3644 for a quote.",
      },
    ],
    kind: "vehicle",
  },
  {
    slug: "tesla-model-3-window-tint",
    city: "Wilmington",
    chip: "Tesla Model 3",
    eyebrow: "EV Window Tinting",
    hero: IMAGES.camaro,
    title: "Tesla Model 3 Window Tint | TPC Window Tinting Shop, Wilmington CA",
    description:
      "Tesla Model 3 window tinting in Wilmington, CA. Non-metal ceramic film for the glass roof & rear — protect range, block UV, keep signals clear. Call (310) 872-3644.",
    keywords: [
      "Tesla Model 3 window tint",
      "Model 3 ceramic tint",
      "Tesla Model 3 glass roof tint",
      "Tesla window tinting near me",
    ],
    h1: "Tesla Model 3 Window Tint",
    intro: [
      "The Tesla Model 3's sleek glass roof and big rear window pull in serious heat. TPC Window Tinting Shop tints the Model 3 with non-metal ceramic film that keeps the cabin cool while leaving every sensor and signal untouched.",
      "With tint cutting cabin heat, your A/C works less — which helps protect range on hot SoCal days while giving the car a clean, finished look.",
    ],
    sections: [
      {
        h2: "Cool the Cabin, Protect the Range",
        body: [
          "The Model 3's glass roof and steep rear glass create a greenhouse effect. Ceramic film rejects infrared heat so the interior stays comfortable and the climate system pulls less from the battery.",
        ],
      },
      {
        h2: "Non-Metal Film, Zero Interference",
        body: [
          "The Model 3 is packed with sensors and is unlocked by your phone. Our ceramic film contains no metal, so GPS, cellular, Bluetooth and phone-as-key all keep working perfectly.",
        ],
      },
      {
        h2: "Clean Look, UV Protection",
        body: [
          "We tint to a clean, even shade that suits the Model 3's minimalist design, and block 99% of UV to protect the seats and center screen from fading.",
        ],
      },
    ],
    highlights: [
      { title: "Greenhouse Heat Cut", desc: "Tame the glass roof and rear window." },
      { title: "Range-Friendly", desc: "Less A/C draw on hot days." },
      { title: "Signal-Safe Ceramic", desc: "No interference with sensors or key." },
      { title: "Clean Minimal Look", desc: "An even shade that fits the Model 3." },
    ],
    serviceType: "Automotive Window Tinting",
    serviceName: "Tesla Model 3 Window Tinting",
    serviceDescription:
      "Professional Tesla Model 3 window tinting in Wilmington, CA — non-metal ceramic film that cuts cabin and glass-roof heat without affecting sensors or connectivity.",
    faqs: [
      {
        q: "Does tint affect the Model 3's phone-as-key or sensors?",
        a: "No. Our ceramic film is non-metal, so it won't interfere with phone-as-key, GPS, cell signal or any sensors.",
      },
      {
        q: "Can you tint the Model 3 glass roof?",
        a: "Yes — we offer roof film options to cut heat and UV. Mention the roof when you call for a quote.",
      },
      {
        q: "Will tint improve my Tesla's efficiency?",
        a: "It can help — a cooler cabin means less A/C use, which eases battery draw in hot weather.",
      },
      {
        q: "How much does Model 3 tint cost?",
        a: "It varies by film and windows. Call or text (310) 872-3644 for a fast quote.",
      },
    ],
    kind: "vehicle",
  },
  {
    slug: "toyota-camry-window-tint",
    city: "Wilmington",
    chip: "Toyota Camry",
    eyebrow: "Vehicle Window Tinting",
    hero: IMAGES.camry,
    title: "Toyota Camry Window Tint | TPC Window Tinting Shop, Wilmington CA",
    description:
      "Toyota Camry window tinting in Wilmington, CA. Ceramic & standard film to cut commuter heat, block UV and add privacy. Free quote: call (310) 872-3644.",
    keywords: [
      "Toyota Camry window tint",
      "Camry window tinting",
      "Toyota Camry ceramic tint",
      "sedan window tint Wilmington",
    ],
    h1: "Toyota Camry Window Tint",
    intro: [
      "The Toyota Camry is one of the most common cars on SoCal roads — and one we tint constantly at TPC Window Tinting Shop. As a daily-driven sedan, the Camry spends hours in the sun, so heat-rejecting tint makes a real difference.",
      "We tint Camrys to a clean, even shade that cuts heat and glare, adds privacy, and protects the interior — all while keeping your front windows legal.",
    ],
    sections: [
      {
        h2: "Comfort for Your Daily Commute",
        body: [
          "Long commutes in a Camry mean hours of direct sun through the windshield and side glass. Ceramic and heat-rejection films keep the cabin cooler and reduce glare for an easier, safer drive.",
        ],
      },
      {
        h2: "Privacy and a Cleaner Look",
        body: [
          "A properly tinted Camry looks sharper and keeps belongings out of sight. We match a legal front shade to the rear so the whole car looks uniform and finished.",
        ],
      },
      {
        h2: "Protect Your Investment",
        body: [
          "Tint blocks 99% of UV, helping prevent the Camry's seats and dash from fading and cracking — which protects resale value over the years.",
        ],
      },
    ],
    highlights: [
      { title: "Commuter Comfort", desc: "Cooler cabin on long daily drives." },
      { title: "Privacy & Style", desc: "A cleaner look and hidden valuables." },
      { title: "99% UV Block", desc: "Protect the interior and resale value." },
      { title: "Legal Fronts", desc: "Even shade that stays compliant." },
    ],
    serviceType: "Automotive Window Tinting",
    serviceName: "Toyota Camry Window Tinting",
    serviceDescription:
      "Professional Toyota Camry window tinting in Wilmington, CA — ceramic and heat-rejection film that cuts commuter heat and glare, adds privacy and protects the interior.",
    faqs: [
      {
        q: "How much does it cost to tint a Toyota Camry?",
        a: "A Camry is a straightforward sedan to tint; pricing depends on the film you choose. Call or text (310) 872-3644 for an exact quote.",
      },
      {
        q: "How long does it take to tint a Camry?",
        a: "Most Camrys are done the same day, typically in about 2–3 hours.",
      },
      {
        q: "What's the darkest legal tint for the front windows?",
        a: "California sets a limit on front side windows — we'll explain it and help you choose a compliant shade.",
      },
      {
        q: "Do you offer ceramic tint for the Camry?",
        a: "Yes — ceramic gives the best heat rejection and a fade-proof, true-color finish.",
      },
    ],
    kind: "vehicle",
  },
  {
    slug: "toyota-tacoma-window-tint",
    city: "Wilmington",
    chip: "Toyota Tacoma",
    eyebrow: "Vehicle Window Tinting",
    hero: IMAGES.build1,
    title: "Toyota Tacoma Window Tint | TPC Window Tinting Shop, Wilmington CA",
    description:
      "Toyota Tacoma window tinting in Wilmington, CA. Ceramic film to cool the cab, match factory privacy glass and block UV. Free quote: call (310) 872-3644.",
    keywords: [
      "Toyota Tacoma window tint",
      "Tacoma window tinting",
      "Toyota Tacoma ceramic tint",
      "truck window tint Wilmington",
    ],
    h1: "Toyota Tacoma Window Tint",
    intro: [
      "The Toyota Tacoma is built for sun and adventure, and tint makes it more comfortable for both. TPC Window Tinting Shop tints Tacomas — Access Cab and Double Cab — to cool the cabin and protect the interior.",
      "We match the front windows to the Tacoma's factory-darkened rear glass and add a windshield strip for a clean, uniform truck look.",
    ],
    sections: [
      {
        h2: "Keep the Cab Cool",
        body: [
          "Whether it's a work truck or a weekend rig, a Tacoma cab heats up fast in the sun. Ceramic film rejects infrared heat so the cabin stays comfortable on job sites and trailheads alike.",
        ],
      },
      {
        h2: "Match the Factory Rear Tint",
        body: [
          "Many Tacomas come with privacy glass on the rear. We match your front doors to that shade and keep them legal, so the whole truck looks consistent front to back.",
        ],
      },
      {
        h2: "Tough Tint for a Work Truck",
        body: [
          "Dust, sun and daily abuse are hard on cheap film. We use quality tint and seal the edges so it holds up to everything the Tacoma does.",
        ],
      },
    ],
    highlights: [
      { title: "Cooler Cab", desc: "Comfort on job sites and trails." },
      { title: "Factory-Match", desc: "Fronts matched to rear privacy glass." },
      { title: "99% UV Block", desc: "Protect the dash and seats." },
      { title: "Built Tough", desc: "Sealed film for work-truck life." },
    ],
    serviceType: "Automotive Window Tinting",
    serviceName: "Toyota Tacoma Window Tinting",
    serviceDescription:
      "Professional Toyota Tacoma window tinting in Wilmington, CA — ceramic film matched to factory privacy glass that cools the cab and stands up to work-truck use.",
    faqs: [
      {
        q: "Can you match my Tacoma's factory rear tint?",
        a: "Yes — we match the front windows to the factory privacy glass while keeping the fronts legal for a uniform look.",
      },
      {
        q: "How much does Tacoma window tint cost?",
        a: "Since the rear is often already tinted, cost depends on the front glass and film. Call or text (310) 872-3644 for a quote.",
      },
      {
        q: "Will tint hold up to work-truck use?",
        a: "Yes — we use quality film and seal the edges so it resists peeling through dust, sun and daily abuse.",
      },
      {
        q: "Where do you tint Tacomas?",
        a: "At 1454 N Wilmington Blvd, Wilmington — serving Carson, Long Beach, San Pedro and the South Bay.",
      },
    ],
    kind: "vehicle",
  },
  {
    slug: "ford-f150-window-tint",
    city: "Wilmington",
    chip: "Ford F-150",
    eyebrow: "Vehicle Window Tinting",
    hero: IMAGES.build2,
    title: "Ford F-150 Window Tint | TPC Window Tinting Shop, Wilmington CA",
    description:
      "Ford F-150 window tinting in Wilmington, CA. Ceramic film to cool a big cab, match factory privacy glass and block UV. Free quote: call (310) 872-3644.",
    keywords: [
      "Ford F-150 window tint",
      "F150 window tinting",
      "Ford F-150 ceramic tint",
      "truck window tint Wilmington",
    ],
    h1: "Ford F-150 Window Tint",
    intro: [
      "America's best-selling truck spends a lot of time in the sun, and the F-150's big cab and tall windshield pull in plenty of heat. TPC Window Tinting Shop tints F-150s — from work trucks to lifted builds — to cool the cab and sharpen the look.",
      "We match the front doors to the factory rear privacy glass and add a windshield strip so your F-150 looks consistent and stays legal up front.",
    ],
    sections: [
      {
        h2: "Cool a Big Cab",
        body: [
          "SuperCrew and SuperCab F-150s have a lot of glass and interior to heat up. Ceramic film rejects infrared heat to keep the whole cab — including the back seats — comfortable in California sun.",
        ],
      },
      {
        h2: "Match the Factory Privacy Glass",
        body: [
          "Most F-150s have darker rear glass from the factory. We match the front windows to that shade for a uniform look, keeping the fronts within California's legal limit.",
        ],
      },
      {
        h2: "Work-Tough Film",
        body: [
          "A work truck takes abuse, and so does its tint. We use durable ceramic film and seal every edge so it won't bubble or peel on the job.",
        ],
      },
    ],
    highlights: [
      { title: "Big-Cab Cooling", desc: "Comfort up front and in the back seats." },
      { title: "Factory-Match Look", desc: "Fronts matched to rear privacy tint." },
      { title: "99% UV Block", desc: "Protect the interior from fading." },
      { title: "Durable Install", desc: "Sealed film built for work." },
    ],
    serviceType: "Automotive Window Tinting",
    serviceName: "Ford F-150 Window Tinting",
    serviceDescription:
      "Professional Ford F-150 window tinting in Wilmington, CA — ceramic film matched to factory privacy glass that cools the cab and holds up to work-truck use.",
    faqs: [
      {
        q: "How much does it cost to tint an F-150?",
        a: "Since the rear is usually privacy glass, cost depends on the front windows and film. Call or text (310) 872-3644 for an F-150 quote.",
      },
      {
        q: "Can you match my F-150's rear tint?",
        a: "Yes — we match the front doors to the factory privacy glass and keep them legal for a consistent look.",
      },
      {
        q: "Will tint keep the back seats cooler?",
        a: "Yes — ceramic film rejects heat across all the glass, making the rear of the cab much more comfortable.",
      },
      {
        q: "Where are you located?",
        a: "1454 N Wilmington Blvd, Wilmington — serving Long Beach, San Pedro, Carson and the South Bay.",
      },
    ],
    kind: "vehicle",
  },
  {
    slug: "chevrolet-silverado-window-tint",
    city: "Wilmington",
    chip: "Chevy Silverado",
    eyebrow: "Vehicle Window Tinting",
    hero: IMAGES.build3,
    title: "Chevrolet Silverado Window Tint | TPC Window Tinting Shop, Wilmington CA",
    description:
      "Chevrolet Silverado window tinting in Wilmington, CA. Ceramic film to cool the cab, match factory privacy glass and cut glare. Call (310) 872-3644.",
    keywords: [
      "Chevrolet Silverado window tint",
      "Silverado window tinting",
      "Chevy Silverado ceramic tint",
      "truck window tint Wilmington",
    ],
    h1: "Chevrolet Silverado Window Tint",
    intro: [
      "The Chevy Silverado's broad windshield and roomy cab let in a lot of sun. TPC Window Tinting Shop tints Silverados — work trucks and weekend haulers — to cut the heat and glare and keep the cab comfortable.",
      "We match your front windows to the Silverado's factory rear privacy glass and add a windshield strip for a clean, uniform finish.",
    ],
    sections: [
      {
        h2: "Cut Cab Heat and Glare",
        body: [
          "Long hours behind a wide Silverado windshield mean sun and glare all day. Ceramic film rejects infrared heat and a windshield strip knocks down overhead glare for an easier drive.",
        ],
      },
      {
        h2: "Uniform, Factory-Matched Look",
        body: [
          "Silverados typically come with tinted rear glass. We match the front doors to that shade, staying within California's legal limit, so the truck looks consistent front to back.",
        ],
      },
      {
        h2: "Film That Works as Hard as You Do",
        body: [
          "From job sites to towing, a Silverado earns its keep. We use durable ceramic film and seal the edges so the tint lasts as long as the truck.",
        ],
      },
    ],
    highlights: [
      { title: "Glare Control", desc: "Tame the wide windshield's glare." },
      { title: "Cooler Cab", desc: "Reject infrared heat on long days." },
      { title: "Factory-Match", desc: "Fronts matched to rear privacy glass." },
      { title: "Durable", desc: "Sealed film for hard-working trucks." },
    ],
    serviceType: "Automotive Window Tinting",
    serviceName: "Chevrolet Silverado Window Tinting",
    serviceDescription:
      "Professional Chevrolet Silverado window tinting in Wilmington, CA — ceramic film matched to factory privacy glass that cuts cab heat and glare and lasts.",
    faqs: [
      {
        q: "Can you match my Silverado's factory tint?",
        a: "Yes — we match the front windows to the rear privacy glass and keep them legal for a uniform look.",
      },
      {
        q: "How much is Silverado window tint?",
        a: "It depends on the front glass and film since the rear is often tinted. Call or text (310) 872-3644 for a quote.",
      },
      {
        q: "Does a windshield strip help with glare?",
        a: "Yes — a tinted strip across the top of the windshield cuts overhead sun glare without blocking your view.",
      },
      {
        q: "Where do you tint Silverados?",
        a: "At 1454 N Wilmington Blvd, Wilmington — serving the South Bay, Long Beach and San Pedro.",
      },
    ],
    kind: "vehicle",
  },
  {
    slug: "gmc-sierra-window-tint",
    city: "Wilmington",
    chip: "GMC Sierra",
    eyebrow: "Vehicle Window Tinting",
    hero: IMAGES.build4,
    title: "GMC Sierra Window Tint | TPC Window Tinting Shop, Wilmington CA",
    description:
      "GMC Sierra window tinting in Wilmington, CA. Ceramic film to cool the cab, match factory privacy glass and protect premium interiors. Call (310) 872-3644.",
    keywords: [
      "GMC Sierra window tint",
      "Sierra window tinting",
      "GMC Sierra ceramic tint",
      "GMC Denali tint Wilmington",
    ],
    h1: "GMC Sierra Window Tint",
    intro: [
      "The GMC Sierra — especially in Denali trim — pairs a big, glassy cab with a premium interior worth protecting. TPC Window Tinting Shop tints Sierras to cool the cabin, cut glare and keep that nice interior looking new.",
      "We match the front windows to the Sierra's factory rear privacy glass and add a windshield strip for a clean, finished look that stays legal up front.",
    ],
    sections: [
      {
        h2: "Comfort for a Premium Cab",
        body: [
          "A loaded Sierra cab gets hot like any full-size truck. Ceramic film rejects infrared heat so the cabin — and that leather interior — stays comfortable in the California sun.",
        ],
      },
      {
        h2: "Protect a Denali-Grade Interior",
        body: [
          "Premium leather, wood and trim fade under constant UV. Blocking 99% of UV protects the Sierra's nicer interior and keeps it looking sharp for years.",
        ],
      },
      {
        h2: "Factory-Matched, Legal Fronts",
        body: [
          "Sierras usually have tinted rear glass. We match the front doors to that shade within California's legal limit so the whole truck looks uniform.",
        ],
      },
    ],
    highlights: [
      { title: "Premium Comfort", desc: "Cool cab for a loaded Sierra." },
      { title: "Interior Protection", desc: "Guard leather and trim from UV." },
      { title: "Factory-Match", desc: "Fronts matched to rear privacy glass." },
      { title: "Ceramic Performance", desc: "Top heat rejection, signal-safe." },
    ],
    serviceType: "Automotive Window Tinting",
    serviceName: "GMC Sierra Window Tinting",
    serviceDescription:
      "Professional GMC Sierra window tinting in Wilmington, CA — ceramic film matched to factory privacy glass that cools the cab and protects premium interiors.",
    faqs: [
      {
        q: "Will tint protect my Sierra Denali's leather?",
        a: "Yes — blocking 99% of UV helps prevent the premium leather and trim from fading and cracking.",
      },
      {
        q: "Can you match the factory rear tint on my Sierra?",
        a: "Yes — we match the front windows to the rear privacy glass and keep them legal for a uniform look.",
      },
      {
        q: "How much does Sierra tint cost?",
        a: "It depends on the front glass and film. Call or text (310) 872-3644 for a quote.",
      },
      {
        q: "Where are you located?",
        a: "1454 N Wilmington Blvd, Wilmington — serving Long Beach, San Pedro, Carson and the South Bay.",
      },
    ],
    kind: "vehicle",
  },
  {
    slug: "jeep-wrangler-window-tint",
    city: "Wilmington",
    chip: "Jeep Wrangler",
    eyebrow: "Vehicle Window Tinting",
    hero: IMAGES.bronco,
    title: "Jeep Wrangler Window Tint | TPC Window Tinting Shop, Wilmington CA",
    description:
      "Jeep Wrangler window tinting in Wilmington, CA. Ceramic film for hardtop & soft-top Wranglers — match factory rear tint, beat trail sun. Call (310) 872-3644.",
    keywords: [
      "Jeep Wrangler window tint",
      "Wrangler window tinting",
      "Jeep Wrangler ceramic tint",
      "Wrangler hardtop tint",
    ],
    h1: "Jeep Wrangler Window Tint",
    intro: [
      "The Jeep Wrangler is made to drop its top and doors — which leaves the door and windshield glass doing the work when it's buttoned up. TPC Window Tinting Shop tints Wranglers, hardtop and soft-top, to cut heat and glare on and off the trail.",
      "Many Wranglers come with darkened rear glass from the factory; we match the front windows for a uniform look while keeping them legal.",
    ],
    sections: [
      {
        h2: "Tint That Works With Your Top",
        body: [
          "Whether you run the hardtop, soft top or go topless, the Wrangler's front door glass and windshield are where tint matters most. We tint those to a clean, even shade that suits the Jeep.",
        ],
      },
      {
        h2: "Beat the Trail Sun",
        body: [
          "Open-air driving means more sun exposure. Ceramic film on the door glass cuts heat and blocks 99% of UV so you're more comfortable on long, sunny days outdoors.",
        ],
      },
      {
        h2: "Match the Factory Rear Glass",
        body: [
          "Wranglers with the factory rear privacy tint look best when the fronts are matched. We dial in a legal front shade that ties the whole Jeep together.",
        ],
      },
    ],
    highlights: [
      { title: "Top-Agnostic", desc: "Works with hardtop, soft top or topless." },
      { title: "Trail-Sun Cooling", desc: "Cut heat and UV on open-air days." },
      { title: "Factory-Match", desc: "Fronts matched to rear privacy glass." },
      { title: "Durable Film", desc: "Sealed edges for off-road life." },
    ],
    serviceType: "Automotive Window Tinting",
    serviceName: "Jeep Wrangler Window Tinting",
    serviceDescription:
      "Professional Jeep Wrangler window tinting in Wilmington, CA — ceramic film for hardtop and soft-top Wranglers, matched to factory rear glass and built for the trail.",
    faqs: [
      {
        q: "Can you tint a Jeep Wrangler's front windows to match the rear?",
        a: "Yes — we match the front door glass to the factory rear privacy tint while keeping the fronts legal.",
      },
      {
        q: "Do you tint soft-top Wranglers?",
        a: "Yes — we tint the door and windshield glass on hardtop and soft-top Wranglers alike.",
      },
      {
        q: "How much does Wrangler tint cost?",
        a: "Since the rear is often already tinted, cost depends on the front glass and film. Call or text (310) 872-3644 for a quote.",
      },
      {
        q: "Where do you tint Wranglers?",
        a: "At 1454 N Wilmington Blvd, Wilmington — serving the South Bay, Long Beach and San Pedro.",
      },
    ],
    kind: "vehicle",
  },
];

export const LANDING_SLUGS = LANDINGS.map((l) => l.slug);

/** Location-targeted pages (Wilmington, Long Beach, San Pedro). */
export const CITY_LANDINGS = LANDINGS.filter((l) => l.kind === "city");

/** Service-type pages (Ceramic, Residential, Commercial). */
export const SERVICE_LANDINGS = LANDINGS.filter((l) => l.kind === "service");

/** Vehicle-specific pages (Tahoe, Bronco, Model Y, …). */
export const VEHICLE_LANDINGS = LANDINGS.filter((l) => l.kind === "vehicle");

export function getLanding(slug: string): Landing | undefined {
  return LANDINGS.find((l) => l.slug === slug);
}
