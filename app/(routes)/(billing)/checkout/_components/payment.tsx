"use client"

import React, { useState } from 'react'
import { ReusableActionButtons, ShippingInfo } from './reusables'
import { PaymentOptions } from './payment-options'
import { BillingAddress } from './billing-address'

export const PaymentDetails = () => {
    const [selected, setSelected] = useState("")
    const updateSelected = (d: string) => {
        setSelected(d)
    }
    return (
        <div className='text-[#474747]'>
            <InfoSofar />
            <PaymentOptions selected={selected} updateSelected={updateSelected} />
            {/* {
                selected !== "paypal"
                    ? (
                        <>
                            <BillingAddress />
                            <RememberMe />
                        </>
                    ) : null
            } */}
            {/* <ReusableActionButtons continueTo="pay now" href="" returnTo="shipping" radSel={selected} /> */}
        </div>
    )
}

const RememberMe = () => {
    return (
        <label htmlFor="remember-me">
            <input type="checkbox" />
            Save my information for a faster checkout
        </label>
    )
}

const InfoSofar = () => {
    return (
        <div className="border">
            <ShippingInfo type="Contact" values="a@b.co" />
            <div className="w-[98%] mx-auto my-2.5 h-0.5 bg-slate-200"></div>
            <ShippingInfo type="Ship to" values="Road#0, House#0 (#rd floor - front side), p.c. culture housing society, shekertek, Dhaka 1207, Bangladesh" />
            <div className="w-[98%] mx-auto my-2.5 h-0.5 bg-slate-200"></div>
            <ShippingInfo type="Shipping method" values="Standard International (14-21 working days) · Free" />
        </div>
    )
}
