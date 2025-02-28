import React, { useState, useEffect } from "react";
import "../../Assets/Css/HomeCarousel.css"
import { Link } from "react-router-dom";
import Buttoncom from "../Buttoncom";
const slidesData = [
    {
        headlineFirstLine: "Welcome to",
        headlineSecondLine: "Belpatra",
        sublineFirstLine: "Innovative Healing for a Healthier Tomorrow",
        bgImg: "https://media.post.rvohealth.io/wp-content/uploads/2020/08/Chamomile_and_Homeopathic_Medicine-1200x628-facebook-1200x628.jpg",
        rectImg: "https://previews.123rf.com/images/gordya/gordya1205/gordya120500003/13536595-white-pills-tablets-background-medicine-objects.jpg",
        btntext: "WelCome to",
        path:"/about",
        pathbtn:"Know More"
    },
    {
        headlineFirstLine: "Quality Medicine",
        headlineSecondLine: "",
        sublineFirstLine: "Quality Medicine for Better Health",
        bgImg: "https://www.ichthyol.de/wp-content/uploads/2022/09/Frau-mit-Mikroskop-im-Labor-1024x642.jpg",
        rectImg: "https://media.licdn.com/dms/image/C4E1BAQGm8nzf-4tx-g/company-background_10000/0/1584685478357/genchem_cover?e=2147483647&v=beta&t=GY-96OE6lUvfs6aQ0dPrRjGuvmUCKGliLAas_R7-Mms",
        btntext: "Quality Medicine",
        path:"/product",
        pathbtn:"View More"
    },
    {
        headlineFirstLine: "Innovative Healing",
        headlineSecondLine: "",
        sublineFirstLine: "Innovative Healing for a Brighter Future",
        bgImg: "https://belpatrapharmachem.com/wp-content/uploads/2022/06/photo1.jpg",
        rectImg: require("../../Assets/Images/borderimage.jpg"),
        btntext: "Innovative Healing",
        path:"/contact",
        pathbtn:"Contact Us"
    }
];

const HomeCarouselcom = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPreviousSlide, setIsPreviousSlide] = useState(false);
    const [isFirstLoad, setIsFirstLoad] = useState(true);

    const updateSlide = (index) => {
        setIsPreviousSlide(index < currentSlide);
        setCurrentSlide(index);
        setIsFirstLoad(false);
    };

    useEffect(() => {
        let startX = 0;
        let endX = 0;

        const handleTouchStart = (event) => startX = event.touches[0].pageX;
        const handleTouchMove = (event) => endX = event.touches[0].pageX;
        const handleTouchEnd = () => {
            const threshold = startX - endX;
            if (threshold < 150 && currentSlide > 0) {
                setCurrentSlide((prev) => prev - 1);
            }
            if (threshold > -150 && currentSlide < slidesData.length - 1) {
                setCurrentSlide((prev) => prev + 1);
            }
        };

        window.addEventListener("touchstart", handleTouchStart);
        window.addEventListener("touchmove", handleTouchMove);
        window.addEventListener("touchend", handleTouchEnd);

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slidesData.length);
        }, 5000); // Change slide every 5 seconds

        return () => {
            clearInterval(interval);
            window.removeEventListener("touchstart", handleTouchStart);
            window.removeEventListener("touchmove", handleTouchMove);
            window.removeEventListener("touchend", handleTouchEnd);
        };
    }, [currentSlide]);

    return (
        <div className={`wrapper ${isPreviousSlide ? "is-previous" : ""} ${isFirstLoad ? "first-load" : ""}`}>
            {slidesData.map((slide, index) => (
                <div
                    key={index}
                    className={`slide-wrapper ${index === currentSlide ? "active" : ""}`}
                    style={{ backgroundImage: `url(${slide.bgImg})`, zIndex: slidesData.length - index }}
                >
                    <div className="slide-inner">
                        <div className="slide-bg-text">
                            <p>{slide.headlineFirstLine}</p>
                        </div>
                        <div className="slide-rect-filter">
                            <div
                                className="slide-rect object-fit-cover"
                                style={{ borderImageSource: `url(${slide.rectImg})` }}
                            ></div>
                        </div>
                        <div className="slide-content">
                            <h1 className="slide-content-text">
                                <p>{slide.headlineFirstLine}</p>
                                <p>{slide.headlineSecondLine}</p>
                            </h1>
                            <Link to={slide.path} className="slide-content-cta" href="tel:7048313227"> <Buttoncom btn={slide.pathbtn} /></Link>
                        </div>
                        <h2 className="slide-side-text">
                            <span>{slide.sublineFirstLine}</span>
                        </h2>
                    </div>
                </div>
            ))}
            <div className="controls-container">
                {slidesData.map((slide, index) => (
                    <button
                        key={index}
                        className={`controls-button ${index === currentSlide ? "active" : ""}`}
                        onClick={() => updateSlide(index)}
                    >
                        {slide.btntext}
                    </button>
                ))}
            </div>
            <div className="pagination-container">
                {slidesData.map((slide, index) => (
                    <span
                        key={index}
                        className={`pagination-item ${index === currentSlide ? "active" : ""}`}
                        onClick={() => updateSlide(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default HomeCarouselcom;
