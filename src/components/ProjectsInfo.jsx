import React from 'react'
import { projects } from '../data'

export const ProjectsInfo = () => {
    const renderInfo = () => projects.map(item => <RenderProject key={item.name} item={item} />)
    return (
        <div className='w-full font-righteous mb-6'>
            <h2 className='font-extrabold text-6xl py-4 text-transparent bg-clip-text bg-gradient-to-br from-slate-200 to-blue-800'>Deployed Projects</h2>
            <div className='flex xxs:justify-start md:justify-center xxs: gap-9 md:gap-24 w-full flex-wrap px-2'>
                {renderInfo()}
            </div>
        </div>
    )
}

const RenderProject = ({ item }) => {
    const { name, url } = item;

    return (
        <div className='w-1/4'>
            <img className='rounded-md' src={`https://source.unsplash.com/random/1920x1080/?office,corporate?sig=${name}`} alt={name} />
            <h2 className='font-monoton'>{name}</h2>
            <button className='p-0 text-blue-950 px-6 py-1'>More</button>
        </div>
    )
}
