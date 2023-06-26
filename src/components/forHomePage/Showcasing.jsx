import { useState } from "react"
import { galleries, testimonials } from "../../data"

export const Showcasing = () => {
  return (
    <div className="flex justify-between">
        <ShowTestimonials />
        <PhotoGalleries />
    </div>
  )
}

const ShowTestimonials = () => {
    const [testimony, setTestimony] = useState("Jane Doe")

    // const renderItems = () => testimonials.map(item)

    const getTestimony = () => testimonials.filter(item => item.name === testimony)[0]

    const getClients = () => testimonials.map(item => item.name);

    const handleClient = (name) => setTestimony(name);

    // console.log(getTestimony(), getClients())

    return (
        <div>
            <p>Testimonials</p>
            <h1>Satisfied Customers</h1>
            <ShowTestimonial item={getTestimony()} />
            <TestimonyButtons clients={getClients()} handleClient={handleClient} />
            
            {/* <div>
                {renderItems()}
            </div> */}
        </div>
    )
}

const TestimonyButtons = ({clients, handleClient}) => {
    const renderItems = () => clients?.map(item => <button onClick={() => handleClient(item)}>[.]</button>)
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
        <div>
            <p>galleries</p>
            <h2>photo galleries</h2>
            <div className="flex gap-4 flex-wrap">
                {renderItems()}
            </div>
        </div>
    )
}

const RenderPhoto = ({item}) => {
    return (
        <img 
            className="w-60 h-60"
            src={item} 
            alt={item} 
        />
    )
}