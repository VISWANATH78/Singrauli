import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import im1 from "../images/1.jfif";
import im2 from "../images/2.jfif";
import im3 from "../images/3.jfif";
import im4 from "../images/4.jfif";

const AboutUs = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  // Define your images
  const images = [im1, im2, im3, im4]; // Add more image URLs as needed

  return (
    <section className="about-us">
      <div className="container">
        <div className="about-us-content">
          <h2 className="section-title">About Us</h2>
          <p className="section-description">
            Singrauli is the 50th district in the state of Madhya Pradesh, which was formed on 24th May 2008 by the division of Sidhi district. It covers a region comprising the eastern part of the Sidhi district in Madhya Pradesh and the adjoining region in Sonebhadra district in Uttar Pradesh. Historically, Singrauli belonged to the princely state of Rewa, a part of the Baghelkhand region. It is rich in natural and mineral resources, covered with dense forests and inhospitable terrain in ancient times. Due to the abundance of mineral resources and power plants, this region is also called Urjanchal.
          </p>
        </div>
        <div className="carousel-container">
          <Slider {...sliderSettings}>
            {images.map((image, index) => (
              <div key={index} className="carousel-slide">
                <div className="image-container">
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    style={{ width: "275px", height: "183px" }}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
