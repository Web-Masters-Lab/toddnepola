import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://toddnepola.com/sitemap.xml',
    host: 'https://toddnepola.com',
  }
}
