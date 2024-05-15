import React from 'react'
import { HeroItem, WearItOut } from './_components/hero'
import { ZigzagItems } from './_components/zigzag'
import { ConciousClothing } from './_components/concious-clothing'
import { SeparatorOne, SeparatorTwo } from './_components'
import { HistorySection } from './_components/history'

const MorePage = () => {
  return (
    <div  className='min-h-screen space-y-10 w-full mx-auto'>
        <HeroItem />
        <WearItOut />
        <ZigzagItems />
        <ConciousClothing />
        <SeparatorOne />
        <HistorySection />
        <SeparatorTwo />
    </div>
  )
}

export default MorePage