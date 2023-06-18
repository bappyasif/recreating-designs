import React from 'react'
import { Header } from '../components/Header'
import { RenderSearch } from '../components/Hero'
import { heroItems } from '../data'
import { OurIntro, ReasonsWhy, ShowTeam, SomeInfoWithFigs } from '../components/ForAboutUsPage'
import { Footer } from '../components/Footer'

export const AboutUs = () => {
  return (
    <div
      className='font-serif text-slate-400 px-40 py-4 flex flex-col gap-28'
    >
      <Header />
      <RenderSearch items={heroItems.search} />
      <SomeInfo />
      <ChooseUs />
      <MeetTeam />
      <Footer />
    </div>
  )
}

const SomeInfo = () => {
  return (
    <>
      <OurIntro />
      <SomeInfoWithFigs />
    </>
  )
}


const ChooseUs = () => {
  return (
    <div className='flex flex-col gap-4'>
      <h2>Why Choose Us?</h2>
      <ReasonsWhy />
    </div>
  )
}

const MeetTeam = () => {
  return (
    <div className='flex flex-col gap-4'>
      <p>Meet The Team</p>
      <ShowTeam />
    </div>
  )
}