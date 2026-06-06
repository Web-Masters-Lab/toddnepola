import { BookPage } from '@/components/site/pages/BookPage'
import { pageMetadata } from '@/lib/seo'

const description =
  'Keeping It Real on Commercial Real Estate by Todd Nepola — the right answers to all your real estate questions. Every dollar of net proceeds is donated to charity.'

export const metadata = pageMetadata({
  shortTitle: 'The Book — Keeping It Real on Commercial Real Estate',
  ogTitle: 'The Book — Keeping It Real on Commercial Real Estate',
  description,
  path: '/book',
})

const bookSchema = {
  '@context': 'https://schema.org',
  '@type': 'Book',
  name: 'Keeping It Real on Commercial Real Estate',
  bookFormat: 'https://schema.org/Paperback',
  inLanguage: 'en',
  image: 'https://toddnepola.com/assets/book.png',
  description,
  datePublished: '2022',
  author: { '@id': 'https://toddnepola.com/#todd' },
  about: 'Commercial real estate investing',
  offers: {
    '@type': 'Offer',
    url: 'https://store.bookbaby.com/book/keeping-it-real-on-commercial-real-estate',
    availability: 'https://schema.org/InStock',
  },
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bookSchema) }}
      />
      <BookPage />
    </>
  )
}
