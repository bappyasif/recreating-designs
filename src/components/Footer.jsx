import React from 'react'
import { navsLeft, navsRight } from '../data/forRendering'
import {MdArrowRight, MdDewPoint, MdEmail, MdFacebook, MdMyLocation, MdWifi1Bar} from "react-icons/md"
import { FiInstagram } from 'react-icons/fi'



export const FooterContent = () => {
    return (
        <footer className='w-4/6 flex flex-col items-center'>
            <div className='flex gap-6 justify-between w-full'>
                <RenderCompanyLogo />
                <p className='flex flex-col gap-2 text-xl'><span>Subscribe for deals,</span><span>offers & upcoming events</span></p>
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
    const renderLinks = () => socials.map(item => <a className='text-2xl bg-yellow-600 text-red-900 rounded-full flex items-center p-2' key={item.name}>{item.icon}</a>)
    return (
        <div className='flex gap-4'>
            {renderLinks()}
        </div>
    )
}

const SubscriptionLink = () => {
    return (
        <div className='flex items-center bg-yellow-600'>
            <input className='text-xl w-fit h-full' type="text" placeholder='Enter your email address'/>
            <button className='p-0 py-2 bg-transparent px-2 text-2xl'><MdEmail /></button>
        </div>
    )
}

const RenderNavs = () => {
    const topLinks = () => navsLeft.map(name => <RenderLink key={name} name={name} />)
    const botLinks = () => navsRight.map(name => <RenderLink key={name} name={name} />)
    return (
        <div className='flex flex-col gap-4'>
            <nav className='flex gap-1'>{topLinks()}</nav>
            <nav className='flex gap-1'>{botLinks()}</nav>
        </div>
    )
}

export const RenderLink = ({name}) => {
    return (
        <a key={name} className='text-red-950 flex items-center justify-between' href="#">
            <span className='px-2 text-2xl'><MdArrowRight /></span>
            <span className='px-1'>{name}</span>
        </a>
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