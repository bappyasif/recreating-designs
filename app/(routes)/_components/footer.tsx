import { cc, information, shop, sm } from '@/data'
import Link from 'next/link'
import React from 'react'
import { IconType } from 'react-icons'

export const Footer = () => {
    return (
        <div className='space-y-20 text-2xl bg-slate-600 p-4'>
            <div className='flex justify-between px-4 gap-x-6'>
                <TagLine />
                {/* <Shop /> */}
                <ReusableListItems data={shop} heading='Shop' />
                <ReusableListItems data={information} heading='Information' />
                <Socials />
            </div>
            <div className='flex justify-between px-6 gap-x-6 '>
                <ImportantInformation />
                <Cards />
            </div>
        </div>
    )
}

const Cards = () => {
    // const allCards = () => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(v => <li key={v}><button className='p-2 h-6 bg-red-200 w-9 rounded-md'></button></li>)

    const allCards = () => cc.map((item, idx) => <RenderBrand key={idx} icon={item.icon!} idx={idx} name={item?.name} />)

    return (
        <ul className='flex gap-x-4 justify-center w-2/3'>{allCards()}</ul>
    )
}

const ImportantInformation = () => {
    return (
        <div className='space-y-4'>
            <p>&copy; {new Date().getFullYear()} notHowies ltd.</p>
            <div className='space-y-1'>
            <p className='text-xs text-gray-400'>Building ww18, Job’s Well Road, Carmarthen, Wales WASA31 13HB</p>
            <p className='text-xs text-gray-400'>Registered in England & Wales No. WW3065954. VAT No. WW680950613</p>
            </div>
        </div>
    )
}

const RenderBrand = ({icon, idx, name}: {icon: IconType, idx: number, name: string}) => {
    const Icon = icon;

    return (
        <button key={idx} className='' title={name}><Icon size={40} /></button>
    )
}

const Socials = () => {
    const allMedias = () => sm.map((item, idx) => <RenderBrand icon={item.icon} idx={idx} name={item.name} key={idx} />)

    return (
        <div>
            <p className='text-3xl'>Social</p>
            <div className='flex gap-x-4 items-center'>
                {allMedias()}
            </div>
            {/* <div className='space-x-4'>
                <button className='bg-red-200 p-2 h-4'></button>
                <button className='bg-red-200 p-2 h-4'></button>
            </div> */}
        </div>
    )
}

const ReusableListItems = ({ heading, data }: { heading: string, data: string[] }) => {
    const showAll = () => data.map(name => <li key={name}><Link href={"#"}>{name}</Link></li>)

    return (
        <div className='flex flex-col gap-y-2'>
            <p className='text-3xl'>{heading}</p>
            <ul className='space-y-1'>{showAll()}</ul>
        </div>
    )
}

// const Shop = () => {
//     const showAll = () => shop.map(name => <li><Link href={"#"}>{name}</Link></li>)
//     return (
//         <div>
//             <p>Shop</p>
//             <ul className=''>{showAll()}</ul>
//         </div>
//     )
// }

const TagLine = () => {
    return (
        <div>
            <p>Life is complicated,</p>
            <p>sport is simple</p>
        </div>
    )
}
