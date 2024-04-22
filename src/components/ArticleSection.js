import Image from 'next/image';

const posts = [
    {
      id: 1,
      title: 'Todd Nepola buys a pair of Palm Beach County shopping centers for $13M',
      href: 'https://therealdeal.com/miami/2022/04/13/todd-nepola-buys-a-pair-of-palm-beach-county-shopping-centers-for-13m/',
      imageUrl:
        'https://static.therealdeal.com/wp-content/uploads/2022/04/FT-Thumbnail_palm-beach-shopping-center.jpg',
      date: 'Apr 13, 2023',
      datetime: '2023-04-13',
      author: {
        name: 'Francisco Alvarado',
      },
    },
    {
      id: 2,
      title: 'South Florida commercial deals go cold',
      href: 'https://therealdeal.com/miami/2023/02/10/south-florida-commercial-deals-go-cold/',
      imageUrl:
        'https://static.therealdeal.com/wp-content/uploads/2023/02/2023-Starts-Slow-For-South-Florida-Commercial-Deals-1.jpg',
      date: 'Feb 10, 2023',
      datetime: '2023-02-10',
      author: {
        name: 'Francisco Alvarado & Katherine Kallergis',
      },
    },
    {
      id: 3,
      title: 'Todd Nepola pays $24M for Lauderdale Lakes shopping centers',
      href: 'https://therealdeal.com/miami/2022/12/21/todd-nepola-pays-24m-for-lauderdale-lakes-shopping-centers/',
      imageUrl:
        'https://static.therealdeal.com/wp-content/uploads/2022/12/FT-Thumbnail_Todd-Nepola.jpg',
      date: 'Feb 10, 2023',
      datetime: '2023-02-10',
      author: {
        name: 'Francisco Alvarado',
      },
    }
  ]
  
  export const ArticleSection = () => {
    return (
      <div className="bg-gray-200 pb-20 pt-1 sm:pb-20 sm:pt-4">
        <h2 className="text-center uppercase font-roboto_condensedBold text-primary pb-10 pt-16 text-5xl ">
          Popular Articles
      </h2>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mt-8 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.id}
                className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
              >
                <Image fill src={post.imageUrl} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
  
                <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                  <time dateTime={post.datetime} className="mr-8">
                    {post.date}
                  </time>
                  <div className="-ml-4 flex items-center gap-x-4">
                    <svg viewBox="0 0 2 2" className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
                      <circle cx={1} cy={1} r={1} />
                    </svg>
                    <div className="flex gap-x-2.5">
                      {post.author.name}
                    </div>
                  </div>
                </div>
                <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
              </article>
            ))}
          </div>
        </div>
      </div>
    )
  }
  