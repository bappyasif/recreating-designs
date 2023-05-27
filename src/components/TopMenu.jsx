import React from 'react'
import { topNavs } from '../data'

export const TopMenu = () => {
  return (
    <div>
        <RenderLeftMenuView />
        <RenderRightMenuView />
    </div>
  )
}

const RenderRightMenuView = () => {
    const renderMenus = () => topNavs.map(name => <span key={name}>{name}</span>)
    return (
        <div>
            {renderMenus()}
        </div>
    )
}

const RenderLeftMenuView = () => {
    return (
        <div>
            <p>gif 1</p>
            <p>gif 2</p>
        </div>
    )
}