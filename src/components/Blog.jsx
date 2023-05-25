import React from 'react'
import { blog } from '../data'

export const LatestBlog = () => {
    const { date, excerpt, title, url } = blog
    return (
        <div>
            <h2>Latest Blog</h2>
            <div>
                <img src={url} alt={excerpt} />
                <div>
                    <p>{date}</p>
                    <h2>{title}</h2>
                    <p>{excerpt}</p>
                </div>
            </div>
        </div>
    )
}
