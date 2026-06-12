import { IMAGES } from "@/lib/images";
import Photo from "./Photo";
import Ambient from "./Ambient";

type Tile = {
  src: string;
  label: string;
  span: string;
};

const TILES: Tile[] = [
  { src: IMAGES.bronco, label: "Bronco", span: "sm:col-span-2 sm:row-span-2" },
  { src: IMAGES.hummer, label: "Hummer EV", span: "sm:row-span-2" },
  { src: IMAGES.lexus, label: "Lexus", span: "" },
  { src: IMAGES.camry, label: "Camry", span: "" },
  { src: IMAGES.camaro, label: "Ceramic Tint", span: "sm:col-span-2" },
  { src: IMAGES.build2, label: "5%", span: "" },
  { src: IMAGES.build3, label: "20%", span: "" },
  { src: IMAGES.build4, label: "35%", span: "" },
];

export default function Builds() {
  return (
    <section id="builds" className="relative overflow-hidden bg-black/45">
      <Ambient light="top-left" smoke spray />
      <div className="relative mx-auto max-w-[1500px] px-5 py-16 sm:px-8 sm:py-24">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="oswald text-sm text-yellow">Real Builds</p>
            <h2 className="anton mt-3 text-6xl text-light sm:text-8xl">
              Real Vehicles.
              <br />
              <span className="text-muted">Real Work.</span>
            </h2>
          </div>
          <p className="max-w-sm text-base text-muted">
            Actual customer cars, trucks, and SUVs tinted in-house at our
            Wilmington shop.
          </p>
        </div>

        <div className="mt-10 grid auto-rows-[200px] grid-cols-2 gap-2 sm:auto-rows-[220px] sm:grid-cols-4 sm:gap-3">
          {TILES.map((t, i) => (
            <figure
              key={`${t.label}-${i}`}
              className={`group relative overflow-hidden ${t.span}`}
            >
              <Photo
                src={t.src}
                alt={`${t.label} — window tint by TPC`}
                zoom
                className="h-full w-full"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <figcaption className="absolute bottom-0 left-0 p-4">
                  <span className="bebas text-2xl text-light sm:text-3xl">
                    {t.label}
                  </span>
                  <span className="block h-0.5 w-8 bg-yellow" />
                </figcaption>
              </Photo>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
