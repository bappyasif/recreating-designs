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

    const showAll = () => data.map(v => <li key={v} className='' onClick={() => handleClick(v)}>{v}</li>)

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
        <div className='flex gap-4 border-2 relative w-56 z-10' onClick={openUp} ref={ref}>
            <p className=''>{name}</p>
            {/* <p>{selectedOpt ? trackedFilters[name] : null}</p> */}
            {/* <p>{trackedFilters[name] !== "All" ? trackedFilters[name] : null}</p> */}
            <p>{trackedFilters[name] ? trackedFilters[name] : null}</p>
            {
                isTrue
                    ? (
                        <ul className='flex gap-4 flex-col absolute top-7 bg-slate-900 w-full'>
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