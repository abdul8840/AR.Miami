import React, { useState, useEffect } from 'react';

import PBedroom1 from '../../assets/images/interiorImg/pinkRoom/IMG_4753.jpg';
import PBedroom2 from '../../assets/images/interiorImg/pinkRoom/IMG_4754.jpg';
import PBedroom3 from '../../assets/images/interiorImg/pinkRoom/IMG_4750.jpg';
import PBedroom4 from '../../assets/images/interiorImg/pinkRoom/IMG_4751.jpg';
import PBedroom5 from '../../assets/images/interiorImg/pinkRoom/IMG_4729.jpg';

import BBedroom1 from '../../assets/images/interiorImg/blackBedroom/IMG_0029.jpg';
import BBedroom2 from '../../assets/images/interiorImg/blackBedroom/IMG_0035.jpg';
import BBedroom3 from '../../assets/images/interiorImg/blackBedroom/IMG_0036.jpg';
import BBedroom4 from '../../assets/images/interiorImg/blackBedroom/IMG_0037.jpg';

import BWBedroom1 from '../../assets/images/interiorImg/blackWhiteroom/IMG_0095.jpg';
import BWBedroom2 from '../../assets/images/interiorImg/blackWhiteroom/IMG_0096.jpg';
import BWBedroom3 from '../../assets/images/interiorImg/blackWhiteroom/IMG_0100.jpg';
import BWBedroom4 from '../../assets/images/interiorImg/blackWhiteroom/IMG_0101.jpg';
import BWBedroom5 from '../../assets/images/interiorImg/blackWhiteroom/IMG_0102.jpg';

import BRBedroom1 from '../../assets/images/interiorImg/brownBedroom/IMG_4803.jpg';
import BRBedroom2 from '../../assets/images/interiorImg/brownBedroom/IMG_4804.jpg';
import BRBedroom3 from '../../assets/images/interiorImg/brownBedroom/IMG_4806.jpg';

import W2Bedroom1 from '../../assets/images/interiorImg/whiteRoom2/IMG_4643.jpg';
import W2Bedroom2 from '../../assets/images/interiorImg/whiteRoom2/IMG_4644.jpg';
import W2Bedroom3 from '../../assets/images/interiorImg/whiteRoom2/IMG_4645.jpg';

import BKitchen1 from '../../assets/images/interiorImg/blackKitchen/IMG_0023.jpg';
import BKitchen2 from '../../assets/images/interiorImg/blackKitchen/IMG_0024.jpg';
import BKitchen3 from '../../assets/images/interiorImg/blackKitchen/IMG_0025.jpg';
import BKitchen4 from '../../assets/images/interiorImg/blackKitchen/IMG_0026.jpg';

import WKitchen1 from '../../assets/images/interiorImg/whiteKitchen/IMG_0969.jpg';
import WKitchen2 from '../../assets/images/interiorImg/whiteKitchen/IMG_0970.jpg';
import WKitchen3 from '../../assets/images/interiorImg/whiteKitchen/IMG_0974.jpg';
import WKitchen4 from '../../assets/images/interiorImg/whiteKitchen/IMG_0975.jpg';
import WKitchen5 from '../../assets/images/interiorImg/whiteKitchen/IMG_0976.jpg';

import WAlmira1 from '../../assets/images/interiorImg/whiteAlmira/IMG_0987.jpg';
import WAlmira2 from '../../assets/images/interiorImg/whiteAlmira/IMG_0988.jpg';

import Outer1 from '../../assets/images/interiorImg/outer/IMG_4761.jpg';
import Outer2 from '../../assets/images/interiorImg/outer/IMG_4770.jpg';
import Outer3 from '../../assets/images/interiorImg/outer/IMG_4782.jpg';
import Outer4 from '../../assets/images/interiorImg/outer/IMG_4792.jpg';

import BWashroom1 from '../../assets/images/interiorImg/blackWashroom/IMG_0039.jpg';
import BWashroom2 from '../../assets/images/interiorImg/blackWashroom/IMG_0041.jpg';
import BWashroom3 from '../../assets/images/interiorImg/blackWashroom/IMG_0044.jpg';
import BWashroom4 from '../../assets/images/interiorImg/blackWashroom/IMG_0045.jpg';
import BWashroom5 from '../../assets/images/interiorImg/blackWashroom/IMG_0090.jpg';

import WRashroom1 from '../../assets/images/interiorImg/whiteWashroom/IMG_0977.jpg';
import WRashroom2 from '../../assets/images/interiorImg/whiteWashroom/IMG_0978.jpg';
import WRashroom3 from '../../assets/images/interiorImg/whiteWashroom/IMG_0980.jpg';
import WRashroom4 from '../../assets/images/interiorImg/whiteWashroom/IMG_0981.jpg';

