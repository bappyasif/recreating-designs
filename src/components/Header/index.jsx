import { header } from "../../data"
import {Link} from "react-router-dom"

export const Header = () => {
    const {call, company, navs, socials} = header
  return (
    <div className="flex justify-between items-center gap-4">
        <RenderCompany item={company} />
        <RenderNavs navs={navs} />
        <RenderNumber item={call} />
        <RenderSocials items={socials} />
    </div>
  )
}

const RenderCompany = ({item}) => {
    return (
        <h1>{item}</h1>
    )
}

const RenderNavs = ({navs}) => {
    const renderItems = () => navs.map(item => <span key={item.name}><Link to={item.to}>{item.name}</Link></span>)

    return (
        <div className="flex gap-4">{renderItems()}</div>
    )
}

const RenderNumber = ({item}) => {
    return (
        <div>{item}</div>
    )
}

const RenderSocials = ({items}) => {
    const renderItems = () => items.map(item => <RenderSocial key={item.name} item={item} />)

    return (
        <div className="flex gap-4">
            {renderItems()}
        </div>
    )
}

const RenderSocial = ({item}) => {
    const {name, icon} = item;

    return (
        <div title={name}>
            {icon}
        </div>
    )
}