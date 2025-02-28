import React from 'react'
import ContactHero from '../components/ContactContent/ContactHero'
import ContactForm from '../components/ContactContent/ContactForm'
import ContactLocation from '../components/ContactContent/ContactLocation'

const Contact = () => {
  return (
    <div className=''>
      <ContactHero />
      <ContactForm />
      <ContactLocation />
    </div>
  )
}

export default Contact
