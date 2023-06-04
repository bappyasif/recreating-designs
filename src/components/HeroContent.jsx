import React from 'react'
import { heroItems } from '../data'

const HeroContent = () => {
    const { numbers, partners, texts } = heroItems

    return (
        <div className='flex flex-col gap-9'>
            <div className='flex flex-col gap-9 w-2/4'>
                <RenderTexts item={texts} />
                <RenderFigs items={numbers} />
            </div>
            <RenderPartners items={partners} />
        </div>
    )
}

const RenderPartners = ({ items }) => {
    const renderItems = () => items?.map((item, idx) => <RenderPartner key={idx} item={item} />)

    return (
        <div className='flex flex-col gap-9'>
            <h2 className='text-4xl'>Trusted by more than <span className='text-blue-600'>50000+</span> companies world wide</h2>
            <div className='flex justify-between'>
                {renderItems()}
            </div>
        </div>
    )
}

const RenderPartner = ({ item }) => {
    const { icon } = item

    return (
        <div className='text-6xl'>
            {icon}
        </div>
    )
}

const RenderFigs = ({ items }) => {
    const renderItems = () => items.map(item => <RenderFig key={item.figCap} item={item} />)

    return (
        <div className='flex gap-4 text-3xl'>
            {renderItems()}
        </div>
    )
}

const RenderFig = ({ item }) => {
    const { figTxt, figCap } = item;

    return (
        <div className='flex flex-col gap-2'>
            <span>{figTxt}</span>
            <span className='text-xl'>{figCap}</span>
        </div>
    )
}

const RenderTexts = ({ item }) => {
    const { title, subtext, btnTxt } = item;

    return (
        <div className='flex flex-col gap-6'>
            <h2 className='text-4xl w-2/4'>{title}</h2>
            <div className='text-lg w-2/3'>{subtext}</div>
            <button className='w-fit p-0 px-6 py-1 bg-slate-800'>{btnTxt}</button>
        </div>
    )
}

export default HeroContent