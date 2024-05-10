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
        filters.filter(v => v !== "All").length
        ?
        <div className='flex gap-4 items-center w-full justify-start'>
            <ul className='flex gap-4 justify-center'>{showFilters()}</ul>
            <button onClick={clearAll} className='underline'>Clear all</button>
        </div>
        : null
    )

    return (
        filtersMarkup
    )

}

const FilterView = ({ val, removeFilter }: { val: string, removeFilter: (v: string) => void }) => {
    const handleRemove = () => removeFilter(val)

    return (
        val !== "All"
        ?
        <li className='flex gap-4 items-center bg-slate-900 rounded-full p-1.5 px-3.5'>
            <span>{val}</span>
            <button onClick={handleRemove}>x</button>
        </li>
        : null
    )
}

export const SelectItems = ({updateOrAddFilter, trackedFilters}: {updateOrAddFilter: (d: string, n: string) => void, trackedFilters: any}) => {
    return (
        <div className='flex gap-4 justify-center w-full'>
            <SelectReuseable data={availability} name='Availability' updateOrAddFilter={updateOrAddFilter} trackedFilters={trackedFilters} />
            <SelectReuseable data={gender} name='Gender' updateOrAddFilter={updateOrAddFilter} trackedFilters={trackedFilters} />
            <SelectReuseable data={size} name='Size' updateOrAddFilter={updateOrAddFilter} trackedFilters={trackedFilters} />
        </div>
    )
}