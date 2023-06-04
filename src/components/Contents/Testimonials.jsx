import React from 'react'
import { testimonials } from '../../data'

const Testimonials = () => {
  const renderItems = () => testimonials.map((item, idx) => <RenderTestimonial key={idx} item={item} />)
  return (
    <div className='flex flex-col gap-9'>
      <HeadingInfo />
      <div className='flex justify-between flex-wrap gap-8'>
        {renderItems()}
      </div>
    </div>
  )
}

const HeadingInfo = () => {
  return (
    <div className='w-1/3 flex flex-col gap-4'>
      <h2 className='text-4xl w-3/4'>Hear from our Trailblazing Partners</h2>
      <p>join this league of innovators who have transformed their cargo operations with ABCD</p>
    </div>
  )
}

const RenderTestimonial = ({ item }) => {
  const { name, text } = item;

  return (
    <div className='w-1/5'>
      <h2>{name}</h2>
      <p>{text}</p>
    </div>
  )
}

export default Testimonials