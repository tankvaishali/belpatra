import React from 'react';
import HOC from '../HOC';
import { CategoryListItem } from './CategoryList';
import { Link } from 'react-router-dom';
import "../../Assets/Css/ProductPage.css";
import { ProductList } from './ProductList';
import Slider from 'react-slick';
import Faq from './Faq';

const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1700,
    pauseOnHover: false,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
            }
        },
    ]
};

function ProductPage() {
    return (
        <>
            <div className='landing_ProductPageimage'>
                <div className='text-white fstyle text-center d-flex align-items-center justify-content-center h-100 container'>
                    <div>
                        <div className='titlediv fw-medium'>Advanced Pharmaceutical Solutions for Better Healthcare</div>
                        <div className='pt-4 fstyle fw-medium fs-5'> <span ><Link to={"/"} className="text-decoration-none hoverlink text-white">Home</Link></span> / <span>Product</span></div>
                    </div>
                </div>
            </div>

            <div className='w-100 bg_ProductImage'>
                <div className='container py-5'>

                    <div>
                        <h1 className="titletext fstyle text-center mx-auto text-white" data-aos="zoom-in" data-aos-delay="50" data-aos-duration="1800">
                            Medical Essentials
                        </h1>
                    </div>

                    <Slider {...settings} className="my-5">
                        {ProductList.map((item, i) => (
                            <div key={i} className="px-2">
                                <Link className='productboxSlider productbox text-decoration-none text-dark d-block text-center p-3 w-100 h-100'
                                    to={`/product/${item.id}`}>
                                    <div className="d-flex align-items-center justify-content-center" style={{ height: "60px" }}>
                                        <img src={item.image} className='img-secondary' style={{ width: "40px", height: "40px" }} alt="" />
                                    </div>
                                    <div className='pera imageTittle fw-bold mt-3'>{item.name}</div>
                                </Link>
                            </div>
                        ))}
                    </Slider>

                    <div>
                        <h1 className="titletext fstyle text-center mx-auto text-white" data-aos="zoom-in" data-aos-delay="50" data-aos-duration="1800">
                            Our Products
                        </h1>
                    </div>

                    <div className='row my-5'>
                        {CategoryListItem.map((item, i) => (
                            <div className='col-12 col-lg-3 col-md-4 mb-4 d-flex' key={i}>
                                <Link className='productbox text-decoration-none text-dark d-block text-center p-3 w-100 h-100 d-flex align-items-center justify-content-center' to={`/product/${item.id}`}>
                                    <div className='pera productTittle fw-bold'>{item.name}</div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Faq/>
        </>
    );
}

export default HOC(ProductPage);