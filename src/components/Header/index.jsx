import { GiHamburgerMenu } from "react-icons/gi"
import { header } from "../../data"
import { Link } from "react-router-dom"
import { GrClose } from "react-icons/gr"
import { useState } from "react"

export const Header = () => {
    const { call, company, navs, socials } = header
    const [show, setShow] = useState(false);

    const handleToggle = () => setShow(prev => !prev);
    const handleClose = () => setShow(false)

    return (
        <div className="xxs:px-2 lg:px-40 flex justify-between items-baseline gap-4">
            <RenderCompany item={company} />
            <div className="w-2/3 xxs:hidden lg:flex justify-between items-baseline gap-4">
                <RenderNavs navs={navs} />
                <RenderNumber item={call} />
                <RenderSocials items={socials} />
            </div>
            <div
                className="xxs:block lg:hidden text-3xl relative"
                onClick={handleToggle}
            >
                <GiHamburgerMenu />
            </div>

            {
                show
                    ? <ShowDropdownMenu navs={navs} handleClose={handleClose} />
                    : null
            }
        </div>
    )
}

const ShowDropdownMenu = ({ navs, handleClose }) => {
    return (
        <div className="absolute right-0 top-0 bg-slate-900 px-4 
        xxs: w-1/2 md:w-1/4 flex justify-between">
            <div 
                className="mt-10 opacity-90"
                onClick={handleClose}
            >
                <RenderNavs navs={navs} topDown={true} />
            </div>
            <span
                className="text-slate-200 font-bold h-fit w-fit text-2xl bg-slate-600 rounded-full py-1 px-2 my-4"
                onClick={handleClose}
            >
                <GrClose />
            </span>
        </div>
    )
}

const RenderCompany = ({ item }) => {
    return (
        <h1>{item}</h1>
    )
}

const RenderNavs = ({ navs, topDown }) => {
    const renderItems = () => navs.map(item => <span key={item.name}><Link to={item.to}>{item.name}</Link></span>)

    return (
        <div className={`flex ${topDown ? "flex-col" : "flex-row"} gap-4 text-xl`}>{renderItems()}</div>
    )
}

const RenderNumber = ({ item }) => {
    return (
        <div className="text-2xl">{item}</div>
    )
}

const RenderSocials = ({ items }) => {
    const renderItems = () => items.map(item => <RenderSocial key={item.name} item={item} />)

    return (
        <div className="flex gap-4 text-xl">
            {renderItems()}
        </div>
    )
}

const RenderSocial = ({ item }) => {
    const { name, icon } = item;

    return (
        <div title={name}>
            {icon}
        </div>
    )
}