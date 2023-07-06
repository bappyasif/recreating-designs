import React from 'react'
import { Header } from '../components/Header'
import { HeroReusable } from '../components/HeroReusable'
import { PopularDesserts, PopularFoods } from '../components/forHomePage/PopularFoods'
import { Footer } from '../components/Footer'
import { hero } from '../data'

export const Menu = () => {
    return (
        <div
            className="flex flex-col items-center gap-20"
        >
            <div className="w-full">
                <Header />
                <HeroReusable items={hero} />
            </div>
            <PopularFoods />
            <PopularDesserts />
            <Footer />
        </div>
    )
}
