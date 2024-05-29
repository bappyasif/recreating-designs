import React from 'react'
import { FaCcMastercard } from 'react-icons/fa'
import { FaAmazonPay, FaApplePay, FaCcPaypal, FaGooglePay } from 'react-icons/fa6'
import { SiFampay } from 'react-icons/si'

export const Express = () => {

  return (
    <div className='text-slate-900 flex flex-col gap-y-6 mx-auto text-lg mb-4'>
        <p className='mx-auto text-slate-400'>Express Checkout</p>
        <ShowOptions />
        <Divider />
    </div>
  )
}

const Divider = () => {
    return (
        <div className='flex gap-x-2 items-center w-full mx-auto'>
            <span className='w-full h-0.5 bg-slate-300'></span>
            <span className='text-slate-800'>Or</span>
            <span className='w-full h-0.5 bg-slate-300'></span>
        </div>
    )
}

const ShowOptions = () => {
    const options = [{name: "Apple Pay", icon: <FaApplePay />}, {name: "Google Pay", icon: <FaGooglePay />}, {name: "Paypal", icon: <FaCcPaypal />}]

    const colors = ["yellow", "violet", "slate"]

    const allOptions = () => options.map((item, idx) => {
        // console.log(colors[idx], "what!!")
        return (
            <button title={item.name} key={item.name} className={`text-6xl flex justify-center ${idx === 0 ? "bg-yellow-400" : idx === 1 ? "bg-violet-600": "bg-black text-slate-200"} rounded w-40`}>{item.icon}</button>
            // <button title={item.name} key={item.name} className={`text-6xl flex justify-center bg-${colors[idx]}-600 rounded w-40`}>{item.icon}</button>
        )
    })

    return (
        <div className='flex gap-x-4 mx-auto w-full justify-center'>{allOptions()}</div>
    )
}