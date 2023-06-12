import React from 'react'
import { tabs } from '../../data'

export const TabsView = () => {
    const renderTabs = () => tabs.map(tab => <RenderTab key={tab} name={tab} />)
    return (
        <div className='flex xxs:flex-col md:flex-row gap-0.5 justify-between text-4xl text-slate-950 flex-wrap'>
            {renderTabs()}
        </div>
    )
}

const RenderTab = ({ name }) => {
    return (
        <div className={`${name === "Reviews" ? "bg-violet-950 text-slate-400" : "bg-slate-400"} xxs:w-full md:w-1/3 text-center shadow-2xl rounded-t-2xl`}>{name}</div>
    )
}