import React from 'react'

export const ContactInfo = () => {
    return (
        <div>
            <RenderOfficeHours />
            <TakeoutServiceHours />
        </div>
    )
}

const RenderOfficeHours = () => {
    <img src="#" alt="office hours" />
}

const TakeoutServiceHours = () => {
    return (
        <div>
            <div>
                <h2>Take-out Service</h2>
                <p><span>Available Daily</span> <span>5px - 9pm</span></p>
            </div>
            <div>
                <button><span>Order online now!</span><span>{`>`}</span></button>
            </div>
        </div>
    )
}