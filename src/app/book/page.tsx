import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAmazon } from '@fortawesome/free-brands-svg-icons'
import { BookSection } from '@/components/BookSection'

const book = () => {
  return (
    <div className="px-4 xl:px-0 max-w-7xl mx-auto mt-48 mb-12">
      <div className="flex flex-col items-center justify-center mb-16">
        <h1 className="text-center bg-gradient-to-tl from-primary via-blue-950 to-black bg-clip-text text-transparent font-bold font-roboto_condensedBold text-5xl md:text-9xl">
          LEARN C. REAL ESTATE
        </h1>
        <span className="text-center my-2 text-xl">
          Learn the Ins and Outs of Commercial Real Estate from an Industry Expert. All Net Proceeds
          will be donated.
        </span>
      </div>

  <BookSection  />

      <div className="flex flex-col items-center justify-center mb-16 mt-32">
        <h1 className="text-center bg-gradient-to-tl from-primary via-blue-950 to-black bg-clip-text text-transparent font-bold font-roboto_condensedBold text-5xl md:text-9xl">
          WHAT IS INCLUDED
        </h1>
        <span className="text-center my-2 text-xl">
          Find out why the book is rated a perfect 5-stars everywhere
        </span>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-5">

      <div className="col-span-1 md:col-span-3">
          <div className="flex justify-end">
            <Image
              className="object-contain"
              src="/images/HQ.jpg"
              alt="Headquarters Image"
              width="775"
              height="518"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center col-span-1 md:col-span-2">
          <h2 className="text-4xl font-bold mb-4 font-poppinsMedium">
            Something about the QnA nature of the book
          </h2>
          <ul className="list-disc ml-8">
            <li className="text-lg mb-4 font-robotoRegular list-item">
              Get started with Commercial Real Estate Investment
            </li>
            <li className="text-lg mb-4 font-robotoRegular list-item">
              Get started with Commercial Real Estate Investment
            </li>
            <li className="text-lg mb-4 font-robotoRegular list-item">
              Get started with Commercial Real Estate Investment
            </li>
            <li className="text-lg mb-4 font-robotoRegular list-item">
              Get started with Commercial Real Estate Investment
            </li>
            <li className="text-lg mb-4 font-robotoRegular list-item">
              Get started with Commercial Real Estate Investment
            </li>
            <li className="text-lg mb-4 font-robotoRegular list-item">And a lot more...</li>
          </ul>
          <div className="flex items-center mt-auto">
            <a
              href="#"
              className="border-black border bg-secondary text-black/80 font-poppinsMedium text-lg w-1/2 text-center hover:bg-black/80 hover:text-white duration-400 py-[12px] rounded"
            >
              Read the Sample
            </a>
            <a
              href="#orderNow"
              className="border-black border ml-2 bg-primary text-white text-lg font-poppinsMedium hover:bg-black/80 duration-400 py-[12px] w-1/2 text-center rounded"
            >
              Order Now
            </a>
          </div>
        </div>

      </div>

      <div className="flex flex-col items-center justify-center mb-16 mt-32">
        <h1
          id="orderNow"
          className="text-center bg-gradient-to-tl from-primary via-blue-950 to-black bg-clip-text text-transparent font-bold font-roboto_condensedBold text-5xl md:text-9xl"
        >
          ORDER ONLINE NOW
        </h1>
        <span className="text-center my-2 text-xl">
          Get your copy of &quot;Keeping It Real On Commercial Real Estate&quot; below.
        </span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 my-8 gap-4 px-4">
        <a
          className="border border-neutral-300 flex items-center rounded hover:bg-black/50 hover:text-white duration-400 justify-center h-24"
          href="#"
          target="_blank"
        >
          <FontAwesomeIcon className="h-12 w-12" icon={faAmazon} />
          <p>Amazon</p>
        </a>
        <a
          className="border border-neutral-300 flex items-center rounded hover:bg-black/50 hover:text-white duration-400 justify-center h-24"
          href="#"
          target="_blank"
        >
          <FontAwesomeIcon className="h-12 w-12" icon={faAmazon} />
          <p>Amazon</p>
        </a>
        <a
          className="border border-neutral-300 flex items-center rounded hover:bg-black/50 hover:text-white duration-400 justify-center h-24"
          href="#"
          target="_blank"
        >
          <FontAwesomeIcon className="h-12 w-12" icon={faAmazon} />
          <p>Amazon</p>
        </a>
        <a
          className="border border-neutral-300 flex items-center rounded hover:bg-black/50 hover:text-white duration-400 justify-center h-24"
          href="#"
          target="_blank"
        >
          <FontAwesomeIcon className="h-12 w-12" icon={faAmazon} />
          <p>Amazon</p>
        </a>
      </div>
    </div>
  )
}

export default book
