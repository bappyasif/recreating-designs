import React from 'react'
import { features } from '../../data'

const KeyFeatures = () => {
  const {keyFeatures, specialFeatures, standardFeatures} = features
  return (
    <div>
      <RenderFeaturedItem item={keyFeatures} />
      <RenderSpecialFeatures items={specialFeatures} />
      <RenderStandardFeatures items={standardFeatures} />
    </div>
  )
}

const RenderStandardFeatures = ({items}) => {
  const {headings, keyPoints} = items

  return (
    <div>
      <ReUsableHeadingElement item={headings} />
      <RenderKeypoints items={keyPoints} />
    </div>
  )
}

const RenderSpecialFeatures = ({items}) => {
  const {heading, keyPoints} = items

  return (
    <div>
      <ReUsableHeadingElement item={heading} />
      <RenderKeypoints items={keyPoints} />
    </div>
  )
}

const RenderKeypoints = ({items}) => {
  const renderItems = () => items?.map(item => <RenderKeypoint key={item.titTxt} item={item} />)

  return (
    <div>
      {renderItems()}
    </div>
  )
}

const RenderKeypoint = ({item}) => {
  const {titTxt, clickTxt} = item;

  return (
    <div>
      <h2>{titTxt}</h2>
      <h4>{clickTxt}</h4>
    </div>
  )
}

const ReUsableHeadingElement = ({item}) => {
  const {titTxt, subTxt} = item;

  return (
    <div>
      <h2>{titTxt}</h2>
      <p>{subTxt}</p>
    </div>
  )
}


const RenderFeaturedItem = ({item}) => {
  const {btnTxt} = item;

  return (
    <div>
      <ReUsableHeadingElement item={item} />
      <button>{btnTxt}</button>
    </div>
  )
}

export default KeyFeatures