/**
 * Renders a real photo as a covering background. If the file isn't present
 * yet, it degrades to a clean dark frame (no broken-image icon) so the layout
 * always looks finished. Drop the real file in /public/images to fill it.
 */
export default function Photo({
  src,
  alt,
  className = "",
  zoom = false,
  position = "center",
  children,
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  zoom?: boolean;
  position?: string;
  children?: React.ReactNode;
  priority?: boolean;
}) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        role="img"
        aria-label={alt}
        className={`photo absolute inset-0 h-full w-full ${zoom ? "photo-zoom" : ""}`}
        style={{ backgroundImage: `url(${src})`, backgroundPosition: position }}
        // eslint-disable-next-line @next/next/no-img-element
      />
      {/* Preload hint for the hero image */}
      {priority && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt="" aria-hidden className="hidden" fetchPriority="high" />
      )}
      {children}
    </div>
  );
}
