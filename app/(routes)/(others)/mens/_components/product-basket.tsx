import Link from 'next/link'
import React from 'react'

export const ProductBasket = () => {
    return (
        <div className='flex justify-between gap-x-4 px-4'>
            <LeftSide />
            <RightSide />
        </div>
    )
}

const RightSide = () => {
    return (
        <div>
            <div>
                <p>Men's Mr T Organic T-shirt</p>
                <div>
                    <span>$25.00</span>
                    <span>$15.00</span>
                </div>
            </div>

            <Sizes />

            <AddToBasket />

            <Link href={"#"}>view product details</Link>

        </div>
    )
}

const AddToBasket = () => {
    return (
        <div className='flex gap-x-4'>
            <div className='flex gap-x-2'>
                <button>-</button>
                <span>{1234}</span>
                <button>+</button>
            </div>
            <button>Add to basket</button>
        </div>
    )
}

const Sizes = () => {
    const allSizes = () => ["S", "M", "L", "XL", "XXL"].map(v => <div key={v} className='h-20 w-16'>{v}</div>)

    return (
        <div className='flex gap-x-4'>
            {allSizes()}
        </div>
    )
}

const LeftSide = () => {
    return (
        <div className='flex gap-x-4'>
            <div className='min-h-[27rem] bg-slate-400 min-w-96'></div>
            <div className='min-h-[27rem] bg-slate-400 min-w-96'></div>
        </div>
    )
}
