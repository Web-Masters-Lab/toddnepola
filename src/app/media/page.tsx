import type { Metadata } from 'next'
import { MediaPage } from '@/components/site/pages/MediaPage'

export const metadata: Metadata = {
  title: 'Media — News & Podcasts | Todd Nepola',
  description:
    'News coverage, awards, and podcast appearances featuring Todd Nepola and Current Capital Real Estate Group.',
}

export default function Page() {
  return <MediaPage />
}
