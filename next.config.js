/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: 'build',
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
          },
          {
            protocol:'https',
            hostname:'rodkhleif.com'
          },
          {
            protocol:'https',
            hostname: 'images.podpage.com'
          },
          {
            protocol:'https',
            hostname:'www.bestevercre.com'
          },
          {
            protocol:'https',
            hostname:'kevinbupp.com'
          },
          {
            protocol:'https',
            hostname:'www.costargroup.com'
          },
          {
            protocol:'https',
            hostname:'i.ytimg.com'
          },
        ],
      },
}

module.exports = nextConfig
