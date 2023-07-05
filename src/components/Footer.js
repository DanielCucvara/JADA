import React from 'react';
import './Footer.css';
import LogoMiniWhite from '../images/logo-mini-white.png'

function Footer() {
  return (
    <div className='footer-container' id="contact">
      <h1>Kde nás môžete kontaktovať</h1>
        <div className='contact-container'>
            <div className="contact-item">
              <a href = {`tel:${+421918156138}`}>
                <i className="fa fa-phone"></i>
                <span>+421 918 156 138</span>
              </a>
            </div>
            <div className="contact-item">
              <a href="mailto:jada.cistenie@gmail.com">
                <i className="fa fa-envelope"></i>
                <span>jada.cistenie@gmail.com</span>
              </a>
            </div>
            <div className="contact-item">
              <a href="https://instagram.com/jada_cistenie?igshid=MzRlODBiNWFlZA==">
                <i className="fab fa-instagram"></i>
                <span>@jada_cistenie</span>
              </a>
            </div>
            <div className="contact-item">
              <a href="https://www.facebook.com/profile.php?id=100093395631225">
                <i className="fab fa-facebook"></i>
                <span>JADA</span>
              </a>
            </div>
            <div className="contact-item">
              <a href="https://instagram.com/jada_cistenie?igshid=MzRlODBiNWFlZA==">
              </a>
            </div>
        </div>
        <img className='fab fa-typo3' src={LogoMiniWhite}/>
    </div>
  );
}

export default Footer;
