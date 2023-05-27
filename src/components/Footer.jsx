import React from 'react'
import { CompanyLogo } from './Header'
import { footers } from '../data'

export const Footer = () => {
    const { product, company, additionals, newsletter } = footers
    return (
        <div className='w-full px-2'>
            <div className='flex justify-between gap-4 font-righteous'>
                <CompanyLogo />
                <RenderNavs items={product} title={"Product"} />
                <RenderNavs items={company} title={"Company"} />
                <RenderNewsLetter item={newsletter} />
            </div>
            <p className='h-0.5 w-full bg-slate-200 my-4'></p>
            <RenderAdditionals items={additionals} />
        </div>
    )
}

const RenderAdditionals = ({ items }) => {
    const { moreLinks, links } = items;

    return (
        <div className='flex gap-4 justify-around'>
            <RenderMoreLinks names={moreLinks} />
            <RenderSocials items={links} />
        </div>
    )
}

const RenderSocials = ({ items }) => {
    const renderSocials = () => items?.map((item, idx) => <span className='flex items-center' key={idx}>{item.icon}</span>)

    return (
        <div className='flex gap-4 justify-between'>
            {renderSocials()}
        </div>
    )
}

const RenderMoreLinks = ({ names }) => {
    const renderNames = () => names?.map(name => <p key={name}>{name}</p>)
    return (
        <div className='flex justify-between gap-6'>
            {renderNames()}
        </div>
    )
}

const RenderNewsLetter = ({ item }) => {
    const { title, btnTxt } = item
    return (
        <div className='w-1/4 flex flex-col gap-4'>
            <h2 className=''>{title}</h2>
            <div className='relative w-full'>
                <button className='p-0 px-6 py-1 h-11 text-blue-950 bg-lime-600 rounded-xl absolute'>{btnTxt}</button>
                <input className='pl-44 py-1 h-11 rounded-xl w-full bg-slate-600' type="text" placeholder='enter your email here....' />
            </div>
        </div>
    )
}

const RenderNavs = ({ items, title }) => {
    const renderNavs = () => items?.map(item => <RenderNav key={item} item={item} />)

    return (
        <div>
            <h2 className='text-2xl'>{title}</h2>
            <div>
                {renderNavs()}
            </div>
        </div>
    )
}

const RenderNav = ({ item }) => {
    return (
        <div>{item}</div>
    )
}