import React from 'react'
import { Brand } from './brand'
import { Navs } from './navs'
import { HeaderRightHandSide } from './header-right-hand-side'

export const Header = () => {
  return (
    <header className='flex justify-between items-center relative bg-[#ffffff]'>
      <Brand />
      <Navs />
      <HeaderRightHandSide />
    </header>
  )
}
