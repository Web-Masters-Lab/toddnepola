'use client'
import Image from 'next/image'
import { BookSection } from '@/components/BookSection'
import { Articles } from '@/components/Articles'
import { Header } from '@/components/Header'

export default function Home() {
  return (
    <>
      <Header />
            {/* Hero */}
      <section className="relative h-[44rem]">
        {/* Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          disablePictureInPicture={true}
          className="absolute top-0 left-0 object-cover w-full h-full"
        >
          <source src="/videos/pagehero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-[44rem] bg-gradient-to-r from-black/60 via-black/20 to-black/60 "/>


        {/* Text */}
        {/* <div className="relative z-10 flex flex-col justify-end h-full py-[10vh] px-[5vw] max-w-screen-lg text-neutral-950">
          <h1 className="text-6xl md:text-9xl font-roboto_condensedBold">Todd T. Nepola</h1>
          <span className="ml-4 my-6 text-xl">
            25+ Years of Experience in Commercial Real Estate
          </span>
        </div> */}
      </section>


        {/* About */}
        <div className="flex flex-col items-center justify-center my-16">
        <h2 className="text-center font-roboto_condensedBold my-2 text-3xl bg-gradient-to-tl from-primary via-blue-950 to-black bg-clip-text text-transparent uppercase">
          About
        </h2>
        <h1 className="text-center uppercase bg-gradient-to-tl from-primary via-blue-950 to-black bg-clip-text text-transparent font-bold font-roboto_condensedBold text-5xl md:text-9xl">
          Todd Nepola
        </h1>
       
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-14">

<div className="col-span-1 md:col-span-2">
          <div className="flex justify-center">
            <Image
              className="object-contain rounded-full"
              src="/images/square.png"
              alt="Headquarters Image"
              width="350"
              height="670"
            />
          </div>
        </div>

        <div className="col-span-1 flex md:col-span-2 md:mr-8">
          <div className="flex flex-col text-center md:text-left justify-center max-w-[75%] h-full">
            <p className=' py-2'>
                Todd Nepola is the President and founder of Current Capital Real Estate Group. He is responsible for the over seeing the company&lsquo;s vision and long-term strategic plans.
            </p>
            <br/> 
            <p className='py-2'>
              Mr. Nepola follows three generations of real estate investors and developers of commercial real estate. He decided to follow his family&lsquo;s footsteps, and after a decade of buying, building, leasing, and managing his own properties, Mr.Nepola decided to open up his own firm. 
            </p>
            <br/> 
            <p className='pb-2' >
              Mr Nepola has been recognized as a winner of CoStars &ldquo;Power Broker&ldquo; award, in addition to being a member of the international coucil of shopping centers (ICSC).
            </p>
            <br/> 
            <p className='pt-2 pb-8'>
              Mr. Nepola resides in Miami, FL with his wife Alexia Nepola and is the proud father of two beautiful girls and two stepsons.
            </p>
          <div className="flex items-center mt-auto">
             
            <a
              href="/about"
              className="primaryCTA border-2 relative ml-2 text-lg font-poppinsMedium hover:bg-black/80 hover:text-white duration-400 py-2 w-full text-center rounded"
            >
              Read More
            </a>


          </div>
          </div>   </div>   </div>   
        

        {/* Business */}
      <div className="flex bg-gray-100 flex-col items-center justify-center py-10 mt-20">
        <span className="text-center font-roboto_condensedBold py-20 text-5xl bg-gradient-to-tl from-primary via-blue-950 to-black bg-clip-text text-transparent">
          BUSINESS
        </span>
        <div className="grid grid-cols-1 md:grid-cols-2 mb-20 gap-8 px-4">

<div className="col-span-1">
          <div className="flex justify-start">
            <Image
              className="object-contain"
              src="/images/CCREG.png"
              alt="Headquarters Image"
              width="256"
              height="256"
            />
            <div className="h-64 flex justify-center flex-col bg-gradient-to-tl from-primary via-blue-950 to-black bg-clip-text text-transparent">
              <p className="font-['Copperplate'] text-blue-900 text-2xl">CURRENT CAPITAL</p>
              <p className="font-['Copperplate'] text-gray-500 text-2xl">REAL ESTATE GROUP</p>
            </div>
          </div>
        </div>

        <div className="col-span-1 mr-8">
          <div className="flex flex-col justify-start">
          <p>
           <span className='text-xl text-black font-roboto_condensedBold'>Current Capital Real Estate Group</span> is a boutique real estate investment firm committed to delivering the highest level of service in the <em className='text-primary'>development</em>, <em className='text-primary'>management</em>, and <em className='text-primary'>leasing</em> of income producing commercial and residential real estate. 
          </p>
          <br/>
          <p className='pb-8 pt-2'>
          Our focus ranges from new <em className='text-primary'>construction</em>, <em className='text-primary'>existing properties</em>, <em className='text-primary'>rental</em> and <em className='text-primary'>commercial properties</em>. We recognize each property and owner has their individual needs, so we make sure to deliver a unique experience to meet and exceed their standards. 
          </p>
          <br/>
          <div className="flex items-center mt-auto">
          <a
            href="http://www.currentcapitalgroup.com/"
            className="primaryCTA border-2 relative ml-2 bg-white text-lg font-poppinsMedium hover:bg-black/80 hover:text-white duration-400 py-2 w-full text-center rounded"
          >
            Visit The Website
          </a>


          </div>
          
          </div>
        </div>

</div>
      </div>



        {/* Book */}
        <div className="flex flex-col bg-primary items-center justify-center py-16 pt-20">
          <h2 className="text-center uppercase font-roboto_condensedBold text-white my-2 text-5xl ">
            Book
          </h2>
          <div className="px-4 my-16">
            <BookSection />
          </div>
        </div>


<h2 className="text-center uppercase font-roboto_condensedBold bg-gradient-to-tl from-primary via-blue-950 to-black bg-clip-text text-transparent my-10 text-5xl ">
  Latest Articles
</h2>
<Articles/>
    </>
  )
}
