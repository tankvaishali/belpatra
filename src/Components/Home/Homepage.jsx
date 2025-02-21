import React from 'react';
import HOC from '../HOC';
import Homeservice from './Homeservice';
import "../../Assets/Css/Homepagecss.css"

function Homepage() {
  return (
  
   <Homeservice/>
  );
}

export default HOC(Homepage);
