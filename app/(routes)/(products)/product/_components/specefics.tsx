"use client"

import React, { useRef, useState } from 'react'
import { products } from '../data'
import { Details } from './details'

const product = products.filter(item => item.type === "Unisex")[0]

export const Specefics = () => {
    return (
        <div className='w-2/5 flex flex-col gap-y-10'>
            <Heading />
            <Intro />
            <Colors />
            <Sizes />
            <Details />
        </div>
    )
}

const Sizes = () => {
    return (
        <div className='flex justify-between gap-10'>
            <Size />
            <p className='font-extrabold text-slate-400'>Size Guide</p>
        </div>
    )
}

const Size = () => {
    const [hovered, setHovered] = useState(0)
    const [moveBy, setMoveBy] = useState(0)

    const allSizes = () => product.sizes.map((v, idx) => <SizeDiv key={v} idx={idx} setHovered={(idx: number) => setHovered(idx)} v={v} updateMoveBy={(v:number) => setMoveBy(v)} />)
    
    console.log(hovered, "hovered!!")

    return (
        <div>
            <p className='text-2xl font-bold'>Size</p>
            <div className='flex gap-x-6 relative' onMouseLeave={() => setHovered(0)}>
                {allSizes()}
                <ThumbnailSlider 
                    hovIdx={hovered} 
                    // hovIdx={moveBy} 
                />
            </div>
        </div>
    )
}

const SizeDiv = ({setHovered, idx, v, updateMoveBy}: {setHovered: (i: number) => void, idx: number, v: string, updateMoveBy: (v: number) => void}) => {
    const ref = useRef<HTMLSpanElement | null>(null)

    return (
        <span 
            ref={ref}
            className='text-xl bg-slate-200 px-2' 
            onMouseEnter={(e) => {
            setHovered(idx)
            console.log(e.clientX, e.currentTarget.clientWidth, e.currentTarget.offsetWidth)
            console.log(ref.current?.offsetWidth, ref.current?.clientWidth)
            // updateMoveBy(e.clientX)
            updateMoveBy(ref.current?.clientWidth!)
        }}>{v}</span>
    )
}

const ThumbnailSlider = ({hovIdx}: {hovIdx: number}) => {
    return (
        <p className='w-full h-1.5 bg-slate-200 absolute -bottom-2'>
            <span className={`h-1.5 w-12 bg-slate-400 absolute z-20 transition-all duration-200 ${hovIdx === 0 ? "translate-x-0 w-[3.17rem]": hovIdx === 1 ? "translate-x-[4.61rem] w-[3.21rem]": "translate-x-[9.29rem] w-[3.71rem]"}`} 
            // style={{transform: `translate(${hovIdx}px)` }}
            ></span>
        </p>
    )
}

const Colors = () => {
    return (
        <fieldset className='flex flex-col gap-y-6'>
            <label className='text-2xl font-bold' htmlFor="colors">Color</label>
            <div className='flex gap-x-10 px-4'>
                <input type="radio" name="color" id="colors" className='scale-[3.1]' />
                <input type="radio" name="color" id="colors" className='scale-[3.1]' />
            </div>
        </fieldset>
    )
}

const Intro = () => {

    return (
        <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, quod. Magnam ipsum rerum enim dolor</p>
    )
}

const Heading = () => {

    return (
        <div>
            <h2 className='text-4xl font-bold'>{product.name}</h2>
            <p className='font-semibold text-2xl'>$ {product.price}.00</p>
        </div>
    )
}
