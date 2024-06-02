import Image from 'next/image'

const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'About Todd', href: '/about' },
    { name: 'Book', href: '/book' },
    { name: 'Current Capital Group', href: 'https://www.currentcapitalgroup.com/' },
  ],
  media: [
    // { name: 'Reels', href: '/media/reels' },
    { name: 'News', href: '/media/news' },
    { name: 'Podcasts', href: '/media/podcasts' },
  ],
  GIT: [
    { name: 'Contact', href: '/contact' },
    { name: 'Instagram', href: 'https://www.instagram.com/lifeaccordingtotodd/' },
    { name: 'TikTok', href: 'https://www.tiktok.com/@todd.nepola' },
    { name: 'Youtube', href: 'https://www.youtube.com/channel/UCBb9T0yL77zmLOQMhg9njNw' },

  ],
}

export const Footer = () => {
  return (
    <footer className="bg-gray-300" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="md:grid md:grid-cols-5 md:gap-8 flex flex-col items-center">
          <a href="/" className="col-span-2 flex">
            <Image width={80} height={150} src="/images/logo.svg" alt="Todd Nepola Logo" />
            <div className='grid font-roboto_condensedBold text-primary pl-2 my-0'>
              <span className='text-4xl'>TODD</span>
              <span className='text-6xl '>NEPOLA</span>
            </div>
          </a>
          <div className="grid w-full mt-10 md:mt-0 col-span-3 grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-roboto_condensedBold leading-6 text-primary">MAIN</h3>
              <ul className="mt-4 space-y-4">
                {navigation.main.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm leading-6 hover:text-primary font-roboto_condensedBold text-black hover:underline underline-offset-4 duration-400"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm  leading-6 font-roboto_condensedBold text-primary">MEDIA</h3>
              <ul className="mt-4 space-y-4">
                {navigation.media.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm leading-6 text-black hover:text-primary font-roboto_condensedBold hover:underline underline-offset-4 duration-400"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 sm:mt-0 col-span-2 sm:col-span-1">
              <h3 className="text-sm font-roboto_condensedBold leading-6 text-primary">GET IN TOUCH</h3>
              <ul className="mt-4 space-y-4">
                {navigation.GIT.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm leading-6 text-black hover:text-primary font-roboto_condensedBold hover:underline underline-offset-4 duration-400"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
