import { useClickOutside, useForTruthToggle } from '@/hooks'
import React, { useRef, useState } from 'react'

export const SelectReuseable = (
    { data, name, updateOrAddFilter, trackedFilters }
        :
        { data: string[], name: string, updateOrAddFilter: (d: string, n: string) => void, trackedFilters: any }
) => {

    // const [selectedOpt, setSlectedOpt] = useState(false)

    const { handleFalsy, handleTruthy, isTrue } = useForTruthToggle()

    const ref = useRef<HTMLDivElement | null>(null)

    const handleClick = (v: string) => {
        updateOrAddFilter(v, name)
        // setSlectedOpt(v)
        // setSlectedOpt(true)
    }

    const showAll = () => data.map(v => <li key={v} className='text-xl hover:text-[#f1f1f1]' onClick={() => handleClick(v)}>{v}</li>)

    const openUp = () => {
        // console.log(isTrue, "isTrue!!",)
        if (isTrue) {
            handleFalsy()
        } else {
            handleTruthy()
        }
    }

    useClickOutside(ref, handleFalsy)

    return (
        <div className='flex gap-4 border-2 relative w-56 z-10 text-xl py-2 px-1.5 rounded-md' onClick={openUp} ref={ref}>
            <p className='font-bold'>{name}</p>
            {/* <p>{selectedOpt ? trackedFilters[name] : null}</p> */}
            {/* <p>{trackedFilters[name] !== "All" ? trackedFilters[name] : null}</p> */}
            <p className='font-light'>{trackedFilters[name] ? trackedFilters[name] : null}</p>
            {
                isTrue
                    ? (
                        <ul className='flex gap-4 flex-col absolute top-12 left-0 w-full bg-[#f6f6f6] p-2 shadow-lg rounded-md'>
                            {showAll()}
                        </ul>
                    ) : null
            }
        </div>
    )
}


// export const SelectReuseable = (
//     { data, name, updateOrAddFilter }
//         :
//         { data: string[], name: string, updateOrAddFilter: (d: string, n: string) => void }
// ) => {
//     const showAll = () => data.map(v => <option key={v} className=''>{v}</option>)

//     return (
//         <div className='flex gap-4 border-2'>
//             <p className=''>{name}</p>
//             <select name={name} id={name} onChange={e => updateOrAddFilter(e.target.value, name)} className='w-44 bg-transparent'>
//                 {showAll()}
//             </select>
//         </div>
//     )
// }