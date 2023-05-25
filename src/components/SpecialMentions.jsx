import React from 'react'
import { testimonials } from '../data'

export const SpecialMentions = () => {
    const renderMentions = () => testimonials.map(item => <RenderTestimonial key={item.text} item={item} />)
  return (
    <div>
        <h2>Testimonials</h2>
        <div>
            {renderMentions()}
        </div>
    </div>
  )
}

const RenderTestimonial = ({item}) => {
    const {text, user} = item;
    return (
        <div>
            <h2>{text}</h2>
            <RenderUser item={user} />
        </div>
    )
}

const RenderUser = ({item}) => {
    const {name, title, industry} = item;

    return (
        <div>
            <p>{name}</p>
            <p>{title}</p>
            <p>{industry}</p>
        </div>
    )
}