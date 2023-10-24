/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'i.ibb.co',
          },
          {
            protocol: 'https',
            hostname: 'cdn.tuk.dev',
          },
          {
            protocol:'https',
            hostname:'images.unsplash.com'
          },
          {
            protocol:'https',
            hostname: 'static.therealdeal.com'
          },
          {
            protocol:'https',
            hostname: 'www.leftfieldinvestors.com'
          }
        ],
      },
}

module.exports = nextConfig
