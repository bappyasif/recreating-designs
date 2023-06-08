import React from 'react'
import { footerItems } from '../../data'

export const Footer = () => {
    const { comp, copyright, line1, line2, line3, socials } = footerItems
    return (
        <div className='flex flex-col gap-4'>
            <div className='flex gap-4 justify-between text-xl'>
                <RenderNavs items={line1} />
                <RenderNavs items={line2} />
                <RenderContctInfo item={line3} />
                <RenderNavs items={socials} />
            </div>
            <div className='m-auto'>{comp}</div>
            <RenderCopyright item={copyright} />
        </div>
    )
}

const RenderCopyright = ({ item }) => {
    return (
        <div className='flex gap-4 justify-center'>
            <span>2023</span>
            <span>{item}</span>
        </div>
    )
}

const RenderContctInfo = ({ item }) => {
    const { addr, email, tele } = item;
    const { name, txt, country } = addr;

    return (
        <div>
            <div>
                <div>{name}</div>
                <div>{txt}</div>
                <div>{country}</div>
            </div>
            <div>{email}</div>
            <div>{tele}</div>
        </div>
    )
}

const RenderNavs = ({ items }) => {
    const renderItems = () => items.map(item => <div key={item}>{item}</div>)

    return (
        <div>{renderItems()}</div>
    )
}