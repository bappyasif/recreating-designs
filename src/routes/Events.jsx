import React from 'react'
import { Header } from '../components/Header'
import { HeroReusable } from '../components/HeroReusable'
import { BookTable, Perks } from '../components/forHomePage/Perks'
import { Footer } from '../components/Footer'
import { hero } from '../data'

export const Events = () => {
    return (
        <div
            className="flex flex-col items-center gap-20"
        >
            <Header />
            <HeroReusable items={hero} />
            <Perks />
            <BookTable />
            <Footer />
        </div>
    )
}
