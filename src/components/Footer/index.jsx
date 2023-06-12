import React from 'react'
import { footerItems } from '../../data'
import Newsletter from './Newsletter'
import Copyrights from './Copyrights'
import { CompLogo } from '../Header'

export const Footer = () => {
    const { navs, newsletter, more } = footerItems

    return (
        <div className='flex flex-col gap-9'>
            <RenderNavs navs={navs} />
            <Newsletter item={newsletter} />
            <Copyrights item={more} />
        </div>
    )
}

const RenderNavs = ({ navs }) => {
    const { socials, links, logo } = navs

    const renderSocials = () => socials.map((item, idx) => <RenderSocial key={idx} item={item} />)

    return (
        <div className='flex xxs:flex-col md:flex-row justify-between xxs:gap-6'>
            <div>
                <CompLogo item={logo} />
                <div className='flex gap-4'> {renderSocials()} </div>
            </div>
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
        <div className='flex xxs:flex-col sm:flex-row xxs:gap-6 justify-between xxs:w-full md:w-2/3'>
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
            <h2 className='text-2xl font-monoton'>{titTxt}</h2>
            <div>{children}</div>
        </div>
    )
}

export const RenderLink = ({ item }) => {
    return (
        <div className='font-macondo text-xl'>{item}</div>
    )
}

const RenderSocial = ({ item }) => {
    const { icon } = item;

    return (
        <div className='text-4xl'>{icon}</div>
    )
}
