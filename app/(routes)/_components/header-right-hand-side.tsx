import Link from 'next/link'
import React from 'react'

export const HeaderRightHandSide = () => {
  return (
    <div className='flex justify-between gap-x-6 px-4'>
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
    return <Link href={"#"}>Search</Link>
}

const Basket = () => {
    return <Link href={"#"}>Basket</Link>
}