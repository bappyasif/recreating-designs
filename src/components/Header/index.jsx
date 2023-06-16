import { header } from "../../data"

export const Header = () => {
    const {call, company, navs, socials} = header
  return (
    <div>
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
    const renderItems = () => navs.map(item => <span key={item}>{item}</span>)

    return (
        <div>{renderItems()}</div>
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
        <div>
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