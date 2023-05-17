import React from 'react'
import { navsLeft, navsRight } from '../data/forRendering'
import {MdEmail, MdFacebook, MdMyLocation} from "react-icons/md"
import { FiInstagram } from 'react-icons/fi'



export const FooterContent = () => {
    return (
        <footer className='flex flex-col items-center'>
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
        <div className='flex gap-4 justify-between my-4 w-3/4'>
            <SubscriptionLink />
            <SocialLinks />
        </div>
    )
}

const SocialLinks = () => {
    const socials = [
        {name: "location", icon: <MdMyLocation />},
        {name: "facebook", icon: <MdFacebook />},
        {name: "instagram", icon: <FiInstagram />}
    ]
    const renderLinks = () => socials.map(item => <a className='text-2xl bg-yellow-400 rounded-full flex items-center p-1' key={item.name}>{item.icon}</a>)
    return (
        <div className='flex gap-4'>
            {renderLinks()}
        </div>
    )
}

const SubscriptionLink = () => {
    return (
        <div className='flex items-center gap-6 bg-yellow-600'>
            <input className='text-xl w-fit h-full' type="text" placeholder='Enter your email address'/>
            <span className='text-xl pr-5'><MdEmail /></span>
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