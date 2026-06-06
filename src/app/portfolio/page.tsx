import { PortfolioPage } from '@/components/site/pages/PortfolioPage'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  shortTitle: 'Portfolio',
  ogTitle: 'Portfolio — Todd Nepola',
  description:
    'Real retail and industrial properties bought, built, leased and managed by Todd Nepola across South Florida — with the numbers behind each deal.',
  path: '/portfolio',
})

export default function Page() {
  return <PortfolioPage />
}
