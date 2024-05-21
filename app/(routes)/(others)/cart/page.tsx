import Link from 'next/link'
import React from 'react'
import { FaApplePay, FaGooglePay, FaPaypal } from 'react-icons/fa6'

const CartPage = () => {
    return (
        <div className='flex flex-col gap-y-6 w-2/3 mx-auto'>
            <h2>Shopping Basket</h2>
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
            <button className='text-4xl'>Checkout</button>
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
        <p className='text-center'>Tax included. <Link href={""}>Shipping</Link> calculated at checkout.</p>
    )
}

const SubTotal = () => {
    return (
        <div className='flex justify-between'>
            <p>Sub Total</p>
            <p>$###.###USD</p>
        </div>
    )
}

const ActionButtons = () => {
    return (
        <div className='self-center'>
            <button>Update basket</button>
            <span>|</span>
            <button>Continue Shopping</button>
        </div>
    )
}

const CartGrid = () => {
    return (
        <div>
            <GridHeadings />
            <GridItems />
        </div>
    )
}

const GridItems = () => {
    return (
        <div className='grid grid-cols-5'>
            <ProductDisplay />
            <ProductPrice />
            <ProductQuantities />
            <ProductTotal/>
        </div>
    )
}

const ProductTotal = () => {
    return (
        <div>
            <p>Net Total</p>
            <p>Disc Total</p>
        </div>
    )
}

const ProductQuantities = () => {
    return (
        <div>
            <div className='flex items-center justify-center gap-x-2 border text-xl rounded-lg'>
                <button className='p-2 text-2xl'>-</button>
                <span className='w-14 text-center'>COUNT</span>
                <button className='p-2 text-2xl'>+</button>
            </div>
            <button>Remove</button>
        </div>
    )
}

const ProductPrice = () => {
    return (
        <div>
            <div>
                <p>Ret P</p>
                <p>Disc P</p>
            </div>
            <p>25% off Counts Tees</p>
        </div>
    )
}

const ProductDisplay = () => {
    return (
        <div className='col-span-2 flex gap-x-6'>
            <img src="https://picsum.photos/id/26/200/300" alt="https://picsum.photos/id/26/200/200" />
            <div>
                <p>Product Name Goes Here</p>
                <p>Size</p>
            </div>
        </div>
    )
}

const GridHeadings = () => {
    return (
        <div className='grid grid-cols-5'>
            <span className='col-span-2'>Product</span>
            <span>Price</span>
            <span>Quantity</span>
            <span>Total</span>
        </div>
    )
}

export default CartPage