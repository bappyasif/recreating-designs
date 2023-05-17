import React from 'react'
import {FiArrowRight} from "react-icons/fi"

export const HeroContent = () => {
  return (
    <div className='flex gap-2'>
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
        <div>
            <RenderContentText line1={"Its That"} line2={"Simple"} textSize={"text-6xl"} />
            <RenderContentText line1={"Featuring Our New"} line2={"Spring Specials"} textSize={"text-xl"} />
            <HeroContentButton />
        </div>
    )
}

const HeroContentButton = () => {
    return (
        <button className='flex gap-2 bg-slate-400 p-2 items-center'>
            <span>Details</span>
            <span><FiArrowRight /></span>
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
