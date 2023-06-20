import { useState } from "react"
import { testimonies } from "../../data"

export const Testimonials = () => {
    return (
        <div id="Testimonials" className='flex flex-col gap-6'>
            <div className="flex flex-col gap-4 items-center justify-center w-full">
                <h2>Simply Just Amazing People</h2>
                <h2 className="text-4xl">Testimonials</h2>
                <ShowPieces />
            </div>
            {/* <ShowPieces /> */}
        </div>
    )
}

const ShowPieces = () => {
    const [currSlide, setCurrSlide] = useState(0)
    
    const handleCurrent = (v) => setCurrSlide(v);
    
    const renderItems = () => testimonies.map((item, idx) => <RenderSlide key={item.name} item={item} currSlide={currSlide} idx={idx} />);
    
    const renderTitles = () => testimonies.map((item, idx) => <RenderSlideTitle key={item.title} text={item.title} handleCurrent={handleCurrent} idx={idx} />)
    
    return (
        <div className='grid grid-cols-2 content-center relative'>
            {renderItems()}
            <div className="absolute right-0 col-span-1 grid content-center place-items-center gap-y-4">{renderTitles()}</div>
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
            <div
                className="col-span-2 self-end flex flex-col justify-center items-center gap-y-6"
            >
                <h2 className="text-4xl w-3/4">{text} Quos, nulla quaerat. Rerum, asperiores adipisci, nesciunt ut provident pariatur dignissimos voluptatibus ea voluptate quam eius ratione voluptas voluptatem delectus repellendus est.</h2>
                <h3 className="flex gap-2 text-2xl">
                    <span>{name},</span>
                    <span>client</span>
                </h3>
            </div>
            : null
    )
}