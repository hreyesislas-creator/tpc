"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { IMAGES } from "@/lib/images";

type Zone = {
  pct: string;
  label: string;
  /** darkness of the CSS tint overlay (higher = darker glass) */
  alpha: number;
};

const ZONES: Zone[] = [
  { pct: "35%", label: "Light Smoke", alpha: 0.3 }, // professionally tinted
  { pct: "20%", label: "Darker Privacy", alpha: 0.6 }, // noticeably darker
  { pct: "5%", label: "Limo Look", alpha: 0.88 }, // limo blackout
];

const MIN_GAP = 10; // keep zones readable
const clamp = (v: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, v));

export default function TintComparison() {
  const trackRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef<0 | 1 | 2 | null>(null);
  const [pos, setPos] = useState({ x1: 33, x2: 66 });
  const [dragging, setDragging] = useState(false);

  const moveTo = useCallback((clientX: number) => {
    const el = trackRef.current;
    const a = activeRef.current;
    if (!el || a === null) return;
    const rect = el.getBoundingClientRect();
    const pct = clamp(((clientX - rect.left) / rect.width) * 100, 0, 100);
    setPos((p) =>
      a === 1
        ? { ...p, x1: Math.min(pct, p.x2 - MIN_GAP) }
        : { ...p, x2: Math.max(pct, p.x1 + MIN_GAP) },
    );
  }, []);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (activeRef.current === null) return;
      e.preventDefault();
      moveTo(e.clientX);
    };
    const onUp = () => {
      if (activeRef.current === null) return;
      activeRef.current = null;
      setDragging(false);
    };
    window.addEventListener("pointermove", onMove, { passive: false });
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
    };
  }, [moveTo]);

  const startDrag = (which: 1 | 2) => (e: React.PointerEvent) => {
    e.preventDefault();
    activeRef.current = which;
    setDragging(true);
  };

  const onKey = (which: 1 | 2) => (e: React.KeyboardEvent) => {
    const step = e.shiftKey ? 5 : 2;
    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
    e.preventDefault();
    const dir = e.key === "ArrowLeft" ? -step : step;
    setPos((p) =>
      which === 1
        ? { ...p, x1: clamp(Math.min(p.x1 + dir, p.x2 - MIN_GAP), 0, 100) }
        : { ...p, x2: clamp(Math.max(p.x2 + dir, p.x1 + MIN_GAP), 0, 100) },
    );
  };

  const { x1, x2 } = pos;
  const centers = [x1 / 2, (x1 + x2) / 2, (x2 + 100) / 2];

  return (
    <section
      id="compare"
      className="relative overflow-hidden border-y border-line bg-black/55"
    >
      <div className="relative mx-auto max-w-[1500px] px-5 pt-16 sm:px-8 sm:pt-24">
        <p className="oswald text-sm text-yellow">Tint Shade Comparison</p>
        <h2 className="anton mt-3 text-5xl text-light sm:text-7xl">
          See The Difference
          <br />
          <span className="text-yellow">Before You Tint</span>
        </h2>
        <p className="mt-4 max-w-xl text-lg text-muted">
          Compare popular tint shades and choose the look that fits your vehicle.
        </p>
      </div>

      {/* Full-width comparison */}
      <div className="mt-10 w-full select-none">
        <div
          ref={trackRef}
          className="relative h-[460px] w-full overflow-hidden md:h-[600px]"
          style={{ touchAction: dragging ? "none" : undefined }}
        >
          {/* Base interior photo (CSS gradient fallback if absent) */}
          <div
            aria-label="View through a tinted windshield"
            role="img"
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${IMAGES.interior}), radial-gradient(120% 90% at 50% 28%, #34373d 0%, #17181c 52%, #0a0a0b 100%)`,
            }}
          />
          {/* warm industrial light on the right */}
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(60%_70%_at_100%_40%,rgba(255,176,32,0.10),transparent_70%)]" />

          {/* Tint zones (pure CSS overlays) */}
          {[
            { left: 0, width: x1, alpha: ZONES[0].alpha },
            { left: x1, width: x2 - x1, alpha: ZONES[1].alpha },
            { left: x2, width: 100 - x2, alpha: ZONES[2].alpha },
          ].map((z, i) => (
            <div
              key={i}
              className="absolute inset-y-0"
              style={{
                left: `${z.left}%`,
                width: `${z.width}%`,
                background: `linear-gradient(180deg, rgba(6,7,9,${z.alpha}), rgba(2,2,3,${Math.min(
                  z.alpha + 0.09,
                  0.97,
                )}))`,
              }}
            />
          ))}

          {/* top + bottom shadow grade for depth */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/70 to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black to-transparent" />

          {/* Labels pinned to each zone */}
          {ZONES.map((z, i) => (
            <div
              key={z.pct}
              className="pointer-events-none absolute bottom-6 z-30 -translate-x-1/2"
              style={{ left: `${centers[i]}%` }}
            >
              <div className="flex flex-col items-center whitespace-nowrap">
                <span className="anton bg-yellow px-2.5 py-1 text-xl leading-none text-black sm:text-2xl">
                  {z.pct}
                </span>
                <span className="oswald mt-1.5 bg-black/85 px-2.5 py-1 text-[11px] text-light sm:text-xs">
                  {z.label}
                </span>
              </div>
            </div>
          ))}

          {/* Dividers + handles */}
          {([
            { which: 1 as const, at: x1, label: "Light Smoke vs Darker Privacy" },
            { which: 2 as const, at: x2, label: "Darker Privacy vs Limo Look" },
          ]).map((d) => (
            <div
              key={d.which}
              className="absolute inset-y-0 z-40 -translate-x-1/2"
              style={{ left: `${d.at}%` }}
            >
              {/* yellow line */}
              <div className="absolute inset-y-0 left-1/2 w-0.5 -translate-x-1/2 bg-yellow shadow-[0_0_18px_rgba(255,209,0,0.55)]" />
              {/* circular handle */}
              <button
                type="button"
                role="slider"
                aria-label={`Tint divider — ${d.label}`}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={Math.round(d.at)}
                tabIndex={0}
                onPointerDown={startDrag(d.which)}
                onKeyDown={onKey(d.which)}
                style={{ touchAction: "none" }}
                className={`absolute top-1/2 left-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize place-items-center rounded-full border-2 border-black bg-yellow text-black shadow-[0_6px_24px_rgba(0,0,0,0.6)] outline-none transition-transform focus-visible:ring-2 focus-visible:ring-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-black ${
                  dragging ? "scale-105" : "hover:scale-110"
                }`}
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d="M9 6 4 12l5 6M15 6l5 6-5 6" />
                </svg>
              </button>
            </div>
          ))}

          {/* drag hint */}
          <div className="oswald pointer-events-none absolute right-4 top-4 z-30 rounded-sm border border-yellow/40 bg-black/70 px-3 py-1.5 text-[11px] text-yellow">
            Drag to compare
          </div>
        </div>
      </div>
    </section>
  );
}
