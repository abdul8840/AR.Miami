import React from 'react'
import { galleryHero } from '../assets/data/heroData'
import Hero from '../components/Others/Hero'
import MyGallery from '../components/GalleryContent/MyGallery'

const Gallery = () => {
  return (
    <div>
      <Hero galleryHero={galleryHero} />
      <MyGallery />
    </div>
  )
}

export default Gallery
