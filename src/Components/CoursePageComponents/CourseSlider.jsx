import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import PrevArrowComponent from "../GlobalComponents/PrevArrowComponent";
import NextArrowComponent from "../GlobalComponents/NextArrowComponent";
import { Link } from "react-router-dom";

function CourseSlider() {
  const settings = {
    infinite: true,
    slidesToShow: 4,
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
    <Slider {...settings} className="course-slider-active-3">
      <div className="single-course">
        <div className="course-img">
          <Link to="course-details.html">
            <img
              className="animated"
              src="assets/img/course/course-1.jpg"
              alt=""
            />
          </Link>
          <span>Addmission Going On</span>
        </div>
        <div className="course-content">
          <h4>
            <Link to="course-details.html">Apparel Manufacturing</Link>
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
            <Link className="default-btn" to="#">
              APPLY NOW
            </Link>
          </div>
        </div>
      </div>
      <div className="single-course">
        <div className="course-img">
          <Link to="course-details.html">
            <img
              className="animated"
              src="assets/img/course/course-2.jpg"
              alt=""
            />
          </Link>
        </div>
        <div className="course-content">
          <h4>
            <Link to="course-details.html">Grphic Design & Multimedia</Link>
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
            <Link className="default-btn" to="#">
              APPLY NOW
            </Link>
          </div>
        </div>
      </div>
      <div className="single-course">
        <div className="course-img">
          <Link to="course-details.html">
            <img
              className="animated"
              src="assets/img/course/course-3.jpg"
              alt=""
            />
          </Link>
        </div>
        <div className="course-content">
          <h4>
            <Link to="course-details.html">Computer Engineering</Link>
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
            <Link className="default-btn" to="#">
              APPLY NOW
            </Link>
          </div>
        </div>
      </div>
      <div className="single-course">
        <div className="course-img">
          <Link to="course-details.html">
            <img
              className="animated"
              src="assets/img/course/course-4.jpg"
              alt=""
            />
          </Link>
          <span>Post Graduation Course</span>
        </div>
        <div className="course-content">
          <h4>
            <Link to="course-details.html">Fashion & Technology</Link>
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
            <Link className="default-btn" to="#">
              APPLY NOW
            </Link>
          </div>
        </div>
      </div>
      <div className="single-course">
        <div className="course-img">
          <Link to="course-details.html">
            <img
              className="animated"
              src="assets/img/course/course-2.jpg"
              alt=""
            />
          </Link>
        </div>
        <div className="course-content">
          <h4>
            <Link to="course-details.html">Apparel Manufacturing</Link>
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
            <Link className="default-btn" to="#">
              APPLY NOW
            </Link>
          </div>
        </div>
      </div>
    </Slider>
  );
}

export default CourseSlider;
