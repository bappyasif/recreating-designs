import React from 'react'
import { RenderDropdowns } from './ToursHero'
import { cities } from '../data'

export const PickupInfo = () => {
    return (
        <section 
            // className='flex flex-col items-center justify-center'
            className='w-full my-4'
        >
            <div className='text-4xl my-4'>PickupInfo</div>
            <div className='flex justify-start gap-10'>
                <PickUp />
                <DropOff />
            </div>
        </section>
    )
}

const PickUp = () => {
    return (
        <div className='w-1/4'>
            <h2 className='text-2xl'>Pick Up</h2>
            {/* <AddressInfo options={cities} elemName={"pickUp"} /> */}
            <RenderDropdowns options={cities} name={"pickUp"} />
        </div>
    )
}

const DropOff = () => {
    return (
        <div className='w-1/4'>
            <h2 className='text-2xl'>Drop Off</h2>
            <RenderDropdowns options={cities} name={"dropOff"} />
        </div>
    )
}

const AddressInfo = ({options, elemName}) => {
    return (
        <>
            <RenderDropdowns options={options} name={elemName} />
            <p>Some Place</p>
        </>
    )
}