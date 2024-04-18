import React from 'react'
import { ShippingAlert } from '../_components/shipping-alert'
import { Header } from '../_components/header'
import { Footer } from '../_components/footer'

const RoutesLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
      <ShippingAlert />
      <Header />
        {children}
      <Footer />
    </div>
  )
}

export default RoutesLayout