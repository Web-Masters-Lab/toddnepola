import Image from 'next/image'

const testimonials = [
    {
      body: 'If you have a passion or interest in Commercial Real Estate this book is a must read! It’s simple to understand and absorb, yet has some much insightful information packed into it! I am certain it will fuel additional success in my real estate career and gave me insight to the right path to take for my personal goals. I actually wish it was longer so if Todd ever decides to write another book, I’ll be the first to buy it!!',
      author: {
        name: 'Maksim T.',
        handle: 'Amazon Review',
        imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
        body: 'If you are just staring out or are curious about commercial real estate, this book is a great read. Todd puts it down in a plain, easy to follow writing style.',
        author: {
          name: 'Glenn Soucy',
          handle: 'Amazon Review',
          imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        body: 'I have read countless real estate book and this book has more quality real life information on one page then most have in 100 pages. This is no get rich quick scheme this is real practical advice anyone from a novice first time investor to a seasoned experienced real estate professional can benefit from. After reading Keeping it Real on Commercial Real Estate you will be eggar and well prepared to start your commercial real estate investing. Can not recommend highly enough',
        author: {
          name: 'Jace',
          handle: 'Amazon Review',
          imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    // More testimonials...
  ]
  
  export const Testimonials = () => {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">Testimonials</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              We have worked with thousands of amazing people
            </p>
          </div>
          <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
            <div className="-mt-8 lg:flex sm:-mx-4 columns-1 sm:text-[0] md:columns-2 lg:columns-3">
              {testimonials.map((testimonial) => (
                <div key={testimonial.author.handle} className="pt-8 sm:inline-block sm:w-full sm:px-4">
                  <figure className="rounded-2xl bg-gray-50 p-8 text-sm leading-6">
                    <blockquote className="text-gray-900">
                      <p>{`“${testimonial.body}”`}</p>
                    </blockquote>
                    <figcaption className="mt-6 flex items-center gap-x-4">
                      {/* <Image height={100} width={100} className="h-10 w-10 rounded-full bg-gray-50" src={testimonial.author.imageUrl} alt="" /> */}
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.author.name}</div>
                        <div className="text-gray-600">{testimonial.author.handle}</div>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  