import React from 'react'
import { regualrs } from '../data/forRendering'
import { FiShoppingCart } from 'react-icons/fi'

export const ProductsListings = () => {
    return (
        <div>
            <h2 className='text-4xl my-2'>Genuine Japanese Ramen:</h2>
            <RenderRegularProducts />
        </div>
    )
}

const RenderRegularProducts = () => {
    const renderProducts = () => regualrs.map(item => <RenderRegular key={item.name} item={item} />)

    return (
        <div>
            {renderProducts()}
        </div>
    )
}

const RenderRegular = ({ item }) => {
    const { name, ingredients } = item
    const renderIngredients = () => ingredients.map(name => <span key={name}>{name}</span>)
    return (
        <div className='flex gap-4 items-start'>
            <h2>{name}</h2>
            <RenderIcons name={name} />
            <div className='flex gap-2 flex-wrap w-2/4'>
                {renderIngredients()}
            </div>
            <FiShoppingCart />
        </div>
    )
}

const RenderIcons = ({ name }) => {
    const checkName = (chk) => name?.includes(chk)
    return (
        checkName("Black")
            ?
            <div className='flex gap-1'>
                <img src="./src/assets/chilli.png" alt="chilli" width={20} />
                <img src="./src/assets/brocolli.png" alt="brocolli" width={20} />
            </div>
            :
            checkName("Spicy")
                ?
                <div className='flex gap-1'>
                    <img src="./src/assets/chilli.png" alt="chilli" width={20} />
                </div>
                :
                <div className='flex gap-1'>
                    <img src="./src/assets/brocolli.png" alt="brocolli" width={20} />
                    <img src="./src/assets/meat.png" alt="meat" width={20} />
                </div>
    )
}