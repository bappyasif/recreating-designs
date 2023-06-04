import React from 'react'
import { RenderLink } from '.';

const Copyrights = ({item}) => {
    const {copyright, links} = item;
    const renderLinks = () => links.map((item, idx) => <RenderLink key={idx} item={item} />)
  return (
    <div className='flex justify-between'>
        <div className='flex gap-4'>
            {renderLinks()}
        </div>
        <RenderCopyright txt={copyright} />
    </div>
  )
}

const RenderCopyright = ({txt}) => {
    return <div> &copy; {new Date().getFullYear()} {txt}</div>
}

export default Copyrights