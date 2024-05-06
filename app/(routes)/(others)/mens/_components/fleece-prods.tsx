import React, { useEffect, useState } from 'react'
import { ReusableFleeceHeading } from '../../_components/reusable-fleece-heading'
import { mensFleece, womensFleece } from '@/data'
import { useForTruthToggle } from '@/hooks'

export const FleeceProds = () => {
    const fleeces = [...mensFleece, ...womensFleece]

    const showAll = () => fleeces.map(item => <FleeceCard key={item.name} name={item.name} images={item.images} />)

    return (
        <div className='w-full px-20'>
            <ReusableFleeceHeading />

            <div className='w-full flex flex-wrap gap-20 justify-between'>
                {showAll()}
            </div>
        </div>
    )
}

type Cardrops = {
    name: string;
    images: string[];
}

const FleeceCard = ({ name, images }: Cardrops) => {
    const [rnd, setRnd] = useState(0.0)

    useEffect(() => {
        setRnd(Math.random())
    }, [])

    return (
        <div className='w-[45%] flex flex-col gap-y-4'>
            {/* <div className='h-[42rem] w-full bg-slate-400 rounded-lg'></div> */}

            <ProductCard prods='mens' images={images} rnd={rnd} />

            <div>
                <p>{name}</p>
                {
                    rnd > .5 ? <p>Sold Out</p> : null
                }
            </div>
        </div>
    )
}

const ProductCard = ({ prods, images, rnd }: { prods: string, images: string[], rnd: number }) => {
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
        <div className='bg-slate-400 min-h-[44rem] w-full rounded-sm relative flex items-center'>
            <ProductImage imgSrc={imgSources[currSrc]} nextPicture={nextPicture} initialPicture={initialPicture} rnd={rnd} images={imgSources.length} />
            <span className={`${rnd > .5 ? "visible" : "invisible"} absolute bottom-0 w-full text-center text-xl font-bold`}>Sold out</span>
        </div>
    )
}

const ProductImage = ({ imgSrc, nextPicture, initialPicture, rnd, images }: { imgSrc: string, nextPicture: () => void, initialPicture: () => void, rnd: number, images: number }) => {

    const [showNew, setShowNew] = useState(true)

    const { handleFalsy, handleTruthy, isTrue } = useForTruthToggle()

    useEffect(() => {
        if (isTrue) {
            // const duration =  Math.round((6000 / images))

            // const duration =  images * 1000
            // 6 1 / 6

            // const duration = Math.round((1500 / (6000 / images)) * 1000)

            // const duration = Math.round((6000 / (1500 / images)) * 1000)

            // const duration = 6000/images

            // const duration = (images * 1000)/images

            // console.log(duration, "duraiton", 6000/images, images)

            console.log(6000 / images, (6000 / images))

            const duration = 1000

            if (showNew) {
                const timer = setTimeout(() => setShowNew(false), duration)

                return () => clearTimeout(timer)
            } else {
                const timer = setTimeout(() => {
                    nextPicture()
                    setShowNew(true)
                }, 500)

                return () => clearTimeout(timer)
            }
        } else {
            initialPicture()
        }
    }, [imgSrc, showNew, isTrue])

    // const {handleTruthy: testTruthy, handleFalsy: testFalsy, isTrue: isTest} = useForTruthToggle()

    // useEffect(() => {
    //     if(isTrue) {
    //         const timer = setTimeout(() => handleFalsy(), 1500*images)

    //         return () => {
    //             clearTimeout(timer)
    //             // handleTruthy()
    //         }
    //     }
    // }, [isTrue])

    return (
        <>
            <img
                src={imgSrc} width={900} height={600}
                className={`${rnd > .5 ? "opacity-60" : ""} w-full h-full transition-all duration-1000 ${!showNew ? "opacity-0" : "opacity-100"}`}
                onMouseEnter={handleTruthy}
                onMouseLeave={handleFalsy}
            />
            {/* <span
                className={`bg-purple-400 absolute bottom-0 h-1.5 ${isTrue ? "transition-all duration-[9000ms] ease-linear w-full" : "w-0.5"}`}
            ></span> */}
            <span
                className={`bg-purple-400 absolute bottom-0 h-1.5 ${isTrue ? `transition-all duration-[${1500*images}ms] ease-linear w-full` : "w-0.5"}`}
            ></span>

            {/* <span
                className={`bg-purple-400 absolute bottom-0 h-1.5 ${isTrue ? `transition-all duration-[${1100 * images}ms] ease-linear w-full` : "w-0.5"}`}
            ></span> */}

            {/* <span
                className={`bg-purple-400 absolute bottom-0 ${isTrue ? "productAnimationProgress" : ""}`}
            ></span> */}
        </>
    )
}