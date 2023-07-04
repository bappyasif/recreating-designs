import React from 'react'
import { Footer } from '../components/Footer'
import { BookTable } from '../components/forHomePage/Perks'
import { HeroReusable } from '../components/HeroReusable'
import { Header } from '../components/Header'
import { hero } from '../data'
import { RenderContacts } from '../components/forAllOtherPages'

export const Contact = () => {
    return (
        <div
            className="flex flex-col items-center gap-20"
        >
            <Header />
            <HeroReusable items={hero} />
            <RenderContacts />
            <BookTable />
            <Footer />
        </div>
    )
}
