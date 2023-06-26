import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
      <h1>Vyberte si z naších služieb</h1>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/pavement.jpg'
              text='Čistenie dlažby'
              path='/services'
            />
            <CardItem
              src='images/wall.jpg'
              text='Čistenie múrikov'
              path='/services'
            />
            <CardItem
              src='images/stairs.jpg'
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
