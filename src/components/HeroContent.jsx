import React from 'react'
import { heroItems } from '../data'

const HeroContent = () => {
    const {numbers, partners, texts} = heroItems
    return (
        <div>
            <RenderTexts item={texts} />
            <RenderFigs items={numbers} />
            <RenderPartners items={partners} />
        </div>
    )
}

const RenderPartners = ({ items }) => {
    const renderItems = () => items?.map((item, idx) => <RenderPartner key={idx} item={item} />)

    return (
        <div>
            <h2>Trusted by more than <span>50000+</span> companies world wide</h2>
            <div>
                {renderItems()}
            </div>
        </div>
    )
}

const RenderPartner = ({ item }) => {
    const { icon } = item

    return (
        <div>
            {icon}
        </div>
    )
}

const RenderFigs = ({ items }) => {
    const renderItems = () => items.map(item => <RenderFig key={item.figCap} item={item} />)

    return (
        <div>
            {renderItems()}
        </div>
    )
}

const RenderFig = ({ item }) => {
    const { figTxt, figCap } = item;

    return (
        <div>
            <span>{figTxt}</span>
            <span>{figCap}</span>
        </div>
    )
}

const RenderTexts = ({ item }) => {
    const { title, subtext, btnTxt } = item;
    return(
        <div>
            <div>{title}</div>
            <div>{subtext}</div>
            <button>{btnTxt}</button>
        </div>
    )
}

export default HeroContent