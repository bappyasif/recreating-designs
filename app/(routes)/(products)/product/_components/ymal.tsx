"use client"

import React, { useEffect, useState } from 'react'
import { products } from '../data'
import { useForRepeatSliderProgressView } from '@/hooks'

const filteredProds = products.filter(item => item.type !== "Unisex")

export const YouMayAlsoLike = () => {
    const showAll = () => filteredProds.map(item => <ProdCard key={item.name} {...item} />)

    return (
        <div>
            <h3>You may also like</h3>
            <div className='flex gap-x-10'>
                {showAll()}
            </div>
        </div>
    )
}

const ProdCard = ({ ...data }: typeof products[0]) => {
    const { images, name, price } = data;

    const [idx, setIdx] = useState(0)

    const [animateNow, setAnimateNow] = useState(false)

    const [onEntry, setOnEntry] = useState(false)

    const [hovered, setHovered] = useState(false)

    const [startOver, setStartOver] = useState(false)

    useEffect(() => {
        if (hovered) {
            const timer = setTimeout(() => {
                setIdx(prev => {
                    if (prev === 3) {
                        return 0
                    } else {
                        return prev + 1
                    }
                })
            }, 4000)

            const timer2 = setTimeout(() => {
                setAnimateNow(true)
                // setOnEntry(false)
            }, 3600)

            setOnEntry(true)

            // setStartOver(false)

            if (idx === 0 && hovered) {
                // console.log("running!!")
                setStartOver(false)
            }

            const timer3 = setTimeout(() => {
                setOnEntry(false)
            }, 200)

            return () => {
                clearTimeout(timer)
                clearTimeout(timer2)
                clearTimeout(timer3)
            }
        }

    }, [idx, hovered])

    useEffect(() => {
        if (animateNow) {
            const timer = setTimeout(() => {
                setAnimateNow(false)
                // setOnEntry(false)
            }, 300)

            return () => clearTimeout(timer)
        }
    }, [animateNow])

    useEffect(() => {
        if (!hovered) {
            setIdx(0)
            setAnimateNow(false)
        } else {
            // setStartOver(false)
            const timer = setInterval(() => {
                setStartOver(true)
            }, 16000)

            return () => {
                clearInterval(timer)
            }
        }
    }, [hovered])

    return (
        <div className='relative'>
            <div
                className={`transition-all duration-300 w-[31rem] h-[31rem] ${animateNow ? "text-red-400 opacity-20" : "opacity-100"} ${onEntry ? "opacity-0" : "opacity-100"}`}
                // className={`transition-all duration-300 w-[31rem] h-[31rem] ${onEntry ? "opacity-0" : "opacity-100"}`}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onMouseOver={() => !hovered && idx === 0 && setHovered(true)}
            >
                <img src={images[idx]} alt={name} className='w-full h-96 aspect-auto relative' />

                <div>
                    <p>{name}</p>
                    <p>{price}</p>
                </div>
            </div>
            <p
                className={`bg-purple-400 absolute top-0 h-1.5 ${hovered && !startOver ? `transition-all duration-[16000ms] ease-linear w-full` : "w-0"}`}
            ></p>
        </div>
    )
}
