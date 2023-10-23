import Image from 'next/image'
import React, { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Dropdown } from './Dropdown'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Podcasts', href: '/practices' },
  { name: 'Articles', href: '/testimonials' },
  { name: 'Contact', href: '/contact' },
]

export const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white ">
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Todd Nepola</span>
            <div className='flex'>
                <Image
                src="/images/logo.svg"
                priority
                height={83}
                width={60}
                alt="Delgado Legal Practicing Attorney"
                />
                <div className='hidden md:grid font-roboto_condensedBold bg-gradient-to-tl from-primary to-black bg-clip-text text-transparent pl-8 my-0'>
                <span className='text-3xl'>TODD</span>
                <span className='text-5xl'>NEPOLA</span>
                </div>
            </div>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black focus-visible:outline-none focus-visible:text-yellow-300"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden pl-28 lg:flex lg:gap-x-10">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-lg font-semibold leading-6 font-roboto_condensedBold text-black uppercase hover:text-hover link link-underline link-underline-black"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="/contact"
            className="text-sm bg-primary font-roboto_condensedBold uppercase text-gray-100 rounded  px-4 py-2 font-semibold leading-6 shadow-sm hover:bg-hover  hover:text-gray-800 focus-visible:outline focus-visible:outline-offset-0 focus-visible:outline-4 focus-visible:outline-slate-500 focus-visible:bg-hover focus-visible:text-black"
          >
            Order The Book
          </a>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Delgado Legal Practicing Attorney</span>
              <Image
                src="/images/logo.svg"
                height={150}
                width={60}
                priority
                alt="Delgado Legal Practicing Attorney"
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
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