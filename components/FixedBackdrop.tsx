/**
 * Site-wide industrial atmosphere: dark brick wall, concrete grain, grime,
 * a warm sodium-light haze up top, and a deep vignette. Fixed behind all
 * content so the whole site reads like one underground shop. Pure material
 * texture — no illustrations.
 */
export default function FixedBackdrop() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-50 bg-[#080808]"
    >
      <div className="absolute inset-0 tx-brick opacity-50" />
      <div className="absolute inset-0 tx-concrete opacity-[0.10] mix-blend-soft-light" />
      <div className="absolute inset-0 tx-grunge opacity-[0.08] mix-blend-overlay" />
      {/* warm light haze from above */}
      <div className="absolute inset-0 bg-[radial-gradient(100%_60%_at_50%_-10%,rgba(255,176,32,0.07),transparent_55%)]" />
      {/* deep vignette / shadows */}
      <div className="absolute inset-0 bg-[radial-gradient(130%_100%_at_50%_45%,transparent_42%,rgba(0,0,0,0.88))]" />
    </div>
  );
}
