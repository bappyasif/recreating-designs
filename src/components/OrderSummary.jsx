import React from 'react'

export const OrderSummary = () => {
    return (
        <div className='mt-2 w-full flex flex-col p-2 bg-slate-600 outline outline-1 outline-slate-400 shadow-xl'>
            <p className='text-2xl py-2'>Order Summary</p>
            <TableHeaders />
            <div className='flex flex-col gap-2 mb-4 px-4'>
                <PassengerAmount />
                <FoodAmount />
            </div>
        </div>
    )
}

const FoodAmount = () => {
    return (
        <div className='flex gap-2 outline outline-gray-400 py-2 my-1 px-2'>
            <div className='flex-grow'>
                <p>Lucnch for all day - Adults (2)</p>
                <p>unit price $250</p>
            </div>
            <p className='w-1/6'>$500</p>
            <p className='w-1/6'>$500</p>
        </div>
    )
}

const PassengerAmount = () => {
    return (
        <div className='flex gap-2 outline outline-gray-400 py-2 my-1 px-2'>
            <div className='flex-grow'>
                <p>Adults (2)</p>
                <p>unit price $2450</p>
            </div>
            <p className='w-1/6'>$4900</p>
            <p className='w-1/6'>$4900</p>
        </div>
    )
}

const TableHeaders = () => {
    return (
        <div className='flex gap-2 text-2xl px-4'>
            <p className='flex-grow'>item</p>
            <p className='w-1/6'>tax</p>
            <p className='w-1/6'>amount</p>
        </div>
    )
}