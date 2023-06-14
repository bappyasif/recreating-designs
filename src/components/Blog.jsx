import React from 'react'
import { blog } from '../data'

export const LatestBlog = () => {
    const { date, excerpt, title, url } = blog
    return (
        <div className='flex flex-col font-righteous mb-20'>
            <h2 className='text-6xl my-2 mb-4 text-transparent bg-clip-text bg-gradient-to-br from-slate-200 to-blue-800'>Latest Blog</h2>
            <div className='flex xxs:flex-col md:flex-row gap-9 justify-center px-9'>
                <img className='xxs:w-full md:w-2/4 h-1/4 rounded-md' style={{minHeight: "310px"}} src={"https://source.unsplash.com/random/1920x1080/?blog,latest"} alt={excerpt} />
                <div>
                    <p className='font-monoton'>{date}</p>
                    <h2 className='text-4xl'>{title}</h2>
                    <p className='text-xl'>{excerpt}</p>
                </div>
            </div>
        </div>
    )
}
