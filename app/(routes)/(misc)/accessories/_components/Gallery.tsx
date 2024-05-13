import React, { useEffect, useState } from 'react'
import { accessories } from '../data'
import { useForTruthToggle } from '@/hooks'

export const ProductsGallery = () => {
    const showAll = () => accessories.map(item => <ShowCard key={item.name} {...item} />)

    return (
        <div className='grid grid-cols-3 gap-10'>
            {showAll()}
        </div>
    )
}

type CardProps = {
    name: string;
    price: number;
    images: string[];
    type: string;
    sizes: string[];
    stock: string;
}

const ShowCard = ({ ...data }: CardProps) => {
    const { images, name, price, sizes, stock, type } = data;

    return (
        <div className='w-96 h-full rounded-sm flex flex-col gap-y-6'>
            <ProductCard images={images} rnd={stock === "Out of stock"} />
            <div>
                <p className='text-xl font-bold'>{name}</p>
                <p className='text-xl font-semibold'>{stock === "Out of stock" ? "SOLD OUT" : price}</p>
            </div>
        </div>
    )
}

const ProductCard = ({ images, rnd }: { images: string[], rnd: boolean }) => {
    const [currSrc, setCurrSrc] = useState(0)

    const imgSources = images

    const nextPicture = () => setCurrSrc((prev) => {
        if (prev >= imgSources.length - 1) {
            return 0
        } else {
            return prev + 1
        }
    })

    const initialPicture = () => setCurrSrc(0)

    return (
        <div className='bg-slate-400 max-h-[40rem] w-full rounded-sm relative flex items-center'>
            <ProductImage imgSrc={imgSources[currSrc]} nextPicture={nextPicture} initialPicture={initialPicture} rnd={rnd} images={imgSources.length} repeat={currSrc === images.length - 1} />

            <span className={`${rnd ? "visible" : "invisible"} absolute bottom-0 w-full text-center text-xl font-bold`}>Sold out</span>
        </div>
    )
}

const ProductImage = (
    { imgSrc, nextPicture, initialPicture, rnd, images, repeat }
        : { imgSrc: string, nextPicture: () => void, initialPicture: () => void, rnd: boolean, images: number, repeat: boolean }
) => {

    const [showNew, setShowNew] = useState(true)

    const { handleFalsy, handleTruthy, isTrue } = useForTruthToggle()

    const duration = 6000 / images

    useEffect(() => {
        if (isTrue) {
            if (showNew) {
                const timer = setTimeout(() => setShowNew(false), duration)

                return () => clearTimeout(timer)
            } else {
                const timer = setTimeout(() => {
                    nextPicture()
                    setShowNew(true)
                }, duration / 2)

                return () => {
                    clearTimeout(timer)
                }
            }
        } else {
            initialPicture()
        }

        if (!isTrue && !showNew && imgSrc) {
            const timer = setTimeout(() => {
                setShowNew(true)
            }, 150)

            return () => clearTimeout(timer)
        }
    }, [imgSrc, showNew, isTrue])

    const [transitionTime, setTransitionTime] = useState<number>()

    useEffect(() => {
        // const additionals = images > 5 ? duration / 2 : duration / 3
        // setTransitionTime((duration + additionals) * images)
        // setTransitionTime((duration + 500) * images)

        // const additionals = images > 5 ? 420 : 380

        // setTransitionTime((duration * images) + additionals)
        // setTransitionTime(Math.floor((duration + additionals) * images))

        const quanta = 5 * 400

        setTransitionTime(Math.floor(duration * images + quanta))

        // console.log(duration, additionals, "!!", images, (duration + additionals) * images, (duration * images) + additionals, Math.floor((duration + additionals) * images))
    }, [images])

    const [repNow, setRepNow] = useState(true)

    useEffect(() => {
        if (repeat) {
            const addedTime = images === 4 ? duration + 150 : images === 5 ? duration + 200 : duration

            const timer2 = setTimeout(() => {
                setRepNow(false)
            }, addedTime)

            const timer = setTimeout(() => {
                setRepNow(true)
            }, addedTime + 200)

            return () => {
                clearTimeout(timer)
                clearTimeout(timer2)
            }
        }
    }, [repeat, images])

    return (
        <>
            <img
                src={imgSrc} width={900} height={600}
                className={`${rnd ? "opacity-60" : ""} w-full h-full transition-all duration-1000 ${!showNew ? "opacity-0" : "opacity-100"} aspect-square`}
                onMouseEnter={handleTruthy}
                onMouseLeave={handleFalsy}
            />

            {/* {
                transitionTime
                    ? (
                        <span
                            className={`bg-purple-400 absolute bottom-0 h-1.5 ${isTrue && repNow ? `transition-all duration-[${transitionTime}ms] ease-linear w-full` : "w-0.5"}`}
                        ></span>
                    ) : null
            } */}

            <span
                // className={`bg-purple-400 absolute bottom-0 h-1.5 ${isTrue && repNow ? `transition-all duration-[${transitionTime}ms] ease-linear w-full` : "w-0.5"}`}
                className={`bg-purple-400 absolute bottom-0 h-1.5 ${isTrue && repNow ? `transition-all duration-[8150ms] ease-linear w-full` : "w-0.5"}`}
            ></span>
        </>
    )
}