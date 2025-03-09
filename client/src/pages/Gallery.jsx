import React from 'react'
import { galleryHero } from '../assets/data/heroData'
import Hero from '../components/Others/Hero'

const Gallery = () => {
  return (
    <div>
      <Hero galleryHero={galleryHero} />
    </div>
  )
}

export default Gallery
