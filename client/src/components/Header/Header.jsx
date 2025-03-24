import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from '../../assets/images/artaLogo.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [isServicesExpanded, setIsServicesExpanded] = useState(false);
  const servicesLinkRef = useRef(null); // Ref to track the "Services" navlink

  const location = useLocation(); // Get current location

  // Define navLinks before using it
  const navLinks = [
    { id: "home", label: "Home", path: "/" },
    { id: "about", label: "About", path: "/about" },
    { id: "services", label: "Services", path: "#", dropdown: true },
    { id: "project", label: "Project", path: "/projects" },
    { id: "faq", label: "FAQ", path: "/faq" },
    { id: "gallery", label: "Gallery", path: "/gallery" },
    { id: "contact", label: "Contact Us", path: "/contact" },
  ];

  // Determine the active link based on the current path
  const activeLink = navLinks.find((link) => link.path === location.pathname)?.id || "home";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleServicesDropdown = () => {
    setIsServicesExpanded(!isServicesExpanded);
  };

  // Close mobile menu when a navlink is clicked
  const handleNavLinkClick = () => {
    setIsMenuOpen(false);
    setIsServicesExpanded(false); // Also close the services dropdown if open
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const servicesDropdown = [
    {
      id: "roof-to-roof",
      label: "Roof-to-Roof Construction",
      icon: "🏠",
      subServices: [
        { label: "New Construction & Structural Development", path: "/services/roof-to-roof-construction" },
        { label: "Roofing Installation & Repair", path: "/services/roof-to-roof-construction" },
        { label: "Residential & Commercial Projects", path: "/services/roof-to-roof-construction" },
      ],
      path: "/services/roof-to-roof-construction",
    },
    {
      id: "house-remodeling",
      label: "House Remodeling & Renovations",
      icon: "🔨",
      subServices: [
        { label: "Complete Home Renovations", path: "/services/house-remodeling-and-renovations" },
        { label: "Exterior & Interior Upgrades", path: "/services/house-remodeling-and-renovations" },
        { label: "Energy-Efficient & Smart Home Solutions", path: "/services/house-remodeling-and-renovations" },
      ],
      path: "/services/house-remodeling",
    },
    {
      id: "interior-design",
      label: "Interior Design & Remodeling",
      icon: "🎨",
      subServices: [
        { label: "Kitchen & Bathroom Remodeling", path: "/services/interior-design-and-Remodeling" },
        { label: "Flooring, Cabinets, & Lighting Design", path: "/services/interior-design-and-Remodeling" },
        { label: "Custom Interior & Smart Home Upgrades", path: "/services/interior-design-and-Remodeling" },
      ],
      path: "/services/interior-design",
    },
    {
      id: "property-management",
      label: "Property Management",
      icon: "🏢",
      subServices: [
        { label: "Rental Property Maintenance", path: "/services/property-management" },
        { label: "Inspections & Compliance", path: "/services/property-management" },
        { label: "Tenant Services & Repairs", path: "/services/property-management" },
      ],
      path: "/services/property-management",
    },
    
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-colors duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
    >
      <div className="container">
        <div className="flex justify-between items-center h-[100px] !mx-5 lg:mx-auto">
          {/* Logo */}
          <div className={`text-2xl sm:text-3xl font-bold ${isScrolled ? "text-black" : "text-[#5c7c3b]"
            }`}>
            <img src={Logo} className="w-[150px] !py-5" alt="" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-4 !flex-1 justify-center">
            {navLinks.map((link) => (
              <div
                key={link.id}
                className="relative"
                onMouseEnter={() => link.dropdown && setIsServicesHovered(true)}
                onMouseLeave={() => link.dropdown && setIsServicesHovered(false)}
                ref={link.dropdown ? servicesLinkRef : null} // Attach ref to "Services" navlink
              >
                <Link
                  to={link.path}
                  className={`px-3 py-2 font-medium flex items-center space-x-1 !text-lg relative ${activeLink === link.id ? "text-[#5c7c3b]" : isScrolled ? "text-black hover:text-[#5c7c3b]" : "text-white hover:text-[#5c7c3b]"
                    }`}
                >
                  <span>{link.label}</span>
                  {link.dropdown && (
                    <svg
                      className={`w-4 h-4 transition-transform ${isServicesHovered ? "rotate-180" : ""
                        }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                  {/* Sliding Underline */}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#5c7c3b] transform origin-left transition-transform duration-300 ${activeLink === link.id ? "scale-x-100" : "scale-x-0"
                      }`}
                  ></span>
                </Link>

                {/* Services Dropdown Mega Menu */}
                {link.dropdown && isServicesHovered && (
                  <div
                    className="absolute top-full left-0 w-[600px] bg-gray-50 shadow-lg rounded-lg mt-2 !p-4 grid grid-cols-2 gap-4"
                  >
                    {servicesDropdown.map((service) => (
                      <div key={service.id} className="flex items-start space-x-4 p-2 hover:bg-gray-100 rounded-lg">
                        <span className="text-xl">{service.icon}</span>
                        <div>
                          <h3 className="font-medium text-[#4c6d66]">{service.label}</h3>
                          <ul className="mt-2 space-y-1">
                            {service.subServices.map((subService, index) => (
                              <li key={index} className="text-sm text-gray-500 mt-3">
                                <Link to={subService.path} className="hover:text-[#5c7c3b]">
                                  * {subService.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Get Free Quotes Button */}
          <div className="hidden lg:block">
            <Link
              to="/contact" // Replace with your contact page route
              className="bg-[#5c7c3b] text-white rounded-md hover:bg-[#072312] transition-colors cursor-pointer !py-2 !px-4"
            >
              Get Free Quotes
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center justify-center lg:hidden ">
            <button onClick={toggleMenu} className="text-[#5c7c3b] focus:outline-none">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden fixed inset-0 bg-white z-40 transform transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          {/* Close Button */}
          <div className="absolute top-4 right-4 ">
            <button onClick={toggleMenu} className="text-[#5c7c3b] focus:outline-none">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-start h-full !space-y-2 !px-6 !py-3 !mt-[90px] overflow-y-auto">
            {navLinks.map((link) => (
              <div key={link.id} className="w-full border-b border-gray-200">
                {link.dropdown ? (
                  <div>
                    <button
                      onClick={toggleServicesDropdown}
                      className={`!px-3 !py-2 text-lg font-medium flex items-center justify-between w-full h-full relative ${activeLink === link.id
                          ? "text-[#5c7c3b]"
                          : "text-gray-800 hover:text-[#5c7c3b]"
                        }`}
                    >
                      <span>{link.label}</span>
                      <svg
                        className={`w-4 h-4 transition-transform ${isServicesExpanded ? "rotate-180" : ""
                          }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${isServicesExpanded ? "max-h-[500px]" : "max-h-0"
                        }`}
                    >
                      <div className="!space-y-2 !pl-6">
                        {servicesDropdown.map((service) => (
                          <div key={service.id} className="pt-2">
                            <h3 className="font-medium text-[#4c6d66]">{service.label}</h3>
                            <ul className="mt-2 !space-y-2">
                              {service.subServices.map((subService, index) => (
                                <li key={index} className="text-sm text-gray-500">
                                  <Link
                                    to={subService.path}
                                    className="hover:text-[#5c7c3b]"
                                    onClick={handleNavLinkClick}
                                  >
                                    {subService.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    className={`!px-3 !py-4 text-lg font-medium relative block ${activeLink === link.id
                        ? "text-[#5c7c3b]"
                        : "text-gray-800 hover:text-[#5c7c3b]"
                      }`}
                    onClick={handleNavLinkClick}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <Link
              to="/contact" // Replace with your contact page route
              className="bg-[#5c7c3b] text-white rounded-md hover:bg-[#072312] transition-colors cursor-pointer !py-2 !px-4"
            >
              Get Free Quotes
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;