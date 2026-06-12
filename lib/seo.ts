/**
 * Central Local-SEO module — single source of truth for structured data
 * (JSON-LD) and per-page metadata. Keeping it here guarantees NAP
 * (Name / Address / Phone) consistency across every page and schema block.
 */
import type { Metadata } from "next";
import { SITE } from "./site";

const ORIGIN = SITE.origin;
const BUSINESS_ID = `${ORIGIN}/#business`;
const WEBSITE_ID = `${ORIGIN}/#website`;
const AGENCY_ID = "https://vuelvetedigital.com/#agency";

/** Absolute URL helper — every schema/OG field needs fully-qualified URLs. */
export const abs = (path = "/") =>
  path.startsWith("http") ? path : `${ORIGIN}${path.startsWith("/") ? "" : "/"}${path}`;

/**
 * The core LocalBusiness node. Reused as a reference (@id) by every other
 * schema so search engines tie all pages back to one verified entity.
 */
export const localBusinessSchema = {
  "@type": ["AutomotiveBusiness", "LocalBusiness"],
  "@id": BUSINESS_ID,
  name: SITE.name,
  alternateName: "TPC Window Tinting",
  description:
    "TPC Window Tinting Shop is a Wilmington, CA window-tinting shop specializing in ceramic automotive tint, full vehicle tinting, windshield strips, plus residential and commercial window film. Serving Wilmington, Long Beach, San Pedro and the South Bay.",
  url: ORIGIN,
  image: [abs("/brand/banner.png"), abs("/brand/logo.png")],
  logo: abs("/brand/logo.png"),
  telephone: SITE.phoneHref.replace("tel:", ""),
  priceRange: SITE.priceRange,
  currenciesAccepted: "USD",
  paymentAccepted: "Cash, Credit Card, Debit Card",
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.line1,
    addressLocality: SITE.address.locality,
    addressRegion: SITE.address.region,
    postalCode: SITE.address.postalCode,
    addressCountry: SITE.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: SITE.geo.latitude,
    longitude: SITE.geo.longitude,
  },
  hasMap: SITE.mapsHref,
  areaServed: SITE.serviceAreas.map((name) => ({
    "@type": "City",
    name,
  })),
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: SITE.phoneHref.replace("tel:", ""),
      contactType: "customer service",
      contactOption: "TollFree",
      areaServed: "US",
      availableLanguage: ["English", "Spanish"],
    },
    {
      "@type": "ContactPoint",
      telephone: SITE.phone2Href.replace("tel:", ""),
      contactType: "sales",
      availableLanguage: ["English", "Spanish"],
    },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "00:00",
      closes: "00:00",
      description: "Sunday by appointment only",
    },
  ],
  creator: { "@id": AGENCY_ID },
} as const;

/** Full @graph for the homepage / root layout. */
export const businessGraph = {
  "@context": "https://schema.org",
  "@graph": [
    localBusinessSchema,
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: ORIGIN,
      name: SITE.name,
      inLanguage: "en-US",
      publisher: { "@id": BUSINESS_ID },
      creator: { "@id": AGENCY_ID },
    },
    {
      "@type": "Organization",
      "@id": AGENCY_ID,
      name: "Vuelvete Digital",
      url: "https://vuelvetedigital.com",
      description: "Web design and digital marketing agency.",
    },
  ],
};

/** Build a Service schema node tied back to the business. */
export function serviceSchema({
  name,
  description,
  serviceType,
  url,
  areaServed = SITE.serviceAreas,
}: {
  name: string;
  description: string;
  serviceType: string;
  url: string;
  areaServed?: readonly string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType,
    url: abs(url),
    provider: { "@id": BUSINESS_ID },
    areaServed: areaServed.map((a) => ({ "@type": "City", name: a })),
    audience: { "@type": "Audience", audienceType: "Vehicle owners, homeowners and businesses" },
  };
}

/** Build an FAQPage schema node from a list of Q&As. */
export function faqSchema(faqs: ReadonlyArray<{ q: string; a: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/**
 * Build a BreadcrumbList from an ordered list of crumbs. Supports any depth,
 * e.g. Home → Vehicles → Ford Bronco Window Tint.
 */
export function breadcrumbSchema(
  crumbs: ReadonlyArray<{ name: string; path: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: abs(c.path),
    })),
  };
}

/**
 * Build an ItemList for a hub/collection page (e.g. /vehicles, /service-areas).
 * When `itemType` is provided each entry is wrapped as that schema type
 * (e.g. "Vehicle" or "Place"), otherwise a plain named URL is emitted.
 */
export function itemListSchema({
  name,
  items,
  itemType,
}: {
  name: string;
  items: ReadonlyArray<{ name: string; path: string }>;
  itemType?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    numberOfItems: items.length,
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      ...(itemType
        ? { item: { "@type": itemType, name: it.name, url: abs(it.path) } }
        : { name: it.name, url: abs(it.path) }),
    })),
  };
}

/**
 * Shared metadata builder — guarantees every page ships a canonical URL,
 * Open Graph tags, Twitter card and geo metadata with consistent defaults.
 */
export function pageMetadata({
  title,
  description,
  path,
  image = SITE.ogImage,
  keywords,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  keywords?: string[];
}): Metadata {
  const canonical = path === "/" ? "/" : path;
  return {
    // `absolute` opts out of the root layout's title template so these
    // already-complete titles aren't double-suffixed.
    title: { absolute: title },
    description,
    keywords,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: abs(path),
      siteName: SITE.name,
      locale: "en_US",
      type: "website",
      images: [{ url: image, width: 1200, height: 630, alt: SITE.name }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    other: {
      // Geo metadata for local search engines / directories
      "geo.region": "US-CA",
      "geo.placename": "Wilmington, California",
      "geo.position": `${SITE.geo.latitude};${SITE.geo.longitude}`,
      ICBM: `${SITE.geo.latitude}, ${SITE.geo.longitude}`,
    },
  };
}
