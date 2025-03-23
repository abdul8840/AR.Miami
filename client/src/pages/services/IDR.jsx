import React from 'react'
import { IDRHero } from '../../assets/data/heroData'
import Hero from '../../components/Others/Hero'
import ServicesBanner from '../../components/ServicesContent/ServicesBanner'
import { IDRBanner } from '../../assets/data/ServiceBanner'

const IDR = () => {
  return (
    <div>
      <Hero IDRHero={IDRHero} />
      <ServicesBanner IDRBanner={IDRBanner} />
    </div>
  )
}

export default IDR
