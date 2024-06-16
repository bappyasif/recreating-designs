import React from 'react'
import { Images } from '../_components/images'
import { Specefics } from '../_components/specefics'
import { Details } from '../_components/details'
import { YouMayAlsoLike } from '../_components/ymal'
import { FabricType } from '../_components/fabric-type'

const ProductDetailPage = ({ params }: { params: { name: string } }) => {
  return (
    <div className=''>
      <div className='flex gap-x-6 justify-between'>
        <Images />
        <Specefics />
      </div>
      {/* <Details /> */}
      <FabricType />
      <YouMayAlsoLike />
    </div>
  )
}

export default ProductDetailPage