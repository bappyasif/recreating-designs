import React from 'react'
import { Header } from '.'

export const ConciousClothing = () => {
    return (
        <div className='flex flex-col gap-y-10 px-28 text-2xl font-light'>
            {/* <Header /> */}
            <Header headingText='Functional and sustainable' sectionName='Concious clothing' />

            <p>
                Our award-winning men’s and women’s clothing is ethically produced using organic, recycled or natural fabrics wherever possible. For instance; all our t-shirts, jeans and sweats are made from Oeko-Tex certified organic cotton and our sport base layers are made using the highest quality Merino wool you can find.
            </p>

            <p>
                You can find out more about the fabrics we select <a className='underline' href="#">here</a>.
            </p>
        </div>
    )
}

// const Header = () => {
//     return (
//         <div className='flex flex-col gap-y-6'>
//             <p>Concious clothing</p>
//             <p>Functional and sustainable</p>
//             <p className='w-6 h-1.5 bg-red-950'></p>
//         </div>
//     )
// }
