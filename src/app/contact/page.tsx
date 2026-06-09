import { ContactPage } from '@/components/site/pages/ContactPage'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  shortTitle: 'Contact',
  ogTitle: 'Contact Todd Nepola',
  description:
    'Get in touch with Todd Nepola and Current Capital Real Estate Group — questions about a deal, the book, a podcast booking, or working together.',
  path: '/contact',
})

export default function Page() {
  return <ContactPage />
}
