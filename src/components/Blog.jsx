import React from 'react'
import { blog } from '../data'

export const LatestBlog = () => {
    const { date, excerpt, title, url } = blog
    return (
        <div className='flex flex-col font-righteous mb-6'>
            <h2 className='text-6xl my-2 mb-4'>Latest Blog</h2>
            <div className='flex gap-4 justify-center'>
                <img className='w-1/4 h-1/4' style={{minHeight: "310px"}} src={"https://source.unsplash.com/random/1920x1080/?blog,latest"} alt={excerpt} />
                <div>
                    <p className='font-monoton'>{date}</p>
                    <h2 className='text-4xl'>{title}</h2>
                    <p className='text-xl'>{excerpt}</p>
                </div>
            </div>
        </div>
    )
}
