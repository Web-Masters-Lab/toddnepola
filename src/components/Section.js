export const Section = () => {
    return(
        <div className="bg-[url('/images/ft-lauderdale_beach2.png')] relative h-full bg-cover bg-center bg-no-repeat w-full py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className=" grid grid-cols-1 gap-0.5 md:grid-cols-3">
              
              <a href='/workshop' className="z-0 relative h-36 group rounded hover:text-white text-black  bg-[url('/images/ft-lauderdale_beach.webp')] bg-cover bg-no-repeat bg-center">
                <div className="w-full rounded absolute z-0 h-full bg-primary opacity-60 hover:opacity-30 transition-opacity"/>
                
                <h3 className='absolute text-base group-hover:transition-all group-hover:text-xl font-roboto_condensedBold z-1 h-full w-full pointer-events-none text-white hover:opacity-100  flex justify-center items-center'>
                    REAL ESTATE WORKSHOP
                </h3>
              </a>
              
              <a href="/book" className="z-0 relative h-36 group rounded  hover:text-white text-black  bg-[url('/images/business_background.jpg')] bg-cover bg-no-repeat bg-center bg-primary">
                <div className="w-full rounded absolute z-0 h-full bg-white opacity-90 hover:opacity-70 transition-opacity"/>
                
                <h3 className='absolute z-1 text-xl group-hover:transition-all group-hover:text-2xl font-roboto_condensedBold h-full w-full pointer-events-none text-primary hover:opacity-100  flex justify-center items-center'>
                    GET THE BOOK
                </h3>
              </a>
                
             
              <a href="/free-chapter" className="z-0 h-36 relative group rounded  hover:text-white text-black  bg-[url('/images/ft-lauderdale_beach3.webp')] bg-cover bg-no-repeat bg-bottom bg-primary">
                <div className="w-full rounded absolute z-0 h-full bg-primary opacity-80 hover:opacity-50 transition-opacity"/>
                
                <h3 className='absolute z-1 h-full text-base group-hover:transition-all group-hover:text-xl font-roboto_condensedBold w-full pointer-events-none text-white hover:opacity-100  flex justify-center items-center'>
                  FREE CHAPTER OF BOOK
                </h3>
              </a>
              
             
            
            </div>
            <div className=" mt-0.5 grid gap-0.5 grid-cols-1  sm:mx-0 ">
              
              <a href="" className="z-0 relative group h-36 rounded  hover:bg-primary hover:text-white text-black  bg-[url('/images/ft-lauderdale_beach4.jpeg')] bg-cover bg-no-repeat bg-center bg-primary">
                <div className="w-full rounded absolute z-0 h-full bg-primary opacity-70 hover:opacity-50 transition-opacity"/>
                
                <h3 className='absolute font-roboto_condensedBold text-base group-hover:transition-all group-hover:text-xl z-1 h-full w-full pointer-events-none text-white hover:opacity-100  flex justify-center items-center'>
                    CONTACT CURRENT CAPITAL
                </h3>
              </a>
              
              <a href="media/podcasts" className="z-0 relative group h-36 rounded hover:bg-primary hover:text-white text-black  bg-[url('/images/hardrock.jpeg')] bg-cover bg-no-repeat bg-bottom bg-primary">
                <div className="w-full rounded absolute z-0 h-full bg-primary opacity-70 hover:opacity-50 transition-opacity"/>
                
                <h3 className='absolute font-roboto_condensedBold text-base group-hover:transition-all group-hover:text-xl z-1 h-full w-full pointer-events-none text-white hover:opacity-100  flex justify-center items-center'>
                    CHECKOUT PODCASTS
                </h3>
              </a>
            </div>
          </div>
        </div>
    )
}