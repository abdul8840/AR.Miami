import React from 'react'
import { galleryHero } from '../assets/data/heroData'
import Hero from '../components/Others/Hero'
import MyGallery from '../components/GalleryContent/MyGallery'
import Subscribe from '../components/Others/Subscribe'

const Gallery = () => {
  return (
    <div>
      <Hero galleryHero={galleryHero} />
      <MyGallery />
      <Subscribe />
    </div>
  )
}

export default Gallery
