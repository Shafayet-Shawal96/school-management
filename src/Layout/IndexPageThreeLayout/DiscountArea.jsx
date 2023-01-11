import React from "react";
import { Link } from "react-router-dom";

const discountAreaImage = {
  backgroundImage: `url(assets/img/bg/bg-7.jpg)`,
};

function DiscountArea() {
  return (
    <div
      className="discount-area bg-img pt-110 pb-90"
      style={discountAreaImage}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-5">
            <div className="discount-img-wrap mr-60">
              <img src="assets/img/banner/book-4.png" alt="" />
              <div className="discount-img-content-wrap">
                <img src="assets/img/banner/discount.png" alt="" />
                <div className="discount-img-content">
                  <h5>50%</h5>
                  <span>DISCOUNT</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-7">
            <div className="discount-content">
              <h4>Buy Now !</h4>
              <h2>
                Stock <span>Limited</span>
              </h2>
              <div className="discount-btn">
                <Link className="default-btn" href="/">
                  ADD TO CART
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiscountArea;
