import React from 'react'
import { RenderDropdowns } from './ToursHero'
import { HiDocumentRemove } from 'react-icons/hi'
import { diets } from '../data'

export const PassangerInfo = () => {
    return (
        <section className='mt-2 w-full flex flex-col p-2 bg-slate-600'>
            <div className='text-4xl py-2'>Passanger Informations</div>
            <div className='flex flex-col gap-4 mb-4 px-2 pb-4'>
                <PerPassenger />
                <PerPassenger />
            </div>
            {/* <p className='w-full h-1 bg-slate-400 my-6'></p> */}
        </section>
    )
}

const PerPassenger = () => {
    return (
        <div className='outline outline-1 outline-slate-400 shadow-xl pb-4 px-2 flex flex-col gap-4'>
            <NameSection />
            <p className='w-full bg-slate-400 mt-4' style={{height: ".6px"}}></p>
            <ExtraSection />
        </div>
    )
}

const ExtraSection = () => {
    return (
        <div className='w-full'>
            <h2 className='text-2xl py-2'>Extras</h2>
            <div className='flex gap-10 w-full px-4'>
                <LeftSide />
                <RightSide />
            </div>
        </div>
    )
}

const RightSide = () => {
    return (
        <div className='relative w-full h-1/2 p-2 py-6 rounded bg-lime-100'>
            <div className='text-xl'>
                <p>Single supplement</p>
                <p>$250</p>
            </div>
            <button className='absolute right-2 top-6 bg-yellow-600 w-44'>ADD</button>
        </div>
    )
}

const LeftSide = () => {
    return (
        <div className='w-full text-xl bg-yellow-600 pb-4'>
            <div className='flex justify-between py-4 px-4'>
                <div className='mb-4'>
                    <p>Lunch for all days</p>
                    <p>$250</p>
                </div>
                <HiDocumentRemove />
            </div>
            <div className='px-4'>
                <RenderDropdowns options={diets} name={"Dietary requirements"} />
            </div>
        </div>
    )
}

const NameSection = () => {
    return (
        <div className=''>
            <p className='text-2xl py-2'>Passanger (Adult)</p>
            <div className='flex gap-9 px-4'>
                <input className='text-2xl py-2 w-full px-2' type="text" placeholder='first name' />
                <input className='text-2xl py-2 w-full px-2' type="text" placeholder='last name' />
            </div>
        </div>
    )
}