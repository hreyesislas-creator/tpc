import type { Metadata } from "next";
import { Anton, Bebas_Neue, Oswald, Inter } from "next/font/google";
import "./globals.css";
import FixedBackdrop from "@/components/FixedBackdrop";
import JsonLd from "@/components/JsonLd";
import { SITE } from "@/lib/site";
import { businessGraph } from "@/lib/seo";

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: ["400"],
});

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: ["400"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.origin),
  title: {
    default:
      "TPC Window Tinting Shop | Premium Auto Window Tint in Wilmington, CA",
    template: "%s | TPC Window Tinting Shop",
  },
  description:
    "TPC Window Tinting Shop in Wilmington, CA. Premium automotive window tinting for style, privacy, heat protection, and a cleaner look. Call (310) 872-3644 for a free quote.",
  applicationName: SITE.name,
  keywords: [
    "window tinting Wilmington CA",
    "auto window tint",
    "ceramic window tint Wilmington",
    "car tint Wilmington",
    "automotive glass tinting",
    "windshield tint strip",
    "window tinting Long Beach",
    "window tinting San Pedro",
    "residential window tint",
    "commercial window tint",
    "TPC Window Tinting",
  ],
  authors: [{ name: SITE.name, url: SITE.origin }],
  creator: "Vuelvete Digital",
  publisher: SITE.name,
  alternates: { canonical: "/" },
  formatDetection: { telephone: true, address: true, email: false },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "TPC Window Tinting Shop | Premium Auto Window Tint",
    description:
      "Premium automotive, residential & commercial window tinting in Wilmington, CA. Style, privacy, heat protection, and a cleaner look.",
    url: SITE.origin,
    siteName: SITE.name,
    locale: "en_US",
    type: "website",
    images: [
      { url: SITE.ogImage, width: 1200, height: 630, alt: SITE.name },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TPC Window Tinting Shop | Premium Auto Window Tint",
    description:
      "Premium window tinting in Wilmington, CA. Auto, residential & commercial. Call (310) 872-3644.",
    images: [SITE.ogImage],
  },
  other: {
    "geo.region": "US-CA",
    "geo.placename": "Wilmington, California",
    "geo.position": `${SITE.geo.latitude};${SITE.geo.longitude}`,
    ICBM: `${SITE.geo.latitude}, ${SITE.geo.longitude}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${bebas.variable} ${oswald.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-black text-light">
        <JsonLd data={businessGraph} />
        <FixedBackdrop />
        {children}
      </body>
    </html>
  );
}
