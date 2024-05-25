import Link from "next/link"
import { ReusableActionButtons } from "./reusables"

export const ShippingMethod = () => {
    return (
        <div className="text-[#474747]">
            <div className="border">
                <ShippingInfo type="Contact" values="a@b.co" />
                <div className="w-[98%] mx-auto my-2.5 h-0.5 bg-slate-200"></div>
                <ShippingInfo type="Contact" values="Road#0, House#0 (#rd floor - front side), p.c. culture housing society, shekertek, Dhaka 1207, Bangladesh" />
            </div>

            <MethodInfo />

            <ReusableActionButtons continueTo="payment" href="" returnTo="information" />
        </div>
    )
}

const MethodInfo = () => {
    return (
        <div>
            <p className="self-start my-6 text-2xl font-bold">Shipping Method</p>
            <p className="flex justify-between bg-slate-200 p-4 px-6 my-6 text-xl rounded">
                <span>Standard International (14-21 working days)</span>
                <span>Free</span>
            </p>
        </div>
    )
}

const ShippingInfo = ({type, values} : {type: string, values: string}) => {
    return (
        <div className="flex justify-between items-center gap-x-6 min-h-16 py-2">
            <span className="w-1/4">{type}</span>
            <span className="w-1/2">{values}</span>
            <Link className="w-1/4 text-center underline" href={""}>Change</Link>
        </div>
    )
}