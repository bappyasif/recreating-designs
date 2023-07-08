import { chefs, choose, contacts, events, galleries } from "../../data"
import { RenderSocials } from "../HeroReusable"
import { ShowSlide } from "../forHomePage/Perks"

export const FoodsGallery = () => {
    const renderItems = () => galleries.map(item => <img className="xxs:w-1/3 lg:w-1/4 xxs:h-40 lg:h-80 rounded-xl hover:object-cover" src={item.img} alt={item.img} key={item.img} />)
    return (
        <div className="flex gap-4 xxs:justify-around lg:justify-center flex-wrap">
            {renderItems()}
        </div>
    )
}

export const ChooseUs = () => {
    const renderReasons = () => choose.map(item => <RenderReason key={item.idx} item={item} />)

    return (
        <div className="xxs:w-full lg:w-3/4 flex flex-col gap-6 items-center">
            <h2 className="xxs:text-2xl lg:text-4xl">Why Choose Us</h2>
            <div className="grid xxs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">{renderReasons()}</div>
        </div>
    )
}

const RenderReason = ({ item }) => {
    const { idx, title, description } = item;

    return (
        <div className="flex flex-col gap-6 items-center">
            <p>{idx}</p>
            <h2>{title}</h2>
            <p className="text-justify">{description}</p>
        </div>
    )
}

export const OurChefs = () => {
    const renderChefs = () => chefs.map(item => <RenderChef key={item.name} item={item} />)

    return (
        <div className="xxs:w-full lg:w-3/4 flex flex-col gap-6 items-center">
            <h2 className="xxs:text-2xl lg:text-4xl">Our Valued Popular Chefs</h2>
            <div className="grid xxs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">{renderChefs()}</div>
        </div>
    )
}

const RenderChef = ({ item }) => {
    const { name, role, socials } = item;

    return (
        <div className="flex flex-col gap-6 items-center">
            <img className="w-72 h-48" src={`https://source.unsplash.com/random/?chefs,${name},${role}`} alt={name} />
            <h2>{name}</h2>
            <h2>{role}</h2>
            <RenderSocials items={socials} />
        </div>
    )
}

export const RenderContacts = () => {
    return (
        <div className="xxs:w-full lg:w-2/3 mx-auto flex xxs:flex-col-reverse sm:flex-row gap-6 justify-center">
            <RenderAddresses />
            <RenderForm />
        </div>
    )
}

const RenderAddresses = () => {
    const renderInfo = () => contacts.details.map(item => <RenderInfo key={item.heading} item={item} />)

    return (
        <div className="flex flex-col gap-6">{renderInfo()}</div>
    )
}

const RenderInfo = ({ item }) => {
    const { heading, line1, line2, icon } = item;

    return (
        <div className="flex gap-4 items-start">
            <div className="bg-slate-600 p-2 rounded-full text-4xl">{icon}</div>
            <div>
                <h2 className="text-2xl">{heading}</h2>
                <p>{line1}</p>
                {line2 ? <p>{line2}</p> : null}
            </div>
        </div>
    )
}

const RenderForm = () => {
    const renderFields = () => contacts.fields.map(item => <RenderField key={item.label} item={item} />)

    return (
        <div className="flex flex-col gap-6">
            {renderFields()}
        </div>
    )
}

const RenderField = ({ item }) => {
    const { label, placeholder, type } = item;

    return (
        <div>
            <p>{label}</p>
            {
                label === "Message"
                    ? <textarea className="w-full" placeholder="type your message here" cols={36} rows={9} />
                    : <input className="w-full" type={type} placeholder={placeholder} />
            }
        </div>
    )
}

export const AllEvents = () => {
    const renderEvents = () => events.offers.map(item => <ShowSlide key={item.name} item={item} />)

    return (
        <div className="w-3/4 mx-auto">
            <h2>All Events</h2>
            <div className="flex flex-col gap-6">{renderEvents()}</div>
        </div>
    )
}