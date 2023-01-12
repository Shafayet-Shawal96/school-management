import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";

const slider1Image = {
  backgroundImage: `url(./assets/img/slider/slider-2.jpg)`,
};
const slider2Image = {
  backgroundImage: `url(./assets/img/slider/slider-3.jpg)`,
};
const slider3Image = {
  backgroundImage: `url(./assets/img/slider/slider-4.jpg)`,
};

function OwlSlider() {
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
        className="single-slider slider-height-2 bg-img align-items-center d-flex slider-overlay2-1 default-overlay"
        style={slider1Image}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-12 col-sm-12">
              <div className="slider-content slider-content-2 slider-animated-2 text-center">
                <h1 className="animated">Welcome to Glaxdu</h1>
                <p className="animated">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco{" "}
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
        </div>
      </div>
      <div
        className="single-slider slider-height-2 align-items-center d-flex bg-img slider-overlay2-2 default-overlay"
        style={slider2Image}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-12 col-sm-12">
              <div className="slider-content slider-content-2 slider-animated-2 text-center">
                <h1 className="animated">Welcome to Glaxdu</h1>
                <p className="animated">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
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
        </div>
      </div>
      <div
        className="single-slider slider-height-2 align-items-center d-flex bg-img slider-overlay2-3 default-overlay"
        style={slider3Image}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-12 col-sm-12">
              <div className="slider-content slider-content-2 slider-animated-2 text-center">
                <h1 className="animated">Welcome to Glaxdu</h1>
                <p className="animated">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco{" "}
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
        </div>
      </div>
    </OwlCarousel>
  );
}

export default OwlSlider;
