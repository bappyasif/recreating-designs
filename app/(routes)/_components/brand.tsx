import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Brand = () => {
  return (
    <Link href={"/"} className='px-0.5 self-end text-center w-3/4 flex justify-center'>
        <Image src={"https://howies.co.uk/cdn/shop/files/800x200_howies_logo_500x.png?v=1657097492"} alt='showing howies brand logo' className='w-44 h-24' width={800} height={800} />
    </Link>
  )
}
