import React from 'react'
import { decorativeItems } from '../../data'

export const Decorative = () => {
    const renderItems = () => decorativeItems.map(item => <RenderItem key={item.title} data={item} />)
    return (
        <div className='flex justify-between gap-4'>
            <LeftImage />
            <div className='flex xxs:flex-col lg:flex-row xxs:items-center lg:justify-between gap-4'>
                {renderItems()}
            </div>
            <RightImage />
        </div>
    )
}

const LeftImage = () => {
    return (
        <img
            className='xxs:hidden lg:block w-60 h-60 bg-transparent'
            src={`https://source.unsplash.com/random/?Boeing`}
            alt=""
        />
    )
}

const RightImage = () => {
    return (
        <img
            className='xxs:hidden lg:block w-60 h-60 bg-transparent'
            src={`https://source.unsplash.com/random/?Beach`}
            alt=""
        />
    )
}

const RenderItem = ({ data }) => {
    const { title, subtitle, icon } = data;

    return (
        <div className='flex gap-4 text-2xl'>
            <div className='w-1/2' style={{fontSize: "150px"}}>{icon}</div>
            <div>
                <h2>{title}</h2>
                <p className='text-lg'>{subtitle}</p>
            </div>
        </div>
    )
}