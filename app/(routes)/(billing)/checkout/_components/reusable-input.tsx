import React from 'react'

export const ReusableInput = ({name, placeholder, type}: {name:string,  placeholder: string, type: string}) => {
  return (
    <section className='text-[#474747]'>
        <p>{name}</p>
        <input type={type} placeholder={placeholder} className='text-2xl px-0.5 bg-transparent placeholder:text-slate-950 outline-none w-[20rem]' />
    </section>
  )
}

export const ReusableTextarea = ({name}: {name: string}) => {
  return (
    <section className='text-[#474747]'>
        <p>{name}</p>
        <textarea name="address" id="address" autoComplete='address' maxLength={299}></textarea>
    </section>
  )
}

export const ReusableTextarea2 = ({name}: {name: string}) => {
  return (
    <section className='text-[#474747]'>
        <p>{name}</p>
        <textarea name="address2" id="address2" autoComplete='address-line2' maxLength={299}></textarea>
    </section>
  )
}
