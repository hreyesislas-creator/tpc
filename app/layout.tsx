import type { Metadata } from "next";
import { Anton, Bebas_Neue, Oswald, Inter } from "next/font/google";
import "./globals.css";
import FixedBackdrop from "@/components/FixedBackdrop";

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
  title: "TPC Window Tinting Shop | Premium Auto Window Tint in Wilmington, CA",
  description:
    "TPC Window Tinting Shop in Wilmington, CA. Premium automotive window tinting for style, privacy, heat protection, and a cleaner look. Call (310) 872-3644 for a free quote.",
  keywords: [
    "window tinting Wilmington CA",
    "auto window tint",
    "car tint Wilmington",
    "automotive glass tinting",
    "windshield tint strip",
    "TPC Window Tinting",
  ],
  openGraph: {
    title: "TPC Window Tinting Shop | Premium Auto Window Tint",
    description:
      "Premium automotive window tinting in Wilmington, CA. Style, privacy, heat protection, and a cleaner look for your vehicle.",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.tpcwindowtinting.com/#business",
      name: "TPC Window Tinting Shop",
      url: "https://www.tpcwindowtinting.com",
      image: "https://www.tpcwindowtinting.com/brand/logo.png",
      telephone: "+1-310-872-3644",
      address: {
        "@type": "PostalAddress",
        streetAddress: "1454 N Wilmington Blvd",
        addressLocality: "Wilmington",
        addressRegion: "CA",
        postalCode: "90744",
        addressCountry: "US",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          opens: "09:00",
          closes: "18:00",
        },
      ],
      creator: { "@id": "https://vuelvetedigital.com/#agency" },
    },
    {
      "@type": "WebSite",
      "@id": "https://www.tpcwindowtinting.com/#website",
      url: "https://www.tpcwindowtinting.com",
      name: "TPC Window Tinting Shop",
      publisher: { "@id": "https://www.tpcwindowtinting.com/#business" },
      creator: { "@id": "https://vuelvetedigital.com/#agency" },
    },
    {
      "@type": "Organization",
      "@id": "https://vuelvetedigital.com/#agency",
      name: "Vuelvete Digital",
      url: "https://vuelvetedigital.com",
      description: "Web design and digital marketing agency.",
    },
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <FixedBackdrop />
        {children}
      </body>
    </html>
  );
}
