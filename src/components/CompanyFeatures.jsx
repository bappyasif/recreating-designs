import React from 'react'
import { NewsMenu } from './FeaturedNews'
import { BiAlignJustify, BiCheckCircle, BiDotsHorizontal } from 'react-icons/bi'
import { GiPlanetCore, GiRoundStar, GiStarGate, GiStoneSphere } from 'react-icons/gi'
import { CgProfile } from 'react-icons/cg'
import { BsGraphUpArrow } from "react-icons/bs"

export const CompanyFeatures = () => {
    return (
        <div className='flex flex-col gap-6'>
            <NewsMenu />
            <FeaturedImage />
            <FeaturedAnimations />
        </div>
    )
}

const FeaturedAnimations = () => {
    return (
        <div className='flex justify-between px-6'>
            <GraphAnim />
            <ProfileAnim />
            <OrbitalDouble />
            <TilesMovements />
        </div>
    )
}

const GraphAnim = () => {
    return (
        <div
            className='flex gap-4 items-center'
        >
            <div
                className='flex flex-col items-center justify-center'
            >
                <div className='bg-red-600 h-5 w-6 rounded-full'>
                    <div className='bg-red-600 h-6 w-6 rounded-full animate-ping'>
                    </div>
                </div>
                <div className='w-3 h-4 bg-red-600 rounded-sm animate-bounce'></div>
            </div>

            <span className='text-6xl animate-pulse relative'>
                <BsGraphUpArrow className='animate-none absolute' />
                <BsGraphUpArrow className='animate-ping' />
            </span>
        </div>
    )
}

const ProfileAnim = () => {
    return (
        <div className='relative px-4 py-1 bg-slate-400 rounded-lg'>
            <span>
                <span className='absolute text-blue-400 -top-4 -right-4 text-4xl bg-slate-400 rounded-full'><BiCheckCircle /></span>
                <span className='absolute text-blue-400 -top-4 -right-4 text-4xl bg-slate-400 rounded-full animate-ping'><BiCheckCircle /></span>
            </span>
            <div className='py-2 flex flex-col items-center justify-center'>
                <span className='text-4xl'><CgProfile /></span>
                <span className='text-6xl'><BiAlignJustify /></span>
            </div>
        </div>
    )
}

const TilesMovements = () => {
    return (
        <div className='relative'>

            <div
                className='w-full h-6 
                outline outline-2 outline-red-200 rounded-full shadow-xl z-10'
                style={{
                    transform: "rotateY(0deg) rotateX(64deg) rotateZ(359deg)"
                }}
            >
                <div 
                    className="flex gap-4 h-56"
                >
                    <TileEen />
                    <TileEen />

                    {/* <img className='w-1/12' src={leftTile} alt="tiles een" />
                <img className='w-1/12' src={rightTile} alt="tiles een" /> */}
                </div>
            </div>
        </div>
    )
}

// const TilesMovements = () => {
//     return (
//         <div className='relative'>
//             <div className="flex gap-4">
//                 <TileEen />
//                 <TileEen />

//                 {/* <img className='w-1/12' src={leftTile} alt="tiles een" />
//                 <img className='w-1/12' src={rightTile} alt="tiles een" /> */}
//             </div>
//             <div
//                 className='absolute top-1/4 w-full h-6 
//                 outline outline-2 outline-red-200 rounded-full shadow-xl z-10'
//                 style={{
//                     transform: "rotateY(0deg) rotateX(64deg) rotateZ(359deg)"
//                 }}
//             >

//             </div>
//         </div>
//     )
// }

const TileEen = () => {
    return (
        <div
            className='w-20 flex flex-col justify-center items-center '
        >
            <div
                className='w-12 h-full py-2 
                outline outline-2 outline-red-800 rounded-lg 
                flex flex-col justify-around items-center gap-4 animate-bounce'
            >
                <div className='bg-red-600 h-5 w-6 animate-pulse'></div>
                <div className='h-4 w-0.5 bg-red-400 animate-bounce'></div>
                <div className='bg-red-600 h-5 w-6 rounded-full'>
                    <div className='bg-red-600 h-6 w-6 rounded-full animate-ping'>
                    </div>
                </div>
            </div>
        </div>
    )
}

const OrbitalDouble = () => {
    return (
        <div className='relative'>
            <div
                className='flex items-center justify-center w-28 h-28 rounded-full 
                outline outline-1 outline-red-800'
                style={{ animation: "9s linear infinite orbit" }}
            >
                <div
                    className='relative w-16 h-16 rounded-full outline outline-1 outline-red-800'
                    style={{ animation: "4s linear infinite orbit" }}
                >
                    <GiStoneSphere
                        className="absolute bottom-0 animate-spin w-4 h-4 text-slate-800 rounded-full"
                    />
                </div>
                <GiPlanetCore
                    className="absolute top-0 animate-pulse w-4 h-4 text-slate-800 rounded-full"
                />

                <GiRoundStar
                    className="absolute right-0 top-16 animate-spin w-4 h-4 text-slate-800 rounded-full"
                />

                <GiStarGate
                    className="absolute left-0 top-16 animate-bounce w-4 h-4 text-slate-800 rounded-full"
                />
            </div>
        </div>
    )
}

const FeaturedImage = () => {
    return (
        <div className='relative'>
            <img
                className='w-full'
                src="https://source.unsplash.com/random/?abstract&lines&sketch"
                alt="random picture from unsplash"
                style={{ maxHeight: "380px" }}
            />
            <h2 className='absolute top-40 right-1/3 text-6xl'>Orbitals News</h2>
            <span className='text-4xl absolute bottom-0 right-0'><BiDotsHorizontal /></span>
        </div>
    )
}
