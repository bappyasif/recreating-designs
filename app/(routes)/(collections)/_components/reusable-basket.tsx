"use client"

import { mensTeesProductImage, womensTeesProductImages } from '@/data'
import { useForTruthToggle } from '@/hooks'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { AddedToBasket } from '../../_components/added-to-basket'

export const ReUsableProductBasket = ({ prods }: { prods: string }) => {
    const [rnd, setRnd] = useState(0.0)

    useEffect(() => {
        setRnd(Math.random())
    }, [])

    return (
        <div className='flex justify-between gap-x-28 pl-20 relative'>
            <LeftSide rnd={rnd} prods={prods} />
            <RightSide rnd={rnd} prods={prods} />
        </div>
    )
}

const RightSide = ({ rnd, prods }: { rnd: number, prods: string }) => {
    return (
        <div className='w-1/2 flex flex-col gap-y-14 px-10 justify-center'>
            <div className='space-y-6'>
                <p className='text-4xl font-bold'>{prods === "mens" ? "Men" : "Women"}&apos;s {prods === "mens" ? "Mr" : "Ms"} T Organic T-shirt</p>
                <div className='space-x-4 text-xl font-semibold'>
                    <span className='line-through'>$25.00</span>
                    <span>$15.00</span>
                </div>
            </div>

            <Sizes />

            <AddToBasket rnd={rnd} />

            <Link href={"#"} className='underline text-xl'>view product details</Link>

        </div>
    )
}

const AddToBasket = ({ rnd }: { rnd: number }) => {
    const [count, setCount] = useState(0)

    const {handleFalsy, handleTruthy, isTrue} = useForTruthToggle()

    const increaseCount = () => {
        setCount(prev => prev + 1)
    }

    const decreaseCount = () => {
        setCount(prev => prev && prev - 1)
    }

    return (
        <div className='flex gap-x-4'>
            <div className='flex items-center justify-center gap-x-2 border text-xl rounded-lg'>
                <button className='p-4 text-4xl' onClick={decreaseCount}>-</button>
                <span className='w-14 text-center'>{count}</span>
                <button className='p-4 text-4xl' onClick={increaseCount}>+</button>
            </div>

            <button disabled={rnd > .5} onClick={handleTruthy} className={`${rnd > .5 ? "bg-slate-600" : "bg-[#1f1f1f] text-[#ffff] hover:text-[#1f1f1f] hover:bg-[#ffffff]"}  w-60 rounded-lg border-2`}>{rnd > .5 ? "Out of stock" : "Add to basket"}</button>

            {
                isTrue
                ? <AddedToBasket handleClose={handleFalsy} />
                : null
            }
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
        setMousePosition({ x: ev.clientX - test.x > 0 ? ev.clientX - test.x : 0, y: ev.clientY });
    };

    const allSizes = () => ["S", "M", "L", "XL", "XXL"].map(v => <SizeMarkup key={v} updateText={updateText} text={text} v={v} />)

    return (
        <div className='w-fit'>
            <div className='flex flex-col gap-y-4'>
                <p className='text-2xl font-bold'>Size</p>
                <div
                    className='flex gap-x-4 w-fit h-fit relative'
                    onMouseMove={updateMousePosition}
                >
                    {allSizes()}
                </div>
            </div>

            <div
                className='w-full h-1 relative'
            >
                <span
                    className={`${mousePosition.x! > 92 && mousePosition.x! < 96 ? "w-7" : mousePosition.x! > 129 && mousePosition.x! < 132 ? "w-10" : "w-4"} h-0.5 bg-purple-600 bottom-0 absolute -top-0.5`}
                    style={{
                        left: `${mousePosition.x! < 146 ? mousePosition.x : "146"}px`,
                    }}
                ></span>
            </div>
        </div>
    )
}

