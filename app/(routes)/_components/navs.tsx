"use client"

import { accessories, mens, menu, more, moreAbout, moreHelpAndInfo, womens } from '@/data'
import { useForTruthToggle } from '@/hooks'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export const Navs = () => {
    const [active, setActive] = useState("")
    const updateActive = (navName: string) => setActive(navName)
    // const allNavs = () => menu.map(item => <RenderMenuItem key={item} name={item} updateActive={updateActive} active={active} />)
    const allNavs = () => menu.map(item => <RenderMenuItem key={item.name} name={item.name} path={item.path} updateActive={updateActive} active={active} />)
    return (
        <nav 
            className='flex justify-between w-1/3 px-4 font-semibold'
            // className='flex justify-between w-1/3 px-4 font-semibold max-h-96 overflow-y-scroll'
        >{allNavs()}</nav>
    )
}

const RenderMenuItem = ({ name, updateActive, active, path }: { name: string, updateActive: (d: string) => void, active: string, path: string }) => {
    // const { handleFalsy, handleTruthy, isTrue } = useForTruthToggle()

    // useEffect(() => {
    //     updateActive("")
    //     console.log(active, name, "whta!!")
    // }, [name])

    // useEffect(() => {
    //     name !== active && updateActive("")
    // },  [active])

    // const handleUpdate = () => {
    //     updateActive("")
    //     setTimeout(() => {
    //         updateActive(name)
    //     }, 200)
    // }

    // console.log(submenuData()?.length, data?.length, active, "where!!")

    // if (active === "sale") return

    return (
        <div
            // onMouseEnter={handleTruthy} onMouseLeave={handleFalsy}
            onMouseEnter={() => updateActive(name)}
        // onMouseEnter={handleUpdate}
        // onMouseLeave={() => updateActive("")}
        >
            <Link href={path} className='p-2'>{name}</Link>
            {
                active === name
                    ? <MenuHoveredOverlayItems updateActive={updateActive} active={active} />
                    : null
            }
        </div>
    )
}

const MenuHoveredOverlayItems = ({ updateActive, active }: { active: string, updateActive: (d: string) => void }) => {

    if (active === "sale") return

    return (
        <ul 
            // className='absolute left-0 top-24 flex justify-between gap-x-11 px-20 w-full bg-gray-900 opacity-95 py-11 z-20' 
            // className='absolute left-0 top-24 flex justify-between gap-x-11 px-20 w-full py-11 z-20'
            className='absolute left-0 top-24 flex justify-between gap-x-11 px-20 w-full py-11 z-20 max-h-[36rem] overflow-y-scroll' 
            onMouseLeave={() => updateActive("")}
            style={{
                backgroundColor: "rgba(0,0,0,.9)"
            }}
        >
            {/* <div className='bg-gray-800 absolute opacity-80 h-full w-full'></div> */}

            {/* <LeftSideOverLayedMenuItems active={active} /> */}

            {
                active === "more"
                    ? <LeftSideOverLayedMenuItemsForMore />
                    : <LeftSideOverLayedMenuItems active={active} />
            }

            {
                active === "accessories"
                    ? <RightSideOverLayedMenuItemsForAccessories />
                    : active === "more"
                        ? <RightSideOverLayedMenuItemsForMore />
                        : <RightSideOverLayedMenuItems active={active} />
            }

            {/* <RightSideOverLayedMenuItems /> */}
        </ul>
    )
}

const LeftSideMenuItemsReused = ({ data, label }: { label: string, data: string[] }) => {
    const renderAbouts = () => data.map(item => <li key={item}><Link href={"#"}>{item}</Link></li>)
    return (
        <ul className='flex flex-col gap-y-4'>
            <li className='uppercase text-2xl'>{label}</li>
            <ul className='flex flex-col gap-y-4'>
                {renderAbouts()}
            </ul>
        </ul>
    )
}

const LeftSideOverLayedMenuItemsForMore = () => {
    return (
        <li className='flex justify-around w-1/3'>
            <LeftSideMenuItemsReused data={moreAbout} label='About' />
            <LeftSideMenuItemsReused data={moreHelpAndInfo} label='Help & Info' />
        </li>
    )
}

const RightSideOverLayedMenuItemsForMore = () => {
    return (
        <li className='w-2/3 px-11 h-60'>
            <ul className='flex justify-between gap-x-4 w-full h-full'>
                <AccessoryItem imgSrc="https://howies.co.uk/cdn/shop/files/u-packaging-banner_540x.jpg?v=1664810852" label="Our Packaging" />
                <AccessoryItem imgSrc="https://howies.co.uk/cdn/shop/files/broken-twill-header-3_540x.jpg?v=1664272202" label="Our Fabrics" />
            </ul>
        </li>
    )
}

