import React from 'react';
import HOC from '../HOC';
import Logorun from '../Logorun';
import "../../Assets/Css/Contactcss.css"
import Contactus from './Contactpage';

function Contactmain() {
  return (
    <>
<div className="wave-container">
  {/* Image */}
  <img
    src={require("../../Assets/Images/footerbackground.jpg")}
    alt="Background"
    className="image"
  />

  {/* SVG Wave */}
  <svg
    viewBox="0 0 1440 320"
    xmlns="http://www.w3.org/2000/svg"
    className="wave"
  >
    <path
      fill="#ffffff" /* Change this to match the background or desired blend color */
      fillOpacity="1"
      d="M0,64L48,58.7C96,53,192,43,288,53.3C384,64,480,96,576,128C672,160,768,192,864,197.3C960,203,1056,181,1152,160C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
    ></path>
    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,96L80,96C160,96,320,96,480,122.7C640,149,800,203,960,208C1120,213,1280,171,1360,149.3L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg> */}
  </svg>

  {/* CSS */}
  <style jsx>{`
    .wave-container {
      position: relative;
      width: 100%;
      overflow: hidden; /* Ensures no overflow from SVG */
    }

    .image {
      width: 100%;
      display: block; /* Ensures no gap below the image */
    }

    .wave {
      position: absolute;
      bottom: -1px; /* Slight overlap to remove gaps between the image and wave */
      left: 0;
      width: 100%;
      height: auto;
    }
  `}</style>
</div>




     <Contactus/>        
      <Logorun/>
<div className='container py-5'>
<div className=' py-3'>
<iframe title='google map' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29752.700882695055!2d72.8291723!3d21.228374199999998!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04fdfc718eb4b%3A0xcf5efb27dfe048c5!2sBelpatra%20Pharmachem!5e0!3m2!1sen!2sin!4v1740025356298!5m2!1sen!2sin" width="100%" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='shadow-lg'></iframe>
</div>
</div>
    </>
  );
}

export default HOC(Contactmain);
