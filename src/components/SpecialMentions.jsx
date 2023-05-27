import React from 'react'
import { testimonials } from '../data'

export const SpecialMentions = () => {
    const renderMentions = () => testimonials.map(item => <RenderTestimonial key={item.text} item={item} />)
  return (
    <div className='flex justify-between w-full font-righteous gap-40'>
        <h2 className='text-6xl'>Testimonials</h2>
        <div className='w-3/4 text-justify'>
            {renderMentions()}
        </div>
    </div>
  )
}

const RenderTestimonial = ({item}) => {
    const {text, user} = item;
    return (
        <div className='w-full'>
            <h2 className='text-2xl w-full'>{text}</h2>
            <RenderUser item={user} />
        </div>
    )
}

const RenderUser = ({item}) => {
    const {name, title, industry} = item;

    return (
        <div className='font-serif my-2 text-left'>
            <p className='font-bold font-monoton text-4xl'>{name}</p>
            <p>{title}</p>
            <p>{industry}</p>
        </div>
    )
}