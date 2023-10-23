import Image from 'next/image'

export const Order = () => {
  return (
    <section className='container py-28'>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
        <div className="order-2 md:order-1 flex flex-col justify-center col-span-1 md:col-span-3">
          <h3 className="text-4xl bg-gradient-to-tl text-center from-primary via-blue-950 to-black bg-clip-text text-transparent font-roboto_condensedBold mb-4">
            Keeping It Real on Commercial Real Estate
          </h3>
          <p className="my-6 md:mx-24 text-center indent-8">
          Todd Nepola's highly anticipated book, "Keeping it Real on Commercial Real Estate" will answer all the questions investors need answered. 
          </p>
          <p className="mb-6 md:mx-24 text-center">
            Nepola is a seasoned veteran with over 25 year of experience as an investor, manager and developer. 
          </p>
          <p className="mb-6 md:mx-24 text-center">
          Over the years people have asked Todd questions about getting started in investing, and he realized that, many times, would-be investors ask the wrong questions, and do not focus in on what should be asked. 
          </p>
          <p className="mb-6 md:mx-24 text-center">
            You will find that Nepola's book contains all the questions that should be asked, and then answered! 
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 mt-auto">
            <a
              href="#"
              className="border-black border font-roboto_condensedBold uppercase  whitespace-nowrap w-56 bg-secondary text-black/80 text-lg text-center hover:bg-black/80 hover:text-white duration-400 py-[12px] rounded"
            >
              Read the Sample
            </a>
            <a
              href="#orderNow"
              className="border-black border font-roboto_condensedBold uppercase  bg-primary whitespace-nowrap w-56 text-white text-lg hover:bg-black/80 duration-400 py-[12px] text-center rounded"
            >
              Order Now
            </a>
          </div>
        </div>
        <div className="order-1 md:order-2 col-span-1 md:col-span-2 flex justify-center md:justify-center">
          <Image
            className="object-contain"
            src="/images/book.png"
            alt="Todd Nepola Image"
            width="320"
            height="400"
          />
        </div>
      </div>
    </section>
  )
}
