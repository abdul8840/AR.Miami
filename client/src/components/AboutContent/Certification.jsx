import React from "react";
import { motion } from "framer-motion";
import Badtch from '../../assets/images/badth.jpg';

const certifications = [
  {
    title: "Licensed Sales Associate under Chapter 475, Florida Statutes",
    image: Badtch,
    description: "Issued by the State of Florida Department of Business and Professional Regulation – Division of Real Estate.",
  },
  {
    title: "ACI Concrete Field Testing Technician – Grade I",
    image: Badtch,
    description: "Certified in concrete field testing techniques.",
  },
  {
    title: "Planning for Waste Management",
    image: Badtch,
    description: "Expertise in waste management planning and strategies.",
  },
  {
    title: "DSNY’s New Rule for Residential Buildings",
    image: Badtch,
    description: "Understanding of DSNY’s new regulations for residential waste management.",
  },
  {
    title: "Smart Bathrooms",
    image: Badtch,
    description: "Certificate of Completion from Duravit USA, Inc.",
  },
  {
    title: "Pulp Studio Graphic Imaging and Glass",
    image: Badtch,
    description: "Proficiency in graphic imaging and glass design.",
  },
  {
    title: "Using Lightweight Stone for Architectural Facades",
    image: Badtch,
    description: "CEU Course Certificate of Completion offered by Natural Stone Institute.",
  },
];

const Certification = () => {
  // Animation variants for Framer Motion
  const cardVariants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.4, duration: 0.8 },
    },
  };

  const imageHoverVariants = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  return (
    <div className="bg-gray-100 !py-12 !px-4 sm:!px-6 lg:!px-8">
      <div className="container !mx-5 sm:!mx-auto">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 !mb-4">
            <span className="inline-block w-[20px] sm:w-[50px] h-[3px] bg-[#5c7c3b] !mb-2.5"></span>
            My Certifications
            <span className="inline-block w-[20px] sm:w-[50px] h-[3px] bg-[#5c7c3b] !mb-2.5"></span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 !mb-8 sm:!mb-12">
            Certified Expertise, Trusted Excellence.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <motion.div
                whileHover="hover"
                variants={imageHoverVariants}
                className="overflow-hidden"
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-48 object-cover transform transition-transform duration-300 hover:scale-105"
                />
              </motion.div>
              <div className="!p-6">
                <h3 className="text-xl font-semibold text-gray-800 !mb-2">
                  {cert.title}
                </h3>
                <p className="text-gray-600">{cert.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certification;