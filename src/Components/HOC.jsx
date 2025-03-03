import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';
import { Link } from 'react-router-dom';

function HOC(Component) {
   function Newcomponent() {

      const [isVisible, setIsVisible] = useState(false);

      useEffect(() => {
         const handleScroll = () => {
            if (window.scrollY > 100) {
               setIsVisible(true);
            } else {
               setIsVisible(false);
            }
         };

         window.addEventListener("scroll", handleScroll);
         return () => window.removeEventListener("scroll", handleScroll);
      }, []);

      return (
         <>
            <Header />

       
            <div>
               <div className={`social_Nav position-fixed d-none d-md-block ${isVisible ? "show_side-icons" : ""}`}>
                  <ul className='p-0'>
                     <li className="Facebook_sideNav d-block text-end">
                        <Link to="https://www.facebook.com/people/Belpatra-Pharmachem/100082567202591/" target="_blank" className='sideNavIcon_tittle align-items-center text-white text-decoration-none'>
                           <span className='titletext border-0'>Facebook</span>
                           <div className='side_Nav_Icon text-center bg-white p-2 rounded-circle fs-5 d-flex justify-content-center align-items-center'><FaFacebookF /></div>
                        </Link>
                     </li>
                     <li className="Instagram_sideNav d-block m-2 text-end p-2">
                        <Link to="https://www.instagram.com/belpatra_pharmachem/" target="_blank" className='sideNavIcon_tittle align-items-center text-white text-decoration-none'>
                           <span className='titletext border-0'>Instagram</span>
                           <div className='side_Nav_Icon text-center bg-white p-2 rounded-circle fs-5 d-flex justify-content-center align-items-center'><GrInstagram /></div>
                        </Link>
                     </li>
                     <li className="Twitter_sideNav d-block m-2 text-end p-2">
                        <Link to="https://twitter.com/Belpatra_Pharma" target="_blank" className='sideNavIcon_tittle align-items-center text-white text-decoration-none'>
                           <span className='titletext border-0'>Twitter</span>
                           <div className='side_Nav_Icon text-center bg-white p-2 rounded-circle fs-5 d-flex justify-content-center align-items-center'><FaTwitter /></div>
                        </Link>
                     </li>
                     <li className="Linkedin_sideNav d-block m-2 text-end p-2">
                        <Link to="https://www.linkedin.com/in/belpatra-pharmachem/" target="_blank" className='sideNavIcon_tittle align-items-center text-white text-decoration-none'>
                           <span className='titletext border-0'>Linkedin</span>
                           <div className='side_Nav_Icon text-center bg-white p-2 rounded-circle fs-5 d-flex justify-content-center align-items-center'><FaLinkedinIn /></div>
                        </Link>
                     </li>
                  </ul>
               </div>
            </div>

            <Component />
            <Footer />
         </>
      );
   }
   return Newcomponent;
}

export default HOC;