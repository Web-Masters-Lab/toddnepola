import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://ornate-genie-61c836.netlify.app/'),
  title: 'Home - Todd Nepola',
  description: 'Todd Nepola is a leading figure in commercial real estate, is featured in podcasts, news articles, and creates Instagram Reels.',
  openGraph: {
    url: "/",
    title: "Todd Nepola",
    description: "Todd Nepola is a leading figure in commercial real estate, is featured in podcasts, news articles, and creates Instagram Reels.",
    siteName: "Todd Nepola",
    images: [{
      url: "images/banner.png",
    }],
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
