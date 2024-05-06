import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const ReUsableHeroComponent = ({forWomen}: {forWomen: boolean}) => {
  return (
    <div className='px-4 flex flex-col gap-y-20'>
        <Header />
        <div className='flex justify-between'>
            <LeftSide />
            <RightSide forWomen={forWomen} />
        </div>
    </div>
  )
}

const RightSide = ({forWomen}: {forWomen: boolean}) => {
    return (
        <Image src={forWomen ? "https://howies.co.uk/cdn/shop/files/HOME_2024_DENIM_5de2b43c-c0b6-47dc-85b1-dc070007faa1.jpg?v=1708964775" : "https://howies.co.uk/cdn/shop/files/HOME_2024_PRINTEDTEES_6141ebcb-bd1d-4272-a194-758d2bebe4a4.jpg?v=1708944801"} width={1100} height={800} alt='' className='w-1/2 px-20 h-[40rem]' />
    )
}

const LeftSide = () => {
    const insetMarkup = () => {
        return (
            <div className='w-1/2'>
                <Link href={"#"} className='underline text-2xl'>Our fabric stories</Link>
                <div>
                    <Link href={"#"} className='text-xl text-slate-400'>Read more</Link>
                    <span>&gt;</span>
                </div>
            </div>
        )
    }

    return (
        <div className='flex flex-col justify-between'>
            <p className='text-5xl text-slate-400'>All the outdoor staples you need; discover our latest tops, trousers, jackets and more right here. All made using lower impact natural and sustainable fibres for comfort and functionality.</p>
            {insetMarkup()}
        </div>
    )
}

const Header = () => {
    const getYear = () => new Date().getFullYear().toString().split("").map((v, i) => i > 1 && v).filter(v=> v).join("")

    return (
        <h2 className='text-4xl'>Men's SS/{getYear()}</h2>
    )
}
