import React from "react";

const chooseContentObj = {
  headingText: "No Scholarship Facility",
  paragraphText:
    "magna aliqua. Ut enim ad minim veniam conse ctetur adipisicing elit, sed do exercitation.",
  icon: "assets/img/icon-img/service-2.png",
};

function ChooseUs() {
  return (
    <div className="choose-us section-padding-1">
      <div className="container-fluid">
        <div className="row no-gutters choose-negative-mrg">
          <div className="col-lg-3 col-md-6">
            <div className="single-choose-us choose-bg-light-blue">
              <div className="choose-img">
                <img className="animated" src={chooseContentObj.icon} alt="" />
              </div>
              <div className="choose-content">
                <h3>{chooseContentObj.headingText}</h3>
                <p>{chooseContentObj.paragraphText}</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="single-choose-us choose-bg-yellow">
              <div className="choose-img">
                <img className="animated" src={chooseContentObj.icon} alt="" />
              </div>
              <div className="choose-content">
                <h3>{chooseContentObj.headingText}</h3>
                <p>{chooseContentObj.paragraphText}</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="single-choose-us choose-bg-blue">
              <div className="choose-img">
                <img className="animated" src={chooseContentObj.icon} alt="" />
              </div>
              <div className="choose-content">
                <h3>{chooseContentObj.headingText}</h3>
                <p>{chooseContentObj.paragraphText}</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="single-choose-us choose-bg-green">
              <div className="choose-img">
                <img className="animated" src={chooseContentObj.icon} alt="" />
              </div>
              <div className="choose-content">
                <h3>{chooseContentObj.headingText}</h3>
                <p>{chooseContentObj.paragraphText}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChooseUs;
