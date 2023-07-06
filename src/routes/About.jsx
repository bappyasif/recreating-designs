import React from 'react'
import { Footer } from '../components/Footer'
import { BookTable } from '../components/forHomePage/Perks'
import { hero } from '../data'
import { HeroReusable } from '../components/HeroReusable'
import { Header } from '../components/Header'
import { ChooseUs, OurChefs } from '../components/forAllOtherPages'

export const About = () => {
  return (
    <div
      className="flex flex-col items-center gap-20"
    >
      <div className="w-full">
        <Header />
        <HeroReusable items={hero} />
      </div>
      <ChooseUs />
      <OurChefs />
      <BookTable />
      <Footer />
    </div>
  )
}
