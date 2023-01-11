import React from "react";
import { Link } from "react-router-dom";

function BestSaleArea() {
  return (
    <div className="best-sale-area pt-130 pb-100">
      <div className="container">
        <div className="section-title mb-75">
          <h2>
            Best <span>Sale</span>
          </h2>
          <p>
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim{" "}
            <br />
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip{" "}
          </p>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="product-wrap mb-30">
              <div className="product-img">
                <Link to="single-product.html">
                  <img src="assets/img/product/pro-1.jpg" alt="" />
                </Link>
                <span>Sale</span>
                <div className="product-action">
                  <ul>
                    <li>
                      <Link title="Add To Cart" to="#">
                        <i className="fa fa-cart-arrow-down"></i>
                      </Link>
                    </li>
                    <li>
                      <Link title="Compare" to="#">
                        <i className="fa fa-random"></i>
                      </Link>
                    </li>
                    <li>
                      <Link title="Wishlist" to="#">
                        <i className="fa fa-heart-o"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        title="Quick View"
                        data-bs-toggle="modal"
                        data-bs-target="/exampleModal"
                        to="#"
                      >
                        <i className="fa fa-eye"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="product-content">
                <div className="pro-title-rating-wrap">
                  <div className="product-title">
                    <h3>
                      <Link to="single-product.html">Marker Pen</Link>
                    </h3>
                  </div>
                  <div className="product-rating">
                    <i className="zmdi zmdi-star"></i>
                    <i className="zmdi zmdi-star"></i>
                    <i className="zmdi zmdi-star"></i>
                    <i className="zmdi zmdi-star"></i>
                    <i className="zmdi zmdi-star"></i>
                  </div>
                </div>
                <div className="pro-category-price">
                  <span className="pro-category">Drawing</span>
                  <span className="pro-price">$10</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="product-wrap mb-30">
              <div className="product-img">
                <Link to="single-product.html">
                  <img src="assets/img/product/pro-9.jpg" alt="" />
                </Link>
                <div className="product-action">
                  <ul>
                    <li>
                      <Link title="Add To Cart" to="#">
                        <i className="fa fa-cart-arrow-down"></i>
                      </Link>
                    </li>
                    <li>
                      <Link title="Compare" to="#">
                        <i className="fa fa-random"></i>
                      </Link>
                    </li>
                    <li>
                      <Link title="Wishlist" to="#">
                        <i className="fa fa-heart-o"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        title="Quick View"
                        data-bs-toggle="modal"
                        data-bs-target="/exampleModal"
                        to="#"
                      >
                        <i className="fa fa-eye"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="product-content">
                <div className="pro-title-rating-wrap">
                  <div className="product-title">
                    <h3>
                      <Link to="single-product.html">History Book</Link>
                    </h3>
                  </div>
                  <div className="product-rating">
                    <i className="zmdi zmdi-star"></i>
                    <i className="zmdi zmdi-star"></i>
                    <i className="zmdi zmdi-star"></i>
                    <i className="zmdi zmdi-star"></i>
                    <i className="zmdi zmdi-star"></i>
                  </div>
                </div>
                <div className="pro-category-price">
                  <span className="pro-category">Drawing</span>
                  <span className="pro-price">$10</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="product-wrap mb-30">
              <div className="product-img">
                <Link to="single-product.html">
                  <img src="assets/img/product/pro-10.jpg" alt="" />
                </Link>
                <span>Sale</span>
                <div className="product-action">
                  <ul>
                    <li>
                      <Link title="Add To Cart" to="#">
                        <i className="fa fa-cart-arrow-down"></i>
                      </Link>
                    </li>
                    <li>
                      <Link title="Compare" to="#">
                        <i className="fa fa-random"></i>
                      </Link>
                    </li>
                    <li>
                      <Link title="Wishlist" to="#">
                        <i className="fa fa-heart-o"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        title="Quick View"
                        data-bs-toggle="modal"
                        data-bs-target="/exampleModal"
                        to="#"
                      >
                        <i className="fa fa-eye"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="product-content">
                <div className="pro-title-rating-wrap">
                  <div className="product-title">
                    <h3>
                      <Link to="single-product.html">Softball Gloves</Link>
                    </h3>
                  </div>
                  <div className="product-rating">
                    <i className="zmdi zmdi-star"></i>
                    <i className="zmdi zmdi-star"></i>
                    <i className="zmdi zmdi-star"></i>
                    <i className="zmdi zmdi-star"></i>
                    <i className="zmdi zmdi-star"></i>
                  </div>
                </div>
                <div className="pro-category-price">
                  <span className="pro-category">Drawing</span>
                  <span className="pro-price">$10</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="product-wrap mb-30">
              <div className="product-img">
                <Link to="single-product.html">
                  <img src="assets/img/product/pro-11.jpg" alt="" />
                </Link>
                <div className="product-action">
                  <ul>
                    <li>
                      <Link title="Add To Cart" to="#">
                        <i className="fa fa-cart-arrow-down"></i>
                      </Link>
                    </li>
                    <li>
                      <Link title="Compare" to="#">
                        <i className="fa fa-random"></i>
                      </Link>
                    </li>
                    <li>
                      <Link title="Wishlist" to="#">
                        <i className="fa fa-heart-o"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        title="Quick View"
                        data-bs-toggle="modal"
                        data-bs-target="/exampleModal"
                        to="#"
                      >
                        <i className="fa fa-eye"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="product-content">
                <div className="pro-title-rating-wrap">
                  <div className="product-title">
                    <h3>
                      <Link to="single-product.html">Skating Shoes</Link>
                    </h3>
                  </div>
                  <div className="product-rating">
                    <i className="zmdi zmdi-star"></i>
                    <i className="zmdi zmdi-star"></i>
                    <i className="zmdi zmdi-star"></i>
                    <i className="zmdi zmdi-star"></i>
                    <i className="zmdi zmdi-star"></i>
                  </div>
                </div>
                <div className="pro-category-price">
                  <span className="pro-category">Drawing</span>
                  <span className="pro-price">$10</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BestSaleArea;
