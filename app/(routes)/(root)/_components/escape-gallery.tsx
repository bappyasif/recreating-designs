"use client"

import { getImages } from '@/app/utils'
import React, { useEffect, useRef, useState } from 'react'

export const EscapeGallery = () => {
    return (
        <div className='w-full'>
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
        ref.current.scrollLeft += 320

        if(count < 10) {
            setcount(prev => prev + 1)
        }
    }

    const onScrollLeft = () => {
        ref.current.scrollLeft -= 320

        if(count > 0) {
            setcount(prev => prev - 1)
        }
    }

    return (
        <div
            className='relative flex flex-col justify-center items-center'
            // className='relative'
        >
            <ul ref={ref} className='flex gap-x-0 overflow-x-hidden flex-nowrap w-[99.99%]'
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

            <div className='flex justify-between items-center self-center absolute w-full'>
                <button className={`bg-red-400 p-2 ${count === 0 ? "invisible" :"visible"}`} onClick={onScrollLeft}>&lt;</button>
                <button className={`bg-red-400 p-2 ${count === 10 ? "invisible" :"visible"}`} onClick={onScrollRight}>&gt;</button>
            </div>
        </div>
    )
}

const GalleryCard = ({ imgSrc }: { imgSrc: string }) => {
    return (
        <li className='min-w-80 max-w-80 h-96 rounded-md p-0.5'>
            <img
                src={imgSrc}
                alt={imgSrc}
                width={800}
                height={800}
                className='w-full h-full rounded-md'
            />
        </li>
    )
}

const SubHeading = () => {
    return (
        <p className='text-center w-1/2 mx-auto'>We're not heavy users of social media but we do enjoy seeing what our community get up to using the #howiescape hashtag. Join in if you have an escape you'd like us to see.</p>
    )
}

const Heading = () => {
    return (
        <div
            className='flex flex-col justify-center items-center gap-y-0 text-6xl relative h-24'
        // className='text-6xl w-full mx-auto'
        >
            <h2 className=''># howiescape</h2>
            <span className='absolute top-10'>_</span>
        </div>
    )
}