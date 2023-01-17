import React from "react";

const funFactAreaImage = {
  backgroundImage: `url(./assets/img/bg/bg-6.jpg)`,
};

function FunFact() {
  return (
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
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, <br /> quis nostrud exercitation ullamco laboris nisi ut
            aliquip{" "}
          </p>
        </div>
        <div className="row">
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
            <div className="single-count mb-30 count-one count-white">
              <div className="count-img">
                <img src="/assets/img/icon-img/funfact-1.png" alt="" />
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
                <img src="/assets/img/icon-img/funfact-2.png" alt="" />
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
                <img src="/assets/img/icon-img/funfact-1.png" alt="" />
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
                <img src="/assets/img/icon-img/funfact-2.png" alt="" />
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
  );
}

export default FunFact;
