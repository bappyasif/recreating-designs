"use client"

import { useForObserverIntersectionVersionTwo } from "@/hooks"

export const SeparatorOne = () => {
    const {isTrue, ref} = useForObserverIntersectionVersionTwo()

    return (
        <img ref={ref} src="https://howies.co.uk/cdn/shop/files/DJI_0029_1950x.jpg?v=1661184999" alt="decorative separator image of a beach" className={`w-full h-[31rem] transition-all duration-1000 ${isTrue ? "opacity-100 scale-100" : "opacity-40 scale-50"}`} />
    )
}

export const SeparatorTwo = () => {
    const {isTrue, ref} = useForObserverIntersectionVersionTwo()

    return (
        <img ref={ref} src="https://howies.co.uk/cdn/shop/files/HOME_2022_JUNE_SHORTS.jpg?v=1655467551" alt="decorative separator image of a beach" className={`w-full h-[38rem] transition-all duration-1000 ${isTrue ? "opacity-100 scale-100" : "opacity-40 scale-50"}`} />
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