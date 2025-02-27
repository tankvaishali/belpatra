import React from 'react';
import { useParams } from 'react-router-dom';
import { CategoryListItem } from './CategoryList';
import HOC from '../HOC';
import Buttoncom from '../Buttoncom';
import { IoMdPerson } from 'react-icons/io';
import { FaMailBulk } from 'react-icons/fa';
import { BsFillPhoneFill } from 'react-icons/bs';
import { MdMessage } from 'react-icons/md';
import { ProductList } from './ProductList';

function ProductInnerForm() {
    const { id, id2 } = useParams();

    const category = CategoryListItem.find(cat => cat.id === id);
    const subCategory = category?.inner_Category.find(sub => sub.id === id2);
    const enquiryData = subCategory?.EnquiryForm || [];

    const Procategory = ProductList.find(product => product.id === id);
    const ProsubCategory = Procategory?.inner_Category.find(sub => sub.id === id2);
    const ProenquiryData = ProsubCategory?.EnquiryForm || [];

    return (
        <>
            <div className='bg_ProductInnerForm py-5'>
                <div className='container'>
                    <div className='text-center'>
                        {
                            enquiryData.map((item, index) => (
                                <div className='text-center' key={index}>
                                    <h4 className='fw-bold titletext text-center w-100 border-0'>{item.tittle}</h4>
                                    <p className='pera my-3'>{item.content}</p>
                                </div>
                            ))
                        }

                        {
                            ProenquiryData.map((item, index) => (
                                <div className='text-center' key={index}>
                                    <h4 className='fw-bold titletext text-center w-100 border-0'>{item.tittle}</h4>
                                    <p className='pera my-3'>{item.content}</p>
                                </div>
                            ))
                        }
                    </div>

                    <div className='my-4'>
                        <h3 className="text-center" data-aos="zoom-in" data-aos-delay="50" data-aos-duration="1800">
                            <span className="titletext">Make An Enquiry</span>
                        </h3>
                        <div className='d-flex justify-content-center align-items-center mt-4'>
                            <div className='mainform row'>
                                <div className='col-12'>
                                    <div className='d-flex justify-content-center gap-3'>
                                        <div className='w-50'>
                                            <label htmlFor="" className='d-block titletext border-0 fs-6'><IoMdPerson /> Name</label>
                                            <input type="text" name="name" id="" className="forminput form-control custom-input mt-1 w-100" />
                                        </div>
                                        <div className='w-50'>
                                            <label htmlFor="" className='d-block titletext border-0 fs-6'><FaMailBulk /> E-mail</label>
                                            <input type="text" name="email" id="" className="forminput form-control custom-input mt-1 w-100" />
                                        </div>
                                    </div>
                                    <div className='w-100 mt-3'>
                                        <label htmlFor="" className='d-block titletext border-0 fs-6'><BsFillPhoneFill /> Phone No.</label>
                                        <input type="number" name="phoneno" id="" className="forminput form-control custom-input mt-1" />
                                    </div>
                                    <div className='w-100 mt-3'>
                                        <label htmlFor="" className='d-block titletext border-0 fs-6'><MdMessage /> Message</label>
                                        <textarea name="message" id="" className="forminput form-control custom-input mt-1"></textarea>
                                    </div>
                                    <div className='mt-3 mx-auto' style={{ width: "fit-content" }}>
                                        <Buttoncom btn="Send An Enquiry" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HOC(ProductInnerForm);