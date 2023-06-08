import React from 'react'

export const RelatedProducts = () => {
    const prods = () => [1, 2, 3, 4].map(v => <img className='w-1/4 h-1/4' key={v} alt={v} src='https://source.unsplash.com/random/?Cryptocurrency&1' />)

    return (
        <div className='flex flex-col gap-6'>
            <h2 className='text-4xl'>Related Products</h2>
            <div className='flex gap-4 justify-between'>
                {prods()}
            </div>
        </div>
    )
}
