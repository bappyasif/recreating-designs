import React from 'react'
import { MdChevronRight } from 'react-icons/md'

export const ContactInfo = () => {
    return (
        <div className='w-3/4 flex flex-col gap-4 justify-center items-center pb-4 mb-4 bg-red-800'>
            <RenderOfficeHours />
            <TakeoutServiceHours />
        </div>
    )
}

const RenderOfficeHours = () => {
    return <img 
        className='w-full'
        src="./src/assets/timetable.jpg" 
        alt="office hours" 
        />
}

const TakeoutServiceHours = () => {
    return (
        <div className='flex w-4/6 items-center justify-between gap-4 bg-yellow-400 pr-4 rounded-sm'>
            <div className='flex w-4/6 justify-center items-center flex-col gap-4 bg-white p-4 text-4xl font-extrabold'>
                <h2>Take-out Service</h2>
                <p className='flex gap-4 text-2xl'><span>Available Daily</span> <span>5pm - 9pm</span></p>
            </div>
            <div className='w-2/7 pr-2 pl-2'>
                <button className='p-0 flex gap-4 w-fit items-center pl-4 rounded-sm'><span>Order online now!</span><span className='p-2 bg-yellow-600 rounded-sm text-4xl'><MdChevronRight /></span></button>
            </div>
        </div>
    )
}