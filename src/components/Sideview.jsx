import React from 'react'
import {BiUpArrow} from "react-icons/bi"
import { GiFireWave, GiSpiderWeb } from 'react-icons/gi'

export const Sideview = () => {
  return (
    <div className='xxs:w-full md:w-1/4 bg-slate-950 px-6 
    flex flex-col justify-start gap-14'
    >
        <IntroView />
        <HeroView />
        <TidbitsView />
    </div>
  )
}

const IntroView = ({item}) => {
    // const {text, icon, brand} = item
    return (
        <div className='my-6 flex flex-col gap-6 bg-transparent'>
            <p><BiUpArrow /></p>
            <p>Ea harum eius laboriosam rerum, at beatae voluptatem veritatis nulla odio ex.</p>
            <p
                className='font-monoton text-2xl'
                style={{ animation: "6s ease 2s alternate infinite flipTxt" }}
            >
                ABCD
            </p>
        </div>
    )
}

const HeroView = () => {
    return (
        <div className='my-6 px-6 py-4 bg-slate-400 h-1/2'>
            <span className='text-black text-center flex justify-center'><GiFireWave size={"15.18em"} /></span>
            <p className='text-4xl pt-8 text-center text-black'>Productive</p>
        </div>
    )
}

const TidbitsView = () => {
    return (
        <div className='flex flex-col self-end gap-0
         bg-slate-400 text-slate-800 px-4 py-2 h-full'>
            <FirstExcerpt />
            <SecondExcerpt />
        </div>
    )
}

const SecondExcerpt = () => {
    return (
        <div className='flex flex-col gap-6'>
            <h2 className='font-bold font-2xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </h2>
            <p>Aperiam tempore doloribus reprehenderit adipisci voluptas qui nostrum soluta quam? Molestias natus quasi consequuntur ullam beatae mollitia?</p>
            <img className='rounded-sm h-32' src="https://source.unsplash.com/random/?free&easy&tech" alt="random picture from unsplash" />
        </div>
    )
}

const FirstExcerpt = () => {
    return (
        <div className='flex flex-col gap-6'>
            <h2 className='font-bold font-2xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h2>
            <p>Eligendi repudiandae voluptas saepe accusantium. Aperiam tempore doloribus reprehenderit adipisci voluptas qui nostrum soluta quam?</p>
            <img className='rounded-sm h-32' src="https://source.unsplash.com/random/?solo&talk&tech" alt="random picture from unsplash" />
        </div>
    )
}
