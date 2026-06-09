import { MediaPage } from '@/components/site/pages/MediaPage'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  shortTitle: 'Media — News & Podcasts',
  ogTitle: 'Media — News & Podcasts | Todd Nepola',
  description:
    'News coverage, awards, and podcast appearances featuring Todd Nepola and Current Capital Real Estate Group.',
  path: '/media',
})

export default function Page() {
  return <MediaPage />
}
