import type { Metadata } from "next";
import HubPage from "@/components/HubPage";
import { IMAGES } from "@/lib/images";
import { VEHICLE_LANDINGS, SERVICE_LANDINGS } from "@/lib/landings";
import {
  pageMetadata,
  serviceSchema,
  faqSchema,
  breadcrumbSchema,
  itemListSchema,
} from "@/lib/seo";

const PATH = "/vehicles";

const TITLE = "Vehicle Window Tinting | TPC Window Tinting Shop, Wilmington CA";
const DESCRIPTION =
  "Model-specific window tinting in Wilmington, CA — trucks, SUVs, sedans and Teslas. Ceramic film matched to factory glass, installed bubble-free. Call (310) 872-3644.";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    "vehicle window tinting Wilmington",
    "car window tint by model",
    "truck window tint Wilmington",
    "SUV window tint",
    "Tesla window tint Wilmington",
  ],
});

const FAQS = [
  {
    q: "Do you tint all makes and models?",
    a: "Yes — we tint cars, trucks, SUVs, vans and EVs of every make and model at our Wilmington shop. If you don't see your vehicle listed, call or text (310) 872-3644 and we'll take care of it.",
  },
  {
    q: "Can you match my truck or SUV's factory privacy glass?",
    a: "Absolutely. Many trucks and SUVs come with darker 'privacy glass' on the rear. We match your front windows to that shade while keeping them within California's legal limit for a uniform look.",
  },
  {
    q: "Is ceramic tint safe for my Tesla's sensors and glass roof?",
    a: "Yes. We use non-metal ceramic film that won't interfere with Autopilot sensors, GPS, cell signal or phone-as-key, and we offer film options for panoramic glass roofs.",
  },
  {
    q: "How much does window tint cost for my vehicle?",
    a: "Cost depends on the vehicle, how many windows you're doing and the film you choose. Many trucks and SUVs already have tinted rear glass, so often only the fronts need film. Call or text (310) 872-3644 for an exact quote.",
  },
  {
    q: "How long does vehicle tinting take?",
    a: "Most vehicles are tinted the same day, usually in 2–4 hours depending on the model and film.",
  },
];

export default function VehiclesHub() {
  const items = VEHICLE_LANDINGS.map((v) => ({
    href: `/${v.slug}`,
    title: v.h1,
    sub: v.eyebrow,
  }));

  const schema = [
    serviceSchema({
      name: "Vehicle Window Tinting",
      description: DESCRIPTION,
      serviceType: "Automotive Window Tinting",
      url: PATH,
    }),
    itemListSchema({
      name: "Vehicles We Tint",
      items: VEHICLE_LANDINGS.map((v) => ({
        name: v.chip ?? v.h1,
        path: `/${v.slug}`,
      })),
      itemType: "Vehicle",
    }),
    faqSchema(FAQS),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Vehicles", path: PATH },
    ]),
  ];

  return (
    <HubPage
      hubLabel="Vehicles"
      eyebrow="What We Tint"
      h1="Vehicle Window Tinting"
      hero={IMAGES.camaro}
      intro={[
        "From full-size trucks and family SUVs to sedans and Teslas, TPC Window Tinting Shop tints them all. Below you'll find model-specific window tinting pages with details on factory glass matching, recommended films and what to expect for your exact vehicle.",
        "We work out of our Wilmington shop and serve drivers across the South Bay and Harbor area. Every install uses quality film — including signal-safe ceramic — laid bubble-free for a clean, lasting finish.",
      ]}
      schema={schema}
      gridEyebrow="Make & Model"
      gridTitle="Vehicles We Tint"
      items={items}
      faqs={FAQS}
      crossLinks={[
        { href: "/service-areas", label: "Service Areas" },
        ...SERVICE_LANDINGS.map((s) => ({ href: `/${s.slug}`, label: s.h1 })),
      ]}
    />
  );
}
