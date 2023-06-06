import React from 'react'

const Newsletter = ({item}) => {
  return (
    <div className='flex justify-between'>
        <RenderItem item={item} />
        <SubscribeItem />
    </div>
  )
}

const SubscribeItem = () => {
    return (
        <div className='flex h-fit w-1/3 relative'>
            <input className='w-full px-4 rounded-full py-1 focus:outline focus:outline-2 focus: outline-violet-800' type="text" placeholder='enter your email here' />
            <button className='p-0 px-6 py-1 bg-slate-800 absolute right-0 rounded-full font-monoton'>submit</button>
        </div>
    )
}

const RenderItem = ({item}) => {
    const {titTxt, subTxt} = item;

    return (
        <div>
            <h2 className='text-xl'>{titTxt}</h2>
            <p className='text-sm'>{subTxt}</p>
        </div>
    )
}

export default Newsletter