const AccessoryItem = ({ imgSrc, label }: { imgSrc: string, label: string }) => {
    return (
        <li className='relative w-[27rem] h-full flex items-center justify-center'>
            <div className='z-20 text-center flex flex-col gap-y-4'>
                <p className='text-xl'>{label}</p>
                <Link href={"#"} className='p-2 w-40 bg-slate-200 text-black'>Shop Now</Link>
            </div>
            <Image src={imgSrc} alt={label} className='absolute w-full h-full p-2' width={800} height={800} />
            {/* <Image src={"https://howies.co.uk/cdn/shop/files/sock-menu_540x.jpg?v=1698224546"} alt='accessory item' className='absolute w-full h-full p-2' width={800} height={800} /> */}
        </li>
    )
}

const RightSideOverLayedMenuItemsForAccessories = () => {
    return (
        <li 
        className='w-2/3 px-11'
        // style={{
        //     backgroundColor: "rgba(0,0,0,1)"
        // }}
        >
            <ul className='flex justify-between gap-x-4 w-full h-full'>
                <AccessoryItem imgSrc="https://howies.co.uk/cdn/shop/files/sock-menu_540x.jpg?v=1698224546" label="Socks" />
                <AccessoryItem imgSrc="https://howies.co.uk/cdn/shop/files/menu_gifts_0f2ac123-8c3b-46b9-936c-fd3a2879eecf_540x.jpg?v=1664896572" label="Gift cards" />
            </ul>
        </li>
    )
}

const RightSideOverLayedMenuItems = ({active}: {active: string}) => {
    const renderMore = () => more.map((item, idx) => <li key={idx}><Link href={"#"}>{item}</Link></li>)
    return (
        <li 
        // className='w-4/5 flex justify-between gap-x-10 relative min-h-[36rem]'
        className={`w-4/5 flex justify-between gap-x-10 relative ${active === "men" ? "min-h-[36rem]" : active === "women" ? "max-h-[36rem]" : ""}`}
        >
            <div className='flex flex-col gap-y-4 w-full'>
                <Link href={"#"} className='uppercase text-2xl'>More</Link>
                <ul className='flex flex-col justify-between gap-y-4'>
                    {renderMore()}
                </ul>
            </div>
            {/* <div 
                className='bg-slate-600 absolute w-4/5 h-96 right-0 z-40 opacity-100'
                // style={{
                //     backgroundColor: "rgba(0,0,0,1)"
                // }}
            >
                
            </div> */}
            <Image
                src={"https://howies.co.uk/cdn/shop/files/HOME_SKWAIR_OUTLET2024_720x.gif?v=1712311283"}
                alt='Special offer for store subscribers only'
                width={800} height={800}
                // className='w-4/5 h-full py-2 mx-auto px-20'
                className='w-4/5 h-full py-2 mx-auto px-20 absolute right-0 bottom-0'
            />
        </li>
    )
}

const LeftSideOverLayedMenuItems = ({ active }: { active: string }) => {
    const [data, setData] = useState<string[]>([])

    const submenuData = () => {
        let items: string[] = []
        switch (active) {
            case "men":
                items = mens
                return items
            case "women":
                items = womens
                return items
            case "accessories":
                items = accessories
                return items
            case "sale":
                return items
            case "more":
                return items
            default:
                return items
        }
    }

    useEffect(() => {
        active && setData(submenuData())
    }, [active])

    const submenuItems = () => data?.map((item, idx) => <li key={idx}><Link href={"#"}>{item}</Link></li>)

    // const submenuItems = () => mens.map((item, idx) => <li><Link href={"#"} key={idx}>{item}</Link></li>)

    const headingText = () => active !== "accessories" ? `shop ${active}` : `shop all`

    return (
        <li className={`${active === "accessories" ? "w-1/4" : "w-1/2"} flex flex-col gap-y-4 px-11`}>
            <Link href={"#"} className='uppercase text-2xl'>{headingText()}</Link>
            <ul className='flex flex-col justify-between gap-y-4'>
                <li className='my-0.5 text-xl'>SALE</li>
                {submenuItems()}
            </ul>
        </li>
    )
}

// const RenderMenuItem = ({ name }: { name: string }) => {
//     const { handleFalsy, handleTruthy, isTrue } = useForTruthToggle()

//     return (
//         <div
//             // className='relative' 
//             onMouseEnter={handleTruthy} onMouseLeave={handleFalsy}>
//             <Link href={"#"} className='p-2'>{name}</Link>
//             {
//                 isTrue
//                     ? <MenuHoveredOverlayItems />
//                     : null
//             }
//         </div>
//     )
// }

// const MenuHoveredOverlayItems = () => {
//     const submenuItems = () => mens.map(item => <li><Link href={"#"}>{item}</Link></li>)

//     return (
//         <ul className='absolute left-0 top-24 flex flex-col justify-between gap-y-4 px-20 bg-gray-400 w-full'>
//             <li>SALE</li>
//             {submenuItems()}
//         </ul>
//     )
// }