import BRashroom1 from '../../assets/images/interiorImg/brownWashroom/IMG_4673.png';
import BRashroom2 from '../../assets/images/interiorImg/brownWashroom/IMG_4696.jpg';
import BRashroom3 from '../../assets/images/interiorImg/brownWashroom/IMG_4697.jpg';
import BRashroom4 from '../../assets/images/interiorImg/brownWashroom/IMG_4698.jpg';
import BRashroom5 from '../../assets/images/interiorImg/brownWashroom/IMG_4808.jpg';

import BRLobby1 from '../../assets/images/interiorImg/brownLobby/IMG_4824.png';
import BRLobby2 from '../../assets/images/interiorImg/brownLobby/IMG_4836.png';
import BRLobby3 from '../../assets/images/interiorImg/brownLobby/IMG_4843.png';
import BRLobby4 from '../../assets/images/interiorImg/brownLobby/IMG_4849.jpg';

// Sample image imports
const pinkBedroomImages = [
  { id: 1, src: PBedroom1, alt: 'Bedroom 1' },
  { id: 2, src: PBedroom2, alt: 'Bedroom 2' },
  { id: 3, src: PBedroom3, alt: 'Bedroom 3' },
  { id: 4, src: PBedroom4, alt: 'Bedroom 4' },
  { id: 5, src: PBedroom5, alt: 'Bedroom 5' },
];

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

const brownBedroomImages = [
  { id: 1, src: BRBedroom1, alt: 'Bedroom 1' },
  { id: 2, src: BRBedroom2, alt: 'Bedroom 2' },
  { id: 3, src: BRBedroom3, alt: 'Bedroom 3' },
];

const white2BedroomImages = [
  { id: 1, src: W2Bedroom1, alt: 'Bedroom 1' },
  { id: 2, src: W2Bedroom2, alt: 'Bedroom 2' },
  { id: 3, src: W2Bedroom3, alt: 'Bedroom 3' },
];

const kitchenImages = [
  { id: 1, src: BKitchen1, alt: 'Kitchen 1' },
  { id: 2, src: BKitchen2, alt: 'Kitchen 2' },
  { id: 3, src: BKitchen3, alt: 'Kitchen 3' },
  { id: 4, src: BKitchen4, alt: 'Kitchen 4' },
];

const WhitekitchenImages = [
  { id: 1, src: WKitchen1, alt: 'Kitchen 1' },
  { id: 2, src: WKitchen2, alt: 'Kitchen 2' },
  { id: 3, src: WKitchen3, alt: 'Kitchen 3' },
  { id: 4, src: WKitchen4, alt: 'Kitchen 4' },
  { id: 5, src: WKitchen5, alt: 'Kitchen 5' },
];

const WhiteAlmiraImages = [
  { id: 1, src: WAlmira1, alt: 'Almira 1' },
  { id: 2, src: WAlmira2, alt: 'Almira 2' },
];

const OuterImages = [
  { id: 1, src: Outer1, alt: 'outer 1' },
  { id: 2, src: Outer2, alt: 'outer 2' },
  { id: 3, src: Outer3, alt: 'outer 3' },
  { id: 4, src: Outer4, alt: 'outer 4' },
];

const BlackWashroomImages = [
  { id: 1, src: BWashroom1, alt: 'Washroom 1' },
  { id: 2, src: BWashroom2, alt: 'Washroom 2' },
  { id: 3, src: BWashroom3, alt: 'Washroom 3' },
  { id: 4, src: BWashroom4, alt: 'Washroom 4' },
  { id: 5, src: BWashroom5, alt: 'Washroom 5' },
];

const WhiteWashroomImages = [
  { id: 1, src: WRashroom1, alt: 'Washroom 1' },
  { id: 2, src: WRashroom2, alt: 'Washroom 2' },
  { id: 3, src: WRashroom3, alt: 'Washroom 3' },
  { id: 4, src: WRashroom4, alt: 'Washroom 4' },
];

const BrownWashroomImages = [
  { id: 1, src: BRashroom1, alt: 'Washroom 1' },
  { id: 2, src: BRashroom2, alt: 'Washroom 2' },
  { id: 3, src: BRashroom3, alt: 'Washroom 3' },
  { id: 4, src: BRashroom4, alt: 'Washroom 4' },
  { id: 5, src: BRashroom5, alt: 'Washroom 5' },
];

const BrownLobbyImages = [
  { id: 1, src: BRLobby1, alt: 'Lobby 1' },
  { id: 2, src: BRLobby2, alt: 'Lobby 2' },
  { id: 3, src: BRLobby3, alt: 'Lobby 3' },
  { id: 4, src: BRLobby4, alt: 'Lobby 4' },
];

