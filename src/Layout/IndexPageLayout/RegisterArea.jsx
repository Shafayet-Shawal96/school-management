import React from "react";

const registerAreaImage = {
  backgroundImage: `url(./assets/img/bg/bg-2.jpg)`,
};

function RegisterArea() {
  return (
    <div
      className="register-area bg-img pt-130 pb-130"
      style={registerAreaImage}
    >
      <div className="container">
        <div className="section-title-2 mb-75 white-text">
          <h2>
            Register <span>Now</span>
          </h2>
          <p>
            Winter Admission Is Going On. We are announcing Special discount for
            winter batch 2019.
          </p>
        </div>
        <div className="register-wrap">
          <div id="register-3" className="mouse-bg">
            <div className="winter-banner">
              <img src="/assets/img/banner/regi-1.png" alt="" />
              <div className="winter-content">
                <span>WINTER </span>
                <h3>2019</h3>
                <span>ADMISSION </span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-10 col-md-8">
              <div className="register-form">
                <h4>Get A free Registration</h4>
                <form>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="contact-form-style mb-20">
                        <input
                          name="name"
                          placeholder="First Name"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="contact-form-style mb-20">
                        <input
                          name="name"
                          placeholder="Last Name"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="contact-form-style mb-20">
                        <input name="name" placeholder="Phone" type="text" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="contact-form-style mb-20">
                        <input name="name" placeholder="Email" type="text" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="contact-form-style">
                        <textarea
                          name="message"
                          placeholder="Message"
                        ></textarea>
                        <button className="submit default-btn" type="submit">
                          SUBMIT NOW
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="register-1" className="mouse-bg"></div>
      <div id="register-2" className="mouse-bg"></div>
    </div>
  );
}

export default RegisterArea;
