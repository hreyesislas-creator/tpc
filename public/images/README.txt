TPC WINDOW TINTING — PHOTO DROP-IN GUIDE
=========================================

This site is built around REAL photos. Drop your images into THIS folder
(public/images) using the exact filenames below. They appear automatically —
no code changes. Until a file exists, its slot shows a clean dark frame with
the label, so the layout always looks finished.

Tip: large landscape shots, JPG or WebP, ~1600px+ wide, web-optimized.

ALREADY IN PLACE (real TPC assets):
  /brand/logo.png   -> official TPC logo (used in nav + footer)
  camaro.jpg        -> real blacked-out Camaro, currently the HERO background
  /brand/banner.png, logo-full.png, logo-concepts.png -> source artwork kept for reference

HERO (swap with a better real vehicle shot anytime — full screen):
  Currently points to camaro.jpg via lib/images.ts (IMAGES.hero).
  To use a different shot, save it as hero.jpg and set hero: "/images/hero.jpg".

REAL BUILDS GALLERY:
  bronco.jpg        -> labeled "Bronco" (large featured tile)
  hummer.jpg        -> "Hummer EV"
  lexus.jpg         -> "Lexus"
  camry.jpg         -> "Camry"
  build-1.jpg       -> "Ceramic Tint" (wide tile)
  build-2.jpg       -> "5%"
  build-3.jpg       -> "20%"
  build-4.jpg       -> "35%"

SERVICES (large image + text rows):
  service-ceramic.jpg   -> Ceramic Window Tint
  service-full.jpg      -> Full Vehicle Tint
  service-strip.jpg     -> Windshield Strip
  service-front.jpg     -> Front Windows
  service-removal.jpg   -> Tint Removal

TINT SHADE COMPARISON (one wide base photo — tint shades are CSS overlays):
  interior.jpg      -> wide interior / windshield view from inside the car
                       (a dark gradient shows until you add this)

WHY TPC (real shop photos):
  shop-1.jpg        -> shop interior / wide
  shop-2.jpg        -> installer at work
  (build-3.jpg is reused here as a finished-detail shot)

To change any mapping, edit lib/images.ts.
