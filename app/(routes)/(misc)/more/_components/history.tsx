import React from 'react'
import { history } from '../data'
import { Header } from '.'

export const HistorySection = () => {
    const showAll = () => history.map(item => <ShowItem key={item.year} text={item.text} year={item.year} />)

  return (
    <div className='flex flex-col gap-y-10 px-28 text-2xl font-light bg-[#f3ede3] py-20'>
        {/* <Header /> */}
        <Header headingText='Do Good Shit' sectionName='OUR HISTORY' />
        <div className='flex flex-col gap-y-4'>
            {showAll()}
        </div>
    </div>
  )
}

const ShowItem = ({year, text}: {year: number, text: string}) => {
    return (
        <p className='flex gap-x-2 text-xl'>
            <span className='underline'>{year}</span>
            <span>{text}</span>
        </p>
    )
}

// const Header = () => {
//     return (
//         <div className='flex flex-col gap-y-6'>
//             <p>OUR HISTORY</p>
//             <p>Do Good Shit</p>
//             <p className='w-6 h-1.5 bg-red-950'></p>
//         </div>
//     )
// }
