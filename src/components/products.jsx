import React from 'react'
import { regualrs } from '../data/forRendering'

export const ProductsListings = () => {
    return (
        <div>
            <h2>Genuine Japanese Ramen:</h2>
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
        <div>
            <h2>{name}</h2>
            <div>
                {renderIngredients()}
            </div>
        </div>
    )
}