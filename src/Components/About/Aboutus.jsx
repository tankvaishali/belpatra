import React from 'react';
import HOC from '../HOC';
import { Link } from 'react-router-dom';
import "../../Assets/Css/Aboutus.css"
import Aboutsec from './Aboutsec';
import Team from './Team';
import Mision from './Mision';
import Buttoncom from '../Buttoncom';
import Value from './Value';
import CountUp from 'react-countup';



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
         <div className="container py-5 ">
        <div className="row p-2 p-lg-5 d-flex justify-content-center align-items-center align-content-center">
          <div className="col-12 col-md-7 col-lg-8 p-4">
          <div className="h-100">
                
                <h1 className="fw-bold fstyle text-white" data-aos="zoom-in"
                        data-aos-once="true"
                        data-aos-duration="1500">
                Get Bussiness Quote
                </h1>
                <div className='text-white py-3' data-aos="fade-up"
                        data-aos-once="true"
                        data-aos-duration="1500">
                We took every opportunity to share our great products to more people around the world.
                </div>
                <div data-aos="fade-up"
                        data-aos-once="true"
                        data-aos-duration="1500">
<Link to={"/contact"}>          
      <Buttoncom btn="Contact Us" />
      </Link>
                </div>
            
        </div>
          </div>
          <div
            className="col-12 col-md-5 col-lg-4 p-4"
            data-aos="zoom-in"
            data-aos-duration="1800"
            data-aos-once="true"
          >
            <div className="d-grid" style={{ gridTemplateColumns: "1fr 1fr" }}>
              <div className="border-end border-bottom border-white py-3 text-center">
                <h1
                  className="fw-bold"
                  style={{ letterSpacing: "2px",color:"var(--pink)" }}
                >
                  <CountUp end={95} enableScrollSpy={true} /> +
                </h1>
                <div className="text-white">International Clients</div>
              </div>
              <div className="border-bottom border-white text-center py-3">
                <h1
                  className="fw-bold"
                  style={{ letterSpacing: "2px",color:"var(--pink)" }}
                >
                  {" "}
                  <CountUp end={50} enableScrollSpy={true} /> +
                </h1>
                <div className="text-white">Sterile</div>
              </div>
              <div className="border-end border-white py-3 text-center">
                <h1
                  className="fw-bold"
                  style={{ letterSpacing: "2px",color:"var(--pink)" }}
                >
                  {" "}
                  <CountUp end={20} enableScrollSpy={true} /> +
                </h1>
                <div className="text-white">Non Sterile</div>
              </div>
              <div className="text-center py-3">
                <h1
                  className="fw-bold"
                  style={{ letterSpacing: "2px",color:"var(--pink)" }}
                >
                  {" "}
                  <CountUp end={10} enableScrollSpy={true} /> +
                </h1>
                <div className="text-white">Countries</div>
              </div>
            </div>
          </div>
        </div>
      </div>
         </div>

            <Mision/>
            <Value/>
        </>
    );
}

export default HOC(Aboutus);
