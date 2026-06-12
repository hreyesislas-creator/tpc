export const SITE = {
  name: "TPC Window Tinting Shop",
  shortName: "TPC",
  tagline: "Ride Cooler. Look Better.",

  // Primary — call during business hours
  phoneLabel: "Call Us During Business Hours",
  phoneDisplay: "(310) 872-3644",
  phoneHref: "tel:+13108723644",

  // Secondary — text or call after business hours
  phone2Label: "Text Us or Call After Business Hours",
  phone2Display: "(562) 350-1099",
  phone2Href: "tel:+15623501099",
  sms2Href: "sms:+15623501099",

  hours: {
    weekdays: { days: "Monday – Saturday", time: "9:00 AM – 6:00 PM" },
    sunday: { days: "Sunday", time: "Appointment Only" },
  },

  website: "www.tpcwindowtinting.com",
  websiteHref: "https://www.tpcwindowtinting.com",

  // Canonical origin — used for metadataBase, canonical URLs, schema @ids
  origin: "https://www.tpcwindowtinting.com",

  address: {
    line1: "1454 N Wilmington Blvd",
    line2: "Wilmington, CA 90744",
    full: "1454 N Wilmington Blvd, Wilmington, CA 90744",
    locality: "Wilmington",
    region: "CA",
    postalCode: "90744",
    country: "US",
  },

  // Approximate shop coordinates (Wilmington, CA) for geo metadata + LocalBusiness schema
  geo: { latitude: 33.7901, longitude: -118.2637 },

  // Typical pricing band shown to search engines (not a public price list)
  priceRange: "$$",

  // Default social-share image (1200×630 brand banner)
  ogImage: "/brand/banner.png",

  // Neighborhoods & cities the shop serves — powers areaServed + footer links
  serviceAreas: [
    "Wilmington",
    "Long Beach",
    "San Pedro",
    "Carson",
    "Harbor City",
    "Torrance",
    "Compton",
    "Lomita",
  ],

  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=1454+N+Wilmington+Blvd+Wilmington+CA+90744",
} as const;
