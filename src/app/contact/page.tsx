import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

function TextInput({ label = 'input', isRequired = false, ...props }) {
  return (
    <div className="rounded relative w-full z-0 transition-all focus-within:z-10">
      <input
        type="text"
        {...props}
        placeholder={label}
        required={isRequired}
        className="placeholder:text-neutral-500 rounded block w-full h-full border border-neutral-400 bg-transparent px-6 py-8 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
      />
      <label className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-black  transition-all duration-400"></label>
    </div>
  )
}

function ContactForm() {
  return (
    <div className="lg:order-last">
      <form method="POST" data-netlify="true" name="contact_us_page" noValidate>
        <input type="hidden" name="form-name" value="contact_us_page" />
        <div className="isolate mt-6 rounded-2xl grid grid-cols-2 gap-1">
          <TextInput label="First Name" name="Fname" isRequired autoComplete="name" />
          <TextInput label="Last Name" name="Lname" isRequired autoComplete="name" />
          <TextInput label="Email" type="email" isRequired name="email" autoComplete="email" />
          <TextInput label="Phone" type="tel" name="phone" isRequired={false} autoComplete="tel" />
          <div className="col-span-2">
            <TextInput label="Message" isRequired name="message" />
          </div>
          <div className="col-span-2 w-full px-6 py-4 flex justify-center rounded">
            <button
              type="submit"
              className="rounded min-w-[40%] px-6 py-4 text-sm font-semibold transition duration-400 bg-primary text-white hover:bg-neutral-800"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

const Contact = () => {
  return (
    <div className="grid grid-cols-2 gap-10 mt-48 mb-12">
      <div className="flex flex-col items-center justify-center mb-16 col-span-2">
        <h1 className="text-center bg-gradient-to-tl from-primary via-blue-950 to-black bg-clip-text text-transparent font-bold font-roboto_condensedBold text-5xl md:text-9xl">
          GET IN TOUCH
        </h1>
        <span className="text-center my-2 text-xl">
          Some information about Todd Nepola, and why you should contact him
        </span>
      </div>

      <div className="md:pl-8 p-0 max-w-xl mx-auto col-span-2 md:col-span-1">
        <h3 className="text-5xl font-bold font-poppinsMedium">Follow</h3>
        <div className="flex">
          <a className="my-8" href="https://www.instagram.com/lifeaccordingtotodd/" target="_blank">
            <FontAwesomeIcon className="h-12 w-12" icon={faInstagram} />
          </a>
        </div>
        <h3 className="text-5xl font-bold font-poppinsMedium">Or fill the form</h3>
        <ContactForm />
      </div>
      {/* Image */}
      <div className="max-w-lg justify-self-center md:justify-self-end col-span-2 md:col-span-1">
        <Image
          className="md:rounded-r-none rounded-3xl object-contain"
          src="/images/profile.jpg"
          width="800"
          height="1530"
          alt="Todd Nepola Image"
        />
      </div>
    </div>
  )
}

export default Contact
