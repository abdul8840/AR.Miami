import React from 'react'
import ContactForm from '../components/ContactContent/ContactForm'
import ContactLocation from '../components/ContactContent/ContactLocation'
import Hero from '../components/Others/Hero'
import { contactHero } from '../assets/data/heroData'

const Contact = () => {
  return (
    <div className=''>
      <Hero contactHero={contactHero} />
      <ContactForm />
      <ContactLocation />
    </div>
  )
}

export default Contact
