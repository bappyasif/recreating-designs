import React from 'react'

export const ProductDetail = () => {
    return (
        <div>
            <div>
                <RenderHeading />
                <RenderDetail />
                <RenderCart />
                <RenderWishlist />
            </div>
            {/* images */}
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
        <div>
            <span>{icon}</span>
            <span>{text}</span>
        </div>
    )
}

const RenderCart = ({ item }) => {
    const { decr, incr, btnTxt, btnIcon } = item;
    return (
        <div>
            <div>
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
        <div>
            <h1>{titTxt}</h1>
            <p>{price}</p>
            <RenderRatingAndReview item={revDet} />
        </div>
    )
}

const RenderRatingAndReview = ({ item }) => {
    const { icon, rating, review } = item;
    const renderFiveTimes = () => [1, 2, 3, 4, 5].map(item => <span key={item}>{icon}</span>)
    return (
        <div>
            <div>
                {renderFiveTimes()}
            </div>
            <span>{rating}</span>
            <span>{review}</span>
        </div>
    )
}