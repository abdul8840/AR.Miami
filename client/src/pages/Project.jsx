import React from 'react'
import Hero from '../components/Others/Hero'
import { projectHero } from '../assets/data/heroData'

const Project = () => {
  return (
    <div>
      <Hero projectHero={projectHero} />
    </div>
  )
}

export default Project
