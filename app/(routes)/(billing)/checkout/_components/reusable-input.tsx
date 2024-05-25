import React from 'react'

export const ReusableInput = ({name, placeholder, type}: {name:string,  placeholder: string, type: string}) => {
  return (
    <section className='text-[#474747]'>
        <p>{name}</p>
        <input type={type} placeholder={placeholder} className='text-2xl px-0.5 bg-transparent placeholder:text-slate-950 outline-none w-[20rem]' required />
    </section>
  )
}

export const ReusableTextarea = ({name}: {name: string}) => {
  return (
    <section className='text-[#474747] w-full'>
        <p>{name}</p>
        <textarea name="address" id="address" autoComplete='address' maxLength={299} required className='w-full bg-transparent border border-slate-800 rounded'></textarea>
    </section>
  )
}

export const ReusableTextarea2 = ({name}: {name: string}) => {
  return (
    <section className='text-[#474747] w-full'>
        <p>{name}</p>
        <textarea name="address2" id="address2" autoComplete='address-line2' maxLength={299} className='w-full bg-transparent border border-slate-800 rounded'></textarea>
    </section>
  )
}
