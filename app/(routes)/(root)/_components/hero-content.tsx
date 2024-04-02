"use client"

import { heroSlidesImages } from '@/data'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import RadialProgressBar from './radial-progress-bar'

export const HeroContent = () => {
  const [viewing, setViewing] = useState(0)

  // const nextSlide = () => {
  //   setViewing(prev => {
  //     console.log(viewing, prev, "!!")
  //     if(viewing === 2) {
  //       return  0
  //     } else {
  //       return prev + 1
  //     }
  //   })
  //   // setViewing(prev => {
  //   //   console.log(viewing, prev, "!!")
  //   //   if(prev === 2) {
  //   //     return  0
  //   //   } else {
  //   //     return prev + 1
  //   //   }
  //   // })
  // }

  // const nextSlide = () => {
  //   setViewing(prev => {
  //     console.log(viewing, prev, "!!")
  //     if (prev >= 2) {
  //       return 0
  //     } else {
  //       return prev + 1
  //     }
  //   })
  // }

  // const nextSlide = () => {
  //   setViewing(prev => {
  //     console.log(viewing, prev, "!!")
  //     if (prev >= 2) {
  //       return 0
  //     } else if (prev === 0) {
  //       return 1
  //     } else {
  //       return prev + 1
  //     }
  //   })
  // }

  const nextSlide = () => {
    if(viewing === 0) {
      setViewing(1)
    } else if (viewing === 1) {
      setViewing(2)
    } else {
      setViewing(0)
    }
  }

  const updateSlide = (idx: number) => setViewing(idx)

  const tick = () => {
    const timer = setTimeout(() => {
      nextSlide()
    }, 11000)

    return () => clearTimeout(timer)
  }

  useEffect(() => {
    // viewing >=0 && viewing < 3 && tick()
    tick()
  }, [viewing])

  // useEffect(() => {
  //   viewing === 0 && tick()
  // }, [])

  const allSlides = () => heroSlidesImages.map(item => <SlideView imgSrc={item.src} idx={item.idx} heading={item.heading} text={item.text} key={item.idx} viewing={viewing} nextSlide={nextSlide} updateSlide={updateSlide} />)

  return (
    <div className='z-0'>
      <ul className='w-full h-full relative'>
        {allSlides()}
        <SlideThumbnails nextSlide={nextSlide} updateSlide={updateSlide} viewing={viewing} />
      </ul>
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

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     nextSlide!()
  //   }, 4000)

  //   return () => clearInterval(timer)
  // }, [viewing])

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     nextSlide!(idx!)
  //   }, 4000)

  //   return () => clearInterval(timer)
  // }, [idx])

  if (idx !== viewing) return

  return (
    <li className='relative'>
      <Image src={imgSrc} alt={imgSrc} width={2000} height={1000} className='w-full h-[36rem]' />

      <div className='absolute bottom-4 w-1/2 space-y-6'>
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
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     nextSlide!(idx!)
  //   }, 4000)

  //   return () => clearTimeout(timer)
  // }, [idx])

  // console.log(idx === viewing, idx, viewing)

  return (
    <li className='w-4 h-4'>
      {/* <RadialProgressBar /> */}
      <button className='rounded-full' onClick={() => updateSlide!(idx!)}>
        {/* {idx} */}
        {/* <RadialProgressBar idx={idx!}  /> */}
        <RadialProgressBar show={idx === viewing} viewing={viewing!}  />
      </button>
    </li>
  )
}

