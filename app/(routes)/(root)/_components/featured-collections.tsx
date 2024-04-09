"use client"

import { featuredGallery } from '@/data'
import { useForTruthToggle } from '@/hooks'
import Image from 'next/image'
import React from 'react'

export const FeaturedCollections = () => {
    const showAll = () => featuredGallery.map(item => <ShowFeatureCard key={item.src} {...item} />)

    return (
        <div className='px-11 relative flex flex-col gap-y-10 justify-center items-center py-28'>
            <h2 className='text-6xl self-start'>FeaturedCollections</h2>
            <ul className='flex gap-x-6'>{showAll()}</ul>
            <SliderArrows />
        </div>
    )
}

const ShowFeatureCard = ({text, src}: {text: string, src: string}) => {
    const {handleFalsy, handleTruthy, isTrue} = useForTruthToggle()

    return (
        <li className='relative flex justify-center items-center h-[40rem] w-[33rem] z-10 overflow-clip' onMouseEnter={handleTruthy} onMouseLeave={handleFalsy}>
            
            <ImageWithShadowView src={src} isTrue={isTrue} />

            <div className='absolute text-4xl flex flex-col justify-center space-y-4'>
                <p className={`transition-all duration-500 ${isTrue ? "-translate-y-4" : "translate-y-4"} font-medium`}>{text}</p>

                <button className={`transition-all duration-500 p-2 w-fit mx-auto bg-slate-200 text-black ${isTrue ? "opacity-100" : "opacity-0 translate-y-4"}`}>View</button>
            </div>
        </li>
    )
}

const ImageWithShadowView = ({src, isTrue}: {src: string, isTrue: boolean}) => {
    return (
        <div className={`relative w-full h-full -z-0 transition-all duration-500 ${isTrue ? "scale-105" : "scale-100"}`}>
            
            <Image src={src} alt='' width={1100} height={800} 
            className={`z-0 w-full h-full ${isTrue ? "shadow-onHover" : ""}`} 
            />

            <div className={`absolute top-0 border w-full h-full transition-all duration-500 bg-slate-950 ${isTrue ? "opacity-10" : "opacity-0"}`}>
                <div className='w-full h-8 left-0 top-0 absolute shadow-inner bg-slate-100/5'></div>
                <div className='w-8 h-full right-0 top-0 absolute shadow-inner bg-slate-100/5'></div>
                <div className='w-full h-8 right-0 bottom-0 absolute shadow-inner bg-slate-100/5'></div>
                <div className='w-8 h-full left-0 bottom-0 absolute shadow-inner bg-slate-100/5'></div>
            </div>

            {/* <div className={`absolute top-0 border w-full h-full transition-all duration-500 ${isTrue ? "opacity-100" : "opacity-0"}`}>
                <div className='w-full h-8 left-0 top-0 bg-slate-100/10 absolute shadow-inner'></div>
                <div className='w-8 h-full right-0 top-0 bg-slate-100/10 absolute shadow-inner'></div>
                <div className='w-full h-8 right-0 bottom-0 bg-slate-100/10 absolute shadow-inner'></div>
                <div className='w-8 h-full left-0 bottom-0 bg-slate-100/10 absolute shadow-inner'></div>
            </div> */}
        </div>
    )
}

const SliderArrows = () => {
    return (
        <div className='absolute flex justify-between items-center z-20 self-center w-full text-4xl'>
            <span className='p-1 bg-slate-400 rounded-full px-3 pb-2 absolute left-20 top-11 opacity-60'>&lt;</span>
            <span className='p-1 bg-slate-400 rounded-full px-3 pb-2 absolute right-20 top-11 opacity-60'>&gt;</span>
        </div>
    )
}

