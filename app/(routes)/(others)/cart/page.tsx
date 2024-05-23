import Link from 'next/link'
import React from 'react'
import { FaApplePay, FaGooglePay, FaPaypal } from 'react-icons/fa6'

const CartPage = () => {
    return (
        <div className='flex flex-col gap-y-6 w-2/4 mx-auto mt-20'>
            <h2 className='text-4xl font-semibold text-center'>Shopping Basket</h2>
            <CartGrid />
            <ActionButtons />
            <SubTotal />
            <SalesAndShippingInfo />
            <Checkout />
        </div>
    )
}

const Checkout = () => {
    return (
        <div className='self-center flex flex-col items-center justify-center'>
            <Link href={"/checkout"} className='text-xl bg-[#474747] text-[#fff] p-4 px-8 rounded-sm hover:bg-[#ffffff] hover:text-[#474747] border'>Checkout</Link>
            <div className='flex items-center gap-6'>
                <button><FaApplePay size={100} /></button>
                <button><FaGooglePay size={100} /></button>
                <button><FaPaypal size={45} /></button>
            </div>
        </div>
    )
}

const SalesAndShippingInfo = () => {
    return (
        <p className='text-center text-xl'>Tax included. <Link href={""} className='underline'>Shipping</Link> calculated at checkout.</p>
    )
}

const SubTotal = () => {
    return (
        <div className='flex justify-between mt-6 py-6 border-t-2 border-b-2 text-2xl'>
            <p>Sub Total</p>
            <p>$###.###USD</p>
        </div>
    )
}

const ActionButtons = () => {
    return (
        <div className='self-center space-x-4 text-xl my-6'>
            <button className='font-light'>Update basket</button>
            <span>|</span>
            <button className=''>Continue Shopping</button>
        </div>
    )
}

const CartGrid = () => {
    return (
        <div className='flex flex-col gap-y-4'>
            <GridHeadings />
            <GridItems />
            <GridItems />
        </div>
    )
}

const GridItems = () => {
    return (
        <div className='grid grid-cols-8'>
            <ProductDisplay />
            <ProductPrice />
            <ProductQuantities />
            <ProductTotal />
        </div>
    )
}

const ProductTotal = () => {
    return (
        <div className='text-right text-xl'>
            <p className='line-through'>Net Total</p>
            <p>Disc Total</p>
        </div>
    )
}

const ProductQuantities = () => {
    return (
        <div className='flex flex-col justify-between items-center col-span-2'>
            <div className='flex items-center justify-center gap-x-2 border-2 text-xl rounded-lg w-fit p-4 ml-2'>
                <button className='w-8 pt-1'>-</button>
                <span className='min-w-8 text-center'>#</span>
                <button className='w-8'>+</button>
            </div>
            <button className='underline ml-2'>Remove</button>
        </div>
    )
}

const ProductPrice = () => {
    return (
        <div className='flex flex-col justify-between text-lg col-span-2 text-right'>
            <div className='text-xl'>
                <p className='line-through'>Ret P</p>
                <p>Disc P</p>
                <p className='text-xl mt-4 flex flex-col gap-y-1.5 w-full'>
                    <span>25% off Product</span>
                    <span>(-$26.62)</span>
                </p>
            </div>
            {/* <p className='text-xl mt-4'>25% off Product Type</p> */}
        </div>
    )
}

const ProductDisplay = () => {
    return (
        <div className='col-span-3 flex gap-x-6'>
            <div className='bg-slate-200 p-1.5 rounded-md h-24 flex items-center'>
                <img src="https://picsum.photos/id/26/200/300" alt="https://picsum.photos/id/26/200/200" className='h-20 w-16 rounded-sm object-cover' />
            </div>
            <div className='flex flex-col text-xl'>
                <p className='font-bold'>Product Name Goes Here</p>
                <p className='mt-6'>Size</p>
            </div>
        </div>
    )
}

const GridHeadings = () => {
    return (
        <div className='grid grid-cols-8 border-b-2 py-3 my-6 text-xl gap-10'>
            <span className='col-span-3'>Product</span>
            <span className='text-right col-span-2'>Price</span>
            <span className='text-center col-span-2'>Quantity</span>
            <span className='text-right'>Total</span>
        </div>
    )
}

export default CartPage