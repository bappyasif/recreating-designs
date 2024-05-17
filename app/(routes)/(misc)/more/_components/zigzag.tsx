"use client"

import React, { useEffect, useRef } from 'react'
import { reusables } from '../data'
import { useForObserverIntersectionJustOnce, useForObserverIntersectionVersionTwo, useForTruthToggle } from '@/hooks'

export const ZigzagItems = () => {
  // const {isTrue, ref} = useForObserverIntersectionJustOnce()

  // const ref = useRef(null)
  // const {handleTruthy, isTrue, handleFalsy} = useForTruthToggle()

  // const onIntersection = (entries: IntersectionObserverEntry[]) => {
  //   for (const entry of entries) {
  //     if (entry.isIntersecting) {
  //       console.log(entry);
  //       handleTruthy()
  //     } else {
  //       console.log("here!!")
  //       handleFalsy()
  //     }
  //   }
  // };
  
  // // const observer = new IntersectionObserver(onIntersection, {root: ref.current});

  // useEffect(() => {
  //   const observer = new IntersectionObserver(onIntersection);

  //   if(ref.current) {
  //     observer.observe(ref.current);
  //   }

  //   return () => {
  //     observer.unobserve(ref.current!)
  //     // handleFalsy()
  //   }
  // }, [ref])

  const {isTrue, ref} = useForObserverIntersectionVersionTwo()

  const showAll = () => reusables.map((item, idx) => <ShowItem key={item.text} additional={item.additional} imgSrc={item.img} swap={Boolean(idx)} text={item.text} />)

  // console.log(isTrue, "?!?!")

  return (
    <div 
      ref={ref}
      // className={`flex flex-col justify-center items-center w-full`}
      className={`flex flex-col justify-center items-center w-full transition-all duration-1000 ${isTrue ? "opacity-100 scale-100" : "opacity-40 scale-50"}`}
      >
      {showAll()}
    </div>
  )
}


const ShowItem = ({ imgSrc, text, swap, additional }: { imgSrc: string, text: string, swap: boolean, additional: string }) => {
  return (
    <div className='flex items-center justify-center'>
      {
        swap
          ? null
          : <p className='w-1/2 px-16 text-xl bg-[#f3ede3] flex justify-center items-center h-[36rem]'>{text}</p>
      }

      <div className={`${swap ? "" : "w-1/2"} h-[36rem] flex justify-center`}>
        <img src={imgSrc} alt="" className={`w-full h-full`} />
      </div>

      {
          swap
            ? (
              <div className='flex flex-col gap-y-4 w-1/2 px-16 text-xl'>
                <p>{text}</p>
                <p>{additional}</p>
              </div>
          )
            : null
      }
    </div>
  )
}