import React from 'react'
import { topNavs } from "../data"

const Header = () => {
    const { logo, navs, other } = topNavs
    return (
        <div className='flex justify-between'>
            <div className='flex justify-between w-2/4 text-xl'>
                <CompLogo item={logo} />
                <RenderNavs items={navs} />
            </div>
            <RenderOther item={other} />
        </div>
    )
}

const RenderOther = ({ item }) => {
    return (
        <button className='p-0 px-6 py-1 bg-slate-800'>{item}</button>
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

const CompLogo = ({ item }) => {
    const { icon, name } = item

    return (
        <div>
            <span>{icon}</span>
            <span>{name}</span>
        </div>
    )
}

export default Header