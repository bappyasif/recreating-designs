import React from 'react'

export const Sections = () => {
    
  return (
    <div>
        <ShowAll />
    </div>
  )
}

const ShowAll = () => {
    const all = ["Basket", "Information", "Shipping", "Payment"]
    const showing = () => all.map((v, i) => {
        return (
            <div className='flex gap-x-2 text-[#474747]'>
                <p>{v}</p>
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