import React, { useState, useEffect } from "react";
import "../../Assets/Css/HomeCarousel.css"
const slidesData = [
    {
        headlineFirstLine: "BelPatra",
        headlineSecondLine: "Change1",
        sublineFirstLine: "Nihil sub sole",
        sublineSecondLine: "novum",
        bgImg: require('../../Assets/Images/friendly-atmosphere-group-young-freelancers-office-have-conversation-smiling_146671-13630.jpg'),
        rectImg: require('../../Assets/Images/jpeg_enhanced_enhanced.jpg')
    },
    {
        headlineFirstLine: "BlePatra2",
        headlineSecondLine: "Change2",
        sublineFirstLine: "Il n'y a rien de neuf sous",
        sublineSecondLine: "le soleil",
        bgImg: require('../../Assets/Images/contactus.jpg'),
        rectImg: require('../../Assets/Images/img2.jpg')
    },
    {
        headlineFirstLine: "BlePatra3",
        headlineSecondLine: "Change3",
        sublineFirstLine: "Τίποτα καινούργιο κάτω από",
        sublineSecondLine: "τον ήλιο",
        bgImg: require('../../Assets/Images/img3.jpg'),
        rectImg: require('../../Assets/Images/home-version-three-revenue-traffiic-icon1.png')
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

        return () => {
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
                            <p>{slide.headlineSecondLine}</p>
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
                            <a className="slide-content-cta" href="tel:7048313227">Contact Us</a>
                        </div>
                        <h2 className="slide-side-text">
                            <span>{slide.sublineFirstLine} / </span>
                            <span>{slide.sublineSecondLine}</span>
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
                        {slide.headlineFirstLine} {slide.headlineSecondLine}
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
