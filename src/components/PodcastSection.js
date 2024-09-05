import Image from 'next/image';

const posts = [
    {
      id: 1,
      title: 'Investing in the Niches with Todd Nepola',
      href: 'https://www.leftfieldinvestors.com/industrial-and-retail-real-estate-investing-in-the-niches-with-todd-nepola/',
      imageUrl:
        'https://www.leftfieldinvestors.com/wp-content/uploads/2023/02/Graphics-Episode-Art-PILF-102-Todd-Nepola-Square.jpg',
      author: {
        name: 'Jim Pfeifer',
      },
    },
    {
      id: 2,
      title: 'Making Money While You Sleep',
      href: 'https://rodkhleif.com/podcasts/making-money-while-you-sleep/',
      imageUrl:
        'https://rodkhleif.com/wp-content/uploads/2022/10/Todd-Thumbnail.jpg',
      author: {
        name: 'Rod Khleif',
      },
    },
    {
      id: 3,
      title: 'Making Money While You Sleep',
      href: 'https://www.bestevercre.com/podcast/jf2771-10-expert-tips-on-breaking-into-industrial-and-retail-ft-todd-nepola',
      imageUrl:
        'https://www.bestevercre.com/hubfs/Compressed/JF2771-10-Expert-Tips-on-Breaking-into-Industrial-and-Retail-ft.jpg#keepProtocol',
      author: {
        name: 'Ash Patel',
      },
    },
    {
      id: 4,
      title: 'Great Retail Centers Are as Relevant as Ever',
      href: 'https://www.streetsmartsuccess.com/ToddNepola/',
      imageUrl:
        'https://images.podpage.com/https%3A%2F%2Fd3t3ozftmdmh3i.cloudfront.net%2Fproduction%2Fpodcast_uploaded_episode%2F4702096%2F4702096-1654565764339-c42fe20d02883.jpg?auto=format&fill=blur&fit=fill&h=628&w=1200&s=b41c0f962be6b6e66871716f0467729d',
      author: {
        name: 'Street Smart Success',
      },
    },
    {
      id: 5,
      title: 'Finding Retail Opportunities in Today’s Market',
      href: 'https://kevinbupp.com/podcast/450-finding-retail-opportunities-in-todays-market/',
      imageUrl:
        'https://kevinbupp.com/wp-content/uploads/2022/04/Cash-Flow-STACK-300x266.png',
      author: {
        name: 'Kevin Bupp',
      },
    },
    {
      id: 6,
      title: 'He Turned $100k Into $25M',
      href: 'https://www.youtube.com/watch?v=lAOliWexJgo',
      imageUrl:
        'https://i.ytimg.com/vi/lAOliWexJgo/hqdefault.jpg',
      author: {
        name: 'School of Hard Knocks',
      },
    },
    {
      id: 7,
      title: 'How to Start Investing in Commercial Real Estate with Todd Nepola',
      href: 'https://www.youtube.com/watch?v=ObKMdL-K4Cw',
      imageUrl:
        'https://i.ytimg.com/vi/ObKMdL-K4Cw/hqdefault.jpg',
      author: {
        name: 'Commercial Real Estate Pro Network',
      },
    },
    {
      id: 8,
      title: 'Todd Nepola - Commercial Property Recommendations For Real Estate Investors',
      href: 'https://www.youtube.com/watch?v=ObKMdL-K4Cw',
      imageUrl:
        'https://i.ytimg.com/vi/1NE6zm9hDOE/maxresdefault.jpg',
      author: {
        name: 'Dwan Bent-Twyford',
      },
    },
    {
      id: 9,
      title: 'From $0 to $100+ Million Real Estate Empire - The Story of Todd Nepola',
      href: 'https://www.youtube.com/watch?v=JfIfLMXz7eU',
      imageUrl:
        'https://i.ytimg.com/vi/JfIfLMXz7eU/maxresdefault.jpg',
      author: {
        name: 'School of Hard Knocks',
      },
    },
    {
      id: 10,
      title: 'Commercial Real Estate Investing With Todd Nepola | The Ideal Hour Podcast EP 11',
      href: ' https://www.youtube.com/watch?v=dnl9l8TNCIQ',
      imageUrl:
        'https://i.ytimg.com/vi/dnl9l8TNCIQ/maxresdefault.jpg',
      author: {
        name: 'The Ideal Hour Podcast',
      },
    },
    {
      id: 11,
      title: 'Reality TV Star &amp; Real Estate Mogul Todd Nepola from Real Housewives of Miami Shares His Story!',
      href: ' https://www.youtube.com/watch?v=yrwVrAH-rfA',
      imageUrl:
        'https://i.ytimg.com/vi/yrwVrAH-rfA/maxresdefault.jpg',
      author: {
        name: 'Stroke of Success',
      },
    },
    
  ]
  
  export const PodcastSection = () => {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mt-8 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.id}
                className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-20"
              >
                <Image fill src={post.imageUrl} alt="" className="absolute inset-0 -z-10 h-full center w-full object-contain" />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
  
                <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                  {/* <time dateTime={post.datetime} className="mr-8">
                    {post.date}
                  </time> */}
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
  