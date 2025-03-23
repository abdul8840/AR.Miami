import React from 'react'
import Hero from '../../components/Others/Hero'
import { HRRHero } from '../../assets/data/heroData'
import ServicesBanner from '../../components/ServicesContent/ServicesBanner'
import { HRRBanner } from '../../assets/data/ServiceBanner'

const HRR = () => {
  return (
    <div>
      <Hero HRRHero={HRRHero} />
      <ServicesBanner HRRBanner={HRRBanner} />
    </div>
  )
}

export default HRR
