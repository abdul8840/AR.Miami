import React, { useState } from 'react';
import Banner2 from '../../assets/images/hBanner2.jpg';
import Banner3 from '../../assets/images/hBanner3.jpg';
import InteriorDesignImage from '../../assets/images/homeInt.jpg';
import ExteriorDesignImage from '../../assets/images/houseExt.jpg';
import OurStoryImage1 from '../../assets/images/consTeam.jpg';
import OurStoryImage2 from '../../assets/images/values.jpg';
import OurStoryImage3 from '../../assets/images/mission.jpg';

const images = [
  Banner2,
  Banner3,
  InteriorDesignImage,
  ExteriorDesignImage,
  OurStoryImage1,
  OurStoryImage2,
  OurStoryImage3,
];

const MyGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState('');

  const openImage = (index) => {
    setSelectedImage(images[index]);
    setCurrentIndex(index);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const changeImage = (direction) => {
    setSlideDirection(direction === 1 ? 'slide-right' : 'slide-left');
    setTimeout(() => {
      let newIndex = currentIndex + direction;
      if (newIndex < 0) newIndex = images.length - 1;
      if (newIndex >= images.length) newIndex = 0;
      setSelectedImage(images[newIndex]);
      setCurrentIndex(newIndex);
      setSlideDirection('');
    }, 300);
  };

  return (
    <section className="!py-20">
      {/* Image Grid */}
      <div className="container !mx-auto !px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4 sm:px-0">
          {images.map((image, index) => (
            <div
              key={index}
              className="cursor-pointer overflow-hidden relative group"
              onClick={() => openImage(index)}
            >
              {/* Image */}
              <img
                src={image}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-lg group-hover:scale-[1.1] transition-all duration-300"
              />

              {/* Background Overlay on Hover */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>

              {/* Optional: Add Text or Icon on Hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg font-semibold">View Image</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popup Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 !z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm"
          onClick={closeImage}
        >
          <div
            className="relative max-w-full max-h-full bg-white/90 backdrop-blur-lg rounded-lg !p-4 md:!p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 bg-white rounded-full !p-2 shadow-lg hover:bg-gray-200 transition-colors z-[999] cursor-pointer"
              onClick={closeImage}
            >
              ✕
            </button>

            {/* Image Container */}
            <div className="relative flex items-center justify-center w-full h-full">
              {/* Left Arrow */}
              <button
                className="absolute left-2 md:-left-16 bg-white rounded-full !p-3 shadow-lg hover:bg-gray-200 transition-colors cursor-pointer z-50"
                onClick={(e) => {
                  e.stopPropagation();
                  changeImage(-1);
                }}
              >
                <span className="text-2xl md:text-3xl text-gray-800">&#10094;</span>
              </button>

              {/* Image */}
              <div className="overflow-hidden w-full h-full flex items-center justify-center">
                <img
                  key={currentIndex} // Force re-render to avoid flicker
                  src={selectedImage}
                  alt="Selected"
                  className={`w-[90vw] sm:w-[80vw] md:w-[70vw] lg:w-[60vw] xl:w-[50vw] max-h-[80vh] md:max-h-screen rounded-lg transform transition-transform duration-300 ${slideDirection === 'slide-left'
                      ? '-translate-x-full scale-90 opacity-0'
                      : slideDirection === 'slide-right'
                        ? 'translate-x-full scale-90 opacity-0'
                        : 'translate-x-0 scale-100 opacity-100'
                    }`}
                />
              </div>

              {/* Right Arrow */}
              <button
                className="absolute right-2 md:-right-16 bg-white rounded-full !p-3 shadow-lg hover:bg-gray-200 transition-colors cursor-pointer z-50"
                onClick={(e) => {
                  e.stopPropagation();
                  changeImage(1);
                }}
              >
                <span className="text-2xl md:text-3xl text-gray-800">&#10095;</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MyGallery;