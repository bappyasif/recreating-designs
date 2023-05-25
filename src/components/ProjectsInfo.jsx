import React from 'react'
import { projects } from '../data'

export const ProjectsInfo = () => {
    const renderInfo = () => projects.map(item => <RenderProject key={item.name} item={item} />)
    return (
        <div className='w-full font-righteous'>
            <h2 className='font-extrabold text-6xl'>Deployed Projects</h2>
            <div className='flex justify-between gap-4 w-full flex-wrap'>
                {renderInfo()}
            </div>
        </div>
    )
}

const RenderProject = ({ item }) => {
    const { name, url } = item;

    return (
        <div className=''>
            <img src={url} alt={name} />
            <h2 className='font-monoton'>{name}</h2>
            <button className='p-0 text-blue-950 px-6 py-1'>More</button>
        </div>
    )
}
