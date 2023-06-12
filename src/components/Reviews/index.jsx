import React from 'react'
import { RenderStars } from '../Product';
import { topReviews } from '../../data';

export const TopReviews = () => {
    const renderAllTopReviews = () => topReviews.map((item, idx) => <RenderTopReview key={idx} item={item} />)
    return (
        <div className='flex flex-col gap-4 xxs:w-full md:w-2/4'>
            <h2 className='text-6xl'>Top Reviews</h2>
            <div className='flex flex-col gap-11 text-xl'>
                {renderAllTopReviews()}
            </div>
            <button className='mt-14 p-0 flex gap-4 items-center justify-center text-4xl bg-violet-950'>See All Reviews</button>
        </div>
    )
}

const RenderTopReview = ({ item }) => {
    const { heading, review } = item;

    return (
        <div className='flex flex-col gap-4'>
            <RenderHeading item={heading} />
            <RenderReview item={review} />
        </div>
    )
}

const RenderReview = ({ item }) => {
    const { icons, text } = item;

    return (
        <div className='flex flex-col gap-4 ml-28'>
            <RenderStars />
            <h2 className='font-novaSlim'>{text}</h2>
            <RenderIcons items={icons} />
        </div>
    )
}

const RenderIcons = ({ items }) => {
    const renderItems = () => items.map((item, idx) => <RenderIcon key={idx} item={item} />)

    return (
        <div className='flex gap-4'>
            {renderItems()}
        </div>
    )
}

const RenderIcon = ({ item }) => {
    const { icon } = item;

    return (
        <span className='bg-slate-800 p-1 rounded-full'>{icon}</span>
    )
}

const RenderHeading = ({ item }) => {
    const { user, verified } = item;

    return (
        <div className='flex flex-col gap-4'>
            <RenderUser item={user} />
            <RenderVerified item={verified} />
        </div>
    )
}

const RenderUser = ({ item }) => {
    const { icon, name, ago, url } = item;

    return (
        <div className='flex gap-4'>
            <img className='w-24 h-20 rounded-full' src={url} alt={name} />
            {/* {icon} */}
            <div className='flex flex-col gap-2'>
                <h2 className='text-4xl'>{name}</h2>
                <h4>{ago}</h4>
            </div>
        </div>
    )
}

const RenderVerified = ({ item }) => {
    const { icon, txt } = item;

    return (
        <div className='flex gap-4 text-yellow-400 items-center ml-28'>
            <span>{icon}</span>
            <span>{txt}</span>
        </div>
    )
}