import React from 'react'
import { accessories } from '../data'

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
            <img src={images[0]} alt={name} className='min-w-[27rem] min-h-[31rem] aspect-square rounded-sm' />
            <div>
            <p className='text-xl font-bold'>{name}</p>
            <p className='text-xl font-semibold'>{price}</p>
            </div>
        </div>
    )
}