import { SITE } from "@/lib/site";
import { IMAGES } from "@/lib/images";

const LINKS = [
  { href: "#builds", label: "Builds" },
  { href: "#services", label: "Services" },
  { href: "#why", label: "Why TPC" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-[1500px] items-center justify-between px-5 py-5 sm:px-8">
        <a href="#top" className="flex items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={IMAGES.logo}
            alt="TPC Window Tinting Shop"
            className="h-9 w-auto opacity-95 sm:h-11"
          />
        </a>

        <nav className="hidden items-center gap-9 md:flex">
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

        <a href={SITE.phoneHref} className="btn-yellow px-5 py-2.5 text-sm">
          {SITE.phoneDisplay}
        </a>
      </div>
    </header>
  );
}
