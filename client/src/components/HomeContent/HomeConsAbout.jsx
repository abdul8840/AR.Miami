import React from 'react';
import InteriorDesignImage from '../../assets/images/homeInt.jpg'; // Replace with your image path
import ExteriorDesignImage from '../../assets/images/houseExt.jpg'; // Replace with your image path

const HomeConsAbout = () => {
  return (
    <section className="!py-12 md:!py-18 !bg-gray-100">
      <div className="container mx-auto !px-5 lg:px-0">
        {/* Interior Design Section */}
        <div className="flex flex-col lg:flex-row gap-8 items-center mb-12">
          {/* Image */}
          <div className="lg:w-1/2 overflow-hidden">
            <img
              src={InteriorDesignImage}
              alt="Interior Design"
              className="w-full h-[400px] sm:h-[500px] object-cover  rounded-lg shadow-lg hover:scale-[1.1] transition-all"
            />
          </div>

          {/* Content */}
          <div className="lg:w-1/2">
            <p className="text-md sm:text-xl text-orange-500 italic !mb-4">
              <span className="inline-block w-[50px] h-[3px] bg-orange-500 !mb-1"></span> Design Your Space, Define Your Life.
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 !mb-4">
              Interior Design: Crafting Spaces That Inspire
            </h2>

            <p className="text-sm sm:text-[16px] text-gray-600">
              Transform your interiors into breathtaking spaces that reflect your personality and style. Our expert interior design services blend functionality with elegance, creating custom designs tailored to your vision. Whether you’re dreaming of a modern kitchen, a cozy living room, or a luxurious office, we bring ideas to life with curated color palettes, premium materials, and thoughtful layouts.
            </p>
            <p className="text-sm sm:text-[16px] text-gray-600 !mt-4">
              From concept to completion, we handle everything — lighting, furniture selection, décor, and finishes — ensuring every detail adds to the harmony of your home or commercial space. Let us create an environment you’ll love to live and work in.
            </p>

            <div className="flex gap-4">
              <button className='broder border-2 !py-2 !px-4 border-orange-500 text-white font-semibold !mt-10 rounded-lg cursor-pointer bg-orange-500 hover:bg-white hover:text-black transition-all'>Call Now</button>
              <button className='broder border-2 !py-2 !px-4 border-orange-500 font-semibold !mt-10 rounded-lg cursor-pointer hover:bg-orange-500 hover:text-white transition-all'>Get Free Quotes</button>
            </div>
          </div>
        </div>

        {/* Exterior Design Section */}
        <div className="flex flex-col lg:flex-row gap-8 items-center !mt-10">
          {/* Content */}
          <div className="lg:w-1/2 order-2 lg:order-1">
            <p className="text-md sm:text-xl text-orange-500 italic !mb-4">
              <span className="inline-block w-[30px] sm:w-[50px] h-[3px] bg-orange-500 !mb-1"></span> Where First Impressions Are Built to Last.
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 !mb-4">
              Exterior Design: Elevate Your Curb Appeal
            </h2>
            <p className="text-sm sm:text-[16px] text-gray-600">
              Your property’s exterior is its first impression — make it unforgettable. We specialize in designing stunning, durable exteriors that enhance your property’s beauty and value. Whether it’s a sleek modern facade, a charming traditional home, or a grand commercial building, we combine architectural expertise with aesthetic sensibility to create exteriors that stand out.
            </p>
            <p className="text-sm sm:text-[16px] text-gray-600 !mt-4">
              From roofing and siding to landscaping and entryways, we craft cohesive designs that blend style with structure. Our team uses high-quality materials and innovative techniques to ensure your property not only looks amazing but also withstands the elements for years to come.
            </p>
            <div className="flex gap-4">
              <button className='broder border-2 !py-2 !px-4 border-orange-500 text-white font-semibold !mt-10 rounded-lg cursor-pointer bg-orange-500 hover:bg-white hover:text-black transition-all'>Call Now</button>
              <button className='broder border-2 !py-2 !px-4 border-orange-500 font-semibold !mt-10 rounded-lg cursor-pointer hover:bg-orange-500 hover:text-white transition-all'>Get Free Quotes</button>
            </div>
          </div>

          {/* Image */}
          <div className="lg:w-1/2 lg:order-2 overflow-hidden">
            <img
              src={ExteriorDesignImage}
              alt="Exterior Design"
              className="w-full h-[400px] sm:h-[500px] object-cover  rounded-lg shadow-lg hover:scale-[1.1] transition-all"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeConsAbout;