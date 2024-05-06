"use client"

import React, { useRef } from 'react'
import { HeroComponent } from './_components/hero-component'
import { ProductBasket } from './_components/product-basket'
import { ProductSlider } from './_components/product-slider'
import useInViewPort, { useForTruthToggle } from '@/hooks'
import { ReUsableProductSlider } from '../_components/reusable-product-slider'
import { ReUsableProductBasket } from '../_components/reusable-basket'
import { ReUsableHeroComponent } from '../_components/reuseable-hero-component'
import { FleeceProds } from './_components/fleece-prods'

const MensCollectionPage = () => {
  // const ref1 = useRef(null)
  // const inViewport = useInViewPort(ref1, { threshold: 1 })

  // const ref2 = useRef(null)
  // const inViewport2 = useInViewPort(ref2, { threshold: 1 })

  // console.log(inViewport, inViewport2, "chcckcjkck")

  // const { handleFalsy, handleTruthy, isTrue } = useForTruthToggle()
  

  return (
    <div className='flex flex-col gap-y-10 py-10'>
      {/* <HeroComponent /> */}
      <ReUsableHeroComponent forWomen={false} />

      <div 
        // className={`${inViewport ? "opacity-100" : "opacity-40"} flex flex-col gap-y-6`} 
        className={`flex flex-col gap-y-6`} 
        // ref={ref1}
      >
        <ReUsableProductSlider headerText='New arrivals' prods='mens' />
        <ReUsableProductSlider headerText='Merino layers' prods='mens' />
        {/* <ProductSlider headerText='New arrivals' />
        <ProductSlider headerText='Merino layers' /> */}
        {/* <ProductSlider headerText='Shirts & tops' />
        <ProductSlider headerText='Jeans & trousers' /> */}
      </div>

      {/* <ProductBasket /> */}
      <ReUsableProductBasket prods='mens' />

      <FleeceProds />

      <div className='flex flex-col gap-y-6'>
        {/* <ProductSlider headerText='Underwear & socks' /> */}
        {/* <ProductSlider headerText='Cycle collection' />
        <ProductSlider headerText='Run collection' /> */}
        <ReUsableProductSlider headerText='Cycle collection' prods='mens' />
        <ReUsableProductSlider headerText='Run collection' prods='mens' />
      </div>
    </div>
  )
}

export default MensCollectionPage