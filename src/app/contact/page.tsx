import type { Metadata } from 'next'
import { ContactPage } from '@/components/site/pages/ContactPage'

export const metadata: Metadata = {
  title: 'Contact Todd Nepola',
  description:
    'Get in touch with Todd Nepola and Current Capital Real Estate Group — questions about a deal, the book, a podcast booking, or working together.',
}

export default function Page() {
  return <ContactPage />
}
