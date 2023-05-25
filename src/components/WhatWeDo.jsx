import React from 'react'
import { weDo } from '../data'

export const WhatWeDo = () => {
    return (
        <div className='flex justify-between w-full py-2 my-2'>
            <RenderIntro />
            <RenderInfo />
        </div>
    )
}

const RenderInfo = () => {
    const renderfocuses = () => weDo.map(item => <RenderFocus key={item.title} item={item} />)
    return (
        <div className='flex justify-between gap-4'>
            {renderfocuses()}
        </div>
    )
}

const RenderFocus = ({ item }) => {
    const { icon, title, desc } = item

    return (
        <div className='flex flex-col gap-2 font-bold'>
            <div>{icon}</div>
            <h2 className='font-righteous text-4xl'>{title}</h2>
            <p>{desc}</p>
        </div>
    )
}

const RenderIntro = () => {
    return (
        <div className='text-4xl'>
            <h2 className='font-righteous'>What We Do</h2>
            <p className='text-xl font-righteous'>Our Key Insights</p>
        </div>
    )
}