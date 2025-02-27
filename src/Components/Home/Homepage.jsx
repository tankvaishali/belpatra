import React from 'react';
import HOC from '../HOC';
import Homeservice from './Homeservice';
import "../../Assets/Css/Homepagecss.css"
import HomeAbout from './HomeAbout';
import WhyChooseUs from './WhyChooseUs';
import Logorun from '../Logorun';
import Testimonial from './Testimonial';
import HomeCarouselcom from './HomeCarouselcom';
// import Progress from './Progress';

function Homepage() {
  return (
<>
<HomeCarouselcom/>
<HomeAbout/>
<Homeservice/>
<WhyChooseUs/>
{/* <Progress/> */}
<Logorun/>
<Testimonial/>
</>
  );
}

export default HOC(Homepage);
