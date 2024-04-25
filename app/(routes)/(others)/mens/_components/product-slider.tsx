"use client"

import React, { useRef } from 'react'

export const ProductSlider = ({ headerText }: { headerText: string }) => {

    return (
        <div className='flex flex-col gap-y-6 ml-20 my-20'>
            <div className='flex justify-between gap-x-4 font-bold mr-20'>
                <h2 className='text-4xl cursor-move'>{headerText}</h2>
                <button className='text-xl'>View all</button>
            </div>
            <SliderScroller />
        </div>
    )
}

const SliderScroller = () => {
    const ref = useRef<HTMLDivElement | null>(null)

    const handleNext = () => {
        if(ref.current) {
            ref.current.scrollLeft += 384
        }
    }

    const handlePrev = () => {
        if(ref.current) {
            ref.current.scrollLeft -= 384
        }
    }

    const allProds = () => [1, 2, 3, 4, 5, 6, 7].map(v => <div key={v} className='bg-slate-400 min-h-[27rem] min-w-96 rounded-sm'>{v}</div>)

    return (
        <div className='flex items-center justify-between relative z-10'>
                <div
                    ref={ref}
                    className='flex gap-4 flex-nowrap overflow-x-scroll w-full scroll-smooth scrollbar pb-16'
                    onScroll={(e) => console.log(e.currentTarget.scrollWidth, "?@?@")}
                >
                    {allProds()}
                </div>
            <SwipperButtons handleNext={handleNext} handlePrev={handlePrev} />
        </div>
    )
}

const SwipperButtons = ({ handleNext, handlePrev }: { handleNext: () => void, handlePrev: () => void }) => {
    return (
        <div className='w-full flex justify-between items-center absolute z-10 mb-11'>
            <button className='bg-slate-800 rounded-full w-16 h-16' onClick={handlePrev}>&lt;</button>
            <button className='mr-20 bg-slate-800 rounded-full w-16 h-16' onClick={handleNext}>&gt;</button>
        </div>
    )
}