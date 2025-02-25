import React from 'react';
import HOC from '../HOC';
import Logorun from '../Logorun';
import "../../Assets/Css/Contactcss.css"
import Contactus from './Contactpage';
import { Link } from 'react-router-dom';

function Contactmain() {
  return (
    <>
{/* <div className="wave-container">
  <img
    src={require("../../Assets/Images/medium-shot-business-team-working-together_23-2149271705.jpg")}
    alt="Background"
    className="image-fluid w-100 imageposition heightimage object-fit-cover"
  />
  <div className='shadowimage'>Contact Us</div>
  <svg
    viewBox="0 0 1440 320"
    xmlns="http://www.w3.org/2000/svg"
    className="wave"
  >
    <path
      fill="#ffffff" 
      fillOpacity="1"
      d="M0,64L48,58.7C96,53,192,43,288,53.3C384,64,480,96,576,128C672,160,768,192,864,197.3C960,203,1056,181,1152,160C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
    ></path>
  </svg>

  <style>{`
    .wave-container {
      position: relative;
      width: 100%;
      overflow: hidden;
    }

    .heightimage {
      height: 100vh
    }

    @media screen and (max-width: 500px) {
      .heightimage {
        height: 50vh;
      }
    }

    @media screen and (min-width: 551px) and (max-width: 768px) {
      .heightimage {
        height: 80vh;
      }
    }

    .image {
      width: 100%;
      display: block;
    }

    .shadowimage {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #fff;
      font-size: 2rem;
      font-weight: bold;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
      z-index: 3;
    }

    .wave {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: auto;
      z-index: 2;
    }
  `}</style>
</div> */}


<div className='landing_image'> 
<div className='text-white fstyle text-center d-flex align-items-center justify-content-center h-100 container'>
<div>
<div className='titlediv fw-medium' data-aos="fade-up"
        data-aos-once="true"
              data-aos-duration="1500">Let's Become A Part Of Belpatra Pharmachem</div>
<div className='pt-4 fstyle fw-medium fs-5' data-aos="fade-down"
        data-aos-once="true"
              data-aos-duration="1500"> <span ><Link to={"/"} className="text-decoration-none hoverlink text-white">Home</Link></span> / <span>Contact</span></div>
</div>
</div>
</div>



     <Contactus/>        
      <Logorun/>
<div className='container py-5' data-aos="zoom-in"
        data-aos-once="true"
              data-aos-duration="1500">
<div className=' py-3'>
<iframe title='google map' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29752.700882695055!2d72.8291723!3d21.228374199999998!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04fdfc718eb4b%3A0xcf5efb27dfe048c5!2sBelpatra%20Pharmachem!5e0!3m2!1sen!2sin!4v1740025356298!5m2!1sen!2sin" width="100%" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='shadow-lg'></iframe>
</div>
</div>
    </>
  );
}

export default HOC(Contactmain);
