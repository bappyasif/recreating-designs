import Image from 'next/image'
import React from 'react'

export const Brand = () => {
  return (
    <div className='px-10'>
        <Image src={"https://howies.co.uk/cdn/shop/files/800x200_howies_logo_500x.png?v=1657097492"} alt='showing howies brand logo' className='w-44 h-24' width={800} height={800} />
    </div>
  )
}
