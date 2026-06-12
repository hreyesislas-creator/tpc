import Link from "next/link";
import { SITE } from "@/lib/site";
import Nav from "./Nav";
import Footer from "./Footer";
import Contact from "./Contact";
import CTA from "./CTA";
import Ambient from "./Ambient";
import Photo from "./Photo";
import MobileCallBar from "./MobileCallBar";
import JsonLd from "./JsonLd";
import Breadcrumbs from "./Breadcrumbs";

export type HubItem = { href: string; title: string; sub: string };

/**
 * Parent/hub topical-authority page (e.g. /vehicles, /service-areas). Renders
 * a breadcrumb (Home › Hub), hero + intro, an optional map/feature slot, a
 * grid of child-page links, FAQ, cross-links and the shared Contact/CTA blocks,
 * with all structured data passed in via `schema`.
 */
export default function HubPage({
  hubLabel,
  eyebrow,
  h1,
  hero,
  intro,
  schema,
  beforeGrid,
  gridEyebrow,
  gridTitle,
  items,
  faqs,
  crossLinks = [],
}: {
  hubLabel: string;
  eyebrow: string;
  h1: string;
  hero: string;
  intro: string[];
  schema: object[];
  beforeGrid?: React.ReactNode;
  gridEyebrow: string;
  gridTitle: string;
  items: HubItem[];
  faqs: { q: string; a: string }[];
  crossLinks?: { href: string; label: string }[];
}) {
  return (
    <>
      <JsonLd data={schema} />

      <Nav />

      <main className="flex-1">
        {/* ---------- Hero ---------- */}
        <section className="relative overflow-hidden border-b border-line">
          <Photo
            src={hero}
            alt={`${h1} — TPC Window Tinting Shop`}
            priority
            className="absolute inset-0 -z-20 h-full w-full"
          />
          <div className="absolute inset-0 -z-10 bg-black/72" />
          <Ambient light="top-left" smoke spray />

          <div className="relative mx-auto max-w-[1500px] px-5 pb-16 pt-28 sm:px-8 sm:pb-24 sm:pt-40">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: hubLabel }]} />

            <p className="oswald mt-6 text-sm text-yellow">{eyebrow}</p>
            <h1 className="anton mt-3 max-w-4xl text-5xl text-light sm:text-7xl lg:text-8xl">
              {h1}
            </h1>
            <div className="mt-6 max-w-2xl space-y-4">
              {intro.map((p, i) => (
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

        {/* ---------- Optional feature slot (e.g. service-area map) ---------- */}
        {beforeGrid}

        {/* ---------- Child-page grid ---------- */}
        <section className="bg-black/45">
          <div className="mx-auto max-w-[1500px] px-5 py-16 sm:px-8 sm:py-24">
            <p className="oswald text-sm text-yellow">{gridEyebrow}</p>
            <h2 className="anton mt-3 text-4xl text-light sm:text-6xl">
              {gridTitle}
            </h2>
            <div className="mt-10 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
              {items.map((it) => (
                <Link
                  key={it.href}
                  href={it.href}
                  className="group flex items-center justify-between gap-4 bg-[#0d0d0d]/85 p-7 transition-colors hover:bg-[#141414]/85 sm:p-8"
                >
                  <span>
                    <span className="bebas block text-2xl text-light group-hover:text-yellow">
                      {it.title}
                    </span>
                    <span className="oswald text-[11px] text-muted">
                      {it.sub}
                    </span>
                  </span>
                  <span aria-hidden className="text-yellow">
                    →
                  </span>
                </Link>
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
              {faqs.map((f) => (
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

        {/* ---------- Cross-links to sibling clusters ---------- */}
        {crossLinks.length > 0 && (
          <section className="bg-black/45">
            <div className="mx-auto max-w-[1500px] px-5 py-12 sm:px-8 sm:py-16">
              <p className="oswald text-sm text-yellow">Keep Exploring</p>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {crossLinks.map((c) => (
                  <Link
                    key={c.href}
                    href={c.href}
                    className="oswald border border-line bg-[#0d0d0d]/85 px-4 py-2.5 text-xs text-light transition-colors hover:border-yellow/50 hover:text-yellow"
                  >
                    {c.label}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <CTA />
        <Contact />
      </main>

      <Footer />
      <MobileCallBar />
    </>
  );
}
