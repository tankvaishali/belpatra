import React from "react";
import { ImageList, ImageListItem } from "@mui/material";

const Logorun = () => {
    const logos = [
        require('../Assets/Images/logo.png'),
        require('../Assets/Images/3-fieldbrand.jpg'),
        require('../Assets/Images/partnerlogo (1).png'),
        require('../Assets/Images/partnerlogo (1).webp'),
        require('../Assets/Images/partnerlogo (3).png'),
        require('../Assets/Images/partnerlogo (4).png'),
        require('../Assets/Images/partnerlogo.png'),
        require('../Assets/Images/3-fieldbrand.jpg'), // Fixed: Corrected or added proper image
        require('../Assets/Images/partnerlogo.png'), // Fixed: Corrected or added proper image
        require('../Assets/Images/partnerlogo (3).png'),
        require('../Assets/Images/partnerlogo (4).png'),
        require('../Assets/Images/partnerlogo.png'),
    ];

    return (
        <div className="designbox my-5 shadow-lg overflow-hidden">
            <div className="designBox2">
                <div className="container " style={{ fontFamily: "Montserrat, sans-serif" }}>
                    <div className="row">
                        <div
                            className="col-lg-5 col-md-7 col-sm-9 col-11 m-auto"
                            data-aos="fade-right"
                            data-aos-duration="1500"
                            data-aos-once="true"
                        >
                            <h1
                                className="fw-bold lemon text-light text-capitalize mt-5 fstyle"
                                style={{ textShadow: "1px 1px black" }}
                            >
                                Our esteemed Clients Through Excellence in{" "}
                                <span style={{ color: "var(--pink)" }}> BELPATRA PHARMACHEM</span>
                            </h1>
                            <p className="fs-6 text-light pera pt-3">
                                BELPATRA PHARMACHEM is an India-based entity that is acknowledged as one of
                                the prominent companies in the global market is engaged in the field of
                                pharmaceutical drug manufacturing and pharmaceutical drugs export.
                            </p>
                        </div>
                        <div
                            className="partners-logo-slider col-lg-6 col-md-8 col-sm-10 col-11 my-lg-0 my-5 py-2 py-lg-5"

                        >
                            <ImageList variant="masonry" cols={2} gap={8} className="slide-track overflow-x-hidden">
                                {logos.concat(logos).map((item, index) => (
                                    <ImageListItem
                                        key={index}
                                        className="slide bg-light rounded-4 p-5"
                                    >
                                        <img
                                            src={item}
                                            alt={`Logo ${index}`}
                                            loading="lazy"

                                        />
                                    </ImageListItem>
                                ))}
                            </ImageList>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Logorun;
