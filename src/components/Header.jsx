import React from 'react'
import { topNavs } from "../data"

const Header = () => {
    const { logo, navs, other } = topNavs
    return (
        <div 
            className='flex xxs:flex-col-reverse md:flex-row justify-between font-macondo items-baseline xxs:gap-6 md:gap-2'
            >
            <div 
                className='flex xxs:flex-col md:flex-row justify-between xxs:w-full 
                md:w-3/4 text-xl items-baseline xxs:gap-4 md:gap-2'
            >
                <CompLogo item={logo} />
                <RenderNavs items={navs} />
            </div>
            <RenderOther item={other} />
        </div>
    )
}

const RenderOther = ({ item }) => {
    return (
        <button className='p-0 px-6 py-1 bg-slate-800 font-monoton xxs:w-full md:w-fit'>{item}</button>
    )
}

const RenderNavs = ({ items }) => {
    const renderItems = () => items?.map(name => <span className='w-full' key={name}>{name}</span>)

    return (
        <div 
            className='flex justify-between xxs:gap-1 xxs:w-full md:w-2/3
            xxs:text-sm md:text-base'
        >
            {renderItems()}
        </div>
    )
}

export const CompLogo = ({ item }) => {
    const { icon, name } = item

    return (
        <div className='flex gap-2 items-center text-2xl'>
            <span className='animate-spin'>{icon}</span>
            <span className='font-monoton text-4xl'>{name}</span>
        </div>
    )
}

export default Header