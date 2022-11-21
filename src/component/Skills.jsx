import React from 'react'
import html from './Assets/html.png'
import css from './Assets/css3.png'
import javascript from './Assets/javascript.png'
import react from './Assets/react.png'
import github from './Assets/github.png'
import node from './Assets/nodejs.png'
import mongodb from './Assets/mongodb.png'
import tailwind from './Assets/tailwind-css.png'

export const Skills = () => {
  return (
    <div name="skills" className='w-full h-full bg-[#0a192f] text-gray-300'>

       <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
         <div>
            <p className='text-4xl  py-4 font-bold border-b-4 border-pink-600'>Skills</p>
            <p className='py-4'>// These are the technologies i have worked with</p>
         </div>

         <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>

             <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                <img className='w-20 mx-auto' src={html} alt="" />
                <p className='my-4'>HTML</p>
             </div>
             <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                <img className='w-20 mx-auto' src={css} alt="" />
                <p className='my-4'>CSS</p>
             </div>
             <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                <img className='w-20 mx-auto' src={javascript} alt="" />
                <p className='my-4'>Javascript</p>
             </div>
             <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                <img className='w-20 mx-auto' src={react} alt="" />
                <p className='my-4'>React-Js</p>
             </div>
             <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                <img className='w-20 mx-auto invert' src={github} alt="" />
                <p className='my-4'>Github</p>
             </div>
             <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                <img className='w-20 mx-auto' src={node} alt="" />
                <p className='my-4'>Node-Js</p>
             </div>
             <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                <img className='w-20 mx-auto invert' src={tailwind} alt="" />
                <p className='my-4'>Tailwind-css</p>
             </div>
             <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                <img className='w-20 mx-auto' src={mongodb} alt="" />
                <p className='my-4'>Mongo-db</p>
             </div>

         </div>
       </div>

    </div>
  )
}
