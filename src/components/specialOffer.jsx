import React from 'react'

export const SpecialOffer = () => {
    return (
        <div className='flex items-center'>
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
            width={"56%"}
        />
    )
}

const LeftSide = () => {
    return (
        <div className='w-2/4'>
            <TopPart />
            <h2 className='text-4xl'>Spicy Beef Noodle</h2>
            <p className='w-fit'>
                Tart bonbon lollipop topping bear claw sesame snaps icing wafer gingerbread.
                Carrot cake jelly brownie chupa chups chocolate cake cookie candy gummi bears.
                Candy canes wafer carrot cake chocolate bar pie bear claw.
                Chocolate cake bear claw chocolate cake tiramisu ice cream sweet roll gingerbread
            </p>
            <h2 className='text-6xl'>$13</h2>
            <button><span>Buy Now</span><span>{`>`}</span></button>
        </div>
    )
}

const TopPart = () => {
    return (
        <div className='flex gap-2 w-2/4'>
            <p>Special Offer</p>
            <div className='flex gap-1'>
                <img src="./src/assets/chilli.png" alt="chilli" width={20} />
                <img src="./src/assets/brocolli.png" alt="brocolli" width={20} />
            </div>
        </div>
    )
}