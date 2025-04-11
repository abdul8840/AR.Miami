import React, { useState, useEffect } from 'react';
import BBedroom1 from '../../assets/images/interiorImg/blackBedroom/IMG_0029.jpg';
import BBedroom2 from '../../assets/images/interiorImg/blackBedroom/IMG_0035.jpg';
import BBedroom3 from '../../assets/images/interiorImg/blackBedroom/IMG_0036.jpg';
import BBedroom4 from '../../assets/images/interiorImg/blackBedroom/IMG_0037.jpg';

import BWBedroom1 from '../../assets/images/interiorImg/blackWhiteroom/IMG_0095.jpg';
import BWBedroom2 from '../../assets/images/interiorImg/blackWhiteroom/IMG_0096.jpg';
import BWBedroom3 from '../../assets/images/interiorImg/blackWhiteroom/IMG_0100.jpg';
import BWBedroom4 from '../../assets/images/interiorImg/blackWhiteroom/IMG_0101.jpg';
import BWBedroom5 from '../../assets/images/interiorImg/blackWhiteroom/IMG_0102.jpg';

import BKitchen1 from '../../assets/images/interiorImg/blackKitchen/IMG_0023.jpg';
import BKitchen2 from '../../assets/images/interiorImg/blackKitchen/IMG_0024.jpg';
import BKitchen3 from '../../assets/images/interiorImg/blackKitchen/IMG_0025.jpg';
import BKitchen4 from '../../assets/images/interiorImg/blackKitchen/IMG_0026.jpg';

import BWashroom1 from '../../assets/images/interiorImg/blackWashroom/IMG_0039.jpg';
import BWashroom2 from '../../assets/images/interiorImg/blackWashroom/IMG_0041.jpg';
import BWashroom3 from '../../assets/images/interiorImg/blackWashroom/IMG_0044.jpg';
import BWashroom4 from '../../assets/images/interiorImg/blackWashroom/IMG_0045.jpg';
import BWashroom5 from '../../assets/images/interiorImg/blackWashroom/IMG_0090.jpg';

// Sample image imports
const bedroomImages = [
  { id: 1, src: BBedroom1, alt: 'Bedroom 1' },
  { id: 2, src: BBedroom2, alt: 'Bedroom 2' },
  { id: 3, src: BBedroom3, alt: 'Bedroom 3' },
  { id: 4, src: BBedroom4, alt: 'Bedroom 4' },
];

const whiteBedroomImages = [
  { id: 1, src: BWBedroom1, alt: 'Bedroom 1' },
  { id: 2, src: BWBedroom2, alt: 'Bedroom 2' },
  { id: 3, src: BWBedroom3, alt: 'Bedroom 3' },
  { id: 4, src: BWBedroom4, alt: 'Bedroom 4' },
  { id: 5, src: BWBedroom5, alt: 'Bedroom 5' },
];

const kitchenImages = [
  { id: 1, src: BKitchen1, alt: 'Kitchen 1' },
  { id: 2, src: BKitchen2, alt: 'Kitchen 2' },
  { id: 3, src: BKitchen3, alt: 'Kitchen 3' },
  { id: 4, src: BKitchen4, alt: 'Kitchen 4' },
];

const BlackWashroomImages = [
  { id: 1, src: BWashroom1, alt: 'Kitchen 1' },
  { id: 2, src: BWashroom2, alt: 'Kitchen 2' },
  { id: 3, src: BWashroom3, alt: 'Kitchen 3' },
  { id: 4, src: BWashroom4, alt: 'Kitchen 4' },
  { id: 5, src: BWashroom5, alt: 'Kitchen 5' },
];

const roomCategories = [
  { name: '1', images: bedroomImages },
  { name: '2', images: whiteBedroomImages },
  { name: '3', images: kitchenImages },
  { name: '4', images: BlackWashroomImages },
];

const MyGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState(roomCategories[0]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState('');
  const [currentMainImageIndex, setCurrentMainImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const openImage = (category, index) => {
    setSelectedCategory(category);
    setSelectedImage(category.images[index]);
    setCurrentIndex(index);
    setImageLoaded(false);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const changeImage = (direction) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setSlideDirection(direction === 1 ? 'slide-right' : 'slide-left');
    setImageLoaded(false);
    
    setTimeout(() => {
      let newIndex = currentIndex + direction;
      if (newIndex < 0) newIndex = selectedCategory.images.length - 1;
      if (newIndex >= selectedCategory.images.length) newIndex = 0;
      setSelectedImage(selectedCategory.images[newIndex]);
      setCurrentIndex(newIndex);
      setSlideDirection('');
      setIsAnimating(false);
    }, 500);
  };

  const changeMainImage = (category, index) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setSelectedCategory(category);
    setCurrentMainImageIndex(index);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 200);
  };

  // Enhanced auto-rotate with pause on hover
  useEffect(() => {
    let interval;
    const startInterval = () => {
      interval = setInterval(() => {
        setIsAnimating(true);
        setCurrentMainImageIndex((prevIndex) => 
          (prevIndex + 1) % selectedCategory.images.length
        );
        setTimeout(() => setIsAnimating(false), 300);
      }, 5000);
    };
    
    startInterval();
    return () => clearInterval(interval);
  }, [selectedCategory]);

  // Group categories into pairs for 2-column layout
  const groupedCategories = [];
  for (let i = 0; i < roomCategories.length; i += 2) {
    groupedCategories.push(roomCategories.slice(i, i + 2));
  }

  return (
    <section className="!py-12 md:!py-16 !bg-gray-50">
      <div className="container !mx-auto !px-2 sm:!px-4">
        {/* Mobile View - Single Column */}
        <div className="!block md:!hidden">
          {roomCategories.map((category, index) => (
            <div key={index} className="!mb-10 last:!mb-0">
              
              {/* Main Image Display */}
              <div 
                className="!w-full !h-48 !mb-3 !rounded-lg !overflow-hidden !shadow-lg !cursor-pointer !relative"
                onClick={() => openImage(category, currentMainImageIndex)}
              >
                <img
                  src={category.images[currentMainImageIndex].src}
                  alt={category.images[currentMainImageIndex].alt}
                  className={`!w-full !h-full !object-cover !transition-all !duration-300 !ease-in-out ${
                    isAnimating ? '!opacity-70 !scale-95' : '!opacity-100 !scale-100'
                  }`}
                  onLoad={() => setIsAnimating(false)}
                />
                <div className="!absolute !inset-0 !bg-black/30 !opacity-0 hover:!opacity-100 !transition-opacity !duration-300 !flex !items-center !justify-center">
                  <span className="!text-white !text-sm !font-semibold">View Larger</span>
                </div>
              </div>
              
              {/* Thumbnail Gallery */}
              <div className="!grid !grid-cols-5 !gap-2">
                {category.images.map((image, index) => (
                  <div
                    key={image.id}
                    className={`!h-20 !rounded !overflow-hidden !shadow-md !cursor-pointer !transition-all !duration-300 ${
                      index === currentMainImageIndex ? '!ring-2 !ring-blue-500 !scale-105' : 'hover:!scale-105'
                    }`}
                    onClick={() => changeMainImage(category, index)}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="!w-full !h-full !object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Desktop View - Enhanced Two Columns */}
        <div className="!hidden md:!block">
          {groupedCategories.map((group, groupIndex) => (
            <div key={groupIndex} className="!grid !grid-cols-1 lg:!grid-cols-2 !gap-6 !mb-12 last:!mb-0">
              {group.map((category) => (
                <div 
                  key={category.name} 
                  className="!group !relative !mb-0 !transition-all !duration-300 hover:!shadow-xl hover:!z-10"
                >
                  
                  {/* Enhanced Main Image Container */}
                  <div 
                    className="!w-full !h-64 lg:!h-72 xl:!h-80 !mb-3 !rounded-lg !overflow-hidden !shadow-lg !cursor-pointer !relative !transition-all !duration-500 group-hover:!shadow-2xl"
                    onClick={() => openImage(category, currentMainImageIndex)}
                  >
                    <img
                      src={category.images[currentMainImageIndex].src}
                      alt={category.images[currentMainImageIndex].alt}
                      className={`!w-full !h-full !object-cover !transition-all !duration-700 !ease-in-out ${
                        isAnimating ? '!opacity-70 !scale-95' : '!opacity-100 !scale-100'
                      }`}
                    />
                    <div className="!absolute !inset-0 !bg-gradient-to-t !from-black/40 !via-black/20 !to-transparent !opacity-0 group-hover:!opacity-100 !transition-opacity !duration-300 !flex !items-end !justify-center !pb-4">
                      <span className="!text-white !text-lg !font-semibold !transform !translate-y-4 group-hover:!translate-y-0 !transition-transform !duration-300">
                        View Gallery
                      </span>
                    </div>
                  </div>
                  
                  {/* Thumbnail Navigation with Enhanced Hover Effects */}
                  <div className="!grid !grid-cols-5 !gap-2">
                    {category.images.map((image, index) => (
                      <div
                        key={image.id}
                        className={`!h-16 sm:!h-20 !rounded-lg !overflow-hidden !shadow-md !cursor-pointer !transition-all !duration-300 !relative ${
                          index === currentMainImageIndex 
                            ? '!ring-2 !ring-blue-500 !scale-105 !z-10' 
                            : 'hover:!scale-105 !hover:!z-10'
                        }`}
                        onClick={() => changeMainImage(category, index)}
                      >
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="!w-full !h-full !object-cover"
                        />
                        <div className={`!absolute !inset-0 !bg-black/30 !transition-opacity !duration-300 ${
                          index === currentMainImageIndex ? '!opacity-0' : '!opacity-0 hover:!opacity-100'
                        }`}></div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Popup Modal */}
      {selectedImage && (
        <div
          className="!fixed !inset-0 !z-50 !flex !items-center !justify-center !bg-black/90 !backdrop-blur-md"
          onClick={closeImage}
        >
          <div
            className="!relative !max-w-[95vw] !max-h-[95vh] !bg-white/95 !backdrop-blur-lg !rounded-xl !p-2 sm:!p-4 md:!p-6 !overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="!absolute !top-2 !right-2 !bg-white/90 !rounded-full !p-2 !shadow-xl hover:!bg-gray-200 !transition-all !duration-300 !z-[999] !cursor-pointer hover:!scale-110"
              onClick={closeImage}
            >
              <span className="!text-xl !block !transform !transition-transform hover:!rotate-90">✕</span>
            </button>

            {/* Image Container with Enhanced Navigation */}
            <div className="!relative !w-full !h-full !flex !items-center !justify-center">
              {/* Navigation Arrows */}
              <button
                className="!absolute !left-2 md:!left-4 !bg-white/90 !rounded-full !p-2 md:!p-3 !shadow-xl hover:!bg-gray-200 !transition-all !duration-300 !z-50 !cursor-pointer hover:!scale-110"
                onClick={(e) => {
                  e.stopPropagation();
                  changeImage(-1);
                }}
              >
                <span className="!text-2xl md:!text-3xl !text-gray-800 !block !transform hover:!translate-x-[-2px]">&#10094;</span>
              </button>

              {/* Main Image with Enhanced Animation */}
              <div className="!w-full !h-full !flex !items-center !justify-center !overflow-hidden">
                {!imageLoaded && (
                  <div className="!absolute !inset-0 !flex !items-center !justify-center !bg-gray-100 !rounded-lg">
                    <div className="!animate-pulse !text-gray-400">Loading...</div>
                  </div>
                )}
                <img
                  key={currentIndex}
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className={`!max-w-[90vw] !max-h-[85vh] !rounded-lg !transform !transition-all !duration-500 !ease-[cubic-bezier(0.25,0.1,0.25,1)] !object-contain ${
                    slideDirection === 'slide-left'
                      ? '!-translate-x-full !opacity-70'
                      : slideDirection === 'slide-right'
                      ? '!translate-x-full !opacity-70'
                      : '!translate-x-0 !opacity-100'
                  }`}
                  style={{
                    maxHeight: 'calc(100vh - 100px)',
                    maxWidth: 'calc(100vw - 100px)'
                  }}
                  onLoad={() => setImageLoaded(true)}
                />
              </div>

              <button
                className="!absolute !right-2 md:!right-4 !bg-white/90 !rounded-full !p-2 md:!p-3 !shadow-xl hover:!bg-gray-200 !transition-all !duration-300 !z-50 !cursor-pointer hover:!scale-110"
                onClick={(e) => {
                  e.stopPropagation();
                  changeImage(1);
                }}
              >
                <span className="!text-2xl md:!text-3xl !text-gray-800 !block !transform hover:!translate-x-[2px]">&#10095;</span>
              </button>
            </div>

            {/* Enhanced Thumbnail Strip */}
            <div className="!mt-3 !overflow-x-auto !pb-2">
              <div className="!flex !space-x-2 !w-max !mx-auto">
                {selectedCategory.images.map((image, index) => (
                  <div
                    key={image.id}
                    className={`!h-14 !w-14 sm:!h-16 sm:!w-16 !flex-shrink-0 !rounded !overflow-hidden !shadow-md !cursor-pointer !transition-all !duration-300 !relative ${
                      index === currentIndex 
                        ? '!ring-2 !ring-blue-500 !scale-110 !z-10' 
                        : 'hover:!scale-105 hover:!z-10'
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedImage(image);
                      setCurrentIndex(index);
                      setImageLoaded(false);
                    }}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="!w-full !h-full !object-cover"
                    />
                    <div className={`!absolute !inset-0 !bg-black/30 !transition-opacity !duration-300 ${
                      index === currentIndex ? '!opacity-0' : '!opacity-0 hover:!opacity-100'
                    }`}></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MyGallery;