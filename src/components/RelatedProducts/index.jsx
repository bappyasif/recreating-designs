import React from 'react'

export const RelatedProducts = () => {
    const prods = () => [1, 2, 3, 4].map(v => <img className='w-60 h-72 rounded-xl' key={v} alt={v} src={`https://source.unsplash.com/random/?essential&oils&bottle&${v}`} />)

    return (
        <div className='flex flex-col gap-6'>
            <h2 className='text-6xl'>Related Products</h2>
            <div className='flex gap-4 xxs:justify-center md:justify-between flex-wrap opacity-70'>
                {prods()}
            </div>
        </div>
    )
}
