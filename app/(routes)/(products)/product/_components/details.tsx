"use client"

import { useForTruthToggle } from '@/hooks'
import React, { useEffect, useRef, useState } from 'react'
import { PiMinus, PiPlus } from 'react-icons/pi'

export const Details = () => {
    return (
        <div className='flex flex-col gap-y-10'>
            <Reusable text='Built using 80% recycled polyester sherpa fleece, the Minke Mitten is a supremely cosy glove with a high pile fleece which traps plenty of warmth. This fleece uses 80% post-consumer and post-industrial recycled material that prevents unnecessary landfill waste.' text2='They feature an elasticated wrist to reduce heat loss and fit snuggly, with room for layering over your waterproof glove. The fast-drying fabric makes this mitt ideal for adventure on even the coldest days.' />

            <Specifications />
            <Fabrics />
            <Shipping />
        </div>
    )
}

const Shipping = () => {
    const { handleFalsy, handleTruthy, isTrue } = useForTruthToggle()

    return (
        <div className='flex flex-col'>
            <ShowAccordionItem handleFalsy={handleFalsy} handleTruthy={handleTruthy} isTrue={isTrue} title='Shipping & Returns' />

            <div
                // className={`flex flex-col gap-y-4 transition-all duration-200 ${isTrue ? "h-fit opacity-100" : "h-0 opacity-0"}`}
                className={`mt-10 flex flex-col gap-y-10 transition-all duration-1000 ${isTrue ? "block" : "h-0 hidden opacity-0"}`}
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
        </div>
    )
}

const Fabrics = () => {
    const { handleFalsy, handleTruthy, isTrue } = useForTruthToggle()
    // const { handleFalsy: falsy, handleTruthy: truthy, isTrue: isTest } = useForTruthToggle()
    // const { handleFalsy: falsy2, handleTruthy: truthy2, isTrue: isTest2 } = useForTruthToggle()
    // const [height, setHeight] = useState(0)

    // useEffect(() => {
    //     if (isTrue) {
    //         truthy()
    //         // setHeight(ref.current?.clientHeight || 0)
    //         console.log(">?!?!>>!", height)
    //     }
    //     else {
    //         falsy();
    //         setHeight(ref.current?.clientHeight || 0)
    //     }
    // }, [isTrue])

    // useEffect(() => {
    //     if (isTest) {
    //         truthy2()
    //         console.log(ref.current?.clientHeight)
    //         setHeight(ref.current?.clientHeight || 0)
    //     }
    // }, [isTest])

    // useEffect(() => {
    //     if (height > 0 && isTest2) {
    //         const timer = setTimeout(() => setHeight(h => h - 1), 150)

    //         return () => clearTimeout(timer)
    //     }
    // }, [height, isTest2])

    const ref = useRef<HTMLUListElement | null>(null)

    // console.log(height, "height!~~!")

    const [h, setH] = useState<number | null>()

    const handleOpen = () => {
        handleTruthy()
        ref.current?.clientHeight! > 0 && setH(ref.current?.clientHeight || 0)
    }

    useEffect(() => {
        if (h && !isTrue) {
            const timer = setTimeout(() => {
                setH(p => p! - 1)
            }, 20)

            return () => clearTimeout(timer)
        }
    }, [isTrue, h])

    // console.log(h, "?!?!?")

    return (
        <div className='flex flex-col'>
            <ShowAccordionItem handleFalsy={handleFalsy} handleTruthy={handleOpen} isTrue={isTrue} title='Fabrics & Care' />
            <ul ref={ref}
                // className={`overflow-hidden bg-slate-200 transition-all duration-500 ${isTrue ? "h-fit list-disc list-inside mt-10" : ""} ${isTest2 && !isTrue ? `text-red-400` : ""} ${height ? `h-[${height}px]` : "h-0"}`}

                // className={`overflow-hidden bg-slate-200 transition-all duration-500 ${isTrue ? "h-fit list-disc list-inside mt-10" : "bg-transparent"} `}

                className={`overflow-hidden list-disc list-inside bg-slate-200 transition-all duration-1000 ${isTrue && h ? "h-fit mt-10" : `bg-transparent h-[${h}px] opacity-0`}`}

                // className={`overflow-hidden list-disc list-inside bg-slate-200 transition-all duration-1000 ${isTrue && h ? "h-fit mt-10" : `bg-transparent -h-[${h}px]`} `}
            >
                <li>80% recycled polyester, 20% polyester</li>
                <li>Machine wash</li>
            </ul>
            {/* <ul className={`transition-all duration-500 ${isTrue ? "h-fit list-disc list-inside mt-10 bg-slate-200" : "h-0 opacity-0"}`}>
                <li>80% recycled polyester, 20% polyester</li>
                <li>Machine wash</li>
            </ul> */}
            {/* {
                isTrue
                    ? (
                        <ul className='list-disc list-inside'>
                            <li>80% recycled polyester, 20% polyester</li>
                            <li>Machine wash</li>
                        </ul>
                    ) : null
            } */}
        </div>
    )
}

