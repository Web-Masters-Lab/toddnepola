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
import { ContactSection } from '@/components/ContactSection';

const Contact = () => {
  return (
    <>
    <Navigation/>
    <ContactSection/>
    </>
  )
}

export default  Contact