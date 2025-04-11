import React, { useState, useEffect, useRef } from "react";
import Logo from '../../assets/images/artaLogo.png';

const HomePageHero = ({ isMenuOpen }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrollingDown, setIsScrollingDown] = useState(true);

  const heroRef = useRef(null);
  const animatedLogoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = heroRef.current?.offsetHeight || 0;

      // Determine scroll direction
      setIsScrollingDown(scrollY > lastScrollY);
      setLastScrollY(scrollY);

      // Calculate scroll progress (0 to 1) with easing
      const rawProgress = Math.min(scrollY / (heroHeight * 0.7), 1);
      const easedProgress = easeInOutCubic(rawProgress);
      setScrollProgress(easedProgress);
    };

    // Easing function for smooth animation
    const easeInOutCubic = (t) => {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Calculate logo styles based on scroll progress and direction
  const getLogoStyles = () => {
    // Final header position values
    const finalWidth = 150;
    const finalTop = 50;
    const finalLeft = '17%'; // Matches header logo's !mx-5 (approx)
    const finalOpacity = 1;

    // Initial hero position values
    const initialWidth = Math.min(window.innerWidth * 0.8, 600);
    const initialTop = window.innerHeight / 2;
    const initialLeft = '50%';
    const initialOpacity = 1;

    // Adjust z-index to ensure logo is below mobile menu
    const zIndex = isMenuOpen ? 30 : 60; // Mobile menu is z-40

    if (isScrollingDown) {
      return {
        width: `${initialWidth + (finalWidth - initialWidth) * scrollProgress}px`,
        opacity: isMenuOpen ? 0 : initialOpacity + (finalOpacity - initialOpacity) * scrollProgress,
        position: 'fixed',
        top: `${initialTop + (finalTop - initialTop) * scrollProgress}px`,
        left: scrollProgress < 0.5 ? initialLeft : finalLeft,
        transform: `translate(-50%, -50%) scale(${1 - 0.2 * scrollProgress})`,
        transition: 'all 0.1s linear',
        zIndex,
      };
    } else {
      return {
        width: `${finalWidth + (initialWidth - finalWidth) * (1 - scrollProgress)}px`,
        opacity: isMenuOpen ? 0 : finalOpacity + (initialOpacity - finalOpacity) * (1 - scrollProgress),
        position: 'fixed',
        top: `${finalTop + (initialTop - finalTop) * (1 - scrollProgress)}px`,
        left: scrollProgress > 0.5 ? finalLeft : initialLeft,
        transform: `translate(-50%, -50%) scale(${0.8 + 0.2 * (1 - scrollProgress)})`,
        transition: 'all 0.1s linear',
        zIndex,
      };
    }
  };

  const logoStyles = getLogoStyles();

  return (
    <>
      {/* Hero Section with Animated Logo */}
      <section
        ref={heroRef}
        className="relative bg-gradient-to-b from-green-50 to-green-100 h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Animated Logo */}
        {scrollProgress < 1 && (
          <img
            ref={animatedLogoRef}
            src={Logo}
            style={logoStyles}
            className="transition-all duration-100"
            alt="Arta Logo"
          />
        )}
      </section>
    </>
  );
};

export default HomePageHero;