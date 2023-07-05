import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import Pavement from '../images/pavement.jpg'
import Wall from '../images/wall.jpg'
import Stairs from '../images/stairs.jpg'

function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
      <h1>Vyberte si z naších služieb</h1>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={Pavement}
              text='Čistenie dlažby'
              path='/services'
            />
            <CardItem
              src={Wall}
              text='Čistenie múrikov'
              path='/services'
            />
            <CardItem
              src={Stairs}
              text='Čistenie schodištia'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
