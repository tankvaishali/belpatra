import React from 'react';
import { MdWifiCalling3 } from 'react-icons/md';
import { Link } from 'react-router-dom';

function Aboutsec() {
  return (
<>
<div className="aboutus_bgcolor py-5">
    <div className="container py-3 py-lg-5">
<div className="row g-3 g-lg-5 ">
    <div className="col-lg-5 col-12 order-1 order-lg-0">
    <h1
              className="titletext text-white pb-2  "
              data-aos="zoom-in"
              data-aos-duration="1500"
              data-aos-once="true"
            >
              About Us
            </h1>
            <p className='pera text-secondary pt-2 fw-bold' data-aos="fade-up" data-aos-duration="1800" data-aos-once="true" >We are BELPATRA PHARMACHEM and we are a leading manufacturer and trader of pharmaceutical products. </p>
            <p className='pera  pt-2 text-light' >Our mission is to sustain our responsibilities of delivering high-standard healthcare services to all segments of human beings with a strong commitment to providing innovative, efficient, quality solutions and affordable health for all.</p>
            <p className='pera  pt-2 text-light' >Our products are made from high-quality raw materials that are procured from our trusted vendors. We have a wide range of pharmaceutical products in our portfolio and always strive to introduce new products whenever possible.</p>
            <div className="  text-white fw-bolder  d-flex align-content-center align-items-center px-2 mt-3">
         
            
         <Link to={"tel:9898399973"} className="text-decoration-none  d-flex align-items-center justify-content-center my-4 my-lg-0"> 
         <div className='text-white fs-4  p-2 rounded-circle d-flex align-content-center align-itmes-center justify-content-center me-1 animated-icon' style={{backgroundColor:"var(--pink)"}}> <MdWifiCalling3 /> </div>
         <h4 className='text-white  text-decoration-none fw-medium fstyle ps-2'>+ (91) 98983 99973</h4>
         </Link>
       </div>
    </div>
    <div className="col-12 col-lg-6 order-0 order-lg-1 ms-auto mx-lg-auto" data-aos="fade-left" data-aos-duration="1800" data-aos-once="true" >
    <div className="aboutimageheight "  >
      <img src={require("../../Assets/Images/friendly-atmosphere-group-young-freelancers-office-have-conversation-smiling_146671-13630.jpg")} alt="" className='img-fluid h-100 w-100 object-fit-cover' />
    </div>
    
    </div>
</div>
<div className="row g-2 d-flex marginminus">
      {[
        { img: require("../../Assets/Images/quality icon.png"), text: "Quality" ,delay:"0"},
        { img: require("../../Assets/Images/satisfication.png"), text: "Satisfaction" ,delay:"200" },
        { img: require("../../Assets/Images/safety icon.png"), text: "Safety" ,delay:"500" },
      ].map((item, index) => (
        <div className="col-12 col-lg-3" key={index} data-aos="fade-up" data-aos-duration="1800" data-aos-once="true" data-aos-delay={item.delay}>
          <div className="h-100 bg-white p-3 m-2 m-lg-0 hoverrotate">
            <div className="mx-auto img-container">
              <img src={item.img} alt={item.text} className="img-fluid object-fit-cover rotateimg" />
            </div>
            <h3 className="text-center fw-bold fstyle mt-2 texthover" >
              {item.text}
            </h3>
          </div>
        </div>
      ))}
    </div>
    </div>
</div>
</>
  );
}

export default Aboutsec;
