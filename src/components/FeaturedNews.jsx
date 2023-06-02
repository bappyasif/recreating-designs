import React from 'react'
import { newsIcons, newsMenu } from '../data'
import { GiPlanetCore, GiRingedPlanet, GiStoneSphere } from "react-icons/gi"

export const FeaturedNews = () => {
    return (
        <div
            className='bg-slate-400 text-black px-4'
        style={{maxHeight: "629px"}}
        >
            <NewsMenu />
            <FeaturedArticle />
        </div>
    )
}

const FeaturedArticle = () => {
    return (
        <div className='flex flex-col my-2'>
            <RenderArticleView />
            <RenderMenuNavFilters />
        </div>
    )
}

const RenderMenuNavFilters = () => {
    const renderIcons = () => newsIcons.map((item, idx) => <span className='outline outline-1 outline-blue-400 p-2 rounded-lg' key={idx}>{item.icon}</span>)

    return (
        <div className='my-4 flex justify-between items-baseline'>
            <h2 className='text-4xl'>New Features..</h2>
            <div className='flex gap-4 items-baseline justify-end text-4xl bg-slate-600 px-4 py-2 mx-2 opacity-80 rounded-lg'>
                {renderIcons()}
            </div>
        </div>
    )
}

const RenderArticleView = () => {
    return (
        <div className='flex flex-col gap-2'>
            <div className='flex relative'>
                <div style={{height: "366px", position: "relative"}}>
                    <div 
                        className='flex items-center self-center absolute left-2/4'
                        style={{left: "121px"}}
                    >
                        <OrbitalEen />
                        <OrbitalTwee />
                    </div>
                </div>
                <div
                    className='absolute right-0 text-5xl self-center
                    w-2/4 flex flex-col gap-4'
                >
                    <h2 className='text-4xl font-monoton'>Product Free And Easy</h2>
                    <p className='text-xl w-3/5 self-end'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, doloremque, animi velit tempora enim iste dolore nihil blanditiis sapiente rerum quisquam libero explicabo! Est vel ipsa officia reprehenderit odio nulla?</p>
                </div>
            </div>
            <div 
                className='flex justify-between items-center px-20 w-2/4 self-end'
            >
                <OrbitalDrie />
                <OrbitalVier />
                <OrbitalVijf />
            </div>
        </div>
    )
}

const OrbitalVijf = () => {
    return (
        <div
            // className='bg-slate-600'
            style={{
                transform: "rotateY(1deg) rotateX(359deg) rotateZ(86deg)",
                alignSelf: "flex-start"
            }}
        >
            <div className=' relative w-10 h-10 rounded-full'
                style={{ animation: "9s linear infinite orbit" }}>
                <p className='animate-spin'>
                    <GiStoneSphere
                        className="animate-ping w-4 h-4 text-slate-900 rounded-full"
                    />
                </p>
            </div>
        </div>
    )
}

const OrbitalVier = () => {
    return (
        <div
            // className='bg-slate-600'
            style={{
                // transform: "rotateY(22deg) rotateX(46deg) rotateZ(5deg)"
                transform: "rotateY(28deg) rotateX(32deg) rotateZ(358deg)"
            }}
        >
            <div className=' relative w-16 h-16 rounded-full'
                style={{ animation: "9s linear infinite orbit" }}>
                <span className='animate-bounce'>
                    <GiStoneSphere
                        className="animate-spin w-4 h-4 text-slate-900 rounded-full"
                    />
                </span>
            </div>
        </div>
    )
}

export const OrbitalDrie = () => {
    return (
        <div className='relative'>
            <div className='flex items-center justify-center w-28 h-28 rounded-full outline outline-1 outline-red-800'>
                <div className=' relative w-16 h-16 rounded-full outline outline-1 outline-red-800
        ' style={{ animation: "8s linear infinite orbit" }}>
                    <GiStoneSphere
                        className="animate-spin w-4 h-4 text-slate-800 rounded-full"
                    />
                </div>
            </div>
        </div>
    )
}

const OrbitalTwee = () => {
    return (
        <div className='w-1/2'
            style={{
                // transform: "skew(0deg, 320deg)"
                // transform: "rotateY(65deg)"
                transform: "rotateY(56deg) rotateX(303deg) rotateZ(5deg)"
            }}
        >
            <div
                className='relative rounded-full outline outline-4 outline-slate-800'
                style={{
                    animation: "20s linear infinite orbit",
                    width: "450px",
                    height: "470px"
                }}

            >
                {/* <p
                    className="animate-pulse w-14 h-14 bg-blue-400 rounded-full
            absolute top-10 left-1"
                >
                </p> */}

                <GiRingedPlanet
                    className="animate-pulse w-14 h-14 rounded-full
                absolute top-10 left-1 text-blue-900"
                />
            </div>
        </div>
    )
}

const OrbitalEen = () => {

    return (
        <div className='absolute w-80 h-80 rounded-full outline outline-1 outline-red-800
        ' style={{ animation: "8s linear infinite orbit" }}>
            {/* <p
                className="animate-spin w-16 h-16 bg-blue-400 rounded-full
                absolute top-10 left-0"
            ></p> */}
            <GiStoneSphere
                className="animate-spin w-16 h-16 text-red-400 rounded-full
                absolute top-10 left-0"
            />
        </div>
    )
}

export const NewsMenu = () => {
    const renderMenus = () => newsMenu.map(item => <RenderNewsMenu key={item.text} item={item} />)
    return (
        <div className='flex justify-between'>
            {renderMenus()}
        </div>
    )
}

const RenderNewsMenu = ({ item }) => {
    const { text, icon } = item;

    return (
        <div className='flex gap-4 items-center text-2xl'>
            <span>{text}</span>
            <span className='text-5xl'>{icon}</span>
        </div>
    )
}

