import Link from "next/link";

export type Crumb = { label: string; href?: string };

/**
 * Visible breadcrumb navigation. Mirrors the BreadcrumbList JSON-LD so the
 * on-page trail and structured data stay in sync. The final crumb is the
 * current page (no link, marked aria-current).
 */
export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="oswald text-[11px]">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-muted">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={i} className="flex items-center gap-x-2">
              {item.href && !last ? (
                <Link
                  href={item.href}
                  className="transition-colors hover:text-yellow"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-light" aria-current="page">
                  {item.label}
                </span>
              )}
              {!last && (
                <span aria-hidden className="text-line">
                  /
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
