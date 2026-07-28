import { Shell } from '@/components/site/Shell'
import './globals.css'
import '@/styles/design.css'
import type { Metadata, Viewport } from 'next'
import React from 'react'
import Script from 'next/script'

const schema = {
    "@context": "https://schema.org/",
    "@type": "Person",
    "name": "Todd Nepola",
    "url": "https://toddnepola.com",
    "image": "https://toddnepola.com/images/square.png",
    "sameAs": [
      "https://www.facebook.com/todd.nepola/",
      "https://www.instagram.com/lifeaccordingtotodd",
      "https://www.youtube.com/channel/UCBb9T0yL77zmLOQMhg9njNw",
      "https://www.linkedin.com/in/todd-nepola-52323441/",
      "https://toddnepola.com"
    ],
    "jobTitle": "President",
    "worksFor": {
      "@type": "Organization",
      "name": "Current Capital Real Estate Group"
    } ,
    "alumniOf": "University of South Florida" ,
    "birthDate": "November 19, 1972",
    "birthPlace": "Staten Island, New York, NY",
    "children": ["Gabriella Nepola", "Sophia Nepola"],
    "parents": ["Ina Nepola", "Thomas Nepola"],
    "sibling": "Justin Nepola",

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
        url: 'images/banner.png',
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
      <body suppressHydrationWarning={true} style={{ fontFamily: "'Roboto', sans-serif" }} className="flex w-full flex-col overflow-hidden">
        <Shell>{children}</Shell>
      </body>
    </html>
  )
}
