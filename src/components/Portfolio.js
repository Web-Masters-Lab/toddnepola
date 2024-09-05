import classNames from 'classnames'
import Image from 'next/image'


const portfolio = [{
    address:"4402-4678 N University Dr Lauderhill, Florida",
    commentary:"This was a property I got under contract in January of 2020. The purchase price was $12,750,000. Weeks later the Covid pandemic hit; everyone thought I should cancel the deal, but I was still confident in the property and the location. Although it was delayed, we did close in June 2020. We are currently renovating the center and have been extremely happy with the performance of the property. In fact, I would not sell it for double what I paid. Sometimes you have to take risks and be confident in your abilities!",
    gallery:[{
        image:'investment1_1.jpg',
        href:"image1_1"
    },{
        image:'investment1_2.jpg',
        href:"image1_2"
    },{
        image:'investment1_3.jpg',
        href:"image1_3"
    },{
        image:'investment1_4.jpg',
        href:"image1_4"
    },{
        image:'investment1_5.jpg',
        href:"image1_5"
    },{
        image:'investment1_6.jpg',
        href:"image1_6"
    },]
},{
    address:"660 N State Road 7 Plantation, Florida",
    commentary:"This is a property I purchased for $1,165,000 in October 2014. It was a very outdated medical building, but it had a lot of potential. We renovated the interior and exterior and made it more inviting for people to visit. Once renovations were completed, we got tenants like Sherwin Williams paint and Metro PCS along with several medical users. I sold the center in September 2018 for $3,200,000. I really did not want to sell, but the offer was too good to pass up. I used my sale proceeds to buy more properties. The buyer of this deal has done very well since also and it’s certainly worth much more than the price they paid me in 2018.",
    gallery:[{
        image:'investment2_1.jpg',
        href:"image2_1"
    },{
        image:'investment2_2.jpg',
        href:"image2_2"
    },{
        image:'investment2_3.jpg',
        href:"image2_3"
    },{
        image:'investment2_4.jpg',
        href:"image2_4"
    }]
},{
    address:"6005-6091 University Drive Plaza N University Dr. Tamarac, Florida",
    commentary:"Purchased this 21,180 square foot center May 2018 for $3,000,000. At the time of purchase, it was 75% vacant with the only tenant being an Applebee’s restaurant. We leased most of the vacant space to Family Dollar and the remainder to some smaller users. In December 2019, we sold the property for $4,300,000. Nearly a 45% increase in just 18 months. Since financing was used to purchase the property, our return on capital invested doubled. No improvements were made, just brought the building to 100% occupancy.",
    gallery:[{
        image:'investment3_1.jpeg',
        href:"image3_1"
    },{
        image:'investment3_2.jpeg',
        href:"image3_2"
    },{
        image:'investment3_3.jpeg',
        href:"image3_3"
    },{
        image:'investment3_4.jpeg',
        href:"image3_4"
    },{
        image:'investment3_5.jpeg',
        href:"image3_5"
    },{
        image:'investment3_6.jpeg',
        href:"image3_6"
    },{
        image:'investment3_7.jpeg',
        href:"image3_7"
    }]
},{
    address:"3500-3530 State Road 7 Miramar, Florida",
    commentary:"This was a deal we purchased for $1,200,000 in 2005. Early in my career! After reading a book on how to buy properties with no money down, I found and closed here. It was two buildings and, yes, one was actually a set of Tee Pees. We received grant funding from the city for several hundred thousand dollars and completely renovated the property. We still own the property today and it’s been a thriving deal for us.",
    gallery:[{
        image:'investment4_1.jpg',
        href:"image4_1"
    },]
}]

const Investments = () => {
    
    return portfolio.map((investment, idx)=>{
        const contentClass = classNames('xl:col-span-2  lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl  lg:px-8',{
            'lg:col-start-1': idx % 2 === 0,
            'lg:col-start-2': idx % 2 === 1,
        })

        const imageClass = classNames('mx-auto w-[15rem] md:w-[35rem]  lg:sticky  lg:top-4 lg:row-span-2 lg:row-start-1 lg:overflow-hidden',{
            'lg:col-start-2': idx % 2 === 0,
            'lg:col-start-1': idx % 2 === 1,
        })
        return(
            <div key={idx} className='grid grid-cols-1 lg:grid-cols-2'>
                <div className={contentClass}>
                    <div className="lg:pr-4">
                        <div className="lg:max-w-lg">
                            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 font-roboto_condensedBold sm:text-4xl">{investment.address}</h1>
                            <p className="mt-6 text-xl leading-8 text-gray-700">
                                {investment.commentary}
                            </p>
                        </div>
                    </div>
                </div>
                <div className={imageClass}>
                    <div className="carousel relative w-full max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-full">
                        {investment.gallery.map((item, idx) => {
                            return(
                                <div key={idx} className="carousel-item  w-full">
                                    <Image
                                    height={300}
                                    width={584}
                                    id={item.href}
                                    src={`/images/${item.image}`}
                                    alt="Burger" 
                                    className='w-full h-full'
                                    />
                                </div>   
                            )
                        })}
                        
                    </div>
                    {(investment.gallery.length > 1) && (
                        <div className="flex w-full relative z-30 bottom-14  justify-center align-center gap-2">
                            {investment.gallery.map((item, idx) => {
                                return(<a key={idx} href={`#${item.href}`} className="rounded h-6 w-6 border-[1px] border-black border-solid text-md items-center text-gray-300 font-roboto_condensedBold cursor-pointer justify-center flex bg-primary">{idx+1}</a>)
                            })}
                        </div>  
                    )}
                   

                </div>                
            </div>
        )
    })
}
export const Portfolio = () => {
  return (
    <div className="relative overflow-hidden bg-white px-6 py-24 sm:py-32  lg:px-0">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none  grid-rows-1 lg:items-start lg:gap-y-10">
        <Investments/>
      </div>
    </div>
  )
}
