import React from 'react'
import { BiSolidRightArrow } from 'react-icons/bi'

export const FabricType = () => {
  return (
    <section className='flex justify-between gap-x-10 items-center bg-stone-400'>
        <div className='flex flex-col gap-y-10 w-1/2 h-full'>
            <Header />
            <Texts />
        </div>
        <Image />
    </section>
  )
}

const Image = () => {
    return (
        <img src="https://picsum.photos/id/81/900/900" alt="https://picsum.photos/id/91/2000/900" className='w-1/2 h-[36rem] bg-slate-400 object-cover' />
    )
}

const Texts = () => {
    return (
        <div className='text-xl flex flex-col gap-y-6'>
            <p>We only use GOTS certified organic cotton that's grown without using harmful practices. Organic farmers use nature-based methods to manage pests, promote healthy soil and respect the welfare of the birds and bees.</p>

            <p className='flex items-center gap-x-2'>
                <span>Read more</span>
                <BiSolidRightArrow size={20} />
            </p>
        </div>
    )
}

const Header = () => {
    return (
        <p className='fle flex-col gap-y-2.5'>
            <span className='text-2xl font-medium'>Organic cotton</span>
            <span className='w-14 h-1.5'></span>
        </p>
    )
}