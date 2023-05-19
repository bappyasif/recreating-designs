import React from 'react'
import { RenderDropdowns } from './ToursHero'

export const PickupInfo = () => {
    return (
        <section>
            <div>PickupInfo</div>
            <div className='flex gap-2'>
                <PickUp />
                <DropOff />
            </div>
        </section>
    )
}

const PickUp = () => {
    return (
        <div>
            <h2>Pick Up</h2>
            <AddressInfo />
        </div>
    )
}

const DropOff = () => {
    return (
        <div>
            <h2>Drop Off</h2>
            <AddressInfo />
        </div>
    )
}

const AddressInfo = () => {
    return (
        <>
            <RenderDropdowns />
            <p>Some Place</p>
        </>
    )
}