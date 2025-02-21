import React from 'react';
import HOC from '../HOC';

function Homepage() {
  return (
  
    <h1 className='titletext text-center'  data-aos="zoom-in" data-aos-delay="50"
    data-aos-duration="1800">Our Contact </h1>
  );
}

export default HOC(Homepage);
