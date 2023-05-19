import React from 'react'
import { HiChevronDown } from 'react-icons/hi'

export const ToursHero = () => {
    return (
        <section>
            <HeroInfo />
            <div className='flex justify-between'>
                <RenderDropdowns />
                <RenderDropdowns />
                <RenderDropdowns />
            </div>
        </section>
    )
}

const HeroInfo = () => {
    return (
        <div>
            <h1 className='font-righteous text-center'>Kingdom Of Volcanoes And Glaciers</h1>
            <img
                src="../src/assets/tHero.jpg"
                alt="another scenic picture of iceland with mountains and glaciers"
                className='h-96 w-full'
            />
            <div className='text-center text-2xl font-serif font-bold'>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias officiis aliquam eum aperiam, facilis recusandae</p>
                <p>laboriosam velit doloribus nemo quia dolore, vitae qui excepturi corporis iure nulla cumque repudiandae ad?</p>
            </div>
        </div>
    )
}

export const RenderDropdowns = () => {
    return (
        <div className='flex gap-1'>
            <div className='w-full'>
                <p>Select type</p>
                <select name="test" id=""></select>
            </div>
            <HiChevronDown />
        </div>
    )
}