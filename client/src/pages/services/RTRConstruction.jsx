import React from 'react'
import { RTRConsHero } from '../../assets/data/heroData'
import Hero from '../../components/Others/Hero'
import ServicesBanner from '../../components/ServicesContent/ServicesBanner'
import { RTRBanner } from '../../assets/data/ServiceBanner'

const RTRConstruction = () => {
  return (
    <div>
      <Hero RTRConsHero={RTRConsHero}/>
      <ServicesBanner RTRBanner={RTRBanner} />
    </div>
  )
}

export default RTRConstruction
