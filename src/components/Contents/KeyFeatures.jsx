import React, { useEffect, useState } from 'react'
import { features } from '../../data'
import featureImg from "../../assets/concept-3.jpg"
import specialImg from "../../assets/concept-2.jpg"

const KeyFeatures = () => {
  const { keyFeatures, specialFeatures, standardFeatures } = features
  return (
    <div className='flex flex-col gap-16'>
      <div className='xxs:w-full md:w-2/3 m-auto flex flex-col gap-16'>
        <RenderFeaturedItem item={keyFeatures} />
        <RenderSpecialFeatures items={specialFeatures} />
      </div>
      <RenderStandardFeatures items={standardFeatures} />
    </div>
  )
}

const RenderStandardFeatures = ({ items }) => {
  const { headings, keyPoints } = items
  const renderKeypoints = () => keyPoints.map(item => <StandardFeature key={item.titTxt} item={item} />)
  return (
    <div className='flex flex-col items-center gap-6'>
      <ReUsableHeadingElement item={headings} />
      <div className='flex xxs:flex-col md:flex-row gap-4'>
        {renderKeypoints()}
      </div>
    </div>
  )
}

const StandardFeature = ({ item }) => {
  const { icon, titTxt, subTxt } = item;
  return (
    <div className='xxs:w-full md:w-1/3 flex flex-col gap-6'>
      <div className='text-6xl'>{icon}</div>
      <h2 className='text-2xl font-macondo'>{titTxt}</h2>
      <p className='text-base'>{subTxt}</p>
    </div>
  )
}

const RenderSpecialFeatures = ({ items }) => {
  const { heading, keyPoints } = items

  return (
    <div className='flex flex-col gap-9 items-center justify-between'>
      <ReUsableHeadingElement item={heading} />
      <div className='flex xxs:gap-1 md:gap-16 justify-around'>
        {/* <img className='h-96' src={"https://source.unsplash.com/random/?Autnomous-driving-Truck"} alt="selfdriving truck" /> */}
        <img className='min-h-max w-2/4 object-cover rounded-xl' src={specialImg} alt="selfdriving truck" />
        <RenderKeypoints items={keyPoints} />
      </div>
    </div>
  )
}

const RenderKeypoints = ({ items }) => {
  const [viewing, setViewing] = useState(null)

  const renderItems = () => items?.map((item, idx) => <RenderKeypoint key={item.titTxt} item={item} idx={idx} setViewing={setViewing} viewing={viewing} />)

  return (
    <div className='flex flex-col gap-9'>
      {renderItems()}
    </div>
  )
}

const RenderKeypoint = ({ item, idx, setViewing, viewing }) => {
  const { titTxt, clickTxt } = item;

  const handleClick = () => {
    setViewing(titTxt)
  }

  useEffect(() => {
    idx === 0 && setViewing(titTxt)
  }, [idx])

  return (
    <div onClick={handleClick}>
      <h2 className='font-macondo text-2xl'>{titTxt}</h2>
      {
        viewing === titTxt
          ? <h4 className='font-novaSlim'>{clickTxt}</h4>
          : null
      }
    </div>
  )
}

const ReUsableHeadingElement = ({ item }) => {
  const { titTxt, subTxt } = item;

  return (
    <div className='text-3xl flex flex-col gap-4'>
      <h2>{titTxt}</h2>
      <p className='text-lg font-novaSlim'>{subTxt}</p>
    </div>
  )
}


const RenderFeaturedItem = ({ item }) => {

  return (
    <div className='flex flex-col gap-9'>
      <HeadingItem item={item} />
      {/* <img className='w-full h-96' src={`https://source.unsplash.com/random/?Autnomous-driving-Truck${item.titTxt}`} alt="selfdriving truck" /> */}
      <img
        className='w-3/4 h-96 object-cover m-auto rounded-3xl'
        src={featureImg}
        alt="selfdriving truck"
      />
    </div>
  )
}

const HeadingItem = ({ item }) => {
  const { titTxt, subTxt, btnTxt } = item;

  return (
    <div className='flex justify-between gap-4'>
      <h2 className='text-2xl w-2/4'>{titTxt}</h2>
      <div>
        <p className='text-md font-novaSlim'>{subTxt}</p>
        <button className='p-0 px-6 py-1 bg-slate-800 font-monoton'>{btnTxt}</button>
      </div>
    </div>
  )
}

export default KeyFeatures