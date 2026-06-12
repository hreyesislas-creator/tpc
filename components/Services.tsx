import { SITE } from "@/lib/site";
import { IMAGES } from "@/lib/images";
import Photo from "./Photo";
import Ambient from "./Ambient";

type Service = {
  n: string;
  title: string;
  desc: string;
  src: string;
};

const SERVICES: Service[] = [
  {
    n: "01",
    title: "Ceramic Window Tint",
    desc: "Our top-tier film — maximum heat rejection and UV block with a clean, true-color finish that won't fade or turn purple.",
    src: IMAGES.serviceCeramic,
  },
  {
    n: "02",
    title: "Full Vehicle Tint",
    desc: "Every window tinted to one matched shade for a complete, blacked-out look from front to back.",
    src: IMAGES.serviceFull,
  },
  {
    n: "03",
    title: "Windshield Strip",
    desc: "A clean visor strip across the top of your windshield to cut sun glare without blocking your view.",
    src: IMAGES.serviceStrip,
  },
  {
    n: "04",
    title: "Front Windows",
    desc: "Match your front doors to the rest of the vehicle for a uniform, finished appearance.",
    src: IMAGES.serviceFront,
  },
  {
    n: "05",
    title: "Tint Removal",
    desc: "Old, bubbled, or peeling film removed cleanly and prepped for a fresh, flawless install.",
    src: IMAGES.serviceRemoval,
  },
];

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-black/45">
      <Ambient light="top-right" smoke />
      <div className="relative mx-auto max-w-[1500px] px-5 pt-16 sm:px-8 sm:pt-24">
        <p className="oswald text-sm text-yellow">What We Do</p>
        <h2 className="anton mt-3 text-6xl text-light sm:text-8xl">Services</h2>
      </div>

      <div className="mt-12 flex flex-col">
        {SERVICES.map((s, i) => {
          const flip = i % 2 === 1;
          return (
            <div
              key={s.n}
              className="group grid items-stretch border-t border-line lg:grid-cols-2"
            >
              <Photo
                src={s.src}
                alt={`${s.title} by TPC Window Tinting`}
                zoom
                className={`min-h-[280px] sm:min-h-[420px] ${flip ? "lg:order-2" : ""}`}
              />
              <div
                className={`mx-auto flex w-full max-w-[750px] flex-col justify-center px-5 py-12 sm:px-12 ${
                  flip ? "lg:order-1" : ""
                }`}
              >
                <span className="anton text-5xl text-line sm:text-7xl">
                  {s.n}
                </span>
                <h3 className="anton mt-2 text-4xl text-light sm:text-6xl">
                  {s.title}
                </h3>
                <p className="mt-4 max-w-md text-lg leading-relaxed text-muted">
                  {s.desc}
                </p>
                <a
                  href={SITE.phoneHref}
                  className="oswald mt-6 inline-flex items-center gap-2 text-sm text-yellow transition-colors hover:text-light"
                >
                  Call For Pricing
                  <span aria-hidden>→</span>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
