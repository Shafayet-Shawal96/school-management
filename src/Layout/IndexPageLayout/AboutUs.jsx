import React from "react";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <div className="about-us pt-130 pb-130">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="about-content">
              <div className="section-title section-title-green mb-30">
                <h2>
                  About <span>Us</span>
                </h2>
                <p>
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip{" "}
                </p>
              </div>
              <p>
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim ven iam, quis nostrud exer citation ullamco
                laboris nisi ut perspiciatis unde omnis iste natus error sit
                voluptate.
              </p>
              <div className="about-btn mt-45">
                <Link className="default-btn" to="about-us.html">
                  ABOUT US
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="about-img default-overlay">
              <img src="/assets/img/banner/banner-1.jpg" alt="" />
              <Link
                className="video-btn video-popup"
                to="https://www.youtube.com/watch?v=sv5hK4crIRc"
              >
                <img
                  className="animated"
                  src="/assets/img/icon-img/video.png"
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
