'use client'
import React from "react";
import Image from "next/image";
import {Navigation} from "@/components/Navigation"

const About = () => {
    return (
        <>
            <Navigation/>
            <div className=" bg-white 2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            
            <div className="relative">
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="w-full h-full flex flex-col justify-center items-center bg-indigo-700 bg-opacity-20 text-white sm:px-12 px-6 rounded-md">
                        <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7">Discover about us</h2>
                        <svg className="mt-8 cursor-pointer hover:bg-gray-200 hover:bg-opacity-20 rounded-md" width="72" height="48" viewBox="0 0 72 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="71" height="47" rx="5.5" stroke="white" />
                            <path d="M31 16V32L44 24L31 16Z" fill="white" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
                <div>
                    <Image height={200} width={200} className="rounded-md lg:block hidden w-full" src="https://i.ibb.co/17q26WL/qw.png" alt="A person Coding" />
                    <Image height={200} width={200} className="rounded-md lg:hidden sm:block hidden w-full" src="https://i.ibb.co/pZX8cKM/Rectangle-122-1.png" alt="A person Coding" />
                    <Image height={200} width={200} className="rounded-md sm:hidden block w-full" src="https://i.ibb.co/b3YLqxC/Rectangle-122.png" alt="A person Coding" />
                </div>
            </div>

            <div className="lg:mt-14 sm:mt-7 mt-14">
                <div className="flex lg:flex-row flex-col items-center">
                    <div className="w-full px-20 lg:w-7/12">
                        <h2 className="lg:text-4xl text-3xl lg:leading-9 leading-7 bg-gradient-to-tl from-primary via-blue-700 to-black bg-clip-text text-transparent font-bold font-roboto_condensedBold">Todd's Story</h2>
                        <p className="pr-6 font-normal text-base leading-6 text-gray-600 mt-6 w-full xl:w-9/12">As President and founder of Current Capital Group, Mr. Nepola is responsible for the company's vision and long-term strategic plans. Mr. Nepola follows three generations of real estate investors and developers of commercial real estate. His paternal great-grandfather came to Manhattan from Italy in 1899. He was a superintendent for over 40 years responsible for building the Holland tunnel and several of Manhattan's subway lines. Mr. Nepola's grandfather and father also were real estate investors and developers. </p>
                        <p className="pr-6 font-normal text-base leading-6 text-gray-600 w-full xl:w-9/12 mt-6">Mr. Nepola graduated from the University of South Florida in 1994. While pursuing a career in Investment Banking, Mr. Nepola followed in his family's footsteps and started acquiring investment properties and developing properties for himself. After a decade of buying, building, leasing and managing his own properties, Todd made a decision to open up his own firm. With properties throughout Florida, Mr. Nepola has opened a second office in Port St Lucie, FL in order to be even more accessible.</p>
                        <p className="pr-6 font-normal text-base leading-6 text-gray-600 w-full xl:w-9/12 mt-6">He has been recognized as a winner of CoStars "Power Broker" award, in addition to being a member of the international council of shopping centers (ICSC). With over two decades of "hands-on" experience in acquisitions, development, leasing and management of commercial real estate, Mr. Nepola is proud to lead Current Capital Group. Mr. Nepola resides in Miami Fl with his wife Alexia Nepola and is the proud father of two beautiful daughters. He is active in social and philanthropic organizations within the area. In addition, he is an active triathlete and a finisher of the Ironman triathlon.</p>
                    </div>
                    <div className="lg:pt-16 xl:pt-0 cursor-pointer w-full lg:w-5/12 lg:mt-0 sm:mt-10 mt-8">
                        <div className="w-full grid sm:grid-cols-2 grid-cols-1">
                            {/* <!-- Company Founded --> */}
                            <div className="pb-5 border-r-2 border-gray-200">
                                <div className="flex justify-between">
                                    <div className="w-auto">
                                        <h2 className="-mt-2 font-semibold text-xl leading-5 text-gray-800">1972</h2>
                                        <p className="font-normal text-base leading-6 text-gray-600 mt-2">Born in Staten Island, New York</p>
                                    </div>
                                    <div className="-mt-1 -mr-2">
                                        <svg width="60" height="12" viewBox="0 0 60 12" fill="white" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="54" cy="6" r="5.5" stroke="#4338CA" />
                                            <circle cx="42" cy="6" r="1.5" stroke="#4338CA" />
                                            <circle cx="18" cy="6" r="1.5" stroke="#4338CA" strokeOpacity="0.3" />
                                            <circle cx="34" cy="6" r="1.5" stroke="#4338CA" strokeOpacity="0.7" />
                                            <circle cx="10" cy="6" r="1.5" stroke="#4338CA" strokeOpacity="0.2" />
                                            <circle cx="26" cy="6" r="1.5" stroke="#4338CA" strokeOpacity="0.5" />
                                            <circle cx="2" cy="6" r="1.5" stroke="#4338CA" strokeOpacity="0.1" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div></div>

                            {/* <!-- 500k For Responsiveness STARTS--> */}
                            <div className="sm:hidden block pb-5 border-r-2 border-gray-200">
                                <div className="flex justify-between">
                                    <div className="w-auto">
                                        <h2 className="font-semibold text-xl leading-5 text-gray-800">1980</h2>
                                        <p className="font-normal text-base leading-6 text-gray-600 mt-2">Move to Miami, FL</p>
                                    </div>
                                    <div className="mt-1 -mr-2">
                                        <svg width="60" height="12" viewBox="0 0 60 12" fill="white" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="54" cy="6" r="5.5" stroke="#4338CA" />
                                            <circle cx="42" cy="6" r="1.5" stroke="#4338CA" />
                                            <circle cx="18" cy="6" r="1.5" stroke="#4338CA" strokeOpacity="0.3" />
                                            <circle cx="34" cy="6" r="1.5" stroke="#4338CA" strokeOpacity="0.7" />
                                            <circle cx="10" cy="6" r="1.5" stroke="#4338CA" strokeOpacity="0.2" />
                                            <circle cx="26" cy="6" r="1.5" stroke="#4338CA" strokeOpacity="0.5" />
                                            <circle cx="2" cy="6" r="1.5" stroke="#4338CA" strokeOpacity="0.1" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- 500k For Responsiveness ENDS--> */}

                            <div className="border-r-2 border-gray-200"></div>

                            {/* <!-- 500k monthly Views --> */}

                            <div className="sm:block hidden pb-7">
                                <div className="flex justify-between">
                                    <div className="-mt-1 -ml-2">
                                        <svg className="" width="60" height="12" viewBox="0 0 60 12" fill="white" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="6" cy="6" r="5.5" transform="rotate(-180 6 6)" stroke="#4338CA" />
                                            <circle cx="18" cy="6" r="1.5" transform="rotate(-180 18 6)" stroke="#4338CA" />
                                            <circle cx="42" cy="6" r="1.5" transform="rotate(-180 42 6)" stroke="#4338CA" strokeOpacity="0.3" />
                                            <circle cx="26" cy="6" r="1.5" transform="rotate(-180 26 6)" stroke="#4338CA" strokeOpacity="0.7" />
                                            <circle cx="50" cy="6" r="1.5" transform="rotate(-180 50 6)" stroke="#4338CA" strokeOpacity="0.2" />
                                            <circle cx="34" cy="6" r="1.5" transform="rotate(-180 34 6)" stroke="#4338CA" strokeOpacity="0.5" />
                                            <circle cx="58" cy="6" r="1.5" transform="rotate(-180 58 6)" stroke="#4338CA" strokeOpacity="0.1" />
                                        </svg>
                                    </div>
                                    <div className="ml-auto w-auto">
                                        <h2 className="-mt-2 font-semibold text-xl leading-5 text-right text-gray-800">1980</h2>
                                        <p className="font-normal text-base leading-6 text-right text-gray-600 mt-2">Move to Miami, FL</p>
                                    </div>
                                </div>
                            </div>

                            <div></div>

                            {/* <!-- 200k Users For Responsiveness STARTS--> */}

                            <div className="sm:hidden block pb-5 border-r-2 border-gray-200">
                                <div className="flex justify-between">
                                    <div className="w-auto">
                                        <h2 className="-mt-2 font-semibold text-xl leading-5 text-gray-800">1994</h2>
                                        <p className="font-normal text-base leading-6 text-gray-600 mt-2">Graduated in University of South Florida</p>
                                    </div>
                                    <div className="-mt-1 -mr-2">
                                        <svg width="60" height="12" viewBox="0 0 60 12" fill="white" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="54" cy="6" r="5.5" stroke="#4338CA" />
                                            <circle cx="42" cy="6" r="1.5" stroke="#4338CA" />
                                            <circle cx="18" cy="6" r="1.5" stroke="#4338CA" strokeOpacity="0.3" />
                                            <circle cx="34" cy="6" r="1.5" stroke="#4338CA" strokeOpacity="0.7" />
                                            <circle cx="10" cy="6" r="1.5" stroke="#4338CA" strokeOpacity="0.2" />
                                            <circle cx="26" cy="6" r="1.5" stroke="#4338CA" strokeOpacity="0.5" />
                                            <circle cx="2" cy="6" r="1.5" stroke="#4338CA" strokeOpacity="0.1" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- 200k Users For Responsiveness ENDS--> */}

                            <div></div>

                            {/* <!-- 200k Users --> */}

                            <div className="sm:block hidden pb-5 border-r-2 border-gray-200">
                                <div className="flex justify-between">
                                    <div className="w-auto">
                                        <h2 className="font-semibold text-xl leading-5 text-gray-800">1994</h2>
                                        <p className="font-normal text-base leading-6 text-gray-600 mt-2">Graduated in University of South Florida</p>
                                    </div>
                                    <div className="mt-1 -mr-2">
                                        <svg width="60" height="12" viewBox="0 0 60 12" fill="white" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="54" cy="6" r="5.5" stroke="#4338CA" />
                                            <circle cx="42" cy="6" r="1.5" stroke="#4338CA" />
                                            <circle cx="18" cy="6" r="1.5" stroke="#4338CA" strokeOpacity="0.3" />
                                            <circle cx="34" cy="6" r="1.5" stroke="#4338CA" strokeOpacity="0.7" />
                                            <circle cx="10" cy="6" r="1.5" stroke="#4338CA" strokeOpacity="0.2" />
                                            <circle cx="26" cy="6" r="1.5" stroke="#4338CA" strokeOpacity="0.5" />
                                            <circle cx="2" cy="6" r="1.5" stroke="#4338CA" strokeOpacity="0.1" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div></div>

                            {/* <!-- 200+ Team For Responsiveness STARTS--> */}

                            <div className="sm:hidden block pb-5 border-r-2 border-gray-200">
                                <div className="flex justify-between">
                                    <div className="w-auto">
                                        <h2 className="font-semibold text-xl leading-5 text-gray-800">1998</h2>
                                        <p className="font-normal text-base leading-6 text-gray-600 mt-2">Purchased first commercial property</p>
                                    </div>
                                    <div className="mt-1 -mr-2">
                                        <svg width="60" height="12" viewBox="0 0 60 12" fill="white" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="54" cy="6" r="5.5" stroke="#4338CA" />
                                            <circle cx="42" cy="6" r="1.5" stroke="#4338CA" />
                                            <circle cx="18" cy="6" r="1.5" stroke="#4338CA" strokeOpacity="0.3" />
                                            <circle cx="34" cy="6" r="1.5" stroke="#4338CA" strokeOpacity="0.7" />
                                            <circle cx="10" cy="6" r="1.5" stroke="#4338CA" strokeOpacity="0.2" />
                                            <circle cx="26" cy="6" r="1.5" stroke="#4338CA" strokeOpacity="0.5" />
                                            <circle cx="2" cy="6" r="1.5" stroke="#4338CA" strokeOpacity="0.1" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- 200+ Team For Responsiveness ENDS--> */}

                            <div className="border-r-2 border-gray-200"></div>

                            {/* <!-- 200+ Team --> */}
                            

                            <div className="sm:block hidden pb-5">
                                <div className="flex justify-between">
                                    <div className="-mt-1 -ml-2">
                                        <svg className="" width="60" height="12" viewBox="0 0 60 12" fill="white" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="6" cy="6" r="5.5" transform="rotate(-180 6 6)" stroke="#4338CA" />
                                            <circle cx="18" cy="6" r="1.5" transform="rotate(-180 18 6)" stroke="#4338CA" />
                                            <circle cx="42" cy="6" r="1.5" transform="rotate(-180 42 6)" stroke="#4338CA" strokeOpacity="0.3" />
                                            <circle cx="26" cy="6" r="1.5" transform="rotate(-180 26 6)" stroke="#4338CA" strokeOpacity="0.7" />
                                            <circle cx="50" cy="6" r="1.5" transform="rotate(-180 50 6)" stroke="#4338CA" strokeOpacity="0.2" />
                                            <circle cx="34" cy="6" r="1.5" transform="rotate(-180 34 6)" stroke="#4338CA" strokeOpacity="0.5" />
                                            <circle cx="58" cy="6" r="1.5" transform="rotate(-180 58 6)" stroke="#4338CA" strokeOpacity="0.1" />
                                        </svg>
                                    </div>
                                    <div className="ml-auto w-auto">
                                        <h2 className="-mt-2 w-auto font-semibold text-xl leading-5 text-right text-gray-800">1998</h2>
                                        <p className="w-auto font-normal text-base leading-6 text-gray-600 text-right mt-2">Purchased first commercial property</p>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- 200+ Team For Responsiveness STARTS--> */}

                            <div className=""></div>

                            <div className="sm:hidden block pb-5 border-r-2 border-gray-200">
                                <div className="flex justify-between">
                                    <div className="w-auto">
                                        <h2 className="font-semibold text-xl leading-5 text-gray-800">2002</h2>
                                        <p className="font-normal text-base leading-6 text-gray-600 mt-2">Founded Current Capital Real Estate Group</p>
                                    </div>
                                    <div className="mt-1 -mr-2">
                                        <svg width="60" height="12" viewBox="0 0 60 12" fill="white" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="54" cy="6" r="5.5" stroke="#4338CA" />
                                            <circle cx="42" cy="6" r="1.5" stroke="#4338CA" />
                                            <circle cx="18" cy="6" r="1.5" stroke="#4338CA" strokeOpacity="0.3" />
                                            <circle cx="34" cy="6" r="1.5" stroke="#4338CA" strokeOpacity="0.7" />
                                            <circle cx="10" cy="6" r="1.5" stroke="#4338CA" strokeOpacity="0.2" />
                                            <circle cx="26" cy="6" r="1.5" stroke="#4338CA" strokeOpacity="0.5" />
                                            <circle cx="2" cy="6" r="1.5" stroke="#4338CA" strokeOpacity="0.1" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            


                            <div className="sm:hidden block pb-5 border-r-2 border-gray-200">
                                <div className="flex justify-between">
                                    <div className="w-auto">
                                        <h2 className="font-semibold text-xl leading-5 text-gray-800">2022</h2>
                                        <p className="font-normal text-base leading-6 text-gray-600 mt-2"> Current Capital Real Estate becomes top leasing firm in Broward County </p>
                                    </div>
                                    <div className="mt-1 -mr-2">
                                        <svg width="60" height="12" viewBox="0 0 60 12" fill="white" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="54" cy="6" r="5.5" stroke="#4338CA" />
                                            <circle cx="42" cy="6" r="1.5" stroke="#4338CA" />
                                            <circle cx="18" cy="6" r="1.5" stroke="#4338CA" strokeOpacity="0.3" />
                                            <circle cx="34" cy="6" r="1.5" stroke="#4338CA" strokeOpacity="0.7" />
                                            <circle cx="10" cy="6" r="1.5" stroke="#4338CA" strokeOpacity="0.2" />
                                            <circle cx="26" cy="6" r="1.5" stroke="#4338CA" strokeOpacity="0.5" />
                                            <circle cx="2" cy="6" r="1.5" stroke="#4338CA" strokeOpacity="0.1" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div></div>


