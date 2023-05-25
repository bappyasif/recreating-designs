import React from 'react'
import { compLogo, topNavs } from '../data'

export const Header = () => {
  return (
    <div>
        <CompanyLogo />
        <RenderNavs />
    </div>
  )
}

export const CompanyLogo = () => {
    const {name, icon} = compLogo[0]
    return (
        <div>
            <img src="#" alt="logo" />
            <h1>{name}</h1>
        </div>
    )
}

const RenderNavs = () => {
    const renderNavs = () => topNavs?.map(name => <li key={name}>{name}</li>)
    return (
        <ul>
            {renderNavs()}
        </ul>
    )
}
