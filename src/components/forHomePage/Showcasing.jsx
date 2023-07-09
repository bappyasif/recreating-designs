import { galleries, testimonials } from "../../data"
import { useOnButtonSliders } from "../../hooks"
import {CgSquare} from "react-icons/cg"


export const Showcasing = () => {
    return (
        <div className="flex xxs:flex-col lg:flex-row justify-center mx-auto xxs:w-full lg:w-3/4">
            <ShowTestimonials />
            <PhotoGalleries />
        </div>
    )
}

const ShowTestimonials = () => {
    // const [testimony, setTestimony] = useState("Jane Doe")

    // const renderItems = () => testimonials.map(item)

    const { handleSlide, slideName } = useOnButtonSliders("Jane Doe")

    const getTestimony = () => testimonials.filter(item => item.name === slideName)[0]

    const getClients = () => testimonials.map(item => item.name);

    // const handleClient = (name) => setTestimony(name);

    // console.log(getTestimony(), getClients())

    return (
        <div className="flex flex-col xxs:items-center lg:items-start gap-6 lg:w-3/4">
            <p>Testimonials</p>
            <h1 className="xxs:text-2xl lg:text-5xl">Satisfied Customers</h1>
            <ShowTestimonial item={getTestimony()} />
            <SliderButtons slides={getClients()} handleSlide={handleSlide} />

            {/* <div>
                {renderItems()}
            </div> */}
        </div>
    )
}

export const SliderButtons = ({ slides, handleSlide }) => {
    const renderItems = () => slides?.map(item => <button className="p-0 text-2xl" onClick={() => handleSlide(item)}><CgSquare /></button>)
    return (
        <div className="flex gap-4">
            {renderItems()}
            
        </div>
    )
}

const ShowTestimonial = ({ item }) => {
    const { name, role, text, img } = item;

    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-6 items-center lg:w-1/4">
                <img className="w-32 h-28 rounded-full" src={img} alt={name} />
                <div className="flex flex-col gap-2">
                    <h2>{name}</h2>
                    <h3>{role}</h3>
                </div>
            </div>
            <p className="lg:w-2/3 text-justify">{text}</p>
        </div>
    )
}

const PhotoGalleries = () => {
    const renderItems = () => galleries.map((item, idx) => idx < 4 && <RenderPhoto key={idx} item={item.img} />)

    return (
        <div className="flex flex-col xxs:items-center lg:items-start gap-6 lg:w-2/4">
            <p>galleries</p>
            <h2 className="text-5xl">Photo Galleries</h2>
            <div className="flex xxs:gap-4 lg:gap-10 flex-wrap justify-around">
                {renderItems()}
            </div>
        </div>
    )
}

const RenderPhoto = ({ item }) => {
    return (
        <img
            className="xxs:w-40 lg:w-64 h-40 object-fill hover:object-cover"
            src={item}
            alt={item}
        />
    )
}