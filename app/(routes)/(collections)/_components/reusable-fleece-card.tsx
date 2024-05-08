import { useForTruthToggle } from "@/hooks";
import { useEffect, useState } from "react";

type Cardrops = {
    name: string;
    images: string[];
}

export const FleeceCard = ({ name, images }: Cardrops) => {
    const [rnd, setRnd] = useState(0.0)

    useEffect(() => {
        setRnd(Math.random())
    }, [])

    return (
        <div className='w-[45%] flex flex-col gap-y-4'>

            <ProductCard prods='mens' images={images} rnd={rnd} />

            <div>
                <div className="space-y-2 text-xl">
                    <p>{name}</p>
                    <p>$25.00</p>
                </div>
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
        <div className='bg-slate-400 max-h-[40rem] w-full rounded-sm relative flex items-center'>
            <ProductImage imgSrc={imgSources[currSrc]} nextPicture={nextPicture} initialPicture={initialPicture} rnd={rnd} images={imgSources.length} repeat={currSrc === images.length - 1} />

            <span className={`${rnd > .5 ? "visible" : "invisible"} absolute bottom-0 w-full text-center text-xl font-bold`}>Sold out</span>
        </div>
    )
}

const ProductImage = ({ imgSrc, nextPicture, initialPicture, rnd, images, repeat }: { imgSrc: string, nextPicture: () => void, initialPicture: () => void, rnd: number, images: number, repeat: boolean }) => {

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
                    // !isTrue && initialPicture()
                    // !imgSrc && initialPicture()
                    clearTimeout(timer)
                }
            }
        } else {
            initialPicture()
        }

        // if(imgSrc) {
        //     const timer = setTimeout(() => {
        //         // !isTrue && !showNew && initialPicture()
        //         !isTrue && !showNew && handleTruthy()
        //         !isTrue && !showNew && console.log("flushed!!")
        //         // console.log(imgSrc, isTrue, showNew)
        //     }, 400)

        //     return () => clearTimeout(timer)
        // }

        // console.log(imgSrc, isTrue, showNew)

        if(!isTrue && !showNew && imgSrc) {
            // handleTruthy()
            const timer = setTimeout(() => {
                // initialPicture()
                setShowNew(true)
                // console.log("flushing it!!")
            }, 150)

            return () => clearTimeout(timer)
        }
    }, [imgSrc, showNew, isTrue])

    const [transitionTime, setTransitionTime] = useState<number>()

    useEffect(() => {
        const additionals = images > 5 ? duration / 2 : duration / 3
        setTransitionTime((duration + additionals) * images)
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
                className={`${rnd > .5 ? "opacity-60" : ""} w-full h-full transition-all duration-1000 ${!showNew ? "opacity-0" : "opacity-100"} aspect-square`}
                onMouseEnter={handleTruthy}
                onMouseLeave={handleFalsy}
            />

            <span
                className={`bg-purple-400 absolute bottom-0 h-1.5 ${isTrue && repNow ? `transition-all duration-[${transitionTime}ms] ease-linear w-full` : "w-0.5"}`}
            ></span>
        </>
    )
}