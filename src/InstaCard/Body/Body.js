import React from 'react';
import BodyImg from '../images/instacard-main-image.jpg';


const Body = () => (
  <section className='card-body'>
    <div className='card-image'>
      <img src={BodyImg} />
    </div>
    <Main />
  </section>
);

export default Body;