{/* <!-- 200k Users --> */}

<div className="sm:block hidden pb-5 border-r-2 border-gray-200">
    <div className="flex justify-between">
        <div className="w-auto">
            <h2 className="font-semibold text-xl leading-5 text-gray-800">2002</h2>
            <p className="font-normal text-base leading-6 text-gray-600 mt-2">Founded Current Capital Real Estate Group</p>
        </div>
        <div className="mt-1 -mr-2">
            <svg width="60" height="12" viewBox="0 0 60 12" fill="white" xmlns="http://www.w3.org/2000/svg">
                <circle cx="54" cy="6" r="5.5" stroke="#4338CA" />
                <circle cx="42" cy="6" r="1.5" stroke="#4338CA" />
                <circle cx="18" cy="6" r="1.5" stroke="#4338CA" strokeOpacity="0.3" />
                <circle cx="34" cy="6" r="1.5" stroke="#4338CA" strokeOpacity="0.7" />
                <circle cx="10" cy="6" r="1.5" stroke="#4338CA" strokeOpacity="0.2" />
                <circle cx="26" cy="6" r="1.5" stroke="#4338CA" strokeOpacity="0.5" />
                <circle cx="2" cy="6" r="1.5" stroke="#4338CA" strokeOpacity="0.1" />
            </svg>
        </div>
    </div>
