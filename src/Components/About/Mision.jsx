import React from 'react';
import { IoCheckmarkDoneSharp } from 'react-icons/io5';

function Mision() {
  return (
    <div>
         <div className="py-lg-5 overflow-hidden">
        <div className="container py-4">
          <div className="row  ">
            <div
              className="col-12 col-lg-6 p-3 pt-1 p-md-5 m-0 "
              style={{ backgroundColor: "rgb(239, 239, 239)" }}
              data-aos="fade-right" data-aos-duration="1500" data-aos-once="true"
            >
                <div style={{width:200}}>
                 
                 <img src={require("../../Assets/Images/our-mission-01.png")} alt=""  className='img-fluid'/>
                                
                 </div>
              <div className="p-2 pt-0">


                <div className=" my-2 allimg">
                    <div className="desc1"></div>
                  <img
                    src={require("../../Assets/Images/mission.jpg")}
                    alt=""
                    className="img-fluid w-100 h-100 object-fit-cover"
                    style={{ border: "15px solid white" }}
                  />
                </div>
                <div className="fs-5 text-capitalize fw-medium mt-4">healthcare services</div>
                <div className="pera pt-1">
                Our mission is to offer high-quality healthcare services to every individual by following our core values of integrity, dedication, and ethics.
                </div>
               
              </div>
            </div>
            <div className="col-12 col-lg-6 p-3 p-lg-5 m-0 aboutus_bgcolor" data-aos="fade-left" data-aos-duration="1500" data-aos-once="true">
              <div className="border pera border-secondary p-4  p-lg-5  text-white h-100">
                <div className="ps-xxl-5">
               
                  <div className=" fstyle fw-bold text-capitalize fs-1">
                    {" "}
                    Benefits & Quality
                  </div>
                  <div className="fw-medium text-capitalize pt-2 fs-5 fstyle">
                    {" "}
                    Advantages and affordable 
                  </div>
                  <div
                    className="pera pt-2 "
                    style={{ color: "var(--lightgray--)" }}
                  >
                    {" "}
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id dignissimos quia voluptates exercitationem, minus dolores. Pariatur recusandae neque molestias nisi.
                  </div>
                  <div className="pt-2">
                    <p className="py-0 text-capitalize">
                      <span className="pe-2 fs-5">
                        <IoCheckmarkDoneSharp />
                      </span>
                      Production experts
                    </p>
                    <p className="py-0 text-capitalize">
                      <span className="pe-2 fs-5">
                        <IoCheckmarkDoneSharp />
                      </span>
                      Superior infrastructural facility
                    </p>
                    <p className="py-0 text-capitalize">
                      <span className="pe-2 fs-5">
                        <IoCheckmarkDoneSharp />
                      </span>
                      Maximum customer satisfaction
                    </p>
                    <p className="py-0 text-capitalize">
                      <span className="pe-2 fs-5">
                        <IoCheckmarkDoneSharp />
                      </span>
                      Upcoming technological trends
                    </p>
                  </div>
                  {/* <div className="pt-2 ">
                    <ButtonHover
                      btnttitle="Make An Appointment"
                      to="/contactus"
                      className="fw-medium p-3  fs-5"
                    />
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-6 p-3 p-md-5 m-0 bg-black order-1 order-lg-0 aboutus_bgcolor" data-aos="fade-right" data-aos-duration="1500" data-aos-once="true">
              <div className="border border-secondary p-3 p-lg-5  text-white h-100">
         
                <div className="ps-xxl-5">
                <div className=" fstyle fw-bold text-capitalize fs-1">
                    {" "}
                    promote optimum health
                  </div>
                  <div className=" text-capitalize pt-3 fs-5 fstyle fw-bold">
                    {" "}
                    innovative, efficient, quality solutions
                  </div>
                  <div
                    className="pera pt-3 "
                    style={{ color: "var(--lightgray--)" }}
                  >
                    {" "}
                    
                  </div>
                  <div
                    className="pera pt-3 "
                    style={{ color: "var(--lightgray--)" }}
                  >
                    {" "}
                    All our products are tested on multiple parameters for the assurance of quality and only those products that conform to the desired standards are made available to the customers.
                  </div>
                
                  <div className="pt-3 pera">
                    <p className="py-0  text-capitalize">
                      <span className="pe-2 fs-5">
                        <IoCheckmarkDoneSharp />
                      </span>
                      Our Quality Assurance

                    </p>
                    <p className="py-0  text-capitalize">
                      <span className="pe-2 fs-5">
                        <IoCheckmarkDoneSharp />
                      </span>
                      Client Satisfaction
                    </p>
                    <p className="py-0  text-capitalize">
                      <span className="pe-2 fs-5">
                        <IoCheckmarkDoneSharp />
                      </span>
                      Advanced infrastructure
                    </p>
                    <p className="py-0  text-capitalize">
                      <span className="pe-2 fs-5">
                        <IoCheckmarkDoneSharp />
                      </span>
                      Affordable prices and timely delivery
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-12 col-lg-6 p-3 pt-1 p-md-5 m-0 "
              style={{ backgroundColor: "rgb(239, 239, 239)" }}
              data-aos="fade-left" data-aos-duration="1800" data-aos-once="true"
            >
                <div style={{width:200}}>
                 
                 <img src={require("../../Assets/Images/our-vision-01.png")} alt=""  className='img-fluid'/>
                                
                 </div>
              <div className="p-2 pt-0">


                <div className=" my-2 allimg">
                    <div className="desc1"></div>
                  <img
                    src={require("../../Assets/Images/vision.jpg")}
                    alt=""
                    className="img-fluid w-100 h-100 object-fit-cover"
                    style={{ border: "15px solid white" }}
                  />
                </div>
                <div className="fs-5 text-capitalize fw-medium mt-4">Quality, Care, Trust</div>
                <div className="pera pt-1">
                Our vision statement is to promote optimum health and wellness through our products. We have a total commitment to health, education, and prosperity.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mision;
