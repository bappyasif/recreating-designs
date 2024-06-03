"use client"

import { useForTruthToggle } from '@/hooks'
import React, { useEffect, useRef, useState } from 'react'
import { PiMinus, PiPlus } from 'react-icons/pi'
import { useForAccordionEffect, useForAccordionItem } from './hooks/accordion'

export const Details = () => {
    return (
        <div className='flex flex-col gap-y-6'>
            <Reusable text='Built using 80% recycled polyester sherpa fleece, the Minke Mitten is a supremely cosy glove with a high pile fleece which traps plenty of warmth. This fleece uses 80% post-consumer and post-industrial recycled material that prevents unnecessary landfill waste.' text2='They feature an elasticated wrist to reduce heat loss and fit snuggly, with room for layering over your waterproof glove. The fast-drying fabric makes this mitt ideal for adventure on even the coldest days.' />
            {/* <Divider /> */}

            <Specifications />

            <Fabrics />

            <Shipping />
        </div>
    )
}

const Divider = () => {
    return (
        <p className='w-full h-0.5 bg-slate-400'></p>
    )
}

const Shipping = () => {
    const { handleFalsy, handleTruthy, isTrue } = useForTruthToggle()

    return (
        <div className='flex flex-col'>
            <ShowAccordionItem handleFalsy={handleFalsy} handleTruthy={handleTruthy} isTrue={isTrue} title='Shipping & Returns' />

            <div
                // className={`mt-4 flex flex-col gap-y-10 transition-all duration-1000 ${isTrue ? "block" : "h-0 hidden opacity-0"}`}
                className={`overflow-hidden flex flex-col gap-y-10 bg-slate-200 transition-all ${isTrue ? `duration-1000 h-full mt-4 opacity-100` : `bg-transparent h-0 opacity-0 duration-500`}`}
            >
                <p className='font-bold'>UK orders over £50 are postage free.</p>

                <ul className='list-disc list-inside'>
                    <li><span className='font-bold'>Standard Delivery: £4</span>(2 to 5 working days)</li>
                    <li><span className='font-bold'>Express Delivery: £6</span>(Dispatched using a 24 hour service).</li>
                </ul>

                <p className='italic'>Orders placed after 1pm will be dispatched next working day.</p>

                <p className='font-bold'>Returning a full price item is free for all UK orders.</p>

                <p>For more details and for international information please see our full shipping & returns policies <a href="#">here</a>.</p>
            </div>

            <Divider />
        </div>
    )
}

const Fabrics = () => {
    const { handleFalsy, handleTruthy, isTrue } = useForTruthToggle()

    return (
        <div className='flex flex-col'>
            <ShowAccordionItem handleFalsy={handleFalsy} handleTruthy={handleTruthy} isTrue={isTrue} title='Fabrics & Care' />

            <ul
                // className='list-disc list-inside'
                className={`overflow-hidden flex flex-col gap-y-1.5 bg-slate-200 transition-all ${isTrue ? `duration-1000 h-full mt-4 opacity-100` : `bg-transparent h-0 opacity-0 duration-500`} list-disc list-inside`}
            >
                <li>80% recycled polyester, 20% polyester</li>            
                <li>Machine wash</li>
            </ul>

            {/* <Divider /> */}

            <p className='w-full h-[0.1rem] bg-slate-400'></p>
        </div>
    )
}

const Specifications = () => {
    const { handleFalsy, handleTruthy, isTrue } = useForTruthToggle()

    return (
        <div className='flex flex-col'>
            <ShowAccordionItem handleFalsy={handleFalsy} handleTruthy={handleTruthy} isTrue={isTrue} title='Specifications' />

            <ul
                // className='list-disc list-inside'
                className={`overflow-hidden flex flex-col gap-y-1.5 bg-slate-200 transition-all ${isTrue ? `duration-1000 h-full mt-4 opacity-100` : `bg-transparent h-0 opacity-0 duration-500`} list-disc list-inside`}
            >
                <li>80% recycled polyester, 20% polyester</li>
                <li>Warm sherpa fleece</li>
                <li>Soft, cosy, quick-drying</li>
                <li>Cotton lined</li>
                <li>Elasticated wrist</li>
                <li>Flatlock stitching</li>
                <li>Logo tab</li>
                <li>Machine washable</li>
                <li>Unisex style</li>
                <li>One size fits all</li>
                <li>Made in China</li>
            </ul>
            <Divider />
        </div>
    )
}

const Reusable = ({ text, text2 }: { text: string, text2: string }) => {
    const { handleFalsy, handleTruthy, isTrue } = useForTruthToggle()

    return (
        <div className='flex flex-col'>
            <ShowAccordionItem handleFalsy={handleFalsy} handleTruthy={handleTruthy} isTrue={isTrue} title='Full description' />

            <div
                // className={`mt-4 flex flex-col gap-y-10 transition-all duration-1000 ${isTrue ? "block" : "h-0 hidden opacity-0"}`}

                // className={`overflow-hidden flex flex-col gap-y-10 bg-slate-200 transition-all duration-1000 ${isTrue ? `h-full mt-4 opacity-100` : `bg-transparent h-0 opacity-0`}`}

                className={`overflow-hidden flex flex-col gap-y-10 bg-slate-200 transition-all ${isTrue ? `duration-1000 h-full mt-4 opacity-100` : `bg-transparent h-0 opacity-0 duration-500`}`}
            >

                <p>{text}</p>
                <p>{text2}</p>
            </div>

            <Divider />
        </div>
    )
}

const ShowAccordionItem = ({ isTrue, handleFalsy, handleTruthy, title }: { isTrue: boolean, handleFalsy: () => void, handleTruthy: () => void, title: string }) => {
    // const { handleFalsy, handleTruthy, isTrue } = useForTruthToggle()

    return (
        <button
            className='z-20 flex gap-x-4 items-center text-xl'
            onClick={isTrue ? handleFalsy : handleTruthy}
        // onClick={() => isTrue ? handleFalsy() : handleTruthy()}
        >
            <span className='flex items-center relative'>
                <PiPlus className={`absolute transition-all duration-500 ${!isTrue ? "rotate-[360deg] opacity-100" : "opacity-0"}`} />
                <PiMinus className={`absolute transition-all duration-500 ${isTrue ? "-rotate-[360deg] opacity-100" : "opacity-0"}`} />
            </span>
            <span className='ml-6'>{title}</span>
        </button>
    )
}