import React from 'react';
import { TiArrowForward } from 'react-icons/ti';
import Buttoncom from '../Buttoncom';
import { Link } from 'react-router-dom';

const HomeAbout = () => {
  return (
    <div className='homeabout_bg py-5 pb-0 pb-md-5 overflow-hidden'>
     <div className="container  py-3 pb-0 pb-md-3 py-lg-5">
<div className="row g-3">
  <div className="col-12 col-md-6" data-aos="fade-right"
        data-aos-once="true"
              data-aos-duration="1800">
    <div className="h-100">
    <h1
              className="titletext  pb-2  "
              data-aos="zoom-in"
              data-aos-duration="1500"
              data-aos-once="true"
            >
              About Us
            </h1>
            <p className='pera text-secondary pt-2' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, dolores. adipisicing elit. Animi, dolores </p>
    
            <div className="row align-items-center justify-content-center">
              <div className="col-md-6 col-12 lh-lg span fw-bold">
                <p>
                  <TiArrowForward className="iconbg me-3 text-light" />
                  Product Quality
                </p>
              </div>
              <div className="col-md-6 col-12 lh-lg span fw-bold">
                <p>
                  <TiArrowForward className="iconbg me-3 text-light" /> 24/7
                  Support
                </p>
              </div>
              <div className="col-md-6 col-12 lh-lg span fw-bold">
                <p>
                  <TiArrowForward className="iconbg me-3 text-light" />Top
                  Manufacturer
                </p>
              </div>
              <div className="col-md-6 col-12 lh-lg span fw-bold">
                <p>
                  <TiArrowForward className="iconbg me-3 text-light" /> Fair
                  Prices
                </p>
              </div>
            </div>
            <p className='pera pt-1'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias accusantium quaerat pariatur consequuntur distinctio enim porro, culpa odit commodi, doloribus voluptatibus explicabo totam suscipit deleniti voluptates repudiandae, deserunt unde. Assumenda.</p>
            <div>
             <Link to={"/about"}> <Buttoncom btn="About Us"/></Link>
            </div>
          </div>
    </div>
    <div className="col-12 col-md-6 aboutcolor p-4 p-md-0" data-aos="fade-left"
              data-aos-duration="1500"
              data-aos-once="true">
      <div className="h-100 allimg"  >
        <div className="desc1"></div>
        <img src={require("../../Assets/Images/aboutus_image.jpeg")} alt="" className='img-fluid w-100 h-100 border border-5 border-white object-fit-cover' />
      </div>
</div>

  </div>
</div>
     </div>

  );
}

export default HomeAbout;
