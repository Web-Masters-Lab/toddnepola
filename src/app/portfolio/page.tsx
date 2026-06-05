import type { Metadata } from 'next'
import { PortfolioPage } from '@/components/site/pages/PortfolioPage'

export const metadata: Metadata = {
  title: 'Portfolio — Todd Nepola',
  description:
    'Real retail and industrial properties bought, built, leased and managed by Todd Nepola across South Florida — with the numbers behind each deal.',
}

export default function Page() {
  return <PortfolioPage />
}
