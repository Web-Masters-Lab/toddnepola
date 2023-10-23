import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { Dropdown } from './Dropdown';
import { Dialog } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark, faCaretDown } from '@fortawesome/free-solid-svg-icons'

const navigation = [
  { name: 'ABOUT', href: '/about' },
  {
    name: 'MEDIA',
    children: [
      { name: 'NEWS', href: '/media/news' },
      { name: 'PODCAST', href: '/media/podcasts' },
    ],
  },
  { name: 'CONTACT', href: '/contact' },
]

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="absolute z-50 w-full bg-transparent py-2 px-[5vw] font-robotoRegular">
      <nav className="flex mt-5 items-center justify-center" aria-label="Global">
        <div className="flex lg:flex-1 mr-auto">
          <Link className="flex" href="/">
            <span className="sr-only">Todd Nepola</span>
            <Image src="/images/logo.svg" className="h-24 w-24 md:h-36 md:w-36 lg:h-48 lg:w-48" priority width={120} height={120} alt="Logo" />
            <div className='grid font-roboto_condensedBold text-white pl-2 my-0'>
              <span className='text-4xl md:text-6xl lg:text-7xl'>TODD</span>
              <span className='text-5xl md:text-7xl lg:text-8xl'>NEPOLA</span>
            </div>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded p-2.5 text-white focus-visible:outline-none focus-visible:text-primary"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <FontAwesomeIcon className="h-6 w-6" icon={faBars} />
          </button>
        </div>

        <div className="hidden lg:flex">
          {navigation.map((item) => (
            <div key={item.name} className="relative mx-1 flex group">
              {item.children ? <Dropdown/>
               : (
                <a
                  href={item.href}
                  className="font-medium justify-center rounded-md font-roboto_condensedBold text-lg hover:text-primary duration-400 px-4 py-2 text-white  hover:bg-black hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
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
            className="bg-primary hover:bg-blue-200 hover:ring-2 hover:ring-offset-2 font-roboto_condensedBold text-lg text-white rounded duration-400 px-4 py-2 leading-6 shadow-sm hover:text-black border-[1px] border-black focus-visible:outline focus-visible:outline-offset-0 focus-visible:outline-4 focus-visible:outline-slate-500 focus-visible:bg-hover focus-visible:text-white"
          >
            ORDER THE BOOK
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
              className="-m-2.5 rounded p-2.5 text-gray-600"
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
                            className="block leading-4 text-black font-roboto_condensedBold text-lg hover:text-primary duration-400 p-3 pl-0"
                          >
                            {child.name}
                          </a>
                        ))}
                      </div>
                    ) : (
                      <a
                        href={item.href}
                        className="block text-lg leading-4 text-black font-roboto_condensedBold  hover:text-primary duration-400 p-3 pl-0"
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
                    className="flex bg-primary rounded duration-400 px-4 py-2 border-[1px] text-white hover:text-black border-black group leading-6 justify-start hover:bg-gray-200 active:bg-gray-200 hover:ring-2 hover:ring-offset-2"
                    onClick={() => setMobileMenuOpen(false)}
                    // bg-primary hover:bg-blue-200 hover:ring-2 hover:ring-offset-2 font-roboto_condensedBold text-lg text-white rounded duration-400 px-4 py-2 leading-6 shadow-sm hover:text-black border-[1px] border-black focus-visible:outline focus-visible:outline-offset-0 focus-visible:outline-4 focus-visible:outline-slate-500 focus-visible:bg-hover focus-visible:text-white
                  >
                    <span className="text-lg left-0 leading-7 font-roboto_condensedBold ">Order the Book</span>
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
