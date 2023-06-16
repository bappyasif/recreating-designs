import { useState } from "react"
import { testimonies } from "../../data"

export const Testimonials = () => {
    return (
        <div>
            <h2>Simply Just Amazing People</h2>
            <h2>Testimonials</h2>
            <ShowPieces />
        </div>
    )
}

const ShowPieces = () => {
    const [currSlide, setCurrSlide] = useState(0)
    const handleCurrent = (v) => setCurrSlide(v);
    const renderItems = () => testimonies.map((item, idx) => <RenderSlide key={item.name} item={item} currSlide={currSlide} idx={idx} />);
    const renderTitles = () => testimonies.map((item, idx) => <RenderSlideTitle key={item.title} text={item.title} handleCurrent={handleCurrent} idx={idx} />)
    return (
        <div>
            <div>{renderTitles()}</div>
            <div>{renderItems()}</div>
        </div>
    )
}

const RenderSlideTitle = ({ text, handleCurrent, idx }) => {
    const handleClick = () => {
        handleCurrent(idx)
    }
    return (
        <h2 onClick={handleClick}>{text}</h2>
    )
}

const RenderSlide = ({ item, currSlide, idx }) => {
    const { text, name } = item;

    return (
        currSlide === idx
            ?
            <div>
                <h2>{text}</h2>
                <h3>
                    <span>{name}</span>
                    <span>client</span>
                </h3>
            </div>
            : null
    )
}