import React, { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);



  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    if (element) {
      const elementRect = element.getBoundingClientRect();
      const absoluteElementTop = elementRect.top + window.pageYOffset;
      const scrollToPosition = absoluteElementTop - navbarHeight;
      window.scrollTo({
        top: scrollToPosition,
        behavior: 'smooth',
      });
    }
    closeMobileMenu();
  };

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <div
            className='navbar-logo'
            onClick={() => scrollToSection('home')}
          >
            JADA
            <img className='fab fa-typo3' src='images/logo-mini-white.png' alt='Logo' />
          </div>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <div
                className='nav-links'
                onClick={() => scrollToSection('home')}
              >
                Domov
              </div>
            </li>
            <li className='nav-item'>
              <div
                className='nav-links'
                onClick={() => scrollToSection('services')}
              >
                Služby
              </div>
            </li>
            <li className='nav-item'>
              <div
                className='nav-links'
                onClick={() => scrollToSection('contact')}
              >
                Kontakt
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
