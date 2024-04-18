import React from 'react'
import { HeroComponent } from './_components/hero-component'
import { ProductSlider } from './_components/product-slider'
import { ProductBasket } from './_components/product-basket'

const MensCollectionPage = () => {
  return (
    <div className='flex flex-col gap-y-10 py-10'>
      <HeroComponent />

      <div className='flex flex-col gap-y-6'>
        <ProductSlider headerText='New arrivals' />
        <ProductSlider headerText='Merino layers' />
        <ProductSlider headerText='Shirts & tops' />
        <ProductSlider headerText='Jeans & trousers' />
      </div>

      <ProductBasket />

      <div className='flex flex-col gap-y-6'>
        <ProductSlider headerText='Underwear & socks' />
        <ProductSlider headerText='Cycle collection' />
        <ProductSlider headerText='Run collection' />
      </div>
    </div>
  )
}

export default MensCollectionPage