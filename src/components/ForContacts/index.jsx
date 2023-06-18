import { formFields, gitwu } from "../../data/contacts"

export const GetInTouchWithUs = () => {
    const { text, ways } = gitwu
    const renderWays = () => ways.map(item => <RenderWay key={item.heading} item={item} />)
    return (
        <div>
            <h2>{text}</h2>
            <div>
                {renderWays()}
            </div>
        </div>
    )
}

const RenderWay = ({ item }) => {
    const { heading, info } = item;

    return (
        <div>
            <h2>{heading}</h2>
            <p>{info}</p>
        </div>
    )
}

export const MessageForm = () => {
    const renderFieldsets = () => formFields.map(item => <RenderFieldset key={item.name} item={item} />);

    return (
        <form action="">
            <div>{renderFieldsets()}</div>
            <button className='w-fit p-0 px-20 py-1 text-3xl self-center' type="submit">Send</button>
        </form>
    )
}

const RenderFieldset = ({ item }) => {
    const { type, placeholder, name } = item;

    return (
        <fieldset>
            <label htmlFor={name}></label>
            <input id={name} type={type} placeholder={placeholder} />
        </fieldset>
    )
}