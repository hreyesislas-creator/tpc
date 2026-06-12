import { SITE } from "@/lib/site";
import { IMAGES } from "@/lib/images";

const LINKS = [
  { href: "#builds", label: "Builds" },
  { href: "#services", label: "Services" },
  { href: "#why", label: "Why TPC" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="edge-top border-t border-line bg-black/70">
      <div className="mx-auto max-w-[1500px] px-5 py-12 sm:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <a href="#top" className="flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={IMAGES.logo}
              alt="TPC Window Tinting Shop"
              className="h-14 w-auto"
            />
          </a>

          <nav className="flex flex-wrap gap-6">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="oswald text-xs text-muted transition-colors hover:text-yellow"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 grid gap-6 border-t border-line pt-8 text-sm text-muted sm:grid-cols-3">
          <p className="leading-relaxed">
            {SITE.address.line1}
            <br />
            {SITE.address.line2}
          </p>
          <div className="sm:justify-self-center">
            <a href={SITE.phoneHref} className="group block">
              <span className="oswald block text-[10px] text-amber">
                {SITE.phoneLabel}
              </span>
              <span className="bebas text-2xl text-light group-hover:text-yellow">
                {SITE.phoneDisplay}
              </span>
            </a>
            <a href={SITE.phone2Href} className="group mt-2 block">
              <span className="oswald block text-[10px] text-amber">
                {SITE.phone2Label}
              </span>
              <span className="bebas text-2xl text-light group-hover:text-yellow">
                {SITE.phone2Display}
              </span>
            </a>
          </div>
          <a
            href={SITE.websiteHref}
            target="_blank"
            rel="noopener noreferrer"
            className="oswald text-xs text-yellow hover:text-light sm:justify-self-end"
          >
            {SITE.website}
          </a>
        </div>

        <p className="mt-8 text-xs text-muted/60">
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
