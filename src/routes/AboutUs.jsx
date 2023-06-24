import React from 'react'
import { Header } from '../components/Header'
import { RenderSearch } from '../components/Hero'
import { heroItems } from '../data'
import { OurIntro, ReasonsWhy, ShowTeam, SomeInfoWithFigs } from '../components/ForAboutUsPage'
import { Footer } from '../components/Footer'

export const AboutUs = () => {
  return (
    <div
      className='font-serif text-slate-400 flex flex-col gap-28'
    >
      <div
        className='pb-9'
        style={{
          backgroundImage: "url('https://source.unsplash.com/random/?Tourism,couple,sights,tourists,greens')",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          objectFit: "contain"
        }}
      >
        <div className='bg-slate-800 fixed w-full z-40 py-2 opacity-80'>
          <Header />
        </div>
        <div className='grid xxs:grid-cols-1 lg:grid-cols-5 mt-40'>
          <RenderSearch items={heroItems.search} />
        </div>
      </div>
      {/* <Header />
      <div className='grid grid-cols-5'>
        <RenderSearch items={heroItems.search} />
      </div> */}
      <div className='xxs:px-2 lg:px-40 flex flex-col gap-6 items-center justify-center'>
        <SomeInfo />
        <ChooseUs />
        <MeetTeam />
      </div>
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
    <div className='flex flex-col items-center gap-16'>
      <h2 className='text-4xl'>Why Choose Us?</h2>
      <ReasonsWhy />
    </div>
  )
}

const MeetTeam = () => {
  return (
    <div className='flex flex-col gap-4 items-center'>
      <p className='text-4xl'>Meet The Team</p>
      <ShowTeam />
    </div>
  )
}