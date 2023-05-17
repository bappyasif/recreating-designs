import React from 'react'
import { navsLeft, navsRight, socials } from '../data/forRendering'
import {MdEmail} from "react-icons/md"



export const FooterContent = () => {
    return (
        <footer>
            <div className='flex gap-6'>
                <RenderCompanyLogo />
                <p><span>Subscribe for deals,</span><span>offers & upcoming events</span></p>
                <RenderNavs />
            </div>
            <MoreContents />
        </footer>
    )
}

const MoreContents = () => {
    return (
        <div>
            <SubscriptionLink />
            <SocialLinks />
        </div>
    )
}

const SocialLinks = () => {
    const renderLinks = () => socials.map(item => <a key={item.name}>{item.name[0]}</a>)
    return (
        <div>
            {renderLinks()}
        </div>
    )
}

const SubscriptionLink = () => {
    return (
        <div className='flex gap-1'>
            <input type="text" placeholder='Enter your email address'/>
            <span className='text-4xl'><MdEmail /></span>
        </div>
    )
}

const RenderNavs = () => {
    const topLinks = () => navsLeft.map(name => <a key={name} className='bg-zinc-400 m-2 p-2' href="#">{name}</a>)
    const botLinks = () => navsRight.map(name => <a key={name} className='bg-zinc-400 m-2 p-2' href="#">{name}</a>)
    return (
        <div className='flex flex-col gap-4'>
            <nav>{topLinks()}</nav>
            <nav>{botLinks()}</nav>
        </div>
    )
}

const RenderCompanyLogo = () => {
    return (
        <div className='flex items-center text-2xl font-bold'>
            <img src="./src/assets/ramen.png" alt="company logo" />
            <p className='flex flex-col'><span>Golden</span><span>Ramen</span></p>
        </div>
    )
}