import React, { Fragment } from "react";
import BrandCarouselComponent from "../Components/GlobalComponents/BrandCarouselComponent";
import BreadcrumbArea from "../Layout/BreadcrumbArea";
import FooterLayout from "../Layout/FooterLayout";
import HeaderLayout from "../Layout/HeaderLayout";

const breadcrumbObj = {
  title: "Course Grid",
  subtitle: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore .`,
  pageName: "Course Grid",
  overlayClass: "breadcrumb-overly-2",
  breadcrumbImage: {
    backgroundImage: `url(./assets/img/bg/breadcrumb-bg-2.jpg)`,
  },
};

function CoursePage() {
  return (
    <Fragment>
      <HeaderLayout />
      <BreadcrumbArea breadcrumbObj={breadcrumbObj} />
      <div class="course-area bg-img pt-130">
        <div class="container">
          <div class="section-title mb-75 course-mrg-small">
            <h2>
              {" "}
              <span>Undergraduate</span> Courses
            </h2>
            <p>
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim <br />
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip{" "}
            </p>
          </div>
          <div class="course-slider-active-3">
            <div class="single-course">
              <div class="course-img">
                <a href="course-details.html">
                  <img
                    class="animated"
                    src="assets/img/course/course-1.jpg"
                    alt=""
                  />
                </a>
                <span>Addmission Going On</span>
              </div>
              <div class="course-content">
                <h4>
                  <a href="course-details.html">Apparel Manufacturing</a>
                </h4>
                <p>
                  magna aliqua. Ut enim ad minim veniam, nisi ut aliquiptempor
                  incid.
                </p>
              </div>
              <div class="course-position-content">
                <div class="credit-duration-wrap">
                  <div class="sin-credit-duration">
                    <i class="fa fa-diamond"></i>
                    <span>Credits : 125</span>
                  </div>
                  <div class="sin-credit-duration">
                    <i class="fa fa-clock-o"></i>
                    <span>Duration : 4yrs</span>
                  </div>
                </div>
                <div class="course-btn">
                  <a class="default-btn" href="/">
                    APPLY NOW
                  </a>
                </div>
              </div>
            </div>
            <div class="single-course">
              <div class="course-img">
                <a href="course-details.html">
                  <img
                    class="animated"
                    src="assets/img/course/course-2.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div class="course-content">
                <h4>
                  <a href="course-details.html">Grphic Design & Multimedia</a>
                </h4>
                <p>
                  magna aliqua. Ut enim ad minim veniam, nisi ut aliquiptempor
                  incid.
                </p>
              </div>
              <div class="course-position-content">
                <div class="credit-duration-wrap">
                  <div class="sin-credit-duration">
                    <i class="fa fa-diamond"></i>
                    <span>Credits : 125</span>
                  </div>
                  <div class="sin-credit-duration">
                    <i class="fa fa-clock-o"></i>
                    <span>Duration : 4yrs</span>
                  </div>
                </div>
                <div class="course-btn">
                  <a class="default-btn" href="/">
                    APPLY NOW
                  </a>
                </div>
              </div>
            </div>
            <div class="single-course">
              <div class="course-img">
                <a href="course-details.html">
                  <img
                    class="animated"
                    src="assets/img/course/course-3.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div class="course-content">
                <h4>
                  <a href="course-details.html">Computer Engineering</a>
                </h4>
                <p>
                  magna aliqua. Ut enim ad minim veniam, nisi ut aliquiptempor
                  incid.
                </p>
              </div>
              <div class="course-position-content">
                <div class="credit-duration-wrap">
                  <div class="sin-credit-duration">
                    <i class="fa fa-diamond"></i>
                    <span>Credits : 125</span>
                  </div>
                  <div class="sin-credit-duration">
                    <i class="fa fa-clock-o"></i>
                    <span>Duration : 4yrs</span>
                  </div>
                </div>
                <div class="course-btn">
                  <a class="default-btn" href="/">
                    APPLY NOW
                  </a>
                </div>
              </div>
            </div>
            <div class="single-course">
              <div class="course-img">
                <a href="course-details.html">
                  <img
                    class="animated"
                    src="assets/img/course/course-4.jpg"
                    alt=""
                  />
                </a>
                <span>Post Graduation Course</span>
              </div>
              <div class="course-content">
                <h4>
                  <a href="course-details.html">Fashion & Technology</a>
                </h4>
                <p>
                  magna aliqua. Ut enim ad minim veniam, nisi ut aliquiptempor
                  incid.
                </p>
              </div>
              <div class="course-position-content">
                <div class="credit-duration-wrap">
                  <div class="sin-credit-duration">
                    <i class="fa fa-diamond"></i>
                    <span>Credits : 125</span>
                  </div>
                  <div class="sin-credit-duration">
                    <i class="fa fa-clock-o"></i>
                    <span>Duration : 4yrs</span>
                  </div>
                </div>
                <div class="course-btn">
                  <a class="default-btn" href="/">
                    APPLY NOW
                  </a>
                </div>
              </div>
            </div>
            <div class="single-course">
              <div class="course-img">
                <a href="course-details.html">
                  <img
                    class="animated"
                    src="assets/img/course/course-2.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div class="course-content">
                <h4>
                  <a href="course-details.html">Apparel Manufacturing</a>
                </h4>
                <p>
                  magna aliqua. Ut enim ad minim veniam, nisi ut aliquiptempor
                  incid.
                </p>
              </div>
              <div class="course-position-content">
                <div class="credit-duration-wrap">
                  <div class="sin-credit-duration">
                    <i class="fa fa-diamond"></i>
                    <span>Credits : 125</span>
                  </div>
                  <div class="sin-credit-duration">
                    <i class="fa fa-clock-o"></i>
                    <span>Duration : 4yrs</span>
                  </div>
                </div>
                <div class="course-btn">
                  <a class="default-btn" href="/">
                    APPLY NOW
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="course-area bg-img">
        <div class="container">
          <div class="section-title mb-75 course-mrg-small">
            <h2>
              {" "}
              Graduate <span>Courses</span>
            </h2>
            <p>
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim <br />
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip{" "}
            </p>
          </div>
          <div class="course-slider-active-4">
            <div class="single-course">
              <div class="course-img">
                <a href="course-details.html">
                  <img
                    class="animated"
                    src="assets/img/course/course-1.jpg"
                    alt=""
                  />
                </a>
                <span>Addmission Going On</span>
              </div>
              <div class="course-content">
                <h4>
                  <a href="course-details.html">Apparel Manufacturing</a>
                </h4>
                <p>
                  magna aliqua. Ut enim ad minim veniam, nisi ut aliquiptempor
                  incid.
                </p>
              </div>
              <div class="course-position-content">
                <div class="credit-duration-wrap">
                  <div class="sin-credit-duration">
                    <i class="fa fa-diamond"></i>
                    <span>Credits : 125</span>
                  </div>
                  <div class="sin-credit-duration">
                    <i class="fa fa-clock-o"></i>
                    <span>Duration : 4yrs</span>
                  </div>
                </div>
                <div class="course-btn">
                  <a class="default-btn" href="/">
                    APPLY NOW
                  </a>
                </div>
              </div>
            </div>
            <div class="single-course">
              <div class="course-img">
                <a href="course-details.html">
                  <img
                    class="animated"
                    src="assets/img/course/course-2.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div class="course-content">
                <h4>
                  <a href="course-details.html">Grphic Design & Multimedia</a>
                </h4>
                <p>
                  magna aliqua. Ut enim ad minim veniam, nisi ut aliquiptempor
                  incid.
                </p>
              </div>
              <div class="course-position-content">
                <div class="credit-duration-wrap">
                  <div class="sin-credit-duration">
                    <i class="fa fa-diamond"></i>
                    <span>Credits : 125</span>
                  </div>
                  <div class="sin-credit-duration">
                    <i class="fa fa-clock-o"></i>
                    <span>Duration : 4yrs</span>
                  </div>
                </div>
                <div class="course-btn">
                  <a class="default-btn" href="/">
                    APPLY NOW
                  </a>
                </div>
              </div>
            </div>
            <div class="single-course">
              <div class="course-img">
                <a href="course-details.html">
                  <img
                    class="animated"
                    src="assets/img/course/course-3.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div class="course-content">
                <h4>
                  <a href="course-details.html">Computer Engineering</a>
                </h4>
                <p>
                  magna aliqua. Ut enim ad minim veniam, nisi ut aliquiptempor
                  incid.
                </p>
              </div>
              <div class="course-position-content">
                <div class="credit-duration-wrap">
                  <div class="sin-credit-duration">
                    <i class="fa fa-diamond"></i>
                    <span>Credits : 125</span>
                  </div>
                  <div class="sin-credit-duration">
                    <i class="fa fa-clock-o"></i>
                    <span>Duration : 4yrs</span>
                  </div>
                </div>
                <div class="course-btn">
                  <a class="default-btn" href="/">
                    APPLY NOW
                  </a>
                </div>
              </div>
            </div>
            <div class="single-course">
              <div class="course-img">
                <a href="course-details.html">
                  <img
                    class="animated"
                    src="assets/img/course/course-4.jpg"
                    alt=""
                  />
                </a>
                <span>Post Graduation Course</span>
              </div>
              <div class="course-content">
                <h4>
                  <a href="course-details.html">Fashion & Technology</a>
                </h4>
                <p>
                  magna aliqua. Ut enim ad minim veniam, nisi ut aliquiptempor
                  incid.
                </p>
              </div>
              <div class="course-position-content">
                <div class="credit-duration-wrap">
                  <div class="sin-credit-duration">
                    <i class="fa fa-diamond"></i>
                    <span>Credits : 125</span>
                  </div>
                  <div class="sin-credit-duration">
                    <i class="fa fa-clock-o"></i>
                    <span>Duration : 4yrs</span>
                  </div>
                </div>
                <div class="course-btn">
                  <a class="default-btn" href="/">
                    APPLY NOW
                  </a>
                </div>
              </div>
            </div>
            <div class="single-course">
              <div class="course-img">
                <a href="course-details.html">
                  <img
                    class="animated"
                    src="assets/img/course/course-2.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div class="course-content">
                <h4>
                  <a href="course-details.html">Apparel Manufacturing</a>
                </h4>
                <p>
                  magna aliqua. Ut enim ad minim veniam, nisi ut aliquiptempor
                  incid.
                </p>
              </div>
              <div class="course-position-content">
                <div class="credit-duration-wrap">
                  <div class="sin-credit-duration">
                    <i class="fa fa-diamond"></i>
                    <span>Credits : 125</span>
                  </div>
                  <div class="sin-credit-duration">
                    <i class="fa fa-clock-o"></i>
                    <span>Duration : 4yrs</span>
                  </div>
                </div>
                <div class="course-btn">
                  <a class="default-btn" href="/">
                    APPLY NOW
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="course-area bg-img">
        <div class="container">
          <div class="section-title mb-75 course-mrg-small">
            <h2>
              {" "}
              <span>Diploma</span> Courses
            </h2>
            <p>
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim <br />
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip{" "}
            </p>
          </div>
          <div class="course-slider-active-5">
            <div class="single-course">
              <div class="course-img">
                <a href="course-details.html">
                  <img
                    class="animated"
                    src="assets/img/course/course-1.jpg"
                    alt=""
                  />
                </a>
                <span>Addmission Going On</span>
              </div>
              <div class="course-content">
                <h4>
                  <a href="course-details.html">Apparel Manufacturing</a>
                </h4>
                <p>
                  magna aliqua. Ut enim ad minim veniam, nisi ut aliquiptempor
                  incid.
                </p>
              </div>
              <div class="course-position-content">
                <div class="credit-duration-wrap">
                  <div class="sin-credit-duration">
                    <i class="fa fa-diamond"></i>
                    <span>Credits : 125</span>
                  </div>
                  <div class="sin-credit-duration">
                    <i class="fa fa-clock-o"></i>
                    <span>Duration : 4yrs</span>
                  </div>
                </div>
                <div class="course-btn">
                  <a class="default-btn" href="/">
                    APPLY NOW
                  </a>
                </div>
              </div>
            </div>
            <div class="single-course">
              <div class="course-img">
                <a href="course-details.html">
                  <img
                    class="animated"
                    src="assets/img/course/course-2.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div class="course-content">
                <h4>
                  <a href="course-details.html">Grphic Design & Multimedia</a>
                </h4>
                <p>
                  magna aliqua. Ut enim ad minim veniam, nisi ut aliquiptempor
                  incid.
                </p>
              </div>
              <div class="course-position-content">
                <div class="credit-duration-wrap">
                  <div class="sin-credit-duration">
                    <i class="fa fa-diamond"></i>
                    <span>Credits : 125</span>
                  </div>
                  <div class="sin-credit-duration">
                    <i class="fa fa-clock-o"></i>
                    <span>Duration : 4yrs</span>
                  </div>
                </div>
                <div class="course-btn">
                  <a class="default-btn" href="/">
                    APPLY NOW
                  </a>
                </div>
              </div>
            </div>
            <div class="single-course">
              <div class="course-img">
                <a href="course-details.html">
                  <img
                    class="animated"
                    src="assets/img/course/course-3.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div class="course-content">
                <h4>
                  <a href="course-details.html">Computer Engineering</a>
                </h4>
                <p>
                  magna aliqua. Ut enim ad minim veniam, nisi ut aliquiptempor
                  incid.
                </p>
              </div>
              <div class="course-position-content">
                <div class="credit-duration-wrap">
                  <div class="sin-credit-duration">
                    <i class="fa fa-diamond"></i>
                    <span>Credits : 125</span>
                  </div>
                  <div class="sin-credit-duration">
                    <i class="fa fa-clock-o"></i>
                    <span>Duration : 4yrs</span>
                  </div>
                </div>
                <div class="course-btn">
                  <a class="default-btn" href="/">
                    APPLY NOW
                  </a>
                </div>
              </div>
            </div>
            <div class="single-course">
              <div class="course-img">
                <a href="course-details.html">
                  <img
                    class="animated"
                    src="assets/img/course/course-4.jpg"
                    alt=""
                  />
                </a>
                <span>Post Graduation Course</span>
              </div>
              <div class="course-content">
                <h4>
                  <a href="course-details.html">Fashion & Technology</a>
                </h4>
                <p>
                  magna aliqua. Ut enim ad minim veniam, nisi ut aliquiptempor
                  incid.
                </p>
              </div>
              <div class="course-position-content">
                <div class="credit-duration-wrap">
                  <div class="sin-credit-duration">
                    <i class="fa fa-diamond"></i>
                    <span>Credits : 125</span>
                  </div>
                  <div class="sin-credit-duration">
                    <i class="fa fa-clock-o"></i>
                    <span>Duration : 4yrs</span>
                  </div>
                </div>
                <div class="course-btn">
                  <a class="default-btn" href="/">
                    APPLY NOW
                  </a>
                </div>
              </div>
            </div>
            <div class="single-course">
              <div class="course-img">
                <a href="course-details.html">
                  <img
                    class="animated"
                    src="assets/img/course/course-2.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div class="course-content">
                <h4>
                  <a href="course-details.html">Apparel Manufacturing</a>
                </h4>
                <p>
                  magna aliqua. Ut enim ad minim veniam, nisi ut aliquiptempor
                  incid.
                </p>
              </div>
              <div class="course-position-content">
                <div class="credit-duration-wrap">
                  <div class="sin-credit-duration">
                    <i class="fa fa-diamond"></i>
                    <span>Credits : 125</span>
                  </div>
                  <div class="sin-credit-duration">
                    <i class="fa fa-clock-o"></i>
                    <span>Duration : 4yrs</span>
                  </div>
                </div>
                <div class="course-btn">
                  <a class="default-btn" href="/">
                    APPLY NOW
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BrandCarouselComponent />
      <FooterLayout />
    </Fragment>
  );
}

export default CoursePage;
