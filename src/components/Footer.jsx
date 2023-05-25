import React from 'react'
import { CompanyLogo } from './Header'
import { footers } from '../data'

export const Footer = () => {
    const { product, company, additionals, newsletter } = footers
    return (
        <div>
            <div>
                <CompanyLogo />
                <RenderNavs items={product} title={"Product"} />
                <RenderNavs items={company} title={"Company"} />
                <RenderNewsLetter item={newsletter} />
            </div>
            <p>divider</p>
            <RenderAdditionals items={additionals} />
        </div>
    )
}

const RenderAdditionals = ({ items }) => {
    const { moreLinks, links } = items;

    return (
        <div>
            <RenderMoreLinks names={moreLinks} />
            <RenderSocials items={links} />
        </div>
    )
}

const RenderSocials = ({ items }) => {
    const renderSocials = () => items?.map(item => <span>{item.icon}</span>)

    return (
        <div>
            {renderSocials()}
        </div>
    )
}

const RenderMoreLinks = ({ names }) => {
    const renderNames = () => names?.map(name => <p key={name}>{name}</p>)
    return (
        <div>
            {renderNames()}
        </div>
    )
}

const RenderNewsLetter = ({ item }) => {
    const { title, btnTxt } = item
    return (
        <div>
            <h2>{title}</h2>
            <button>{btnTxt}</button>
            <input type="text" placeholder='enter your email here....' />
        </div>
    )
}

const RenderNavs = ({ items, title }) => {
    const renderNavs = () => items?.map(item => <RenderNav key={item} item={item} />)

    return (
        <div>
            <h2>{title}</h2>
            <div>
                {renderNavs()}
            </div>
        </div>
    )
}

const RenderNav = ({ item }) => {
    return (
        <div>{item}</div>
    )
}