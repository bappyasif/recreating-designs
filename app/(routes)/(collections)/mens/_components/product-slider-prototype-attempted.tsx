"use client"

import React, { useRef, useState } from 'react'

export const ProductSlider = ({ headerText }: { headerText: string }) => {

    return (
        <div className='flex flex-col gap-y-6 ml-20'>
            <div className='flex justify-between gap-x-4 font-bold mr-20'>
                <h2 className='text-4xl'>{headerText}</h2>
                <button className='text-xl'>View all</button>
            </div>
            <SliderScroller />
        </div>
    )
}

const SliderScroller = () => {
    const ref = useRef<HTMLDivElement | null>(null)

    const [count, setCount] = useState(0)

    const MAXSCROLLED = 6 * 384

    const [totalScrolled, setTotalScrolled] = useState(0)

    const handleNext = () => {
        // console.log(ref.current, count, "start next")
        if (ref.current && count < 3) {
            // console.log(ref.current, count, "inside next")
            ref.current.scrollLeft += 384
            setCount(prev => prev + 1)

            setTotalScrolled(prev => prev + 384)
        }
    }

    const handlePrev = () => {
        // console.log(ref.current, count, "start prev")
        if (ref.current && count > 0) {
            // console.log(ref.current, count, "inside prev")
            ref.current.scrollLeft -= 384
            setCount(prev => prev - 1)

            setTotalScrolled(prev => prev - 384)
        }
    }

    const allProds = () => [1, 2, 3, 4, 5, 6, 7].map(v => <div key={v} className='bg-slate-400 min-h-[27rem] min-w-96 rounded-sm'>{v}</div>)

    return (
        <div
            className='w-full flex flex-col gap-y-6 items-center justify-between relative'
            // className='w-full h-[40rem] flex flex-col gap-y-6'
            // className='space-y-6'
        >
            <div
                ref={ref}
                className='flex gap-4 flex-nowrap overflow-x-hidden w-full'
                // className='flex items-center justify-start gap-4 flex-nowrap overflow-x-hidden w-full relative'
            >
                {allProds()}

                {/* <SwipperButtons handleNext={handleNext} handlePrev={handlePrev} /> */}
            </div>
            <SwipperButtons handleNext={handleNext} handlePrev={handlePrev} />
            <div className='w-full text-center'>slider!!</div>

            <SliderScrollBar totalScrolled={totalScrolled} />
        </div>
    )
}

const SwipperButtons = ({ handleNext, handlePrev }: { handleNext: () => void, handlePrev: () => void }) => {
    return (
        <div className='w-full flex justify-between items-center h-full absolute'>
            <button className='bg-slate-800 rounded-full w-16 h-16' onClick={handlePrev}>&lt;</button>
            <button className='mr-20 bg-slate-800 rounded-full w-16 h-16' onClick={handleNext}>&gt;</button>
        </div>
    )
}

const SliderScrollBar = ({totalScrolled}: {totalScrolled: number}) => {
    const ref = useRef<HTMLDivElement | null>(null)

    console.log(totalScrolled, "totalScrolled!!", `ml-[${totalScrolled}px]`, totalScrolled/66.7, totalScrolled * 66.7/100)

    return (
        <div className='w-2/3 mx-auto bg-slate-400 h-2'>
            <div 
                className='h-2 w-60 bg-slate-800'
                // className={`h-2 w-60 bg-slate-800 ml-[${totalScrolled}px]`}
                style={{
                    // marginLeft: `${totalScrolled}px`
                    marginLeft: `${totalScrolled * 66.7/100}px`
                }}
            ></div>
        </div>
    )
}