import React from 'react';
import BodyImg from '../images/instacard-main-image.jpg';
import Main from "./Main";

const BodyMain = () => (
  <section className='card-body'>
    <div className='card-image'>
      <img alt="イメージ" src={BodyImg} />
    </div>
    <Main />
  </section>
);

export default BodyMain;
