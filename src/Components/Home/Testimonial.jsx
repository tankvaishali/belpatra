import React from 'react';
import { FaQuoteRight } from 'react-icons/fa';
import { GrNext, GrPrevious } from 'react-icons/gr';
import { IoMdStarHalf } from 'react-icons/io';
import { MdStar } from 'react-icons/md';

const testimonials = [
  {
    id: 1,
    initial: 'D',
    name: 'John Doe',
    role: 'pharmasist',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus eum odit repudiandae ab magnam.',
    rating: 3.5
  },
  {
    id: 2,
    initial: 'S',
    name: 'Jane Smith',
    role: 'pharmasist',
    review: 'Eveniet, voluptate praesentium! Laboriosam harum et ducimus modi nemo ratione aperiam ex distinctio.',
    rating: 4.5
  },
  {
    id: 3,
    initial: 'M',
    name: 'Michael Johnson',
    role: 'pharmasist',
    review: 'Laboriosam harum et ducimus modi nemo ratione aperiam ex distinctio. modi nemo ratione aperiam ex distinctio.',
    rating: 2.5
  }
];

const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  return (
    <>
      {[...Array(fullStars)].map((_, i) => (
        <MdStar key={i} className='text-warning fs-4' />
      ))}
      {halfStar && <IoMdStarHalf className='text-warning fs-4' />}
    </>
  );
};

function Testimonial() {
  return (
    <div className='testimonial_bg py-5 mb-5'>
      <div className="container mt-0 mb-5 my-lg-5">
        <div className="row position-relative p-0 m-0">
          <div className="col-12 col-lg-6 p-0 m-0 d-flex flex-column justify-content-between">
          <div>
              <h1
              className="titletext  pb-2"
              data-aos="zoom-in"
        data-aos-once="true"
              data-aos-duration="1500"
            >
            What Our Clients Say
            </h1>
                <p
                  className="pt-2 pera text-secondary"
                  data-aos="fade-up"
        data-aos-once="true"
              data-aos-duration="1500"
                >
                  People are Choosing Us for  
                  Our Client Opinion Matters a Lot. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, ut!								 
                </p>
              </div>
            <div className='bgtestimonial text-white p-5 mt-4' >
              <div id="carouselExampleAutoplaying" className="carousel slide testimonial_arrow" data-bs-ride="carousel">
                <div className="carousel-inner">
                  {testimonials.map((testimonial, index) => (
                    <div key={testimonial.id} className={`carousel-item px-3 ${index === 0 ? 'active' : ''}`} style={{ minHeight: '220px' }}>
                      <div className='d-flex flex-column h-100'>
                        <div className='d-flex justify-content-between'>
                          <div className='d-flex'>
                            <div className='quotecolorbg text-black fw-bold fstyle rounded-circle font_fletter  text-center p-2 mt-2 d-flex justify-content-center align-items-center'>
                              {testimonial.initial}
                            </div>
                            <div>
                              <div className='ps-3 fstyle fs-4 text-capitalize '>{testimonial.name}</div>
                              <div className='pera ps-3 text-capitalize '>{testimonial.role}</div>
                            </div>
                          </div>
                          <div className='quotecolor fs-1'><FaQuoteRight /></div>
                        </div>
                        <div className='pera pt-4 flex-grow-1'>{testimonial.review}</div>
                        <div className='pt-3 fs-4'>{renderStars(testimonial.rating)}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className='previewButton'>
                  <button className="carousel-control-prev d-none d-lg-block bg-white text-black" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="fs-3 d-flex align-content-center align-items-center justify-content-center"><GrPrevious /></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next d-none d-lg-block bg-black text-white" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="fs-3 d-flex align-content-center align-items-center justify-content-center"><GrNext /></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 p-0 m-0" >
            <div className='h-100  w-100 allimg'>
                <div className="desc1"></div>
              <img src={require("../../Assets/Images/testimonial_image.jpeg")} alt="testimonial" className=' img-fluid w-100 h-100 object-fit-cover' />
              {/* <img src="https://img.freepik.com/free-photo/happy-couple-shaking-hands-with-real-estate-agent-after-successful-agreement-office_637285-6889.jpg?t=st=1740460668~exp=1740464268~hmac=81027f3e3a3290dbb14be1ed7317e536ebc9c85ebcf03a05605f2338d638557c&w=1060" alt="testimonial" className='img-fluid w-100 h-100 object-fit-cover' /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
