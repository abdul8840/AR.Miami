import React from 'react'
import HomeHero from '../components/HomeContent/HomeHero'
import HomeBanner from '../components/HomeContent/HomeBanner'
import HomeServices from '../components/HomeContent/HomeServices'
import HomeConsSteps from '../components/HomeContent/HomeConsSteps'
import HomeConsAbout from '../components/HomeContent/HomeConsAbout'

const Home = () => {
  return (
    <div>
      <HomeHero />
      <HomeBanner />
      <HomeConsAbout />
      <HomeServices />
      <HomeConsSteps />
    </div>
  )
}

export default Home
