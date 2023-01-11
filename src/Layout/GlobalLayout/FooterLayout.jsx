import React from "react";
import { Link } from "react-router-dom";

const footerImage = {
  backgroundImage: `url(./assets/img/bg/bg-4.jpg)`,
};

function FooterLayout() {
  return (
    <footer className="footer-area">
      <div
        className="footer-top bg-img default-overlay pt-130 pb-80"
        style={footerImage}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="footer-widget mb-40">
                <div className="footer-title">
                  <h4>ABOUT US</h4>
                </div>
                <div className="footer-about">
                  <p>
                    Ugiat nulla pariatur. Edeserunt mollit anim id est laborum.
                    Sed ut perspiciatis unde omnis iste natu
                  </p>
                  <div className="f-contact-info">
                    <div className="single-f-contact-info">
                      <i className="fa fa-home"></i>
                      <span>Uttara, Dhaka, Bangladesh</span>
                    </div>
                    <div className="single-f-contact-info">
                      <i className="fa fa-envelope-o"></i>
                      <span>
                        <Link to="#">education@email.com</Link>
                      </span>
                    </div>
                    <div className="single-f-contact-info">
                      <i className="fa fa-phone"></i>
                      <span> +98 558 547 589</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6">
              <div className="footer-widget mb-40">
                <div className="footer-title">
                  <h4>QUICK LINK</h4>
                </div>
                <div className="footer-list">
                  <ul>
                    <li>
                      <Link to="#">Home</Link>
                    </li>
                    <li>
                      <Link to="/about">About Us</Link>
                    </li>
                    <li>
                      <Link to="/course">Courses</Link>
                    </li>
                    <li>
                      <Link to="#">Admission</Link>
                    </li>
                    <li>
                      <Link to="#">Terms & Conditions</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6">
              <div className="footer-widget negative-mrg-30 mb-40">
                <div className="footer-title">
                  <h4>COURSES</h4>
                </div>
                <div className="footer-list">
                  <ul>
                    <li>
                      <Link to="#">Under Graduate Programmes </Link>
                    </li>
                    <li>
                      <Link to="#">Graduate Programmes </Link>
                    </li>
                    <li>
                      <Link to="#">Diploma Courses</Link>
                    </li>
                    <li>
                      <Link to="#">Others Programmes</Link>
                    </li>
                    <li>
                      <Link to="#">Short Courses</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6">
              <div className="footer-widget mb-40">
                <div className="footer-title">
                  <h4>GALLERY</h4>
                </div>
                <div className="footer-gallery">
                  <ul>
                    <li>
                      <Link to="#">
                        <img src="assets/img/gallery/gallery-1.png" alt="" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <img src="assets/img/gallery/gallery-2.png" alt="" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <img src="assets/img/gallery/gallery-3.png" alt="" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <img src="assets/img/gallery/gallery-4.png" alt="" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="footer-widget mb-40">
                <div className="footer-title">
                  <h4>News Latter</h4>
                </div>
                <div className="subscribe-style">
                  <p>
                    Dugiat nulla pariatur. Edeserunt mollit anim id est laborum.
                    Sed ut perspiciatis unde
                  </p>
                  <div id="mc_embed_signup" className="subscribe-form">
                    <form
                      id="mc-embedded-subscribe-form"
                      className="validate"
                      noValidate=""
                      target="_blank"
                      name="mc-embedded-subscribe-form"
                      method="post"
                      action="http://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef"
                    >
                      <div id="mc_embed_signup_scroll" className="mc-form">
                        <input
                          className="email"
                          type="email"
                          required=""
                          placeholder="Your E-mail Address"
                          name="EMAIL"
                        />
                        <div className="mc-news" aria-hidden="true">
                          <input
                            type="text"
                            tabIndex="-1"
                            name="b_6bbb9b6f5827bd842d9640c82_05d85f18ef"
                          />
                        </div>
                        <div className="clear">
                          <input
                            id="mc-embedded-subscribe"
                            className="button"
                            type="submit"
                            name="subscribe"
                            defaultValue={"SUBMIT"}
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom pt-15 pb-15">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-12">
              <div className="copyright">
                <p>
                  Copyright ©<Link to="#">GLAXDU</Link>. All Right Reserved.
                </p>
              </div>
            </div>
            <div className="col-lg-8 col-md-12">
              <div className="footer-menu-social">
                <div className="footer-menu">
                  <ul>
                    <li>
                      <Link to="#">Privecy & Policy</Link>
                    </li>
                    <li>
                      <Link to="#">Terms & Conditions of Use</Link>
                    </li>
                  </ul>
                </div>
                <div className="footer-social">
                  <ul>
                    <li>
                      <Link className="facebook" to="#">
                        <i className="fa fa-facebook"></i>
                      </Link>
                    </li>
                    <li>
                      <Link className="youtube" to="#">
                        <i className="fa fa-youtube-play"></i>
                      </Link>
                    </li>
                    <li>
                      <Link className="twitter" to="#">
                        <i className="fa fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link className="google-plus" to="#">
                        <i className="fa fa-google-plus"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterLayout;
