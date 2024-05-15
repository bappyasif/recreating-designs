export const SeparatorOne = () => {
    return (
        <img src="https://howies.co.uk/cdn/shop/files/DJI_0029_1950x.jpg?v=1661184999" alt="decorative separator image of a beach" className="w-full h-96" />
    )
}

export const SeparatorTwo = () => {
    return (
        <img src="https://howies.co.uk/cdn/shop/files/HOME_2022_JUNE_SHORTS.jpg?v=1655467551" alt="decorative separator image of a beach" className="w-full h-[38rem]" />
    )
}

export const Header = ({sectionName, headingText}: {sectionName: string, headingText: string}) => {
    return (
        <div className='flex flex-col gap-y-6'>
            <p className="text-xl font-light">{sectionName}</p>
            <p className="text-6xl font-bold">{headingText}</p>
            <p className='w-12 h-1.5 bg-red-950'></p>
        </div>
    )
}