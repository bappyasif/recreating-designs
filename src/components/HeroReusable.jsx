export const HeroReusable = ({ items }) => {
    const { subHeading, heading, description, socials } = items;

    return (
        <div>
            <RenderSubHeading item={subHeading} />
            <RenderHeading item={heading} />
            <RenderDescription item={description} />
            <RenderSocials items={socials} />
        </div>
    )
}

const RenderSubHeading = ({ item }) => {
    return (
        <p>{item}</p>
    )
}

const RenderHeading = ({ item }) => {
    return (
        <h2>{item}</h2>
    )
}

const RenderDescription = ({ item }) => {
    return (
        <p>{item}</p>
    )
}

const RenderSocials = ({ items }) => {
    const renderItems = () => items?.map(item => <RenderSocial key={item.name} item={item} />)

    return (
        <div className="flex gap-4">
            {renderItems()}
        </div>
    )
}

const RenderSocial = ({ item }) => {
    const { name, icon } = item;

    return (
        <div title={name}>
            <span>{icon}</span>
        </div>
    )
}