import type { Metadata } from 'next'
import { BookPage } from '@/components/site/pages/BookPage'

export const metadata: Metadata = {
  title: 'The Book — Keeping It Real on Commercial Real Estate',
  description:
    'Keeping It Real on Commercial Real Estate by Todd Nepola — the right answers to all your real estate questions. Every dollar of net proceeds is donated to charity.',
}

export default function Page() {
  return <BookPage />
}
