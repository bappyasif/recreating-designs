"use client"

import { getImages } from '@/app/utils'
import useInViewPort, { useForTruthToggle } from '@/hooks'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'

export const EscapeGallery = () => {
    // const ref = useRef(null)
    // const show = useInViewPort(ref, { threshold: 1 })

    // console.log(show, "show escape!!")

    return (
        <div className='w-full flex flex-col gap-y-20 pb-28 text[#474747]'>
            <Heading />
            <SubHeading />
            <Gallery />
        </div>
    )
}

const Gallery = () => {
    const [images, setImages] = useState<string[]>([])

    const [count, setcount] = useState(0)

    useEffect(() => {
        getImages()
            .then((data: any) => {
                const photos: string[] = data?.photos?.map((item: any) => item?.src?.medium)
                // console.log(data, photos)
                if (photos?.length) {
                    setImages(photos)
                }
            }).catch(err => console.log(err))
    }, [])

    const showAll = () => images?.map(imgSrc => <GalleryCard key={imgSrc} imgSrc={imgSrc} />)

    // const ref = useRef<React.UIEvent<HTMLUListElement, UIEvent>>(null)
    const ref = useRef<any>(null)

    // const onScrollRight = () => {
    //     // console.log(ref.current, "!!", ref.current?.currentTarget)
    //     // ref.current?.currentTarget.scrollBy({left: 400})
    //     ref.current?.scrollBy({ left: 200 })
    // }

    // const onScrollLeft = () => {
    //     // ref.current?.scrollTo({ left: 40 })
    //     // ref.current?.scrollBy({ left: 40 })
    //     ref.current.scrollLeft
    // }

    const onScrollRight = () => {
        // ref.current.scrollLeft += 320
        ref.current.scrollLeft += 432

        if(count < 11) {
            setcount(prev => prev + 1)
        }
    }

    const onScrollLeft = () => {
        // ref.current.scrollLeft -= 320
        ref.current.scrollLeft -= 432

        if(count > 0) {
            setcount(prev => prev - 1)
        }
    }

    const {handleFalsy, handleTruthy, isTrue} = useForTruthToggle()

    const ref2 = useRef(null)
    const show = useInViewPort(ref2, { threshold: 1 })

    // console.log(show, "show escape!!")

    return (
        <div
            ref={ref2}
            // className='relative flex flex-col justify-center items-center py-16'
            className={`relative flex flex-col justify-center items-center py-16 transition-all duration-1000 ${show ? "opacity-100 translate-y-0" : "opacity-80 translate-y-2"}`}
            // className='relative'
            onMouseEnter={handleTruthy}
            onMouseLeave={handleFalsy}
        >
            <ul
             ref={ref} 
             className='flex gap-x-0 overflow-x-hidden flex-nowrap w-full'
            // className='flex gap-x-0 overflow-x-hidden flex-nowrap w-[99.99%]'
            // onScroll={e => {
            //     e.currentTarget.scrollTo({left: 400})
            // }}
            // onScroll={e => {
            //     e.currentTarget.scrollBy({left: 400})
            // }}
            // onScroll={e => {
            //     e.currentTarget.scrollLeft
            // }}
            >
                {showAll()}
            </ul>

            <div className={`flex justify-between items-center self-center absolute w-full z-20 ${isTrue ? "opacity-100" : "opacity-0"}`}>
                <button className={`bg-slate-950 bg-opacity-65 p-1 ${count === 0 && isTrue ? "invisible" :"visible"} rounded-full px-2 pb-2 text-2xl ml-9`} onClick={onScrollLeft}>&larr;</button>
                <button className={`bg-slate-950 bg-opacity-65 p-1 ${count === 11 && isTrue ? "invisible" :"visible"} rounded-full px-2 pb-2 text-2xl mr-9`} onClick={onScrollRight}>&rarr;</button>
            </div>

            {/* <div className={`flex justify-between items-center self-center absolute w-full z-20`}>
                <button className={`bg-red-400 p-1 ${count === 0 ? "invisible" :"visible"} rounded-full px-2 pb-2 text-2xl`} onClick={onScrollLeft}>&larr;</button>
                <button className={`bg-red-400 p-1 ${count === 11 ? "invisible" :"visible"} rounded-full px-2 pb-2 text-2xl`} onClick={onScrollRight}>&rarr;</button>
            </div> */}
        </div>
    )
}

const GalleryCard = ({ imgSrc }: { imgSrc: string }) => {
    const {handleFalsy, handleTruthy, isTrue} = useForTruthToggle()

    return (
        <li 
            // className='min-w-80 max-w-80 h-96 rounded-md p-0.5 relative flex items-center justify-center' 
            className='min-w-[27rem] max-w-[27rem] h-96 rounded-md p-0.5 relative flex items-center justify-center' 
            onMouseEnter={handleTruthy} onMouseLeave={handleFalsy}>
            <img
                src={imgSrc}
                alt={imgSrc}
                width={800}
                height={800}
                className='w-full h-full rounded-md z-0'
            />
            <div className={`w-full h-full absolute transition-all duration-500 bg-slate-950 ${isTrue ? "opacity-40" : "opacity-0"} z-10`}></div>
            {/* <Link href={"#"} className='underline absolute'>See more</Link> */}
            <CardCaption isTrue={isTrue} />
        </li>
    )
}

const CardCaption = ({isTrue}: {isTrue: boolean}) => {
    return (
        <div className={`absolute transition-all duration-500 ${isTrue ? "opacity-100" : "opacity-0"} text-2xl`}>
            <Link href={"#"} className='font-medium'>See more</Link>
            <span className={`absolute -bottom-1.5 left-0 w-0 transition-all duration-500 ${isTrue ? "w-full" : "w-0"} h-0.5 bg-slate-100`}></span>
        </div>
    )
}

const SubHeading = () => {
    return (
        <p className='text-center w-1/2 mx-auto text-lg text-[#474747]'>We&apos;re not heavy users of social media but we do enjoy seeing what our community get up to using the #howiescape hashtag. Join in if you have an escape you&apos;d like us to see.</p>
    )
}

const Heading = () => {
    return (
        <div
            className='flex flex-col justify-center items-center gap-y-0 text-6xl relative h-24 text-[#474747]'
        // className='text-6xl w-full mx-auto'
        >
            <h2 className=''># howiescape</h2>
            <span className='absolute w-11 h-0.5 bg-blue-950 -bottom-2'></span>
        </div>
    )
}