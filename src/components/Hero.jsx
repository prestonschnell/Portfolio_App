import React from 'react';
import './hero.css';
import DecryptedText from './DecryptedText';

const Hero = () => {
  const handleScroll = () => {
    const isMobile = window.innerWidth <= 430; // or use 768 for tablets too
    const topValue = isMobile ? 885 : 1325;

    window.scroll({
      top: topValue,
      behavior: 'smooth'
    });
  };

  return (
    <div className="hero-container">
      {/* <h1 id="hero-header"> */}<DecryptedText id="hero-header" text="Hi, I'm Preston. I'm a Multimedia Developer" speed="50" sequential="true" animateOn='view' />{/* Hi, I'm Preston. I'm a Multimedia Developer.</h1> */}
      <button onClick={handleScroll}>View my Work</button>
    </div>
  );
};

export default Hero;
