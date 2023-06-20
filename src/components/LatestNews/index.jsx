import React from 'react'
import { latestNews } from '../../data'

export const LatestNews = () => {
    const renderItems = () => latestNews.map(item => <RenderNews key={item.dm.date} item={item} />)

    return (
        <div id='Latest' className='flex flex-col gap-4'>
            {/* <h2>Latest News</h2> */}
            <div className='flex justify-between gap-4 h-2/3'>
                {/* <div className='flex flex-col gap-4'>{renderItems()}</div> */}
                <div className='grid grid-cols-1 gap-y-4'>{renderItems()}</div>
                <img
                    className='w-96 h-auto'
                    src="https://source.unsplash.com/random/?Travel&Banner&Portarit"
                    alt=""
                />
            </div>
        </div>
    )
}

const RenderNews = ({ item }) => {
    const { dm, ts } = item;

    return (
        <div className='grid grid-cols-2 gap-x-8'>
            <RenderImage dd={dm?.date} />
            <div className='flex flex-col gap-4'>
                <RenderDates item={dm} />
                <RenderTexts item={ts} />
            </div>
        </div>
    )
}

const RenderDates = ({ item }) => {
    const { date, month } = item;

    return (
        <div className='flex gap-4'>
            <h2>{date}</h2>
            <h3>{month}</h3>
        </div>
    )
}

const RenderTexts = ({ item }) => {
    const { title, subtext, text } = item;

    return (
        <div>
            <div>
                <h2>{title}</h2>
                <h3>{subtext}</h3>
            </div>
            <p>{text}</p>
        </div>
    )
}

const RenderImage = ({dd}) => {
    return (
        <img
            className='w-full h-40'
            src={`https://source.unsplash.com/random/?Tourism&News&${dd}`}
            alt=""
        />
    )
}