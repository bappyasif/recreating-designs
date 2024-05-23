import React from 'react'
import { Basket } from './_components/basket'
import { Brand } from '../../_components/brand'
import { Sections } from './_components/sections'
import { Express } from './_components/express'
import { ContactForm } from './_components/contact'
import { Shipping } from './_components/shipping'

const CheckoutPage = () => {
  return (
    <div className='min-h-screen flex justify-between'>
      <div className='w-1/2 bg-[#f1f1f1]'>
        <Brand />
        <Sections />
        <Express />
        <ContactForm />
        <Shipping />
      </div>
      <Basket />
    </div>
  )
}

export default CheckoutPage