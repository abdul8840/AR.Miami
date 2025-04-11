import React from 'react'
import HomeHero from '../components/HomeContent/HomeHero'
import HomeBanner from '../components/HomeContent/HomeBanner'
import HomeServices from '../components/HomeContent/HomeServices'
import HomeConsSteps from '../components/HomeContent/HomeConsSteps'
import HomeConsAbout from '../components/HomeContent/HomeConsAbout'
import FAQ from '../components/HomeContent/FAQ'
import Subscribe from '../components/Others/Subscribe'
import HomePageHero from '../components/HomeContent/HomePageHero'

const Home = () => {
  return (
    <div>
      <HomePageHero />
      <HomeHero />
      <HomeBanner />
      <HomeConsAbout />
      <HomeServices />
      <HomeConsSteps />
      <FAQ />
      <Subscribe />
    </div>
  )
}

export default Home
