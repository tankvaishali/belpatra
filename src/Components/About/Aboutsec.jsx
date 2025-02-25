import React from 'react';
import { MdWifiCalling3 } from 'react-icons/md';
import { Link } from 'react-router-dom';

function Aboutsec() {
  return (
<>
<div className="aboutus_bgcolor py-5">
    <div className="container py-3">
<div className="row g-3 d-flex justify-content-center">
    <div className="col-5">
    <h1
              className="titletext text-white pb-2  "
              data-aos="zoom-in"
              data-aos-duration="1500"
              data-aos-once="true"
            >
              About Us
            </h1>
            <p className='pera text-secondary pt-2 fw-bold' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, dolores. adipisicing elit. Animi, dolores </p>
            <p className='pera  pt-2 text-light' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, dolores. adipisicing elit. Animi, dolores Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus qui unde voluptatibus eum, et deleniti sed quam nisi officia. Id.</p>
            <div className="  text-white fw-bolder  d-flex align-content-center align-items-center px-2 mt-3">
         
            
         <Link to={"tel:9898399973"} className="text-decoration-none  d-flex align-items-center justify-content-center"> 
         <div className='text-white fs-4 bgcolor p-2 rounded-circle d-flex align-content-center align-itmes-center justify-content-center me-1 animated-icon'> <MdWifiCalling3 /> </div>
         <h4 className='text-white  text-decoration-none fw-medium fstyle ps-2'>+ (91) 98983 99973</h4>
         </Link>
       </div>
    </div>
    <div className="col-6">
    <div className="h-100">
      <img src={require("../../Assets/Images/friendly-atmosphere-group-young-freelancers-office-have-conversation-smiling_146671-13630.jpg")} alt="" className='img-fluid' />
    </div>
    
    </div>
</div>
<div className="row">
  <div className="col-12 col-lg-3">
    <div className="h-100 bg-white p-3">
asd
    </div>
  </div>
</div>
    </div>
</div>
</>
  );
}

export default Aboutsec;
