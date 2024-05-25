import React from 'react'
import { Basket } from './_components/basket'
import { Brand } from '../../_components/brand'
import { Sections } from './_components/sections'
import { Express } from './_components/express'
import { ContactForm } from './_components/contact'
import { ShippingMethod } from './_components/shipping'
import { Information } from './_components/information'

const CheckoutPage = () => {
  return (
    <div className='min-h-screen flex justify-between'>

      <div className='w-1/2 bg-[#f1f1f1] space-y-6 p-4'>
        <div className='flex flex-col gap-y-6 justify-center items-center w-full'>
          <Brand />
          <Sections />
          {/* <Express /> */}
        </div>

        {/* <ShippingInformation /> */}

        <ShippingMethod />

        {/* <Shipping /> */}
      </div>

      <Basket />
    </div>
  )
}

const ShippingInformation = () => {
  return (
    <div className='flex flex-col gap-y-6'>
      <Express />
      <ContactForm />
      <Information />
    </div>
  )
}

export default CheckoutPage