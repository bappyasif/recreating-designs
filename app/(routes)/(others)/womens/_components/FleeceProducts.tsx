import { womensFleece } from "@/data"
import { FleeceCard } from "../../_components/reusable-fleece-card"
import { ReusableFleeceHeading } from "../../_components/reusable-fleece-heading"

export const FleeceProds = () => {
    const fleeces = womensFleece

    const showAll = () => fleeces.map(item => <FleeceCard key={item.name} name={item.name} images={item.images} />)

    return (
        <div className='w-full px-20'>
            <ReusableFleeceHeading />

            <div className='w-full flex flex-wrap gap-20 justify-between'>
                {showAll()}
            </div>
        </div>
    )
}