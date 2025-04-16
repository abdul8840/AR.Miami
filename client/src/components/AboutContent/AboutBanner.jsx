import React from 'react';
import AbtBanner from '../../assets/images/constructionTeam.jpg';
import { Link } from 'react-router-dom';
import { FaHammer, FaHome, FaPaintRoller, FaRulerCombined, FaTools } from 'react-icons/fa';
import { motion } from 'framer-motion';

const AboutBanner = () => {
  const phoneNumber = '+17862109819';
  
  // Background animation icons with motion variants
  const backgroundIcons = [
    { 
      icon: <FaHammer className="text-[#5c7c3b] opacity-10" size={40} />, 
      position: { top: '10%', left: '5%' },
      animation: { y: [0, -20, 0], rotate: [0, 5, 0] }
    },
    { 
      icon: <FaHome className="text-[#5c7c3b] opacity-10" size={50} />, 
      position: { top: '20%', right: '10%' },
      animation: { y: [0, -25, 0], rotate: [0, -5, 0] }
    },
    { 
      icon: <FaPaintRoller className="text-[#5c7c3b] opacity-10" size={45} />, 
      position: { bottom: '15%', left: '8%' },
      animation: { y: [0, -15, 0], rotate: [0, 3, 0] }
    },
    { 
      icon: <FaRulerCombined className="text-[#5c7c3b] opacity-10" size={35} />, 
      position: { top: '30%', right: '15%' },
      animation: { y: [0, -30, 0], rotate: [0, 7, 0] }
    },
    { 
      icon: <FaTools className="text-[#5c7c3b] opacity-10" size={40} />, 
      position: { bottom: '20%', right: '5%' },
      animation: { y: [0, -10, 0], rotate: [0, -3, 0] }
    },
  ];

  // Animation variants for text elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      className='!py-12 sm:!py-20 relative overflow-hidden'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Background animated icons */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {backgroundIcons.map((icon, index) => (
          <motion.div 
            key={index}
            className="absolute"
            style={icon.position}
            animate={icon.animation}
            transition={{
              duration: 10 + index * 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: index * 1.5
            }}
          >
            {icon.icon}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6">
        <motion.div 
          className="text-center !mb-10 sm:!mb-16"
          variants={containerVariants}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-gray-800 !mb-4 relative inline-block"
            variants={itemVariants}
          >
            <span className="absolute -left-8 sm:-left-12 top-1/2 transform -translate-y-1/2 w-[20px] sm:w-[50px] h-[3px] bg-[#5c7c3b]"></span>
            About Us
            <span className="absolute -right-8 sm:-right-12 top-1/2 transform -translate-y-1/2 w-[20px] sm:w-[50px] h-[3px] bg-[#5c7c3b]"></span>
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg text-gray-600 !mb-8 sm:!mb-12"
            variants={itemVariants}
          >
            Want to know more about us?
          </motion.p>
        </motion.div>

        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          {/* Text Content */}
          <motion.div 
            className="!p-4 sm:!p-6 !py-7 w-full lg:w-1/2 order-2 lg:order-1 bg-white bg-opacity-90 rounded-lg !shadow-lg"
            variants={containerVariants}
          >
            <motion.p 
              className="text-lg text-[#5c7c3b] font-semibold !mb-4 flex items-center"
              variants={itemVariants}
            >
              <span className="inline-block w-[30px] h-[3px] bg-[#5c7c3b] !mr-2"></span>
              Building Today, Inspiring Tomorrow
            </motion.p>

            <motion.h1 
              className="text-2xl sm:text-3xl font-bold text-gray-900 !mb-6"
              variants={itemVariants}
            >
              Want to build a dream home? <span className="text-[#5c7c3b]">We are here!</span>
            </motion.h1>
            
            <motion.div 
              className="w-full h-[4px] bg-gradient-to-r from-[#5c7c3b] to-transparent !my-6"
              variants={itemVariants}
            />
            
            <motion.p 
              className="text-sm sm:text-[16px] text-gray-600 !mb-4"
              variants={itemVariants}
            >
              At <span className='font-bold text-gray-900'>AR.Miami</span>, we do more than contracting. We create spaces for your cherished moments. We've devoted years to construction, interior design, and outdoor projects. Our goal is to bring your vision to life.
            </motion.p>
            
            <motion.p 
              className="text-sm sm:text-[16px] text-gray-600 !mb-4"
              variants={itemVariants}
            >
              From cozy family homes to modern business structures, we give our all to each project. Our designers, architects, and skilled workers will stand by you from beginning to end.
            </motion.p>
            
            <motion.p 
              className="text-sm sm:text-[16px] text-gray-600 !mb-6"
              variants={itemVariants}
            >
              We think every home should reflect its owner. So, we ensure each detail matches your taste, making your space feel just right for you.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 !mt-8"
              variants={containerVariants}
            >
              <motion.a
                href={`tel:${phoneNumber}`}
                className="border-2 !py-3 !px-6 border-[#5c7c3b] text-white font-semibold rounded-lg cursor-pointer bg-[#5c7c3b] hover:bg-white hover:text-[#5c7c3b] transition-all duration-300 text-center shadow-md hover:shadow-lg transform hover:-translate-y-1"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Call Now
              </motion.a>

              <motion.div variants={itemVariants}>
                <Link
                  to="/contact"
                  className="border-2 !py-3 !px-6 border-[#5c7c3b] text-[#5c7c3b] font-semibold rounded-lg cursor-pointer hover:bg-[#5c7c3b] hover:text-white transition-all duration-300 text-center shadow-md hover:shadow-lg transform hover:-translate-y-1"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Free Quotes
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div 
            className="!p-4 w-full lg:w-1/2 order-1 lg:order-2 relative group"
            variants={imageVariants}
          >
            <motion.div 
              className="relative overflow-hidden rounded-lg !shadow-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src={AbtBanner} 
                alt="Construction Team" 
                className='w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover rounded-lg transition-all duration-700 group-hover:scale-105'
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-lg"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutBanner;