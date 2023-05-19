import React from 'react'
import { navs } from '../data'
import { HiSearch } from "react-icons/hi"

export const Header = () => {
    return (
        <header className='flex justify-between w-full'>
            <CompanyLogo />
            <RenderNavs />
            <HiSearch />
        </header>
    )
}

const RenderNavs = () => {
    const renderNavs = () => navs.map(name => <span key={name}>{name}</span>)
    return (
        <div className='flex gap-4'>
            {renderNavs()}
        </div>
    )
}

const CompanyLogo = () => {
    return (
        <div>
            <img src="#" alt="companyt logo" />
            <div>
                <span>Icelandic</span>
                <span>Mountain Guides</span>
            </div>
        </div>
    )
}