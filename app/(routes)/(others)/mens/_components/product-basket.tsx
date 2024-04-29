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

    const [
        mousePosition,
        setMousePosition
    ] = useState<{ x: null | number, y: null | number }>({ x: null, y: null });

    const updateText = (v: string) => setText(v)

    const updateMousePosition = (ev: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const test = ev.currentTarget.getBoundingClientRect()
        console.log(test.x, test.y, test.top, test.left, "?!?!", ev.clientX - test.x)
        setMousePosition({ x: ev.clientX - test.x > 0 ? ev.clientX - test.x : 0, y: ev.clientY });
    };

    // const updateMousePosition = (ev: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    //     if(ev.currentTarget) {
    //         setMousePosition({ x: ev.clientX!, y: ev.clientY! });
    //     }
    // };

    // const allSizes = () => ["S", "M", "L", "XL", "XXL"].map(v => <div key={v} className='h-20 underline'>{v}</div>)

    const allSizes = () => ["S", "M", "L", "XL", "XXL"].map(v => <SizeMarkup key={v} updateText={updateText} text={text} v={v} />)

    // console.log(mousePosition.x, mousePosition.y, "!!")

    // const prefersReducedMotion = usePrefersReducedMotion();
    // const transform = `translate(${mousePosition.x}px, ${mousePosition.y}px)`


    return (
        <div className='flex flex-col gap-y-0 w-fit'>
            <p className='text-2xl font-bold'>Size</p>
            <div
                className='flex gap-x-4 w-fit h-fit'
                onMouseMove={updateMousePosition}
            >
                {allSizes()}

            </div>
            <div
                // className='w-full h-1 relative bg-red-400'
                className='w-full h-1 relative'
                // onMouseMove={e => {
                //     updateMousePosition(e)
                // }}
            >
                <span
                    className={`w-4 h-0.5 bg-purple-600 bottom-0 absolute -top-0.5`}
                    style={{
                        // left: `${mousePosition.x! - 1000 > 0 ? mousePosition.x! - 1000 : 0}px`,
                        left: `${mousePosition.x! < 146 ? mousePosition.x : "146"}px`,
                        // top: `${mousePosition.y! - 410}px`

                    }}
                ></span>
            </div>
            {/* <span
                // className={`w-4 h-1 bg-purple-600 bottom-0 left-[${mousePosition.x}px] top-[${mousePosition.y}px] absolute`}
                className={`w-4 h-1 bg-purple-600 bottom-0 absolute`}
                // style={{transform}}
                style={{
                    left: `${mousePosition.x! - 1000}px`,
                    top: `${mousePosition.y! - 369}px`
                }}
            ></span> */}
        </div>
    )
}

const SizeMarkup = ({ v, updateText, text }: { v: string, text: string, updateText: (d: string) => void }) => {
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
