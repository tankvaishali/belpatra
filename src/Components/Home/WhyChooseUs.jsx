import React from 'react';
import { FaCheckCircle, FaHandsHelping, FaPills, FaShieldAlt, FaWrench } from 'react-icons/fa';
import Buttoncom from '../Buttoncom';
import { TbCertificate } from 'react-icons/tb';
import { BiWorld } from 'react-icons/bi';
import Progress from './Progress';

function WhyChooseUs() {
    let chooseus = [
        {
          icon: <FaShieldAlt />,
          name: "Experienced and dedicated team",
          
        },
        {
          icon: <FaHandsHelping />,
          name: "Innovation & committed to business ethics",
          
        },
        {
          icon: <BiWorld />,
          name: "Strong customer base in India and across the globe",
          
        },
        {
          icon: <FaPills/>,
          name: "Diverse portfolio of products",
          
        },
        {
          icon: <TbCertificate />,
          name: "Government Certified Company",
          
        },
        {
          icon: <FaWrench />,
          name: "Customized packaging as per the customer",
          
        },
      ];
  return (
    <div className='whychoose_bg py-5 pb-0 overflow-hidden'>
      <div className="container py-3 pb-0">
   
           
            <div>
        <div className="container pb-3 pb-lg-5 my-5 overflow-hidden">
          <div className="row p-0 m-0 pt-4">
            <div className="col-12 col-lg-6">
              <div>
              <h1
              className="titletext  pb-2"
              data-aos="zoom-in"
            
              data-aos-duration="1500"
              data-aos-once="true"

            >
             Why Choose Us
            </h1>
                <div
                  className="pt-2 pera "
                  data-aos="fade-up"
            
              data-aos-duration="1500"
              data-aos-once="true"

                >
                  People are Choosing Us for  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, quidem.
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
            <p className="pera text-secondary py-3  fw-medium pt-4" data-aos="fade-left"
              
              data-aos-duration="1500"
              data-aos-once="true"
              >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore tenetur debitis itaque voluptates officiis quia repudiandae suscipit asperiores totam beatae amet facere cum id voluptatum quidem expedita, corporis cupiditate architecto.acere cum id voluptatum quidem expedita, corporis cupiditate architecto.
            </p>
            </div>

            <div className="col-12 col-lg-3 mt-3 mt-lg-5 ">
              <div
                className="h-100 "
                data-aos="fade-right"
                data-aos-duration="1500"
                data-aos-once="true"
              >
                <div>
                  <div className="fw-bold " style={{color:"var(--purple)"}}> What Sets Us Apart:</div>
                  <p className="pera">

                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis aspernatur, pariatur nam officiis voluptates odio tenetur obcaecati ea perspiciatis dolores. Perferendis nostrum hic, illo eligendi dicta deleniti delectus quis libero?

                  </p>

                  <div className="pt-2">
                    <div className="d-flex align-content-center align-items-center  py-1">
                      <div className="purplecolor fs-5">
                        <FaCheckCircle />
                      </div>
                      <div className="ps-2 fw-medium ">
                        Rigorous quality assurance
                      </div>
                    </div>
                    <div className="d-flex align-content-center align-items-center  py-1">
                      <div className="purplecolor fs-5">
                        <FaCheckCircle />
                      </div>
                      <div className="ps-2 fw-medium ">
                        Professional installation and setup
                      </div>
                    </div>
                    <div className="d-flex align-content-center align-items-center  py-1">
                      <div className="purplecolor fs-5">
                        <FaCheckCircle />
                      </div>
                      <div className="ps-2 fw-medium ">
                        Sustainable, eco-friendly solutions
                      </div>
                    </div>
                    <div className="d-flex align-content-center align-items-center align-items-lg-stretch  py-1">
                      <div className="purplecolor fs-5">
                        <FaCheckCircle />
                      </div>
                      <div className="ps-2 fw-medium ">
                        Custom solar systems for maximum efficiency
                      </div>
                    </div>
                  </div>
                  <div className="pt-2">
             <Buttoncom btn="Learn More"/>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-5  mt-3 mt-lg-5 ">
              <div
                className="h-100 py-3 py-lg-0"
                data-aos="fade-down"
                data-aos-duration="1500"
                data-aos-once="true"
              >
                <img
                  src={require("../../Assets/Images/-_processed.png")}
                  alt="not found"
                  className="img-fluid w-100 h-100 object-fit-contain animated-image"
                />
              </div>
            </div>
            <div className="col-12 col-lg-4 mt-3 ps-0 ps-lg-5">
              <div
                className="h-100 d-flex flex-column justify-content-around"
                data-aos="fade-left"
                data-aos-duration="1500"
                data-aos-once="true"
              >
                {chooseus.map((x, i) => {
                  return (
                   
                      <div className=" mt-2 " key={i}>
                        <div className="d-flex    py-1 align-content-center  align-items-center">
                          <div className=" text-white bgcolor icon_circle fs-2  p-3 d-flex align-items-center justify-content-center align-content-center  ">
                            {x.icon}
                          </div>
                          <div>
                            <div className="ps-3 fw-semibold pera" style={{ fontSize: 15 }}>{x.name}</div>
                         
                          </div>
                        </div>
                      </div>
                  
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <Progress/>
    </div>
  );
}

export default WhyChooseUs;
