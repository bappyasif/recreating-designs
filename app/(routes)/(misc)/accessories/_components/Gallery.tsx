import React, { useState } from 'react'
import { accessories } from '../data'
import { ImageSlideOnCardWithProgress } from '@/app/components/image-slide-on-card-with-progress'
import { useForAccessoriesFiltering } from '@/hooks'

export const ProductsGallery = ({allFilters}: {allFilters: string[]}) => {

    const [data, setData] = useState(accessories)

    useForAccessoriesFiltering(allFilters, setData)

    // const showAll = () => (filteredProducts as typeof accessories).map((item, idx) => <ShowCard key={idx} {...item} />)

    // console.log(allFilters, "allFilters")

    const showAll = () => data.map((item, idx) => <ShowCard key={idx} {...item} />)

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
        <div className='w-[27rem] h-[44rem] rounded-sm flex flex-col gap-y-6'>
            <ProductCard images={images} rnd={stock === "Out of stock"} />
            <div>
                <p className='text-xl font-bold'>{name}</p>
                <p className='text-xl font-semibold'>${stock === "Out of stock" ? "SOLD OUT" : price}</p>
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
        <div className='bg-[#f6f6f6] min-h-[38rem] w-full rounded-sm relative flex items-center'>
            {/* <ProductImage imgSrc={imgSources[currSrc]} nextPicture={nextPicture} initialPicture={initialPicture} rnd={rnd} images={imgSources.length} repeat={currSrc === images.length - 1} /> */}

            <ImageSlideOnCardWithProgress images={images.length} imgSrc={imgSources[currSrc]} initialPicture={initialPicture} nextPicture={nextPicture} repeat={currSrc === images.length - 1} rnd={rnd} />

            <span className={`${rnd ? "visible" : "invisible"} absolute bottom-0 w-full text-center text-xl font-bold`}>Sold out</span>
        </div>
    )
}