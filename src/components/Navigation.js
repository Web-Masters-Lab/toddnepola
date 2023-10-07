import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { Dialog } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Our Firm', href: '/about-our-firm' },
  { name: 'Practices', href: '/practices' },
  { name: 'Testimonials', href: '/testimonials' },
  { name: 'FAQ', href: '/faq' },
]

export const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="absolute z-50 w-full bg-transparent py-6 px-[5vw]">
      <nav className="flex items-center justify-center" aria-label="Global">
        <div className="flex lg:flex-1 mr-auto">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Todd Nepola</span>
            <Image src="/images/banner.png" priority height={40} width={130} alt="Banner image" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white focus-visible:outline-none focus-visible:text-yellow-300"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <FontAwesomeIcon class="h-6 w-6" icon={faBars} />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-white hover:text-hover link link-underline link-underline-black"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex ml-[6vw] lg:justify-end">
          <a
            href="/contact"
            className="text-sm bg-primary text-white rounded  px-4 py-2 font-semibold leading-6 shadow-sm hover:bg-hover  hover:text-black focus-visible:outline focus-visible:outline-offset-0 focus-visible:outline-4 focus-visible:outline-slate-500 focus-visible:bg-hover focus-visible:text-white"
          >
            Contact Us
          </a>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Todd Nepola</span>
              <Image src="/images/banner.png" width={130} height={40} priority alt="Banner Image" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-black"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <FontAwesomeIcon class="h-6 w-6" icon={faXmark} />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y-2 divide-[#033A5B]">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a key={item.name} href={item.href} className="-mx-3 block">
                    <button
                      className="flex justify-start rounded-lg px-3 py-2 h-full w-full hover:bg-gray-200 active:bg-gray-200"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="text-base left-0 font-semibold leading-7 text-black">
                        {item.name}
                      </span>
                    </button>
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a href="/contact" title="Contact Us" className="-mx-3 block ">
                  <button
                    className="flex justify-start rounded-lg px-3 py-2 h-full w-full hover:bg-gray-200 active:bg-gray-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="text-base left-0 font-semibold leading-7 text-black">
                      Contact Us
                    </span>
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
