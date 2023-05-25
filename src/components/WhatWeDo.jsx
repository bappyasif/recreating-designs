import React from 'react'
import { weDo } from '../data'

export const WhatWeDo = () => {
  return (
    <div>
        <RenderIntro />
        <RenderInfo />
    </div>
  )
}

const RenderInfo = () => {
    const renderfocuses = () => weDo.map(item => <RenderFocus key={item.title} item={item} />)
    return (
        <div>
            {renderfocuses()}
        </div>
    )
}

const RenderFocus = ({item}) => {
    const {icon, title, desc} = item

    return (
        <>
        <div>{icon}</div>
        <h2>{title}</h2>
        <p>{desc}</p>
        </>
    )
}

const RenderIntro = () => {
    return (
        <div>
            <h2>What We Do</h2>
            <p>Our Key Insights</p>
        </div>
    )
}