'use client'
import Image from 'next/image'
import { BookSection } from '@/components/BookSection'
import { ArticleSection } from '@/components/ArticleSection'
import { Navigation } from '@/components/Navigation'
import { Banner } from '@/components/Banner'
import { HeroVideo } from '@/components/HeroVideo'
import { Footer } from '@/components/Footer'
import { SignUpModal } from '@/components/SignUpModal';

import { useSearchParams } from 'next/navigation'


export default function Home() {
  const searchParams = useSearchParams()
  const cta = searchParams.get('cta')
  return (
    <>
      <Banner/>
      <Navigation/>
      <HeroVideo/>
      {}
      <SignUpModal cta={cta}/>
      {/* <ConvertKitForm template="charlotte" formId={MY_FORM_ID} /> */}


        {/* About */}
        <section>
          <div className="flex flex-col items-center justify-center my-16">
            <h2 className="text-center font-roboto_condensedBold my-2 text-3xl text-primary uppercase">
              About
            </h2>
            <h1 className="text-center uppercase text-primary font-bold font-roboto_condensedBold text-5xl md:text-9xl">
              Todd Nepola
            </h1>
           </div>
           <div className=" container pt-6 mx-auto">
                <div className="flex flex-wrap">
                    <div className="lg:w-2/5 w-full lg:pb-0 lg:pr-6">
                        {/* Remove class [ h-24 ] when adding a card block */}
                        {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}

                        
                        <div className="lg:rounded h-[400px] justify-center items-center">
                          <div className="flex lg:rounded justify-center items-center  bg-[url('/images/current-capital-shopping-plaza.jpg')] bg-cover h-full">
                            <Image
                              className="object-contain animate-fade animate-fade-in absolute z-10 translate-y-4 rounded-full"
                              src="/images/square.png"
                              alt="Headquarters Image"
                              width="230"
                              height="670"
                            />
                            <Image            
                              className="translate-x-3 translate-y-4"
                              src="/images/background-blob.svg"
                              alt="Headquarters Image"
                              width="320"
                              height="670"
                            />
                          </div>
                        </div>
                    </div>
                    <div className="lg:w-3/5 w-full">
                        {/* Remove class [ h-24 ] when adding a card block */}
                        {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                        <div className="lg:rounded py-10 gap-4 lg:gap-0 grid grid-rows-2 bg-primary text-gray-300 lg:h-[400px] " >
                          <p className=' text-xl px-10 items-center flex'>
                            Todd Nepola is a distinguished figure known for his multifaceted accomplishments in the realms of real estate investment, property management, and philanthropy. Residing in the vibrant region of South Florida, Todd has made a significant impact on both the business and charitable communities.
                          </p>
                          <p className='text-xl px-10 items-center flex'>
                            As the owner and founder of Current Capital Group, Todd Nepola has demonstrated an exceptional acumen for real estate investment and property management. His expertise and strategic vision have propelled his company to success, making it a prominent player in the real estate industry.
                          </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container lg:hidden mx-auto">
                <div className="flex flex-wrap">
                    <div className="lg:w-2/5 w-full lg:pb-0 lg:pr-6">
                        {/* Remove class [ h-24 ] when adding a card block */}
                        {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}

                        
                        <div className="lg:rounded h-[400px] justify-center items-center">
                          <div className="flex lg:rounded justify-center items-center  bg-[url('/images/desktop-background.png')] bg-cover h-full">
                            <Image
                              className="object-contain absolute z-10 translate-y-4 rounded-full"
                              src="/images/contact-desktop.jpg"
                              alt="Headquarters Image"
                              width="230"
                              height="670"
                            />
                            <Image            
                              className="translate-y-2"
                              src="/images/background-blob-2.svg"
                              alt="Headquarters Image"
                              width="300"
                              height="670"
                            />
                          </div>
                        </div>
                    </div>
                    <div className="lg:w-3/5 w-full">
                        {/* Remove class [ h-24 ] when adding a card block */}
                        {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                        <div className="lg:rounded py-10 grid grid-rows-2 bg-primary text-gray-300 lg:h-[400px] " >
                          <p className='pb-2 px-10 text-xl items-center flex' >
                            Beyond his professional success, Todd is deeply committed to philanthropy. He wrote a book called &quot;Keeping It Real on Commercial Real Estate,&quot; sharing his knowledge with others. What makes Todd stand out is that all the money from the book goes to charity, reflecting his dedication to giving back.
                          </p>
                          <p className='pb-2 px-10 text-xl items-center flex' >
                            In addition to his charitable work through literature, Todd Nepola is involved in various philanthropic areas. His commitment to making a positive impact extends to supporting numerous causes and organizations, showcasing his genuine desire to uplift those in need.
                          </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container lg:pt-6 mx-auto hidden lg:block">
                <div className="flex flex-wrap">
                    <div className="lg:w-3/5 w-full pb-6 lg:pb-0 lg:pr-6">
                        {/* Remove class [ h-24 ] when adding a card block */}
                        {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                        <div className="rounded grid grid-rows-2 border-gray-300 bg-primary  text-gray-300 h-[400px]" >
                          <p className='pb-2 px-10 text-xl items-center flex' >
                          Beyond his professional success, Todd is deeply committed to philanthropy. He wrote a book called &quot;Keeping It Real on Commercial Real Estate,&quot; sharing his knowledge with others. What makes Todd stand out is that all the money from the book goes to charity, reflecting his dedication to giving back.
                          </p>
                          <p className='pb-2 px-10 text-xl items-center flex' >
                            In addition to his charitable work through literature, Todd Nepola is involved in various philanthropic areas. His commitment to making a positive impact extends to supporting numerous causes and organizations, showcasing his genuine desire to uplift those in need.
                          </p>                       
                      </div>
                    </div>
                    <div className="lg:w-2/5 w-full">
                        {/* Remove class [ h-24 ] when adding a card block */}
                        {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                        
                        <div className="rounded  h-[400px] bg-[url('/images/desktop-background.png')] bg-cover justify-center items-center">
                          <div className="flex justify-center items-center">
                            <Image
                              className="object-contain absolute z-10 translate-y-9 rounded-full"
                              src="/images/contact-desktop.jpg"
                              alt="Headquarters Image"
                              width="200"
                              height="670"
                            />
                            <Image            
                              className="translate-x-3 translate-y-7"
                              src="/images/background-blob-2.svg"
                              alt="Headquarters Image"
                              width="260"
                              height="670"
                            />
                          </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container lg:pt-6 mx-auto">
                <div className="flex flex-wrap">
                    <div className="lg:w-2/5 w-full lg:pr-6">
                        {/* Remove class [ h-24 ] when adding a card block */}
                        {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}

                        
                        <div className="lg:rounded h-[400px] justify-center bg-[url('/images/downtown_background.png')] bg-cover items-center">
                          <div className="flex justify-center items-center">
                            <Image
                              className="object-contain absolute z-10 translate-y-9 rounded-full"
                              src="/images/iron_man_todd_nepola.jpeg"
                              alt="Headquarters Image"
                              width="230"
                              height="670"
                            />
                            <Image            
                              className="translate-x-3 translate-y-5"
                              src="/images/background-blob-3.svg"
                              alt="Headquarters Image"
                              width="340"
                              height="670"
                            />
                          </div>
                        </div>
                    </div>
                    <div className="lg:w-3/5 w-full">
                        {/* Remove class [ h-24 ] when adding a card block */}
                        {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                        <div className="lg:rounded py-10 bg-primary text-gray-300 grid grid-rows-2 lg:h-[400px] " >
                          <p className=' text-xl px-10 items-center flex'>
                            Todd&apos;s dedication to physical fitness is equally impressive. He has achieved remarkable feats as a finisher of the Florida Ironman and numerous other marathons and athletic events. His discipline, determination, and passion for athletics serve as an inspiration to others, emphasizing the importance of a healthy and active lifestyle.
                          </p>
                          <p className='text-xl px-10 items-center flex'>
                          In summary, Todd Nepola is a remarkable individual whose achievements span real estate, philanthropy, and athletics. Through his company, philanthropic efforts, and athletic pursuits, Todd has made a positive impact on society and earned respect in his community and beyond.
                          </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      

          {/* <section className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-2"> */}
            {/* Remove class [ h-24 ] when adding a card block */}
            {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
            {/* <div className="rounded  z-10  hover:blur-none flex relative h-60 justify-center">
              <img src="/images/current_capital_team.jpeg" className=" bg-blue-800 bg-cover bg-no-repeat w-full h-full"></img>
              <div className="transition ease-in-out absolute top-0 left-0 w-full h-full bg-primary opacity-60"></div>
            </div> */}
            {/* Remove class [ h-24 ] when adding a card block */}
            {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
            {/* <div className="rounded relative h-60 flex justify-center"> 
              <img src="/images/current_capital_team.jpeg" className=" bg-blue-800 bg-cover bg-no-repeat w-full h-full"></img>
              <div className="transition ease-in-out absolute top-0 left-0 w-full h-full bg-primary opacity-60"/>
              <div className="absolute grid  w-full h-full">
                <h3 className='text-white flex font-roboto_condensedBold text-4xl justify-center self-center'>Hello world</h3>
                <div className='w-full justify-centerh-full'>
                <button className='text-white border-2 px-4 py-2 border-white border-solid rounded-xl'>hello world</button>
                </div>      
              </div>
            </div> */}
            {/* Remove class [ h-24 ] when adding a card block */}
            {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
            {/* <div className="rounded relative h-60 flex justify-center"> 
              <img src="/images/current_capital_team.jpeg" className=" bg-blue-800 bg-cover bg-no-repeat w-full h-full"></img>
              <div className="transition ease-in-out absolute top-0 left-0 w-full h-full bg-primary opacity-60"></div>
            </div>
          </section> */}
        {/* Business */}

        
      <div className="flex bg-[url('/images/current_capital_team.jpeg')] bg-cover bg-no-repeat bg-center flex-col items-center justify-center lg:py-10 lg:mt-20">
        {/* <span className="text-center hidden lg:block font-roboto_condensedBold py-8 lg:rounded-2xl px-8 text-5xl text-white bg-black bg-opacity-60">
         CURRENT CAPITAL REAL ESTATE
        </span> */}
        <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 lg:pt-6 lg:gap-8">
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                <div className="rounded bg-black content-center bg-opacity-60 bg-cover bg-center justify-center grid" >
                  <div className="md:h-auto justify-start flex flex-col ">
                    <Image
                      className="object-contain"
                      src="/images/CCREG.png"
                      alt="Headquarters Image"
                      width="256"
                      height="256"
                    />
                    <div className="flex justify-center flex-col text-primary">
                      <p className="font-['Copperplate'] text-white  text-2xl">CURRENT CAPITAL</p>
                      <p className="font-['Copperplate'] text-gray-300 text-2xl">REAL ESTATE GROUP</p>
                    </div>
                  </div>
                </div>
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                <div className="rounded bg-black flex flex-col gap-4 bg-opacity-60" >
                  <p className='px-10 text-white mt-4 text-center sm:text-left text-xl '>
                  With a primary focus on the management and ownership of retail and industrial properties across the state of Florida, Current Capital distinguishes itself through its boutique-style, best-in-class service. The company&apos;s commitment to excellence is underscored by its consistent ranking as one of the top real estate firms in the region. They offer a personalized and client-centric approach, ensuring that their services meet the unique needs of their diverse portfolio of properties.
                  </p>
                  <p className=' px-10 text-white text-center sm:text-left text-xl'>
                  With over two decades of experience, Current Capital Real Estate Group is a trusted partner in the South Florida real estate landscape, known for its expertise, integrity, and ability to deliver exceptional results in property management, development, leasing, other related real estate ventures.
                  </p>
                  <div className="flex items-center mb-8 mt-4 justify-center">
                      <a
                        href="http://www.currentcapitalgroup.com/"
                        className=" relative bg-white text-lg font-poppinsMedium hover:bg-primary hover:text-white duration-400 py-2 px-8 text-center rounded-lg"
                      >
                        Visit The Website
                      </a>
                  </div>
                 
                </div>
        </div>
        </div>



        {/* Book */}
        <div className="flex flex-col bg-primary items-center justify-center lg:py-16 pt-20">
          <h2 className="text-center uppercase font-roboto_condensedBold text-white my-2 mb-16 text-5xl ">
            Keeping it Real on Commerical Real Estate
          </h2>
          <div className="lg:px-4">
            <BookSection />
          </div>
        </div>



<ArticleSection/>
<Footer/>
    </>
  )
}
