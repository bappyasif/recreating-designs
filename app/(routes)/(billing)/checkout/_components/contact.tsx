import Link from 'next/link'
import React from 'react'

export const ContactForm = () => {
    return (
        <div className='text-[#474747]'>
            <div className='flex justify-between'>
                <p className='text-2xl font-bold'>Contact</p>
                <Link href={"/login"} className='underline'>Log in</Link>
            </div>
            {/* <ReusableInput name='Email' placeholder='Your valid email here' type='email' />
            <CheckOffers /> */}
        </div>
    )
}

const CheckOffers = () => {
    return (
        <label htmlFor="offers">
            <input type="checkbox" name="offers" id="offers" />
            Email me with news and offers
        </label>
    )
}
