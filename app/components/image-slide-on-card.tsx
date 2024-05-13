import { useForTruthToggle } from '@/hooks'
import React, { useEffect, useState } from 'react'

export const ImageSlideOnCard = ({ imgSrc, nextPicture, initialPicture, rnd, images, repeat }
    : { imgSrc: string, nextPicture: () => void, initialPicture: () => void, rnd: boolean, images: number, repeat: boolean }) => {
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

    return (
        <img
            src={imgSrc} width={900} height={600}
            className={`${rnd ? "opacity-60" : ""} w-full h-full transition-all duration-1000 ${!showNew ? "opacity-0" : "opacity-100"} aspect-square`}
            onMouseEnter={handleTruthy}
            onMouseLeave={handleFalsy}
        />
    )
}
