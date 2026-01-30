import React from 'react';
import useScrollZoomAnimation from '../hooks/useScrollZoomAnimation';
import Navbar from './Navbar';
import './ScrollZoomEffect.css';

const ScrollZoomEffect = React.memo(() => {
  const { wrapperRef, imageRef, heroRef } = useScrollZoomAnimation();

  return (
    <div className="wrapper" ref={wrapperRef}>
      <div className="content">
        <Navbar />
        <section className="section hero" ref={heroRef} />
      </div>
      <div className="image-container">
        <img
          ref={imageRef}
          src="/web_image.png"
          alt="image"
        />
      </div>
    </div>
  );
});

ScrollZoomEffect.displayName = 'ScrollZoomEffect';

export default ScrollZoomEffect;
