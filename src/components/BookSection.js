import Image from 'next/image'

export const BookSection = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
        <div className="order-2 md:order-1 flex flex-col justify-center col-span-1 md:col-span-3">
          <h3 className="text-4xl bg-gradient-to-tl from-primary via-blue-950 to-black bg-clip-text text-transparent font-roboto_condensedBold mb-4">
            Keeping It Real on Commercial Real Estate
          </h3>
          <p className="mb-6">
            Mr. Nepola shares over 25 years of real estate knowledge in this book. He answers the questions you should be asking and explains the different avenues
            of real estate investing. 
          </p>
          <h4 className="text-2xl uppercase font-bold mb-4 font-poppinsMedium">
            This book is for you if ...
          </h4>
          <ul className='ml-16 list-disc'>
            <li>You are a long term investor </li>
            <li>You are looking to begin a career in real estate</li>
            <li>You want to learn more about real estate</li>
          </ul>
          <br/>
          <h4 className="text-2xl uppercase font-bold mb-4 font-poppinsMedium">
            This book is <span className='text-red-500'>NOT</span> for you if ...
          </h4>
          <ul className='ml-16 list-disc'>
            <li>You are trying to get rich quick </li>
            <li>You dont have the tolerance for risk</li>
            <li>You dont have the patience to let your investments flourish</li>
          </ul>
          <a
            href="http://www.currentcapitalgroup.com/"
            className="primaryCTA border-2 relative my-10 text-lg font-poppinsMedium hover:bg-black/80 hover:text-white duration-400 py-2 w-full text-center rounded"
          >
            Learn More
          </a>
        </div>
        <div className="order-1 md:order-2 col-span-1 md:col-span-2 flex justify-center md:justify-end">
          <Image
            className="object-contain"
            src="/images/book.jpg"
            alt="Todd Nepola Image"
            width="333"
            height="499"
          />
        </div>
      </div>
    </>
  )
}
