import Link from 'next/link'
import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { CiShoppingBasket } from 'react-icons/ci'

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
    return <Link href={"#"}>Account</Link>
}

const Search = () => {
    return <Link href={"#"}><BiSearch size={27} /></Link>
}

const Basket = () => {
    return <Link href={"#"}><CiShoppingBasket size={27} /></Link>
}