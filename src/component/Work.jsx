import React from 'react'
import ecommerce from './Assets/ecoommerce.jpg'
import newsapp from './Assets/news-app.jpg'
import textutils from './Assets/text-utils.jpg'


export const Work = () => {
  return (
    <div name="Work" className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'> 
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Work</p>
                <p className='py-6 '>// Check out some of my recent work</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                <div style={{backgroundImage: `url(${ecommerce})`}}  className='flex shadow-lg shadow-[#040c16] group container rounded-md justify-center items-center mx-auto content-div'>

                    {/* Hover effects */}

                    <div className='flex flex-col opacity-0 group-hover:opacity-100 justify-center items-center'>
                        <span className='text-2xl font-bold text-white bg-[#525d8d63] tracking-wider'>
                           
                           React JS Application
                        </span>
                        <div>
               
                            <a href="https://ecommerce-yuvraj.vercel.app/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/Yuvraj210103">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>

                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${newsapp})`}}  className='flex shadow-lg shadow-[#040c16] group container rounded-md justify-center items-center mx-auto content-div'>

                    {/* Hover effects */}

                    <div className='flex flex-col opacity-0 group-hover:opacity-100 justify-center items-center'>
                        <span className='text-2xl font-bold text-white bg-[#525d8d63] tracking-wider'>
                           
                           React JS Application
                        </span>
                        <div>
               
                            <a href="https://daily-news-mocha.vercel.app/ ">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/Yuvraj210103">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>

                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${textutils})`}}  className='flex shadow-lg shadow-[#040c16] group container rounded-md justify-center items-center mx-auto content-div'>

                    {/* Hover effects */}

                    <div className='flex flex-col opacity-0 group-hover:opacity-100 justify-center items-center'>
                        <span className='text-2xl font-bold text-white bg-[#525d8d63] tracking-wider  '>
                           
                           React JS Application
                        </span>
                        <div>
               
                            <a href="https://yuvraj210103.github.io/Text-Utils/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/Yuvraj210103">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>

                        </div>
                    </div>
                </div>

            </div>
        </div>

    </div>
  )
}
