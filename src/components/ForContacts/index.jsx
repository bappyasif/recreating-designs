import { formFields, gitwu } from "../../data/contacts"

export const GetInTouchWithUs = () => {
    const { text, ways } = gitwu
    const renderWays = () => ways.map(item => <RenderWay key={item.heading} item={item} />)
    return (
        <div className="col-start-1 col-span-2 flex flex-col gap-6">
            <h2 className="text-6xl">Get-In-Touch</h2>
            <h4 className="text-xl">{text}</h4>
            <div className="flex flex-col gap-6">
                {renderWays()}
            </div>
        </div>
    )
}

const RenderWay = ({ item }) => {
    const { heading, info } = item;

    return (
        <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold">{heading}</h2>
            <p className="text-xl ml-6">{info}</p>
        </div>
    )
}

export const MessageForm = () => {
    const renderFieldsets = () => formFields.map(item => <RenderFieldset key={item.name} item={item} />);

    return (
        <form className="col-start-4 text-xl flex flex-col gap-4" action="">
            <div className="flex flex-col gap-6">{renderFieldsets()}</div>
            <button className='w-fit p-0 px-20 py-1 text-3xl bg-slate-400 text-slate-900' type="submit">Send</button>
        </form>
    )
}

const RenderFieldset = ({ item }) => {
    const { type, placeholder, name } = item;

    return (
        <fieldset className="w-full">
            <label htmlFor={name}></label>
            {
                name === "message"
                ? <textarea className="w-full" name={name} id="" cols="21" rows="6" placeholder={placeholder}></textarea>
                : <input className="w-full h-11" id={name} type={type} placeholder={placeholder} />
            }
        </fieldset>
    )
}