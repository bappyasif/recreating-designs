import React from 'react'
import { NewsMenu, OrbitalDrie } from './FeaturedNews'
import { BiDotsHorizontal } from 'react-icons/bi'


export const CompanyFeatures = () => {
    return (
        <div className='flex flex-col gap-6'>
            <NewsMenu />
            <FeaturedImage />
            <FeaturedAnimations />
        </div>
    )
}

const FeaturedAnimations = () => {
    return (
        <div className='flex justify-between px-6'>
            <OrbitalDrie />
            <OrbitalDrie />
            <OrbitalDrie />
            <OrbitalDrie />
        </div>
    )
}

const FeaturedImage = () => {
    return (
        <div className='relative'>
            <img
                className='w-full'
                src="https://source.unsplash.com/random/?abstract&lines&sketch"
                alt="random picture from unsplash"
                style={{maxHeight: "380px"}}
            />
            <h2 className='absolute top-40 right-1/3 text-6xl'>Orbitals News</h2>
            <span className='text-4xl absolute bottom-0 right-0'><BiDotsHorizontal /></span>
        </div>
    )
}
