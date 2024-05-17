import React from 'react'

export const HeroItem = () => {
  return (
    <div className='flex justify-center items-center'>
      <img src="https://howies.co.uk/cdn/shop/files/about-us-swing.jpg?v=1664269687" alt="" className='w-full h-[40rem] relative object-cover' />
      <p className='absolute text-6xl font-bold'>About Us</p>
    </div>
  )
}

export const WearItOut = () => {
  return (
    <div className='text-xl w-2/4 mx-auto flex flex-col gap-y-6'>
      <div className='flex flex-col gap-y-2'>
        <p className='text-6xl'>Wear it Out</p>
        <div className='w-14 h-1.5 bg-red-950'></div>
      </div>

      <p>
        howies is a small active clothing company based in a peaceful corner of Wales. We started back in 1995 making high quality, lower impact clothing for the outdoors, running and cycling, as well as the kind of functional everyday products that we wanted to wear.
      </p>

      <p>
        howies is owned and run by its employees, so we don't answer to shareholders. This means our clothing is designed and manufactured by people who care.
      </p>

    </div>
  )
}