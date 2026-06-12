import { SITE } from "@/lib/site";
import { IMAGES } from "@/lib/images";
import Photo from "./Photo";
import Ambient from "./Ambient";

export default function CTA() {
  return (
    <section className="relative overflow-hidden border-t border-line">
      {/* Real vehicle, sunk deep into shadow */}
      <Photo
        src={IMAGES.camaro}
        alt="Blacked-out Camaro detail"
        position="left center"
        className="absolute inset-0 -z-20 h-full w-full"
      />
      <div className="absolute inset-0 -z-10 bg-black/80" />
      <Ambient light="center" smoke spray />

      <div className="relative mx-auto max-w-[1500px] px-5 py-24 text-center sm:px-8 sm:py-32">
        <h2 className="anton text-6xl text-light sm:text-8xl lg:text-9xl">
          Ready To Tint
          <br />
          <span className="text-yellow">Your Vehicle?</span>
        </h2>

        <div className="mt-8 flex flex-col items-center justify-center gap-x-12 gap-y-6 sm:flex-row sm:items-start">
          <a href={SITE.phoneHref} className="group block">
            <span className="oswald block text-[11px] text-amber">
              {SITE.phoneLabel}
            </span>
            <span className="anton mt-1 block text-4xl text-light group-hover:text-yellow sm:text-6xl">
              {SITE.phoneDisplay}
            </span>
          </a>
          <span className="hidden h-14 w-px bg-line sm:block" />
          <a href={SITE.phone2Href} className="group block">
            <span className="oswald block text-[11px] text-amber">
              {SITE.phone2Label}
            </span>
            <span className="anton mt-1 block text-4xl text-light group-hover:text-yellow sm:text-6xl">
              {SITE.phone2Display}
            </span>
          </a>
        </div>

        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={SITE.phoneHref}
            className="btn-yellow inline-flex items-center justify-center px-10 py-4 text-base"
          >
            Call (310) 872-3644
          </a>
          <a
            href={SITE.sms2Href}
            className="btn-outline inline-flex items-center justify-center px-10 py-4 text-base"
          >
            Text (562) 350-1099
          </a>
        </div>
      </div>
    </section>
  );
}
