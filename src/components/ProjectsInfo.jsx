import React from 'react'
import { projects } from '../data'

export const ProjectsInfo = () => {
    const renderInfo = () => projects.map(item => <RenderProject key={item.name} item={item} />)
    return (
        <div>
            <h2>Deployed Projects</h2>
            <div>
                {renderInfo()}
            </div>
        </div>
    )
}

const RenderProject = ({ item }) => {
    const { name, url } = item;

    return (
        <div>
            <img src={url} alt={name} />
            <h2>{name}</h2>
            <button>More</button>
        </div>
    )
}
