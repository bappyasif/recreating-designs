import React from 'react'
import { CompanyLogo } from './Header'
import { footers } from '../data'

export const Footer = () => {
    const { product, company, additionals, newsletter } = footers
    return (
        <div className='w-full'>
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
        <div className='flex gap-4 justify-center'>
            <RenderMoreLinks names={moreLinks} />
            <RenderSocials items={links} />
        </div>
    )
}

const RenderSocials = ({ items }) => {
    const renderSocials = () => items?.map(item => <span>{item.icon}</span>)

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
        <div className=''>
            <h2 className=''>{title}</h2>
            <button className='p-0 px-6 py-1 text-blue-950 rounded-xl'>{btnTxt}</button>
            <input className='py-1 rounded' type="text" placeholder='enter your email here....' />
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