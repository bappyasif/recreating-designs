import React, { useState } from 'react'
import { codes } from '../data'

export const BookingDetails = () => {
    return (
        <section>
            <div className='text-4xl'>Booking Details</div>
            <NameInfo />
            <ContactInfo />
            <AddressInfo />
        </section>
    )
}

const AddressInfo = () => {
    return (
        <div className='flex flex-col gap-4'>
            <LineOne />
            <LineTwo />
            <PromoCode />
        </div>
    )
}

const PromoCode = () => {
    return (
        <div>
            <p className='text-2xl py-2'>Promotional / Gift card code</p>
            <div className='flex gap-4'>
                <AddressInput />
                <button className='bg-yellow-600 text-xl'>Apply</button>
            </div>
        </div>
    )
}

const LineTwo = () => {
    return (
        <div className='flex gap-2'>
            <AddressInput placeholderText={"City Name"} />
            <AddressInput placeholderText={"Country Name"} />
        </div>
    )
}

const LineOne = () => {
    return (
        <div className='flex gap-2'>
            <AddressInput placeholderText={"House, Road Numbers"} />
            <AddressInput width="w-24" placeholderText={"Po Box #"} />
            <AddressInput placeholderText={"Police Station, Area Name"} />
        </div>
    )
}

const AddressInput = ({width, placeholderText}) => {
    return (
        <input className={`${width ? width : ""} px-2 text-xl py-1`} type='text' placeholder={placeholderText || 'type here'} />
    )
}

const ContactInfo = () => {
    return (
        <div className='my-2 text-xl'>
            <p className='py-2 text-2xl'>Contacts</p>
            <div className='flex gap-2'>
                <RenderCodes />
                <input className='px-2 py-0 w-1/6' type="tel" name="tele" id="" placeholder='tele number' />
                <input className='py-0 px-2' type="email" name="email" id="" placeholder='email here' />
            </div>
        </div>
    )
}

const RenderCodes = () => {
    const renderCodes = () => codes.map(item => item?.name.length < 12 && <option className='flex gap-2 w-full'><span className='mr-2'>{item.name}</span><span>{item.code}</span></option>)
    return (
        <select className='w-1/12 py-2 px-1' name="country code" id="">
            {renderCodes()}
        </select>
    )
}

const NameInfo = () => {
    return (
        <div>
            <p className='text-2xl py-2'>Primary Passenger Info</p>
            <div className='flex gap-2'>
                <input className='text-2xl py-2' type="text" placeholder='first name' />
                <input className='text-2xl py-2' type="text" placeholder='last name' />
            </div>
        </div>
    )
}