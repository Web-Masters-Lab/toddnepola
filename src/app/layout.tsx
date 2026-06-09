import './globals.css'
import type { Metadata } from 'next'
import React from 'react'
import Script from 'next/script'
import { Roboto, Roboto_Condensed, Poppins, Cinzel } from 'next/font/google'
import { Shell } from '@/components/site/Shell'

/* Self-hosted webfonts via next/font (replaces the render-blocking Google Fonts
   @import). Each exposes a CSS variable consumed by the --font-* design tokens
   in colors_and_type.css. display:'swap' + automatic fallback metrics = no FOIT
   and minimal layout shift. */
const robotoCondensed = Roboto_Condensed({
  subsets: ['latin'],
  variable: '--font-roboto-condensed',
  display: 'swap',
})
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-roboto',
  display: 'swap',
})
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})
const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel',
  display: 'swap',
})

const fontVars = `${robotoCondensed.variable} ${roboto.variable} ${poppins.variable} ${cinzel.variable}`

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://toddnepola.com/#todd",
      "name": "Todd Nepola",
      "url": "https://toddnepola.com",
      "image": "https://toddnepola.com/images/square.png",
      "description":
        "South Florida commercial real estate investor, manager and developer of 25+ years, founder of Current Capital Real Estate Group, author, and philanthropist.",
      "sameAs": [
        "https://www.facebook.com/todd.nepola/",
        "https://www.instagram.com/lifeaccordingtotodd",
        "https://www.youtube.com/channel/UCBb9T0yL77zmLOQMhg9njNw",
        "https://www.linkedin.com/in/todd-nepola-52323441/",
      ],
      "jobTitle": "President",
      "worksFor": { "@id": "https://www.currentcapitalgroup.com/#org" },
      "knowsAbout": [
        "Commercial real estate",
        "Retail real estate",
        "Industrial real estate",
        "Real estate investment",
        "Property management",
      ],
      "award": "CoStar Power Broker",
      "alumniOf": "University of South Florida",
      "birthDate": "1972-11-19",
      "birthPlace": "Staten Island, New York, NY",
      "children": ["Gabriella Nepola", "Sophia Nepola"],
      "parents": ["Ina Nepola", "Thomas Nepola"],
      "sibling": "Justin Nepola",
    },
    {
      "@type": "Organization",
      "@id": "https://www.currentcapitalgroup.com/#org",
      "name": "Current Capital Real Estate Group",
      "url": "https://www.currentcapitalgroup.com/",
      "founder": { "@id": "https://toddnepola.com/#todd" },
      "areaServed": "South Florida",
    },
    {
      "@type": "WebSite",
      "@id": "https://toddnepola.com/#website",
      "url": "https://toddnepola.com",
      "name": "Todd Nepola",
      "publisher": { "@id": "https://toddnepola.com/#todd" },
    },
  ],
}

const DESCRIPTION =
  'Todd Nepola is a leading figure in commercial real estate, is featured in podcasts, news articles, and creates Instagram Reels.'

export const metadata: Metadata = {
  metadataBase: new URL('https://toddnepola.com/'),
  title: {
    default: 'Todd Nepola — Commercial Real Estate Investor, Author & Speaker',
    template: '%s | Todd Nepola',
  },
  description: DESCRIPTION,
  authors: [{ name: 'Todd Nepola', url: 'https://toddnepola.com' }],
  creator: 'Todd Nepola',
  alternates: {
    canonical: '/',
  },
  verification: {
    google: 'SAD9sFVj91sHVKfmVI675i5h6i1tFiB6pUOh5x_kf04',
  },
  openGraph: {
    // og:image is supplied automatically by app/opengraph-image.tsx (1200×630)
    url: '/',
    title: 'Todd Nepola',
    description: DESCRIPTION,
    siteName: 'Todd Nepola',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Todd Nepola',
    description: DESCRIPTION,
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={fontVars}>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-R62FZS8CSQ" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-R62FZS8CSQ');
        `}
      </Script>
      <body suppressHydrationWarning={true}>
        <Shell>{children}</Shell>
      </body>
    </html>
  )
}
