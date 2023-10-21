import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark, faCaretDown } from '@fortawesome/free-solid-svg-icons'

const navigation = [
  { name: 'About', href: '/about' },
  {
    name: 'Media',
    children: [
      { name: 'News', href: '/media/news' },
      { name: 'Podcasts', href: '/media/podcasts' },
      { name: 'Reels', href: '/media/reels' },
    ],
  },
  { name: 'Contact', href: '/contact' },
]

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="absolute z-50 w-full bg-transparent py-2 px-[5vw] font-robotoRegular">
      <nav className="flex items-center justify-center" aria-label="Global">
        <div className="flex lg:flex-1 mr-auto">
          <Link href="/">
            <span className="sr-only">Todd Nepola</span>
            <Image src="/images/logo.svg" priority width={64} height={74} alt="Logo" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded p-2.5 text-black focus-visible:outline-none focus-visible:text-primary"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <FontAwesomeIcon className="h-6 w-6" icon={faBars} />
          </button>
        </div>

        <div className="hidden lg:flex">
          {navigation.map((item) => (
            <div key={item.name} className="relative group">
              {item.children ? (
                <div className="group relative">
                  <span className="text-base leading-4 text-black cursor-pointer p-6 group-hover:text-primary duration-400">
                    {item.name}
                    <FontAwesomeIcon className="h-4 w-4 ml-1" icon={faCaretDown} />
                  </span>
                  <div className="w-full text-center absolute left-0 hidden mt-4 space-y-2 group-hover:block bg-white text-black border border-gray-200 rounded">
                    {item.children.map((child) => (
                      <a
                        key={child.name}
                        href={child.href}
                        className="block py-2 hover:bg-gray-200 rounded"
                      >
                        {child.name}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a
                  href={item.href}
                  className="text-base leading-4 text-black hover:text-primary duration-400 p-6"
                >
                  {item.name}
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="hidden lg:flex ml-[3vw] lg:justify-end">
          <a
            href="/book"
            className="text-sm bg-primary text-white font-poppinsMedium rounded duration-400 px-4 py-2 leading-6 shadow-sm hover:text-black border-[1px] border-black focus-visible:outline focus-visible:outline-offset-0 focus-visible:outline-4 focus-visible:outline-slate-500 focus-visible:bg-hover focus-visible:text-white"
          >
            Order the Book
          </a>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white py-2 px-[5vw] flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <a href="#" className="mr-auto">
              <span className="sr-only">Todd Nepola</span>
              <Image src="/images/logo.svg" priority width={64} height={74} alt="Logo" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded p-2.5 text-black"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <FontAwesomeIcon className="h-6 w-6" icon={faXmark} />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y-2 divide-primary">
              <div className="py-6">
                {navigation.map((item) => (
                  <div key={item.name} className="text-black duration-400 hover:text-primary">
                    {item.children ? (
                      <div className="text-black duration-400 hover:text-primary">
                        {item.children.map((child) => (
                          <a
                            key={child.name}
                            href={child.href}
                            className="block text-base leading-4 text-black hover-text-primary duration-400 p-3 pl-0"
                          >
                            {child.name}
                          </a>
                        ))}
                      </div>
                    ) : (
                      <a
                        href={item.href}
                        className="block text-base leading-4 text-black hover-text-primary duration-400 p-3 pl-0"
                      >
                        {item.name}
                      </a>
                    )}
                  </div>
                ))}
              </div>
              <div className="py-6">
                <a href="/book" title="Order the Book" className="-mx-3 block ">
                  <button
                    className="flex justify-start rounded px-3 py-2 h-full w-full hover:bg-gray-200 active:bg-gray-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="text-base left-0 leading-7 text-black">Order the Book</span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
