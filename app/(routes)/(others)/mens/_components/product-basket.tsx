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
    return (
        <div className='flex gap-x-4 w-1/2'>
            <PictureCard imgSrc={mensTeesProductImage[0]} />
            <PictureCard imgSrc={mensTeesProductImage[1]} />

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
                // style={{
                //     cursor: `url('data:image/svg+xml,<%3Fxml version="1.0" encoding="utf-8"%3F><svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.15" d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" fill="%23000000"/><path d="M12 7V17M7 12H17M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="%23000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>')`
                // }}

                // style={{
                //     cursor: `url('data:image/svg+xml;utf8,<svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                //     <path opacity="0.2" d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" />
                //     <path d="M12 7V17M7 12H17M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" /></svg>'), pointer;`
                // }}

                // style={{
                //     cursor: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24"><path opacity=".2" d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" fill="%23000000"/><path d="M12 7V17M7 12H17M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"/></svg>'), auto;`
                // }}

                // style={{
                //     cursor: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24"><path opacity=".2" d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" /></svg>'), auto;`
                // }}

                // style={{
                //     cursor: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 80 80"><g><path d="M41.267,18.557H26.832V4.134C26.832,1.851,24.99,0,22.707,0c-2.283,0-4.124,1.851-4.124,4.135v14.432H4.141c-2.283,0-4.139,1.851-4.138,4.135c-0.001,1.141,0.46,2.187,1.207,2.934c0.748,0.749,1.78,1.222,2.92,1.222h14.453V41.27c0,1.142,0.453,2.176,1.201,2.922c0.748,0.748,1.777,1.211,2.919,1.211c2.282,0,4.129-1.851,4.129-4.133V26.857h14.435c2.283,0,4.134-1.867,4.133-4.15C45.399,20.425,43.548,18.557,41.267,18.557z"/></g></svg>'), auto;`
                // }}

                style={{
                    cursor: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80"><circle cx="22" cy="22" r="22" opacity=".2" /><g><path d="M41.267,18.557H26.832V4.134C26.832,1.851,24.99,0,22.707,0c-2.283,0-4.124,1.851-4.124,4.135v14.432H4.141c-2.283,0-4.139,1.851-4.138,4.135c-0.001,1.141,0.46,2.187,1.207,2.934c0.748,0.749,1.78,1.222,2.92,1.222h14.453V41.27c0,1.142,0.453,2.176,1.201,2.922c0.748,0.748,1.777,1.211,2.919,1.211c2.282,0,4.129-1.851,4.129-4.133V26.857h14.435c2.283,0,4.134-1.867,4.133-4.15C45.399,20.425,43.548,18.557,41.267,18.557z"/></g></svg>'), auto;`
                }}

            // style={{
            //     cursor: `url("data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='32px' height='32px' viewBox='0 0 512 512' style='enable-background:new 0 0 512 512;' xml:space='preserve'%3E %3Cpath d='M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4 L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1 c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1 c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z'/%3E %3C/svg%3E"), pointer;`
            // }}

            // style={{ cursor: `url('http://wiki-devel.sugarlabs.org/images/e/e2/Arrow.cur'), auto`}} 

            // style={{ cursor: `url('@/public/next.svg'), auto`}}
            // style={{ cursor: 'url("@/public/next.svg"), auto'}} 


            // style={{ cursor: curImg}} 
            // style={{
            //     cursor: `url(@/public/next.svg)`
            // }}


            // style={{
            //     cursor: `url('https://icons8.com/icon/mcCRHk2xvR7f/code', pointer)`
            // }}

            //             <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            //   <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4.243a1 1 0 1 0-2 0V11H7.757a1 1 0 1 0 0 2H11v3.243a1 1 0 1 0 2 0V13h3.243a1 1 0 1 0 0-2H13V7.757Z" clip-rule="evenodd"/>
            // </svg>



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
        // ref.current?.scrollIntoView({behavior: "smooth",block: "center", inline: "end"})
        // ref.current?.querySelector(`#${imgSrc}`)?.scrollIntoView({behavior: "smooth",block: "center", inline: "end"})

        // ref.current?.querySelector(`.${imgSrc}`)?.scrollIntoView({behavior: "smooth",block: "center", inline: "end"})

        // console.log(ref.current?.querySelector(`${imgSrc.split("v=")[1]}`), imgSrc.split("v=")[1])

        // console.log(ref.current?.querySelector(`img`), imgSrc.split("v=")[1])

        ref.current?.getElementsByClassName(`${imgSrc.split("v=")[1]}`)[0]?.scrollIntoView()

        // console.log(ref.current?.getElementsByClassName(`${imgSrc.split("v=")[1]}`), imgSrc.split("v=")[1])

    }, [imgSrc])

    return (
        <div className='fixed top-0 left-0 w-full max-h-screen overflow-y-scroll z-40 bg-slate-400 space-y-6' ref={ref}>
            <img id={mensTeesProductImage[0].split("v=")[1]} src={mensTeesProductImage[0]} alt={""} className={`min-h-full bg-slate-400 min-w-full ${mensTeesProductImage[0].split("v=")[1]}`} />

            <img id={mensTeesProductImage[1].split("v=")[1]} src={mensTeesProductImage[1]} alt={"imgSrc"} className={`min-h-full bg-slate-400 min-w-full ${mensTeesProductImage[1].split("v=")[1]}`} />
            <button className='absolute right-4 top-2 rounded-full p-1 px-3 bg-slate-200 font-bold text-slate-900' onClick={handleFalsy}>X</button>
        </div>
    )
}