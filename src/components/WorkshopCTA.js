import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation'
import axios from 'axios';

export const WorkshopCTA = () => {

  const router = useRouter()
  const [post, setPost] = useState({
    fullname:'',
    email:''
  })

  const handleInput = (event) => {
    setPost({...post, [event.target.name]: event.target.value })
  } 

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('https://api.convertkit.com/v3/forms/6223785/subscribe',{...post, "api_key": process.env.CONVERTKIT_API_KEY,})
    router.push( '/?cta=workshop')

  }
    return (
        <div>

      <div className="relative">
        <div className="bg-blue-700 relative bg-opacity-75">
          <span className="items-center justify-center flex absolute inset-x-0 bottom-0">
            <svg className="text-white" viewBox="0 0 1160 163"><path className="text-white" fill="currentColor" d="M-164 13L-104
                39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276
                13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196
                162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"/></svg>
          </span>
        </div>
      </div>
      <div className="relative">
        <Image 
            height={500} 
            width={1200} 
            alt="" 
            src="/images/real_estate_workshop.jpeg"  
            className="absolute z-0 inset-0  object-cover bg-left w-full h-full rounded-lg shadow-lg"
            />
        <div className="bg-blue-700 relative bg-opacity-75">
          <span className="items-center justify-center flex absolute inset-x-0 -bottom-1">
            <svg className="text-white" viewBox="0 0 1160 163"><path className="text-white" fill="currentColor" d="M-164 13L-104
                39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276
                13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196
                162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"/></svg>
          </span>
          <div className="pt-16 pr-4 pb-16 pl-4 mr-auto ml-auto relative overflow-hidden sm:max-w-xl md:max-w-full
              lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col items-center justify-between xl:flex-row">
              <div className="w-full max-w-xl xl:mb-0 xl:pr-16 xl:w-7/12 mb-12">
                <div className="text-3xl font-bold leading-tight text-white max-w-lg sm:text-4xl sm:leading-none mb-6">
                  <p className="text-2xl mb-4 sm:text-3xl font-bold leading-tight text-white max-w-lg text-wrap sm:leading-none">Learn About Real Estate,</p>
                  <p className="text-3xl font-bold leading-tight text-white max-w-lg sm:text-4xl sm:leading-none">In Our Exclusive Workshop!</p>
                </div>
                <p className="text-gray-200  mb-4 max-w-xl text-xl"> Embark on a transformative real estate journey with us!&nbsp;</p>
        
                <p className="text-gray-200  mb-4 max-w-xl text-lg"> Join our dynamic workshops where I&apos;ve had the privilege of guiding individuals from across the country.</p>
    
                <p className="text-gray-200  mb-4 max-w-xl text-lg"> From enthusiastic teens to seasoned professionals, our sessions are a melting pot of inspiration.&nbsp;</p>
 
                <p className="text-gray-200  mb-4 max-w-xl text-lg">Whether you&apos;re from New York or Nevada, our vibrant community welcomes you.&nbsp;</p>

                <p className="text-gray-200  mb-4 max-w-xl text-lg">Take the leap and unlock your real estate potential with us!</p>
                
                <a href="#" aria-label="" className="inline-flex items-center group font-semibold leading-wider text-green-400
                    transition-colors duration-200 hover:text-teal-accent-700">
                  
                  <span className="items-center justify-center flex">
                  <p className="text-white group-hover:text-green-500">Learn more</p>
                    <svg className="inline-block w-3 ml-2 text-white top-10 group-hover:text-green-500" fill="currentColor" viewBox="0 0 12 12"><path
                        d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"/></svg>
                  </span>
                </a>
              </div>
              <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                <div className="bg-white rounded-2xl shadow-2xl pt-7 pr-7 pb-7 pl-7 sm:p-10">
                  <p className="text-xl font-semibold mb-4 sm:text-center sm:mb-6 sm:text-2xl">Sign Up For Our FREE Workshop</p>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-1 sm:mb-2">
                      <label htmlFor="full_name" className="inline-block mb-1 font-medium">Full Name</label>
                      <input type="text" autoComplete="on" onChange={handleInput} fontFamily="Raleway" placeholder="Full Name" className="flex-grow transition duration-200
                         appearance-none focus:border-blue-700 focus:outline-none focus:shadow-outline text-black
                          bg-white font-normal w-full h-12 text-xs border-2 border-gray-300 rounded-md pt-0 pr-4 pb-0 pl-4
                          mb-2 shadow-sm"/>
                    </div>
                    <div className="mb-1 sm:mb-2">
                      <label htmlFor="email" className="inline-block mb-1 font-medium">Email</label>
                      <input type="text" autoComplete="on" fontFamily="Raleway" placeholder="Email" className="flex-grow
                          transition duration-200 appearance-none focus:border-blue-700 focus:outline-none
                          focus:shadow-outline text-black bg-white font-normal w-full h-12 text-xs border-2
                          border-gray-300 rounded-md pt-0 pr-4 pb-0 pl-4 mb-2 shadow-sm"/>
                    </div>
                    <div className="sm:mb-4 mt-4 mb-2">
                      <button fontFamily="Arial" type="submit" className="transition duration-200 hover:bg-blue-900
                          focus:shadow-outline focus:outline-none bg-blue-700 text-white inline-flex font-bold
                          leading-wide text-medium h-12 w-full items-center justify-center pt-1 pr-6 pl-6 shadow-md
                          rounded-lg">Submit</button>
                    </div>
                    <p className="text-gray-600 text-xs sm:text-sm">We respect your privacy. Unsubscribe at any time.</p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  };