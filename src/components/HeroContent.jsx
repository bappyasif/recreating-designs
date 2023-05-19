import React from 'react'
import { Link } from 'react-router-dom'

export const HeroContent = () => {
  return (
    <section className='relative'>
        <h1 className='font-monoton'>Kingdom of Volcanoes and Glaciers</h1>
        <img 
          src="../src/assets/hero.jpg" 
          alt="a view of icelandic nature wth mountains and glaciers"
          className='h-96 w-full'
        />
        <Link 
          className='absolute bottom-1 w-full flex justify-center' 
          to={"/tours"}
        >
          {
            <button className='text-2xl w-fit p-0 px-16 py-1'>Book Tours</button>
            }
        </Link>
    </section>
  )
}
