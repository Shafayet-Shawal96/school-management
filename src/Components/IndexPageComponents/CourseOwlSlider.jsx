import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function CourseOwlSlider() {
  return (
    <OwlCarousel
      className="course-slider-active nav-style-1 owl-carousel"
      loop
      margin={30}
      nav={true}
      autoplay={false}
      autoplayTimeout={5000}
      animateIn={"fadeIn"}
      animateOut={"fadeOut"}
      items={4}
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
          items: 2,
        },
        992: {
          items: 3,
        },
        1000: {
          items: 4,
        },
      }}
    >
      <div className="single-course">
        <div className="course-img">
          <a href="course-details.html">
            <img
              className="animated"
              src="assets/img/course/course-1.jpg"
              alt=""
            />
          </a>
          <span>Addmission Going On</span>
        </div>
        <div className="course-content">
          <h4>
            <a href="course-details.html">Apparel Manufacturing</a>
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
          <a href="course-details.html">
            <img
              className="animated"
              src="assets/img/course/course-2.jpg"
              alt=""
            />
          </a>
        </div>
        <div className="course-content">
          <h4>
            <a href="course-details.html">Grphic Design & Multimedia</a>
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
          <a href="course-details.html">
            <img
              className="animated"
              src="assets/img/course/course-3.jpg"
              alt=""
            />
          </a>
        </div>
        <div className="course-content">
          <h4>
            <a href="course-details.html">Computer Engineering</a>
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
          <a href="course-details.html">
            <img
              className="animated"
              src="assets/img/course/course-4.jpg"
              alt=""
            />
          </a>
          <span>Post Graduation Course</span>
        </div>
        <div className="course-content">
          <h4>
            <a href="course-details.html">Fashion & Technology</a>
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
          <a href="course-details.html">
            <img
              className="animated"
              src="assets/img/course/course-2.jpg"
              alt=""
            />
          </a>
        </div>
        <div className="course-content">
          <h4>
            <a href="course-details.html">Apparel Manufacturing</a>
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
    </OwlCarousel>
  );
}

export default CourseOwlSlider;
