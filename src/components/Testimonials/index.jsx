import { useState } from "react"
import { testimonies } from "../../data"

export const Testimonials = () => {
    return (
        <div 
            id="Testimonials" 
            className='flex flex-col gap-6 py-10'
            style={{
                backgroundImage: "url('https://source.unsplash.com/random/?abstract,blue,water,calm,lowlights')",
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
                objectFit: "contain"
              }}
        >
            <div className="flex flex-col gap-10 items-center justify-center w-full">
                <h2 className="text-slate-900">Simply Just Amazing People</h2>
                <h2 className="text-4xl text-slate-900 font-bold">Testimonials</h2>
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
        <div className='grid grid-cols-2 content-center gap-y-10 relative'>
            {renderItems()}
            <div className="absolute right-40 -top-28 col-start-1 grid content-center place-items-center gap-y-4">{renderTitles()}</div>
        </div>
    )
}

const RenderSlideTitle = ({ text, handleCurrent, idx }) => {
    const handleClick = () => {
        handleCurrent(idx)
    }
    return (
        <button className="bg-slate-800 opacity-90 text-right w-full p-0 px-4" onClick={handleClick}>{text}</button>
    )
}

const RenderSlide = ({ item, currSlide, idx }) => {
    const { text, name } = item;

    return (
        currSlide === idx
            ?
            <div
                className="col-span-2 self-end flex flex-col justify-center items-center gap-y-20"
            >
                <h2 className="text-4xl w-3/4 bg-slate-900 opacity-80 px-4 text-justify">{text} Quos, nulla quaerat. Rerum, asperiores adipisci, nesciunt ut provident pariatur dignissimos voluptatibus ea voluptate quam eius ratione voluptas voluptatem delectus repellendus est.</h2>
                <h3 className="flex gap-2 text-2xl bg-slate-800 opacity-80 px-4">
                    <span>{name},</span>
                    <span>client</span>
                </h3>
            </div>
            : null
    )
}