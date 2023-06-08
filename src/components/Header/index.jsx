import React from 'react'
import { topNavs } from '../../data'

export const Header = () => {
    const {logo, more, navs} = topNavs
    return (
        <div className='flex justify-between'>
            <div className='flex gap-4 justify-between'>
                <RenderComp item={logo} />
                <RenderNavs items={navs} />
            </div>
            <div className='flex gap-4'>
                <Search />
                <RenderMores items={more} />
            </div>
        </div>
    )
}

const RenderComp = ({ item }) => {
    const { icon, text } = item
}

const Search = () => {
    return (
        <div className='flex gap-4'>
            <input type="text" placeholder='search product' />
            <span>[]</span>
        </div>
    )
}

const RenderNavs = ({ items }) => {
    const renderItems = () => items.map(item => <div key={item}>{item}</div>)

    return (
        <div className='flex gap-4'>
            {renderItems()}
        </div>
    )
}

const RenderMores = ({ items }) => {
    const renderItems = () => items.map((item, idx) => <RenderMore key={idx} item={item} />)

    return (
        <div className='flex gap-4'>
            {renderItems()}
        </div>
    )
}

const RenderMore = ({ item }) => {
    const { icon } = item;

    return <div>{icon}</div>
}