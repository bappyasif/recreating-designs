import Link from 'next/link'
import React from 'react'

export const Sections = ({ updateSection, viewing }: { updateSection: (n: string) => void, viewing: string }) => {

    return (
        <div className='self-end text-center w-3/4 flex justify-center'>
            <ShowAll updateSection={updateSection} viewing={viewing} />
        </div>
    )
}

const ShowAll = ({ updateSection, viewing }: { updateSection: (n: string) => void, viewing: string }) => {
    const all = ["Basket", "Information", "Shipping", "Payment"]
    const showing = () => all.map((v, i) => {
        return (
            <div className='flex gap-x-2 text-[#474747]'>
                {i === 0 ? <Link href={"/cart"} className='text-blue-400'>{v}</Link> : <button className={`${viewing === v ? "text-slate-600" : "text-slate-400"}`} onClick={() => updateSection(v)}>{v}</button>}
                {/* <button onClick={() => updateSection(v)}>{v}</button> */}
                {
                    i < 3
                        ? ">"
                        : null
                }
            </div>
        )
    })

    return (
        <div className='flex gap-x-4'>
            {showing()}
        </div>
    )
}