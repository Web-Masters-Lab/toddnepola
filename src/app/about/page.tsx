import type { Metadata } from 'next'
import { AboutPage } from '@/components/site/pages/AboutPage'

export const metadata: Metadata = {
  title: 'About Todd Nepola',
  description:
    'Todd Nepola — South Florida commercial real estate investor, manager and developer of 25+ years, founder of Current Capital Real Estate Group, author, philanthropist, and Ironman finisher.',
}

export default function Page() {
  return <AboutPage />
}
