import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ContactForm = () => {
  return (
    <section className="!py-16 md:!py-24 bg-white">
      <div className="container mx-auto px-5 lg:px-0 grid grid-cols-1 lg:grid-cols-2 gap-12 ">
        {/* Contact Info Section */}
        <div className="!p-8 rounded-xl shadow-2xl transform transition-transform duration-300 hover:scale-105 order-2 lg:order-1">
          <h2 className="text-4xl font-bold text-gray-800 !mb-8">Contact Us</h2>
          <span className="block w-[200px] h-[4px] bg-orange-500 !my-8"></span>
          <p className="text-base sm:text-md text-gray-600 !mb-4">
            If you are ready to share your vision or just begin a project that will bring the world together, don't hesitate to reach out. A representative for our region will be assigned to walk you through every process step.

            If it's a new construction, renovation, or design consultation, we're here to make it a reality.
          </p>

          <h3 className='!mb-12 text-lg sm:text-xl text-gray-700 font-bold'>Contact us today, and let’s get started!</h3>
          <div className="!space-y-8">
            <div className="flex items-center gap-6">
              <div className="!p-4 bg-orange-500 rounded-full shadow-lg">
                <FaPhoneAlt className="text-white w-6 h-6" />
              </div>
              <div className="">
                <p className="text-gray-600 text-lg">+1 (123) 456-7890</p>
                <p className="text-gray-600 text-lg">+1 (123) 456-7890</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="!p-4 bg-orange-500 rounded-full shadow-lg">
                <FaEnvelope className="text-white w-6 h-6" />
              </div>
              <div className="">
                <p className="text-gray-600 text-lg">contact@example.com</p>
                <p className="text-gray-600 text-lg">contact@example.com</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="!p-4 bg-orange-500 rounded-full shadow-lg">
                <FaMapMarkerAlt className="text-white w-6 h-6" />
              </div>
              <div className="">
                <p className="text-gray-600 text-lg">123 Main St, Cityville, USA</p>
                <p className="text-gray-600 text-lg">123 Main St, Cityville, USA</p>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-6 !mt-8">
              <Link
                to="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="!p-3 bg-gray-800 text-white rounded-full hover:bg-orange-500 transition-all transform hover:scale-110"
              >
                <FaFacebook className="w-6 h-6" />
              </Link>
              <Link
                to="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="!p-3 bg-gray-800 text-white rounded-full hover:bg-orange-500 transition-all transform hover:scale-110"
              >
                <FaTwitter className="w-6 h-6" />
              </Link>
              <Link
                to="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="!p-3 bg-gray-800 text-white rounded-full hover:bg-orange-500 transition-all transform hover:scale-110"
              >
                <FaInstagram className="w-6 h-6" />
              </Link>
              <Link
                to="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="!p-3 bg-gray-800 text-white rounded-full hover:bg-orange-500 transition-all transform hover:scale-110"
              >
                <FaLinkedin className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="!p-8 rounded-xl shadow-2xl transform transition-transform duration-300 hover:scale-105 order-1 lg:order-2">
          <h2 className="text-4xl font-bold text-gray-800 !mb-8">Send a Message</h2>
          <span className="block w-[300px] h-[4px] bg-orange-500 !my-8"></span>
          <form className="!space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Name"
                className="!p-4 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
              />
              <input
                type="email"
                placeholder="Email"
                className="!p-4 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="!p-4 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                type="tel"
                placeholder="Phone (US)"
                pattern="\(\d{3}\) \d{3}-\d{4}"
                className="!p-4 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
              />
              <select
                className="!p-4 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
              >
                <option>Select Location</option>
                <option>New York</option>
                <option>Los Angeles</option>
                <option>Chicago</option>
                <option>Houston</option>
              </select>
            </div>
            <textarea
              placeholder="Message"
              rows="6"
              className="!p-4 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-orange-500 text-white !p-4 rounded-lg hover:bg-orange-600 transition-all transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;