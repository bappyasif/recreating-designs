import React from 'react'
import {FiArrowRight} from "react-icons/fi"

export const HeroContent = () => {
  return (
    <div className='flex w-4/6 gap-4 items-center my-4 justify-center'>
        <RenderImage />
        <RenderSpecialOffer />
    </div>
  )
}
const RenderImage = () => {
    return (
        <img src="./src/assets/hero.jpg" alt="hero image" width={"47%"} />
    )
}

const RenderSpecialOffer = () => {
    return (
        <div className='flex flex-col gap-4'>
            <RenderContentText line1={"It's That"} line2={"Simple"} textSize={"text-6xl"} />
            <RenderContentText line1={"Featuring Our New"} line2={"Spring Specials"} textSize={"text-xl"} />
            <HeroContentButton />
        </div>
    )
}

const HeroContentButton = () => {
    return (
        <button className='flex gap-2 bg-slate-400 items-center w-fit p-0 pl-2'>
            <span>Details</span>
            <span className='bg-yellow-500 p-2 rounded-sm text-xl'><FiArrowRight /></span>
        </button>
    )
}

const RenderContentText = ({line1, line2, textSize}) => {
    return (
        <div className={`flex flex-col ${textSize ? textSize : "text-lg"}`}>
            <span>{line1}</span>
            <span>{line2}</span>
        </div>
    )
}
