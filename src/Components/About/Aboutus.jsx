import React from 'react';
import HOC from '../HOC';
import { Link } from 'react-router-dom';
import "../../Assets/Css/Aboutus.css"
import Aboutsec from './Aboutsec';

function Aboutus() {
    return (
        <>
            <div className='landing_aboutimage'>
                <div className='text-white fstyle text-center d-flex align-items-center justify-content-center h-100 container'>        
                        <div className='titlediv fw-medium' data-aos="fade-up"
                            data-aos-once="true"
                            data-aos-duration="1500"> Lorem ipsum dolor sit amet consectetur adipisicing.</div>
                        <div className='pt-4 fstyle fw-medium fs-5' data-aos="fade-down"
                            data-aos-once="true"
                            data-aos-duration="1500"> <span ><Link to={"/"} className="text-decoration-none hoverlink text-white">Home</Link></span> / <span>About</span></div>
                </div>
            </div>
            <Aboutsec/>
        </>
    );
}

export default HOC(Aboutus);
