import React from 'react'
import { heroItems } from '../../data'

export const HeroComponent = () => {
    const {links, search} = heroItems
    return (
        <div>
            <h2>Let us take you away</h2>
            <RenderLinks items={links} />
            <RenderSearch items={search} />
        </div>
    )
}

const RenderLinks = ({ items }) => {
    const renderItems = () => items.map(item => <span>{item}</span>)

    return (
        <div>{renderItems()}</div>
    )
}

const RenderSearch = ({ items }) => {
    const renderItems = () => items.map(item => <RenderInput key={item} item={item} />)

    return (
        <div>
            <h2>Search For Your trip</h2>
            <div>
                <div>{renderItems}</div>
                <button>Search</button>
            </div>
        </div>
    )
}

const RenderInput = ({ item }) => {
    return (
        <label htmlFor={item}>
            <input id={item} type="text" placeholder={item} />
        </label>
    )
}