import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import PrevArrowComponent from "../GlobalComponents/PrevArrowComponent";
import NextArrowComponent from "../GlobalComponents/NextArrowComponent";

function RelatedSliderComponent() {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <PrevArrowComponent />,
    nextArrow: <NextArrowComponent />,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings} className="related-slider-active">
      <div className="single-course">
        <div className="course-img">
          <a href="/">
            <img
              className="animated"
              src="assets/img/course/related-course-1.jpg"
              alt=""
            />
          </a>
        </div>
        <div className="course-content">
          <h4>
            <a href="/">Apparel Manufacturing</a>
          </h4>
          <p>
            magna aliqua. Ut enim ad minim veniam, nisi ut aliquiptempor incid.
          </p>
        </div>
        <div className="course-position-content">
          <div className="credit-duration-wrap">
            <div className="sin-credit-duration">
              <i className="fa fa-diamond"></i>
              <span>Credits : 125</span>
            </div>
            <div className="sin-credit-duration">
              <i className="fa fa-clock-o"></i>
              <span>Duration : 4yrs</span>
            </div>
          </div>
          <div className="course-btn">
            <a className="default-btn" href="/">
              APPLY NOW
            </a>
          </div>
        </div>
      </div>
      <div className="single-course">
        <div className="course-img">
          <a href="/">
            <img
              className="animated"
              src="assets/img/course/related-course-2.jpg"
              alt=""
            />
          </a>
        </div>
        <div className="course-content">
          <h4>
            <a href="/">Grphic Design & Multimedia</a>
          </h4>
          <p>
            magna aliqua. Ut enim ad minim veniam, nisi ut aliquiptempor incid.
          </p>
        </div>
        <div className="course-position-content">
          <div className="credit-duration-wrap">
            <div className="sin-credit-duration">
              <i className="fa fa-diamond"></i>
              <span>Credits : 125</span>
            </div>
            <div className="sin-credit-duration">
              <i className="fa fa-clock-o"></i>
              <span>Duration : 4yrs</span>
            </div>
          </div>
          <div className="course-btn">
            <a className="default-btn" href="/">
              APPLY NOW
            </a>
          </div>
        </div>
      </div>
      <div className="single-course">
        <div className="course-img">
          <a href="/">
            <img
              className="animated"
              src="assets/img/course/related-course-3.jpg"
              alt=""
            />
          </a>
        </div>
        <div className="course-content">
          <h4>
            <a href="/">Fashion & Technology</a>
          </h4>
          <p>
            magna aliqua. Ut enim ad minim veniam, nisi ut aliquiptempor incid.
          </p>
        </div>
        <div className="course-position-content">
          <div className="credit-duration-wrap">
            <div className="sin-credit-duration">
              <i className="fa fa-diamond"></i>
              <span>Credits : 125</span>
            </div>
            <div className="sin-credit-duration">
              <i className="fa fa-clock-o"></i>
              <span>Duration : 4yrs</span>
            </div>
          </div>
          <div className="course-btn">
            <a className="default-btn" href="/">
              APPLY NOW
            </a>
          </div>
        </div>
      </div>
      <div className="single-course">
        <div className="course-img">
          <a href="/">
            <img
              className="animated"
              src="assets/img/course/related-course-2.jpg"
              alt=""
            />
          </a>
        </div>
        <div className="course-content">
          <h4>
            <a href="/">Fashion & Technology</a>
          </h4>
          <p>
            magna aliqua. Ut enim ad minim veniam, nisi ut aliquiptempor incid.
          </p>
        </div>
        <div className="course-position-content">
          <div className="credit-duration-wrap">
            <div className="sin-credit-duration">
              <i className="fa fa-diamond"></i>
              <span>Credits : 125</span>
            </div>
            <div className="sin-credit-duration">
              <i className="fa fa-clock-o"></i>
              <span>Duration : 4yrs</span>
            </div>
          </div>
          <div className="course-btn">
            <a className="default-btn" href="/">
              APPLY NOW
            </a>
          </div>
        </div>
      </div>
    </Slider>
  );
}

export default RelatedSliderComponent;
