import React from 'react'
import { products } from '../data'
import { Details } from './details'

const product = products.filter(item => item.type === "Unisex")[0]

export const Specefics = () => {
    return (
        <div className='w-2/5 flex flex-col gap-y-10'>
            <Heading />
            <Intro />
            <Colors />
            <Sizes />
            <Details />
        </div>
    )
}

const Sizes = () => {
    return (
        <div>
            <Size />
            <p>Size Guide</p>
        </div>
    )
}

const Size = () => {
    const allSizes = () => product.sizes.map(v => <span key={v}>{v}</span>)
    return (
        <div>
            <p>Size</p>
            <div className='flex gap-x-6'>
                {allSizes()}
            </div>
        </div>
    )
}

const Colors = () => {
    return (
        <fieldset>
            <label htmlFor="colors">Color</label>
            <div>
                <input type="radio" name="color" id="colors" />
                <input type="radio" name="color" id="colors" />
            </div>
        </fieldset>
    )
}

const Intro = () => {

    return (
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, quod. Magnam ipsum rerum enim dolor</p>
    )
}

const Heading = () => {

    return (
        <div>
            <h2>{product.name}</h2>
            {product.price}
        </div>
    )
}
