import React, { useState, useEffect } from "react";
import "../../Assets/Css/HomeCarousel.css";
import { Link } from "react-router-dom";
import Buttoncom from "../Buttoncom";

const slidesData = [
    {
        headlineFirstLine: "Welcome to",
        headlineSecondLine: "Belpatra",
        sublineFirstLine: "Innovative Healing for a Healthier Tomorrow",
        bgImg: "https://media.post.rvohealth.io/wp-content/uploads/2020/08/Chamomile_and_Homeopathic_Medicine-1200x628-facebook-1200x628.jpg",
        rectImg: require('../../Assets/Images/Slide2.jpg'),
        btntext: "Welcome to"
    },
    {
        headlineFirstLine: "Quality Medicine",
        headlineSecondLine: "",
        sublineFirstLine: "Quality Medicine for Better Health",
        bgImg: "https://www.popsci.com/wp-content/uploads/2022/12/21/sick-kid-cold-medicine.jpg?quality=85",
        rectImg: require('../../Assets/Images/Slide3.jpg'),
        btntext: "Quality Medicine"
    },
    {
        headlineFirstLine: "Innovative Healing",
        headlineSecondLine: "",
        sublineFirstLine: "Innovative Healing for a Brighter Future",
        bgImg: "https://t4.ftcdn.net/jpg/04/20/03/81/360_F_420038128_w7tD7qjkSivmADw1q79bNQK1OqkqcbQP.jpg",
        rectImg: require('../../Assets/Images/Slide4.jpg'),
        btntext: "Innovative Healing"
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

        const handleTouchStart = (event) => (startX = event.touches[0].pageX);
        const handleTouchMove = (event) => (endX = event.touches[0].pageX);
        const handleTouchEnd = () => {
            const threshold = startX - endX;
            if (threshold > 100 && currentSlide < slidesData.length - 1) {
                updateSlide(currentSlide + 1);
            }
            if (threshold < -100 && currentSlide > 0) {
                updateSlide(currentSlide - 1);
            }
        };

        window.addEventListener("touchstart", handleTouchStart);
        window.addEventListener("touchmove", handleTouchMove);
        window.addEventListener("touchend", handleTouchEnd);

        return () => {
            window.removeEventListener("touchstart", handleTouchStart);
            window.removeEventListener("touchmove", handleTouchMove);
            window.removeEventListener("touchend", handleTouchEnd);
        };
    }, [currentSlide]);

    useEffect(() => {
        const interval = setInterval(() => {
            updateSlide((currentSlide + 1) % slidesData.length);
        }, 5000); // Auto-slide every 5 seconds

        return () => clearInterval(interval);
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
                                className="slide-rect"
                                style={{ borderImageSource: `url(${slide.rectImg})` }}
                            ></div>
                        </div>
                        <div className="slide-content">
                            <h1 className="slide-content-text">
                                <p>{slide.headlineFirstLine}</p>
                                <p>{slide.headlineSecondLine}</p>
                            </h1>
                            <Link to={"/about"} className="slide-content-cta">
                                <Buttoncom btn="Know More" />
                            </Link>
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
                {slidesData.map((_, index) => (
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
