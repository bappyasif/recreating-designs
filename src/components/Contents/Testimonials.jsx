import React from 'react'
import { testimonials } from '../../data'

const Testimonials = () => {
  const renderItems = () => testimonials.map((item, idx) => <RenderTestimonial key={idx} item={item} />)
  return (
    <div className='flex flex-col gap-9 items-center'>
      <HeadingInfo />
      <div className='flex justify-between flex-wrap gap-8'>
        {renderItems()}
      </div>
    </div>
  )
}

const HeadingInfo = () => {
  return (
    <div className='w-full flex flex-col gap-4 items-center'>
      <h2 className='text-5xl text-center'>Hear from our Trailblazing Partners</h2>
      <p className='font-novaSlim text-lg'>join this league of innovators who have transformed their cargo operations with ABCD</p>
    </div>
  )
}

const RenderTestimonial = ({ item }) => {
  const { name, text } = item;

  return (
    <div className='w-1/5'>
      <h2 className='font-macondo text-2xl'>{name}</h2>
      <p className='font-sans text-sm'>{text}</p>
    </div>
  )
}

export default Testimonials