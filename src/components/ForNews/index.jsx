import React from 'react'
import { categories, news, sideview } from '../../data/news'

export const RenderLatestBlogs = () => {
    const showBlogs = () => news.map((item, idx) => <ShowBlog key={idx} item={item} />)

    return (
        <div className='flex flex-col gap-4'>
            {showBlogs()}
        </div>
    )
}

const ShowBlog = ({item}) => {
    const {img, dm, hs, text} = item;

    return (
        <div className='flex flex-col gap-4'>
            <img src="" alt="" />
            <RenderDateAndMonth item={dm} />
            <RenderHeadingAndSubtext item={hs} />
            <p>{text}</p>
            <button className='w-fit p-0 px-20 py-1 text-3xl'>Read More</button>
        </div>
    )
}

const RenderHeadingAndSubtext = ({item}) => {
    const {heading, subtext} = item;

    return (
        <div>
            <h2>{heading}</h2>
            <p>{subtext}</p>
        </div>
    )
}

const RenderDateAndMonth = ({item}) => {
    const {date, month} = item;

    return (
        <div className='flex gap-4'>
            <p>{date}</p>
            <p>{month}</p>
        </div>
    )
}

export const RenderLinks = () => {
    const renderLinks = () => categories.map(item => <div className='flex justify-between'><span>{item.name}</span> <span>{item.count}</span></div>)

    return (
        <div className='flex flex-col gap-4'>{renderLinks()}</div>
    )
}

export const RenderSideView = () => {
    const renderArticleViews = () => sideview.map((item, idx) => <RenderSideArticleView key={idx} item={item} />)

    return (
        <div>
            {renderArticleViews()}
        </div>
    )
}

const RenderSideArticleView =({item}) => {
    const {img, dm, heading, subtext} = item;

    return (
        <div>
            <img src="" alt="" />
            <RenderDateAndMonth item={dm} />
            <h2>{heading}</h2>
            <p>{subtext}</p>
        </div>
    )
}