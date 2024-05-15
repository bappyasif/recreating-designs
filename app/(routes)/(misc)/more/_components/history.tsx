import React from 'react'
import { history } from '../data'

export const HistorySection = () => {
    const showAll = () => history.map(item => <ShowItem key={item.year} text={item.text} year={item.year} />)

  return (
    <div>
        <Header />
        <div className='flex flex-col gap-y-4'>
            {showAll()}
        </div>
    </div>
  )
}

const ShowItem = ({year, text}: {year: number, text: string}) => {
    return (
        <p className='flex gap-x-2'>
            <span>{year}</span>
            <span>{text}</span>
        </p>
    )
}

const Header = () => {
    return (
        <div className='flex flex-col gap-y-6'>
            <p>OUR HISTORY</p>
            <p>Do Good Shit</p>
            <p className='w-6 h-1.5 bg-red-950'></p>
        </div>
    )
}
