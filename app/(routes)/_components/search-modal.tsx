import { useForTruthToggle } from '@/hooks'
import React, { useEffect } from 'react'
import { HiOutlineArrowRight } from 'react-icons/hi'

export const SearchModal = ({ handleClose }: { handleClose: () => void }) => {
    const { handleFalsy, handleTruthy, isTrue } = useForTruthToggle()

    useEffect(() => {
        handleTruthy()
    }, [])

    const closeClicked = () => {
        handleFalsy()
        const timer = setTimeout(() => {
            handleClose()
        }, 1000)

        return () => clearTimeout(timer)
    }

    return (
        <div className={`fixed top-0 left-0 w-full h-full bg-[#ffffff] z-10 flex justify-center items-center inset-0 transition-all duration-1000 ${isTrue ? "opacity-100" : ""}`}>
            <button
                className={`absolute top-2 right-4 text-slate-950 text-2xl rounded-full p-4 opacity-0 transition-all duration-1000 ${isTrue ? "opacity-100" : ""}`}
                onClick={closeClicked}
            >x</button>

            <div
                className={`relative flex items-center opacity-0 transition-all duration-1000 ${isTrue ? "opacity-100" : ""}`}
            >
                <input
                    type="text" placeholder='Type to search'
                    className='text-4xl px-0.5 bg-transparent placeholder:text-slate-950 outline-none w-[40rem]'
                />
                <button className='absolute right-0'>
                    <HiOutlineArrowRight size={49} />
                </button>
                <span
                    className={`w-0 transition-all duration-1000 ${isTrue ? "w-full" : ""} bg-slate-950 h-0.5 absolute -bottom-4`}></span>
            </div>
        </div>
    )
}
