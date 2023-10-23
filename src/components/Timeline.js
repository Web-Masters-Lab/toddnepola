import React, { useRef, useState } from "react";
import Image from 'next/image'
// eslint-disable-next-line
import "swiper/css/bundle";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation"

// import Swiper core and required modules
import SwiperCore, {
  Navigation
} from 'swiper';

import "../styles/styles.css"

// install Swiper modules
SwiperCore.use([Navigation]);


const Timeline = () => {
  return (
    
    <>
     <div className="relative py-12">
     
      <div className="relative flex flex-col items-center lg:justify-center py-12 lg:py-12 md:py-12  bg-white mx-auto  lg:px-6 md:px-6 px-4 lg:max-w-[1440px] md:max-w-[744px] max-w-[375px]">
       
        <div className="mt-6 mainDiv ">
          <Swiper
            slidesPerView={'auto'} slidesPerGroupSkip={3} grabCursor={true} loopFillGroupWithBlank={true} loop={true}
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }}

          breakpoints={{
           // when window width is >= 320px
            "320": {
                slidesPerView: 1,
            spaceBetween: 24,
            },
            // when window width is >= 480px
            "480": {
                slidesPerView: 1,
            spaceBetween: 24,
            },
            // when window width is >= 640px
            "640": {
                slidesPerView: 1,
            spaceBetween: 24,
            },
            "1024": {
            slidesPerView: 1,
            spaceBetween: 32,
            slidesPerGroup: 1,
            },
            "1336": {
            slidesPerView: 1,
            spaceBetween: 32
            }
          }}
           className="swiper mySwiper">
              <SwiperSlide className="swiper-slide ">
              <div>
  <div className="block w-full gap-8 sm:hidden lg:flex lg:justify-center md:hidden">
    <div className="relative flex items-end justify-start gap-7 ">
      <div className="absolute top-0 flex flex-col justify-start">
        <p className="mb-4 text-4xl font-normal leading-10 text-gray-800">Create Your Own Attire,<br /> <span className="font-semibold">Effortlessly Stylish </span> </p>
        <p className="text-base leading-normal text-gray-800">Our products always keep you stand out of the rest. Become the trend setter <br /> with our unique products.</p>
      </div>
      <Image width="100" height="100" className="blacck" src="/book.jpg" alt="blackshow-lg-mini" />
      <Image width="100" height="100" className="shirt" src="/book.jpg" alt="shirt-lg-mini" />
    </div>
    <div aria-label="girl-lg-pic">
      <Image width="100" height="100" className="gg" src="/book.jpg" alt="girl-lg-large" />
    </div>
  </div>
  <div className="hidden w-full lg:hidden md:block">
    <div className="flex flex-col justify-start w-full mb-8 ">
      <p className="mb-4 text-3xl font-normal leading-10 text-gray-800">Create Your Own Attire, <span className="font-semibold">Effortlessly Stylish </span> </p>
      <p className="text-base leading-normal text-gray-800">Our products always keep you stand out of the rest. Become the trend setter with our unique products.</p>
    </div>
    <Image width="100" height="100" src="/book.jpg" alt="girl-md" />
  </div>
  <div className="block w-full lg:hidden md:hidden">
    <div className="flex flex-col justify-start w-full mb-8 ">
      <p className="mb-4 text-3xl font-normal leading-10 text-gray-800">Create Your Own Attire,<span className="font-semibold">Effortlessly Stylish </span> </p>
      <p className="text-base leading-normal text-gray-800">Our products always keep you stand out of the rest. Become the trend setter with our unique products.</p>
    </div>
    <Image width="100" height="100" src="/book.jpg" alt="girl-sm" />
  </div>
