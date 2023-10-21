import Image from 'next/image'

export const BookSection = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
        <div className="order-2 md:order-1 flex flex-col justify-center col-span-1 md:col-span-3">
          <h2 className="text-4xl font-bold mb-4 font-poppinsMedium">
            Get started with Commercial Real Estate Investment
          </h2>
          <p className="mb-6">
            Mr Todd shares authentic expert advice, insights, and strategies aimed at helping you
            get started with your own journey in the commercial real estate industry.
          </p>
          <h2 className="text-4xl font-bold mb-4 font-poppinsMedium">
            All Net Proceeds will be donated
          </h2>
          <p className="mb-6">
            The main aim of the book is to empower as many individuals as possible to achieve
            success in CRE. It&apos;s, driven by the desire to create an impact rather than profit.
            That&apos;s why every cent of the net proceeds will be donated to charity.
          </p>
          <h2 className="text-4xl font-bold mb-4 font-poppinsMedium">
            Something about the QnA nature of the book
          </h2>
          <p className="mb-6">
            Book includes stories, scenarios and has a 5 star rating everywhere{' '}
          </p>
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