const roomCategories = [
  { name: 'a1', images: pinkBedroomImages },
  { name: 'a2', images: bedroomImages },
  { name: 'a3', images: whiteBedroomImages },
  { name: 'a4', images: brownBedroomImages },
  { name: 'a5', images: white2BedroomImages },
  { name: 'a6', images: kitchenImages },
  { name: 'a7', images: WhitekitchenImages },
  { name: 'a8', images: WhiteAlmiraImages },
  { name: 'a9', images: OuterImages },
  { name: 'a10', images: BlackWashroomImages },
  { name: 'a11', images: WhiteWashroomImages },
  { name: 'a12', images: BrownWashroomImages },
  { name: 'a13', images: BrownLobbyImages },

].filter(category => category.images && category.images.length > 0);

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
    if (selectedCategory !== category) {
      setSelectedCategory(category);
      setCurrentMainImageIndex(0); // Reset index for new category
    } else {
      setCurrentMainImageIndex(index);
    }

    setTimeout(() => {
      setIsAnimating(false);
    }, 200);
  };

  // Enhanced auto-rotate with pause on hover
  useEffect(() => {
    setCurrentMainImageIndex(0); // Reset index when category changes
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
            <div key={index} className="!mb-14 last:!mb-0">

              {/* Main Image Display */}
              <div
                className="!w-full !h-68 !mb-3 !rounded-lg !overflow-hidden !shadow-lg !cursor-pointer !relative"
                onClick={() => openImage(category, currentMainImageIndex)}
              >
                {category.images[currentMainImageIndex] ? (
                  <img
                    src={category.images[currentMainImageIndex].src}
                    alt={category.images[currentMainImageIndex].alt}
                    className={`!w-full !h-full !object-cover !transition-all !duration-300 !ease-in-out ${isAnimating ? '!opacity-70 !scale-95' : '!opacity-100 !scale-100'
                      }`}
                    onLoad={() => setIsAnimating(false)}
                  />
                ) : (
                  <div>Loading...</div>
                )}
                <div className="!absolute !inset-0 !bg-black/30 !opacity-0 hover:!opacity-100 !transition-opacity !duration-300 !flex !items-center !justify-center">
                  <span className="!text-white !text-sm !font-semibold">View Larger</span>
                </div>
              </div>

              {/* Thumbnail Gallery */}
              <div className="!grid !grid-cols-5 !gap-2">
                {category.images.map((image, index) => (
                  <div
                    key={image.id}
                    className={`!h-20 !rounded !overflow-hidden !shadow-md !cursor-pointer !transition-all !duration-300 ${index === currentMainImageIndex ? '!ring-2 !ring-blue-500 !scale-105' : 'hover:!scale-105'
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
            <div key={groupIndex} className="!grid !grid-cols-1 !gap-[100px] !mb-12 last:!mb-0">
              {group.map((category) => {
                // Ensure the index is within bounds
                const safeIndex = currentMainImageIndex < category.images.length ? currentMainImageIndex : 0;
                return (
                  <div
                    key={category.name}
                    className="!group !relative !mb-0 !transition-all !duration-300 hover:!shadow-xl hover:!z-10"
                  >
                    {/* Enhanced Main Image Container */}
                    <div
                      className="!w-full !h-72 lg:!h-96 xl:!h-96 !mb-3 !rounded-lg !overflow-hidden !shadow-lg !cursor-pointer !relative !transition-all !duration-500 group-hover:!shadow-2xl"
                      onClick={() => openImage(category, safeIndex)}
                    >
                      <img
                        src={category.images[safeIndex].src}
                        alt={category.images[safeIndex].alt}
                        className={`!w-full !h-full !object-cover !transition-all !duration-700 !ease-in-out ${isAnimating ? '!opacity-70 !scale-95' : '!opacity-100 !scale-100'
                          }`}
                      />
                      <div className="!absolute !inset-0 !bg-gradient-to-t !from-black/40 !via-black/20 !to-transparent !opacity-0 group-hover:!opacity-100 !transition-opacity !duration-300 !flex !items-end !justify-center !pb-4">
                        <span className="!text-white !text-lg !font-semibold !transform !translate-y-4 group-hover:!translate-y-0 !transition-transform !duration-300">
                          View Gallery
                        </span>
                      </div>
                    </div>

                    {/* Thumbnail Navigation */}
                    <div className="!grid !grid-cols-5 !gap-2">
                      {category.images.map((image, index) => (
                        <div
                          key={image.id}
                          className={`!h-16 sm:!h-32 !rounded-lg !overflow-hidden !shadow-md !cursor-pointer !transition-all !duration-300 !relative ${index === safeIndex
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
                          <div className={`!absolute !inset-0 !bg-black/30 !transition-opacity !duration-300 ${index === safeIndex ? '!opacity-0' : '!opacity-0 hover:!opacity-100'
                            }`}></div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
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
                  className={`!max-w-[90vw] !max-h-[85vh] !rounded-lg !transform !transition-all !duration-500 !ease-[cubic-bezier(0.25,0.1,0.25,1)] !object-contain ${slideDirection === 'slide-left'
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
                    className={`!h-14 !w-14 sm:!h-16 sm:!w-16 !flex-shrink-0 !rounded !overflow-hidden !shadow-md !cursor-pointer !transition-all !duration-300 !relative ${index === currentIndex
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
                    <div className={`!absolute !inset-0 !bg-black/30 !transition-opacity !duration-300 ${index === currentIndex ? '!opacity-0' : '!opacity-0 hover:!opacity-100'
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