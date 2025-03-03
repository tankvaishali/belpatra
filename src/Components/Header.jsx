import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../App.css'; // Ensure this CSS file is imported properly
import { MdWifiCalling3 } from 'react-icons/md';
import { FaLeftLong } from 'react-icons/fa6';
import { BiAlignLeft } from 'react-icons/bi';
import { LuAlignRight } from 'react-icons/lu';
import { IoCloseSharp } from 'react-icons/io5';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-lg p-lg-2 ps-lg-0 p-0 ps-3 p-0">
          <Link className="navbar-brand logoset" to="/">
            <img
              src={require('../Assets/Images/logo.png')}
              alt="Logo not found"
              className="img-fluid"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="navbar-toggler-icon">
              {isOpen ? <IoCloseSharp className='text-light fs-3' /> : <LuAlignRight className='text-light fs-3' />}
            </span>
          </button>
          <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarSupportedContent">
            <ul id="primary" className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/product">
                  Product
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact Us
                </NavLink>
              </li>
            </ul>
            <div className="text-white fw-bolder h-100 d-flex align-content-center align-items-center px-2 d-none d-md-block">
              <Link to={"tel:9898399973"} className="text-decoration-none d-flex align-items-center justify-content-center">
                <div className='text-white fs-4 bgcolor p-2 rounded-circle d-flex align-content-center align-items-center justify-content-center me-1 animated-icon'>
                  <MdWifiCalling3 />
                </div>
                <div className='text-black text-decoration-none fw-medium'>+(91) 98983 99973</div>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
