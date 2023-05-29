import React from 'react'
import { topNavs } from '../data'
import { BiGrid, BiSearchAlt2 } from 'react-icons/bi'

export const TopMenu = () => {
    return (
        <div className='w-full bg-slate-600 flex justify-end'>
            <div className='w-3/4 flex justify-between px-6 text-4xl'>
                <RenderLeftMenuView />
                <RenderRightMenuView />
            </div>
        </div>
    )
}

const RenderRightMenuView = () => {
    const renderMenus = () => topNavs.map(name => <span key={name}>{name}</span>)
    return (
        <div className='w-2/4 flex justify-between text-2xl'>
            {renderMenus()}
        </div>
    )
}

const RenderLeftMenuView = () => {
    return (
        <div className='flex gap-4 items-center'>
            <span><BiSearchAlt2 /></span>
            <span><BiGrid /></span>
        </div>
    )
}