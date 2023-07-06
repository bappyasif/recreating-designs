import React from 'react'
import { booking, events } from '../../data'
import { SliderButtons } from './Showcasing'
import { useOnButtonSliders } from '../../hooks'

export const Perks = () => {
    return (
        <div className='flex flex-col gap-20 w-2/3'>
            <EventsHeadings />
            <EventsSliders />
        </div>
    )
}

const EventsHeadings = () => {
    const { title, description } = events.headings;
    return (
        <div className='flex flex-col gap-6 items-center w-3/4 mx-auto'>
            <p>Events</p>
            <h2 className='text-6xl'>{title}</h2>
            <p className=''>{description}</p>
        </div>
    )
}

const EventsSliders = () => {
    // const renderSlides = () => events.offers.map(item => <ShowSlide key={item.name} item={item} />);

    const { handleSlide, slideName } = useOnButtonSliders("Birthday Party")

    const getEvents = () => events.offers.map(item => item.name);

    const getEvent = () => events.offers.filter(item => item.name === slideName)[0]

    return (
        <div className='flex flex-col gap-6'>
            {/* <div>{renderSlides()}</div> */}
            <ShowSlide item={getEvent()} />
            <SliderButtons slides={getEvents()} handleSlide={handleSlide} />
        </div>
    )
}

export const ShowSlide = ({ item }) => {
    const { name, price, description, img, perks } = item;

    const renderPerks = () => perks.map(item => <li key={item}>{item}</li>)

    const decideFlow = () => {
        if (["Birthday Party", "Gala Party"].includes(name)) {
            return true
        } else {
            return false
        }
    }

    return (
        <div className={`flex ${decideFlow() ? "flex-row-reverse" : "flex-row"} gap-6 `}>
            <img className="w-1/2 h-72 rounded-xl" src={img} alt={name} />
            <div className='w-1/2 flex flex-col gap-4'>
                <h2 className='text-2xl'>{price}</h2>
                <h2 className='text-4xl'>{name}</h2>
                <p>{description}</p>
                <ul className='list-inside list-disc'>
                    {renderPerks()}
                </ul>
            </div>
        </div>
    )
}

export const BookTable = () => {
    const { description, heading, subHeading } = booking
    return (
        <div className='flex flex-col items-center gap-6'>
            <p>{subHeading}</p>
            <h2 className='text-4xl'>{heading}</h2>
            <p className='text-xl'>{description}</p>
            <button className='h-fit p-0 px-10 py-1 text-2xl'>Book Your Table Now</button>
        </div>
    )
}