import React from 'react'
import { compLogo, topNavs } from '../data'
import imgSrc from "../assets/logo.png"

export const Header = () => {
  return (
    <div className='flex xxs:flex-col lg:flex-row justify-between w-full'>
        <CompanyLogo />
        <RenderNavs />
    </div>
  )
}

export const CompanyLogo = () => {
    const {name, icon} = compLogo[0]
    return (
        <div className='flex gap-2 h-fit items-center'>
            <img className='bg-slate-400' src={imgSrc} alt="logo" />
            <h1 className='font-extrabold font-monoton'>{name}</h1>
        </div>
    )
}

const RenderNavs = () => {
    const renderNavs = () => topNavs?.map(name => <li className='px-4 py-2 font-extrabold font-righteous' key={name}>{name}</li>)
    return (
        <ul className='flex xxs:gap-0 md:gap-4 flex-wrap'>
            {renderNavs()}
        </ul>
    )
}
