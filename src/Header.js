import React from 'react';
import Avatar from './images/avatar.png';

const Header = () => (
  <section className='card-header'>
    <div className='poster-avatar'>
      <img alt="アバター" src={Avatar} />
    </div>
    <div className='poster-name'>
      testuser
    </div>
  </section>
);

export default Header;
