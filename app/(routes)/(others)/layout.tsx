import React from 'react'
import { Header } from '../_components/header'
import { Footer } from '../_components/footer'
import { ShippingAlert } from '../_components/shipping-alert'

const OthersRoutesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='bg-[#ffffff] text-[#474747]'>
      <ShippingAlert />
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default OthersRoutesLayout