import React from 'react'
import { booking, events } from '../../data'
import { SliderButtons } from './Showcasing'
import { useOnButtonSliders } from '../../hooks'

export const Perks = () => {
    return (
        <div className='flex flex-col gap-6'>
            <EventsHeadings />
            <EventsSliders />
        </div>
    )
}

const EventsHeadings = () => {
    const { title, description } = events.headings;
    return (
        <div className='flex flex-col gap-6 items-center'>
            <p>Events</p>
            <h2>{title}</h2>
            <p>{description}</p>
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

const ShowSlide = ({ item }) => {
    const { name, price, description, img, perks } = item;

    const renderPerks = () => perks.map(item => <li key={item}>{item}</li>)

    return (
        <div className='flex gap-6'>
            <img className="w-40 h-40 rounded-full" src={img} alt={name} />
            <div>
                <h2>{price}</h2>
                <h2>{name}</h2>
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
            <h2>{heading}</h2>
            <p>{description}</p>
            <button>Book Your Table Now</button>
        </div>
    )
}