import React from 'react';
import '../App.css';
import './HeroSection.css';
import Cards from './Cards';
import Comparison from './Comparison';
import PavementBefore from '../images/pavementBefore.png'
import PavementAfter from '../images/pavementAfter.png'
import FenceBefore from '../images/fenceBefore.png'
import FenceAfter from '../images/fenceAfter.png'
import StairsBefore from '../images/fenceAfter.png'
import StairsAfter from '../images/fenceAfter.png'
import Logo from '../images/logo.png'

function HeroSection() {
  return (
    <>
    <div className='hero-container' id="home">
      <div className='main-title-container'>
        <img className='logo' src={Logo}/>
        <h1>JADA</h1>
        <p>Nie vždy je potrebné vymieňať staré za nové.
          Znečistené povrchy vieme vyčistiť tak, aby znovu vyzerali ako nové. Čistíme dlažby, schody či ploty. Vysokotlakové čistenie je najmodernejší, a zároveň vysoko efektívny spôsob ako sa zbaviť nečistôt, machu , mikroogranizmov a usadenín.
          Prioritný nie je len krajší vzhľad, ale aj Vaše zdravie</p>
      </div>
    </div> 
    <div className='comparisons-container' id="services">
      <Cards/>
        <Comparison
          srcBefore={PavementBefore}
          srcAfter= {PavementAfter}/>
        <Comparison
          srcBefore={FenceBefore}
          srcAfter={FenceAfter}/>
        <Comparison
          srcBefore={StairsBefore}
          srcAfter={StairsAfter}/>
      </div>  
    </>
  );
}

export default HeroSection;
