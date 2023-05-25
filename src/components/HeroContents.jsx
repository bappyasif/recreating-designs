import React from 'react'
import { heroTexts, numFacts, taskInfo } from '../data'

export const HeroContents = () => {
    return (
        <div className='flex justify-between'>
            <div>
                <HeadingTexts />
                <SomeNumbers />
            </div>
            <HeroVisuals />
        </div>
    )
}

const HeroVisuals = () => {
    return (
        <div className='flex'>
            <TaskView />
            <PortraitView />
        </div>
    )
}

const PortraitView = () => {
    return (
        <div>
            <span>elipse one</span>
            <img src="#" alt="portait view" />
            <span>elipse two</span>
        </div>
    )
}

const TaskView = () => {
    const { date, title, meta } = taskInfo
    return (
        <div className='bg-slate-400 h-fit'>
            <div className='px-4 py-2'>
                <RenderTaskTextInfo item={title} />
                <div className='flex justify-between'>
                    <RenderTaskTextInfo item={date} />
                    <RenderTaskMetaData items={meta} />
                </div>
            </div>
            <p className='bg-teal-200 p-2 text-slate-950'>4 subtasks (0/4 completed)</p>
        </div>
    )
}

const RenderTaskMetaData = ({ items }) => {
    const renderItem = () => items?.map((item, idx) => <RenderMetaItem key={idx} item={item} />)
    return (
        <div className='flex gap-2 justify-end'>
            {renderItem()}
        </div>
    )
}

const RenderMetaItem = ({ item }) => {
    const { icon, value } = item;
    return (
        <div>
            <span>{icon}</span>
            <span>{value}</span>
        </div>
    )
}

const RenderTaskTextInfo = ({ item }) => {
    const { name, icon } = item

    return (
        <div>
            <span>{icon}</span>
            <span>{name}</span>
        </div>
    )
}

const SomeNumbers = () => {
    const renderFacts = () => numFacts.map(item => <RenderFact key={item.name} item={item} />)
    return (
        <div className='flex justify-between'>
            {renderFacts()}
        </div>
    )
}

const RenderFact = ({ item }) => {
    const { name, value } = item;

    return (
        <div className='font-extrabold text-4xl'>
            <p className='font-monoton'>{value}</p>
            <p className='font-righteous'>{name}</p>
        </div>
    )
}

const HeadingTexts = () => {
    return (
        <div>
            <TopTexts />
            <p className='font-sans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti commodi, culpa assumenda laborum provident iste quo facere fugiat sint ut alias repudiandae tempora hic sit omnis rem, dolores rerum vitae?</p>
        </div>
    )
}

const TopTexts = () => {
    const renderTexts = () => heroTexts.map(txt => <p>{txt}</p>)
    return (
        <div className='flex flex-col gap-6 font-extrabold font-righteous text-7xl'>
            {renderTexts()}
        </div>
    )
}
