import React, { useState } from 'react'
import { SelectReuseable } from './SelectReuseable'
import { availability, gender, size } from '../data'

export const Heading = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <p className='text-4xl py-6'>Accessories</p>
            <p className='h-1.5 w-9 bg-red-600'></p>
        </div>
    )
}

export const Filters = ({ filters, clearAll, removeFilter }: { filters: string[], clearAll: () => void, removeFilter: (d: string) => void }) => {

    const showFilters = () => filters.map(val => <FilterView key={val} removeFilter={removeFilter} val={val} />)

    const filtersMarkup = (
        <div className='flex gap-4 items-center w-full justify-center'>
            <ul className='flex gap-4 justify-center'>{showFilters()}</ul>
            <button onClick={clearAll}>Clear all</button>
        </div>
    )

    return (
        filtersMarkup
        // <div>
        //     {filtersMarkup}
        // </div>
    )

}

const FilterView = ({ val, removeFilter }: { val: string, removeFilter: (v: string) => void }) => {
    const handleRemove = () => removeFilter(val)

    return (
        <li className='flex gap-4 items-center'>
            <span>{val}</span>
            <button onClick={handleRemove}>x</button>
        </li>
    )
}

export const SelectItems = ({updateOrAddFilter}: {updateOrAddFilter: (d: string, n: string) => void}) => {
    return (
        <div className='flex gap-4 justify-center w-full'>
            <SelectReuseable data={availability} name='Availability' updateOrAddFilter={updateOrAddFilter} />
            <SelectReuseable data={gender} name='Gender' updateOrAddFilter={updateOrAddFilter} />
            <SelectReuseable data={size} name='Size' updateOrAddFilter={updateOrAddFilter} />
        </div>
    )
}