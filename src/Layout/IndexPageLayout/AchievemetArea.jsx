import React from "react";
import TestimonialSliderComponent from "../../Components/GlobalComponents/TestimonialSliderComponent";

function AchievemetArea() {
  return (
    <div className="achievement-area pt-130 pb-115">
      <div className="container">
        <div className="section-title mb-75">
          <h2>
            Our <span>Achievement</span>
          </h2>
          <p>
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim{" "}
            <br />
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip{" "}
          </p>
        </div>
        <div className="row">
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
            <div className="single-count mb-30 count-one">
              <div className="count-img">
                <img src="assets/img/icon-img/achieve-1.png" alt="" />
              </div>
              <div className="count-content">
                <h2 className="count">890</h2>
                <span>STUDENTS</span>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
            <div className="single-count mb-30 count-two">
              <div className="count-img">
                <img src="assets/img/icon-img/achieve-2.png" alt="" />
              </div>
              <div className="count-content">
                <h2 className="count">670</h2>
                <span>GRADUATE</span>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-3 col-md-6 col-sm-6">
            <div className="single-count mb-30 count-three">
              <div className="count-img">
                <img src="assets/img/icon-img/achieve-3.png" alt="" />
              </div>
              <div className="count-content">
                <h2 className="count">160</h2>
                <span>AWARD WINNING</span>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-lg-3 col-md-6 col-sm-6">
            <div className="single-count mb-30 count-four">
              <div className="count-img">
                <img src="assets/img/icon-img/achieve-4.png" alt="" />
              </div>
              <div className="count-content">
                <h2 className="count">200</h2>
                <span>FACULTIES</span>
              </div>
            </div>
          </div>
        </div>
        <TestimonialSliderComponent />
        <div className="testimonial-text-img">
          <img alt="" src="assets/img/icon-img/testi-text.png" />
        </div>
      </div>
    </div>
  );
}

export default AchievemetArea;
