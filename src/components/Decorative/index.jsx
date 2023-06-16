import React from 'react'
import { decorativeItems } from '../../data'

export const Decorative = () => {
    const renderItems = () => decorativeItems.map(item => <RenderItem key={item.title} data={item} />)
    return (
        <div>
            <LeftImage />
            <div>
                {renderItems()}
            </div>
            <RightImage />
        </div>
    )
}

const LeftImage = () => {
    return (
        <img
            className='w-96 h-96'
            src=""
            alt=""
        />
    )
}

const RightImage = () => {
    return (
        <img
            className='w-96 h-96'
            src=""
            alt=""
        />
    )
}

const RenderItem = ({ data }) => {
    const { title, subtitle, icon } = data;

    return (
        <div>
            <div>{icon}</div>
            <div>
                <h2>{title}</h2>
                <p>{subtitle}</p>
            </div>
        </div>
    )
}