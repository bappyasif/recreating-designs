import React from 'react'

export const Subscribe = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-y-6'>
        <h2>Subscribe to out newsletter</h2>
        <p>Sign up to our newsletter and we'll keep you up to date with the latest arrivals</p>
        <Email />
    </div>
  )
}

const Email = () => {
    return (
        <div className='relative flex justify-between items-center w-96'>
            <input className='h-10 w-full bg-transparent focus:outline-0' type="text" placeholder='Email' />
            <span className='w-full h-0.5 bg-red-200 absolute bottom-0'></span>
            <button className='p-2 bg-red-400 absolute right-0'>&rarr;</button>
        </div>
    )
}