const SizeMarkup = ({ v, updateText, text }: { v: string, text: string, updateText: (d: string) => void }) => {
    return (
        <button
            key={v}
            onClick={() => updateText(v)}
            className='flex flex-col gap-y-1 justify-center items-center min-w-4'
        >
            <span className='text-center text-lg'>{v}</span>
            <span className={`${v === text ? "visible" : "invisible"} h-0.5 w-full bg-slate-800`}></span>
        </button>
    )
}

const LeftSide = ({ rnd, prods }: { rnd: number, prods: string }) => {
    const imageSources = prods === "mens" ? mensTeesProductImage : womensTeesProductImages
    const pics = () => imageSources.map(imgSrc => <PictureCard key={imgSrc} imgSrc={imgSrc} rnd={rnd} prods={prods} />)

    return (
        <div className='flex gap-x-4 w-2/3 overflow-x-scroll scrollbar'>
            {pics()}
        </div>
    )
}

const PictureCard = ({ imgSrc, rnd, prods }: { imgSrc: string, rnd: number, prods: string }) => {
    const { handleFalsy, handleTruthy, isTrue } = useForTruthToggle()
    return (
        <>
            <img
                src={imgSrc}
                alt={imgSrc}
                className={`min-h-[27rem] bg-slate-400 min-w-96 ${rnd > .5 ? "opacity-80" : "opacity-100"}`} onClick={handleTruthy}

                style={{
                    cursor: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80"><circle cx="22" cy="22" r="22" opacity=".2" /><g><path d="M41.267,18.557H26.832V4.134C26.832,1.851,24.99,0,22.707,0c-2.283,0-4.124,1.851-4.124,4.135v14.432H4.141c-2.283,0-4.139,1.851-4.138,4.135c-0.001,1.141,0.46,2.187,1.207,2.934c0.748,0.749,1.78,1.222,2.92,1.222h14.453V41.27c0,1.142,0.453,2.176,1.201,2.922c0.748,0.748,1.777,1.211,2.919,1.211c2.282,0,4.129-1.851,4.129-4.133V26.857h14.435c2.283,0,4.134-1.867,4.133-4.15C45.399,20.425,43.548,18.557,41.267,18.557z"/></g></svg>'), auto;`
                }}
            />
            {
                isTrue
                    ? <ZoomedPictures handleFalsy={handleFalsy} imgSrc={imgSrc} prods={prods} />
                    : null
            }
        </>
    )
}

const ZoomedPictures = ({ handleFalsy, imgSrc, prods }: { handleFalsy: () => void, imgSrc: string, prods: string }) => {

    const ref = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        ref.current?.getElementsByClassName(`${imgSrc.split("/files")[1]}`)[0]?.scrollIntoView()
    }, [imgSrc])

    const imageSources = prods === "mens" ? mensTeesProductImage : womensTeesProductImages

    const showImgs = () => imageSources.map(val => <ZoomedImg key={val} imgSrc={val} />)

    return (
        <div className='fixed top-0 left-0 w-full max-h-screen overflow-y-scroll z-40 bg-slate-400 space-y-6' ref={ref}>

            {showImgs()}

            {/* <img src={mensTeesProductImage[0]} alt={""} className={`min-h-full bg-slate-400 min-w-full ${mensTeesProductImage[0].split("/files")[1]}`} />

            <img src={mensTeesProductImage[1]} alt={"imgSrc"} className={`min-h-full bg-slate-400 min-w-full ${mensTeesProductImage[1].split("/files")[1]}`} />

            <img src={mensTeesProductImage[2]} alt={"imgSrc"} className={`min-h-full bg-slate-400 min-w-full ${mensTeesProductImage[2].split("/files")[1]}`} /> */}
            <button className='absolute right-4 top-2 rounded-full p-1 px-3 bg-slate-200 font-bold text-slate-900' onClick={handleFalsy}>X</button>
        </div>
    )
}

const ZoomedImg = ({ imgSrc }: { imgSrc: string }) => {
    return (
        <img src={imgSrc} alt={"imgSrc"} className={`min-h-full bg-slate-400 min-w-full ${imgSrc.split("/files")[1]}`} />
    )
}