import React from "react";
import { Link } from "react-router-dom";

function EventArea() {
  return (
    <div className="event-area pt-130 pb-130">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="shop-top-bar">
              <div className="shop-tab-wrap">
                <div className="shop-tab nav">
                  <Link className="active" to="/shop-1" data-bs-toggle="tab">
                    <i className="fa fa-table"></i>
                  </Link>
                  <Link to="/shop-2" data-bs-toggle="tab">
                    <i className="fa fa-list-ul"></i>
                  </Link>
                </div>
                <p>Showing 1–12 of 20 result</p>
              </div>
              <div className="shop-select">
                <select>
                  <option value="">Sort By Popularity</option>
                  <option value="">A to Z</option>
                  <option value=""> Z to A</option>
                  <option value="">In stock</option>
                </select>
              </div>
            </div>
            <div className="shop-bottom-area mt-30">
              <div className="tab-content jump">
                <div id="shop-1" className="tab-pane active">
                  <div className="row">
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
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
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="product-wrap mb-30">
                        <div className="product-img">
                          <Link to="single-product.html">
                            <img src="assets/img/product/pro-2.jpg" alt="" />
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
                                <Link to="single-product.html">
                                  Color Pencil
                                </Link>
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
                            <span className="pro-price">$20</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="product-wrap mb-30">
                        <div className="product-img">
                          <Link to="single-product.html">
                            <img src="assets/img/product/pro-3.jpg" alt="" />
                          </Link>
                          <span>New</span>
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
                                <Link to="single-product.html">Color Box</Link>
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
                            <span className="pro-price">$30</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="product-wrap mb-30">
                        <div className="product-img">
                          <Link to="single-product.html">
                            <img src="assets/img/product/pro-4.jpg" alt="" />
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
                                <Link to="single-product.html">Toy mobile</Link>
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
                            <span className="pro-price">$40</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="product-wrap mb-30">
                        <div className="product-img">
                          <Link to="single-product.html">
                            <img src="assets/img/product/pro-5.jpg" alt="" />
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
                                <Link to="single-product.html">
                                  Awesome vase
                                </Link>
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
                            <span className="pro-price">$50</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="product-wrap mb-30">
                        <div className="product-img">
                          <Link to="single-product.html">
                            <img src="assets/img/product/pro-6.jpg" alt="" />
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
                                <Link to="single-product.html">
                                  Ceramic vase
                                </Link>
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
                            <span className="pro-price">$60</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="product-wrap mb-30">
                        <div className="product-img">
                          <Link to="single-product.html">
                            <img src="assets/img/product/pro-7.jpg" alt="" />
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
                                <Link to="single-product.html">
                                  Smart Watch
                                </Link>
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
                            <span className="pro-price">$70</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="product-wrap mb-30">
                        <div className="product-img">
                          <Link to="single-product.html">
                            <img src="assets/img/product/pro-8.jpg" alt="" />
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
                                <Link to="single-product.html">
                                  History Book
                                </Link>
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
                            <span className="pro-price">$80</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
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
                                <Link to="single-product.html">Color Box</Link>
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
                            <span className="pro-price">$90</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="product-wrap mb-30">
                        <div className="product-img">
                          <Link to="single-product.html">
                            <img src="assets/img/product/pro-12.jpg" alt="" />
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
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="product-wrap mb-30">
                        <div className="product-img">
                          <Link to="single-product.html">
                            <img src="assets/img/product/pro-10.jpg" alt="" />
                          </Link>
                          <span>New</span>
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
                                <Link to="single-product.html">
                                  Softball Gloves
                                </Link>
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
                            <span className="pro-price">$20</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
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
                                <Link to="single-product.html">Color Box</Link>
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
                            <span className="pro-category">Skating Shoes</span>
                            <span className="pro-price">$30</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="shop-2" className="tab-pane">
                  <div className="shop-list-wrap mb-30">
                    <div className="shop-list-img">
                      <Link to="single-product.html">
                        <img src="assets/img/product/pro-3.jpg" alt="" />
                      </Link>
                    </div>
                    <div className="shop-list-content">
                      <h4>
                        <Link to="single-product.html">Color Box</Link>
                      </h4>
                      <span>$500</span>
                      <div className="review-rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </div>
                      <p>
                        Etiam cursus ex non pellentesque laoreet. Donec et
                        faucibus ipsum. Sed get blandit orciplacerat elit.
                        Mauris molestie quis ante eget dapib. Suspendisse
                        fringilla posuere sem eu suscipit. Suspendisse non enim
                        in nisi convallis gravida. In vehicula on
                        telit.Suspendisse non enim in nisi convallis gravida
                        posuere sem eu suscipit. In vehicula on telit.
                      </p>
                      <div className="product-action-list">
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
                  </div>
                  <div className="shop-list-wrap mb-30">
                    <div className="shop-list-img">
                      <Link to="single-product.html">
                        <img src="assets/img/product/pro-2.jpg" alt="" />
                      </Link>
                    </div>
                    <div className="shop-list-content">
                      <h4>
                        <Link to="single-product.html">Color Box</Link>
                      </h4>
                      <span>$500</span>
                      <div className="review-rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </div>
                      <p>
                        Etiam cursus ex non pellentesque laoreet. Donec et
                        faucibus ipsum. Sed get blandit orciplacerat elit.
                        Mauris molestie quis ante eget dapib. Suspendisse
                        fringilla posuere sem eu suscipit. Suspendisse non enim
                        in nisi convallis gravida. In vehicula on
                        telit.Suspendisse non enim in nisi convallis gravida
                        posuere sem eu suscipit. In vehicula on telit.
                      </p>
                      <div className="product-action-list">
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
                  </div>
                  <div className="shop-list-wrap mb-30">
                    <div className="shop-list-img">
                      <Link to="single-product.html">
                        <img src="assets/img/product/pro-5.jpg" alt="" />
                      </Link>
                    </div>
                    <div className="shop-list-content">
                      <h4>
                        <Link to="single-product.html">Color Box</Link>
                      </h4>
                      <span>$500</span>
                      <div className="review-rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </div>
                      <p>
                        Etiam cursus ex non pellentesque laoreet. Donec et
                        faucibus ipsum. Sed get blandit orciplacerat elit.
                        Mauris molestie quis ante eget dapib. Suspendisse
                        fringilla posuere sem eu suscipit. Suspendisse non enim
                        in nisi convallis gravida. In vehicula on
                        telit.Suspendisse non enim in nisi convallis gravida
                        posuere sem eu suscipit. In vehicula on telit.
                      </p>
                      <div className="product-action-list">
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
                  </div>
                  <div className="shop-list-wrap mb-30">
                    <div className="shop-list-img">
                      <Link to="single-product.html">
                        <img src="assets/img/product/pro-6.jpg" alt="" />
                      </Link>
                    </div>
                    <div className="shop-list-content">
                      <h4>
                        <Link to="single-product.html">Color Box</Link>
                      </h4>
                      <span>$500</span>
                      <div className="review-rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </div>
                      <p>
                        Etiam cursus ex non pellentesque laoreet. Donec et
                        faucibus ipsum. Sed get blandit orciplacerat elit.
                        Mauris molestie quis ante eget dapib. Suspendisse
                        fringilla posuere sem eu suscipit. Suspendisse non enim
                        in nisi convallis gravida. In vehicula on
                        telit.Suspendisse non enim in nisi convallis gravida
                        posuere sem eu suscipit. In vehicula on telit.
                      </p>
                      <div className="product-action-list">
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
                  </div>
                  <div className="shop-list-wrap mb-30">
                    <div className="shop-list-img">
                      <Link to="single-product.html">
                        <img src="assets/img/product/pro-10.jpg" alt="" />
                      </Link>
                    </div>
                    <div className="shop-list-content">
                      <h4>
                        <Link to="single-product.html">Color Box</Link>
                      </h4>
                      <span>$500</span>
                      <div className="review-rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </div>
                      <p>
                        Etiam cursus ex non pellentesque laoreet. Donec et
                        faucibus ipsum. Sed get blandit orciplacerat elit.
                        Mauris molestie quis ante eget dapib. Suspendisse
                        fringilla posuere sem eu suscipit. Suspendisse non enim
                        in nisi convallis gravida. In vehicula on
                        telit.Suspendisse non enim in nisi convallis gravida
                        posuere sem eu suscipit. In vehicula on telit.
                      </p>
                      <div className="product-action-list">
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pro-pagination-style text-center mt-30">
          <ul>
            <li>
              <Link className="prev" to="#">
                <i className="fa fa-angle-double-left"></i>
              </Link>
            </li>
            <li>
              <Link className="active" to="#">
                1
              </Link>
            </li>
            <li>
              <Link to="#">2</Link>
            </li>
            <li>
              <Link className="next" to="#">
                <i className="fa fa-angle-double-right"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default EventArea;
