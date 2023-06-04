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
        <div>
            <input type="text" placeholder='enter your email here' />
            <button className='p-0 px-6 py-1 bg-slate-800'>submit</button>
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