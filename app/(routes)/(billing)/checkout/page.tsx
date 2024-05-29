"use client"

import React, { useState } from 'react'
import { Basket } from './_components/basket'
import { Brand } from '../../_components/brand'
import { Sections } from './_components/sections'
import { Express } from './_components/express'
import { ContactForm } from './_components/contact'
import { ShippingMethod } from './_components/shipping'
import { Information } from './_components/information'
import { PaymentDetails } from './_components/payment'

const CheckoutPage = () => {
  const [sectionViewing, setSectionViewing] = useState("Information")

  const updateSectionViewing = (name: string) => setSectionViewing(name)

  return (
    <div className='min-h-screen flex justify-between'>

      <div className='w-1/2 bg-[#f1f1f1] p-4 flex flex-col gap-y-6'>

        <div className='flex flex-col gap-y-6 items-center justify-end'>
          <Brand />
          <Sections updateSection={updateSectionViewing} viewing={sectionViewing} />
          {/* <Express /> */}
        </div>

        {sectionViewing === "Information" ? <ShippingInformation updateSection={updateSectionViewing} /> : null}

        {sectionViewing === "Shipping" ? <ShippingMethod updateSection={updateSectionViewing} /> : null}

        {sectionViewing === "Payment" ? <PaymentDetails /> : null}
      </div>

      <Basket />
    </div>
  )
}

const ShippingInformation = ({updateSection}: {updateSection: (d: string) => void}) => {
  return (
    <div className='flex flex-col gap-y-6 justify-end w-3/4 self-end'>
      <Express />
      <ContactForm />
      <Information updateSection={updateSection} />
    </div>
  )
}

export default CheckoutPage