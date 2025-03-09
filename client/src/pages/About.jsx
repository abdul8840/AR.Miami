import React from 'react';
import { Helmet } from 'react-helmet-async';
import AboutBanner from '../components/AboutContent/AboutBanner';
import OurStory from '../components/AboutContent/OurStory';
import Experience from '../components/Others/Experience';
import OurTeam from '../components/AboutContent/OurTeam';
import Hero from '../components/Others/Hero';
import { aboutHero } from '../assets/data/heroData';

const About = () => {
  return (
    <div>
      <Helmet>
        <title>Best Tech Repair in Miami</title>
        <meta 
          name="description" 
          content="Learn about AR.Miami — our story, mission, and dedicated team. We specialize in website development, SEO, and digital solutions to grow your business." 
        />
        <meta 
          name="keywords" 
          content="about us, AR.Miami, web development, digital marketing, SEO, e-commerce solutions, team, company story" 
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Hero aboutHero={aboutHero} />
      <AboutBanner />
      <Experience />
      <OurStory />
      <OurTeam />
    </div>
  );
};

export default About;
