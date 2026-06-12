import Link from "next/link";
import { SITE } from "@/lib/site";
import { IMAGES } from "@/lib/images";
import {
  CITY_LANDINGS,
  SERVICE_LANDINGS,
  VEHICLE_LANDINGS,
} from "@/lib/landings";

const NAV_LINKS = [
  { href: "/#builds", label: "Builds" },
  { href: "/#services", label: "Services" },
  { href: "/#why", label: "Why TPC" },
  { href: "/#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="edge-top border-t border-line bg-black/70">
      <div className="mx-auto max-w-[1500px] px-5 py-12 sm:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <Link href="/" className="flex items-center" aria-label="TPC Window Tinting Shop — Home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={IMAGES.logo}
              alt="TPC Window Tinting Shop"
              className="h-14 w-auto"
            />
          </Link>

          <nav className="flex flex-wrap gap-6">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="oswald text-xs text-muted transition-colors hover:text-yellow"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* ---------- Local SEO link hub: services + areas + vehicles ---------- */}
        <div className="mt-10 grid gap-10 border-t border-line pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Services */}
          <div>
            <p className="oswald text-[11px] text-amber">Window Tinting Services</p>
            <ul className="mt-4 space-y-2.5">
              {SERVICE_LANDINGS.map((l) => (
                <li key={l.slug}>
                  <Link
                    href={`/${l.slug}`}
                    className="text-sm text-muted transition-colors hover:text-yellow"
                  >
                    {l.h1}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service areas (city pages) */}
          <div>
            <Link
              href="/service-areas"
              className="oswald text-[11px] text-amber transition-colors hover:text-yellow"
            >
              Service Areas →
            </Link>
            <ul className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {CITY_LANDINGS.map((l) => (
                <li key={l.slug}>
                  <Link
                    href={`/${l.slug}`}
                    className="text-sm text-muted transition-colors hover:text-yellow"
                  >
                    {l.chip ?? l.city}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Vehicles */}
          <div>
            <Link
              href="/vehicles"
              className="oswald text-[11px] text-amber transition-colors hover:text-yellow"
            >
              Vehicles We Tint →
            </Link>
            <ul className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {VEHICLE_LANDINGS.map((l) => (
                <li key={l.slug}>
                  <Link
                    href={`/${l.slug}`}
                    className="text-sm text-muted transition-colors hover:text-yellow"
                  >
                    {l.chip ?? l.h1}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* NAP — Name / Address / Phone / Hours (consistent everywhere) */}
          <div>
            <p className="oswald text-[11px] text-amber">Visit The Shop</p>
            <address className="mt-4 not-italic text-sm leading-relaxed text-muted">
              <span className="block font-semibold text-light">{SITE.name}</span>
              {SITE.address.line1}
              <br />
              {SITE.address.line2}
            </address>
            <a
              href={SITE.mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="oswald mt-3 inline-block text-xs text-yellow hover:text-light"
            >
              Get Directions →
            </a>
            <a href={SITE.phoneHref} className="group mt-4 block">
              <span className="oswald block text-[10px] text-muted">
                {SITE.phoneLabel}
              </span>
              <span className="bebas text-2xl text-light group-hover:text-yellow">
                {SITE.phoneDisplay}
              </span>
            </a>
            <a href={SITE.phone2Href} className="group mt-2 block">
              <span className="oswald block text-[10px] text-muted">
                {SITE.phone2Label}
              </span>
              <span className="bebas text-2xl text-light group-hover:text-yellow">
                {SITE.phone2Display}
              </span>
            </a>
            <dl className="mt-4 text-sm text-muted">
              <div className="flex justify-between gap-3">
                <dt>{SITE.hours.weekdays.days}</dt>
                <dd className="text-yellow">{SITE.hours.weekdays.time}</dd>
              </div>
              <div className="mt-1 flex justify-between gap-3">
                <dt>{SITE.hours.sunday.days}</dt>
                <dd className="text-yellow">{SITE.hours.sunday.time}</dd>
              </div>
            </dl>
          </div>
        </div>

        <p className="mt-10 border-t border-line pt-8 text-xs text-muted/60">
          © <YearShim /> {SITE.name}. All rights reserved.
        </p>
        <p className="mt-1.5 text-[11px] text-muted/45">
          Website Designed &amp; Powered by{" "}
          <a
            href="https://vuelvetedigital.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted/70 underline-offset-2 transition-colors hover:text-yellow hover:underline"
          >
            Vuelvete Digital
          </a>
        </p>
      </div>
    </footer>
  );
}

function YearShim() {
  return <span>{new Date().getFullYear()}</span>;
}
