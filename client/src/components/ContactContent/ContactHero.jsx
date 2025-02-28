import React from 'react';
import ContactHeroImage from '../../assets/images/contactbg.jpg'; // Replace with your image path

const ContactHero = () => {
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
          Contact Us
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white max-w-2xl mx-auto">
          We are dedicated to creating spaces that inspire and endure. With a passion for design and a commitment to quality, we bring your vision to life.
        </p>
      </div>
    </section>
  );
};

export default ContactHero;