const Specifications = () => {
    const { handleFalsy, handleTruthy, isTrue } = useForTruthToggle()
    return (
        <div className='flex flex-col'>
            <ShowAccordionItem handleFalsy={handleFalsy} handleTruthy={handleTruthy} isTrue={isTrue} title='Specifications' />
            <ul
                className={`transition-all duration-500 ${isTrue ? "h-fit list-disc list-inside mt-10 bg-slate-400" : "h-0 opacity-0"}`}

            // className={`h-0 opacity-0 transition-all duration-1000 ${isTrue ? "h-fit list-disc list-inside mt-10 bg-slate-400 opacity-100" : ""}`}
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
            {/* {
                isTrue
                    ? (
                        <ul className='list-disc list-inside'>
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
                    ) : null
            } */}
        </div>
    )
}

const Reusable = ({ text, text2 }: { text: string, text2: string }) => {
    const { handleFalsy, handleTruthy, isTrue } = useForTruthToggle()
    const { handleFalsy: falsy, handleTruthy: truthy, isTrue: isDelayed } = useForTruthToggle()

    // useEffect(() => {
    //     if (!isTrue) {
    //         truthy()
    //     }
    // }, [isTrue])

    // useEffect(() => {
    //     if (isDelayed) {
    //         const timer = setTimeout(falsy, 400)

    //         return () => clearTimeout(timer)
    //     }
    // }, [isDelayed])

    // console.log(isTrue, isDelayed)

    return (
        <div className='flex flex-col'>
            {/* <button className='flex gap-x-4 items-center' onClick={isTrue ? handleFalsy : handleTruthy}>
                <span className='flex items-center relative'>
                    <PiPlus className={`absolute transition-all duration-500 ${!isTrue ? "rotate-[360deg] opacity-100" : "opacity-0"}`} />
                    <PiMinus className={`absolute transition-all duration-500 ${isTrue ? "-rotate-[360deg] opacity-100" : "opacity-0"}`} />
                </span>
                <span>Full description</span>
            </button> */}

            <ShowAccordionItem handleFalsy={handleFalsy} handleTruthy={handleTruthy} isTrue={isTrue} title='Full description' />

            <div className={`mt-10 flex flex-col gap-y-10 transition-all duration-1000 ${isTrue ? "block" : "h-0 hidden opacity-0"}`}
            // style={{
            //     // transitionDelay: !isTrue ? "4s" : "0",
            //     padding: "0 18px",
            //     backgroundColor: "white",
            //     display: isTrue ? "block" : "none",
            //     overflow: "hidden"
            // }}
            >
                <p>{text}</p>
                <p>{text2}</p>
            </div>

            {/* <div className={`flex flex-col gap-y-10 transition-all duration-200 ${isTrue ? "h-fit" : isDelayed ? "h-fit opacity-40" : "h-0 opacity-0"}`}>
                <p>{text}</p>
                <p>{text2}</p>
            </div> */}

            {/* <div className={`flex flex-col gap-y-10 transition-all duration-200 ${isTrue ? "h-fit" : "h-0 opacity-0"}`}>
                <p>{text}</p>
                <p>{text2}</p>
            </div> */}
            {/* {
                isTrue
                    ? (
                        <div className='flex flex-col gap-y-10'>
                            <p>{text}</p>
                            <p>{text2}</p>
                        </div>
                    ) : null
            } */}
        </div>
    )
}

const ShowAccordionItem = ({ isTrue, handleFalsy, handleTruthy, title }: { isTrue: boolean, handleFalsy: () => void, handleTruthy: () => void, title: string }) => {
    // const { handleFalsy, handleTruthy, isTrue } = useForTruthToggle()

    return (
        <button
            className='z-20 flex gap-x-4 items-center'
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