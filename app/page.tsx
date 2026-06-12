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
import { SITE } from "@/lib/site";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />

        {/* Real brand line — "We Tint It All" */}
        <div className="edge-top border-y border-line bg-black/70">
          <div className="mx-auto flex max-w-[1500px] flex-wrap items-center justify-center gap-x-6 gap-y-2 px-5 py-5 text-center sm:px-8">
            <span className="oswald text-sm text-yellow">We Tint It All</span>
            {["Cars", "SUVs", "Trucks", "Vans", "Commercial", "Residential"].map((c) => (
              <span key={c} className="bebas text-2xl text-light sm:text-3xl">
                {c}
              </span>
            ))}
          </div>
        </div>

        <Builds />
        <Benefits />
        <TintComparison />
        <Services />
        <WhyChooseUs />
        <CTA />
        <Contact />
      </main>
      <Footer />

      {/* Sticky mobile call/text bar — both numbers, always visible */}
      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-px border-t border-line bg-line sm:hidden">
        <a
          href={SITE.phoneHref}
          className="btn-yellow flex flex-col items-center justify-center py-2.5 leading-tight"
        >
          <span className="text-[10px] tracking-normal opacity-80">Call</span>
          <span className="text-sm">(310) 872-3644</span>
        </a>
        <a
          href={SITE.sms2Href}
          className="oswald flex flex-col items-center justify-center bg-black py-2.5 leading-tight text-light"
        >
          <span className="text-[10px] tracking-normal text-yellow">Text</span>
          <span className="text-sm">(562) 350-1099</span>
        </a>
      </div>
    </>
  );
}
