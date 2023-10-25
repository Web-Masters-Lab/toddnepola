import { RootLayout } from '@/components/RootLayout'
import './globals.css'
import type { Metadata } from 'next'
import { Roboto, Roboto_Condensed, Poppins } from 'next/font/google'
import React from 'react'

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

export const metadata: Metadata = {
  metadataBase: new URL('https://ornate-genie-61c836.netlify.app/'),
  title: 'Home - Todd Nepola',
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
      <body suppressHydrationWarning={true} className={`${roboto.variable} ${roboto_condensed.variable} ${poppins.variable}`}>
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  )
}
