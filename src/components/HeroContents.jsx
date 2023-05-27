import React from 'react'
import { heroTexts, numFacts, taskInfo } from '../data'
import imgSrc from "../assets/ladyLooking.jpg"

export const HeroContents = () => {
    return (
        <div className='flex justify-between gap-6 px-4 relative'>
            <div className='w-2/4 flex flex-col justify-center px-16' style={{minHeight: "540px"}}>
                <HeadingTexts />
                <SomeNumbers />
            </div>
            <HeroVisuals />
        </div>
    )
}

const HeroVisuals = () => {
    return (
        <div className='flex items-center absolute right-20'>
            <TaskView />
            <PortraitView />
        </div>
    )
}

const PortraitView = () => {
    return (
        <div className='m-2 w-full'>
            <img className='rounded' src={imgSrc} alt="portait view" />
        </div>
        // <div className='flex justify-between gap-2'>
        //     <span className='block h-60 w-40 float-left bg-red-600 text-white' style={{clipPath: "ellipse(20px 50px at right)"}}></span>
        //     <span className='block h-60 w-40 float-left text-white' style={{shapeOutside: "ellipse(20px 50px at right)"}}></span>
        //     <img src="../assets/ladyLooking.jpg" alt="portait view" />
        //     <img className='rounded w-full' src={imgSrc} alt="portait view" />
        //     <span>elipse two</span>
        // </div>
    )
}

const TaskView = () => {
    const { date, title, meta } = taskInfo
    return (
        <div className='bg-slate-400 h-fit w-full rounded-lg opacity-60'>
            <div className='px-4 py-4 h-28 flex flex-col justify-around'>
                <RenderTaskTextInfo item={title} />
                <div className='flex justify-between w-full'>
                    <RenderTaskTextInfo item={date} />
                    <RenderTaskMetaData items={meta} />
                </div>
            </div>
            <p className='bg-teal-200 p-4 text-slate-950 rounded-lg'>4 subtasks (0/4 completed)</p>
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
        <div className='flex gap-2 items-center'>
            <span>{icon}</span>
            <span>{value}</span>
        </div>
    )
}

const RenderTaskTextInfo = ({ item }) => {
    const { name, icon } = item

    return (
        <div className='flex gap-4 items-center'>
            <span>{icon}</span>
            <span>{name}</span>
        </div>
    )
}

const SomeNumbers = () => {
    const renderFacts = () => numFacts.map(item => <RenderFact key={item.name} item={item} />)
    return (
        <div className='flex justify-between my-6'>
            {renderFacts()}
        </div>
    )
}

const RenderFact = ({ item }) => {
    const { name, value } = item;

    return (
        <div className='font-extrabold text-4xl'>
            <p className='font-monoton text-transparent bg-clip-text bg-gradient-to-br from-blue-200 to-lime-800'>{value}</p>
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
    const renderTexts = () => heroTexts.map(txt => <p className='text-transparent bg-clip-text bg-gradient-to-tr from-slate-200 to-blue-800' key={txt}>{txt}</p>)
    return (
        <div className='flex flex-col gap-6 font-extrabold font-righteous text-7xl'>
            {renderTexts()}
        </div>
    )
}