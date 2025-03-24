import React from "react";
import { motion } from "framer-motion";

const certifications = [
  {
    title: "Licensed Sales Associate under Chapter 475, Florida Statutes",
    issuer: "State of Florida Department of Business and Professional Regulation",
    year: "2020"
  },
  {
    title: "ACI Concrete Field Testing Technician – Grade I",
    issuer: "American Concrete Institute",
    year: "2019"
  },
  {
    title: "Planning for Waste Management",
    issuer: "Environmental Protection Agency",
    year: "2021"
  },
  {
    title: "DSNY's New Rule for Residential Buildings",
    issuer: "New York City Department of Sanitation",
    year: "2022"
  },
  {
    title: "Smart Bathrooms",
    issuer: "Duravit USA, Inc.",
    year: "2021"
  },
  {
    title: "Pulp Studio Graphic Imaging and Glass",
    issuer: "Pulp Studio",
    year: "2020"
  },
  {
    title: "Using Lightweight Stone for Architectural Facades",
    issuer: "Natural Stone Institute",
    year: "2022"
  },
];

const Certification = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <div className="bg-gray-50 !py-16 !px-4 sm:!px-6 lg:!px-8">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 !mb-4"><span className="inline-block w-[20px] sm:w-[50px] h-[3px] bg-[#5c7c3b] !mb-2.5"></span> My Certifications <span className="inline-block w-[20px] sm:w-[50px] h-[3px] bg-[#5c7c3b] !mb-2.5"></span></h2>
          <p className="text-base sm:text-lg text-gray-600 !mb-8 sm:!mb-12">
            Professional credentials that validate my expertise
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white !p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-[#5c7c3b]"
            >
              <div className="flex justify-between items-start !mb-2">
                <h3 className="text-lg font-semibold text-gray-800">{cert.title}</h3>
                <span className="text-sm font-medium text-[#5c7c3b] bg-[#5c7c3b]/10 !px-2 !py-1 rounded">
                  {cert.year}
                </span>
              </div>
              <p className="text-gray-600 text-sm">{cert.issuer}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Certification;