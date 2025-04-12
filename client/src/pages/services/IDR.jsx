import React from 'react'
import { IDRHero } from '../../assets/data/heroData'
import Hero from '../../components/Others/Hero'
import ServicesBanner from '../../components/ServicesContent/ServicesBanner'
import { IDRBanner } from '../../assets/data/ServiceBanner'
import IDMServiceDetails from '../../components/ServicesContent/IDMServiceDetails'

const IDR = () => {
  return (
    <div>
      <Hero IDRHero={IDRHero} />
      <ServicesBanner IDRBanner={IDRBanner} />
      <IDMServiceDetails />
    </div>
  )
}

export default IDR
