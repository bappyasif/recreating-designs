"use client"

import { galleryRow, heroSlidesImages } from '@/data'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import RadialProgressBar from './radial-progress-bar'
import { useForTruthToggle } from '@/hooks'

export const HeroContent = () => {
  const [viewing, setViewing] = useState(0)

  const [timer, setTimer] = useState<any>(null)

  const nextSlide = () => {
    if (viewing === 0) {
      setViewing(1)
    } else if (viewing === 1) {
      setViewing(2)
    } else {
      setViewing(0)
    }
  }

  const updateSlide = (idx: number) => setViewing(idx)

  // const tick = () => {
  //   const timer = setTimeout(() => {
  //     nextSlide()
  //   }, 11000)

  //   return () => clearTimeout(timer)
  // }

  const tick = () => {
    setTimer(setTimeout(() => {
      nextSlide()
    }, 11000))

    return () => clearTimeout(timer)
  }

  useEffect(() => {
    clearTimeout(timer)
    tick()
  }, [viewing])

  const allSlides = () => heroSlidesImages.map(item => <SlideView imgSrc={item.src} idx={item.idx} heading={item.heading} text={item.text} key={item.idx} viewing={viewing} nextSlide={nextSlide} updateSlide={updateSlide} />)

  return (
    <div className='z-0'>
      <ul className='w-full h-full relative z-10'>
        {allSlides()}
        <SlideThumbnails nextSlide={nextSlide} updateSlide={updateSlide} viewing={viewing} />
      </ul>

      <GalleryRow />
    </div>
  )
}

type Props = {
  idx: number;
  imgSrc: string;
  heading: string;
  text: string;
  viewing: number,
  nextSlide: () => void,
  updateSlide: (idx: number) => void
}

const SlideView = ({ imgSrc, idx, heading, text, nextSlide, updateSlide, viewing }: Props) => {

  const [show, setShow] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true)
    }, 200)

    const timer2 = setTimeout(() => {
      setShow(false)
    }, 10800)

    return () => {
      setShow(false)
      clearTimeout(timer)
      clearTimeout(timer2)
    }
  }, [imgSrc, viewing, idx])

  if (idx !== viewing) return

  return (
    <li className='relative'>
      <Image src={imgSrc} alt={imgSrc} width={2000} height={1000} className={`w-full h-[42rem] object-cover transition-all duration-500 ${show? "opacity-100" : "opacity-20"}`} />

      <div className='absolute bottom-36 left-24 w-1/2 space-y-6'>
        <p className='text-7xl'>{heading}</p>
        <p className='text-2xl'>{text}</p>
      </div>
    </li>
  )
}

const SlideThumbnails = ({ nextSlide, updateSlide, viewing }: Partial<Props>) => {
  const showThumbnails = () => [0, 1, 2].map(v => <ThumbnailButton updateSlide={updateSlide} idx={v} key={v} nextSlide={nextSlide} viewing={viewing} />)

  return (
    <ul className='absolute bottom-2 mx-auto flex gap-x-4 w-full justify-center'>
      {showThumbnails()}
      {/* <li>1</li>
      <li>2</li>
      <li>3</li> */}
    </ul>
  )
}

const ThumbnailButton = ({ updateSlide, idx, nextSlide, viewing }: Partial<Props>) => {

  return (
    <li className='w-4 h-4'>
      <button className='rounded-full' onClick={() => updateSlide!(idx!)}>
        <RadialProgressBar show={idx === viewing} viewing={viewing!} />
      </button>
    </li>
  )
}

const GalleryRow = () => {
  const showParts = () => galleryRow.map(item => <RowPart key={item.text} {...item} />)

  return (
    <div className='flex gap-x-0 justify-between z-10 h-[27rem]'>
      {showParts()}
    </div>
  )
}

type PartProps = {
  text: string;
  src: string;
}

const RowPart = ({ ...data }: PartProps) => {
  const { src, text } = data
  const { handleFalsy, handleTruthy, isTrue } = useForTruthToggle()

  return (
      <div 
        className={`w-full h-full ${true ? "overflow-clip" : ""} cursor-pointer`}
        onMouseEnter={handleTruthy} onMouseLeave={handleFalsy}
      >
        <Image src={src} alt={src} width={400} height={400} className={`w-full h-full object-cover transition-all duration-1000 ${isTrue ? "scale-105" : ""}`} />
      </div>
  )
}

// const RowPart = ({ ...data }: PartProps) => {
//   const { src, text } = data
//   const { handleFalsy, handleTruthy, isTrue } = useForTruthToggle()

//   return (
//     <div className={`w-full h-full z-0`} onMouseEnter={handleTruthy} onMouseLeave={handleFalsy}>
//       <div 
//         // className={`w-full h-full ${isTrue ? "-z-0" : "z-0"}`}
//         className={`w-full h-full ${true ? "overflow-clip" : ""}`}
//       >
//         <Image src={src} alt={src} width={400} height={400} className={`w-full h-full object-cover ${isTrue ? "scale-105" : ""}`} />
//         {/* <p>{text}</p> */}
//       </div>
//     </div>
//   )
// }

// const RowPart = ({ ...data }: PartProps) => {
//   const { src, text } = data
//   const { handleFalsy, handleTruthy, isTrue } = useForTruthToggle()

//   return (
//     <div className={`w-full h-full ${isTrue ? "-z-10" : "z-0"}`}>
//       {/* <div className='w-full'> */}
//         <Image src={src} alt={src} width={400} height={400} className={`w-full h-full object-cover ${isTrue ? "scale-105" : ""} overflow-clip`} onMouseEnter={handleTruthy} onMouseLeave={handleFalsy} />
//         {/* <p>{text}</p> */}
//       {/* </div> */}
//     </div>
//   )
// }