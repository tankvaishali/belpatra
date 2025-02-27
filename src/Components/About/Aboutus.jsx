import React from 'react';
import HOC from '../HOC';
import { Link } from 'react-router-dom';
import "../../Assets/Css/Aboutus.css"
import Aboutsec from './Aboutsec';
import Team from './Team';
import Mision from './Mision';
import Buttoncom from '../Buttoncom';
import Value from './Value';


function Aboutus() {
    return (
        <>
            <div className='landing_aboutimage'>
                <div className='text-white fstyle text-center d-flex align-items-center justify-content-center h-100 container'>        
                       <div>
                       <div className='titlediv fw-medium' data-aos="fade-up"
                            data-aos-once="true"
                            data-aos-duration="1500"> Lorem ipsum dolor sit amet consectetur adipisicing.</div>
                        <div className='pt-4 fstyle fw-medium fs-5' data-aos="fade-down"
                            data-aos-once="true"
                            data-aos-duration="1500"> <span ><Link to={"/"} className="text-decoration-none hoverlink text-white">Home</Link></span> / <span>About</span></div>
                       </div>
                </div>
            </div>

            <Aboutsec/>
            <Team/>
            <div className="contactdetail_bg py-5 mb-5">
                <div className='container py-5'>
                    <h1 className="fw-bold fstyle text-white">
                    Get Bussiness Quote
                    </h1>
                    <div className='text-white py-3'>
                    We took every opportunity to share our great products to more people around the world.
                    </div>
                    <div>
<Link to={"/contact"}>          
          <Buttoncom btn="Contact Us" />
          </Link>
                    </div>
                </div>
            </div>
            <Mision/>
            <Value/>
        </>
    );
}

export default HOC(Aboutus);
