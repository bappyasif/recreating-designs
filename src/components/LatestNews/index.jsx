import React from 'react'
import { latestNews } from '../../data'

export const LatestNews = () => {
    const renderItems = () => latestNews.map(item => <RenderNews key={item.dm.date} item={item} />)

    return (
        <div>
            <h2>Latest News</h2>
            <div>{renderItems()}</div>
        </div>
    )
}

const RenderNews = ({ item }) => {
    const { dm, ts } = item;

    return (
        <div>
            <RenderImage />
            <div>
                <RenderDates item={dm} />
                <RenderTexts item={ts} />
            </div>
        </div>
    )
}

const RenderDates = ({ item }) => {
    const { date, month } = item;

    return (
        <div>
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

const RenderImage = () => {
    return (
        <img
            className='w-96 h-96'
            src=""
            alt=""
        />
    )
}