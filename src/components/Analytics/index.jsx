import React from 'react'
import { RenderRatingAndReview } from '../Product';
import { reviewRatings } from '../../data';

export const AnalyticsDetails = () => {
    const { reviewProd, positiveRatings, customerReviews } = reviewRatings
    return (
        <div className='flex flex-col gap-4 w-2/3'>
            <CustomerReviews item={customerReviews} />
            <PositiveRatings item={positiveRatings} />
            <ReviewProduct item={reviewProd} />
        </div>
    )
}

const ReviewProduct = ({ item }) => {
    const { heading, subTxt, btnTxt } = item;

    return (
        <div>
            <h2>{heading}</h2>
            <h4>{subTxt}</h4>
            <button>{btnTxt}</button>
        </div>
    )
}

const PositiveRatings = ({ item }) => {
    const { heading, ratings } = item;
    const renderRatings = () => ratings.map(item => <RenderRating key={item.text} item={item} />)

    return (
        <div>
            <h2>{heading}</h2>
            <div>
                {renderRatings()}
            </div>
        </div>
    )
}

const RenderRating = ({ item }) => {
    const { text, percentile } = item;

    return (
        <div>
            <h3><span>{text}</span> - <span>{percentile}</span></h3>
            <div>
                {/* percentile progress */}
            </div>
        </div>
    )
}

const CustomerReviews = ({ item }) => {
    const { headings, numbers } = item;
    const renderNumbers = () => numbers?.map(item => <RenderNumber key={item.txt} item={item} />)
    return (
        <div className='flex flex-col gap-4'>
            <ShowHeadings item={headings} />
            <div className='flex gap-4 flex-wrap w-2/3'>
                {renderNumbers()}
            </div>
        </div>
    )
}

const RenderNumber = ({ item }) => {
    const { fig, txt } = item;

    return (
        <div className="circular-progress z-10" style={{background: `conic-gradient(red ${fig * 3.6}deg, pink 0deg)`}}>
            <div className="progress-value flex justify-center items-center h-full">
                <span className='z-20'>{fig} {txt}</span>
            </div>
        </div>
    )
}

const ShowHeadings = ({ item }) => {
    const { titTxt, revDet } = item;
    return (
        <div className='flex flex-col gap-4'>
            <h2 className='text-4xl'>{titTxt}</h2>
            <RenderRatingAndReview item={revDet} />
        </div>
    )
}