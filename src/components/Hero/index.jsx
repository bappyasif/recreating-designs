import React from 'react'
import { heroItems } from '../../data'

export const HeroComponent = () => {
    const {links, search} = heroItems
    return (
        <div className='flex flex-col gap-4 justify-center items-center'>
            <h2>Let us take you away</h2>
            <RenderLinks items={links} />
            <RenderSearch items={search} />
        </div>
    )
}

const RenderLinks = ({ items }) => {
    const renderItems = () => items.map(item => <span>{item}</span>)

    return (
        <div className='self-end flex flex-col gap-4'>{renderItems()}</div>
    )
}

export const RenderSearch = ({ items }) => {
    const renderItems = () => items.map(item => <RenderInput key={item} item={item} />)

    return (
        <div className='flex flex-col gap-4 items-center'>
            <h2>Search For Your trip</h2>
            <div className='flex flex-col gap-4'>
                <div className='flex gap-4'>{renderItems()}</div>
                <button className='w-fit p-0 px-20 py-1 text-3xl self-center'>Search</button>
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