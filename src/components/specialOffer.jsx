import React from 'react'
import { MdArrowRight } from 'react-icons/md'

export const SpecialOffer = () => {
    return (
        <div className='flex items-center justify-center w-4/6 my-8 bg-gray-200'>
            <LeftSide />
            <RightSide />
        </div>
    )
}

const RightSide = () => {
    return (
        <img
            src='./src/assets/special.jpg'
            alt='spicy beef noodle'
            // width={"56%"}
            className='min-h-full w-4/6'
        />
    )
}

const LeftSide = () => {
    return (
        <div className='w-2/5 flex flex-col gap-4 p-1 px-4 mr-4'>
            <TopPart />
            <h2 className='text-4xl'>Spicy Beef Noodle</h2>
            <p className='w-fit' style={{fontSize: ".6rem"}}>
                Tart bonbon lollipop topping bear claw sesame snaps icing wafer gingerbread.
                Carrot cake jelly brownie chupa chups chocolate cake cookie candy gummi bears.
                Candy canes wafer carrot cake chocolate bar pie bear claw.
                Chocolate cake bear claw chocolate cake tiramisu ice cream sweet roll gingerbread
            </p>
            <h2 className='text-6xl'>$13</h2>
            <button className='bg-yellow-400 flex gap-4 items-center w-fit p-0 pl-4'><span>Buy Now</span><span className='text-gray-950 py-2 px-2 bg-yellow-500 rounded-sm'><MdArrowRight /></span></button>
        </div>
    )
}

const TopPart = () => {
    return (
        <div className='flex gap-2 w-full justify-between'>
            <p>Special Offer</p>
            <div className='flex gap-1'>
                <img src="./src/assets/chilli.png" alt="chilli" width={20} />
                <img src="./src/assets/brocolli.png" alt="brocolli" width={20} />
            </div>
        </div>
    )
}