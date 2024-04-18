import React from 'react'

export const ProductSlider = ({ headerText }: { headerText: string }) => {

    return (
        <div className='flex flex-col gap-y-6'>
            <div className='flex justify-between px-4 gap-x-4'>
                <h2>{headerText}</h2>
                <button>View all</button>
            </div>
            <SliderScroller />
        </div>
    )
}

const SliderScroller = () => {
    const allProds = () => [1, 2, 3, 4, 5, 6].map(v => <div key={v} className='bg-slate-400 min-h-[27rem] min-w-96 rounded-sm'>{v}</div>)

    return (
        <div className='w-full flex flex-col gap-y-6'>
            <div className='flex gap-4 flex-nowrap overflow-x-scroll w-full'>
                {allProds()}
            </div>
            <div className='w-full text-center'>slider!!</div>
        </div>
    )
}