import React from 'react'
import { RenderStars } from '../Product';
import { topReviews } from '../../data';

export const TopReviews = () => {
    const renderAllTopReviews = () => topReviews.map((item, idx) => <RenderTopReview key={idx} item={item} />)
    return (
        <div className='flex flex-col items-center gap-4 w-1/2'>
            <h2 className='text-4xl'>Top Reviews</h2>
            <div className='flex flex-col gap-4 '>
                {renderAllTopReviews()}
            </div>
            <button>See All Reviews</button>
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
        <div>
            <RenderStars />
            <h2>{text}</h2>
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
        <span>{icon}</span>
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
    const { icon, name, ago } = item;

    return (
        <div className='flex gap-4'>
            {/* <img src="" alt="" /> */}
            {icon}
            <div className='flex flex-col gap-2'>
                <h2>{name}</h2>
                <h4>{ago}</h4>
            </div>
        </div>
    )
}

const RenderVerified = ({ item }) => {
    const { icon, text } = item;

    return (
        <div>
            <span>{icon}</span>
            <span>{text}</span>
        </div>
    )
}