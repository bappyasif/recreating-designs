import React from 'react'
import { navsLeft, navsRight } from '../data/forRendering'
import { RenderLink } from './Footer'

export const Header = () => {
    
  return (
    <header className='flex w-4/6 justify-between gap-4'>
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
            <div className='flex flex-col gap-2 uppercase text-2xl font-extrabold'>
                <span className='font-monoton'>Golden</span>
                <span className='font-monoton'>Ramen</span>
            </div>
        </div>
    )
}

const RenderNavs = ({navs}) => {
    const renderNavs = () => navs?.map(name => <RenderLink key={name} name={name} />)
    return (
        <nav className='font-bold flex gap-4 font-righteous'>
            {renderNavs()}
        </nav>
    )
}