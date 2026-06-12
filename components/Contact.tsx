import { SITE } from "@/lib/site";
import Ambient from "./Ambient";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-line bg-black/55">
      <Ambient light="top-left" smoke />
      <div className="relative mx-auto max-w-[1500px] px-5 py-16 sm:px-8 sm:py-24">
        <p className="oswald text-sm text-yellow">Get In Touch</p>
        <h2 className="anton mt-3 text-5xl text-light sm:text-7xl">
          Contact TPC
        </h2>

        {/* Two contact methods */}
        <div className="mt-10 grid gap-px overflow-hidden border border-line bg-line md:grid-cols-2">
          {/* LEFT — primary call */}
          <a
            href={SITE.phoneHref}
            className="group flex items-start gap-4 bg-[#0d0d0d]/85 p-7 backdrop-blur-sm transition-colors hover:bg-[#141414]/85 sm:p-9"
          >
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-md border border-yellow/40 bg-yellow/5 text-yellow">
              <PhoneIcon />
            </span>
            <span>
              <span className="oswald block text-xs text-amber">
                {SITE.phoneLabel}
              </span>
              <span className="anton mt-1 block text-4xl text-light group-hover:text-yellow sm:text-5xl">
                {SITE.phoneDisplay}
              </span>
            </span>
          </a>

          {/* RIGHT — secondary text / after hours */}
          <div className="flex items-start gap-4 bg-[#0d0d0d]/85 p-7 backdrop-blur-sm sm:p-9">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-md border border-yellow/40 bg-yellow/5 text-yellow">
              <ChatIcon />
            </span>
            <span>
              <span className="oswald block text-xs text-amber">
                {SITE.phone2Label}
              </span>
              <a
                href={SITE.phone2Href}
                className="anton mt-1 block text-4xl text-light hover:text-yellow sm:text-5xl"
              >
                {SITE.phone2Display}
              </a>
              <div className="mt-3 flex gap-2">
                <a
                  href={SITE.sms2Href}
                  className="btn-yellow inline-flex items-center gap-2 px-4 py-2 text-xs"
                >
                  <ChatIcon /> Text
                </a>
                <a
                  href={SITE.phone2Href}
                  className="btn-outline inline-flex items-center gap-2 px-4 py-2 text-xs"
                >
                  <PhoneIcon /> Call
                </a>
              </div>
            </span>
          </div>
        </div>

        {/* Address + Business Hours + Map */}
        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {/* Address */}
          <div className="flex items-start gap-4 border border-line bg-[#0d0d0d]/70 p-7">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md border border-yellow/40 bg-yellow/5 text-yellow">
              <PinIcon />
            </span>
            <div>
              <p className="oswald text-xs text-amber">The Shop</p>
              <address className="mt-1 not-italic">
                <p className="bebas text-2xl text-light">{SITE.address.line1}</p>
                <p className="bebas text-2xl text-light">{SITE.address.line2}</p>
              </address>
              <a
                href={SITE.mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="oswald mt-3 inline-block text-xs text-yellow hover:text-light"
              >
                Get Directions →
              </a>
            </div>
          </div>

          {/* Business Hours — prominent */}
          <BusinessHours />

          {/* Map */}
          <div className="min-h-[220px] overflow-hidden border border-line">
            <iframe
              title="TPC Window Tinting Shop location map"
              src="https://www.google.com/maps?q=1454+N+Wilmington+Blvd+Wilmington+CA+90744&output=embed"
              className="h-full min-h-[220px] w-full grayscale"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function BusinessHours() {
  return (
    <div className="metal-border relative overflow-hidden rounded-none border border-yellow/30 bg-[#0d0d0d]/85 p-7">
      <div className="absolute right-0 top-0 h-20 w-20 translate-x-1/3 -translate-y-1/3 rounded-full bg-yellow/10 blur-2xl" />
      <div className="flex items-center gap-3">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md border border-yellow/50 bg-yellow text-black">
          <ClockIcon />
        </span>
        <h3 className="anton text-2xl text-light">Business Hours</h3>
      </div>

      <dl className="mt-5 space-y-3">
        <div className="flex items-baseline justify-between gap-3 border-b border-line pb-3">
          <dt className="bebas text-xl text-light">{SITE.hours.weekdays.days}</dt>
          <dd className="oswald text-sm text-yellow">{SITE.hours.weekdays.time}</dd>
        </div>
        <div className="flex items-baseline justify-between gap-3">
          <dt className="bebas text-xl text-light">{SITE.hours.sunday.days}</dt>
          <dd className="oswald text-sm text-yellow">{SITE.hours.sunday.time}</dd>
        </div>
      </dl>
    </div>
  );
}

function ClockIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
