import React from 'react'
import { NewsMenu } from './FeaturedNews'

export const CompanyFeatures = () => {
  return (
    <div>
        <NewsMenu />
        <FeaturedImage />
        <FeaturedAnimations />
    </div>
  )
}

const FeaturedAnimations = () => {
    return (
        <div>
            <p>gif 1</p>
            <p>gif 2</p>
            <p>gif 3</p>
            <p>gif 4</p>
        </div>
    )
}

const FeaturedImage = () => {
    return (
        <div>
            <img src="#" alt="featured image" />
            <p>Orbitals News</p>
        </div>
    )
}
