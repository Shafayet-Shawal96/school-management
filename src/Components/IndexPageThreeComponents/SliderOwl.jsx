import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const slider1Image = {
  backgroundImage: `url(./assets/img/slider/slider-bg.jpg)`,
};
const slider2Image = {
  backgroundImage: `url(./assets/img/slider/slider-5.jpg)`,
};

function SliderOwl() {
  return (
    <OwlCarousel
      className="slider-active-2 owl-carousel nav-style-2"
      loop={true}
      nav={true}
      autoplay={false}
      autoplayTimeout={5000}
      animateIn={"fadeIn"}
      animateOut={"fadeOut"}
      items={1}
      dots={false}
      navText={[
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>',
      ]}
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
        className="single-slider slider-height-3 bg-img pt-170"
        style={slider1Image}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="slider-single-img2 slider-animated-2">
                <img
                  className="animated"
                  src="assets/img/slider/single-slide-2.png"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12 col-sm-6">
              <div className="slider-content-3 slider-animated-2 pt-115 ml-55">
                <h1 className="animated">
                  <span className="text-blue">S</span>hop
                  <span className="text-pink">P</span>ing Time
                </h1>
                <p className="animated">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do tempor eiusmod incididunt ut labore et dolore magna aliqua.{" "}
                </p>
                <div className="slider-btn">
                  <a
                    className="animated default-btn btn-green-color"
                    href="cart.html"
                  >
                    ADD TO CART
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="single-slider slider-height-3 bg-img pt-170"
        style={slider2Image}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="slider-single-img2 slider-animated-2">
                <img
                  className="animated"
                  src="assets/img/slider/single-slide-2.png"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12 col-sm-6">
              <div className="slider-content-3 slider-animated-2 pt-115 ml-55">
                <h1 className="animated">
                  <span className="text-blue">S</span>hop
                  <span className="text-pink">P</span>ing Time
                </h1>
                <p className="animated">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do tempor eiusmod incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="slider-btn">
                  <a
                    className="animated default-btn btn-green-color"
                    href="cart.html"
                  >
                    ADD TO CART
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </OwlCarousel>
  );
}

export default SliderOwl;
