import React from 'react'
import { reusables } from '../data'

export const ZigzagItems = () => {
  const showAll = () => reusables.map((item, idx) => <ShowItem key={item.text} additional={item.additional} imgSrc={item.img} swap={Boolean(idx)} text={item.text} />)

  return (
    <div className='flex flex-col justify-center items-center'>
      {showAll()}
    </div>
  )
}


const ShowItem = ({ imgSrc, text, swap, additional }: { imgSrc: string, text: string, swap: boolean, additional: string }) => {
  return (
    <div className='flex gap-x-10 items-center'>
      {
        swap
          ? null
          : <p>{text}</p>
      }
      <div className='w-1/2 h-96'>
        <img src={imgSrc} alt="" className='w-full h-full' />
      </div>
      <div className='flex flex-col gap-y-4 w-1/2'>
        {
          swap
            ? <p>{text}</p>
            : null
        }

        {
          additional.length
            ? <p>{additional}</p>
            : null
        }
      </div>
    </div>
  )
}