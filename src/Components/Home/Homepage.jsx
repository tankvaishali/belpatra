import React from 'react';
import HOC from '../HOC';
import Homeservice from './Homeservice';
import "../../Assets/Css/Homepagecss.css"
import HomeAbout from './HomeAbout';
import WhyChooseUs from './WhyChooseUs';
import Logorun from '../Logorun';

function Homepage() {
  return (
<>
<HomeAbout/>
<Homeservice/>
<WhyChooseUs/>
<Logorun/>
</>
  );
}

export default HOC(Homepage);
