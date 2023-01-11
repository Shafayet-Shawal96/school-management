import React from "react";
import { Link } from "react-router-dom";

function BannerArea() {
  return (
    <div className="banner-area pt-130 pb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4">
            <div className="single-banner mb-30">
              <div className="banner-img">
                <Link to="#">
                  <img src="assets/img/banner/book-1.png" alt="" />
                </Link>
              </div>
              <div className="banner-content">
                <h5>Adventure</h5>
                <h2>BOOK 2018</h2>
                <div className="banner-shape">
                  <img src="assets/img/icon-img/banner-shape.png" alt="" />
                </div>
                <div className="banner-btn">
                  <Link className="default-btn" to="#">
                    ADD TO CART
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div className="single-banner second-banner mb-30">
              <div className="banner-img">
                <Link to="#">
                  <img src="assets/img/banner/book-2.png" alt="" />
                </Link>
              </div>
              <div className="banner-content">
                <h5>Adventure</h5>
                <h2>BOOK 2018</h2>
                <div className="banner-shape">
                  <img src="assets/img/icon-img/banner-shape.png" alt="" />
                </div>
                <div className="banner-btn">
                  <Link className="default-btn" to="#">
                    ADD TO CART
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div className="single-banner mb-30">
              <div className="banner-img">
                <Link to="#">
                  <img src="assets/img/banner/book-3.png" alt="" />
                </Link>
              </div>
              <div className="banner-content">
                <h5>Adventure</h5>
                <h2>BOOK 2018</h2>
                <div className="banner-shape">
                  <img src="assets/img/icon-img/banner-shape.png" alt="" />
                </div>
                <div className="banner-btn">
                  <Link className="default-btn" to="#">
                    ADD TO CART
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerArea;
