import React from 'react';
import logo from '../../public/logo.png';
import './Nav.css'

const Nav = () => {
const aboutScroll = () => {
    const isMobile = window.innerWidth <= 430;
    const topValue = isMobile ? 885 : 1375;

    window.scroll({
      top: topValue,
      behavior: 'smooth'
    });
  };

  const projectsScroll = () => {
    const isMobile = window.innerWidth <= 430;
    const topValue = isMobile ? 3200 : 3700;

    window.scroll({
      top: topValue,
      behavior: 'smooth'
    });
  };


  return (
    <div className="nav-bar">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className='buttons-container'>
        <ul className="buttons">
            <li><button onClick={()=> {
              window.scroll({
                top: 0,
                behavior: 'smooth'
              })
            }}>Home</button></li>
            <li><button onClick={aboutScroll}>About</button></li>
            <li><button onClick={projectsScroll}>Projects</button></li>
            <li><button onClick={()=> {
              window.scroll({
                top: 9999999,
                behavior: 'smooth'
              })
            }}>Contact</button></li>
        </ul>
      </div>
    </div>
  )
}

export default Nav
