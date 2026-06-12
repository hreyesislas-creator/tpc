/**
 * Single source of truth for every photo on the site.
 *
 * Drop the real photos into /public/images using these exact filenames and
 * they appear automatically — no code changes needed. Until a file exists,
 * its slot renders a clean dark frame with the label (no broken images).
 *
 * Recommended: large, landscape, JPG/WebP, 1600px+ wide, optimized for web.
 */
export const IMAGES = {
  // Brand logo (cropped from the official TPC artwork)
  logo: "/brand/logo.png",

  // Hero — the single best vehicle shot (real blacked-out Camaro from TPC artwork)
  hero: "/images/camaro.jpg",

  // Real vehicle shot available for reuse
  camaro: "/images/camaro.jpg",

  // Tint shade comparison — wide interior / windshield view (the tint
  // overlays are pure CSS, so only this one base photo is needed)
  interior: "/images/interior.jpg",

  // Real builds (masonry gallery)
  bronco: "/images/bronco.jpg",
  hummer: "/images/hummer.jpg",
  lexus: "/images/lexus.jpg",
  camry: "/images/camry.jpg",
  build1: "/images/build-1.jpg",
  build2: "/images/build-2.jpg",
  build3: "/images/build-3.jpg",
  build4: "/images/build-4.jpg",

  // Services (large image + text rows)
  serviceCeramic: "/images/service-ceramic.jpg",
  serviceFull: "/images/service-full.jpg",
  serviceStrip: "/images/service-strip.jpg",
  serviceFront: "/images/service-front.jpg",
  serviceRemoval: "/images/service-removal.jpg",

  // Why TPC (real shop photos)
  shop1: "/images/shop-1.jpg",
  shop2: "/images/shop-2.jpg",
} as const;

export type ImageKey = keyof typeof IMAGES;
