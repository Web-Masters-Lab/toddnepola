import { Shell } from '@/components/site/Shell'
import './globals.css'
import '@/styles/design.css'
import type { Metadata, Viewport } from 'next'
import React from 'react'
import Script from 'next/script'

const SITE = 'https://toddnepola.com'
const BOOKBABY = 'https://store.bookbaby.com/book/keeping-it-real-on-commercial-real-estate'

// Structured data (JSON-LD). A single @graph ties together the three entities
// the redesigned site is built around: Todd (Person), his firm (Organization),
// and his book (Book). Cross-references use @id so search engines resolve them
// as one connected profile rather than three unrelated nodes.
const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${SITE}/#todd`,
      name: 'Todd Nepola',
      url: SITE,
      image: `${SITE}/images/square.png`,
      jobTitle: 'President',
      worksFor: { '@id': `${SITE}/#current-capital` },
      alumniOf: 'University of South Florida',
      award: 'CoStar Power Broker Award',
      knowsAbout: ['Commercial Real Estate', 'Real Estate Investment', 'Property Management'],
      sameAs: [
        'https://www.facebook.com/todd.nepola/',
        'https://www.instagram.com/lifeaccordingtotodd',
        'https://www.youtube.com/channel/UCBb9T0yL77zmLOQMhg9njNw',
        'https://www.linkedin.com/in/todd-nepola-52323441/',
      ],
    },
    {
      '@type': 'Organization',
      '@id': `${SITE}/#current-capital`,
      name: 'Current Capital Real Estate Group',
      url: 'https://www.currentcapitalgroup.com/',
      logo: `${SITE}/images/current-capital-logo.png`,
      founder: { '@id': `${SITE}/#todd` },
    },
    {
      '@type': 'Book',
      '@id': `${SITE}/#book`,
      name: 'Keeping It Real on Commercial Real Estate',
      author: { '@id': `${SITE}/#todd` },
      url: BOOKBABY,
      image: `${SITE}/images/book.webp`,
      inLanguage: 'en',
      description:
        'Every question investors should be asking about commercial real estate — answered by a 25-year veteran investor, manager and developer. All net proceeds go to charity.',
      offers: {
        '@type': 'Offer',
        url: BOOKBABY,
        availability: 'https://schema.org/InStock',
        seller: { '@type': 'Organization', name: 'BookBaby' },
      },
    },
  ],
}

export const viewport: Viewport = {
  // Tint the iOS browser chrome / safe-area to match the footer so it stops
  // sampling the navy banner at the top of the page.
  themeColor: '#d1d5db',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://toddnepola.com/'),
  title: 'Todd Nepola',
  description: 'Todd Nepola is a leading figure in commercial real estate, is featured in podcasts, news articles, and creates Instagram Reels.',
  verification:{
    google:"SAD9sFVj91sHVKfmVI675i5h6i1tFiB6pUOh5x_kf04",
  },
  openGraph: {
    url: '/',
    title: 'Todd Nepola',
    description:
      'Todd Nepola is a leading figure in commercial real estate, is featured in podcasts, news articles, and creates Instagram Reels.',
    siteName: 'Todd Nepola',
    images: [
      {
        url: 'images/hero-books-topdown.webp',
        width: 2000,
        height: 859,
        alt: 'Todd Nepola — Keeping It Real on Commercial Real Estate',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html className="selection:bg-primary/70 selection:text-white scroll-smooth" lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&family=Roboto+Condensed:wght@400;700&family=Poppins:wght@600&display=swap"
          rel="stylesheet"
        />
      </head>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-R62FZS8CSQ" />
      <Script id="structured-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-R62FZS8CSQ');
        `}
      </Script>
      <body suppressHydrationWarning={true} style={{ fontFamily: "'Roboto', sans-serif" }}>
        <Shell>{children}</Shell>
      </body>
    </html>
  )
}
