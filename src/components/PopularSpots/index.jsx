import React from 'react'
import { popularPlaces } from '../../data'

export const PopularDestinations = () => {
    const renderPlaces = () => popularPlaces.map(item => <RenderPlace key={item.name} item={item} />)

    return (
        <div className='flex flex-col gap-4'>
            <h2>Simply Just Amazing Places</h2>
            <h2>Popular Destinations</h2>
            <div className='flex justify-between flex-wrap gap-4'>{renderPlaces()}</div>
        </div>
    )
}

const RenderPlace = ({ item }) => {
    const { name, subtext, price, special } = item;

    return (
        <div className='relative'>
            {special ? <h2 className='absolute'>{special}</h2> : null}
            <RenderImage />
            <div>
                <h2>{name}</h2>
                <p>{subtext}</p>
            </div>
            <h2>{price}</h2>
        </div>
    )
}

const RenderImage = () => {
    return (
        <img
            className='w-60 h-60'
            src="" alt=""
        />
    )
}