/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
"use client"
import { Navigation } from '@/components/Navigation'
import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'

const Contact = () => {
  return (
    <>
    <Navigation/>
      <div className="relative isolate bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-20">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-gray-500 mb-10">Contact Us</h2>
            <iframe title="Google Maps location of Double R Vending" className="rounded-3xl my-9 h-full shadow border-0 block" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3588.612193893161!2d-80.30703319999999!3d25.9151162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9a530f6acc763%3A0x7ad3a5fdfd291c3f!2s6500%20Cow%20Pen%20Rd%20STE%20304%2C%20Miami%20Lakes%2C%20FL%2033014!5e0!3m2!1sen!2sus!4v1696298588222!5m2!1sen!2sus" width="300" height="300" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            <dl className="mt-10 space-y-4 text-base leading-7 text-gray-800">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <BuildingOffice2Icon className="h-7 w-6 text-gray-800" aria-hidden="true" />
                </dt>
                <dd>
                  6500 Cow Pen Rd
                  <br />
                  Miami Lakes, FL 33014
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <PhoneIcon className="h-7 w-6 text-gray-800" aria-hidden="true" />
                </dt>
                <dd>
                  <a className="hover:text-gray-300" href="tel:+1 (786) 762-2389">
                  +1 (786) 762-2389
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <EnvelopeIcon className="h-7 w-6 text-gray-800" aria-hidden="true" />
                </dt>
                <dd>
                  <a className="hover:text-gray-300" href="mailto:michael@delgadolegalpa.com">
                    michael@delgadolegalpa.com
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <form action="#" method="POST" name="contact" netlify className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
        <input type="hidden" name="form-name" value="contact" />
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-500">
                  First name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 bg-gray-200 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-500">
                  Last name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 bg-white/90 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-500">
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 bg-white/90 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-500">
                  Phone number
                </label>
                <div className="mt-2.5">
                  <input
                    type="tel"
                    name="phone-number"
                    id="phone-number"
                    autoComplete="tel"
                    className="block w-full rounded-md border-0 bg-white/90 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-500">
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="block w-full rounded-md border-0 bg-white/90 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                    defaultValue={''}
                  />
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                className="rounded-md bg-primary px-3.5 py-2.5 text-center text-sm font-semibold text-gray-100 shadow-sm hover:bg-yellow-300 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-300 focus-visible:bg-yellow-300 focus-visible:text-black"
              >
                Send message
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default  Contact