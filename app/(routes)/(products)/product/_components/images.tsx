import React from 'react'
import { products } from '../data'

export const Images = () => {
    // const imgs = products.map(item => item.type === "Unisex" ? item.images : null).filter(v => v)
    const product = products.filter(item => item.type === "Unisex")
    const imgs = product[0].images
    
    const showImgs = () => imgs?.map(imgSrc => <img key={imgSrc} src={imgSrc} className='bg-slate-200 h-[36rem] w-[27rem]' />)

    return (
        <div className='grid grid-cols-2 gap-10 w-3/5 place-items-center'>
            {showImgs()}
        </div>
    )
}