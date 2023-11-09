import Image from 'next/image';
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import classNames from 'classnames';

export const BookSection = () => {
  const [playVideo, setPlayVideo] = useState(false)
  const [isSSR, setIsSSR] = useState(true);
    
    useEffect(() => {
        setIsSSR(false);
    }, []);

  const handleVideo = (event) =>{
    event.preventDefault()
    if(playVideo){
        setPlayVideo(false)
    } else {
        setPlayVideo(true)
    }
  }

  const buttonClasses = classNames('relative p-5 z-30 rounded-full',{
    'text-2xl text-white bg-primary bg-opacity-50': !playVideo,
    'text-transparent': playVideo
})

  return (
    <section className='container'>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
        <div className="order-2 md:order-1 flex flex-col justify-center col-span-1 md:col-span-3">
          <h3 className="text-4xl text-center items-center justify-center text-white font-roboto_condensedBold mb-4">
            Keeping It Real on Commercial Real Estate
          </h3>
          <div className="bg-transparent h-[20rem] ">
          <button  className="relative flex items-center justify-center h-full w-full overflow-hidden" onClick={handleVideo}>
              <div className={buttonClasses}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                  </svg>
              </div> 
            { isSSR ? null : 
                  <ReactPlayer
                      className="absolute z-10 w-full min-w-full min-h-full max-w-none"
                      width={100}
                      height={100}
                      playing={playVideo}
                      muted={false}
                      autoPlay={false}
                      url="/videos/pagehero1.mp4"
                  />
              }
            </button>
          </div>
          <br/>
          <a
            href="/book"
            className="primaryCTA bg-white text-primary border-2 relative my-10 text-lg font-poppinsMedium hover:bg-black/80 hover:text-white duration-400 py-2 w-full text-center rounded"
          >
            Learn More
          </a>
        </div>
        <div className="hidden md:order-2 col-span-1 md:col-span-2 md:flex justify-center md:justify-end">
          <Image
            className="object-contain -ml-5"
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
