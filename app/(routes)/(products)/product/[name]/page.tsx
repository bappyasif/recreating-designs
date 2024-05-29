import React from 'react'

const ProductDetailPage = ({params}: {params: {name: string}}) => {
  return (
    <div>ProductDetailPage - {params.name}</div>
  )
}

export default ProductDetailPage