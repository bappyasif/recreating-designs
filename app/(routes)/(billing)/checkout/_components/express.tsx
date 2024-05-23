import React from 'react'
import { FaCcMastercard } from 'react-icons/fa'
import { FaAmazonPay, FaApplePay, FaCcPaypal, FaGooglePay } from 'react-icons/fa6'
import { SiFampay } from 'react-icons/si'

export const Express = () => {

  return (
    <div className='text-slate-900'>
        <p>Express Checkout</p>
        <ShowOptions />
        <Divider />
    </div>
  )
}

const Divider = () => {
    return (
        <div className='flex gap-x-6 items-center'>
            <span className='w-full h-0.5 bg-slate-800'></span>
            <span>Or</span>
            <span className='w-full h-0.5 bg-slate-800'></span>
        </div>
    )
}

const ShowOptions = () => {
    const options = [{name: "Apple Pay", icon: <FaApplePay />}, {name: "Google Pay", icon: <FaGooglePay />}, {name: "Paypal", icon: <FaCcPaypal />}]

    const allOptions = () => options.map(item => {
        return (
            <button title={item.name} key={item.name} className='text-2xl '>{item.icon}</button>
        )
    })

    return (
        <div className='flex gap-x-4'>{allOptions()}</div>
    )
}