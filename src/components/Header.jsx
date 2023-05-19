import React from 'react'
import { navs } from '../data'
import { HiSearch } from "react-icons/hi"

export const Header = () => {
    return (
        <header className='flex justify-between w-full px-4'>
            <CompanyLogo />
            <div className='flex justify-between w-2/4'>
                <RenderNavs />
                <span className='text-2xl w-20 flex justify-end'><HiSearch /></span>
            </div>
        </header>
    )
}

const RenderNavs = () => {
    const renderNavs = () => navs.map(name => <span className='uppercase font-monoton text-xl' key={name}>{name}</span>)
    return (
        <div className='flex justify-between w-full'>
            {renderNavs()}
        </div>
    )
}

const CompanyLogo = () => {
    return (
        <div className='flex gap-2'>
            <img src="../src/assets/icon.jpg" alt="company logo" width={110} height={65} />
            <div className='flex flex-col text-2xl font-righteous'>
                <span>Icelandic</span>
                <span>Mountain Guides</span>
            </div>
        </div>
    )
}