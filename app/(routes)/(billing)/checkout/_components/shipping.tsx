import React from 'react'
import { ReusableInput, ReusableTextarea, ReusableTextarea2 } from './reusable-input'
import Link from 'next/link'

export const Shipping = () => {
    return (
        <div className='flex flex-col gap-y-4 justify-between items-center text-[#474747]'>
            <p>Shipping address</p>
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

            <div className='flex justify-between items-center w-full'>
                <Link href={"/cart"}>
                    <span>&lt;</span>
                    <span>Return to basket</span>
                </Link>
                <button>Continue to shipping</button>
            </div>
        </div>
    )
}

const CountryFlag = () => {
    return (
        <div>&#127463;🇩</div>
    )
}

const SelectCountry = () => {
    const countries = () => options.map(v => <option key={v} value={v}>{v}</option>)

    return (
        <select name="country" id="country">
            <option value="-1">Choose country</option>
            {countries()}
        </select>
    )
}

const options = ["Albania", "Bangladesh", "UK", "USA"]