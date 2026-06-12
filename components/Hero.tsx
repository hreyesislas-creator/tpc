import { SITE } from "@/lib/site";
import { IMAGES } from "@/lib/images";
import Photo from "./Photo";
import Ambient from "./Ambient";

export default function Hero() {
  return (
    <section id="top" className="relative isolate min-h-[100svh] overflow-hidden">
      {/* Real vehicle — fills the frame, weighted to the right. No empty space. */}
      <Photo
        src={IMAGES.hero}
        alt="Blacked-out Camaro freshly tinted at TPC Window Tinting, Wilmington CA"
        priority
        position="right center"
        className="absolute inset-0 -z-20 h-full w-full"
      />

      {/* Shadow grade so the vehicle stays on the right and text reads on the left */}
      <div className="absolute inset-0 -z-10 hidden bg-gradient-to-r from-black from-[28%] via-black/80 to-transparent lg:block" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black via-black/75 to-black/35 lg:hidden" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-transparent to-black/60" />

      {/* Industrial light source behind the vehicle (right), not the logo */}
      <Ambient light="top-right" smoke />

      {/* Clean solid-black top band so the logo blends into the dark — no glow, haze, or smoke behind it */}
      <div className="absolute inset-x-0 top-0 z-0 h-36 bg-gradient-to-b from-black via-black/95 to-transparent" />

      <div className="mx-auto flex min-h-[100svh] max-w-[1500px] items-end px-5 pb-20 pt-32 sm:px-8 sm:pb-28 lg:items-center">
        <div className="w-full lg:w-[58%]">
          <p className="reveal oswald flex items-center gap-3 text-sm text-amber">
            <span className="h-2 w-2 bg-yellow" />
            {SITE.tagline} · Wilmington, CA
          </p>

          <h1 className="reveal-2 anton mt-4 text-[18vw] text-light sm:text-[12vw] lg:text-[9.5rem]">
            Blacked Out.
            <br />
            <span className="text-yellow">Done Right.</span>
          </h1>

          <p className="reveal-3 mt-5 max-w-xl text-lg text-light/80 sm:text-xl">
            Premium ceramic window tinting for cars, trucks, SUVs, Broncos, and
            custom builds — installed clean in our Wilmington shop.
          </p>

          <div className="reveal-3 mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={SITE.phoneHref}
              className="btn-yellow inline-flex items-center justify-center gap-2 px-8 py-4 text-base"
            >
              <PhoneIcon /> Call Now
            </a>
            <a
              href={SITE.sms2Href}
              className="btn-outline inline-flex items-center justify-center gap-2 px-8 py-4 text-base"
            >
              <ChatIcon /> Text Us
            </a>
          </div>

          {/* Both contact methods, always visible */}
          <div className="reveal-3 mt-8 flex flex-col gap-5 sm:flex-row sm:gap-10">
            <a href={SITE.phoneHref} className="group flex items-center gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-yellow/40 bg-black/40 text-yellow">
                <PhoneIcon />
              </span>
              <span className="leading-tight">
                <span className="oswald block text-[11px] text-amber">
                  {SITE.phoneLabel}
                </span>
                <span className="bebas text-2xl text-light group-hover:text-yellow">
                  {SITE.phoneDisplay}
                </span>
              </span>
            </a>
            <a href={SITE.phone2Href} className="group flex items-center gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-yellow/40 bg-black/40 text-yellow">
                <ChatIcon />
              </span>
              <span className="leading-tight">
                <span className="oswald block text-[11px] text-amber">
                  {SITE.phone2Label}
                </span>
                <span className="bebas text-2xl text-light group-hover:text-yellow">
                  {SITE.phone2Display}
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* warm light strip at the floor */}
      <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-amber/10 to-transparent" />
    </section>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}
