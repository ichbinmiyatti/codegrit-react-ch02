import React, { Component } from 'react';
import Header from './Header';
import Body from './Body';

class Index extends Component {
  render() {
    return (
      <article className='insta-card'>
        <Header />
        <Body />
      </article>
    );
  }
}

export default Index;
