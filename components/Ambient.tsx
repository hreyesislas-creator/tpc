/**
 * Local section atmosphere — a warm industrial light pool, drifting smoke, and
 * an optional subtle graffiti spray accent. Drop inside a `relative` section.
 */
export default function Ambient({
  light = "top-left",
  smoke = true,
  spray = false,
}: {
  light?: "top-left" | "top-right" | "center" | "none";
  smoke?: boolean;
  spray?: boolean;
}) {
  const lightPos =
    light === "top-right"
      ? "-right-32 -top-32"
      : light === "center"
        ? "left-1/2 top-1/3 -translate-x-1/2"
        : "-left-32 -top-32";

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {smoke && <div className="smoke absolute inset-0" />}
      {light !== "none" && (
        <div
          className={`lightpool absolute h-[460px] w-[460px] rounded-full ${lightPos}`}
        />
      )}
      {spray && (
        <div className="spray absolute -top-6 left-0 h-40 w-[420px] opacity-70" />
      )}
    </div>
  );
}
