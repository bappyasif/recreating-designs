import React from 'react'
import { heroTexts, numFacts, taskInfo } from '../data'

export const HeroContents = () => {
    return (
        <div>
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
        <div>
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
        <div>
            <RenderTaskTextInfo item={date} />
            <RenderTaskTextInfo item={title} />
            <RenderTaskMetaData items={meta} />
        </div>
    )
}

const RenderTaskMetaData = ({ items }) => {
    const renderItem = () => items?.map((item, idx) => <RenderMetaItem key={idx} item={item} />)
    return (
        <div>
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
        <div>
            {renderFacts()}
        </div>
    )
}

const RenderFact = ({ item }) => {
    const { name, value } = item;

    return (
        <div>
            <p>{name}</p>
            <p>{value}</p>
        </div>
    )
}

const HeadingTexts = () => {
    return (
        <div>
            <TopTexts />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti commodi, culpa assumenda laborum provident iste quo facere fugiat sint ut alias repudiandae tempora hic sit omnis rem, dolores rerum vitae?</p>
        </div>
    )
}

const TopTexts = () => {
    const renderTexts = () => heroTexts.map(txt => <p>{txt}</p>)
    return (
        <div>
            {renderTexts()}
        </div>
    )
}
