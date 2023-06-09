import React from 'react'
import { Header } from '../components/Header'
import { HeroReusable } from '../components/HeroReusable'
import { BookTable, Perks } from '../components/forHomePage/Perks'
import { Footer } from '../components/Footer'
import { hero } from '../data'
import { AllEvents } from '../components/forAllOtherPages'

export const Events = () => {
    return (
        <div
            className="flex flex-col items-center gap-20"
        >
            <div className="w-full">
                <Header />
                <HeroReusable items={hero} />
            </div>
            {/* <Perks /> */}
            <AllEvents />
            <BookTable />
            <Footer />
        </div>
    )
}