</div>
<div></div>
<div></div>
<div className="sm:block hidden pb-5">
                                <div className="flex justify-between">
                                    <div className="-mt-1 -ml-2">
                                        <svg className="" width="60" height="12" viewBox="0 0 60 12" fill="white" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="6" cy="6" r="5.5" transform="rotate(-180 6 6)" stroke="#4338CA" />
                                            <circle cx="18" cy="6" r="1.5" transform="rotate(-180 18 6)" stroke="#4338CA" />
                                            <circle cx="42" cy="6" r="1.5" transform="rotate(-180 42 6)" stroke="#4338CA" strokeOpacity="0.3" />
                                            <circle cx="26" cy="6" r="1.5" transform="rotate(-180 26 6)" stroke="#4338CA" strokeOpacity="0.7" />
                                            <circle cx="50" cy="6" r="1.5" transform="rotate(-180 50 6)" stroke="#4338CA" strokeOpacity="0.2" />
                                            <circle cx="34" cy="6" r="1.5" transform="rotate(-180 34 6)" stroke="#4338CA" strokeOpacity="0.5" />
                                            <circle cx="58" cy="6" r="1.5" transform="rotate(-180 58 6)" stroke="#4338CA" strokeOpacity="0.1" />
                                        </svg>
                                    </div>
                                    <div className="ml-auto w-auto">
                                        <h2 className="-mt-2 w-auto font-semibold text-xl leading-5 text-right text-gray-800">2022</h2>
                                        <p className="w-auto font-normal text-base leading-6 text-gray-600 text-right mt-2">Current Capital Real Estate becomes top leasing firm in Broward County </p>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default About;
