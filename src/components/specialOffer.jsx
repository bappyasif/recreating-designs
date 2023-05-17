import React from 'react'

export const SpecialOffer = () => {
    return (
        <div>
            <LeftSide />
            <RightSide />
        </div>
    )
}

const RightSide = () => {
    return (
        <img
            src='#'
            alt='spicy beef noodle'
        />
    )
}

const LeftSide = () => {
    return (
        <div>
            <p>Special Offer</p>
            <h2>Spicy Beef Noodle</h2>
            <p>
                Tart bonbon lollipop topping bear claw sesame snaps icing wafer gingerbread.
                Carrot cake jelly brownie chupa chups chocolate cake cookie candy gummi bears.
                Candy canes wafer carrot cake chocolate bar pie bear claw.
                Chocolate cake bear claw chocolate cake tiramisu ice cream sweet roll gingerbread
            </p>
            <h2>$13</h2>
            <button><span>Buy Now</span><span>{`>`}</span></button>
        </div>
    )
}