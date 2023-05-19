import React from 'react'
import { RenderDropdowns } from './ToursHero'
import { HiDocumentRemove } from 'react-icons/hi'

export const PassangerInfo = () => {
    return (
        <section>
            <div>Passanger Informations</div>
            <PerPassenger />
            <PerPassenger />
        </section>
    )
}

const PerPassenger = () => {
    return (
        <div>
            <NameSection />
            <ExtraSection />
        </div>
    )
}

const ExtraSection = () => {
    return (
        <div>
            <h2>Extras</h2>
            <div className='flex gap-4'>
                <LeftSide />
                <RightSide />
            </div>
        </div>
    )
}

const RightSide = () => {
    return (
        <div>
            <div>
                <p>Single supplement</p>
                <p>$250</p>
            </div>
            <button>ADD</button>
        </div>
    )
}

const LeftSide = () => {
    return (
        <div>
            <div>
                <div>
                    <p>Lunch for all days</p>
                    <p>$250</p>
                </div>
                <HiDocumentRemove />
            </div>
            <RenderDropdowns />
        </div>
    )
}

const NameSection = () => {
    return (
        <div>
            <p>Passanger (Adult)</p>
            <div className='flex gap-2'>
                <input type="text" placeholder='first name' />
                <input type="text" placeholder='last name' />
            </div>
        </div>
    )
}