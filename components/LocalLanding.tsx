import Link from "next/link";
import { SITE } from "@/lib/site";
import {
  type Landing,
  CITY_LANDINGS,
  SERVICE_LANDINGS,
  VEHICLE_LANDINGS,
} from "@/lib/landings";
import {
  serviceSchema,
  faqSchema,
  breadcrumbSchema,
} from "@/lib/seo";
import Nav from "./Nav";
import Footer from "./Footer";
import Contact from "./Contact";
import CTA from "./CTA";
import Ambient from "./Ambient";
import Photo from "./Photo";
import MobileCallBar from "./MobileCallBar";
import JsonLd from "./JsonLd";
import Breadcrumbs from "./Breadcrumbs";

/**
 * Renders a complete, SEO-optimized local landing page from a Landing config:
 * breadcrumbs, hero + H1, intro, benefit grid, H2 content sections, FAQ,
 * a Service Areas section (links to every city page), a Related Services
 * section (links to every service page), shared Contact/CTA blocks, plus
 * Service + FAQ + Breadcrumb JSON-LD.
 *
 * Internal-linking guarantees (every landing page):
 *  - City pages   → Home, Ceramic, Residential, Commercial, Contact
 *  - Service pages → all city pages, Home, Contact
 */
export default function LocalLanding({ data }: { data: Landing }) {
  const path = `/${data.slug}`;

  // City pages → list the *service* pages under "Related Services".
  // Service pages → list the *city* pages under "Service Areas".
  // The current page is filtered out of its own peer group.
  const serviceLinks = SERVICE_LANDINGS.filter((l) => l.slug !== data.slug);
  const cityLinks = CITY_LANDINGS.filter((l) => l.slug !== data.slug);
  const vehicleLinks = VEHICLE_LANDINGS.filter((l) => l.slug !== data.slug);

  // Topical hierarchy: city pages sit under /service-areas, vehicle pages
  // under /vehicles, service pages directly under Home.
  const hub =
    data.kind === "vehicle"
      ? { label: "Vehicles", href: "/vehicles" }
      : data.kind === "city"
        ? { label: "Service Areas", href: "/service-areas" }
        : null;
  const leaf =
    data.kind === "service" ? data.h1 : `${data.chip ?? data.city} Window Tint`;

  const crumbItems = [
    { label: "Home", href: "/" },
    ...(hub ? [hub] : []),
    { label: leaf },
  ];
  const crumbSchema = [
    { name: "Home", path: "/" },
    ...(hub ? [{ name: hub.label, path: hub.href }] : []),
    { name: leaf, path },
  ];

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: data.serviceName,
            description: data.serviceDescription,
            serviceType: data.serviceType,
            url: path,
          }),
          faqSchema(data.faqs),
          breadcrumbSchema(crumbSchema),
        ]}
      />

      <Nav />

      <main className="flex-1">
        {/* ---------- Hero ---------- */}
        <section className="relative overflow-hidden border-b border-line">
          <Photo
            src={data.hero}
            alt={`${data.serviceName} — TPC Window Tinting Shop`}
            priority
            className="absolute inset-0 -z-20 h-full w-full"
          />
          <div className="absolute inset-0 -z-10 bg-black/72" />
          <Ambient light="top-left" smoke spray />

          <div className="relative mx-auto max-w-[1500px] px-5 pb-16 pt-28 sm:px-8 sm:pb-24 sm:pt-40">
            {/* Breadcrumb navigation (matches BreadcrumbList schema) */}
            <Breadcrumbs items={crumbItems} />

            <p className="oswald mt-6 text-sm text-yellow">{data.eyebrow}</p>
            <h1 className="anton mt-3 max-w-4xl text-5xl text-light sm:text-7xl lg:text-8xl">
              {data.h1}
            </h1>
            <div className="mt-6 max-w-2xl space-y-4">
              {data.intro.map((p, i) => (
                <p key={i} className="text-lg leading-relaxed text-muted">
                  {p}
                </p>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={SITE.phoneHref}
                className="btn-yellow inline-flex items-center justify-center px-8 py-4 text-base"
              >
                Call {SITE.phoneDisplay}
              </a>
              <a
                href={SITE.sms2Href}
                className="btn-outline inline-flex items-center justify-center px-8 py-4 text-base"
              >
                Text {SITE.phone2Display}
              </a>
              <a
                href="#contact"
                className="btn-outline inline-flex items-center justify-center px-8 py-4 text-base"
              >
                Get a Free Quote
              </a>
            </div>
          </div>
        </section>

        {/* ---------- Benefit grid ---------- */}
        <section className="border-b border-line bg-black/55">
          <div className="mx-auto grid max-w-[1500px] gap-px border-x border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {data.highlights.map((h) => (
              <div key={h.title} className="bg-[#0d0d0d]/85 p-7 sm:p-9">
                <h3 className="bebas text-2xl text-yellow">{h.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {h.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ---------- Content sections (H2s) ---------- */}
        <section className="relative overflow-hidden bg-black/45">
          <Ambient light="top-right" smoke />
          <div className="relative mx-auto max-w-[900px] px-5 py-16 sm:px-8 sm:py-24">
            <div className="space-y-14">
              {data.sections.map((s) => (
                <div key={s.h2}>
                  <h2 className="anton text-3xl text-light sm:text-5xl">
                    {s.h2}
                  </h2>
                  <div className="mt-5 space-y-4">
                    {s.body.map((p, i) => (
                      <p
                        key={i}
                        className="text-lg leading-relaxed text-muted"
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- FAQ (visible + matches FAQ schema) ---------- */}
        <section className="border-y border-line bg-black/60">
          <div className="mx-auto max-w-[900px] px-5 py-16 sm:px-8 sm:py-24">
            <p className="oswald text-sm text-yellow">FAQ</p>
            <h2 className="anton mt-3 text-4xl text-light sm:text-6xl">
              Common Questions
            </h2>
            <dl className="mt-10 divide-y divide-line border-y border-line">
              {data.faqs.map((f) => (
                <div key={f.q} className="py-6">
                  <dt className="bebas text-2xl text-light">{f.q}</dt>
                  <dd className="mt-2 text-base leading-relaxed text-muted">
                    {f.a}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ---------- Related Services (links to every service page) ---------- */}
        <section className="bg-black/45">
          <div className="mx-auto max-w-[1500px] px-5 py-16 sm:px-8 sm:py-20">
            <p className="oswald text-sm text-yellow">What We Do</p>
            <h2 className="anton mt-3 text-3xl text-light sm:text-5xl">
              Related Services
            </h2>
            <div className="mt-8 grid gap-px border border-line bg-line sm:grid-cols-3">
              {serviceLinks.map((r) => (
                <Link
                  key={r.slug}
                  href={`/${r.slug}`}
                  className="group flex flex-col justify-between gap-6 bg-[#0d0d0d]/85 p-7 transition-colors hover:bg-[#141414]/85 sm:p-9"
                >
                  <h3 className="bebas text-2xl text-light group-hover:text-yellow">
                    {r.h1}
                  </h3>
                  <span className="oswald text-xs text-yellow">
                    View Service →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Vehicles We Tint (links to every vehicle page) ---------- */}
        <section className="bg-black/45">
          <div className="mx-auto max-w-[1500px] px-5 py-16 sm:px-8 sm:py-20">
            <p className="oswald text-sm text-yellow">Make &amp; Model</p>
            <h2 className="anton mt-3 text-3xl text-light sm:text-5xl">
              Vehicles We Tint
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
              We tint cars, trucks, SUVs and EVs of every kind. See model-specific
              tinting info:
            </p>
            <div className="mt-8 flex flex-wrap gap-2.5">
              {vehicleLinks.map((v) => (
                <Link
                  key={v.slug}
                  href={`/${v.slug}`}
                  className="oswald border border-line bg-[#0d0d0d]/85 px-4 py-2.5 text-xs text-light transition-colors hover:border-yellow/50 hover:text-yellow"
                >
                  {v.chip ?? v.h1}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Service Areas (links to every city page) ---------- */}
        <section className="border-t border-line bg-black/55">
          <div className="mx-auto max-w-[1500px] px-5 py-16 sm:px-8 sm:py-20">
            <p className="oswald text-sm text-yellow">Where We Work</p>
            <h2 className="anton mt-3 text-3xl text-light sm:text-5xl">
              Service Areas
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
              Based at {SITE.address.full}, TPC Window Tinting Shop serves
              drivers, homeowners and businesses across the South Bay and Harbor
              area. Explore window tinting in your city:
            </p>
            <div className="mt-8 flex flex-wrap gap-2.5">
              {cityLinks.map((c) => (
                <Link
                  key={c.slug}
                  href={`/${c.slug}`}
                  className="oswald border border-line bg-[#0d0d0d]/85 px-4 py-2.5 text-xs text-light transition-colors hover:border-yellow/50 hover:text-yellow"
                >
                  {c.chip ?? c.city}
                </Link>
              ))}
            </div>
            <p className="mt-6 text-sm text-muted">
              Don&apos;t see your city?{" "}
              <a href="#contact" className="text-yellow hover:text-light">
                Contact us
              </a>{" "}
              — we cover the greater South Bay and Harbor area.
            </p>
          </div>
        </section>

        <CTA />
        <Contact />
      </main>

      <Footer />
      <MobileCallBar />
    </>
  );
}
