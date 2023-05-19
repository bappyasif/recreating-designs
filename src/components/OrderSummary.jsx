import React from 'react'

export const OrderSummary = () => {
  return (
    <div>
        <div>OrderSummary</div>
        <TableHeaders />
        <PassengerAmount />
        <FoodAmount />
    </div>
  )
}

const FoodAmount = () => {
    return (
        <div className='flex gap-2'>
            <div>
                <p>Lucnch for all day - Adults (2)</p>
                <p>unit price $250</p>
            </div>
            <p>$500</p>
            <p>$500</p>
        </div>
    )
}

const PassengerAmount = () => {
    return (
        <div className='flex gap-2'>
            <div>
                <p>Adults (2)</p>
                <p>unit price $2450</p>
            </div>
            <p>$4900</p>
            <p>$4900</p>
        </div>
    )
}

const TableHeaders = () => {
    return (
        <div className='flex gap-2'>
            <p>item</p>
            <p>tax</p>   
            <p>amount</p>
        </div>
    )
}