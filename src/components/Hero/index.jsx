import React from 'react'
import { heroItems } from '../../data'

// export const HeroComponent = () => {
//     const { links, search } = heroItems
//     return (
//         <div 
//             // className='flex flex-col gap-4 justify-center items-center'
//         >
//             {/* <h2 className='text-7xl'>Let us take you away</h2> */}
//             <div className='grid grid-cols-4 content-center place-items-center gap-x-4 opacity-90'>
//                 <RenderSearch items={search} />
//                 <RenderLinks items={links} />
//             </div>
//         </div>
//     )
// }

export const HeroComponent = () => {
    const { links, search } = heroItems
    return (
        <div className='grid xxs:grid-cols-1 lg:grid-cols-5 content-center place-items-center gap-x-4 opacity-90 w-full'>
            <RenderSearch items={search} />
            <RenderLinks items={links} />
        </div>
    )
}

const RenderLinks = ({ items }) => {
    const renderItems = () => items.map(item => <a className='bg-slate-900 text-blue-400 opacity-80 px-4' href={`#${item}`}><span>{item}</span></a>)

    return (
        <div className='absolute top-16 right-36
        xxs:hidden lg:flex flex-col gap-4 text-xl text-right'
        >
            {renderItems()}
        </div>
        // <div className='absolute mt-20 col-span-1 w-full self-start flex flex-col gap-4 text-xl items-end'>{renderItems()}</div>
        // <div className='self-end flex flex-col gap-4 text-xl'>{renderItems()}</div>
    )
}

export const RenderSearch = ({ items }) => {
    const renderItems = () => items.map(item => <RenderInput key={item} item={item} />)

    return (
        <div className='col-span-3 xxs:col-start-1 lg:col-start-2'>
            <h2 className='xxs:text-4xl md:text-7xl flex justify-center text-slate-800 font-bold'>Let us take you away</h2>
            <div className='mt-28 px-8 py-8 bg-slate-700 rounded-lg flex flex-col gap-0'>
                <h2 className='text-4xl rounded rounded-t-xl bg-slate-800 px-8 py-4 w-fit mx-auto'>Search For Your Trip</h2>
                <div className='flex flex-col gap-1'>
                    <div className='grid xxs:grid-cols-1 lg:grid-cols-5 xxs:gap-y-4 lg:gap-x-4 text-2xl bg-slate-800 rounded-lg px-8 py-6'>
                        {renderItems()}
                        <button className='w-full xxs:py-2 lg:p-0 text-3xl text-center'>Search</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const RenderInput = ({ item }) => {
    return (
        <label htmlFor={item}>
            <input className='w-full h-14 rounded-lg px-2 text-xl' id={item} type="text" placeholder={item} />
        </label>
    )
}