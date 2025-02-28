import React, { useState } from 'react';
import RTRCIcon1 from '../../assets/icons/engineer.png';
import RTRCIcon2 from '../../assets/icons/architecture.png';
import RTRCIcon3 from '../../assets/icons/architect.png';

const HomeServices = () => {
  const [activeTab, setActiveTab] = useState('Roof-to-Roof Construction');

  const services = {
    'Roof-to-Roof Construction': [
      {
        icon: RTRCIcon1,
        title: 'New Construction & Structural Development',
        description:
          "Turn your dream into a reality with our expert new construction and structural development services. You're constructing a dream house or constructing a commercial complex, we do it all with excellence at each step — from planning and permits to construction and completion. Our professionals are committed to quality workmanship, using sound materials and innovative methods to construct safe, long-lasting structures. We'll construct spaces that endure.",
      },
      {
        icon: RTRCIcon2,
        title: 'Roofing Installation & Repair',
        description:
          "Shield your home or business with our highly-rated roof services. We offer roof installation, repair, and maintenance for homes and businesses. From new roof installation to storm damage repair, to yearly regular inspections, we only use the highest quality materials and install them to make your roof watertight and secure. Don't let loose shingles or leaks turn into a bigger problem — we've got you covered!",
      },
      {
        icon: RTRCIcon3,
        title: 'Residential & Commercial Projects',
        description:
          'We solve from minor home renovation to big business structures, and we do so with enthusiasm and plenty of experience. We work with you to create one-of-a-kind solutions that meet your needs and budget. We are kitchen renovation, office enlargement, home makeover, all about quality, schedules, and exceeding expectations. We can help you build something great.',
      },
    ],
    'Property Management': [
      {
        title: 'Residential Property Management',
        description: 'Efficiently manage your residential properties with our comprehensive solutions.',
      },
      {
        title: 'Commercial Property Management',
        description: 'Efficiently manage your commercial properties with our expert services.',
      },
    ],
    'Interior Design & Remodeling': [
      {
        title: 'Interior Design',
        description: 'Transform your spaces with our expert interior design services.',
      },
      {
        title: 'Remodeling Services',
        description: 'Upgrade your interiors with our remodeling expertise.',
      },
    ],
    'House Remodeling & Renovations': [
      {
        title: 'House Remodeling',
        description: 'Upgrade your home with our remodeling expertise.',
      },
      {
        title: 'House Renovations',
        description: 'Renovate your home with our expert services.',
      },
    ],
  };

  return (
    <section className="!py-12 md:!py-18 !bg-gray-100">
      <div className="container mx-auto !px-5 lg:px-0">
        <div className="text-center">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-800 !mb-4">
            <span className="inline-block w-[20px] sm:w-[50px] h-[3px] bg-orange-500 !mb-1 sm:!mb-2.5 !mr-1"></span>
            Services We Offers
            <span className="inline-block w-[20px] sm:w-[50px] h-[3px] bg-orange-500 !mb-1 sm:!mb-2.5 !ml-1"></span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-12">
            Explore our wide range of services tailored to meet your needs.
          </p>
        </div>

        {/* Tabs */}
        <div className="hide-scrollbar overflow-x-auto whitespace-nowrap !my-8 sm:!my-12 border-2 border-solid border-orange-500 !p-1 rounded-lg text-center">
          <div className="inline-flex gap-3 sm:gap-5">
            {Object.keys(services).map((service) => (
              <button
                key={service}
                onClick={() => setActiveTab(service)}
                className={`!px-4 sm:!px-5 !py-2 sm:!py-3 rounded-lg text-sm sm:text-lg font-semibold transition-all duration-300 cursor-pointer ${activeTab === service
                    ? 'bg-orange-500 text-white shadow-lg'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300 hover:shadow-md'
                  }`}
              >
                {service}
              </button>
            ))}
          </div>
        </div>

        {/* Active Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services[activeTab].map((service, index) => (
            <div
              key={index}
              className="card-container bg-gray-50 !p-6 sm:p-8 rounded-xl shadow-2xl relative overflow-hidden cursor-pointer flex flex-col"
            >
              <div className="card-content relative z-10 p-4 flex flex-col flex-grow">
                <div className="flex gap-3 items-center justify-center !mb-4">
                  <img
                    src={service.icon}
                    className="w-12 h-12 filter-orange-500 transition-all duration-300"
                    alt=""
                  />
                  <h3 className="text-md sm:text-lg font-bold text-gray-800 mb-3 sm:mb-4">
                    {service.title}
                  </h3>
                </div>
                {/* Orange Line */}
                <span className="block w-[100px] h-[4px] bg-orange-500 !my-8 transition-all duration-300"></span>
                <p className="text-sm sm:text-md text-gray-600 flex-grow">{service.description}</p>
                {/* Learn More Button */}
                <button className="border !border-b-4 !py-1 !px-2 border-orange-500 font-semibold !mt-4 rounded-lg cursor-pointer self-start">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hide Scrollbar CSS */}
      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none; /* Chrome, Safari, and Opera */
        }

        /* Card Hover Effect */
        .card-container {
          transition: background-color 0.3s ease;
        }

        .card-container::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 0;
          background: linear-gradient(to right, #fb910c, #f97316);
          transition: height 0.5s ease;
          z-index: 1;
        }

        .card-container:hover::before {
          height: 100%;
        }

        /* Change text, span, and button colors on hover */
        .card-container:hover .card-content h3,
        .card-container:hover .card-content p,
        .card-container:hover .card-content span {
          color: white;
        }

        .card-container:hover .card-content button {
          color: white;
          border: 2px solid white;
        }

        .card-container:hover .card-content span {
          background-color: white; /* Change the orange line to white */
        }

        /* Icon Color Filter */
        .filter-orange-500 {
          filter: invert(70%) sepia(60%) saturate(1000%) hue-rotate(330deg) brightness(90%) contrast(90%);
        }

        /* Icon Color Change on Hover */
        .card-container:hover .filter-orange-500 {
          filter: brightness(0) invert(1); /* Makes the icon white */
        }
      `}</style>
    </section>
  );
};

export default HomeServices;