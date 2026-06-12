import { SITE } from "@/lib/site";

/**
 * Sticky mobile call/text bar — both numbers, always visible on small screens.
 * Shared across the homepage and every local SEO landing page so the primary
 * conversion action (and NAP phone numbers) stay consistent.
 */
export default function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-px border-t border-line bg-line sm:hidden">
      <a
        href={SITE.phoneHref}
        className="btn-yellow flex flex-col items-center justify-center py-2.5 leading-tight"
      >
        <span className="text-[10px] tracking-normal opacity-80">Call</span>
        <span className="text-sm">{SITE.phoneDisplay}</span>
      </a>
      <a
        href={SITE.sms2Href}
        className="oswald flex flex-col items-center justify-center bg-black py-2.5 leading-tight text-light"
      >
        <span className="text-[10px] tracking-normal text-yellow">Text</span>
        <span className="text-sm">{SITE.phone2Display}</span>
      </a>
    </div>
  );
}
