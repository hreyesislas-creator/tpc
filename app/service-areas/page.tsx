import type { Metadata } from "next";
import HubPage from "@/components/HubPage";
import { IMAGES } from "@/lib/images";
import { SITE } from "@/lib/site";
import { CITY_LANDINGS, VEHICLE_LANDINGS } from "@/lib/landings";
import {
  pageMetadata,
  serviceSchema,
  faqSchema,
  breadcrumbSchema,
  itemListSchema,
} from "@/lib/seo";

const PATH = "/service-areas";

const TITLE =
  "Service Areas | Window Tinting Across the South Bay — TPC Window Tinting Shop";
const DESCRIPTION =
  "TPC Window Tinting Shop serves Wilmington, Long Beach, San Pedro, Carson, Torrance and the South Bay. Find professional window tinting in your city. Call (310) 872-3644.";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    "window tinting service areas",
    "window tinting South Bay",
    "window tinting near me Wilmington",
    "window tinting Harbor area",
    "South Bay window tint shop",
  ],
});

const FAQS = [
  {
    q: "What areas does TPC Window Tinting Shop serve?",
    a: "We're based at 1454 N Wilmington Blvd in Wilmington, CA and serve the entire South Bay and Harbor area — including Long Beach, San Pedro, Carson, Harbor City, Torrance, Lomita, Gardena, Lawndale, Redondo Beach, Rancho Palos Verdes, Manhattan Beach and Hermosa Beach.",
  },
  {
    q: "Do I need an appointment?",
    a: "Appointments are recommended so we can have everything ready, but we welcome calls for same-day availability. Call or text (310) 872-3644.",
  },
  {
    q: "Do you offer mobile or in-shop tinting?",
    a: "All tinting is done in our climate-controlled Wilmington shop, which gives the cleanest, longest-lasting install. We're a short drive from anywhere in the South Bay.",
  },
  {
    q: "My city isn't listed — can you still help?",
    a: "Yes. The cities listed are where we work most, but we serve the greater South Bay and Harbor region. Reach out and we'll confirm we cover your area.",
  },
  {
    q: "Where exactly are you located?",
    a: "1454 N Wilmington Blvd, Wilmington, CA 90744 — open Monday–Saturday 9:00 AM to 6:00 PM, Sundays by appointment.",
  },
];

export default function ServiceAreasHub() {
  const items = CITY_LANDINGS.map((c) => ({
    href: `/${c.slug}`,
    title: c.chip ?? c.city,
    sub: "Window Tinting",
  }));

  const schema = [
    serviceSchema({
      name: "Window Tinting Service Areas",
      description: DESCRIPTION,
      serviceType: "Window Tinting",
      url: PATH,
    }),
    itemListSchema({
      name: "Service Areas",
      items: CITY_LANDINGS.map((c) => ({
        name: c.city,
        path: `/${c.slug}`,
      })),
      itemType: "Place",
    }),
    faqSchema(FAQS),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Service Areas", path: PATH },
    ]),
  ];

  const mapSection = (
    <section className="border-b border-line bg-black/55">
      <div className="mx-auto max-w-[1500px] px-5 py-12 sm:px-8 sm:py-16">
        <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr] lg:items-stretch">
          <div className="flex flex-col justify-center">
            <p className="oswald text-sm text-yellow">Our Coverage</p>
            <h2 className="anton mt-3 text-3xl text-light sm:text-5xl">
              Serving the South Bay &amp; Harbor Area
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
              Our shop sits at {SITE.address.full}, centrally located for the
              entire Harbor region. From Long Beach to the Palos Verdes
              peninsula, we&apos;re a short, easy drive away.
            </p>
            <a
              href={SITE.mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="oswald mt-5 inline-block text-xs text-yellow hover:text-light"
            >
              Get Directions →
            </a>
          </div>
          <div className="min-h-[280px] overflow-hidden border border-line">
            <iframe
              title="TPC Window Tinting Shop service area map — Wilmington, CA and the South Bay"
              src="https://www.google.com/maps?q=1454+N+Wilmington+Blvd+Wilmington+CA+90744&z=11&output=embed"
              className="h-full min-h-[280px] w-full grayscale"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <HubPage
      hubLabel="Service Areas"
      eyebrow="Where We Work"
      h1="Window Tinting Service Areas"
      hero={IMAGES.shop1}
      intro={[
        "TPC Window Tinting Shop is based in Wilmington, CA and serves drivers, homeowners and businesses across the South Bay and Harbor area. Whether you're in Long Beach, San Pedro, Torrance or up on the Palos Verdes peninsula, professional window tint is just a short drive away.",
        "Pick your city below for local details, or call us to confirm we cover your area. Every install happens in our climate-controlled Wilmington shop for the cleanest, longest-lasting results.",
      ]}
      schema={schema}
      beforeGrid={mapSection}
      gridEyebrow="Find Your City"
      gridTitle="Window Tinting Near You"
      items={items}
      faqs={FAQS}
      crossLinks={[
        { href: "/vehicles", label: "Vehicles We Tint" },
        ...VEHICLE_LANDINGS.slice(0, 6).map((v) => ({
          href: `/${v.slug}`,
          label: v.chip ?? v.h1,
        })),
      ]}
    />
  );
}
