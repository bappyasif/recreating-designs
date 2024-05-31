import React from 'react'
import { products } from '../data'

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

const ProdCard = ({...data}: typeof products[0]) => {
    const {images, name, price} = data;

    return (
        <div>
            <img src={images[0]} alt={name} className='w-96 h-96 aspect-auto' />
            <div>
                <p>{name}</p>
                <p>{price}</p>
            </div>
        </div>
    )
}
