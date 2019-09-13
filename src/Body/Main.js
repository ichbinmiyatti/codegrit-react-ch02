import React from 'react';
import MainIcon from './MainIcon';
import Comments from "./Comments";

const Main = () => (
  <section className='card-main'>
    <MainIcon />
    <div className='card-like-counts'>
      100 likes
    </div>
    <Comments />
    <div className='post-date'>
      1日前
    </div>
    <section className='comment-box'>
      <div className='comment-area'>
        コメントする
      </div>
    </section>
  </section>
);

export default Main;
