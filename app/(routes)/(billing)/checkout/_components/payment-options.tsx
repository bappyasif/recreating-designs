"use client"

import React, { FormEvent, useState } from 'react'
import { FaAmazonPay, FaCcAmex, FaCcDiscover, FaPaypal } from 'react-icons/fa6'
import { IoInformation } from 'react-icons/io5'
import { ReusableActionButtons } from './reusables'
import { BillingAddress } from './billing-address'
import { TbCreditCard } from 'react-icons/tb'
import { GiUnionJack } from 'react-icons/gi'
import { SiPaytm, SiRazorpay } from 'react-icons/si'
import { useForTruthToggle } from '@/hooks'
import { BiLock } from 'react-icons/bi'

export const PaymentOptions = ({ updateSelected, selected }: { updateSelected: (d: string) => void, selected: string }) => {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log("VIEW DATA!!")
    }
    // const [selected, setSelected] = useState("")

    // const handleChange = (e: React.FormEvent<HTMLFormElement>) => {
    //     console.log("selected!!", e.currentTarget)
    // }

    // const updateSelected = (d: string) => {
    //     setSelected(d)
    // }

    return (
        <div className='w-3/4 self-end space-y-2'>
            <PaymentHeading />
            <form action="" onSubmit={handleSubmit}
            // onChange={handleChange}
            // className='space-y-3'
            // className='my-0'
            // className='bg-slate-600'
            >
                {/* <PaymentHeading /> */}

                <CreditCard updateSelected={updateSelected} selected={selected} />
                <PayPal updateSelected={updateSelected} selected={selected} />

                {
                    selected !== "paypal"
                        ? (
                            <div className='space-y-6'>
                                <div className='space-y-3'>
                                    <BillingHeading />
                                    <BillingAddress />
                                </div>
                                <RememberMe />
                            </div>
                        ) : null
                }

                <ReusableActionButtons continueTo="pay now" href="" returnTo="shipping" radSel={selected} updateSection={() => null} />
            </form>
        </div>
    )
}

const PaymentHeading = () => {
    return (
        <div className='mt-6'>
            <p className='text-2xl font-bold'>Payment</p>
            <p>All transactions are secure and encrypted.</p>
        </div>
    )
}

const BillingHeading = () => {
    return (
        <div className='my-2 mt-6'>
            <p className='text-2xl font-bold'>Billing address</p>
            <p>Select the address that matches your card or payment method.</p>
        </div>
    )
}

const RememberMe = () => {
    return (
        <section className='my-2'>
            <div className='text-2xl font-bold'>Remember me</div>
            <label htmlFor="remember-me" className='flex items-center gap-x-2'>
                <input type="checkbox" />
                Save my information for a faster checkout
            </label>
        </section>
    )
}

const CreditCard = ({ updateSelected, selected }: { updateSelected: (d: string) => void, selected: string }) => {
    // const [selected, setSelected] = useState(false)

    // const handleSelected = (e: React.SyntheticEvent<HTMLInputElement, Event>) => {
    //     console.log("selected!!", e.currentTarget.value)
    // }

    // const [selected, setSelected] = useState("")

    // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     console.log("changed selected!!", e.currentTarget.textContent)
    // }

    const { handleFalsy, handleTruthy, isTrue } = useForTruthToggle()

    return (
        <section>
            <div className='flex justify-between p-6 py-4 border rounded-md'>
                <label htmlFor="cc" className='flex gap-x-2'
                    // onClick={e => console.log("clicked!!")}
                    onClick={e => updateSelected("cc")}
                >
                    <input value={"cc-val"} name='payment-type' id='cc' type='radio'
                    // onSelect={handleSelected} 
                    // onChange={e => handleChange}
                    />
                    Credit card
                </label>

                <div className='flex gap-x-2 relative'>
                    {/* <TbCreditCard size={31} /> */}
                    {/* <div className='w-8 h-6 bg-slate-200'><FaCcAmex size={31} /></div> */}
                    <FaCcAmex size={24} />
                    <FaCcDiscover size={24} />
                    {/* <GiUnionJack size={24} /> */}
                    <SiPaytm size={24} />
                    <SiRazorpay size={24} />
                    <FaAmazonPay size={24} />
                    {/* <div className='w-8 h-6 bg-slate-200'></div>
                    <div className='w-8 h-6 bg-slate-200'></div>
                    <div className='w-8 h-6 bg-slate-200'></div>
                    <div className='w-8 h-6 bg-slate-200'></div> */}
                    <div className='w-8 h-6 bg-slate-200 text-center' onMouseEnter={handleTruthy} onMouseLeave={handleFalsy}>+4</div>

                    {
                        isTrue
                            ? (
                                <div className='absolute bottom-10 right-0 bg-slate-200 flex gap-x-4 w-28 justify-center flex-wrap rounded-md'>
                                    <TbCreditCard size={31} />
                                    <TbCreditCard size={31} />
                                    <TbCreditCard size={31} />
                                    <TbCreditCard size={31} />
                                </div>
                            ) : null
                    }
                </div>
            </div>

            {
                selected === "cc"
                    ? <CardInfo />
                    : null
            }
        </section>
    )
}

