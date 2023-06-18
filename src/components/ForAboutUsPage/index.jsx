import React from 'react'
import { chooseUs, numsAndFigs, team } from '../../data/about-us'

export const OurIntro = () => {
    return (
        <div>
            <h1>A Few Words About Our Journey</h1>
            <div className='flex justify-between gap-4'>
                <div>
                    <h2>Pellentesque sit amet elementum ccumsan sit amet mattis eget, tristique at leo. Vivamus massa.Tempor massa et laoreet .Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                    <p>Pellentesque sit amet elementum ccumsan sit amet mattis eget, tristique at leo. Vivamus massa.Tempor massa et laoreet .Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu laoreet ante, sollicitudin volutpat quam. Vestibulum posuere malesuada ultrices. In pulvinar rhoncus lacus at aliquet. Nunc vitae lacus varius, auctor nisi sit amet, consectetur mauris. Curabitur sodales semper est, vel faucibus urna laoreet vel. Ut justo diam, sodales non pulvinar at, vulputate quis neque. Etiam aliquam purus vel ultricies consequat.</p>
                    <button>Read More</button>
                </div>
                <RenderImage />
            </div>
        </div>
    )
}

const RenderImage = () => {
    return (
        <img
            className='w-96 h-auto'
            src="https://source.unsplash.com/random/?Travel&Banner&Portarit"
            alt=""
        />
    )
}

export const SomeInfoWithFigs = () => {
    const renderFigs = () => numsAndFigs.map((item, idx) => <RenderFig key={idx} item={item} />)

    return (
        <div className='flex justify-between gap-4'>
            {renderFigs()}
        </div>
    )
}

const RenderFig = ({item}) => {
    const {icon, fig, txt} = item;
    return (
        <div>
            <p>{icon}</p>
            <h2>{fig}</h2>
            <p>{txt}</p>
        </div>
    )
}

export const ReasonsWhy = ()  => {
    const renderItems = () => chooseUs.map(item => <RenderReason key={item.heading} item={item} />)

    return (
        <div className='flex justify-between gap-4'>
            {renderItems()}
        </div>
    )
}

const RenderReason = ({item}) => {
    const {icon, img, heading, subtext} = item;

    return (
        <div>
            <p>{icon}</p>
            <img className='w-60 h-40' src="" alt="" />
            <h2>{heading}</h2>
            <p>{subtext}</p>
        </div>
    )
}

export const ShowTeam = () => {
    const renderMembers = () => team.map(item => <RenderMember key={item.name} item={item} />)

    return (
        <div className='flex justify-between gap-4'>
            {renderMembers()}
        </div>
    )
}

const RenderMember = ({item}) => {
    const {img, name, intro} = item;

    return (
        <div>
            <img src="" alt="" />
            <h2>{name}</h2>
            <p>{intro}</p>
        </div>
    )
}