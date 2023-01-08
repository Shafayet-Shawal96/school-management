import React, { Fragment } from "react";
import BrandCarouselComponent from "../Components/GlobalComponents/BrandCarouselComponent";
import BreadcrumbArea from "../Layout/BreadcrumbArea";
import FooterLayout from "../Layout/FooterLayout";
import HeaderLayout from "../Layout/HeaderLayout";
import CartForm from "../Components/CartPageComponents/CartForm";

const breadcrumbObj = {
  title: "Cart",
  subtitle: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore .`,
  pageName: "Cart",
  overlayClass: "breadcrumb-overly-4",
  breadcrumbImage: {
    backgroundImage: `url(assets/img/bg/breadcrumb-bg-4.jpg)`,
  },
};

function CartPage() {
  return (
    <Fragment>
      <HeaderLayout />
      <BreadcrumbArea breadcrumbObj={breadcrumbObj} />
      <div className="cart-main-area pt-130 pb-130">
        <div className="container">
          <h3 className="cart-page-title">Your cart items</h3>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <CartForm />
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div className="cart-tax">
                    <div className="title-wrap">
                      <h4 className="cart-bottom-title section-bg-gray">
                        Estimate Shipping And Tax
                      </h4>
                    </div>
                    <div className="tax-wrapper">
                      <p>Enter your destination to get a shipping estimate.</p>
                      <div className="tax-select-wrapper">
                        <div className="tax-select">
                          <label>* Country</label>
                          <select className="email s-email s-wid">
                            <option>Bangladesh</option>
                            <option>Albania</option>
                            <option>Åland Islands</option>
                            <option>Afghanistan</option>
                            <option>Belgium</option>
                          </select>
                        </div>
                        <div className="tax-select">
                          <label>* Region / State</label>
                          <select className="email s-email s-wid">
                            <option>Bangladesh</option>
                            <option>Albania</option>
                            <option>Åland Islands</option>
                            <option>Afghanistan</option>
                            <option>Belgium</option>
                          </select>
                        </div>
                        <div className="tax-select">
                          <label>* Zip/Postal Code</label>
                          <input type="text" />
                        </div>
                        <button className="cart-btn-2" type="submit">
                          Get A Quote
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="discount-code-wrapper">
                    <div className="title-wrap">
                      <h4 className="cart-bottom-title section-bg-gray">
                        Use Coupon Code
                      </h4>
                    </div>
                    <div className="discount-code">
                      <p>Enter your coupon code if you have one.</p>
                      <form>
                        <input type="text" required="" name="name" />
                        <button className="cart-btn-2" type="submit">
                          Apply Coupon
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12">
                  <div className="grand-totall">
                    <div className="title-wrap">
                      <h4 className="cart-bottom-title section-bg-gary-cart">
                        Cart Total
                      </h4>
                    </div>
                    <h5>
                      Total products <span>$260.00</span>
                    </h5>
                    <div className="total-shipping">
                      <h5>Total shipping</h5>
                      <ul>
                        <li>
                          <input type="checkbox" /> Standard <span>$20.00</span>
                        </li>
                        <li>
                          <input type="checkbox" /> Express <span>$30.00</span>
                        </li>
                      </ul>
                    </div>
                    <h4 className="grand-totall-title">
                      Grand Total <span>$260.00</span>
                    </h4>
                    <a href="/">Proceed to Checkout</a>
                  </div>
                </div>
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

export default CartPage;
