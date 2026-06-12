import Ambient from "./Ambient";

const BENEFITS = [
  {
    n: "01",
    title: "Heat Reduction",
    desc: "Block harmful heat and keep your vehicle cooler.",
  },
  {
    n: "02",
    title: "UV Protection",
    desc: "Protect interiors from fading and damage.",
  },
  {
    n: "03",
    title: "Privacy",
    desc: "Cleaner look and more privacy.",
  },
  {
    n: "04",
    title: "Comfort",
    desc: "Better driving experience year-round.",
  },
];

export default function Benefits() {
  return (
    <section className="relative overflow-hidden border-y border-line bg-black/55">
      <Ambient light="top-right" smoke />
      <div className="relative mx-auto max-w-[1500px] px-5 py-16 sm:px-8 sm:py-24">
        <p className="oswald text-sm text-yellow">Why Tint</p>
        <h2 className="anton mt-3 text-5xl text-light sm:text-7xl">
          The Difference You Feel
        </h2>

        <div className="mt-12 grid gap-px border border-line bg-line/80 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((b) => (
            <div
              key={b.n}
              className="bg-[#0d0d0d]/85 p-8 backdrop-blur-sm transition-colors hover:bg-[#141414]/85 sm:p-10"
            >
              <span className="anton text-2xl text-yellow">{b.n}</span>
              <h3 className="bebas mt-4 text-4xl text-light">{b.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-muted">
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
