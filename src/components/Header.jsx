import React from 'react'
import { topNavs } from "../data"

const Header = () => {
    const { logo, navs, other } = topNavs
    return (
        <div className='flex justify-between font-macondo items-baseline'>
            <div className='flex justify-between w-3/4 text-xl items-baseline'>
                <CompLogo item={logo} />
                <RenderNavs items={navs} />
            </div>
            <RenderOther item={other} />
        </div>
    )
}

const RenderOther = ({ item }) => {
    return (
        <button className='p-0 px-6 py-1 bg-slate-800 font-monoton'>{item}</button>
    )
}

const RenderNavs = ({ items }) => {
    const renderItems = () => items?.map(name => <span key={name}>{name}</span>)

    return (
        <div className='flex justify-between w-2/3'>
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