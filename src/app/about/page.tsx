import { AboutPage } from '@/components/site/pages/AboutPage'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  shortTitle: 'About',
  ogTitle: 'About Todd Nepola',
  description:
    'Todd Nepola — South Florida commercial real estate investor, manager and developer of 25+ years, founder of Current Capital Real Estate Group, author, philanthropist, and Ironman finisher.',
  path: '/about',
})

export default function Page() {
  return <AboutPage />
}
