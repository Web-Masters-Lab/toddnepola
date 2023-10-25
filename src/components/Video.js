
import { useState, useEffect } from "react"
import ReactPlayer from "react-player";
import classNames from 'classnames';

export const Video = () => {
    const [playVideo, setPlayVideo] = useState(false)
    const [isSSR, setIsSSR] = useState(true);
    
    useEffect(() => {
        setIsSSR(false);
    }, []);

    const buttonClasses = classNames('relative z-30 p-5  rounded-full',{
        'text-2xl text-white bg-primary bg-opacity-50': !playVideo,
        'text-transparent': playVideo
    })

    const handleVideo = (event) =>{
        event.preventDefault()
        if(playVideo){
            setPlayVideo(false)
        } else {
            setPlayVideo(true)
        }
        
    }

    return (
        <section className="bg-center bg-cover bg-no-repeat bg-desktop">
            <button className="relative flex items-center justify-center h-[30rem] w-full mb-12 overflow-hidden" onClick={handleVideo}>
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
        </section>
            
    )
}