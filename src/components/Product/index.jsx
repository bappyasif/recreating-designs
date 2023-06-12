import React from 'react'
import { productInfo, star } from '../../data'
import { BiCheck } from 'react-icons/bi'

export const ProductDetail = () => {
    const { cart, detail, headings, wishList } = productInfo
    return (
        <div 
            className='flex xxs:flex-col-reverse md:flex-row 
            gap-9 justify-between w-full'
        >
            <div className='flex flex-col gap-9 xxs:w-full md:w-2/4'>
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
        <div className='flex gap-4 justify-center xxs:w-full md:w-1/2 h-fit opacity-60'>
            <img 
                className='xxs:w-40 md:w-72 rounded-lg' 
                src="https://source.unsplash.com/random/?essential&oils&&hair&product&bottle&1" alt="feature product" 
            />
            <div className='flex flex-col gap-4 items-end'>
                <img className='xxs:w-32 md:w-60 h-36 rounded-xl' src="https://source.unsplash.com/random/?essential&oils&2" alt="" />
                <img className='xxs:w-32 md:w-60 h-36 rounded-xl' src="https://source.unsplash.com/random/?essential&oils&3" alt="" />
                <img className='xxs:w-32 md:w-60 h-40 rounded-xl' src="https://source.unsplash.com/random/?essential&oils&4" alt="" />
            </div>
        </div>
    )
}

const RenderDetail = ({ item }) => {
    const { descText, keypoints } = item;
    const renderKeypoints = () => keypoints.map(item => {
        return (
            <span className='flex gap-2 items-center bg-slate-800 px-4 rounded-full pr-6 font-macondo' key={item}><span><BiCheck /></span><span>{item}</span></span>
        )
    })
    return (
        <div className='flex flex-col gap-4'>
            <p className='font-novaSlim'>{descText}</p>
            <div className='flex gap-4 flex-wrap text-2xl'>
                {renderKeypoints()}
            </div>
        </div>
    )
}

const RenderWishlist = ({ item }) => {
    const { icon, text } = item;

    return (
        <div className='flex gap-4 items-baseline text-2xl'>
            <span>{icon}</span>
            <span>{text}</span>
        </div>
    )
}

const RenderCart = ({ item }) => {
    const { decr, incr, btnTxt, btnIcon } = item;
    return (
        <div className='flex flex-col gap-4'>
            <div className='flex gap-4 text-4xl'>
                <span>{decr}</span>
                <span className='bg-slate-900 px-4'>1</span>
                <span>{incr}</span>
            </div>
            <button className='p-0 flex gap-4 items-center justify-center text-4xl bg-violet-950'><span>{btnIcon}</span><span>{btnTxt}</span></button>
        </div>
    )
}

const RenderHeading = ({ item }) => {
    const { titTxt, price, revDet } = item;

    return (
        <div className='text-xl flex flex-col gap-6'>
            <h1 className='font-macondo'>{titTxt}</h1>
            <p className='text-4xl font-monoton'>{price}</p>
            <RenderRatingAndReview item={revDet} />
        </div>
    )
}

export const RenderRatingAndReview = ({ item }) => {
    const { icon, rating, review } = item;
    // const renderFiveTimes = () => [1, 2, 3, 4, 5].map(item => <span key={item}>{icon}</span>)
    return (
        <div className='flex gap-4 items-baseline'>
            <RenderStars />
            <div className='flex gap-4 text-slate-200 text-xl'>
                <span>{rating}</span>
                <span>{review}</span>
            </div>
        </div>
    )
}

export const RenderStars = ({ }) => {
    const renderFiveTimes = () => [1, 2, 3, 4, 5].map(item => <span className='text-yellow-400' key={item}>{star}</span>)
    return (
        <div className='flex gap-1'>
            {renderFiveTimes()}
        </div>
    )
}