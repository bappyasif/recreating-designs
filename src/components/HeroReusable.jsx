import heroImg from "../assets/heroImg.jpg"

export const HeroReusable = ({ items }) => {
    const { subHeading, heading, description, socials } = items;

    return (
        <div
            className="relative h-1/2 w-full bg-cover opacity-70 
            flex flex-col justify-center items-center"
            style={{
                // backgroundImage: "url('../assets/heroImg.jpg')"
                backgroundImage: `url(${heroImg})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: "690px"
            }}
        >
            <div className="flex flex-col gap-6 items-center">
                <RenderSubHeading item={subHeading} />
                <div className="flex flex-col gap-0 items-center">
                    <RenderHeading item={heading} />
                    <RenderDescription item={description} />
                </div>
            </div>
            <div className="absolute bottom-0 right-0">
                <RenderSocials items={socials} />
            </div>
        </div>
    )
}

const RenderSubHeading = ({ item }) => {
    return (
        <p className="xxs:text-lg lg:text-2xl">{item}</p>
    )
}

const RenderHeading = ({ item }) => {
    return (
        <h2 className="xxs:text-5xl lg:text-7xl font-bold">{item}</h2>
    )
}

const RenderDescription = ({ item }) => {
    return (
        <p className="xxs:text-sm lg:text-4xl w-3/5 text-center">{item}</p>
    )
}

export const RenderSocials = ({ items }) => {
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
            <span className="text-4xl">{icon}</span>
        </div>
    )
}