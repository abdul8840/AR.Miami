import React from 'react'
import { RTRConsHero } from '../../assets/data/heroData'
import Hero from '../../components/Others/Hero'
import ServicesBanner from '../../components/ServicesContent/ServicesBanner'
import { RTRBanner } from '../../assets/data/ServiceBanner'
import RTRServiceDetail from '../../components/ServicesContent/RTRServiceDetail'

const RTRConstruction = () => {
  return (
    <div>
      <Hero RTRConsHero={RTRConsHero}/>
      <ServicesBanner RTRBanner={RTRBanner} />
      <RTRServiceDetail />
    </div>
  )
}

export default RTRConstruction
