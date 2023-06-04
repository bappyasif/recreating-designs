import React from 'react'
import { footerItems } from '../../data'
import Newsletter from './Newsletter'
import Copyrights from './Copyrights'

export const Footer = () => {
    const { navs, newsletter, more } = footerItems
    
    return (
        <div>
            <RenderNavs navs={navs} />
            <Newsletter item={newsletter} />
            <Copyrights item={more} />
        </div>
    )
}

const RenderNavs = ({ navs }) => {
    const { socials, links } = navs

    const renderSocials = () => socials.map((item, idx) => <RenderSocial key={idx} item={item} />)

    return (
        <div>
            <h2>ABCD</h2>
            <div> {renderSocials()} </div>
            <RenderLinks links={links} />
        </div>
    )
}

const RenderLinks = ({ links }) => {
    const { product, company, resources } = links;
    const renderProductNavs = () => product.map(item => <RenderLink key={item} item={item} />)
    const renderCompanyNavs = () => company.map(item => <RenderLink key={item} item={item} />)
    const renderResourcesNavs = () => resources.map(item => <RenderLink key={item} item={item} />)

    return (
        <div>
            <ReUseable titTxt={"Products"}>
                {renderProductNavs()}
            </ReUseable>
            <ReUseable titTxt={"Company"}>
                {renderCompanyNavs()}
            </ReUseable>
            <ReUseable titTxt={"Resources"}>
                {renderResourcesNavs()}
            </ReUseable>
        </div>
    )

}

const ReUseable = ({ children, titTxt }) => {
    return (
        <div>
            <h2>{titTxt}</h2>
            <div>{children}</div>
        </div>
    )
}

export const RenderLink = ({ item }) => {
    return (
        <div>{item}</div>
    )
}

const RenderSocial = ({ item }) => {
    const { icon } = item;

    return (
        <div>{icon}</div>
    )
}
