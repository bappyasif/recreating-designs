"use client"

import React, { FormEvent, useState } from 'react'
import { FaPaypal } from 'react-icons/fa6'
import { IoInformation } from 'react-icons/io5'
import { ReusableActionButtons } from './reusables'
import { BillingAddress } from './billing-address'

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
        <div>
            <PaymentHeading />
            <form action="" onSubmit={handleSubmit}
            // onChange={handleChange}
            >
                {/* <PaymentHeading /> */}

                <CreditCard updateSelected={updateSelected} selected={selected} />
                <PayPal updateSelected={updateSelected} selected={selected} />

                {
                    selected !== "paypal"
                        ? (
                            <>
                                <BillingHeading />
                                <BillingAddress />
                                <RememberMe />
                            </>
                        ) : null
                }

                <ReusableActionButtons continueTo="pay now" href="" returnTo="shipping" radSel={selected} />
            </form>
        </div>
    )
}

const PaymentHeading = () => {
    return (
        <div className='my-6'>
            <p className='text-2xl font-bold'>Payment</p>
            <p>All transactions are secure and encrypted.</p>
        </div>
    )
}

const BillingHeading = () => {
    return (
        <div className='my-6'>
            <p className='text-2xl font-bold'>Billing address</p>
            <p>Select the address that matches your card or payment method.</p>
        </div>
    )
}

const RememberMe = () => {
    return (
        <section className='my-6'>
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

    return (
        <section>
            <div className='flex justify-between'>
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

                <div className='flex gap-x-2'>
                    <div className='w-8 h-6 bg-slate-200'></div>
                    <div className='w-8 h-6 bg-slate-200'></div>
                    <div className='w-8 h-6 bg-slate-200'></div>
                    <div className='w-8 h-6 bg-slate-200'></div>
                    <div className='w-8 h-6 bg-slate-200 text-center'>+4</div>
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
        <div className='flex flex-col gap-y-6 p-2'>
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
    return (
        <div className='flex justify-between items-center relative'>
            <input className='w-full' type="text" placeholder={placeholder} autoComplete={auCo} required
            // inputMode='numeric' pattern='[0-9]' 
            />

            {
                showIcon
                    ? <IoInformation className='absolute right-0' />
                    : null
            }
        </div>
    )
}

const PayPal = ({ updateSelected, selected }: { updateSelected: (d: string) => void, selected: string }) => {
    return (
        <section >
            <div className='flex justify-between'>
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
                        <p className='p-4'>After clicking "Pay with PayPal", you will be redirected to PayPal to complete your purchase securely.</p>
                    ) : null
            }
        </section>
    )
}