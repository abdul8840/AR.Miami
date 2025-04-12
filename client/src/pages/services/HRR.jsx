import React from 'react'
import Hero from '../../components/Others/Hero'
import { HRRHero } from '../../assets/data/heroData'
import ServicesBanner from '../../components/ServicesContent/ServicesBanner'
import { HRRBanner } from '../../assets/data/ServiceBanner'
import HRRServiceDetail from '../../components/ServicesContent/HRRServiceDetail'

const HRR = () => {
  return (
    <div>
      <Hero HRRHero={HRRHero} />
      <ServicesBanner HRRBanner={HRRBanner} />
      <HRRServiceDetail />
    </div>
  )
}

export default HRR
