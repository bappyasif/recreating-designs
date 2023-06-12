import React from 'react'
import { topNavs } from '../../data'
import { BsSearch } from 'react-icons/bs'

export const Header = () => {
    const { logo, more, navs } = topNavs
    return (
        <div 
            className='flex xxs:flex-col md:flex-row xxs:gap-6 lg:gap-2
            justify-between xxs:items-start md:items-center'
        >
            <div
                className='flex gap-4 xxs:justify-start lg:justify-between items-baseline 
            xxs:w-full lg:w-2/4'
            >
                <RenderComp item={logo} />
                <RenderNavs items={navs} />
            </div>
            <div className='flex xxs:gap-4 md:gap-9 xxs:justify-start md:justify-center text-2xl h-fit'>
                <Search />
                <RenderMores items={more} />
            </div>
        </div>
    )
}

const RenderComp = ({ item }) => {
    const { icon, text } = item;

    return (
        <div className='flex gap-2 items-baseline text-4xl font-monoton'>
            <span className='text-3xl'>{icon}</span>
            <span className='xxs:hidden lg:block'>{text}</span>
        </div>
    )
}

const Search = () => {
    return (
        <div className='relative xxs:text-xl md:text-2xl'>
            <input className='px-4 rounded-full h-9' type="text" placeholder='search product' />
            <span className='absolute right-3 top-1.5'><BsSearch /></span>
        </div>
    )
}

const RenderNavs = ({ items }) => {
    const renderItems = () => items.map(item => <div key={item}>{item}</div>)

    return (
        <div className='flex gap-6 xxs:text-lg lg:text-2xl font-righteous'>
            {renderItems()}
        </div>
    )
}

const RenderMores = ({ items }) => {
    const renderItems = () => items.map((item, idx) => <RenderMore key={idx} item={item} />)

    return (
        <div className='flex gap-4 items-baseline'>
            {renderItems()}
        </div>
    )
}

const RenderMore = ({ item }) => {
    const { icon } = item;

    return <div className='text-4xl'>{icon}</div>
}