import { useState } from "react"
import { galleries, testimonials } from "../../data"
import { useOnButtonSliders } from "../../hooks"

export const Showcasing = () => {
  return (
    <div className="flex justify-center mx-auto w-2/3">
        <ShowTestimonials />
        <PhotoGalleries />
    </div>
  )
}

const ShowTestimonials = () => {
    // const [testimony, setTestimony] = useState("Jane Doe")

    // const renderItems = () => testimonials.map(item)

    const {handleSlide, slideName} = useOnButtonSliders("Jane Doe")

    const getTestimony = () => testimonials.filter(item => item.name === slideName)[0]

    const getClients = () => testimonials.map(item => item.name);

    // const handleClient = (name) => setTestimony(name);

    // console.log(getTestimony(), getClients())

    return (
        <div className="flex flex-col gap-6 w-2/4">
            <p>Testimonials</p>
            <h1>Satisfied Customers</h1>
            <ShowTestimonial item={getTestimony()} />
            <SliderButtons slides={getClients()} handleSlide={handleSlide} />
            
            {/* <div>
                {renderItems()}
            </div> */}
        </div>
    )
}

export const SliderButtons = ({slides, handleSlide}) => {
    const renderItems = () => slides?.map(item => <button onClick={() => handleSlide(item)}>[.]</button>)
    return (
        <div className="flex gap-4">
            {renderItems()}
        </div>
    )
}

const ShowTestimonial = ({item}) => {
    const {name, role, text, img} = item;

    return (
        <div>
            <img className="w-40 h-40 rounded-full" src={img} alt={name} />
            <h2>{name}</h2>
            <h3>{role}</h3>
            <p>{text}</p>
        </div>
    )
}

const PhotoGalleries = () => {
    const renderItems = () => galleries.map((item, idx) => idx < 4 && <RenderPhoto key={idx} item={item.img} />)

    return (
        <div className="flex flex-col gap-6">
            <p>galleries</p>
            <h2>photo galleries</h2>
            <div className="flex gap-10 flex-wrap">
                {renderItems()}
            </div>
        </div>
    )
}

const RenderPhoto = ({item}) => {
    return (
        <img 
            className="w-80 h-60"
            src={item} 
            alt={item} 
        />
    )
}