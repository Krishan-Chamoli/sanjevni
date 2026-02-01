import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

/**
 * Custom hook for GSAP scroll-triggered zoom animation
 * @returns {Object} refs - References to DOM elements for animation targeting
 */
const useScrollZoomAnimation = () => {
  const wrapperRef = useRef(null);
  const imageRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    // Ensure DOM elements are available
    if (!wrapperRef.current || !imageRef.current || !heroRef.current) {
      return;
    }

    // Create GSAP matchMedia for responsive animations
    let mm = gsap.matchMedia();

    // Add animation with responsive conditions
    mm.add({
      isDesktop: "(min-width: 769px)",
      isMobile: "(max-width: 768px)"
    }, (context) => {
      let { isMobile } = context.conditions;

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: 'top top',
          end: '+=150%',
          pin: true,
          scrub: true,
        }
      });

      // Animate image zoom
      timeline.to(imageRef.current, {
        scale: isMobile ? 6 : 2, // 6x needed to ensure we pass through the hole of the smaller (contained) image
        z: 350,
        transformOrigin: 'center center',
        ease: 'power1.inOut'
      });

      // Animate hero section simultaneously
      timeline.to(
        heroRef.current,
        {
          scale: 1.1,
          transformOrigin: 'center center',
          ease: 'power1.inOut'
        },
        '<' // Start at the same time as previous animation
      );
    });

    // Cleanup function to revert matchMedia changes
    return () => {
      mm.revert();
    };
  }, []); // Empty dependency array - runs once on mount

  return {
    wrapperRef,
    imageRef,
    heroRef
  };
};

export default useScrollZoomAnimation;
