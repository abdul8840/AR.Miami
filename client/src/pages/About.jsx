import React from 'react'
import AboutHero from '../components/AboutContent/AboutHero'
import AboutBanner from '../components/AboutContent/AboutBanner'
import OurStory from '../components/AboutContent/OurStory'
import Experience from '../components/Others/Experience'
import OurTeam from '../components/AboutContent/OurTeam'

const About = () => {
  return (
    <div>
      <AboutHero />
      <AboutBanner />
      <Experience />
      <OurStory />
      <OurTeam />
    </div>
  )
}

export default About
