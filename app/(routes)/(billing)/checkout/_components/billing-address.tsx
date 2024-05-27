import React, { FormEvent, useState } from 'react'
import { ReusableInput, ReusableTextarea, ReusableTextarea2, SelectCountry } from './reusables'

export const BillingAddress = () => {
    const [selected, setSelected] = useState("")
    const updateSelected = (d: string) => setSelected(d)
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    return (
        <section className='space-y-3'>
            <SameAddress updateSelected={updateSelected} />
            <DifferentAddress updateSelected={updateSelected} />
            {
                selected === "different"
                    ? <BillingAddInfo />
                    : null
            }
        </section>
    )
}

const BillingAddInfo = () => {
    return (
        <div className='flex flex-col gap-y-4 pt-4'>
            <SelectCountry />
            <div className='flex justify-between items-center w-full gap-x-10'>
                <ReusableInput name='First name' placeholder='First name' type='text' />
                <ReusableInput name='Last name' placeholder='Last name' type='text' />
            </div>
            {/* <ReusableInput name='Address' placeholder='Address' type='address' /> */}
            <ReusableTextarea name='Address' />

            <ReusableTextarea2 name='Apartment, suite, etc. (optional)' />

            <div className='flex justify-between items-center w-full gap-x-10'>
                <ReusableInput name='City' placeholder='City' type='text' />
                <ReusableInput name='Postal code' placeholder='Postal code' type='text' />
            </div>
            <div className='flex justify-between items-center w-full gap-x-10'>
                <ReusableInput name='Phone' placeholder='Phone number' type='telephone' />
                <div className='w-60 text-center border border-slate-600 py-5 rounded-md'>&#127463;🇩</div>
            </div>
        </div>
    )
}

const DifferentAddress = ({ updateSelected }: { updateSelected: (d: string) => void }) => {
    return (
        <label htmlFor="da" className='flex gap-x-2'
            onClick={e => updateSelected("different")}
        >
            <input name='billing-type' id='da' type='radio'
            />
            Use a different billing address
        </label>
    )
}

const SameAddress = ({ updateSelected }: { updateSelected: (d: string) => void }) => {
    return (
        <label htmlFor="sa" className='flex gap-x-2'
            onClick={e => updateSelected("same")}
        >
            <input name='billing-type' id='sa' type='radio'
            />
            Same as shipping address
        </label>
    )
}

// export const BillingAddress = () => {
//     const [selected, setSelected] = useState("")
//     const updateSelected = (d: string) => setSelected(d)
//     const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
//         e.preventDefault()
//     }

//     return (
//         <form action="" onSubmit={handleSubmit}>
//             <SameAddress updateSelected={updateSelected} />
//             <DifferentAddress updateSelected={updateSelected} />
//             {
//                 selected === "different"
//                     ? <BillingAddInfo />
//                     : null
//             }
//         </form>
//     )
// }
