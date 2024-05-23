import { useClickOutside } from '@/hooks'
import Link from 'next/link'
import React, { useRef } from 'react'
import { CgRemove } from 'react-icons/cg'
import { HiCheck } from 'react-icons/hi'

export const AddedToBasket = ({ handleClose }: { handleClose: () => void }) => {
    const ref = useRef(null)
    useClickOutside(ref, handleClose)

    return (
        <div ref={ref} className='fixed top-6 right-2 flex flex-col gap-y-6 w-[29rem] z-10 bg-slate-50 px-6 shadow-md'>
            <ModalHeader handleClose={handleClose} />
            <ProductInfo />
            <ModalButtons />
        </div>
    )
}

const ModalButtons = () => {
    return (
        <div className='w-full flex justify-between gap-x-6 py-4'>
            <Link className='bg-transparent hover:bg-[#474747] hover:text-[#ffffff] text-3xl w-1/2 text-center py-2 rounded border-2' href={"/cart"}>View basket</Link>
            <Link href={""} className='bg-[#474747] hover:bg-transparent text-[#ffffff] hover:text-[#474747] text-3xl w-1/2 text-center py-2 rounded border-2'>chekcout</Link>
        </div>
    )
}

const ProductInfo = () => {
    return (
        <div className='flex items-center gap-x-6'>
            <div className='p-1.5 bg-slate-200'>
                <img src="https://picsum.photos/id/26/200/300" alt="https://picsum.photos/id/26/200/200" className='w-20' />
            </div>
            <div className='text-xl space-y-4'>
                <p className='text-2xl'>Product Name</p>
                <p>$##.##</p>
                <p className='text-slate-400'>Size: @</p>
            </div>
        </div>
    )
}

const ModalHeader = ({ handleClose }: { handleClose: () => void }) => {
    return (
        <div className='w-full flex justify-between items-center'>
            <div className='flex gap-x-4 items-center'>
                <HiCheck size={29} />
                <p className='text-xl font-semibold'>Added to basket</p>
            </div>

            <button onClick={handleClose}><CgRemove size={20} /></button>
        </div>
    )
}