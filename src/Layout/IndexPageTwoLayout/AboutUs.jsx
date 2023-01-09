import React from "react";

function AboutUs() {
  return (
    <div className="about-us pt-130 pb-130">
      <div className="container">
        <div className="section-title-3 section-shape-hm2-1 text-center mb-100">
          <h2>
            About <span>Us</span>
          </h2>
          <p>
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, <br /> quis nostrud exercitation ullamco laboris nisi ut
            aliquip{" "}
          </p>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-7 col-md-12">
            <div className="about-img about-img-2 default-overlay mr-70">
              <img src="assets/img/banner/banner-2.jpg" alt="" />
              <a
                className="video-btn video-popup"
                href="https://www.youtube.com/watch?v=sv5hK4crIRc"
              >
                <img src="assets/img/icon-img/video.png" alt="" />
              </a>
            </div>
          </div>
          <div className="col-lg-5 col-md-12">
            <div className="about-content-2 pr-70">
              <p>
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                voluptatLorem ipsum dolor sit amet, consectetur adipisicing
                elit, sed do eiusmod tempor inci didunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercit.
              </p>
              <img src="assets/img/banner/banner-3.jpg" alt="" />
              <div className="signature mt-30">
                <img src="assets/img/icon-img/signature.png" alt="" />
              </div>
              <div className="about-btn mt-45">
                <a className="default-btn" href="about-us.html">
                  ABOUT US
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
