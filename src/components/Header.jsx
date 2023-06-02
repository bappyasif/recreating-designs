import React from 'react'
import {topNavs} from "../data"

const Header = () => {
    const {logo, navs, other} = topNavs
  return (
    <div>
        <CompLogo />
        <RenderNavs />
        <RenderOther />
    </div>
  )
}

const RenderOther = ({item}) => {
    return (
        <div>{item}</div>
    )
}

const RenderNavs = ({items}) => {
    const renderItems = () => items?.map(name => <span key={name}>{name}</span>)

    return (
        <div>
            {renderItems()}
        </div>
    )
}

const CompLogo = ({item}) => {
    const {icon, name} = item

    return (
        <div>
            <span>{icon}</span>
            <span>{name}</span>
        </div>
    )
}

export default Header