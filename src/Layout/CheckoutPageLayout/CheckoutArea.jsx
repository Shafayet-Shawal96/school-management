import React from "react";
import { Link } from "react-router-dom";
import BillingInfo from "../../Components/CheckoutPageComponents/BillingInfo";

function CheckoutArea() {
  return (
    <div className="checkout-area pt-130 pb-130">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <BillingInfo />
          </div>
          <div className="col-lg-5">
            <div className="your-order-area">
              <h3>Your order</h3>
              <div className="your-order-wrap gray-bg-4">
                <div className="your-order-product-info">
                  <div className="your-order-top">
                    <ul>
                      <li>Product</li>
                      <li>Total</li>
                    </ul>
                  </div>
                  <div className="your-order-middle">
                    <ul>
                      <li>
                        <span className="order-middle-left">
                          Product Name X 1
                        </span>{" "}
                        <span className="order-price">$329 </span>
                      </li>
                      <li>
                        <span className="order-middle-left">
                          Product Name X 1
                        </span>{" "}
                        <span className="order-price">$329 </span>
                      </li>
                    </ul>
                  </div>
                  <div className="your-order-bottom">
                    <ul>
                      <li className="your-order-shipping">Shipping</li>
                      <li>Free shipping</li>
                    </ul>
                  </div>
                  <div className="your-order-total">
                    <ul>
                      <li className="order-total">Total</li>
                      <li>$329</li>
                    </ul>
                  </div>
                </div>
                <div className="payment-method">
                  <div className="payment-accordion element-mrg">
                    <div className="panel-group" id="accordion">
                      <div className="panel payment-accordion">
                        <div className="panel-heading" id="method-one">
                          <h4 className="panel-title">
                            <Link
                              data-toggle="collapse"
                              data-parent="/accordion"
                              to="/method1"
                            >
                              Direct bank transfer
                            </Link>
                          </h4>
                        </div>
                        <div
                          id="method1"
                          className="panel-collapse collapse show"
                        >
                          <div className="panel-body">
                            <p>
                              Please send a check to Store Name, Store Street,
                              Store Town, Store State / County, Store Postcode.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="panel payment-accordion">
                        <div className="panel-heading" id="method-two">
                          <h4 className="panel-title">
                            <Link
                              className="collapsed"
                              data-toggle="collapse"
                              data-parent="/accordion"
                              to="/method2"
                            >
                              Check payments
                            </Link>
                          </h4>
                        </div>
                        <div id="method2" className="panel-collapse collapse">
                          <div className="panel-body">
                            <p>
                              Please send a check to Store Name, Store Street,
                              Store Town, Store State / County, Store Postcode.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="panel payment-accordion">
                        <div className="panel-heading" id="method-three">
                          <h4 className="panel-title">
                            <Link
                              className="collapsed"
                              data-toggle="collapse"
                              data-parent="/accordion"
                              to="/method3"
                            >
                              Cash on delivery
                            </Link>
                          </h4>
                        </div>
                        <div id="method3" className="panel-collapse collapse">
                          <div className="panel-body">
                            <p>
                              Please send a check to Store Name, Store Street,
                              Store Town, Store State / County, Store Postcode.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="Place-order mt-25">
                <Link className="btn-hover" to="/">
                  Place Order
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutArea;
