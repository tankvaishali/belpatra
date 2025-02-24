import React from 'react';
import HOC from '../HOC';
import Homeservice from './Homeservice';
import "../../Assets/Css/Homepagecss.css"
import HomeAbout from './HomeAbout';

function Homepage() {
  return (
<>
<HomeAbout/>
<Homeservice/>
</>
  );
}

export default HOC(Homepage);
