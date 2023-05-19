import React, { useState } from 'react'
import { regualrs } from '../data/forRendering'
import { FiShoppingCart } from 'react-icons/fi'

export const ProductsListings = () => {
    return (
        <div className='my-4 w-4/6 font-righteous'>
            <h2 className='text-4xl my-2'>Genuine Japanese Ramen:</h2>
            <RenderRegularProducts />
        </div>
    )
}

const RenderRegularProducts = () => {
    const renderProducts = () => regualrs.map(item => <RenderRegular key={item.name} item={item} />)

    return (
        <div className='flex flex-col gap-4 w-full'>
            {renderProducts()}
        </div>
    )
}

const RenderRegular = ({ item }) => {
    const [clicked, setClicked] = useState(false);
    const { name, ingredients } = item
    const renderIngredients = () => ingredients.map(name => <span className='text-sm' key={name}>{name}</span>)
    return (
        <div 
            className={`flex gap-4 items-center justify-between px-2 py-1 ${clicked ? "bg-white" : ""}`}
            onClick={() => setClicked(prev => !prev)}
        >
            <h2 className='text-xl w-2/6'>{name}</h2>
            <RenderIcons name={name} />
            <div className='flex gap-2 flex-wrap w-2/6'>
                {renderIngredients()}
            </div>
            <span className={`text-4xl bg-yellow-600 p-2 px-4 rounded-md ${clicked ? "visible" : "invisible"}`}><FiShoppingCart /></span>
        </div>
    )
}

const RenderIcons = ({ name }) => {
    const checkName = (chk) => name?.includes(chk)
    return (
        <div className='flex gap-2 mx-4'>
            {
                checkName("Black")
                    ?
                    <>
                        <img src="./src/assets/chilli.png" alt="chilli" width={15} />
                        <img src="./src/assets/brocolli.png" alt="brocolli" width={15} />
                    </>
                    : checkName("Spicy")
                        ?
                        <>
                            <img src="./src/assets/chilli.png" alt="chilli" width={15} />
                            <img className='invisible' src="./src/assets/meat.png" alt="meat" width={15} />
                        </>
                        :
                        <>
                            <img src="./src/assets/brocolli.png" alt="brocolli" width={15} />
                            <img src="./src/assets/meat.png" alt="meat" width={15} />
                        </>
            }
        </div>
    )
}