const CardInfo = () => {
    return (
        <div className='flex flex-col gap-y-6 p-6 rounded-md rounded-t-none bg-slate-200'>
            <ReusableCcInput auCo='cc-number' placeholder='Card number' showIcon={true} />
            <ReusableCcInput auCo='cc-name' placeholder='Name on card' showIcon={false} />
            <div className='flex justify-between'>
                <ReusableCcInput auCo='cc-exp' placeholder='Expiration date (MM/YY)' showIcon={false} />
                <ReusableCcInput auCo='cc-csc' placeholder='Security code' showIcon={true} />
            </div>
        </div>
    )
}

const ReusableCcInput = ({ auCo, placeholder, showIcon }: { auCo: string, placeholder: string, showIcon: boolean }) => {
    const { handleFalsy, handleTruthy, isTrue } = useForTruthToggle()

    return (
        <div className='flex justify-between items-center relative'>
            <input className='w-full text-[.9rem] p-2 ml-0.5 rounded-md' type="text" placeholder={placeholder} autoComplete={auCo} required
            // inputMode='numeric' pattern='[0-9]' 
            />

            {/* <div className='flex justify-center items-center relative'>
            {
                showIcon && auCo === "cc-number"
                    ? <BiLock className='absolute right-2' />
                    : showIcon && auCo === "cc-csc"
                        ? <IoInformation className='absolute right-2' title='3-digit security code usually found on the back of your card. American Express cards have a 4-digit code located on the front' onMouseEnter={handleTruthy} onMouseLeave={handleFalsy} />
                        : null
            }
            </div> */}

{
                showIcon && auCo === "cc-number"
                    ? <BiLock className='absolute right-2 text-xl' />
                    : showIcon && auCo === "cc-csc"
                        ? <IoInformation className='absolute right-2 text-2xl'  onMouseEnter={handleTruthy} onMouseLeave={handleFalsy} />
                        : null
            }

            {
                isTrue
                ? <span className='absolute -top-36 bg-slate-800  text-slate-200 p-2 rounded-md'>3-digit security code usually found on the back of your card. American Express cards have a 4-digit code located on the front</span>
                : null
            }

            {/* {
                showIcon
                    ? <IoInformation className='absolute right-0' />
                    : null
            } */}
        </div>
    )
}

const PayPal = ({ updateSelected, selected }: { updateSelected: (d: string) => void, selected: string }) => {
    return (
        <section className=''>
            <div className='flex justify-between p-6 py-4 border rounded-md'>
                <label htmlFor="pp" className='flex gap-x-2'>
                    <input type='radio' id='pp' name='payment-type' onClick={e => updateSelected("paypal")} />
                    Paypal
                </label>

                <div className='flex gap-x-2 items-center'>
                    <FaPaypal size={20} />
                    <p>Paypal</p>
                </div>
            </div>

            {
                selected === "paypal"
                    ? (
                        <p className='p-4 bg-slate-200 px-8'>After clicking "Pay with PayPal", you will be redirected to PayPal to complete your purchase securely.</p>
                    ) : null
            }
        </section>
    )
}