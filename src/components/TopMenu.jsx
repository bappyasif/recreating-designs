import React from 'react'
import { topNavs } from '../data'
import { BiGrid, BiSearchAlt2 } from 'react-icons/bi'

export const TopMenu = () => {
    return (
        <div className='w-full flex justify-end'>
            <div 
                className='flex justify-between items-baseline
                pr-6 pl-2 text-4xl py-2 bg-slate-900'
                style={{width: "65%"}}
            >
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
        <div className='h-fit flex gap-4 items-baseline w-fit'>
            <span className='outline outline-2 outline-slate-300 px-2 py-1 rounded-lg'><BiSearchAlt2 /></span>
            <span className='outline outline-2 outline-slate-300 px-2 py-1 rounded-lg'><BiGrid /></span>
        </div>
    )
}