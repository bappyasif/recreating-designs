import React from 'react'
import { chooseUs, numsAndFigs, team } from '../../data/about-us'

export const OurIntro = () => {
    return (
        <div className='flex flex-col gap-6'>
            <h1 className='text-center'>A Few Words About Our Journey</h1>
            <div className='flex xxs:flex-col lg:flex-row justify-between gap-10'>
                <div className='xxs:w-full lg:w-1/2 flex flex-col gap-6 text-xl'>
                    <h2 className='text-2xl font-bold'>Pellentesque sit amet elementum ccumsan sit amet mattis eget, tristique at leo. Vivamus massa.Tempor massa et laoreet .Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                    <p>Pellentesque sit amet elementum ccumsan sit amet mattis eget, tristique at leo. Vivamus massa.Tempor massa et laoreet .Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu laoreet ante, sollicitudin volutpat quam. Vestibulum posuere malesuada ultrices. In pulvinar rhoncus lacus at aliquet. Nunc vitae lacus varius, auctor nisi sit amet, consectetur mauris. Curabitur sodales semper est, vel faucibus urna laoreet vel. Ut justo diam, sodales non pulvinar at, vulputate quis neque. Etiam aliquam purus vel ultricies consequat.</p>
                    <button className='p-0 w-fit px-6 py-1'>Read More</button>
                </div>
                <RenderImage />
            </div>
        </div>
    )
}

const RenderImage = () => {
    return (
        <img
            className='xxs:w-full lg:w-1/2 xxs:h-auto lg:h-96'
            src="https://source.unsplash.com/random/?Travel&Banner&Portarit"
            alt=""
        />
    )
}

export const SomeInfoWithFigs = () => {
    const renderFigs = () => numsAndFigs.map((item, idx) => <RenderFig key={idx} item={item} />)

    return (
        <div className='flex xxs:flex-col lg:flex-row justify-around gap-4 w-full text-xl'>
            {renderFigs()}
        </div>
    )
}

const RenderFig = ({item}) => {
    const {icon, fig, txt} = item;
    return (
        <div className='flex flex-col gap-4 items-center'>
            <p className='text-7xl'>{icon}</p>
            <h2 className='text-7xl font-bold'>{fig}</h2>
            <p>{txt}</p>
        </div>
    )
}

export const ReasonsWhy = ()  => {
    const renderItems = () => chooseUs.map(item => <RenderReason key={item.heading} item={item} />)

    return (
        <div className='flex xxs:flex-col lg:flex-row justify-center gap-6'>
            {renderItems()}
        </div>
    )
}

const RenderReason = ({item}) => {
    const {icon, img, heading, subtext} = item;

    return (
        <div className='xxs:w-full lg:w-1/4 flex flex-col items-center gap-10'>
            <p className='text-6xl relative'>
                <span className='absolute -top-0 -left-9 bg-slate-200 rounded-full p-2'>{icon}</span>
            </p>
            <img 
                className='w-full h-40' 
                src={`https://source.unsplash.com/random/?${heading}&vibrant`} 
                alt={heading}
            />
            <h2 className='text-4xl'>{heading}</h2>
            <p>{subtext}</p>
        </div>
    )
}

export const ShowTeam = () => {
    const renderMembers = () => team.map(item => <RenderMember key={item.name} item={item} />)

    return (
        <div className='flex xxs:flex-col lg:flex-row justify-between gap-6'>
            {renderMembers()}
        </div>
    )
}

const RenderMember = ({item}) => {
    const {img, name, intro} = item;

    return (
        <div className='flex flex-col gap-6'>
            <img 
                className='w-auto h-96'
                src={`https://source.unsplash.com/random/?${name}&closeup&people`} 
                alt={name} 
            />
            <h2 className='text-4xl text-center'>{name}</h2>
            <p>{intro}</p>
        </div>
    )
}