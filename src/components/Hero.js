import Image from 'next/image'

export const Hero = () => {
  return (
    <div className="relative isolate overflow-hidden h-[20rem] bg-center bg-cover bg-no-repeat bg-desktop">
      <div className="mx-auto max-w-7xl self-center flex px-6">
            <div className='grid mt-16 font-roboto_condensedBold text-white pl-8 '>
                <span className='text-lg sm:text-4xl uppercase'>About</span>
                <span className='text-3xl sm:text-6xl uppercase'>Todd</span>
                <span className='text-4xl sm:text-8xl uppercase'>Nepola</span>
            </div>
            <div className="absolute top-[5rem] right-10 w-[10rem] md:right-20  z-0 lg:w-[15rem] lg:h-[10rem] mx-auto">
                <Image src="/images/full-todd.png" alt="App screenshot"  width={200} height={100} />
            </div>
      </div>
    </div>
  )
}