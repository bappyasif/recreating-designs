import React from 'react'

const OutletPage = () => {
    return (
        <div className='min-h-screen space-y-10 w-1/3 mx-auto text-[#474747]'>
            <img src="https://cdn.shopify.com/s/files/1/0074/3666/4899/files/OUTLETLOGO.png?v=1580206293" alt="outlet page header image" />

            <p className='font-semibold text-2xl'>The Outlet is for subscribers only, please enter your email address below to continue.</p>

            <div className='flex flex-col gap-y-4 text-2xl font-light'>
                <p>
                    NOTE: If you're not already on our mailing list, entering your email below will subscribe you. You can of course unsubscribe at any time.
                </p>
                <p>
                    By continuing you accept our <a className='font-semibold' href='#'>privacy policy and terms & conditions</a>.
                </p>
            </div>

            <div className='flex flex-col gap-y-4'>
                <input type="email" name="email" id="email" className='text-xl h-10 bg-transparent text-slate-400 border-2 px-4 rounded-md' />
                <button className='self-start bg-[#474747] text-[#ffffff] hover:bg-[#ffff] hover:text-[#474747] text-2xl px-10 py-2 rounded-md border-2'>Continue</button>
            </div>
        </div>
    )
}

export default OutletPage