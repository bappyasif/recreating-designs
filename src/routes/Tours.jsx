import React from 'react'
import { ToursHero } from '../components/ToursHero'
import { PickupInfo } from '../components/PickupInfo'
import { PassangerInfo } from '../components/PassangerInfo'
import { BookingDetails } from '../components/BookingDetails'
import { OrderSummary } from '../components/OrderSummary'
import { PaymentInfo } from '../components/PaymentInfo'

export const Tours = () => {
  return (
    <main className='py-2'>
      <ToursHero />
      <div className='w-4/6 m-auto my-4 bg-gray-400 flex flex-col gap-2 items-center'>
        <PickupInfo />
        <PassangerInfo />
        <BookingDetails />
        <OrderSummary />
        <PaymentInfo />
      </div>
    </main>
  )
}
