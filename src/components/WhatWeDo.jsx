import React from 'react'
import { weDo } from '../data'

export const WhatWeDo = () => {
    return (
        <div className='flex justify-between w-full py-2 my-2 mb-6'>
            <RenderIntro />
            <RenderInfo />
        </div>
    )
}

const RenderInfo = () => {
    const renderfocuses = () => weDo.map(item => <RenderFocus key={item.title} item={item} />)
    return (
        <div className='flex justify-between gap-4 w-2/4 px-6'>
            {renderfocuses()}
        </div>
    )
}

const RenderFocus = ({ item }) => {
    const { icon, title, desc } = item

    return (
        <div className='flex flex-col gap-2 font-bold'>
            <div className='text-9xl'>{icon}</div>
            <h2 className='font-righteous text-4xl'>{title}</h2>
            <p>{desc}</p>
        </div>
    )
}

const RenderIntro = () => {
    return (
        <div className='text-6xl'>
            <h2 className='font-righteous text-transparent bg-clip-text bg-gradient-to-br from-slate-200 to-blue-800'>What We Do</h2>
            <p className='text-xl font-righteous px-20'>Our Key Insights</p>
        </div>
    )
}