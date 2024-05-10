import React from 'react'
import { Header } from '../_components/header'
import { Footer } from '../_components/footer'

const MiscRoutesLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
        <Header />
        {children}
        <Footer />
    </div>
  )
}

export default MiscRoutesLayout