import React from 'react'

const Newsletter = ({item}) => {
  return (
    <div>
        <RenderItem item={item} />
        <SubscribeItem />
    </div>
  )
}

const SubscribeItem = () => {
    return (
        <div>
            <input type="text" placeholder='enter your email here' />
            <button>submit</button>
        </div>
    )
}

const RenderItem = ({item}) => {
    const {titTxt, subTxt} = item;

    return (
        <div>
            <h2>{titTxt}</h2>
            <p>{subTxt}</p>
        </div>
    )
}

export default Newsletter