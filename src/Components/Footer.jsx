import React from 'react';
import { BiSolidPhoneCall } from 'react-icons/bi';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaMailBulk, FaPills, FaTwitter } from 'react-icons/fa';
import { FaMapLocationDot } from 'react-icons/fa6';
import { IoHomeSharp, IoPeopleSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      {/* <div >
    <img src={require("../Assets/Images/Screenshot 2025-02-19 110255.png")} alt="" className='img-fluid w-100'/>
    </div> */}
      <div className="footer_bg w-100 mt-5">
        <div className="container">
          <div className="row g-4 g-lg-5 footerpt border-bottom border-white border-2" >
            <div className="col-12 col-md-9 col-lg-5 py-2 py-lg-5" >
              <div data-aos="fade-up" data-aos-duration="2000">
                <div style={{ width: 150 }}>
                  <img src={require("../Assets/Images/logo.png")} alt="" className='img-fluid bg-white  p-3 pt-2 rounded-pill d-flex align-items-center' />
                </div>
                <div className='text-white pera mt-2 mt-3'>
                  To grow as a company that stands for the highest levels of quality standards
                </div>
              </div>
              <div className='mt-2 mt-lg-4'>
                <div data-aos="fade-up" data-aos-duration="2000">
                  <div className="d-flex fs-4 my-3">
                    <Link
                      to={"https://www.facebook.com/people/Belpatra-Pharmachem/100082567202591/"}
                      target="_blank"
                      className="footericon text-center p-2 mx-2  ms-0 d-flex text-decoration-none text-white facebookicon">
                      <FaFacebookF />
                    </Link>

                    <Link
                      to={"https://www.instagram.com/belpatra_pharmachem/"}
                      className="footericon text-center p-2  mx-2 d-flex text-decoration-none text-white instaicon">
                      <FaInstagram />
                    </Link>
                    <Link
                      to={"https://twitter.com/Belpatra_Pharma"}
                      className="footericon text-center p-2  mx-2 d-flex text-decoration-none text-white twittericon">
                      <FaTwitter />
                    </Link>
                    <Link
                      to={
                        "https://www.linkedin.com/in/belpatra-pharmachem/"
                      }
                      target="_blank"
                      className="footericon text-center p-2  mx-2 d-flex text-decoration-none text-white linkicon">
                      <FaLinkedinIn />
                    </Link>

                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 py-2 py-lg-5">
              <div data-aos="fade-up" data-aos-duration="2000">
                <h3 className='text-white fw-bold border-bottom border-2 pb-2' style={{ width: "fit-content" }}>
                  Useful Link
                </h3>
                <div className="py-2 d-flex align-items-center">
                  <div className="text-white text-decoration-none footerlinkicon fs-5">
                    <IoHomeSharp />
                  </div>
                  <Link to={"/"} className=' text-decoration-none ps-2 pt-1 pera linkhover'>Home</Link>
                </div>
                <div className="py-2 d-flex align-items-center">
                  <div className="text-white text-decoration-none footerlinkicon fs-5">
                    <IoPeopleSharp />
                  </div>
                  <Link to={"/about"} className=' text-decoration-none ps-2 pt-1 pera linkhover'>About Us</Link>
                </div>
                <div className="py-2 d-flex align-items-center">
                  <div className="text-white text-decoration-none footerlinkicon fs-5">
                    <FaPills />
                  </div>
                  <Link to={"/product"} className=' text-decoration-none ps-2 pt-1 pera linkhover'>Product</Link>
                </div>
                <div className="py-2 d-flex align-items-center">
                  <div className="text-white text-decoration-none footerlinkicon fs-5">
                    <BiSolidPhoneCall />
                  </div>
                  <Link to={"/contact"} className=' text-decoration-none ps-2 pt-1 pera linkhover'>Contact Us</Link>
                </div>
              </div>


            </div>
            <div className="col-12 col-md-6 col-lg-4 py-2 py-lg-5">
              <div data-aos="fade-up" data-aos-duration="2000">

                <h3 className='text-white fw-bold border-bottom border-2 pb-2' style={{ width: "fit-content" }}>
                  Contact Us
                </h3>
                <div className="d-flex py-2">
                  <div className="text-white text-decoration-none footerlinkicon fs-4">
                    <FaMapLocationDot />
                  </div>
                  <div className="linkhover ps-3 pera">
                    <Link
                      to={
                        "https://maps.app.goo.gl/2Zm1ZC443PhT64D39"
                      }
                      className="text-decoration-none linkhover link_hover py-1 pera"
                      target="_blank"
                    >
                      Plot No. 1, Shop No. 5, Ground Floor, Shaktinagar Co. Op. Housing Society, Near Kantareswar Mahadev Temple Katargam, Surat – 395004, Gujarat.
                    </Link>
                  </div>
                </div>

                <div className="py-2 d-flex ">
                  <div className="text-white text-decoration-none footerlinkicon fs-4">
                    <BiSolidPhoneCall />
                  </div>
                  <div>

                    <div className="linkhover ps-3 pt-2">
                      {" "}
                      <Link
                        to={"tel:9898399973"}
                        className="text-decoration-none linkhover link_hover py-1 pera"
                      >
                        +(91) 98983 99973
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="py-2 d-flex align-content-center align-items-center">
                  <div>
                    <Link
                      to={"mailto:info@tharayilpower.com"}
                      className="text-white text-decoration-none footerlinkicon fs-4"
                    >
                      <FaMailBulk />
                    </Link>
                  </div>
                  <div>
                    <div className="linkhover ps-3">
                      <Link
                        to={"mailto:sales@belpatrapharmachem.com"}
                        className="text-decoration-none linkhover link_hover py-1 pera "
                      >
                        sales@belpatrapharmachem.com
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className='text-white text-center p-2'>
            Copyright © 2025 💜 Belpatra pharmachem, All rights Reserved.
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