// const ImageWithShadowView = ({src, isTrue}: {src: string, isTrue: boolean}) => {
//     console.log(isTrue)
//     return (
//         <div className={`relative w-full h-full -z-0 transition-all duration-500 ${isTrue ? "scale-105" : "scale-100"}`}>
//             <Image src={src} alt='' width={1100} height={800} 
//             className={`z-0 w-full h-full object-cover ${isTrue ? "shadow-onHover" : ""}`} 
//             // className={`z-0 w-full h-full object-cover transition-all duration-500 ${isTrue ? "scale-105 -z-10" : "scale-100"}`} 
//             />
//             <div className={`absolute top-0 border w-full h-full transition-all duration-500 ${isTrue ? "opacity-100" : "opacity-0"}`}>
//                 <div className='w-full h-8 left-0 top-0 bg-slate-100/10 absolute shadow-inner'></div>
//                 <div className='w-8 h-full right-0 top-0 bg-slate-100/10 absolute shadow-inner'></div>
//                 <div className='w-full h-8 right-0 bottom-0 bg-slate-100/10 absolute shadow-inner'></div>
//                 <div className='w-8 h-full left-0 bottom-0 bg-slate-100/10 absolute shadow-inner'></div>
//             </div>
//             {/* <div className={`absolute top-0 border w-full h-full transition-all duration-500 ${isTrue ? "opacity-100" : "opacity-0"}`}>
//                 <div className='w-full h-8 left-0 bg-slate-100/10 top-0 absolute shadow-inner'></div>
//                 <div className='w-8 h-full right-0 bg-slate-100/10 top-[1.91rem] absolute shadow-inner'></div>
//                 <div className='w-full h-8 right-0 bg-slate-100/10 bottom-0 absolute shadow-inner'></div>
//                 <div className='w-8 h-full left-0 bg-slate-100/10 bottom-[1.91rem] absolute shadow-inner'></div>
//             </div> */}
//             {/* <div className={`absolute top-0 border w-full h-full transition-all duration-500 ${isTrue ? "opacity-100" : "opacity-0"}`}>
//                 <div className='w-full h-8 bg-slate-100/10 left-0 top-0 absolute shadow-2xl'></div>
//                 <div className='w-8 h-full bg-slate-100/20 right-0 top-0 absolute shadow-2xl'></div>
//                 <div className='w-full h-8 bg-slate-100/30 right-0 bottom-0 absolute shadow-2xl'></div>
//                 <div className='w-8 h-full bg-slate-100/40 left-0 bottom-0 absolute shadow-2xl'></div>
//             </div> */}
//             {/* <div className={`w-full h-full absolute z-10 top-0 border-[20px] ${isTrue ? "opacity-100 border-slate-100 visible" : "opacity-0 invisible"}`}></div> */}
//             {/* <div className={`w-full h-full absolute z-10 top-0 ${isTrue ? "shadow-2xl" : ""}`}></div> */}
//             {/* <div className='w-full h-full outline-dashed outline-8 outline-blue-600 absolute z-10 top-0'></div> */}
//         </div>
//     )
// }


// const ShowFeatureCard = ({text, src}: {text: string, src: string}) => {
//     const {handleFalsy, handleTruthy, isTrue} = useForTruthToggle()

//     return (
//         <li className='relative flex justify-center items-center h-[40rem] w-[33rem]' onMouseEnter={handleTruthy} onMouseLeave={handleFalsy}>
//             <Image src={src} alt='' width={800} height={800} className='w-full h-full' />
//             <div className='absolute text-4xl flex flex-col justify-center space-y-4'>
//                 {/* <p className={`transition-all duration-200 ${isTrue ? "-translate-y-4" : "translate-y-0"}`}>{text}</p> */}

//                 <p className={`transition-all duration-500 ${isTrue ? "-translate-y-4" : "translate-y-4"}`}>{text}</p>

//                 <button className={`transition-all duration-500 p-2 w-fit mx-auto bg-red-400 ${isTrue ? "opacity-100" : "opacity-0 translate-y-4"}`}>View</button>
                
//                 {/* <button className={`transition-all duration-200 p-2 w-fit mx-auto bg-red-400 ${isTrue ? "visible" : "invisible text-xs translate-y-4"}`}>View</button> */}
                
//                 {/* <button className={`transition-all duration-200 p-2 w-fit mx-auto ${isTrue ? "inline-block bg-red-400" : "invisible p-0 w-0 h-0 mx-auto text-xs"}`}>View</button> */}
//             </div>
//         </li>
//     )
// }