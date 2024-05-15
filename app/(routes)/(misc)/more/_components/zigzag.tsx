import React from 'react'
import { reusables } from '../data'

export const ZigzagItems = () => {
  const showAll = () => reusables.map((item, idx) => <ShowItem key={item.text} additional={item.additional} imgSrc={item.img} swap={Boolean(idx)} text={item.text} />)

  return (
    <div className='flex flex-col justify-center items-center w-full'>
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
          : <p className='w-1/2 px-16 text-xl'>{text}</p>
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