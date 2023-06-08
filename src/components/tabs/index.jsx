import React from 'react'
import { tabs } from '../../data'

export const TabsView = () => {
    const renderTabs = () => tabs.map(tab => <RenderTab key={tab} name={tab} />)
    return (
        <div className='flex gap-4 justify-between text-4xl'>
            {renderTabs()}
        </div>
    )
}

const RenderTab = ({ name }) => {
    return (
        <div>{name}</div>
    )
}