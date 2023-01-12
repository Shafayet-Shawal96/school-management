import React from "react";
import { Link } from "react-router-dom";

function Modal() {
  return (
    <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true"></span>
            </button>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-md-5 col-sm-12 col-xs-12">
                <div className="tab-content quickview-big-img">
                  <div id="pro-1" className="tab-pane fade show active">
                    <img src="assets/img/product/quickview-l1.jpg" alt="" />
                  </div>
                  <div id="pro-2" className="tab-pane fade">
                    <img src="assets/img/product/quickview-l2.jpg" alt="" />
                  </div>
                  <div id="pro-3" className="tab-pane fade">
                    <img src="assets/img/product/quickview-l3.jpg" alt="" />
                  </div>
                  <div id="pro-4" className="tab-pane fade">
                    <img src="assets/img/product/quickview-l2.jpg" alt="" />
                  </div>
                </div>
                {/* <!-- Thumbnail Large Image End --> */}
                {/* <!-- Thumbnail Image End --> */}
                <div className="product-thumbnail">
                  <div
                    className="thumb-menu owl-carousel nav nav-style"
                    role="tablist"
                  >
                    <Link className="active" data-bs-toggle="tab" to="/pro-1">
                      <img src="assets/img/product/quickview-s1.jpg" alt="" />
                    </Link>
                    <Link data-bs-toggle="tab" to="/pro-2">
                      <img src="assets/img/product/quickview-s2.jpg" alt="" />
                    </Link>
                    <Link data-bs-toggle="tab" to="/pro-3">
                      <img src="assets/img/product/quickview-s3.jpg" alt="" />
                    </Link>
                    <Link data-bs-toggle="tab" to="/pro-4">
                      <img src="assets/img/product/quickview-s2.jpg" alt="" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-7 col-sm-12 col-xs-12">
                <div className="product-details-content quickview-content">
                  <h2>Product Name</h2>
                  <div className="pro-details-rating-wrap">
                    <div className="pro-details-rating">
                      <i className="zmdi zmdi-star"></i>
                      <i className="zmdi zmdi-star"></i>
                      <i className="zmdi zmdi-star"></i>
                      <i className="zmdi zmdi-star"></i>
                      <i className="zmdi zmdi-star"></i>
                    </div>
                    <span>(1 customer review)</span>
                  </div>
                  <h3>$329</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunca augue quis neque ultrices placerat sit amet quis
                    mauris. Integer urna libero, aliquet neque posu ullamcorper
                    fringilla dolor. Maecenas id mattis magna.{" "}
                  </p>
                  <div className="pro-details-size-color2 mt-30">
                    <div className="pro-details-color2-wrap">
                      <span>Color</span>
                      <div className="pro-details-color2-content">
                        <ul>
                          <li className="blue"></li>
                          <li className="maroon active"></li>
                          <li className="gray"></li>
                          <li className="green"></li>
                          <li className="yellow"></li>
                          <li className="white"></li>
                        </ul>
                      </div>
                    </div>
                    <div className="pro-details-size2">
                      <span>Size</span>
                      <div className="pro-details-size2-content">
                        <ul>
                          <li>
                            <Link to="#">s</Link>
                          </li>
                          <li>
                            <Link to="#">m</Link>
                          </li>
                          <li>
                            <Link to="#">l</Link>
                          </li>
                          <li>
                            <Link to="#">xl</Link>
                          </li>
                          <li>
                            <Link to="#">xxl</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="pro-details-quality mt-50 mb-45">
                    <div className="cart-plus-minus">
                      <input
                        className="cart-plus-minus-box"
                        type="text"
                        name="qtybutton"
                        defaultValue="2"
                      />
                    </div>
                    <div className="pro-details-cart">
                      <Link className="default-btn btn-hover" to="#">
                        Add To Cart
                      </Link>
                    </div>
                    <div className="pro-details-wishlist">
                      <Link className=" btn-hover" to="#">
                        <i className="fa fa-heart-o"></i>
                      </Link>
                    </div>
                  </div>
                  <span>
                    <i className="fa fa-check"></i> In stock
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
