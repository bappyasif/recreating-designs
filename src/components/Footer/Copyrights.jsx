import React from 'react'
import { RenderLink } from '.';

const Copyrights = ({item}) => {
    const {copyright, links} = item;
    const renderLinks = () => links.map((item, idx) => <RenderLink key={idx} item={item} />)
  return (
    <div>
        <RenderCopyright txt={copyright} />
        <div>
            {renderLinks()}
        </div>
    </div>
  )
}

const RenderCopyright = ({txt}) => {
    return <div> @ 2023 {txt}</div>
}

export default Copyrights