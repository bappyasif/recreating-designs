import React from 'react'
import { features } from '../../data'

const KeyFeatures = () => {
  const { keyFeatures, specialFeatures, standardFeatures } = features
  return (
    <div className='flex flex-col gap-16'>
      <RenderFeaturedItem item={keyFeatures} />
      <RenderSpecialFeatures items={specialFeatures} />
      <RenderStandardFeatures items={standardFeatures} />
    </div>
  )
}

const RenderStandardFeatures = ({ items }) => {
  const { headings, keyPoints } = items
  const renderKeypoints = () => keyPoints.map(item => <StandardFeature key={item.titTxt} item={item} />)
  return (
    <div className='flex flex-col gap-6'>
      <ReUsableHeadingElement item={headings} />
      <div className='flex gap-4'>
        {renderKeypoints()}
      </div>
    </div>
  )
}

const StandardFeature = ({ item }) => {
  const { icon, titTxt, subTxt } = item;
  return (
    <div>
      <div>{icon}</div>
      <h2>{titTxt}</h2>
      <p>{subTxt}</p>
    </div>
  )
}

const RenderSpecialFeatures = ({ items }) => {
  const { heading, keyPoints } = items

  return (
    <div className='flex flex-col gap-9'>
      <ReUsableHeadingElement item={heading} />
      <div className='flex gap-4 justify-between'>
        <img className='h-96' src={"https://source.unsplash.com/random/?Autnomous-driving-Truck"} alt="selfdriving truck" />
        <RenderKeypoints items={keyPoints} />
      </div>
    </div>
  )
}

const RenderKeypoints = ({ items }) => {
  const renderItems = () => items?.map(item => <RenderKeypoint key={item.titTxt} item={item} />)

  return (
    <div className='flex flex-col gap-9'>
      {renderItems()}
    </div>
  )
}

const RenderKeypoint = ({ item }) => {
  const { titTxt, clickTxt } = item;

  return (
    <div>
      <h2>{titTxt}</h2>
      <h4>{clickTxt}</h4>
    </div>
  )
}

const ReUsableHeadingElement = ({ item }) => {
  const { titTxt, subTxt } = item;

  return (
    <div>
      <h2>{titTxt}</h2>
      <p>{subTxt}</p>
    </div>
  )
}


const RenderFeaturedItem = ({ item }) => {

  return (
    <div>
      <HeadingItem item={item} />
      <img className='h-96' src={"https://source.unsplash.com/random/?Autnomous-driving-Truck"} alt="selfdriving truck" />
    </div>
  )
}

const HeadingItem = ({ item }) => {
  const { titTxt, subTxt, btnTxt } = item;

  return (
    <div className='flex justify-between'>
      <h2 className='text-4xl w-1/3'>{titTxt}</h2>
      <div>
        <p>{subTxt}</p>
        <button className='p-0 px-6 py-1 bg-slate-800'>{btnTxt}</button>
      </div>
    </div>
  )
}

export default KeyFeatures