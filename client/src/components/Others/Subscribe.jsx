import React from "react";

const Subscribe = () => {
  return (
    <div className="subbg !py-20 relative">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="!py-12 !px-6 sm:!px-8 bg-white/90 backdrop-blur-sm rounded-xl shadow-2xl text-center">
          {/* Heading */}
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-800 !mb-4">
            Let’s Turn Your House Into Your Dream Home!
          </h3>

          {/* Subheading */}
          <p className="text-lg text-gray-600 !mb-8">
            Contact us today for a consultation and let’s bring your vision to life.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="w-full sm:w-auto border-2 !py-3 !px-6 border-[#5c7c3b] text-white font-semibold rounded-lg cursor-pointer bg-[#5c7c3b] hover:bg-white hover:text-[#5c7c3b] transition-all duration-300 transform hover:scale-105">
              Call Now
            </button>
            <button className="w-full sm:w-auto border-2 !py-3 !px-6 border-[#5c7c3b] text-[#5c7c3b] font-semibold rounded-lg cursor-pointer hover:bg-[#5c7c3b] hover:text-white transition-all duration-300 transform hover:scale-105">
              Get Free Quotes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;