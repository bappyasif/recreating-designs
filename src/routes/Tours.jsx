import React from 'react'
import { ToursHero } from '../components/ToursHero'
import { PickupInfo } from '../components/PickupInfo'
import { PassangerInfo } from '../components/PassangerInfo'
import { BookingDetails } from '../components/BookingDetails'
import { OrderSummary } from '../components/OrderSummary'
import { PaymentInfo } from '../components/PaymentInfo'

export const Tours = () => {
  return (
    <main>
      <ToursHero />
      <div className='w-5/6 m-auto'>
        <PickupInfo />
        <PassangerInfo />
        <BookingDetails />
      </div>
      <OrderSummary />
      <PaymentInfo />
    </main>
  )
}
