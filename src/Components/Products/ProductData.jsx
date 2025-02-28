import React from 'react';
import HOC from '../HOC';
import { Link, useParams } from 'react-router-dom';
import { CategoryListItem } from './CategoryList';
import { ProductList } from './ProductList';

function ProductData() {
    const { id } = useParams();
    const data = CategoryListItem.filter((item) => item.id === id);

    const productdata = ProductList.filter((item) => item.id === id);

    return (
        <>
            <div className='w-100 bg_ProductdataImage'>
                <div className='container'>
                    <div className='py-5'>
                        {data.map((item) => (
                            <div key={item.id}>
                                <div className='mb-5'>
                                    <h3 className="text-white" data-aos="zoom-in" data-aos-delay="50" data-aos-duration="1800" data-aos-once="true">
                                        &#x2724; <span className="titletext border-0 pb-2">{item.name}</span>
                                    </h3>
                                </div>
                                <div className='row'>
                                    {item.inner_Category?.map((innerItem, index) => (
                                        <div className='col-12 col-lg-4 col-md-6 mb-4 d-flex' key={index}>
                                            <Link className='productbox text-decoration-none text-dark d-block text-center p-3 w-100 h-100 d-flex align-items-center justify-content-center' data-aos="fade-up" data-aos-delay="50" data-aos-duration="1800" data-aos-once="true" to={`/product/${id}/${innerItem.id}`}>
                                                <div className='pera productTittle fw-bold'>{innerItem.Category}</div>
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}

                        {productdata.map((item) => (
                            <div key={item.id}>
                                <div className='mb-5'>
                                    <h3 className="text-white" data-aos="zoom-in" data-aos-delay="50" data-aos-duration="1800" data-aos-once="true">
                                        &#x2724; <span className="titletext border-0 pb-2">{item.name}</span>
                                    </h3>
                                </div>
                                <div className='row'>
                                    {item.inner_Category?.map((innerItem, index) => (
                                        <div className='col-12 col-lg-4 col-md-6 mb-4 d-flex' key={index}>
                                            <Link className='productbox text-decoration-none text-dark d-block text-center p-3 w-100 h-100 d-flex align-items-center justify-content-center' data-aos="fade-up" data-aos-delay="50" data-aos-duration="1800" data-aos-once="true" to={`/product/${id}/${innerItem.id}`}>
                                                <div className='pera productTittle fw-bold'>{innerItem.productcategory}</div>
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default HOC(ProductData);