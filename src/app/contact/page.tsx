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
import { ContactSection } from '@/components/ContactSection';
import { Banner } from '@/components/Banner'

const Contact = () => {
  return (
    <>
    <Banner/>
    <Navigation/>
    <ContactSection/>
    </>
  )
}

export default  Contact