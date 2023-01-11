import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";

const slider1Image = {
  backgroundImage: `url(./assets/img/slider/slider-1.jpg)`,
};
const slider2Image = {
  backgroundImage: `url(./assets/img/slider/slider-1.jpg)`,
};

function SliderAreaOwl() {
  return (
    <OwlCarousel
      className="slider-active owl-carousel"
      loop={true}
      nav={false}
      autoplay={false}
      autoplayTimeout={5000}
      animateIn={"fadeIn"}
      animateOut={"fadeOut"}
      items={1}
      dots={false}
      responsive={{
        0: {
          items: 1,
        },
        768: {
          items: 1,
        },
        1000: {
          items: 1,
        },
      }}
    >
      <div
        className="single-slider slider-height-1 bg-img"
        style={slider1Image}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-7 col-12 col-sm-12">
              <div className="slider-content slider-animated-1 pt-230">
                <h1 className="animated">MakeYour Own World</h1>
                <p className="animated">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation{" "}
                </p>
                <div className="slider-btn">
                  <Link
                    className="animated default-btn btn-green-color"
                    to="about-us.html"
                  >
                    ABOUT US
                  </Link>
                  <Link
                    className="animated default-btn btn-white-color"
                    to="contact.html"
                  >
                    CONTACT US
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="slider-single-img slider-animated-1">
            <img
              className="animated"
              src="assets/img/slider/single-slide-1.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div
        className="single-slider slider-height-1 bg-img"
        style={slider2Image}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-7 col-12 col-sm-12">
              <div className="slider-content slider-animated-1 pt-230">
                <h1 className="animated">MakeYour Own World</h1>
                <p className="animated">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation{" "}
                </p>
                <div className="slider-btn">
                  <Link
                    className="animated default-btn btn-green-color"
                    to="about-us.html"
                  >
                    ABOUT US
                  </Link>
                  <Link
                    className="animated default-btn btn-white-color"
                    to="contact.html"
                  >
                    CONTACT US
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="slider-single-img slider-animated-1">
            <img
              className="animated"
              src="assets/img/slider/single-slide-1.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </OwlCarousel>
  );
}

export default SliderAreaOwl;
