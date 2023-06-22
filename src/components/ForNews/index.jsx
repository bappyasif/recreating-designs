import React from 'react'
import { categories, news, sideview } from '../../data/news'

export const RenderLatestBlogs = () => {
    const showBlogs = () => news.map((item, idx) => <ShowBlog key={idx} item={item} />)

    return (
        <div className='col-start-1 col-end-4 flex flex-col gap-28'>
            {showBlogs()}
        </div>
        // <div className='flex flex-col gap-28'>
        //     {showBlogs()}
        // </div>
    )
}

const ShowBlog = ({ item }) => {
    const { img, dm, hs, text } = item;

    return (
        <div className='flex flex-col gap-10'>
            <img
                className='w-full h-96'
                src={`https://source.unsplash.com/random/?${hs?.heading}&Tourism`}
                alt={hs?.heading}
            />
            <div className='flex flex-col gap-4'>
                <RenderDateAndMonth item={dm} />
                <RenderHeadingAndSubtext item={hs} />
            </div>
            <p className='text-xl'>{text}</p>
            <button className='w-fit p-0 px-20 py-1 text-3xl'>Read More</button>
        </div>
    )
}

const RenderHeadingAndSubtext = ({ item }) => {
    const { heading, subtext } = item;

    return (
        <div>
            <h2 className='text-4xl font-bold'>{heading}</h2>
            <p>{subtext}</p>
        </div>
    )
}

const RenderDateAndMonth = ({ item }) => {
    const { date, month } = item;

    return (
        <div className='flex gap-4'>
            <p className='text-7xl'>{date}</p>
            <p className='self-end mb-1 text-4xl'>{month}</p>
        </div>
    )
}

export const RenderLinks = () => {
    const renderLinks = () => categories.map(item => <div className='flex justify-between'><span>{item.name}</span> <span>{item.count}</span></div>)

    return (
        <div className='flex flex-col gap-4 text-4xl w-80'>{renderLinks()}</div>
        // <div className='flex flex-col gap-4 text-4xl w-80 mr-8'>{renderLinks()}</div>
    )
}

export const RenderSideView = () => {
    const renderArticleViews = () => sideview.map((item, idx) => <RenderSideArticleView key={idx} item={item} />)

    return (
        <div className='flex flex-col gap-6 w-max'>
            <h2 className='text-4xl'>Latest News</h2>
            <div className='flex flex-col gap-20 items-end w-full'>
                {renderArticleViews()}
            </div>
        </div>
    )
}

const RenderSideArticleView = ({ item }) => {
    const { img, dm, heading, subtext } = item;

    return (
        <div className='flex gap-6 justify-end w-full'>
            <img
                className='w-40'
                src={`https://source.unsplash.com/random/?${heading}&Tourism`}
                alt={heading}
            />
            <div className='self-end'>
                <RenderDateAndMonth item={dm} />
                <h2>{heading}</h2>
                <p>{subtext}</p>
            </div>
        </div>
    )
}