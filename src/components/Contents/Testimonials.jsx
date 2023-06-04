import React from 'react'
import { testimonials } from '../../data'

const Testimonials = () => {
  const renderItems = () => testimonials.map((item, idx) => <RenderTestimonial key={idx} item={item} />)
  return (
    <div>
      <HeadingInfo />
      <div>
        {renderItems()}
      </div>
    </div>
  )
}

const HeadingInfo = () => {
  return (
    <div>
      <div>
        <h2>Hear from our</h2>
        <h2>Trailblazing Partners</h2>
      </div>
      <p>join this league of innovators who have transformed their cargo operations with ABCD</p>
    </div>
  )
}

const RenderTestimonial = ({ item }) => {
  const { name, text } = item;

  return (
    <div>
      <h2>{name}</h2>
      <p>{text}</p>
    </div>
  )
}

export default Testimonials