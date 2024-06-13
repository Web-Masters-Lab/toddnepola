import Image from 'next/image';

export const BookSection = () => {
 
  return (
    <section className='container'>
      <div className="container lg:pt-6 mx-auto">
                <div className="flex flex-wrap">
                    <div className="lg:w-1/2 w-full lg:pr-6">
                        {/* Remove class [ h-24 ] when adding a card block */}
                        {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}

                        
                        <div className="lg:rounded lg:h-[600px] justify-center bg-[url('/images/office_building.png')] bg-cover items-center">
                          <div className="flex justify-center items-center">
                            <Image
                              className="object-contain translate-y-20 lg:translate-y-20"
                              src="/images/book.png"
                              alt="Headquarters Image"
                              width="300"
                              height="670"
                            />
                          </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 w-full flex flex-col content-around">
                        {/* Remove class [ h-24 ] when adding a card block */}
                        {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                        <div className="lg:rounded pt-20  xl:pt-20 lg:py-10 bg-white text-primary flex flex-col content-around gap-4 h-auto lg:h-[600px] " >
                          <p className=' text-xl px-10 2xl:px-32 items-center flex'>
                            Todd Nepola&apos;s highly anticipated book, &quot;Keeping it Real on Commercial Real Estate&quot; will answer all the questions investors need answered.
                          </p>
                          <p className='text-xl px-10 2xl:px-32 items-center flex'>
                            Nepola is a seasoned veteran with over 25 year of experience as an investor, manager and developer.
                          </p>
                          <p className='text-xl px-10 2xl:px-32 items-center flex'>
                            Over the years people have asked Todd questions about getting started in investing, and he realized that, many times, would-be investors ask the wrong questions, and do not focus in on what should be asked.
                          </p>
                          <p className='text-xl px-10 2xl:px-32 items-center flex'>
                          You will find that Nepola‘s book contains all the questions that should be asked, and then answered!
                          </p>
                          <div className='flex items-center 2xl:my-8 justify-center'>
                            <a
                              href="/book"
                              className="bg-primary text-white font-roboto_condensedBold relative mt-4 mb-8 text-lg hover:bg-black/80 hover:text-white duration-400 py-2 px-8 text-center rounded-lg"
                            >
                              GET A COPY
                            </a>
                          </div>
                          
                        </div>
                    </div>
                </div>
            </div>
      <div className="grid grid-cols-1 gap-8">
        <div className="flex flex-col justify-center col-span-1">
          {/* <h2 className="text-2xl text-center md:w-[50rem] items-center justify-center text-white font-roboto_condensedBold mb-4">
          Todd Nepola&apos;s highly anticipated book, &quot;Keeping it Real on Commercial Real Estate&quot; will answer all the questions investors need answered.
          </h2>
          <Image
            className="object-contain w-full justify-center -ml-3 md:-ml-5 md:h-[40rem]"
            src="/images/book.png"
            alt="Todd Nepola Image"
            width="1200"
            height="1200"
          />
          <br/>
          <a
            href="/book"
            className="primaryCTA bg-white text-primary border-2 relative my-10 text-lg font-poppinsMedium hover:bg-black/80 hover:text-white duration-400 py-2 w-full text-center rounded"
          >
            Learn More
          </a> */}
        </div>
        {/* <div className="hidden md:order-2 col-span-1 md:col-span-2 md:flex justify-center md:justify-end">
          <Image
            className="object-contain -ml-5"
            src="/images/book.png"
            alt="Todd Nepola Image"
            width="393"
            height="400"
          />
        </div> */}
      </div>
    </section>
  )
}
