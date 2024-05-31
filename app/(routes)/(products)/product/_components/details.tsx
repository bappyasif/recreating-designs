import React from 'react'

export const Details = () => {
    return (
        <div className='flex flex-col gap-y-10'>
            <Reusable text='Built using 80% recycled polyester sherpa fleece, the Minke Mitten is a supremely cosy glove with a high pile fleece which traps plenty of warmth. This fleece uses 80% post-consumer and post-industrial recycled material that prevents unnecessary landfill waste.' text2='They feature an elasticated wrist to reduce heat loss and fit snuggly, with room for layering over your waterproof glove. The fast-drying fabric makes this mitt ideal for adventure on even the coldest days.' />

            <Specifications />
            <Fabrics />
            <Shipping />
        </div>
    )
}

const Shipping = () => {
    return (
        <div>
            UK orders over £50 are postage free.

            • Standard Delivery: £4(2 to 5 working days)
            • Express Delivery: £6(Dispatched using a 24 hour service).

            Orders placed after 1pm will be dispatched next working day.

            Returning a full price item is free for all UK orders.

            For more details and for international information please see our full shipping & returns policies here.
        </div>
    )
}

const Fabrics = () => {
    return (
        <div>
            • 80% recycled polyester, 20% polyester
            • Machine wash
        </div>
    )
}

const Specifications = () => {
    return (
        <div>
            80% recycled polyester, 20% polyester
            • Warm sherpa fleece
            • Soft, cosy, quick-drying
            • Cotton lined
            • Elasticated wrist
            • Flatlock stitching
            • Logo tab
            • Machine washable
            • Unisex style
            • One size fits all
            • Made in China
        </div>
    )
}

const Reusable = ({ text, text2 }: { text: string, text2: string }) => {
    return (
        <div className='flex flex-col gap-y-10'>
            <p>{text}</p>
            <p>{text2}</p>
        </div>
    )
}