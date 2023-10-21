import Image from 'next/image'
import { BookSection } from '@/components/BookSection'

export default function Home() {
  return (
    <>
            {/* Hero */}
      <section className="relative h-screen">
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
        <div className="absolute top-0 left-0 w-full h-screen bg-gradient-to-r from-white/60 via-white/20 to-white/60 "></div>


        {/* Text */}
        <div className="relative z-10 flex flex-col justify-end h-full py-[10vh] px-[5vw] max-w-screen-lg text-neutral-950">
          <h1 className="text-6xl md:text-9xl font-roboto_condensedBold">Todd T. Nepola</h1>
          <span className="ml-4 my-6 text-xl">
          25+ Years of Experience in Commercial Real Estate
        </span>
        </div>
      </section>


        {/* About */}
        <div className="flex flex-col items-center justify-center my-16">
        <h1 className="text-center bg-gradient-to-tl from-primary via-blue-950 to-black bg-clip-text text-transparent font-bold font-roboto_condensedBold text-5xl md:text-9xl">
          ABOUT
        </h1>
        <span className="text-center my-2 text-xl">
          Todd T. Nepola
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 mb-16 gap-8 px-14">

<div className="col-span-1 md:col-span-2">
          <div className="flex justify-center">
            <Image
              className="object-contain"
              src="/images/profile.jpg"
              alt="Headquarters Image"
              width="350"
              height="670"
            />
          </div>
        </div>

        <div className="col-span-1 md:col-span-2 mr-8">
          <div className="flex flex-col justify-center max-w-[75%] h-full">
          <ul className="list-disc mt-8 ml-8">
            <li className="text-2xl mb-4 font-robotoRegular list-item">
            President and founder of Current Capital Real Estate Group.
            </li>
            <li className="text-2xl mb-4 font-robotoRegular list-item">
            Author of the highly anticipated book, &quot;Keeping it Real on Commercial Real Estate&quot;
            </li>
            <li className="text-2xl mb-4 font-robotoRegular list-item">
            Award Winning Real Estate Investor
            </li>
            <li className="text-2xl mb-4 font-robotoRegular list-item">
            Award Winning Real Estate Investor
            </li>
          </ul>

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
      <div className="flex flex-col items-center justify-center my-16 mt-48">
        <h1 className="text-center bg-gradient-to-tl from-primary via-blue-950 to-black bg-clip-text text-transparent font-bold font-roboto_condensedBold text-5xl md:text-9xl">
          BUSINESS
        </h1>
        <span className="text-center my-2 text-xl">
          Current Capital Real Estate Group
        </span>
      </div>

<div className="grid grid-cols-1 md:grid-cols-2 mb-32 gap-8 px-4">

<div className="col-span-1">
          <div className="flex justify-start">
            <Image
              className="object-contain"
              src="/images/CCREG.png"
              alt="Headquarters Image"
              width="256"
              height="256"
            />
            <div className="h-64 flex justify-center flex-col">
              <p className="text-primary font-poppinsMedium text-2xl">CURRENT CAPITAL</p>
              <p className="text-black font-poppinsMedium text-2xl">REAL ESTATE GROUP</p>
            </div>
          </div>
        </div>

        <div className="col-span-1 mr-8">
          <div className="flex flex-col justify-start">
          <h2 className="text-4xl font-bold mb-4 font-poppinsMedium">
            We are specialized in commercial and residential real estate
          </h2>
          <ul className="list-disc ml-8 flex flex-wrap">
            <li className="text-lg mb-4 font-robotoRegular w-1/2 list-item">
            INVESTMENT
            </li>
            <li className="text-lg mb-4 font-robotoRegular w-1/2 list-item">
            MANAGEMENT
            </li>
            <li className="text-lg mb-4 font-robotoRegular w-1/2 list-item">
            DEVELOPMENT
            </li>
            <li className="text-lg mb-4 font-robotoRegular w-1/2 list-item">
            BROKERAGE
            </li>
            <li className="text-lg mb-4 font-robotoRegular w-1/2 list-item">And a lot more...</li>
          </ul>

          <div className="flex items-center mt-auto">
          <a
  href="http://www.currentcapitalgroup.com/"
  className="primaryCTA border-2 relative ml-2 text-lg font-poppinsMedium hover:bg-black/80 hover:text-white duration-400 py-2 w-full text-center rounded"
>
  Visit The Website
</a>


          </div>
          
          </div>
        </div>

</div>

        {/* Book */}
        <div className="flex flex-col items-center justify-center my-16 mt-32">
        <h1 className="text-center bg-gradient-to-tl from-primary via-blue-950 to-black bg-clip-text text-transparent font-bold font-roboto_condensedBold text-5xl md:text-9xl">
          BOOK
        </h1>
        <span className="text-center my-2 text-xl">
          Keeping It Real on Commercial Real Estate
        </span>
      </div>

<div className="px-4 my-16">
<BookSection />
</div>
    </>
  )
}
