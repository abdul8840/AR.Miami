import React from 'react';

const Hero = ({projectHero, faqHero, contactHero, aboutHero, galleryHero}) => {
  const heroContent = projectHero || faqHero || contactHero || aboutHero || galleryHero;
  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-[80vh] bg-cover bg-center transition-all duration-500 ease-in-out transform hover:scale-105"
        style={{ backgroundImage: `url(${heroContent?.HeroImage})` }}
      >
        {/* Gradient Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70 opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center !px-5 lg:!px-0">
        <h1 className="text-4xl sm:text-5xl md:text-6xl text-[#023E8A] font-bold !mb-4">
          {heroContent?.title}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white max-w-2xl mx-auto">
          {heroContent?.description}
        </p>
      </div>
    </section>
  );
};

export default Hero;