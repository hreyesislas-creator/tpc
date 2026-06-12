import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LocalLanding from "@/components/LocalLanding";
import { getLanding, LANDING_SLUGS } from "@/lib/landings";
import { pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

// Only the known landing slugs are valid; anything else 404s.
export const dynamicParams = false;

export function generateStaticParams() {
  return LANDING_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = getLanding(slug);
  if (!data) return {};
  return pageMetadata({
    title: data.title,
    description: data.description,
    path: `/${slug}`,
    keywords: data.keywords,
  });
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const data = getLanding(slug);
  if (!data) notFound();
  return <LocalLanding data={data} />;
}
