import React from 'react';
import AbtBanner from '../../assets/images/constructionTeam.jpg';
import { Link } from 'react-router-dom';

const AboutBanner = () => {
  const phoneNumber = '+17862109819';
  return (
    <section className='!py-20 z-100'>
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 !mb-4"><span className="inline-block w-[20px] sm:w-[50px] h-[3px] bg-[#5c7c3b] !mb-2.5"></span> About Us <span className="inline-block w-[20px] sm:w-[50px] h-[3px] bg-[#5c7c3b] !mb-2.5"></span></h2>
          <p className="text-base sm:text-lg text-gray-600 !mb-8 sm:!mb-12">
            Are you Want to know about us.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="!p-5 !py-7 w-full lg:w-1/2 order-2 lg:order-1">
            <p className="text-lg text-[#5c7c3b] font-semibold mb-2"><span className="inline-block w-[20px] sm:w-[50px] h-[3px] bg-[#5c7c3b] !mb-1"></span> Building Today, Inspiring Tomorrow</p>

            <h1 className="text-3xl font-bold text-gray-900 mb-4">Want to build a dream home? We are here!</h1>
            <span className="block w-[300px] h-[4px] bg-[#5c7c3b] !my-8"></span>
            <p className="text-sm sm:text-[16px] text-gray-600">
            At <span className='font-bold text-gray-900'>AR.Miami</span>, we do more than contracting. We create spaces for your cherished moments. We've devoted years to construction interior design, and outdoor projects. Our goal is to bring your vision to life.
            </p>
            <p className="text-sm sm:text-[16px] text-gray-600 !mt-4">
            From snug family homes to modern business structures, we give our all to each project. Our designers, architects, and skilled workers will stand by you from beginning to end. We employ high-quality materials and up-to-date techniques to complete your project on schedule and within your financial plan.
            </p>
            <p className="text-sm sm:text-[16px] text-gray-600 !mt-4">
            We think every home should mirror its owner. So, we ensure each detail matches your taste making your space feel just right for you.
            </p>
            <div className="flex gap-4">
              {/* Call Now Button */}
              <a
                href={`tel:${phoneNumber}`}
                className="border-2 !py-2 !px-4 border-[#5c7c3b] text-white font-semibold !mt-10 rounded-lg cursor-pointer bg-[#5c7c3b] hover:bg-white hover:text-black transition-all"
              >
                Call Now
              </a>

              {/* Get Free Quotes Button */}
              <Link
                to="/contact" // Replace with your contact page route
                className="border-2 !py-2 !px-4 border-[#5c7c3b] font-semibold !mt-10 rounded-lg cursor-pointer hover:bg-[#5c7c3b] hover:text-white transition-all"
              >
                Get Free Quotes
              </Link>
            </div>
          </div>

          <div className="!p-5 w-full lg:w-1/2 flex gap-4 items-center justify-center order-1 overflow-hidden lg:order-2">
            <img src={AbtBanner} alt="Banner 1" className='w-full h-[400px] sm:h-[450px] lg:h-[550px] odject-cover rounded-lg !shadow-lg object-cover hover:scale-[1.1] transition-all' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBanner;
