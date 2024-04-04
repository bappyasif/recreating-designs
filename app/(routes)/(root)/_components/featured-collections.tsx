"use client"

import { featuredGallery } from '@/data'
import { useForTruthToggle } from '@/hooks'
import Image from 'next/image'
import React from 'react'

export const FeaturedCollections = () => {
    const showAll = () => featuredGallery.map(item => <ShowFeatureCard key={item.src} {...item} />)

    return (
        <div className='px-11 relative flex flex-col gap-y-10 justify-center items-center py-28'>
            <h2 className='text-6xl self-start'>FeaturedCollections</h2>
            <ul className='flex gap-x-6'>{showAll()}</ul>
            <SliderArrows />
        </div>
    )
}


const ShowFeatureCard = ({text, src}: {text: string, src: string}) => {
    const {handleFalsy, handleTruthy, isTrue} = useForTruthToggle()

    return (
        <li className='relative flex justify-center items-center h-[40rem] w-[33rem]' onMouseEnter={handleTruthy} onMouseLeave={handleFalsy}>
            <Image src={src} alt='' width={800} height={800} className='w-full h-full' />
            <div className='absolute text-4xl flex flex-col justify-center space-y-4'>
                <p className={`transition-all duration-200 ${isTrue ? "-translate-y-4" : "translate-y-0"}`}>{text}</p>
                
                <button className={`transition-all duration-200 p-2 w-fit mx-auto bg-red-400 ${isTrue ? "visible" : "invisible text-xs translate-y-4"}`}>View</button>
                
                {/* <button className={`transition-all duration-200 p-2 w-fit mx-auto ${isTrue ? "inline-block bg-red-400" : "invisible p-0 w-0 h-0 mx-auto text-xs"}`}>View</button> */}
            </div>
        </li>
    )
}

const SliderArrows = () => {
    return (
        <div className='absolute flex justify-between items-center z-20 self-center w-full text-2xl'>
            <span className='p-1 bg-slate-400 rounded-full px-3 pb-2 absolute left-12 top-11'>&lt;</span>
            <span className='p-1 bg-slate-400 rounded-full px-3 pb-2 absolute right-12 top-11'>&gt;</span>
        </div>
    )
}