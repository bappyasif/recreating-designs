import React from 'react'
import { navsLeft, navsRight, socials } from '../data/forRendering'



export const FooterContent = () => {
    return (
        <footer>
            <RenderCompanyLogo />
            <p><span>Subscribe for deals,</span><span>offers & upcoming events</span></p>
            <RenderNavs />
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
        <div>
            <input type="text" />
            <span>"M"</span>
        </div>
    )
}

const RenderNavs = () => {
    const topLinks = () => navsLeft.map(name => <a key={name} className='bg-zinc-400 m-2 p-2' href="#">{name}</a>)
    const botLinks = () => navsRight.map(name => <a key={name} className='bg-zinc-400 m-2 p-2' href="#">{name}</a>)
    return (
        <div>
            <nav>{topLinks()}</nav>
            <nav>{botLinks()}</nav>
        </div>
    )
}

const RenderCompanyLogo = () => {
    return (
        <div>
            <img src="#" alt="company logo" />
            <p><span>Golden</span><span>Ramen</span></p>
        </div>
    )
}