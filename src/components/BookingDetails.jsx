import React, { useState } from 'react'
import { codes } from '../data'

export const BookingDetails = () => {
    return (
        <section className='mt-2 w-full flex flex-col p-2 bg-slate-600'>
            <div className='text-4xl'>Booking Details</div>
            <NameInfo />
            <ContactInfo />
            <AddressInfo />
            {/* <p className='w-full h-1 bg-slate-400 mt-6 mb-0'></p> */}
        </section>
    )
}

const AddressInfo = () => {
    return (
        <div className='flex flex-col gap-2 w-full'>
            <LineOne />
            <LineTwo />
            <PromoCode />
        </div>
    )
}

const PromoCode = () => {
    return (
        <div className='mb-4'>
            <p className='text-2xl py-2'>Promotional / Gift card code</p>
            <div className='flex gap-4 px-4'>
                <AddressInput placeholderText={"Promo Code Insert Here"} />
                <button className='bg-yellow-600 text-xl'>Apply</button>
            </div>
        </div>
    )
}

const LineTwo = () => {
    return (
        <div className='flex gap-2 px-4'>
            <AddressInput width={"w-full"} placeholderText={"City Name"} />
            <AddressInput width={"w-full"} placeholderText={"Country Name"} />
        </div>
    )
}

const LineOne = () => {
    return (
        <div className='flex gap-2 w-full justify-between px-4'>
            <AddressInput width={"w-full"} placeholderText={"House, Road Numbers"} />
            <AddressInput width="w-40" placeholderText={"Po Box #"} />
            <AddressInput width={"w-full"} placeholderText={"Police Station, Area Name"} />
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
        <div className='my-2 text-xl w-full'>
            <p className='py-2 text-2xl'>Contacts</p>
            <div className='flex gap-2 justify-between w-full px-4'>
                <RenderCodes />
                <input className='px-2 py-0 w-full' type="tel" name="tele" id="" placeholder='tele number' />
                <input className='py-0 px-2 w-full' type="email" name="email" id="" placeholder='email here' />
            </div>
        </div>
    )
}

const RenderCodes = () => {
    const renderCodes = () => codes.map(item => item?.name.length < 12 && <option className='flex gap-2 w-full'><span className='mr-2'>{item.name}</span><span>{item.code}</span></option>)
    return (
        <select className='w-2/6 py-2 px-1' name="country code" id="">
            {renderCodes()}
        </select>
    )
}

const NameInfo = () => {
    return (
        <div className='w-full'>
            <p className='text-2xl py-2'>Primary Passenger Info</p>
            <div className='flex gap-2 px-4'>
                <input className='text-2xl py-2 w-full' type="text" placeholder='first name' />
                <input className='text-2xl py-2 w-full' type="text" placeholder='last name' />
            </div>
        </div>
    )
}