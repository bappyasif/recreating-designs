"use client"

import { useForTruthToggle } from '@/hooks'
import Link from 'next/link'
import React, { useState } from 'react'

export const ProductBasket = () => {
    return (
        <div className='flex justify-between gap-x-20 px-20'>
            <LeftSide />
            <RightSide />
        </div>
    )
}

const RightSide = () => {
    return (
        <div className='bg-slate-400 w-1/2 flex flex-col gap-y-10 px-10 justify-center'>
            <div>
                <p className='text-4xl font-bold'>Men's Mr T Organic T-shirt</p>
                <div className='space-x-4 text-xl font-semibold'>
                    <span className='line-through'>$25.00</span>
                    <span>$15.00</span>
                </div>
            </div>

            <Sizes />

            <AddToBasket />

            <Link href={"#"} className='underline text-xl'>view product details</Link>

        </div>
    )
}

const AddToBasket = () => {
    return (
        <div className='flex gap-x-4'>
            <div className='flex items-center justify-center gap-x-2 border text-xl'>
                <button className='border-r-2 p-4 text-4xl'>-</button>
                <span className='w-20 text-center'>{1234}</span>
                <button className='border-l-2 p-4 text-4xl'>+</button>
            </div>
            <button className='bg-slate-600 w-60'>Add to basket</button>
        </div>
    )
}

const Sizes = () => {
    const [text, setText] = useState("")

    const updateText= (v:string) => setText(v)

    // const allSizes = () => ["S", "M", "L", "XL", "XXL"].map(v => <div key={v} className='h-20 underline'>{v}</div>)

    const allSizes = () => ["S", "M", "L", "XL", "XXL"].map(v => <SizeMarkup key={v} updateText={updateText} text={text}  v={v} />)

    return (
        <div className='flex flex-col gap-y-4'>
            <p className='text-2xl font-bold'>Size</p>
            <div className='flex gap-x-4'>
                {allSizes()}
            </div>
        </div>
    )
}

const SizeMarkup = ({v, updateText, text}: {v: string, text: string, updateText: (d: string) => void}) => {
    return (
        <button 
            key={v} 
            // className={`h-20 ${v === text ? "underline" : ""} text-slate-800`} 
            onClick={() => updateText(v)}
            className='flex flex-col gap-y-1 justify-center items-center min-w-4'
        >
            <span className='text-center'>{v}</span>
            <span className={`${v === text ? "visible" : "invisible"} h-0.5 w-full bg-slate-800`}></span>
        </button>
    )
}

const LeftSide = () => {
    return (
        <div className='flex gap-x-4 w-1/2'>
            <div className='min-h-[27rem] bg-slate-400 min-w-96'></div>
            <div className='min-h-[27rem] bg-slate-400 min-w-96'></div>
        </div>
    )
}
