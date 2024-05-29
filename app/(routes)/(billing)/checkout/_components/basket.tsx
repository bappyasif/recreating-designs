import React from 'react'
import { TbTag } from 'react-icons/tb'
import { TiTag } from 'react-icons/ti'

export const Basket = () => {
  return (
    <div className='w-1/2 bg-slate-400 p-10 space-y-4'>
      <ProductCard />
      <ProductCard />
      <Discount />
      <ShowAmount name='Subtotal' value='$124.09' />
      <ShowAmount name='Shipping' value='FREE' />
      <ShowAmount name='Total' value='$124.09' />
      <TotalSavings />
    </div>
  )
}

const TotalSavings = () => {
  return (
    <div className='flex gap-x-4 items-center w-[40rem]'>
      <TiTag size={20} />
      <span className='font-[400] text-lg'>TOTAL SAVINGS £41.66</span>
    </div>
  )
}

const ShowAmount = ({ name, value }: { name: string, value: string }) => {
  return (
    <p className={`flex justify-between w-[40rem] ${name === "Total" ? "text-2xl" : "text-lg"}`}>
      <span className='font-semibold'>{name}</span>
      <span>{value}</span>
    </p>
  )
}

const Discount = () => {
  return (
    <div className='flex justify-between w-[40rem]'>
      <input type="text" placeholder='Discount code or gift card' className='w-3/4 p-2 bg-transparent rounded-md outline outline-transparent/5 text-2xl' />
      <button className='text-xl font-semibold bg-transparent/5 p-4 px-8 rounded-md'>Apply</button>
    </div>
  )
}

const ProductCard = () => {
  return (
    <div className='flex gap-x-10 justify-between w-[40rem] mb-6'>
      <div className='relative'>
        <img src="https://picsum.photos/id/26/200/300" alt="https://picsum.photos/id/26/200/200" className='h-20 w-16 rounded-sm object-cover' />
        <p className='bg-slate-600 rounded-full p-1 px-3 absolute -top-4 -right-4'>7</p>
      </div>

      <div className='space-y-2'>
        <p className='font-semibold'>Product name goes here</p>
        <p className='text-sm'>size</p>
        <p className='flex gap-x-2 items-center'>
          <TbTag size={20} />
          <span  className='text-sm'>25% OFF 7 TEES (-£36.45)</span>
        </p>
      </div>

      <div className='space-y-2'>
        <p className='line-through text-sm'>ret price</p>
        <p>dic price</p>
      </div>
    </div>
  )
}