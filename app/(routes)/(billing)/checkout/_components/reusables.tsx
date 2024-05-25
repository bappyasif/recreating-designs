import Link from 'next/link'
import React from 'react'

export const ReusableInput = ({ name, placeholder, type }: { name: string, placeholder: string, type: string }) => {
  return (
    <section className='text-[#474747]'>
      <p>{name}</p>
      <input type={type} placeholder={placeholder} className='text-2xl px-0.5 bg-transparent placeholder:text-slate-950 outline-none w-[20rem]' required />
    </section>
  )
}

export const ReusableTextarea = ({ name }: { name: string }) => {
  return (
    <section className='text-[#474747] w-full'>
      <p>{name}</p>
      <textarea name="address" id="address" autoComplete='address' maxLength={299} required className='w-full bg-transparent border border-slate-800 rounded'></textarea>
    </section>
  )
}

export const ReusableTextarea2 = ({ name }: { name: string }) => {
  return (
    <section className='text-[#474747] w-full'>
      <p>{name}</p>
      <textarea name="address2" id="address2" autoComplete='address-line2' maxLength={299} className='w-full bg-transparent border border-slate-800 rounded'></textarea>
    </section>
  )
}

export const ReusableActionButtons = ({ href = "", returnTo, continueTo, radSel }: { href: string, returnTo: string, continueTo: string, radSel?: string }) => {
  return (
    <div className='flex justify-between items-center w-full'>
      <Link href={href} className='flex gap-x-4 items-center text-xl'>
        <span className='text-2xl'>&lt;</span>
        <span>Return to {returnTo}</span>
      </Link>
      {
        radSel === "paypal"
          ? <button type='submit' className='p-4 w-80 bg-slate-400 rounded text-xl'>Pay with PayPal</button>
          : radSel === "cc"
            ? <button type='submit' className='p-4 w-80 bg-slate-400 rounded text-xl'>Pay now</button>
            : <button type='button' className='p-4 w-80 bg-slate-400 rounded text-xl'>Continue to {continueTo}</button>
      }
      {/* <button type='submit' className='p-4 w-80 bg-slate-400 rounded text-xl'>Continue to {continueTo}</button> */}
    </div>
  )
}

export const ShippingInfo = ({ type, values }: { type: string, values: string }) => {
  return (
    <div
      // className="flex justify-between items-center gap-x-6 min-h-16 py-2"
      className="grid grid-cols-4 justify-between items-center gap-x-6 min-h-16 py-2"
    >
      <span className="">{type}</span>
      <span className="col-span-2">{values}</span>
      {
        type.includes("Shipping")
          ? null
          : <Link className=" text-center underline" href={""}>Change</Link>
      }
      {/* <Link className="w-1/4 text-center underline" href={""}>Change</Link> */}
    </div>
  )
}

export const SelectCountry = () => {
  const options = ["Albania", "Bangladesh", "UK", "USA"]

  const countries = () => options.map(v => <option key={v} value={v}>{v}</option>)

  return (
      <select className='w-full py-4 border border-slate-800 rounded' name="country" id="country" required>
          <option value="-1">Choose country</option>
          {countries()}
      </select>
  )
}