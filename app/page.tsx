import Link from "next/link";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Builds from "@/components/Builds";
import Benefits from "@/components/Benefits";
import TintComparison from "@/components/TintComparison";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />

        {/* Real brand line — "We Tint It All" */}
        <div className="edge-top border-y border-line bg-black/70">
          <div className="mx-auto flex max-w-[1500px] flex-col items-center gap-3 px-5 py-5 text-center sm:px-8">
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              <span className="oswald text-sm text-yellow">We Tint It All</span>
              {["Cars", "SUVs", "Trucks", "Vans", "Commercial", "Residential"].map((c) => (
                <span key={c} className="bebas text-2xl text-light sm:text-3xl">
                  {c}
                </span>
              ))}
            </div>
            <p className="oswald text-[11px] text-muted">
              Browse window tinting{" "}
              <Link href="/vehicles" className="text-yellow hover:text-light">
                by vehicle
              </Link>{" "}
              or{" "}
              <Link href="/service-areas" className="text-yellow hover:text-light">
                by service area
              </Link>
            </p>
          </div>
        </div>

        <Builds />
        <Benefits />
        <TintComparison />
        <Services />
        <WhyChooseUs />

        {/* Topical hubs — contextual links into the vehicle & city clusters */}
        <section className="border-y border-line bg-black/55">
          <div className="mx-auto max-w-[1500px] px-5 py-14 sm:px-8 sm:py-20">
            <p className="oswald text-sm text-yellow">Find Your Tint</p>
            <h2 className="anton mt-3 text-4xl text-light sm:text-6xl">
              Browse By Vehicle Or Location
            </h2>
            <div className="mt-10 grid gap-px border border-line bg-line md:grid-cols-2">
              <Link
                href="/vehicles"
                className="group flex flex-col gap-4 bg-[#0d0d0d]/85 p-8 transition-colors hover:bg-[#141414]/85 sm:p-10"
              >
                <span className="oswald text-[11px] text-amber">By Vehicle</span>
                <span className="anton text-3xl text-light group-hover:text-yellow sm:text-4xl">
                  Window Tinting by Make &amp; Model
                </span>
                <span className="text-base leading-relaxed text-muted">
                  Tahoe, Bronco, Tesla Model Y, F-150, Tacoma, Wrangler and more —
                  see tint details for your exact vehicle.
                </span>
                <span className="oswald mt-2 text-xs text-yellow">
                  Explore vehicles →
                </span>
              </Link>
              <Link
                href="/service-areas"
                className="group flex flex-col gap-4 bg-[#0d0d0d]/85 p-8 transition-colors hover:bg-[#141414]/85 sm:p-10"
              >
                <span className="oswald text-[11px] text-amber">By Location</span>
                <span className="anton text-3xl text-light group-hover:text-yellow sm:text-4xl">
                  Window Tinting Service Areas
                </span>
                <span className="text-base leading-relaxed text-muted">
                  Wilmington, Long Beach, San Pedro, Carson, Torrance and across
                  the South Bay &amp; Harbor area.
                </span>
                <span className="oswald mt-2 text-xs text-yellow">
                  Explore service areas →
                </span>
              </Link>
            </div>
          </div>
        </section>

        <CTA />
        <Contact />
      </main>
      <Footer />
      <MobileCallBar />
    </>
  );
}
