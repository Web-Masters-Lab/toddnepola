import Image from 'next/image'
import React, { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Dropdown } from './Dropdown'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'News Articles', href:'/media/news'},
  { name: 'Podcasts', href:'/media/podcasts'},
  { name: 'Contact', href: '/contact' },
]

export const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white ">
      <nav className="flex items-center justify-between p-4 mx-2 md:mx-8 md:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/" className="p-1.5">
            <span className="sr-only">Todd Nepola</span>
            <div className='flex'>
                <Image
                src="/images/logo.svg"
                priority
                height={83}
                width={60}
                alt="Delgado Legal Practicing Attorney"
                />
                <div className='grid font-roboto_condensedBold text-primary pl-2 my-0'>
                <span className='text-2xl md:text-3xl'>TODD</span>
                <span className='text-4xl md:text-5xl'>NEPOLA</span>
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
            item.children ? <div key={item.name} className='relative' ><Dropdown dark/></div> :
            <a
              key={item.name}
              href={item.href}
              className="px-4 text-center uppercase text-lg font-roboto_condensedBold group justify-center rounded-md py-2 hover:text-white font-medium text-primary hover:bg-black hover:bg-opacity-30 hover:transition hover:duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="/book"
            className="text-lg bg-primary font-roboto_condensedBold uppercase whitespace-nowrap text-gray-100 rounded  px-4 py-2 font-semibold leading-6 shadow-sm hover:bg-hover  hover:text-white hover:bg-black focus-visible:outline focus-visible:outline-offset-0 focus-visible:outline-4 focus-visible:outline-slate-500 focus-visible:bg-hover focus-visible:text-black"
          >
            Order The Book
          </a>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-300 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Delgado Legal Practicing Attorney</span>
              <div className='flex'>
                <Image
                  src="/images/logo.svg"
                  height={150}
                  width={60}
                  priority
                  alt="Delgado Legal Practicing Attorney"
                />
                <div className='grid font-roboto_condensedBold text-primary pl-2 my-0'>
                  <span className='text-2xl md:text-3xl'>TODD</span>
                  <span className='text-4xl md:text-5xl'>NEPOLA</span>
                </div>
              </div>
              
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
            <div className="-my-6 divide-y-2 divide-gray-500">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a key={item.name} href={item.href} className="-mx-3 block">
                    <button
                      className="flex justify-start rounded-lg px-3 py-2 h-full w-full hover:bg-gray-200 active:bg-gray-200"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="text-base font-roboto_condensedBold uppercase left-0 font-semibold leading-7 text-primary">
                        {item.name}
                      </span>
                    </button>
                  </a>
                ))}
              </div>
              <div className="py-6">
              <a href="/book" title="Order the Book" className="block ">
                  <button
                    className="flex bg-primary rounded duration-400 px-4 py-2 border-[1px] text-white hover:text-black border-black group leading-6 justify-start hover:bg-gray-200 active:bg-gray-200 hover:ring-2 hover:ring-offset-2"
                    onClick={() => setMobileMenuOpen(false)}
                    // bg-primary hover:bg-blue-200 hover:ring-2 hover:ring-offset-2 font-roboto_condensedBold text-lg text-white rounded duration-400 px-4 py-2 leading-6 shadow-sm hover:text-black border-[1px] border-black focus-visible:outline focus-visible:outline-offset-0 focus-visible:outline-4 focus-visible:outline-slate-500 focus-visible:bg-hover focus-visible:text-white
                  >
                    <span className="text-lg left-0 uppercase leading-7 font-roboto_condensedBold ">Order the Book</span>
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