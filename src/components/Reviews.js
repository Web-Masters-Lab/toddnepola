import { StarIcon } from '@heroicons/react/20/solid'

const reviews = [
  {
    id: 1,
    title: "Straight forward advice",
    rating: 5,
    content: `
      <p>If you are just staring out or are curious about commercial real estate, this book is a great read. Todd puts it down in a plain, easy to follow writing style.</p>
    `,
    author: 'Glenn Soucy',
    date: 'March 20, 2023',
    datetime: '2023-03-20',
  },
  {
    id: 2,
    title: "Absolutely the best book I ever read on Real Estate!!",
    rating: 5,
    content: `
      <p>If you have a passion or interest in Commercial Real Estate this book is a must read! It’s simple to understand and absorb, yet has some much insightful information packed into it! I am certain it will fuel additional success in my real estate career and gave me insight to the right path to take for my personal goals. I actually wish it was longer so if Todd ever decides to write another book, I’ll be the first to buy it!!</p>
    `,
    author: 'Maksim T.',
    date: 'Feb 17, 2023',
    datetime: '2023-02-17',
  },
  {
    id: 3,
    title: "Real life advice on how to invest in Commercial Real Estate",
    rating: 5,
    content: `
      <p>I have read countless real estate book and this book has more quality real life information on one page then most have in 100 pages. This is no get rich quick scheme this is real practical advice anyone from a novice first time investor to a seasoned experienced real estate professional can benefit from. After reading Keeping it Real on Commercial Real Estate you will be eggar and well prepared to start your commercial real estate investing.</p>
    `,
    author: 'Jace',
    date: 'January 26, 2023',
    datetime: '2023-01-26',
  },
  {
    id: 4,
    title: " Engaging, Fun & Informative!",
    rating: 5,
    content: `
      <p>As a residential specialist, who has dabbled in commercial real estate, I was really looking forward to reading this book. To say it didn't disappoint is an understatement. Mr. Nepola's writing style is very engaging and it's like having a conversation with questions being answered just as you're thinking them.</p>
      <p>I've always been a fan of "I did this, and you can too" stories, and this one is no exception. Kudos to the author for being so open and willing to answer any followup questions from readers. I love working with agents/brokers who are accessible and willing to actually answer their phone (not as common as you'd think) but Mr. Nepola is leveling up. And donating all proceeds from the book to charity? Well, that is the proverbial Chef's kiss.</p>
      <p>By the time you're done reading this book you're going to want to get serious about buying, selling or investing in Commercial Real Estate. And you'll be able to, because Todd gives you the blueprint to do it.</p>
      <p>Invest in yourself, buy the book!</p>
    `,
    author: 'Shane A. Broyles',
    date: 'December 6, 2022',
    datetime: '2022-12-06',
  },
  {
    id: 5,
    title: "  A Must Read and Insights to Commercial Deals",
    rating: 5,
    content: `
      <p>Having been in the CRE business now for over 20 year and having been an investor, one would think they know it all. This book is for the beginner and the advance investor who wants to learn the ins and outs of the commercial real estate business without all the fluff of other books. This book is not trying to sell you anything or make you rich overnight. The book is real and personal with insights to the pitfalls and successes from actual experience. This book is perfect to give to your teenage kids to show them that through hard work there will be rewards. I have learned a lot from this book and will surely apply the tips to my deals. This is an easy read which one can finish in a weekend. So STOP the procrastination and hit the buy button. Your life retirement truly depends on it.</p>
    `,
    author: 'Jules',
    date: 'October 31, 2022',
    datetime: '2022-10-31',
  },
  {
    id: 6,
    title: "An excellent read and must-buy!",
    rating: 5,
    content: `
      <p>Fantastic book! Such a great read. Todd is an excellent writer and storyteller. Truly inspirational to read how he started with his first property to currently owning and managing a huge portfolio of multimillion dollar properties. He really breaks down how he did it so anyone can easily replicate what he did to become a successful CRE investor. Also, it's great that he is donating all net proceeds of the book to charity. A real class act!</p>
    `,
    author: 'Kevin V.',
    date: 'October 27, 2022',
    datetime: '2022-10-27',
  }
  // More reviews...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const Reviews = () => {
  return (
    <section className="bg-gray-200">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-4xl font-medium font-roboto_condensedBold uppercase text-primary text-gray-900">Recent reviews</h2>
        <div className="mt-6 space-y-10 divide-y divide-gray-900 border-b border-t border-gray-500 pb-10">
          {reviews.map((review) => (
            <div key={review.id} className="pt-10 lg:grid lg:grid-cols-12 lg:gap-x-8">
              <div className="lg:col-span-8 lg:col-start-5 xl:col-span-9 xl:col-start-4 xl:grid xl:grid-cols-3 xl:items-start xl:gap-x-8">
                <div className="flex items-center xl:col-span-1">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          review.rating > rating ? 'text-yellow-400' : 'text-gray-200',
                          'h-5 w-5 flex-shrink-0'
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="ml-3 text-sm text-gray-700">
                    {review.rating}
                    <span className="sr-only"> out of 5 stars</span>
                  </p>
                </div>

                <div className="mt-4 lg:mt-6 xl:col-span-2 xl:mt-0">
                  <h3 className="text-sm font-medium font-roboto_condensedBold uppercase text-gray-900">{review.title}</h3>

                  <div
                    className="mt-3 space-y-6 text-sm text-gray-500"
                    dangerouslySetInnerHTML={{ __html: review.content }}
                  />
                </div>
              </div>

              <div className="mt-6 flex items-center text-sm lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:mt-0 lg:flex-col lg:items-start xl:col-span-3">
                <p className="font-medium text-gray-900">{review.author}</p>
                <time
                  dateTime={review.datetime}
                  className="ml-4 border-l border-gray-200 pl-4 text-gray-500 lg:ml-0 lg:mt-2 lg:border-0 lg:pl-0"
                >
                  {review.date}
                </time>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
