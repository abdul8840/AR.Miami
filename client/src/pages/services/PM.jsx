import React from 'react'
import Hero from '../../components/Others/Hero'
import { PMHero } from '../../assets/data/heroData'
import { PMBanner } from '../../assets/data/ServiceBanner'
import ServicesBanner from '../../components/ServicesContent/ServicesBanner'

const PM = () => {
  return (
    <div>
      <Hero PMHero={PMHero} />
      <ServicesBanner PMBanner={PMBanner} />
    </div>
  )
}

export default PM
