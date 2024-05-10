import React from 'react'

export const SelectReuseable = (
    { data, name, updateOrAddFilter }
        :
        { data: string[], name: string, updateOrAddFilter: (d: string, n: string) => void }
) => {
    const showAll = () => data.map(v => <OptionMarkup key={v} val={v} />)

    return (
        <div className='flex gap-4'>
            <p>{name}</p>
            <select name={name} id={name} onChange={e => updateOrAddFilter(e.target.value, name)}>
                {showAll()}
            </select>
        </div>
    )
}

const OptionMarkup = (
    { val }
        :
        { val: string }) => {

    const handleAdd = () => {
        console.log("clicking!!")
        // updateOrAddFilter(val)
    }

    return (
        <option onClick={handleAdd}>{val}</option>
    )
}
