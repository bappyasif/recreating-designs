"use client"

import React from 'react'
import { ReUsableProductSlider } from '../_components/reusable-product-slider'
import { ReUsableProductBasket } from '../_components/reusable-basket'
import { ReUsableHeroComponent } from '../_components/reuseable-hero-component'

export const WomensCollectionPage = () => { 

  return (
    <div className='flex flex-col gap-y-10 py-10'>
      <ReUsableHeroComponent forWomen={true} />

      <div 
        className={`flex flex-col gap-y-6`} 
      >
        <ReUsableProductSlider headerText='New arrivals' prods='womens' />
        <ReUsableProductSlider headerText='Merino layers' prods='womens' />
      </div>

      <ReUsableProductBasket prods='womens' />

      <div className='flex flex-col gap-y-6'>
        <ReUsableProductSlider headerText='Cycle collection' prods='womens' />
        <ReUsableProductSlider headerText='Run collection' prods='womens' />
      </div>
    </div>
  )
}

export default WomensCollectionPage