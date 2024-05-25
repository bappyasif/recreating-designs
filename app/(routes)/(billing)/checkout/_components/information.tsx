"use client"

import React from 'react'
import { ReusableActionButtons, ReusableInput, ReusableTextarea, ReusableTextarea2, SelectCountry } from './reusables'

export const Information = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("ready submit!!")
    }

    return (
        <form onSubmit={handleSubmit} className='flex flex-col gap-y-4 justify-between items-center text-[#474747]'>
            <div className='self-start'>
                <ReusableInput name='Email' placeholder='Your valid email here' type='email' />
                <CheckOffers />
            </div>

            <p className='self-start my-6 text-2xl font-bold'>Shipping address</p>
            <SelectCountry />
            <div className='flex justify-between items-center w-full'>
                <ReusableInput name='First name' placeholder='First name' type='text' />
                <ReusableInput name='Last name' placeholder='Last name' type='text' />
            </div>
            {/* <ReusableInput name='Address' placeholder='Address' type='address' /> */}
            <ReusableTextarea name='Address' />

            <ReusableTextarea2 name='Apartment, suite, etc. (optional)' />

            <div className='flex justify-between items-center w-full'>
                <ReusableInput name='City' placeholder='City' type='text' />
                <ReusableInput name='Postal code' placeholder='Postal code' type='text' />
            </div>
            <div className='flex justify-between items-center w-full'>
                <ReusableInput name='Phone' placeholder='Phone number' type='telephone' />
                <CountryFlag />
            </div>

            <ReusableActionButtons href='/cart' continueTo='shipping' returnTo='basket' />

            {/* <div className='flex justify-between items-center w-full'>
                <Link href={"/cart"} className='flex gap-x-4 items-center text-xl'>
                    <span className='text-2xl'>&lt;</span>
                    <span>Return to basket</span>
                </Link>
                <button type='submit' className='p-4 w-80 bg-slate-400 rounded text-xl'>Continue to shipping</button>
            </div> */}
        </form>
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

const CountryFlag = () => {
    return (
        <div>&#127463;🇩</div>
    )
}

// const SelectCountry = () => {
//     const countries = () => options.map(v => <option key={v} value={v}>{v}</option>)

//     return (
//         <select className='w-full py-4 border border-slate-800 rounded' name="country" id="country" required>
//             <option value="-1">Choose country</option>
//             {countries()}
//         </select>
//     )
// }

// const options = ["Albania", "Bangladesh", "UK", "USA"]