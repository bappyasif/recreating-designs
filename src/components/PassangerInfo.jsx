import React from 'react'
import { RenderDropdowns } from './ToursHero'
import { HiDocumentRemove } from 'react-icons/hi'
import { diets } from '../data'

export const PassangerInfo = () => {
    return (
        <section>
            <div>Passanger Informations</div>
            <PerPassenger />
            <PerPassenger />
        </section>
    )
}

const PerPassenger = () => {
    return (
        <div>
            <NameSection />
            <ExtraSection />
        </div>
    )
}

const ExtraSection = () => {
    return (
        <div>
            <h2>Extras</h2>
            <div className='flex gap-8'>
                <LeftSide />
                <RightSide />
            </div>
        </div>
    )
}

const RightSide = () => {
    return (
        <div className='relative w-1/3 outline outline-gray-400 h-fit p-2 py-4 rounded'>
            <div className='text-xl'>
                <p>Single supplement</p>
                <p>$250</p>
            </div>
            <button className='absolute right-2 top-4 bg-yellow-600 w-44'>ADD</button>
        </div>
    )
}

const LeftSide = () => {
    return (
        <div className='w-1/4 text-xl bg-yellow-600'>
            <div className='flex justify-between py-4 px-4'>
                <div className='mb-4'>
                    <p>Lunch for all days</p>
                    <p>$250</p>
                </div>
                <HiDocumentRemove />
            </div>
            <RenderDropdowns options={diets} name={"Dietary requirements"} />
        </div>
    )
}

const NameSection = () => {
    return (
        <div>
            <p className='text-xl py-2'>Passanger (Adult)</p>
            <div className='flex gap-2'>
                <input className='text-2xl py-2' type="text" placeholder='first name' />
                <input className='text-2xl' type="text" placeholder='last name' />
            </div>
        </div>
    )
}