import Image from 'next/image'

export const BookSection = () => {
  return (
    <section className='container'>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
        <div className="order-2 md:order-1 flex flex-col justify-center col-span-1 md:col-span-3">
          <h3 className="text-4xl text-center text-white font-roboto_condensedBold mb-4">
            Keeping It Real on Commercial Real Estate
          </h3>
          <p className="mb-6 text-white">
            Mr. Nepola shares over 25 years of real estate knowledge in this book. He answers the questions you should be asking and explains the different avenues
            of real estate investing. 
          </p>
          <h4 className="text-2xl uppercase font-bold mb-4 font-poppinsMedium text-white">
            This book is for you if ...
          </h4>
          <ul className='ml-8 text-white list-disc'>
            <li>You are a long term investor </li>
            <li className='py-2'>You are looking to begin a career in real estate</li>
            <li>You want to learn more about real estate</li>
          </ul>
          <br/>
          <h4 className="text-2xl text-white uppercase pt-8 font-bold mb-4 font-poppinsMedium">
            This book is <span className='text-red-500'>NOT</span> for you if ...
          </h4>
          <ul className='ml-8 text-white list-disc'>
            <li>You are trying to get rich quick </li>
            <li className='py-2' >You dont have the tolerance for risk</li>
            <li>You dont have the patience to let your investments flourish</li>
          </ul>
          <a
            href="http://www.currentcapitalgroup.com/"
            className="primaryCTA bg-white text-primary border-2 relative my-10 text-lg font-poppinsMedium hover:bg-black/80 hover:text-white duration-400 py-2 w-full text-center rounded"
          >
            Learn More
          </a>
        </div>
        <div className="order-1 md:order-2 col-span-1 md:col-span-2 flex justify-center md:justify-end">
          <Image
            className="object-contain"
            src="/images/book.png"
            alt="Todd Nepola Image"
            width="393"
            height="400"
          />
        </div>
      </div>
    </section>
  )
}
