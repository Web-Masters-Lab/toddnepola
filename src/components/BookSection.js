import Image from 'next/image';

export const BookSection = () => {
 
  return (
    <section className='container'>
      <div className="grid grid-cols-1 gap-8">
        <div className="flex flex-col justify-center col-span-1">
          <h2 className="text-2xl text-center md:w-[50rem] items-center justify-center text-white font-roboto_condensedBold mb-4">
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
          </a>
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
