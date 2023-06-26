import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container' id="contact">
      <h1>Kde nás môžete kontaktovať</h1>
        <div className='contact-container'>
            <div class="contact-item">
              <a href = {`tel:${+421918156138}`}>
                <i class="fa fa-phone"></i>
                <span>+421 918 156 138</span>
              </a>
            </div>
            <div class="contact-item">
              <a href="mailto:jada.cistenie@gmail.com">
                <i class="fa fa-envelope"></i>
                <span>jada.cistenie@gmail.com</span>
              </a>
            </div>
            <div class="contact-item">
              <a href="https://instagram.com/jada_cistenie?igshid=MzRlODBiNWFlZA==">
                <i class="fab fa-instagram"></i>
                <span>@jada_cistenie</span>
              </a>
            </div>
            <div class="contact-item">
              <a href="https://www.facebook.com/profile.php?id=100093395631225">
                <i class="fab fa-facebook"></i>
                <span>JADA</span>
              </a>
            </div>
            <div class="contact-item">
              <a href="https://instagram.com/jada_cistenie?igshid=MzRlODBiNWFlZA==">
              </a>
            </div>
        </div>
        <img class='fab fa-typo3' src='images/logo-mini-white.png'/>
    </div>
  );
}

export default Footer;
