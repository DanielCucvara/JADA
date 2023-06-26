import React from 'react';
import '../App.css';
import './HeroSection.css';
import Cards from './Cards';
import Comparison from './Comparison';

function HeroSection() {
  return (
    <>
    <div className='hero-container' id="home">
      <div className='main-title-container'>
        <img className='logo' src='images/logo.png'/>
        <h1>JADA</h1>
        <p>Nie vždy je potrebné vymieňať staré za nové.
          Znečistené povrchy vieme vyčistiť tak, aby znovu vyzerali ako nové. Čistíme dlažby, schody či ploty. Vysokotlakové čistenie je najmodernejší, a zároveň vysoko efektívny spôsob ako sa zbaviť nečistôt, machu , mikroogranizmov a usadenín.
          Prioritný nie je len krajší vzhľad, ale aj Vaše zdravie</p>
      </div>
    </div> 
    <div className='comparisons-container' id="services">
      <Cards/>
        <Comparison
          srcBefore='/images/pavementBefore.png'
          srcAfter='/images/pavementAfter.png'/>
        <Comparison
          srcBefore='/images/fenceBefore.png'
          srcAfter='/images/fenceAfter.png'/>
        <Comparison
          srcBefore='/images/stairsBefore.png'
          srcAfter='/images/stairsAfter.png'/>
      </div>  
    </>
  );
}

export default HeroSection;
