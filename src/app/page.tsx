'use client'
import Image from 'next/image'
import { BookSection } from '@/components/BookSection'
import { ArticleSection } from '@/components/ArticleSection'
import { Navigation } from '@/components/Navigation'
import { Video } from '@/components/Video'

export default function Home() {
  return (
    <>
      <Navigation />
      <section className="relative h-[32rem]">
        <Video/>
      </section>


        {/* About */}
        <div className="flex flex-col items-center justify-center my-16">
        <h2 className="text-center font-roboto_condensedBold my-2 text-3xl text-primary uppercase">
          About
        </h2>
        <h1 className="text-center uppercase text-primary font-bold font-roboto_condensedBold text-5xl md:text-9xl">
          Todd Nepola
        </h1>
       
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-4">

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
          <div className="flex flex-col text-center md:text-left justify-center h-full">
            <p className=' py-2'>
            Todd Nepola is a distinguished figure known for his multifaceted accomplishments in the realms of real estate investment, property management, and philanthropy. Residing in the vibrant region of South Florida, Todd has made a significant impact on both the business and charitable communities.
            </p>
            <br/> 
            <p className='py-2'>
              As the owner and founder of Current Capital Group, Todd Nepola has demonstrated an exceptional acumen for real estate investment and property management. His expertise and strategic vision have propelled his company to success, making it a prominent player in the real estate industry.
            </p>
            <br/> 
            <p className='pb-2' >
              Beyond his professional achievements, Todd is a passionate philanthropist who actively engages in various charitable endeavors. Notably, he authored the book "Keeping It Real on Commercial Real Estate," a testament to his commitment to sharing knowledge and insights with others in the industry. What sets Todd apart is that all proceeds from the book go directly to charitable causes, exemplifying his dedication to giving back to the community.
            </p>
            <br/>
            <p className='pb-2' >
              In addition to his charitable work through literature, Todd Nepola is involved in various philanthropic areas. His commitment to making a positive impact extends to supporting numerous causes and organizations, showcasing his genuine desire to uplift those in need.
            </p>
            <p className='pb-2' >
              Todd's dedication to physical fitness is equally impressive. He has achieved remarkable feats as a finisher of the Florida Ironman and numerous other marathons and athletic events. His discipline, determination, and passion for athletics serve as an inspiration to others, emphasizing the importance of a healthy and active lifestyle.
            </p>
            <br/>  
            <p className='pt-2 pb-8'>
            In summary, Todd Nepola is a remarkable individual whose achievements span the worlds of real estate, philanthropy, and athletics. As the founder of Current Capital Group, he has solidified his position as a leading figure in the real estate industry. Simultaneously, his commitment to charity, demonstrated through his book and active involvement in various philanthropic areas, underscores his genuine desire to make a positive impact on society. Todd's athletic accomplishments serve as a testament to his discipline and determination, inspiring others to lead active and healthy lives. His presence in South Florida and contributions to multiple domains make Todd Nepola an accomplished and respected figure in his community and beyond.
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
        <span className="text-center font-roboto_condensedBold pb-16 pt-10 text-5xl text-primary">
          BUSINESS
        </span>
        <div className="grid grid-cols-1 md:grid-cols-2 mb-20 gap-8 px-4">

<div className="col-span-1">
          <div className="flex h-[12rem] md:h-auto justify-start">
            <Image
              className="object-contain"
              src="/images/CCREG.png"
              alt="Headquarters Image"
              width="256"
              height="256"
            />
            <div className="h-[12rem] flex justify-center flex-col text-primary">
              <p className="font-['Copperplate'] text-primary text-2xl">CURRENT CAPITAL</p>
              <p className="font-['Copperplate'] text-gray-500 text-2xl">REAL ESTATE GROUP</p>
            </div>
          </div>
        </div>

        <div className="col-span-1 sm:mr-8">
          <div className="flex flex-col justify-start">
          <p className='text-center sm:text-left'>
           <span className='text-xl text-primary font-roboto_condensedBold'>Current Capital Real Estate Group</span>, originally founded as TN Property Management in 1998 and rebranded as Current Capital in 2002, is a prominent player in the South Florida real estate market. Specializing in property management, development, and leasing services, the company has earned a stellar reputation for its full-service approach and top-ranked team of experienced professionals.
          </p>
          <br/>
          <p className='pt-4 text-center sm:text-left'>
          With a primary focus on the management and ownership of retail and industrial properties across the state of Florida, Current Capital distinguishes itself through its boutique-style, best-in-class service. The company's commitment to excellence is underscored by its consistent ranking as one of the top real estate firms in the region. They offer a personalized and client-centric approach, ensuring that their services meet the unique needs of their diverse portfolio of properties.
          </p>
          <br/>
          <p className='pb-8 pt-4 text-center sm:text-left'>
          With over two decades of experience, Current Capital Real Estate Group is a trusted partner in the South Florida real estate landscape, known for its expertise, integrity, and ability to deliver exceptional results in property management, development, leasing, other related real estate ventures.
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
          <h2 className="text-center uppercase font-roboto_condensedBold text-white my-2 mb-16 text-5xl ">
            Book
          </h2>
          <div className="px-4">
            <BookSection />
          </div>
        </div>


<h2 className="text-center uppercase font-roboto_condensedBold text-primary pb-10 pt-16 text-5xl ">
  Popular Articles
</h2>
<ArticleSection/>
    </>
  )
}
