import React from 'react'
import { Images } from '../_components/images'
import { Specefics } from '../_components/specefics'
import { Details } from '../_components/details'
import { YouMayAlsoLike } from '../_components/ymal'

const ProductDetailPage = ({ params }: { params: { name: string } }) => {
  return (
    <div className=''>
      <div className='flex gap-x-6 justify-between'>
        <Images />
        <Specefics />
      </div>
      {/* <Details /> */}
      <YouMayAlsoLike />
    </div>
  )
}

export default ProductDetailPage