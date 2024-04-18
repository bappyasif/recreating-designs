import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const HeroComponent = () => {
  return (
    <div>
        <Header />
        <div className='flex justify-between px-4'>
            <LeftSide />
            <RightSide />
        </div>
    </div>
  )
}

const RightSide = () => {
    return (
        <Image src={"https://howies.co.uk/cdn/shop/files/HOME_2024_DENIM_5de2b43c-c0b6-47dc-85b1-dc070007faa1.jpg?v=1708964775"} width={1100} height={800} alt='' className='w-1/2 px-20' />
    )
}

const LeftSide = () => {
    const insetMarkup = () => {
        return (
            <div className='w-1/2'>
                <Link href={"#"}>Our fabric stories</Link>
                <div>
                    <Link href={"#"}>Read more</Link>
                    <span>&gt;</span>
                </div>
            </div>
        )
    }

    return (
        <div>
            <p>All the outdoor staples you need; discover our latest tops, trousers, jackets and more right here. All made using lower impact natural and sustainable fibres for comfort and functionality.</p>
            {insetMarkup()}
        </div>
    )
}

const Header = () => {
    const getYear = () => new Date().getFullYear().toString().split("").map((v, i) => i > 1 && v).filter(v=> v).join("")

    return (
        <h2>SS/{getYear()}</h2>
    )
}
