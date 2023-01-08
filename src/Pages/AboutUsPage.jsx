import React, { Fragment } from "react";
import BrandCarouselComponent from "../Components/BrandCarouselComponent";
import TestimonialSliderComponent from "../Components/TestimonialSliderComponent";
import FooterLayout from "../Layout/FooterLayout";
import HeaderLayout from "../Layout/HeaderLayout";

const breadcrumbImage = {
  backgroundImage: `url(./assets/img/bg/breadcrumb-bg.jpg)`,
};
const chooseAreaImage = {
  backgroundImage: `url(./assets/img/bg/bg-8.jpg)`,
};
const videoAreaImage = {
  backgroundImage: `url(./assets/img/banner/video.jpg)`,
};
const funFactAreaImage = {
  backgroundImage: `url(./assets/img/bg/bg-6.jpg)`,
};

function AboutUsPage() {
  return (
    <Fragment>
      <HeaderLayout />
      <div className="breadcrumb-area">
        <div
          className="breadcrumb-top default-overlay bg-img pt-100 pb-95"
          style={breadcrumbImage}
        >
          <div className="container">
            <h2>About Us</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore .
            </p>
          </div>
        </div>
        <div className="breadcrumb-bottom">
          <div className="container">
            <ul>
              <li>
                <a href="/">Home</a>{" "}
                <span>
                  <i className="fa fa-angle-double-right"></i> About Page
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="choose-area bg-img pt-90" style={chooseAreaImage}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="about-chose-us pt-120">
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="single-about-chose-us mb-95">
                      <div className="about-choose-img">
                        <img src="assets/img/icon-img/service-9.png" alt="" />
                      </div>
                      <div className="about-choose-content text-light-blue">
                        <h3>Scholarship Facility</h3>
                        <p>
                          magna aliqua. Ut enim ad minim veniam conse ctetur
                          adipisicing elit, sed do exercitation ullamco
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="single-about-chose-us mb-95 about-negative-mrg">
                      <div className="about-choose-img">
                        <img src="assets/img/icon-img/service-10.png" alt="" />
                      </div>
                      <div className="about-choose-content text-yellow">
                        <h3>Best Teacher </h3>
                        <p>
                          magna aliqua. Ut enim ad minim veniam conse ctetur
                          adipisicing elit, sed do exercitation ullamco
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="single-about-chose-us mb-95">
                      <div className="about-choose-img">
                        <img src="assets/img/icon-img/service-11.png" alt="" />
                      </div>
                      <div className="about-choose-content text-blue">
                        <h3>Library & Book Store</h3>
                        <p>
                          magna aliqua. Ut enim ad minim veniam conse ctetur
                          adipisicing elit, sed do exercitation ullamco
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="single-about-chose-us mb-95 about-negative-mrg">
                      <div className="about-choose-img">
                        <img src="assets/img/icon-img/service-12.png" alt="" />
                      </div>
                      <div className="about-choose-content text-green">
                        <h3>25 Years Of Experience</h3>
                        <p>
                          magna aliqua. Ut enim ad minim veniam conse ctetur
                          adipisicing elit, sed do exercitation ullamco
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="about-img">
                <img src="assets/img/banner/about.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="video-area bg-img pt-270 pb-270" style={videoAreaImage}>
        <div className="video-btn-2">
          <a
            className="video-popup"
            href="https://www.youtube.com/watch?v=sv5hK4crIRc"
          >
            <img
              className="animated"
              src="assets/img/icon-img/viddeo-btn.png"
              alt=""
            />
          </a>
        </div>
      </div>
      <div className="teacher-area pt-130 pb-100">
        <div className="container">
          <div className="section-title mb-75">
            <h2>
              Best <span>Teacher</span>
            </h2>
            <p>
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim <br />
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip{" "}
            </p>
          </div>
          <div className="custom-row">
            <div className="custom-col-5">
              <div className="single-teacher mb-30">
                <div className="teacher-img">
                  <img src="assets/img/teacher/teacher-1.jpg" alt="" />
                </div>
                <div className="teacher-content-visible">
                  <h4>Robi Khan</h4>
                  <h5>Lecturer</h5>
                </div>
                <div className="teacher-content-wrap">
                  <div className="teacher-content">
                    <h4>Fawd Khan</h4>
                    <h5>Lecturer</h5>
                    <p>Tempor incididunt magna aliqua.</p>
                    <div className="teacher-social">
                      <ul>
                        <li>
                          <a className="facebook" href="/">
                            <i className="fa fa-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a className="youtube-play" href="/">
                            <i className="fa fa-youtube-play"></i>
                          </a>
                        </li>
                        <li>
                          <a className="twitter" href="/">
                            <i className="fa fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a className="google-plus" href="/">
                            <i className="fa fa-google-plus"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="custom-col-5">
              <div className="single-teacher mb-30">
                <div className="teacher-img">
                  <img src="assets/img/teacher/teacher-2.jpg" alt="" />
                </div>
                <div className="teacher-content-visible">
                  <h4>Jui Khan</h4>
                  <h5>Lecturer</h5>
                </div>
                <div className="teacher-content-wrap">
                  <div className="teacher-content">
                    <h4>Fawd Khan</h4>
                    <h5>Lecturer</h5>
                    <p>Tempor incididunt magna aliqua.</p>
                    <div className="teacher-social">
                      <ul>
                        <li>
                          <a className="facebook" href="/">
                            <i className="fa fa-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a className="youtube-play" href="/">
                            <i className="fa fa-youtube-play"></i>
                          </a>
                        </li>
                        <li>
                          <a className="twitter" href="/">
                            <i className="fa fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a className="google-plus" href="/">
                            <i className="fa fa-google-plus"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="custom-col-5">
              <div className="single-teacher mb-30">
                <div className="teacher-img">
                  <img src="assets/img/teacher/teacher-3.jpg" alt="" />
                </div>
                <div className="teacher-content-visible">
                  <h4>Fawd Khan</h4>
                  <h5>Lecturer</h5>
                </div>
                <div className="teacher-content-wrap">
                  <div className="teacher-content">
                    <h4>Fawd Khan</h4>
                    <h5>Lecturer</h5>
                    <p>Tempor incididunt magna aliqua.</p>
                    <div className="teacher-social">
                      <ul>
                        <li>
                          <a className="facebook" href="/">
                            <i className="fa fa-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a className="youtube-play" href="/">
                            <i className="fa fa-youtube-play"></i>
                          </a>
                        </li>
                        <li>
                          <a className="twitter" href="/">
                            <i className="fa fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a className="google-plus" href="/">
                            <i className="fa fa-google-plus"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="custom-col-5">
              <div className="single-teacher mb-30">
                <div className="teacher-img">
                  <img src="assets/img/teacher/teacher-4.jpg" alt="" />
                </div>
                <div className="teacher-content-visible">
                  <h4>Fawd Khan</h4>
                  <h5>Lecturer</h5>
                </div>
                <div className="teacher-content-wrap">
                  <div className="teacher-content">
                    <h4>Fawd Khan</h4>
                    <h5>Lecturer</h5>
                    <p>Tempor incididunt magna aliqua.</p>
                    <div className="teacher-social">
                      <ul>
                        <li>
                          <a className="facebook" href="/">
                            <i className="fa fa-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a className="youtube-play" href="/">
                            <i className="fa fa-youtube-play"></i>
                          </a>
                        </li>
                        <li>
                          <a className="twitter" href="/">
                            <i className="fa fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a className="google-plus" href="/">
                            <i className="fa fa-google-plus"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="custom-col-5">
              <div className="single-teacher mb-30">
                <div className="teacher-img">
                  <img src="assets/img/teacher/teacher-5.jpg" alt="" />
                </div>
                <div className="teacher-content-visible">
                  <h4>Jui Khan</h4>
                  <h5>Lecturer</h5>
                </div>
                <div className="teacher-content-wrap">
                  <div className="teacher-content">
                    <h4>Fawd Khan</h4>
                    <h5>Lecturer</h5>
                    <p>Tempor incididunt magna aliqua.</p>
                    <div className="teacher-social">
                      <ul>
                        <li>
                          <a className="facebook" href="/">
                            <i className="fa fa-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a className="youtube-play" href="/">
                            <i className="fa fa-youtube-play"></i>
                          </a>
                        </li>
                        <li>
                          <a className="twitter" href="/">
                            <i className="fa fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a className="google-plus" href="/">
                            <i className="fa fa-google-plus"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="fun-fact-area bg-img pt-130 pb-100"
        style={funFactAreaImage}
      >
        <div className="container">
          <div className="section-title-3 section-shape-hm2-2 white-text text-center mb-100">
            <h2>
              <span>Fun</span> Fact
            </h2>
            <p>
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, <br /> quis nostrud exercitation ullamco laboris
              nisi ut aliquip{" "}
            </p>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div className="single-count mb-30 count-one count-white">
                <div className="count-img">
                  <img src="assets/img/icon-img/funfact-1.png" alt="" />
                </div>
                <div className="count-content">
                  <h2 className="count">160</h2>
                  <span>AWARD WINNING</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div className="single-count mb-30 count-two count-white">
                <div className="count-img">
                  <img src="assets/img/icon-img/funfact-2.png" alt="" />
                </div>
                <div className="count-content">
                  <h2 className="count">200</h2>
                  <span>GRADUATE</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-3 col-md-6 col-sm-6">
              <div className="single-count mb-30 count-three count-white">
                <div className="count-img">
                  <img src="assets/img/icon-img/funfact-1.png" alt="" />
                </div>
                <div className="count-content">
                  <h2 className="count">160</h2>
                  <span>AWARD WINNING</span>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-6 col-sm-6">
              <div className="single-count mb-30 count-four count-white">
                <div className="count-img">
                  <img src="assets/img/icon-img/funfact-2.png" alt="" />
                </div>
                <div className="count-content">
                  <h2 className="count">200</h2>
                  <span>FACULTIES</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="achievement-area pt-130 pb-115">
        <div className="container">
          <div className="section-title mb-75">
            <h2>
              What <span>People Say</span>
            </h2>
            <p>
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim <br />
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip{" "}
            </p>
          </div>
          <TestimonialSliderComponent />
          <div className="testimonial-text-img">
            <img alt="" src="assets/img/icon-img/testi-text.png" />
          </div>
        </div>
      </div>
      <BrandCarouselComponent />
      <FooterLayout />
    </Fragment>
  );
}

export default AboutUsPage;
