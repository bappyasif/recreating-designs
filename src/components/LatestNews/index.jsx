import React from 'react'
import { latestNews } from '../../data'
import { RenderDateAndMonth } from '../ForNews'

export const LatestNews = () => {
    const renderItems = () => latestNews.map(item => <RenderNews key={item.dm.date} item={item} />)

    return (
        <div id='Latest' className='flex flex-col gap-4'>
            <div className='flex xxs:flex-col lg:flex-row justify-between gap-4 xxs:h-full lg:h-2/3'>
                <div className='grid grid-cols-1 gap-y-4'>{renderItems()}</div>
                <img
                    className='w-96 xxs:h-96 lg:h-auto mx-auto'
                    src="https://source.unsplash.com/random/?Travel&Banner&Portarit"
                    alt="some banner"
                />
            </div>
        </div>
    )
}

const RenderNews = ({ item }) => {
    const { dm, ts } = item;

    return (
        <div className='grid xxs:grid-cols-1 md:grid-cols-2 gap-x-8'>
            <RenderImage dd={dm?.date} />
            <div className='flex flex-col gap-4'>
                {/* <RenderDates item={dm} /> */}
                <RenderDateAndMonth item={dm} />
                <RenderTexts item={ts} />
            </div>
        </div>
    )
}

const RenderDates = ({ item }) => {
    const { date, month } = item;

    return (
        <div className='flex gap-4'>
            <h2 className='text-6xl'>{date}</h2>
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

const RenderImage = ({ dd }) => {
    return (
        <img
            className='w-full h-40'
            src={`https://source.unsplash.com/random/?Tourism&News&${dd}`}
            alt=""
        />
    )
}