import React from 'react'
import { productInfo, star } from '../../data'

export const ProductDetail = () => {
    const {cart, detail, headings, wishList} = productInfo
    return (
        <div className='flex gap-9 justify-between w-full'>
            <div className='flex flex-col gap-4 w-2/4'>
                <RenderHeading item={headings} />
                <RenderDetail item={detail} />
                <RenderCart item={cart} />
                <RenderWishlist item={wishList} />
            </div>
            <ShowcaseImages />
        </div>
    )
}

const ShowcaseImages = () => {
    return (
        <div className='flex gap-4 justify-center w-1/2'>
            <img className='w-1/2 h-2/3' src="https://source.unsplash.com/random/?Cryptocurrency&1" alt="" />
            <div className='flex flex-col gap-4 items-end'>
                <img className='w-1/2' src="https://source.unsplash.com/random/?Cryptocurrency&1" alt="" />
                <img className='w-1/2' src="https://source.unsplash.com/random/?Cryptocurrency&1" alt="" />
                <img className='w-1/2' src="https://source.unsplash.com/random/?Cryptocurrency&1" alt="" />
            </div>
        </div>
    )
}

const RenderDetail = ({ item }) => {
    const { descText, keypoints } = item;
    const renderKeypoints = () => keypoints.map(item => {
        return (
            <span key={item}><span>[]</span><span>{item}</span></span>
        )
    })
    return (
        <div>
            <p>{descText}</p>
            <div>
                {renderKeypoints()}
            </div>
        </div>
    )
}

const RenderWishlist = ({ item }) => {
    const { icon, text } = item;

    return (
        <div className='flex gap-4'>
            <span>{icon}</span>
            <span>{text}</span>
        </div>
    )
}

const RenderCart = ({ item }) => {
    const { decr, incr, btnTxt, btnIcon } = item;
    return (
        <div className='flex flex-col gap-4'>
            <div className='flex gap-4'>
                <span>{decr}</span>
                <span>1</span>
                <span>{incr}</span>
            </div>
            <button><span>{btnIcon}</span><span>{btnTxt}</span></button>
        </div>
    )
}

const RenderHeading = ({ item }) => {
    const { titTxt, price, revDet } = item;

    return (
        <div className='text-2xl'>
            <h1>{titTxt}</h1>
            <p>{price}</p>
            <RenderRatingAndReview item={revDet} />
        </div>
    )
}

export const RenderRatingAndReview = ({ item }) => {
    const { icon, rating, review } = item;
    // const renderFiveTimes = () => [1, 2, 3, 4, 5].map(item => <span key={item}>{icon}</span>)
    return (
        <div className='flex gap-4'>
            <RenderStars />
            <span>{rating}</span>
            <span>{review}</span>
        </div>
    )
}

export const RenderStars = ({ }) => {
    const renderFiveTimes = () => [1, 2, 3, 4, 5].map(item => <span key={item}>{star}</span>)
    return (
        <div>
            {renderFiveTimes()}
        </div>
    )
}