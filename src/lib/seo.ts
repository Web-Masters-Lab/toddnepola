import type { Metadata } from 'next'

/* Shared per-page metadata builder.
   Next.js shallow-merges top-level metadata keys, so a page that sets its own
   `openGraph` REPLACES the root layout's openGraph wholesale (losing siteName,
   type, locale and the image). This helper rebuilds a complete openGraph/twitter
   block for every page so social cards stay correct site-wide. The OG image is
   the generated card at /opengraph-image (see app/opengraph-image.tsx). */
export function pageMetadata(opts: {
  /** Short title for the <title> template, e.g. 'About' → 'About | Todd Nepola' */
  shortTitle: string
  /** Full title used for OG/Twitter share cards, e.g. 'About Todd Nepola' */
  ogTitle: string
  description: string
  /** Canonical path, e.g. '/about' */
  path: string
}): Metadata {
  const { shortTitle, ogTitle, description, path } = opts
  const image = {
    url: '/opengraph-image',
    width: 1200,
    height: 630,
    alt: 'Todd Nepola — Commercial Real Estate Investor, Author & Speaker',
  }
  return {
    title: shortTitle,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: ogTitle,
      description,
      url: path,
      siteName: 'Todd Nepola',
      images: [image],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description,
      images: ['/opengraph-image'],
    },
  }
}
