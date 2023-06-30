import React from 'react'
import { footers } from '../data'
import { RenderSocials } from './HeroReusable'

export const Footer = () => {
    return (
        <div className='flex flex-col items-center gap-6'>
            <div className='flex justify-between gap-4'>
                <AboutCompany />
                <RenderFooterLinks />
                <CompanyContacts />
            </div>
            <ShowCopyrights />
        </div>
    )
}

const AboutCompany = () => {
    const { connect, description, heading } = footers.about;
    const { socials, title } = connect;

    return (
        <div className='flex flex-col gap-6 justify-between'>
            <h2>{heading}</h2>
            <p>{description}</p>
            <div>
                <h2>{title}</h2>
                <RenderSocials items={socials} />
            </div>
        </div>
    )
}

const RenderFooterLinks = () => {
    const renderLinks = () => footers.links.map(item => <FooterLinks key={item.heading} item={item} />)

    return (
        <div className='flex gap-6 w-2/4 justify-evenly'>
            {renderLinks()}
        </div>
    )
}

const FooterLinks = ({ item }) => {
    const { heading, items } = item;

    const renderItems = () => items.map(item => <p key={item}>{item}</p>)

    return (
        <div className='flex flex-col gap-2'>
            <h2 className='text-2xl'>{heading}</h2>
            <div className='flex flex-col gap-2'>{renderItems()}</div>
        </div>
    )
}

const CompanyContacts = () => {
    const { line1, line2, line3, line4 } = footers.contact;

    return (
        <div className='flex flex-col gap-2'>
            <h2 className='text-2xl'>Contact</h2>
            <p>{line1}</p>
            <p>{line2}</p>
            <p>{line3}</p>
            <p>{line4}</p>
        </div>
    )
}

const ShowCopyrights = () => {
    const getYear = () => new Date().getFullYear()
    return (
        <div>Copyright &copy;<span>{getYear()}</span> All rights reserved by <span>a b</span> | This template is recreated from Colorlib free templates</div>
    )
}