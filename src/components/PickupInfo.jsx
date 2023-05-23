import React from 'react'
import { RenderDropdowns } from './ToursHero'
import { cities } from '../data'

export const PickupInfo = () => {
    return (
        <section
            // className='flex flex-col items-center justify-center'
            className='w-full flex flex-col p-2 bg-slate-600'
        >
            <div className='text-4xl my-2'>Pickup Information</div>
            <div 
                className='flex gap-10 my-2 p-4 outline outline-1 outline-slate-400 mb-4 shadow-xl'
            >
                <PickUp />
                <DropOff />
            </div>
            {/* <p className='w-full h-1 bg-slate-400 mt-6'></p> */}
        </section>
    )
}

const PickUp = () => {
    return (
        <div className='w-full'>
            <h2 className='text-2xl py-2'>Pick Up</h2>
            {/* <AddressInfo options={cities} elemName={"pickUp"} /> */}
            <div className='px-4 w-full'>
                <RenderDropdowns options={cities} name={"pickUp"} />
                
                <input className='w-full text-2xl mt-4 py-2' type="text" placeholder='Pickup Place Name Here....' />
            </div>
        </div>
    )
}

const DropOff = () => {
    return (
        <div className='w-full'>
            <h2 className='text-2xl py-2'>Drop Off</h2>
            <div className='px-4'>
                <RenderDropdowns options={cities} name={"dropOff"} />
                <input className='w-full text-2xl mt-4 py-2' type="text" placeholder='Dropoff Place Name Here....' />
            </div>
        </div>
    )
}

const AddressInfo = ({ options, elemName }) => {
    return (
        <>
            <RenderDropdowns options={options} name={elemName} />
            <p>Some Place</p>
        </>
    )
}