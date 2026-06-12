import { IMAGES } from "@/lib/images";
import Photo from "./Photo";
import Ambient from "./Ambient";

const REASONS = [
  "Professional Installation",
  "Clean Workmanship",
  "Quality Film",
  "Fast Turnaround",
  "Local Wilmington Shop",
];

export default function WhyChooseUs() {
  return (
    <section id="why" className="relative overflow-hidden border-t border-line bg-black/55">
      <Ambient light="center" smoke />
      <div className="relative mx-auto grid max-w-[1500px] gap-0 lg:grid-cols-2">
        {/* Shop photos */}
        <div className="grid grid-cols-1 gap-2 p-2 sm:grid-cols-2">
          <Photo
            src={IMAGES.shop1}
            alt="Inside the TPC Window Tinting shop in Wilmington"
            zoom
            className="group min-h-[260px] sm:col-span-2 sm:min-h-[340px]"
          />
          <Photo
            src={IMAGES.shop2}
            alt="TPC tint installer at work"
            zoom
            className="group min-h-[220px]"
          />
          <Photo
            src={IMAGES.build3}
            alt="Finished tint detail"
            zoom
            className="group min-h-[220px]"
          />
        </div>

        {/* Reasons */}
        <div className="flex flex-col justify-center px-5 py-14 sm:px-12">
          <p className="oswald text-sm text-yellow">Why TPC</p>
          <h2 className="anton mt-3 text-5xl text-light sm:text-7xl">
            Done Clean.
            <br />
            Done Local.
          </h2>

          <ul className="mt-8 border-t border-line">
            {REASONS.map((r, i) => (
              <li
                key={r}
                className="flex items-center gap-5 border-b border-line py-5"
              >
                <span className="anton text-2xl text-yellow">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="bebas text-3xl text-light sm:text-4xl">
                  {r}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
