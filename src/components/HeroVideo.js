import { useState } from "react";
import classNames from 'classnames';

export const HeroVideo = () => {
    const [mute, setMute] = useState(true)

    const buttonClasses = classNames('absolute bottom-12 ease-in-out z-30 flex items-center justify-center text-2xl text-white bg-primary border border-2 border-solid border-white',{
        'h-16 w-16 animate-bounce rounded-full right-5 md:right-10  ': mute,
        'h-14 scale-75 w-14 rounded-full right-5 md:right-10 ': !mute
    })

    const textClasses = classNames('grid font-roboto_condensedBold',{
        'text-white md:group-hover:text-gray-300': mute,
        'text-transparent':!mute
    })

    const overlayClasses = classNames("transition ease-in-out absolute top-0 left-0 w-full h-[44rem] bg-black",{
        'opacity-40 md:peer-hover:opacity-50': mute,
        'opacity-5': !mute
    })

    const handleVideo = (event) =>{
        event.preventDefault()
        if(mute){
            setMute(false)
        } else {
            setMute(true)
        }
        
    }

    return(
        <>
            {/* <Header/> */}
            <section className="relative">
            <button className=" w-full h-[44rem] group peer relative z-10" onClick={handleVideo}>
                <div className={textClasses}>
                    <span className='text-lg sm:text-4xl uppercase'>Why did I </span>
                    <span className='text-3xl sm:text-6xl uppercase'> write my book?</span>
                </div>
                {/* <span className="absolute whitespace-pre-line left-10 top-28 text-white text-6xl md:text-7xl font-roboto_condensedBold">
                    Why did I 
                    
                    write my book?
                </span> */}
                <div className={buttonClasses} >
                    
                    {mute ? 
                        (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
                            </svg>
                            // <span>Listen to Todd</span>
                        ) : 
                        (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.531V19.94a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.506-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.395C2.806 8.757 3.63 8.25 4.51 8.25H6.75z" />
                            </svg>
                        )

                    }

                </div>
            </button>
            
            {/* { isSSR ? null : 
                <ReactPlayer
                    className="absolute top-0 left-0 object-cover w-full h-full"
                    width={1200}
                    height={1200}
                    playing={playVideo}
                    muted={false}
                    autoPlay={false}
                    url="/videos/pagehero1.mp4"
                />
            } */}
            {/* Video */}
                <video
                autoPlay={true}
                muted={mute}
                loop
                playsInline
                disablePictureInPicture
                className="absolute top-0 left-0 object-cover w-full h-full"
                >
                    
                <source src="/videos/pagehero1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
                </video>
                    
                

                {/* Overlay */}
            <div className={overlayClasses}/>
            
            </section>
        </>
    )
}