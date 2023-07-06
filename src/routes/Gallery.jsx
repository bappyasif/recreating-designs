import React from 'react'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { HeroReusable } from '../components/HeroReusable'
import { Showcasing } from '../components/forHomePage/Showcasing'
import { hero } from '../data'
import { FoodsGallery } from '../components/forAllOtherPages'

export const Gallery = () => {
  return (
    <div
      className="flex flex-col items-center gap-20"
    >
      <div className="w-full">
        <Header />
        <HeroReusable items={hero} />
      </div>
      <FoodsGallery />
      <Showcasing />
      <Footer />
    </div>
  )
}
