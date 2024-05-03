"use client"

import { mensTeesProductImage } from '@/data'
import { useForTruthToggle } from '@/hooks'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import nxtImg from "@/public/next.svg"

export const ProductBasket = () => {
    return (
        <div className='flex justify-between gap-x-20 px-20 relative'>
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
    // mensTeesProductImage
    const pics = () => mensTeesProductImage.map(imgSrc => <PictureCard key={imgSrc} imgSrc={imgSrc} />)

    return (
        <div className='flex gap-x-4 w-1/2 overflow-x-scroll scrollbar'>
            {pics()}

            {/* <PictureCard imgSrc={mensTeesProductImage[0]} />
            <PictureCard imgSrc={mensTeesProductImage[1]} /> */}

            {/* <div className='min-h-[27rem] bg-slate-400 min-w-96'></div> */}
            {/* <div className='min-h-[27rem] bg-slate-400 min-w-96'></div> */}
        </div>
    )
}

const PictureCard = ({ imgSrc }: { imgSrc: string }) => {
    const { handleFalsy, handleTruthy, isTrue } = useForTruthToggle()
    return (
        <>
            <img
                src={imgSrc}
                alt={imgSrc}
                className='min-h-[27rem] bg-slate-400 min-w-96' onClick={handleTruthy}

                style={{
                    cursor: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80"><circle cx="22" cy="22" r="22" opacity=".2" /><g><path d="M41.267,18.557H26.832V4.134C26.832,1.851,24.99,0,22.707,0c-2.283,0-4.124,1.851-4.124,4.135v14.432H4.141c-2.283,0-4.139,1.851-4.138,4.135c-0.001,1.141,0.46,2.187,1.207,2.934c0.748,0.749,1.78,1.222,2.92,1.222h14.453V41.27c0,1.142,0.453,2.176,1.201,2.922c0.748,0.748,1.777,1.211,2.919,1.211c2.282,0,4.129-1.851,4.129-4.133V26.857h14.435c2.283,0,4.134-1.867,4.133-4.15C45.399,20.425,43.548,18.557,41.267,18.557z"/></g></svg>'), auto;`
                }}
            />
            {
                isTrue
                    ? <ZoomedPictures handleFalsy={handleFalsy} imgSrc={imgSrc} />
                    : null
            }
        </>
    )
}

const ZoomedPictures = ({ handleFalsy, imgSrc }: { handleFalsy: () => void, imgSrc: string }) => {

    const ref = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        // console.log(imgSrc.split("/files")[1])
        // ref.current?.scrollIntoView({behavior: "smooth",block: "center", inline: "end"})
        // ref.current?.querySelector(`#${imgSrc}`)?.scrollIntoView({behavior: "smooth",block: "center", inline: "end"})

        // ref.current?.querySelector(`.${imgSrc}`)?.scrollIntoView({behavior: "smooth",block: "center", inline: "end"})

        // console.log(ref.current?.querySelector(`${imgSrc.split("v=")[1]}`), imgSrc.split("v=")[1])

        // console.log(ref.current?.querySelector(`img`), imgSrc.split("v=")[1])

        ref.current?.getElementsByClassName(`${imgSrc.split("/files")[1]}`)[0]?.scrollIntoView()

        // console.log(ref.current?.getElementsByClassName(`${imgSrc.split("v=")[1]}`), imgSrc.split("v=")[1])

    }, [imgSrc])

    return (
        <div className='fixed top-0 left-0 w-full max-h-screen overflow-y-scroll z-40 bg-slate-400 space-y-6' ref={ref}>
            <img src={mensTeesProductImage[0]} alt={""} className={`min-h-full bg-slate-400 min-w-full ${mensTeesProductImage[0].split("/files")[1]}`} />

            <img src={mensTeesProductImage[1]} alt={"imgSrc"} className={`min-h-full bg-slate-400 min-w-full ${mensTeesProductImage[1].split("/files")[1]}`} />

            <img src={mensTeesProductImage[2]} alt={"imgSrc"} className={`min-h-full bg-slate-400 min-w-full ${mensTeesProductImage[2].split("/files")[1]}`} />
            <button className='absolute right-4 top-2 rounded-full p-1 px-3 bg-slate-200 font-bold text-slate-900' onClick={handleFalsy}>X</button>
        </div>
    )
}