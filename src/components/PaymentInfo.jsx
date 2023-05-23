import React from 'react'

export const PaymentInfo = () => {
  return (
    <section className='flex flex-col gap-2 w-full bg-slate-600 mt-2 pb-4'>
        <div className='text-2xl py-2 my-2'>PaymentInfo</div>
        <div className='flex gap-4 text-2xl px-4'>
            <input className='w-3/5 text-2xl' type="text" placeholder='xxxx-xxxx-xxxx-xxxx' />
            <input className='w-2/6 text-2xl' type="date" name="date" id="" placeholder='expiry date' />
            <input className='w-1/6 text-2xl' type="text" name="pinpas" id="" placeholder='pass code' />
        </div>
        <button className='bg-yellow-700 w-1/4 text-2xl self-center p-0 py-2 mt-2'>Pay $5,400</button>
    </section>
  )
}
