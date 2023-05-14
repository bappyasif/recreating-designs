import React from 'react'

export const HeroContent = () => {
  return (
    <div>
        <RenderImage />
        <RenderSpecialOffer />
    </div>
  )
}
const RenderImage = () => {
    return (
        <img src="" alt="hero image" />
    )
}

const RenderSpecialOffer = () => {
    return (
        <div>
            <RenderContentText line1={"Its That"} line2={"Simple"} textSize={"2xl"} />
            <RenderContentText line1={"Featuring Our New"} line2={"Spring Specials"} textSize={"xl"} />
            <HeroContentButton />
        </div>
    )
}

const HeroContentButton = () => {
    return (
        <button className='flex gap-2 bg-slate-400 p-2'>
            <span>Details</span>
            <span>&gte;</span>
        </button>
    )
}

const RenderContentText = ({line1, line2, textSize}) => {
    return (
        <div className={`flex flex-col ${textSize === "2xl" ? "text-2xl" : "text-xl"}`}>
            <span>{line1}</span>
            <span>{line2}</span>
        </div>
    )
}
