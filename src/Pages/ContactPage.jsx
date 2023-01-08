import React, { Fragment } from "react";
import BrandCarouselComponent from "../Components/BrandCarouselComponent";
import BreadcrumbArea from "../Layout/BreadcrumbArea";
import FooterLayout from "../Layout/FooterLayout";
import HeaderLayout from "../Layout/HeaderLayout";

const breadcrumbObj = {
  title: "Contact Us",
  subtitle: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore .`,
  pageName: "Contact Us",
  overlayClass: "breadcrumb-overly-5",
  breadcrumbImage: {
    backgroundImage: `url(./assets/img/bg/breadcrumb-bg-6.jpg)`,
  },
};

const contactAreaImage = {
  backgroundImage: `url(./assets/img/bg/breadcrumb-bg-6.jpg)`,
};

function ContactPage() {
  return (
    <Fragment>
      <HeaderLayout />
      <BreadcrumbArea breadcrumbObj={breadcrumbObj} />
      <div className="contact-area pt-130 pb-130">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="contact-map mr-70">
                <div id="map">
                  {/* <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2224905.8379164026!2d-63.27089988050263!3d-2.8569688249815943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91e8605342744385%3A0x3d3c6dc1394a7fc7!2sAmazon%20Rainforest!5e0!3m2!1sen!2sbd!4v1635401091721!5m2!1sen!2sbd"
                    style="border:0;"
                    allowfullscreen=""
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
                <form
                  id="contact-form"
                  action="assets/php/mail.php"
                  method="post"
                >
                  <input name="name" placeholder="Name*" type="text" />
                  <input name="email" placeholder="Email*" type="email" />
                  <input name="subject" placeholder="Subject*" type="text" />
                  <textarea name="message" placeholder="Message"></textarea>
                  <button className="submit btn-style" type="submit">
                    SEND MESSAGE
                  </button>
                </form>
                <p className="form-messege"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="contact-info-area bg-img pt-180 pb-140 default-overlay"
        style={contactAreaImage}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-12">
              <div className="single-contact-info mb-30 text-center">
                <div className="contact-info-icon">
                  <span>
                    <i className="fa fa-calendar-o"></i>
                  </span>
                </div>
                <p>
                  Uttara, Dhaka, Bangladesh <br />
                  Opposite site Of Yellow.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <div className="single-contact-info mb-30 text-center">
                <div className="contact-info-icon">
                  <span>
                    <i className="fa fa-calendar-o"></i>
                  </span>
                </div>
                <div className="contact-info-phn">
                  <div className="info-phn-title">
                    <span>Phone : </span>
                  </div>
                  <div className="info-phn-number">
                    <p>+091111111111</p>
                    <p>+091111111111</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <div className="single-contact-info mb-30 text-center">
                <div className="contact-info-icon">
                  <span>
                    <i className="fa fa-calendar-o"></i>
                  </span>
                </div>
                <a href="/">education@email.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BrandCarouselComponent />
      <FooterLayout />
    </Fragment>
  );
}

export default ContactPage;
