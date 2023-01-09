import React from "react";
import ContactForm from "../../Components/CheckoutPageComponents/BillingInfo";

function ContactArea() {
  return (
    <div className="contact-area pt-130 pb-130">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="contact-map mr-70">
              <div id="map">
                {/* <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2224905.8379164026!2d-63.27089988050263!3d-2.8569688249815943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91e8605342744385%3A0x3d3c6dc1394a7fc7!2sAmazon%20Rainforest!5e0!3m2!1sen!2sbd!4v1635401091721!5m2!1sen!2sbd"
                  style="border:0;"
                  allowFullScreen=""
                  loading="lazy"
                ></iframe> */}
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="contact-form">
              <div className="contact-title mb-45">
                <h2>
                  Stay <span>Connected</span>
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipis do eiusmod
                  tempor indunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <ContactForm />
              <p className="form-messege"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactArea;
