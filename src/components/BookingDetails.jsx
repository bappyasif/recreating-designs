import React from 'react'

export const BookingDetails = () => {
    return (
        <section>
            <div>BookingDetails</div>
            <NameInfo />
            <ContactInfo />
            <AddressInfo />
        </section>
    )
}

const AddressInfo = () => {
    return (
        <div>
            <LineOne />
            <LineTwo />
            <PromoCode />
        </div>
    )
}

const PromoCode = () => {
    return (
        <div>
            <p>Promotional / Gift card code</p>
            <div>
                <AddressInput />
                <button>Apply</button>
            </div>
        </div>
    )
}

const LineTwo = () => {
    return (
        <div className='flex gap-2'>
            <AddressInput />
            <AddressInput />
        </div>
    )
}

const LineOne = () => {
    return (
        <div className='flex gap-2'>
            <AddressInput />
            <AddressInput />
            <AddressInput />
        </div>
    )
}

const AddressInput = () => {
    return (
        <input type='text' placeholder='type here' />
    )
}

const ContactInfo = () => {
    return (
        <div>
            <p>Contacts</p>
            <select name="counytry code" id=""></select>
            <input type="tel" name="tele" id="" />
            <input type="email" name="email" id="" />
        </div>
    )
}

const NameInfo = () => {
    return (
        <div>
            <p>Primary Passenger Info</p>
            <div className='flex gap-2'>
                <input type="text" placeholder='first name' />
                <input type="text" placeholder='last name' />
            </div>
        </div>
    )
}