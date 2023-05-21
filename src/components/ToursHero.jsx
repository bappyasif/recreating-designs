import React, { useRef, useState } from 'react'
import { HiChevronDown } from 'react-icons/hi'
import { passengers } from '../data'
import Select from 'react-select'

export const ToursHero = () => {
    return (
        <section>
            <HeroInfo />
            <div className='flex justify-between'>
                <RenderDropdowns name={"Passengers"} options={passengers} />
                <RenderDropdowns name={"Date"} type={"date"} />
                <RenderDropdowns name={"Departure Time"} type={"time"} />
            </div>
        </section>
    )
}

const HeroInfo = () => {
    return (
        <div>
            <h1 className='font-righteous text-center'>Kingdom Of Volcanoes And Glaciers</h1>
            <img
                src="../src/assets/tHero.jpg"
                alt="another scenic picture of iceland with mountains and glaciers"
                className='h-96 w-full'
            />
            <div className='text-center text-2xl font-serif font-bold'>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias officiis aliquam eum aperiam, facilis recusandae</p>
                <p>laboriosam velit doloribus nemo quia dolore, vitae qui excepturi corporis iure nulla cumque repudiandae ad?</p>
            </div>
        </div>
    )
}

export const RenderDropdowns = ({ name, type, options }) => {
    const [openDD, setOpenDD] = useState(false);
    const [selectedVal, setSelectedVal] = useState(null)

    let ref = useRef()

    const handleChange = (data) => setSelectedVal(data)

    const handleCloseDD = () => {
        console.log("close dd -- before", openDD)
        setOpenDD(false)
        console.log("close dd -- after", openDD)
    }

    const handleOpenDD = () => {
        setOpenDD(true)
    }

    const handleToggleDD = () => {
        setOpenDD(prev => !prev)
        console.log("toggle!!", openDD, selectedVal)
        // ref?.current?.focus()
        // console.log(ref?.current, ref?.current?.innerRef.show?.click())
        // console.log(ref?.current, ref.current?.click())
        ref.current?.showPicker()
    }

    return (
        <div className='flex gap-0 bg-slate-400'>
            <div 
                className='w-full' 
            >
                <p>{name || "Select type"}</p>
                <div 
                    className='w-40 relative'
                >
                    {
                        !type 
                        ? <p onClick={handleOpenDD}>{selectedVal ? selectedVal?.passengers : options && options[0]}</p>
                        : null
                    }
                    {
                        type
                            ? <input 
                                className='w-full bg-slate-300'
                                type={type} 
                                ref={ref}
                                onClick={handleOpenDD} 
                            />
                            : openDD
                                ? <RenderOptions options={options} handleChange={handleChange} elemName={"passengers"} handleCloseDD={handleCloseDD} />
                                : null
                    }
                </div>
            </div>
            <span className='text-2xl bg-violet-800 flex items-center px-2' onClick={handleToggleDD}><HiChevronDown /></span>
        </div>
    )
}

const RenderOptions = ({ options, handleChange, elemName, handleCloseDD }) => {
    const handleClick = (evt) => {
        console.log(evt.target.value)
        handleChange({[elemName]: evt.target.value})
        handleCloseDD()
    }
    const renderOptions = () => options?.map(opt => <option onClick={handleClick} key={opt} value={opt}>{opt}</option>)

    return (
        <div className='absolute left-0 bg-slate-500 w-full'>
            {renderOptions()}
        </div>
    )
}