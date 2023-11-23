import { RootLayout } from '@/components/RootLayout'
import './globals.css'
import type { Metadata } from 'next'
import { Roboto, Roboto_Condensed, Poppins } from 'next/font/google'
import React from 'react'
import Script from 'next/script'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
})

const roboto_condensed = Roboto_Condensed({
  weight: '700',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-condensed',
})

const poppins = Poppins({
  weight: '600',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
})

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

export const metadata: Metadata = {
  metadataBase: new URL('https://toddnepola.com/'),
  title: 'Todd Nepola',
  description:
    'Todd Nepola is a leading figure in commercial real estate, is featured in podcasts, news articles, and creates Instagram Reels.',
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
      <body suppressHydrationWarning={true} className={`${roboto.variable} ${roboto_condensed.variable} ${poppins.variable}`}>
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  )
}
