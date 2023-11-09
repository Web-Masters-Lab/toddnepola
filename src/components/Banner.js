import Image from 'next/image';
import { useBreakpoint } from "../hooks/use-breakpoint"
import { useEffect } from "react"

const items = [
    {
        link:"https://www.instagram.com/lifeaccordingtotodd/?hl=en",
        text: "@lifeaccordingtotodd",
        icon: <Image src="/images/tiktok.svg" height={100} width={100} alt="TikTok" className="h-6 w-6"/>
    },
    {
        link:"https://www.tiktok.com/@todd.nepola",
        text: "@todd.nepola",
        icon: <Image src="/images/instagram.svg" height={100} width={100} alt="TikTok" className="h-6 w-6"/>
    },
    {
        link:"https://www.youtube.com/channel/UCBb9T0yL77zmLOQMhg9njNw",
        text: "@lifeaccordingtotodd",
        icon: <Image src="/images/youtube.svg" height={100} width={100} alt="TikTok" className="h-6 w-6"/>
    }
]

export const Banner = () => {
    const isDesktop = useBreakpoint("lg");
    useEffect(() => {
        window.dispatchEvent(new Event("resize"));
    }, []);
    
    if(!isDesktop){
        return(
            <div className="bg-primary flex justify-center">
                <div className="align-items inline-block lg:flex = text-center self-center md:flex-no-wrap px-6 py-2.5">
                    <div className="text-white flex justify-center my-1.5">
                        <a className=" hover:text-hover" href="mailto:michael@delgadolegalpa.com">
                            <Image src="/images/tiktok.svg" height={100} width={100} alt="TikTok" className="h-6 w-6"/>
                        </a>
                        <span className="text-white mx-12">|</span>
                        <a className=" hover:text-hover" href="tel:+1 (786) 762-2389">
                            <Image src="/images/instagram.svg" height={100} width={100} alt="TikTok" className="h-6 w-6"/>
                        </a>
                        <span className="text-white mx-12">|</span>
                        <a className=" hover:text-hover" href="https://maps.app.goo.gl/aEVBbRF9mQwFji8x6">
                            <Image src="/images/youtube.svg" height={100} width={100} alt="TikTok" className="h-6 w-6"/>
                        </a>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="bg-primary flex justify-center">
            <ul className="align-items inline-block lg:flex text-center self-center md:flex-no-wrap px-6 py-2.5">
                {items.map((item, idx)=>{
                    return(
                        <li className="text-white flex justify-center hover:text-hover my-1.5" key={idx}>
                            {item?.icon}&nbsp;
                            <a className="text-ellipsis" href={item?.link}>
                                {item?.text}
                                {idx !== items.length -1 && (<span className="text-white mx-2">|</span>)}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}