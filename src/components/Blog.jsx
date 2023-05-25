import React from 'react'
import { blog } from '../data'

export const LatestBlog = () => {
    const { date, excerpt, title, url } = blog
    return (
        <div className='flex flex-col items-center font-righteous'>
            <h2 className='text-6xl'>Latest Blog</h2>
            <div className='flex gap-4'>
                <img src={url} alt={excerpt} />
                <div>
                    <p className='font-monoton'>{date}</p>
                    <h2 className='text-4xl'>{title}</h2>
                    <p className='text-xl'>{excerpt}</p>
                </div>
            </div>
        </div>
    )
}
