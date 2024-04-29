"use client"

import { mensTeesProductImage } from '@/data'
import { useForTruthToggle } from '@/hooks'
import React, { useEffect, useRef, useState } from 'react'

export const ProductSlider = ({ headerText }: { headerText: string }) => {

    return (
        <div className='flex flex-col gap-y-6 ml-20 my-20'>
            <div className='flex justify-between gap-x-4 font-bold mr-20'>
                <h2 className='text-4xl cursor-move'>{headerText}</h2>
                <button className='text-xl'>View all</button>
            </div>
            <SliderScroller />
        </div>
    )
}

const SliderScroller = () => {
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

    const allProds = () => [1, 2, 3, 4, 5, 6, 7].map(v => <ProductCard key={v} v={v} />)

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

const ProductCard = ({ v }: { v: number }) => {
    const [currSrc, setCurrSrc] = useState(0)

    const nextPicture = () => setCurrSrc((prev) => {
        if (prev >= 2) {
            return 0
        } else {
            return prev + 1
        }
    })

    const initialPicture = () => setCurrSrc(0)

    return (
        <div key={v} className='bg-slate-400 min-h-[27rem] min-w-96 rounded-sm relative'>
            <span className='absolute'>{v}</span>
            <ProductImage imgSrc={mensTeesProductImage[currSrc]} nextPicture={nextPicture} initialPicture={initialPicture} />
        </div>
    )
}

const ProductImage = ({ imgSrc, nextPicture, initialPicture }: { imgSrc: string, nextPicture: () => void, initialPicture: () => void }) => {

    const [showNew, setShowNew] = useState(true)

    const {handleFalsy, handleTruthy, isTrue} = useForTruthToggle()

    useEffect(() => {
        if(isTrue) {
            if(showNew) {
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
                className={`w-full h-full transition-all duration-1000 ${ !showNew ? "opacity-0" : "opacity-100"}`} 
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

// const ProductImage = ({ imgSrc, nextPicture }: { imgSrc: string, nextPicture: () => void }) => {

//     // const [startFading, setStartFading] = useState(false)
//     // const [onEntry, setOnEntry] = useState(false)

//     // useEffect(() => {
//     //     if(startFading) {
//     //         nextPicture()
//     //         setStartFading(false)
//     //         setOnEntry(true)
//     //     }
//     // }, [startFading])

//     // // console.log(imgSrc, startFading, onEntry, "checks!!")

//     // useEffect(() => {
//     //     const timer = setTimeout(() => {
//     //         setStartFading(true)
//     //     }, 20000)

//     //     // if(startFading) {
//     //     //     setOnEntry(true)
//     //     // }

//     //     return () => {
//     //         clearTimeout(timer)
//     //     }
//     // }, [imgSrc])

//     // const [newImg, setNewImg] = useState(false)

//     // useEffect(() => {
//     //     if(!newImg) {
//     //         const timer = setTimeout(() =>  {
//     //             nextPicture()
//     //             setNewImg(true)
//     //         }, 19000)

//     //         return () => {
//     //             // nextPicture()
//     //             clearTimeout(timer)
//     //         }
//     //     } else {
//     //         // setNewImg(true)

//     //         const timer = setTimeout(() => setNewImg(false), 1001)

//     //         return () => clearTimeout(timer)
//     //     }
//     // }, [imgSrc, newImg])

//     const [showNew, setShowNew] = useState(true)

//     useEffect(() => {
//         if(showNew) {
//             const timer = setTimeout(() => setShowNew(false), 18000)

//             return () => clearTimeout(timer)
//         } else {
//             const timer = setTimeout(() => {
//                 nextPicture()
//                 setShowNew(true)
//             }, 1000)

//             return () => clearTimeout(timer)
//         }
//     }, [imgSrc, showNew])

//     return (
//         <img src={imgSrc} width={900} height={600} 
        
//         // className={`w-full h-full transition-all duration-1000 ${startFading || onEntry ? "opacity-0" : "opacity-100"}`} 

//         // className={`w-full h-full transition-all duration-1000 ${ newImg ? "opacity-0" : "opacity-100"}`} 

//         className={`w-full h-full transition-all duration-1000 ${ !showNew ? "opacity-0" : "opacity-100"}`} 
//         />
//     )
// }