</div>


              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
              <div>
  <div className="block w-full gap-8 sm:hidden lg:flex lg:justify-center md:hidden">
    <div className="relative flex items-end justify-start gap-8 ">
      <div className="absolute top-0 flex flex-col justify-start w-full">
        <p className="mb-4 text-4xl font-normal leading-10 text-gray-800">Create Your Own Attire,<br /> <span className="font-semibold">Effortlessly Stylish </span> </p>
        <p className="text-base leading-normal text-gray-800">Our products always keep you stand out of the rest. Become the trend setter <br /> with our unique products.</p>
      </div>
      <Image width="100" height="100" className="blacck" src="/book.jpg"alt="blackshow-lg-mini" />
      <Image width="100" height="100" className="shirt" src="/book.jpg" alt="girl-lg-mini" />
    </div>
    <div aria-label="girl-lg-pic">
      <Image width="100" height="100" className="gg" src="/book.jpg" alt="shirt-lg-large" />
    </div>
  </div>
  <div className="hidden w-full lg:hidden md:block">
    <div className="flex flex-col justify-start w-full mb-8 ">
      <p className="mb-4 text-3xl font-normal leading-10 text-gray-800">Create Your Own Attire, <span className="font-semibold">Effortlessly Stylish </span> </p>
      <p className="text-base leading-normal text-gray-800">Our products always keep you stand out of the rest. Become the trend setter with our unique products.</p>
    </div>
    <Image width="100" height="100" src="/book.jpg" alt="shirt-md" />
  </div>
  <div className="block w-full lg:hidden md:hidden">
    <div className="flex flex-col justify-start w-full mb-8 ">
      <p className="mb-4 text-3xl font-normal leading-10 text-gray-800">Create Your Own Attire,<span className="font-semibold">Effortlessly Stylish </span> </p>
      <p className="text-base leading-normal text-gray-800">Our products always keep you stand out of the rest. Become the trend setter with our unique products.</p>
    </div>
    <Image width="100" height="100" src="/book.jpg" alt="shoe-sm" />
  </div>
                 </div>


              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
              <div>
  <div className="block w-full gap-8 sm:hidden lg:flex lg:justify-center md:hidden">
    <div className="relative flex items-end justify-start gap-8 ">
      <div className="absolute top-0 flex flex-col justify-start w-full">
        <p className="mb-4 text-4xl font-normal leading-10 text-gray-800">Create Your Own Attire,<br /> <span className="font-semibold">Effortlessly Stylish </span> </p>
        <p className="text-base leading-normal text-gray-800">Our products always keep you stand out of the rest. Become the trend setter <br /> with our unique products.</p>
      </div>
      <Image width="100" height="100" className="blacck" src="/book.jpg" alt="girl-lg-mini" />
      <Image width="100" height="100" className="shirt" src="/book.jpg" alt="shirt-lg-mini" />
    </div>
    <div aria-label="girl-lg-pic">
      <Image width="100" height="100" className="gg" src="/book.jpg"alt="shoe-lg-large" />
    </div>
  </div>
  <div className="hidden w-full lg:hidden md:block">
    <div className="flex flex-col justify-start w-full mb-8 ">
      <p className="mb-4 text-3xl font-normal leading-10 text-gray-800">Create Your Own Attire, <span className="font-semibold">Effortlessly Stylish </span> </p>
      <p className="text-base leading-normal text-gray-800">Our products always keep you stand out of the rest. Become the trend setter with our unique products.</p>
    </div>
    <Image width="100" height="100" src="/book.jpg" alt="shoe-md" />
  </div>
  <div className="block w-full lg:hidden md:hidden">
    <div className="flex flex-col justify-start w-full mb-8 ">
      <p className="mb-4 text-3xl font-normal leading-10 text-gray-800">Create Your Own Attire,<span className="font-semibold">Effortlessly Stylish </span> </p>
      <p className="text-base leading-normal text-gray-800">Our products always keep you stand out of the rest. Become the trend setter with our unique products.</p>
    </div>
    <Image width="100" height="100" src="/book.jpg" alt="shirt-sm" />
  </div>
             </div>

              </SwiperSlide>
            </Swiper>
        
         



          </div>
        

    <div className="max-w-[1062px] w-full">
  <div className="relative justify-between hidden lg:block md:hidden">
    <div/>
    <div className="relative flex justify-start w-full mt-16 lg:mt-6 md:mt-16 ">
      <button className="relative text-base font-medium leading-none text-white py-4 px-14 bg-gray-800 lg:max-w-[200px] w-full hover:bg-gray-700 transform duration-300">Shop Now
        <svg className="absolute top-[18px] lg:right-6 md:right-64 right-24" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.33301 8H12.6663" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M10 10.6667L12.6667 8" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M10 5.33203L12.6667 7.9987" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
    <div>
      <button aria-label="back" onclick className="swiper-button-prev ">
        <svg className width={10} height={18} viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M9.96616 2.25115L3.21616 9.00115L9.96616 15.7511L8.37517 17.3421L0.0341797 9.00115L8.37517 0.660156L9.96616 2.25115Z" fill="#242424" />
        </svg>
      </button>
      <button aria-label="next" onclick className=" swiper-button-next">
        <svg className="" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M8.62517 3.66016L16.9662 12.0011L8.62517 20.3421L7.03418 18.7511L13.7842 12.0011L7.03418 5.25115L8.62517 3.66016Z" fill="#242424" />
        </svg>
      </button>
    </div>
  </div>
  <div className="relative justify-between block lg:hidden md:block">
    <div />
    <div className="relative flex justify-start w-full mt-16 lg:mt-6 md:mt-16 ">
      <button className="relative text-base font-medium leading-none text-white py-4 px-14 bg-gray-800 lg:max-w-[200px] w-full hover:bg-gray-700 transform duration-300">Shop Now
        &nbsp;&nbsp; <svg className="arr absolute top-[18px] lg:right-6 md:right-[275px] right-24" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.33301 8H12.6663" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M10 10.6667L12.6667 8" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M10 5.33203L12.6667 7.9987" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
    <div>
      <button aria-label="back" onclick className="swiper-button-prev ">
        <svg className width={10} height={18} viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M9.96616 2.25115L3.21616 9.00115L9.96616 15.7511L8.37517 17.3421L0.0341797 9.00115L8.37517 0.660156L9.96616 2.25115Z" fill="#242424" />
        </svg>
      </button>
      <button aria-label="next" onclick className=" swiper-button-next">
        <svg className="" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M8.62517 3.66016L16.9662 12.0011L8.62517 20.3421L7.03418 18.7511L13.7842 12.0011L7.03418 5.25115L8.62517 3.66016Z" fill="#242424" />
        </svg>
      </button>
    </div>
  </div>
</div>

        
        </div>
      </div>

    </>
  )
}

export { Timeline };