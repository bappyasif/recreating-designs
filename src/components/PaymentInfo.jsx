import React from 'react'

export const PaymentInfo = () => {
  return (
    <section className='flex flex-col gap-2'>
        <div className='text-2xl py-2 my-2'>PaymentInfo</div>
        <div className='flex gap-4 text-2xl'>
            <input className='w-1/5' type="text" placeholder='xxxx-xxxx-xxxx-xxxx' />
            <input className='w-1/6' type="date" name="date" id="" placeholder='expiry date' />
            <input className='w-1/12' type="text" name="pinpas" id="" placeholder='pass code' />
        </div>
        <button className='bg-yellow-700 w-60 text-2xl self-center p-0 py-2'>Pay $5,400</button>
    </section>
  )
}
