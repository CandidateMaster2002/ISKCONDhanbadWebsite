import { useEffect } from "react";
import { Carousel, initMDB } from "mdb-ui-kit";
import { useState } from "react";
import Jbs from "../assets/jbs.jpg";
import VoiceAltar from "../assets/voice-altar2.png"
import GaurNitai from "../assets/gaur-nitai2.png"
import "../Styles/TopmostBannerCarousel.css";

const TopmostBannerCarousel = () => {
  const [showGreenDiv, setShowGreenDiv] = useState(true);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    // Initialize MDB Carousel after the component mounts
    initMDB({ Carousel });

    // Set interval to change slide every 3 seconds
    const intervalId = setInterval(() => {
      setShowGreenDiv(false);
      setActiveSlide((prevSlide) => (prevSlide + 1) % 3);
    }, 3000);

    return () => {
      // Clear the interval when the component is unmounted
      clearInterval(intervalId);
    };
  }, []);

  const handlePrevClick = () => {
    setShowGreenDiv(false);
    setActiveSlide((prevSlide) => (prevSlide - 1 + 3) % 3);
  };

  const handleNextClick = () => {
    setShowGreenDiv(false);
    setActiveSlide((prevSlide) => (prevSlide + 1) % 3);
  };

  const carouselImages = [
    Jbs,VoiceAltar,GaurNitai
  ];

  return (
    <div
      id="carouselMaterialStyle"
      className="carousel slide carousel-fade"
      data-mdb-ride="carousel"
      data-mdb-carousel-init
    >
      {/* Indicators */}
      <div className="carousel-indicators">
        {Array.from({ length: 3 }, (_, index) => (
          <button
            key={index}
            type="button"
            data-mdb-target="#carouselMaterialStyle"
            data-mdb-slide-to={index}
            className={activeSlide === index ? "active" : ""}
            aria-current={activeSlide === index ? "true" : undefined}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Inner */}
      <div className="carousel-inner rounded-5 shadow-4-strong">
        {/* Single item */}
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`carousel-item ${activeSlide === index ? "active" : ""}`}
          >
            <div className="img-container">
              <img
                src={image}
                className="d-block w-100 img-fluid carousel-image"
                alt={`Slide ${index + 1}`}
              />
            </div>
            {/* <div
              className={`carousel-caption d-none d-md-block ${
                showGreenDiv ? "bg-success" : ""
              }`}
            >
              <div>
                <h5>{title[index]}</h5>
                <p>{subtitle[index]}</p>
              </div>
            </div> */}
          </div>
        ))}
      </div>
      {/* Inner */}

      {/* Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-mdb-target="#carouselMaterialStyle"
        data-mdb-slide="prev"
        onClick={handlePrevClick}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden"></span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-mdb-target="#carouselMaterialStyle"
        data-mdb-slide="next"
        onClick={handleNextClick}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden"></span>
      </button>
    </div>
  );
};

export default TopmostBannerCarousel;
