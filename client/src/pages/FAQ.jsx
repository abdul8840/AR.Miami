import React from 'react'
import FAQQues from '../components/FAQContent/FAQQues'
import { faqHero } from '../assets/data/heroData'
import Hero from '../components/Others/Hero'

const FAQ = () => {
  return (
    <div>
      <Hero faqHero={faqHero} />
      <FAQQues />
    </div>
  )
}

export default FAQ
