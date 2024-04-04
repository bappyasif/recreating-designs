import React from 'react'

export const FeaturedVideo = () => {
    return (
        <div className='w-full relative pb-24'>
            <video
                // className='absolute w-full h-full'
                className='object-cover h-[40rem]'
                width={"100%"}
                height={800}
                autoPlay
                // controls
                loop
                muted
            >
                <source src='https://cdn.shopify.com/videos/c/o/v/24e578d410a24e63a8a645af7295d170.mp4'></source>
            </video>
        </div>
    )
}
