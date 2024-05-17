"use client"

import { mensTeesProductImage, womensTeesProductImages } from '@/data'
import useInViewPort, { useForObserverIntersectionJustOnce, useForTruthToggle } from '@/hooks'
import React, { useEffect, useRef, useState } from 'react'

export const ReUsableProductSlider = ({ headerText, prods }: { 
    headerText: string, prods: string
}) => {
    // const { handleFalsy, handleTruthy, isTrue } = useForTruthToggle()

    // const ref = useRef(null)

    // const test = useInViewPort(ref, { threshold: 1 })

    // useEffect(() => {
    //     if (test && !isTrue) {
    //         handleTruthy!()
    //     }
    // }, [test, isTrue])

    // console.log(test, "test!!", isTrue)

    const {isTrue, ref} = useForObserverIntersectionJustOnce()

    return (
        <div
            ref={ref}
            className={`transition-all duration-1000 ${isTrue ? "opacity-100 scale-100" : "opacity-40 scale-50"} flex flex-col gap-y-6 ml-20 my-20`}
        >
            <div className='flex justify-between gap-x-4 font-bold mr-20'>
                <h2 className='text-4xl cursor-move'>{headerText}</h2>
                <button className='text-xl'>View all</button>
            </div>
            <SliderScroller prods={prods} />
        </div>
    )
}

const SliderScroller = ({prods}: {prods: string}) => {
    const ref = useRef<HTMLDivElement | null>(null)

    const handleNext = () => {
        if (ref.current) {
            ref.current.scrollLeft += 384
        }
    }

    const handlePrev = () => {
        if (ref.current) {
            ref.current.scrollLeft -= 384
        }
    }

    const allProds = () => [1, 2, 3, 4, 5, 6, 7].map(v => <ProductCard key={v} v={v} prods={prods} />)

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

const ProductCard = ({ v, prods }: { v: number, prods: string }) => {
    const [currSrc, setCurrSrc] = useState(0)

    const [rnd, setRnd] = useState(0.0)

    useEffect(() => {
        setRnd(Math.random())
    }, [])

    const imgSources = prods === "mens" ? mensTeesProductImage : womensTeesProductImages

    const nextPicture = () => setCurrSrc((prev) => {
        if (prev >= imgSources.length - 1) {
            return 0
        } else {
            return prev + 1
        }
    })

    const initialPicture = () => setCurrSrc(0)

    return (
        <div key={v} className='bg-slate-400 min-h-[27rem] min-w-96 rounded-sm relative flex items-center'>
            <span className='absolute'>{v}</span>
            <ProductImage imgSrc={imgSources[currSrc]} nextPicture={nextPicture} initialPicture={initialPicture} rnd={rnd} />
            <span className={`${rnd > .5 ? "visible" : "invisible"} absolute bottom-0 w-full text-center text-xl font-bold`}>Sold out</span>
        </div>
    )
}

const ProductImage = ({ imgSrc, nextPicture, initialPicture, rnd }: { imgSrc: string, nextPicture: () => void, initialPicture: () => void, rnd: number }) => {

    const [showNew, setShowNew] = useState(true)

    const { handleFalsy, handleTruthy, isTrue } = useForTruthToggle()

    useEffect(() => {
        if (isTrue) {
            if (showNew) {
                const timer = setTimeout(() => setShowNew(false), 4000)

                return () => clearTimeout(timer)
            } else {
                const timer = setTimeout(() => {
                    nextPicture()
                    setShowNew(true)
                }, 1000)

                return () => clearTimeout(timer)
            }
        } else {
            initialPicture()
        }
    }, [imgSrc, showNew, isTrue])

    return (
        <>
            <img
                src={imgSrc} width={900} height={600}
                className={`${rnd > .5 ? "opacity-60" : ""} w-full h-full transition-all duration-1000 ${!showNew ? "opacity-0" : "opacity-100"}`}
                onMouseEnter={handleTruthy}
                onMouseLeave={handleFalsy}
            />
            <span
                className={`bg-purple-400 absolute bottom-0 ${isTrue ? "productAnimationProgress" : ""}`}
            ></span>
        </>
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