import React from "react";
import ContactForm from "../../Components/ContactPageComponents/BillingInfo";
import Map from "../../Components/GoogleMap/Map";

function ContactArea() {
  return (
    <div className="contact-area pt-130 pb-130">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="contact-map mr-70">
              <div id="map">
                <Map />
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
