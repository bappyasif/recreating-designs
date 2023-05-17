import React from 'react'
import { navsLeft, navsRight } from '../data/forRendering'

export const Header = () => {
    
  return (
    <header className='flex'>
        <RenderNavs navs={navsLeft} />
        <CompanyLogo /> 
        <RenderNavs navs={navsRight} />
    </header>
  )
}

const CompanyLogo = () => {
    return (
        <div className='flex gap-1'>
            {/* <img src="./src/assets/logo.jpg" alt="golden ramen logo" height={63} width={54} /> */}
            <img src="./src/assets/ramen.png" alt="golden ramen logo" height={63} width={54} />
            <div className='flex flex-col gap-2 uppercase'>
                <span>Golden</span>
                <span>Ramen</span>
            </div>
        </div>
    )
}

const RenderNavs = ({navs}) => {
    const renderNavs = () => navs?.map(name => <RenderNavLink key={name} name={name} />)
    return (
        <nav className='mt-2 font-bold'>
            {renderNavs()}
        </nav>
    )
}

const RenderNavLink = ({name}) => {
    return (
        <a className='bg-zinc-400 m-2 p-2' href="#">{name}</a>
    )
}