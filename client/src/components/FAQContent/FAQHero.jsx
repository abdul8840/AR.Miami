import React from 'react';
import ContactHeroImage from '../../assets/images/faqbg.jpg'; // Replace with your image path

const FAQHero = () => {
  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-[80vh] bg-cover bg-center transition-all duration-500 ease-in-out transform hover:scale-105"
        style={{ backgroundImage: `url(${ContactHeroImage})` }}
      >
        {/* Gradient Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70 opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center !px-5 lg:!px-0">
        <h1 className="text-4xl sm:text-5xl md:text-6xl text-orange-500 font-bold !mb-4">
          FAQ
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white max-w-2xl mx-auto">
          Did you have any query? don't worry we are here to resolve it.
        </p>
      </div>
    </section>
  );
};

export default FAQHero;