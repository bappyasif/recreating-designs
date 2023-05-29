import React from 'react'
import { newsIcons, newsMenu } from '../data'
import { GiPlanetCore, GiRingedPlanet, GiStoneSphere } from "react-icons/gi"

export const FeaturedNews = () => {
    return (
        <div>
            <NewsMenu />
            <FeaturedArticle />
        </div>
    )
}

const FeaturedArticle = () => {
    return (
        <div>
            <RenderArticleView />
            <RenderMenuNavFilters />
        </div>
    )
}

const RenderMenuNavFilters = () => {
    const renderIcons = () => newsIcons.map((item, idx) => <span key={idx}>{item.icon}</span>)

    return (
        <div>
            <h2>Features..</h2>
            <div>
                {renderIcons()}
            </div>
        </div>
    )
}

const RenderArticleView = () => {
    return (
        <div>
            <div className='relative flex items-center'>
                <OrbitalEen />
                <OrbitalTwee />
            </div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, doloremque, animi velit tempora enim iste dolore nihil blanditiis sapiente rerum quisquam libero explicabo! Est vel ipsa officia reprehenderit odio nulla?</p>
            <div className='flex justify-between items-center px-20'>
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
            style={{
                transform: "rotateY(56deg) rotateX(303deg) rotateZ(5deg)",
                alignSelf: "flex-start"
            }}
        >
            <div className=' relative w-16 h-16 rounded-full'
                style={{ animation: "9s linear infinite orbit" }}>
                <p className='animate-spin'>
                    <GiStoneSphere
                        className="animate-ping w-4 h-4 text-slate-400 rounded-full"
                    />
                </p>
            </div>
        </div>
    )
}

const OrbitalVier = () => {
    return (
        <div
            style={{
                transform: "rotateY(312deg) rotateX(303deg) rotateZ(5deg)"
            }}
        >
            <div className=' relative w-16 h-16 rounded-full'
                style={{ animation: "9s linear infinite orbit" }}>
                <GiStoneSphere
                    className="animate-bounce w-4 h-4 text-slate-600 rounded-full"
                />
            </div>
        </div>
    )
}

const OrbitalDrie = () => {
    return (
        <div className='relative'>
            <div className='flex items-center justify-center w-28 h-28 rounded-full outline outline-1 outline-red-800'>
                <div className=' relative w-16 h-16 rounded-full outline outline-1 outline-red-800
        ' style={{ animation: "8s linear infinite orbit" }}>
                    <GiStoneSphere
                        className="animate-spin w-4 h-4 text-slate-400 rounded-full"
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
        <div>
            {renderMenus()}
        </div>
    )
}

const RenderNewsMenu = ({ item }) => {
    const { text, icon } = item;

    return (
        <div>
            <span>{text}</span>
            <span>{icon}</span>
        </div>
    )
}

