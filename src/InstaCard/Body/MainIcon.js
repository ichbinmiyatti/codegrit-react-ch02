import React from 'react';
import Heart from '../images/heart.png';
import Bubble from '../images/bubble.png';
import Bookmark from '../images/bookmark.png';

const MainIcon = () => (
  <div className='card-main-icons'>
    <ul className='flex-container card-main-icons-left'>
      <li className='icon-heart'>
        <img src={Heart}
          width='30px'
          height='30px' />
      </li>
      <li className='icon-comment'>
        <img src={Bubble}
          width='30px'
          height='30px' />
      </li>
    </ul>
    <ul className='flex-container card-main-icons-right'>
      <li className='icon-bookmark icons-right'>
        <img src={Bookmark}
          width='30px'
          height='30px' />
      </li>
    </ul>
  </div>
);

export default MainIcon;
