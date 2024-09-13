export const Section = () => {
    return(
        <div className="bg-[url('/images/desktop-background.png')] relative h-full bg-cover bg-center bg-no-repeat w-full py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className=" grid grid-cols-1 gap-0.5 md:grid-cols-3">
              
              <a href='/portfolio' className="z-0 relative h-36 group rounded hover:text-white text-black  bg-cover bg-no-repeat bg-center">
                <div className="w-full rounded absolute z-0 h-full bg-primary opacity-80 hover:opacity-90 transition-opacity"/>
                
                <h3 className='absolute text-base lg:group-hover:transition-all lg:group-hover:text-xl font-roboto_condensedBold z-1 h-full w-full pointer-events-none text-white hover:opacity-100  flex justify-center items-center'>
                    PORTFOLIO
                </h3>
              </a>
              
              <a href="/book" className="z-0 relative h-36 group rounded  hover:text-white text-black   bg-cover bg-no-repeat bg-center ">
                <div className="w-full rounded absolute z-0 h-full bg-white opacity-80 hover:opacity-90  transition-opacity"/>
                
                <h3 className='absolute z-1 text-xl group-hover:transition-all lg:group-hover:text-2xl font-roboto_condensedBold h-full w-full pointer-events-none text-primary hover:opacity-100  flex justify-center items-center'>
                    ORDER MY BOOK
                </h3>
              </a>
                
             
              <a href="/free-chapter" className="z-0 h-36 relative group rounded  hover:text-white text-black  bg-cover bg-no-repeat bg-bottom">
                <div className="w-full rounded absolute z-0 h-full bg-primary opacity-80 hover:opacity-90  transition-opacity"/>
                
                <h3 className='absolute z-1 h-full text-base group-hover:transition-all lg:group-hover:text-xl font-roboto_condensedBold w-full pointer-events-none text-white hover:opacity-100  flex justify-center items-center'>
                  FREE CHAPTER OF BOOK
                </h3>
              </a>
              
             
            
            </div>
            <div className=" mt-0.5 grid gap-0.5 grid-cols-1  sm:mx-0 ">
              
              <a href="" className="z-0 relative group h-36 rounded  hover:text-white text-black  bg-cover bg-no-repeat bg-center">
                <div className="w-full rounded absolute z-0 h-full bg-primary opacity-80 hover:opacity-90  transition-opacity"/>
                
                <h3 className='absolute font-roboto_condensedBold text-base group-hover:transition-all lg:group-hover:text-xl z-1 h-full w-full pointer-events-none text-white hover:opacity-100  flex justify-center items-center'>
                    CONTACT CURRENT CAPITAL
                </h3>
              </a>
              
              <a href="media/podcasts" className="z-0 relative group h-36 rounded hover:text-white text-black  bg-cover bg-no-repeat bg-bottom ">
                <div className="w-full rounded absolute z-0 h-full bg-primary opacity-80 hover:opacity-90  transition-opacity"/>
                
                <h3 className='absolute font-roboto_condensedBold text-base group-hover:transition-all lg:group-hover:text-xl z-1 h-full w-full pointer-events-none text-white hover:opacity-100  flex justify-center items-center'>
                    CHECKOUT PODCASTS
                </h3>
              </a>
            </div>
          </div>
        </div>
    )
}