import React from 'react'
import KeyFeatures from './KeyFeatures'
import Testimonials from './Testimonials'

const FeaturesContents = () => {
  return (
    <div className='flex flex-col gap-16'>
        <KeyFeatures />
        <Testimonials />
    </div>
  )
}

export default FeaturesContents