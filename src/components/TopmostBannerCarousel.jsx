import { useEffect } from "react";
import { Carousel, initMDB } from "mdb-ui-kit";
import { useState } from "react";
import Jbs from "../assets/jbs.jpg";
import VoiceAltar from "../assets/voice-altar2.png";
import GaurNitai from "../assets/gaur-nitai2.png";
import "../Styles/TopmostBannerCarousel.css";

const TopmostBannerCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    initMDB({ Carousel });

    const intervalId = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % 3);
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const handlePrevClick = () => {
    setActiveSlide((prevSlide) => (prevSlide - 1 + 3) % 3);
  };

  const handleNextClick = () => {
    setActiveSlide((prevSlide) => (prevSlide + 1) % 3);
  };

  const carouselImages = [Jbs, VoiceAltar, GaurNitai];

  return (
    <div
      id="carouselMaterialStyle"
      className="carousel slide carousel-fade"
      data-mdb-ride="carousel"
      data-mdb-carousel-init
    >
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

      <div className="carousel-inner rounded-5 shadow-4-strong">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`carousel-item ${activeSlide === index ? "active" : ""}`}
          >
            <div className="img-container">
              <img
                src={image}
                className="d-block w-100 w-full h-full img-fluid carousel-image"
                alt={`Slide ${index + 1}`}
              />
            </div>
          </div>
        ))}
      </div>

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
