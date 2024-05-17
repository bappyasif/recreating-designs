"use client"

import useInViewPort from '@/hooks'
import React, { useRef } from 'react'

export const Subscribe = () => {
  const ref = useRef(null)
  const show = useInViewPort(ref, { threshold: 1 })

  return (
    <div 
      ref={ref} 
      // className='flex flex-col justify-center items-center gap-y-10 pb-28'
      className={`flex flex-col justify-center items-center gap-y-10 pb-28 transition-all duration-1000 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} text-[#474747]`}
    >
      <h2 className='text-6xl'>Subscribe to out newsletter</h2>
      <p>Sign up to our newsletter and we&apos;ll keep you up to date with the latest arrivals</p>
      <Email />
    </div>


  )
}

const Email = () => {
  return (
    <div className='relative flex justify-between items-center w-96'>
      <input className='w-full bg-transparent focus:outline-0 h-16 text-2xl' type="text" placeholder='Email' />
      <span className='w-full h-0.5 bg-red-200 absolute bottom-0'></span>
      <button className='absolute -right-3 top-0 text-6xl flex items-center h-full pb-5'>&rarr;</button>
    </div>
  )
}