import Link from "next/link";
import { SITE } from "@/lib/site";
import { IMAGES } from "@/lib/images";

// Site-wide hrefs (prefixed with "/") so the nav works from landing pages too,
// routing back to the matching homepage section.
const LINKS = [
  { href: "/#builds", label: "Builds" },
  { href: "/#services", label: "Services" },
  { href: "/#why", label: "Why TPC" },
  { href: "/#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-[1500px] items-center justify-between px-5 py-5 sm:px-8">
        <Link href="/" className="flex items-center" aria-label="TPC Window Tinting Shop — Home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={IMAGES.logo}
            alt="TPC Window Tinting Shop"
            className="h-9 w-auto opacity-95 sm:h-11"
          />
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="oswald text-xs text-muted transition-colors hover:text-yellow"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <a href={SITE.phoneHref} className="btn-yellow px-5 py-2.5 text-sm">
          {SITE.phoneDisplay}
        </a>
      </div>
    </header>
  );
}
