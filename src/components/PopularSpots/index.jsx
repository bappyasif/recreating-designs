import React from 'react'
import { popularPlaces } from '../../data'

export const PopularDestinations = () => {
    const renderPlaces = () => popularPlaces.map(item => <RenderPlace key={item.name} item={item} />)

    return (
        <div id='Offers' className='flex flex-col gap-4'>
            <div className='flex flex-col items-center gap-4'>
                <h2>Simply Just Amazing Places</h2>
                <h2 className='text-4xl'>Popular Destinations</h2>
            </div>
            <div className='grid xxs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-9'>{renderPlaces()}</div>
        </div>
    )
}

const RenderPlace = ({ item }) => {
    const { name, subtext, price, special } = item;

    return (
        <div className='relative'>
            {special ? <h2 className='absolute'>{special}</h2> : null}
            <RenderImage text={name} />
            <div className='text-justify'>
                <h2 className='text-4xl'>{name}</h2>
                <p>{subtext}</p>
            </div>
            <h2 className='text-2xl font-bold'>{price}</h2>
        </div>
    )
}

const RenderImage = ({ text }) => {
    return (
        <img
            className='w-full h-60'
            src={`https://source.unsplash.com/random/?Tourism&landscape&${text}`}
            alt=""
        />
    )
}