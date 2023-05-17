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
    return <img src="./src/assets/timetable.jpg" alt="office hours" />
}

const TakeoutServiceHours = () => {
    return (
        <div className='flex'>
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