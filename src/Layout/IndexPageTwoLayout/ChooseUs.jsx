import React from "react";

function ChooseUs() {
  return (
    <div className="choose-us-area pb-130">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="single-choose-us2 mb-45 text-center">
                  <img src="assets/img/icon-img/service-5.png" alt="" />
                  <h4>Creative & Tecnology Base</h4>
                  <p>
                    magna aliqua. Ut enim ad minim <br />
                    aliqui ptempor incid.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="single-choose-us2 mb-45 text-center choose-padding">
                  <img src="assets/img/icon-img/service-6.png" alt="" />
                  <h4>25 Years Of Experience</h4>
                  <p>
                    magna aliqua. Ut enim ad minim <br />
                    aliqui ptempor incid.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="single-choose-us2 mb-45 text-center">
                  <img src="assets/img/icon-img/service-7.png" alt="" />
                  <h4>Best Lab Facilities</h4>
                  <p>
                    magna aliqua. Ut enim ad minim <br />
                    aliqui ptempor incid.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="single-choose-us2 mb-45 text-center choose-padding">
                  <img src="assets/img/icon-img/service-8.png" alt="" />
                  <h4>Best lab facilities</h4>
                  <p>
                    magna aliqua. Ut enim ad minim <br />
                    aliqui ptempor incid.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="choose-newsletter text-center ml-40">
              <h4>SIGNUP WITH NEWSLATTER</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                ullamco laboris nisi ut aliquip{" "}
              </p>
              <form>
                <input name="name" placeholder="E-mail" type="text" />
                <textarea name="message" placeholder="Message"></textarea>
                <button className="submit" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChooseUs;
