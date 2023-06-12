import React from 'react'
import { RenderRatingAndReview } from '../Product';
import { reviewRatings } from '../../data';

export const AnalyticsDetails = () => {
    const { reviewProd, positiveRatings, customerReviews } = reviewRatings
    return (
        <div className='flex flex-col gap-11 xxs:w-full md:w-2/3'>
            <CustomerReviews item={customerReviews} />
            <PositiveRatings item={positiveRatings} />
            <ReviewProduct item={reviewProd} />
        </div>
    )
}

const ReviewProduct = ({ item }) => {
    const { heading, subTxt, btnTxt } = item;

    return (
        <div className='flex flex-col gap-9 text-xl w-fit'>
            <h2 className='xxs:text-5xl md:text-6xl'>{heading}</h2>
            <h4 className='font-novaSlim'>{subTxt}</h4>
            <button className='p-0 flex gap-4 items-center justify-center text-4xl bg-violet-950'>{btnTxt}</button>
        </div>
    )
}

const PositiveRatings = ({ item }) => {
    const { heading, ratings } = item;
    const renderRatings = () => ratings.map(item => <RenderRating key={item.text} item={item} />)

    return (
        <div>
            <h2 className='xxs:text-5xl md:text-6xl my-2'>{heading}</h2>
            <div className='flex flex-col gap-4 font-novaSlim'>
                {renderRatings()}
            </div>
        </div>
    )
}

const RenderRating = ({ item }) => {
    const { text, percentile } = item;

    return (
        <div className='xxs:w-full md:w-2/4'>
            <h3 className='text-2xl'><span>{text}</span> - <span>{percentile}</span></h3>
            <p className='h-3.5 bg-slate-400 rounded-full'>
                <p className='px-2 h-full bg-slate-600 rounded-full' style={{width: `${percentile}`}}></p>
            </p>
        </div>
    )
}

const CustomerReviews = ({ item }) => {
    const { headings, numbers } = item;
    const renderNumbers = () => numbers?.map(item => <RenderNumber key={item.txt} item={item} />)
    return (
        <div className='flex flex-col gap-4'>
            <ShowHeadings item={headings} />
            <div className='flex gap-4 flex-wrap xxs:w-full md:w-2/3'>
                {renderNumbers()}
            </div>
        </div>
    )
}

const RenderNumber = ({ item }) => {
    const { fig, txt } = item;

    return (
        <div className="circular-progress z-10" style={{ background: `conic-gradient(rgb(152, 148, 149) ${fig * 3.6}deg, rgb(47, 46, 46) 0deg)` }}>
            <div className="progress-value flex justify-center items-center h-full">
                <span className='z-20 flex flex-col text-yellow-400 items-center text-xl font-novaSlim'><span>{fig}%</span> <span>{txt}</span></span>
            </div>
        </div>
    )
}

const ShowHeadings = ({ item }) => {
    const { titTxt, revDet } = item;
    return (
        <div className='flex flex-col gap-4'>
            <h2 className='xxs:text-5xl md:text-6xl'>{titTxt}</h2>
            <RenderRatingAndReview item={revDet} />
        </div>
    )
}