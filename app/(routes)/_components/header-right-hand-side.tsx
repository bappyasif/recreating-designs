"use client"

import { useForTruthToggle } from '@/hooks'
import Link from 'next/link'
import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { CiShoppingBasket } from 'react-icons/ci'
import { SearchModal } from './search-modal'

export const HeaderRightHandSide = () => {
  return (
    <div className='flex justify-between gap-x-6 px-4 text-[#474747]'>
      <Account />
      <Search />
      <Basket />
    </div>
  )
}

const Account = () => {
  return <Link href={"/account/login"}>Account</Link>
}

const Search = () => {
  const { handleFalsy, handleTruthy, isTrue } = useForTruthToggle()

  return (
    <>
      <Link href={"#"} onClick={handleTruthy}><BiSearch size={27} /></Link>
      {
        isTrue
        ? <SearchModal handleClose={handleFalsy} />
        : null
      }
    </>
  )
}

const Basket = () => {
  return <Link href={"#"}><CiShoppingBasket size={27} /></Link>
}