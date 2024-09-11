'use client'
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation'
import axios from 'axios';

export const FreeChapterCTA = () => {
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
    axios.post('https://api.convertkit.com/v3/forms/6146955/subscribe',{...post, "api_key": "9BgCJEvePnywSAmBE3p-1Q",})
    router.push( '/?cta=free-chapter')

  }
 
  return (
    <section action="/" onSubmit={handleSubmit} className='container py-28'>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
        <div className="order-2 md:order-1 flex flex-col justify-center col-span-1 md:col-span-3">
            <h3 className="text-4xl text-primary text-center font-roboto_condensedBold mb-4">
              Read The First Chapter For Free!
            </h3>
            <p className="my-6 md:px-24  text-2xl text-left">
            Sign up to get the first chapter of my book, <em className="font-bold text-blue-800">Keeping it Real on Commercial Real Estate </em> . 
            </p>
          <form method="POST" data-netlify="true" data-netlify-honeypot="bot-field" name="contact" className="mt-4 px-24">
              <input type="hidden" name="form-name" value="contact"/>
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                  <label htmlFor="full_name" className="block font-roboto_condensedBold uppercase text-sm font-semibold leading-6 text-primary">
                      Full Name
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="full_name"
                        id="full_name"
                        onChange={handleInput}
                        autoComplete="given-name"
                        placeholder='John Doe'
                        className="block w-full bg-white rounded-md border-0 outline-none px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  
                  <div className="sm:col-span-2">
                    <label htmlFor="email" className="block font-roboto_condensedBold uppercase text-sm font-semibold leading-6 text-primary">
                      Email
                    </label>
                    <div className="mt-2.5">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        onChange={handleInput}
                        placeholder='johndoe@gmail.com'
                        className="block w-full bg-white rounded-md border-0 px-3.5 py-2 text-black shadow-sm outline-none ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                
                  
                </div>
                <div className="flex  justify-center pt-10">
                  <button
                    type='submit'
                    className="border-black border font-roboto_condensedBold uppercase  bg-primary whitespace-nowrap w-56 text-white text-lg hover:bg-black/80 duration-400 py-[12px] text-center rounded"
                  >
                    Sign Up
                  </button>
                </div>
              </form>
          
        </div>
        <div className="order-1 md:order-2 col-span-1 md:col-span-2 flex justify-center md:justify-center">
          <Image
            className="object-contain"
            src="/images/book.png"
            alt="Todd Nepola Image"
            width="320"
            height="400"
          />
        </div>
      </div>
    </section>
  )
}
