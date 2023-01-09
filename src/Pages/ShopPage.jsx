import React, { Fragment } from "react";
import BrandCarouselComponent from "../Components/GlobalComponents/BrandCarouselComponent";
import BreadcrumbArea from "../Layout/BreadcrumbArea";
import FooterLayout from "../Layout/FooterLayout";
import HeaderLayout from "../Layout/HeaderLayout";
const breadcrumbObj = {
  title: "Shop Grid",
  subtitle: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
  eiusmod tempor incididunt ut labore .`,
  pageName: "Shop Grid",
  overlayClass: "breadcrumb-overly-4",
  breadcrumbImage: {
    backgroundImage: `url(./assets/img/bg/breadcrumb-bg-4.jpg)`,
  },
};

function ShopPage() {
  return (
    <Fragment>
      <BreadcrumbArea breadcrumbObj={breadcrumbObj} />
      <div className="event-area pt-130 pb-130">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="shop-top-bar">
                <div className="shop-tab-wrap">
                  <div className="shop-tab nav">
                    <a className="active" href="/shop-1" data-bs-toggle="tab">
                      <i className="fa fa-table"></i>
                    </a>
                    <a href="/shop-2" data-bs-toggle="tab">
                      <i className="fa fa-list-ul"></i>
                    </a>
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
                            <a href="single-product.html">
                              <img src="assets/img/product/pro-1.jpg" alt="" />
                            </a>
                            <span>Sale</span>
                            <div className="product-action">
                              <ul>
                                <li>
                                  <a title="Add To Cart" href="/">
                                    <i className="fa fa-cart-arrow-down"></i>
                                  </a>
                                </li>
                                <li>
                                  <a title="Compare" href="/">
                                    <i className="fa fa-random"></i>
                                  </a>
                                </li>
                                <li>
                                  <a title="Wishlist" href="/">
                                    <i className="fa fa-heart-o"></i>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    title="Quick View"
                                    data-bs-toggle="modal"
                                    data-bs-target="/exampleModal"
                                    href="/"
                                  >
                                    <i className="fa fa-eye"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-content">
                            <div className="pro-title-rating-wrap">
                              <div className="product-title">
                                <h3>
                                  <a href="single-product.html">Marker Pen</a>
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
                            <a href="single-product.html">
                              <img src="assets/img/product/pro-2.jpg" alt="" />
                            </a>
                            <div className="product-action">
                              <ul>
                                <li>
                                  <a title="Add To Cart" href="/">
                                    <i className="fa fa-cart-arrow-down"></i>
                                  </a>
                                </li>
                                <li>
                                  <a title="Compare" href="/">
                                    <i className="fa fa-random"></i>
                                  </a>
                                </li>
                                <li>
                                  <a title="Wishlist" href="/">
                                    <i className="fa fa-heart-o"></i>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    title="Quick View"
                                    data-bs-toggle="modal"
                                    data-bs-target="/exampleModal"
                                    href="/"
                                  >
                                    <i className="fa fa-eye"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-content">
                            <div className="pro-title-rating-wrap">
                              <div className="product-title">
                                <h3>
                                  <a href="single-product.html">Color Pencil</a>
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
                            <a href="single-product.html">
                              <img src="assets/img/product/pro-3.jpg" alt="" />
                            </a>
                            <span>New</span>
                            <div className="product-action">
                              <ul>
                                <li>
                                  <a title="Add To Cart" href="/">
                                    <i className="fa fa-cart-arrow-down"></i>
                                  </a>
                                </li>
                                <li>
                                  <a title="Compare" href="/">
                                    <i className="fa fa-random"></i>
                                  </a>
                                </li>
                                <li>
                                  <a title="Wishlist" href="/">
                                    <i className="fa fa-heart-o"></i>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    title="Quick View"
                                    data-bs-toggle="modal"
                                    data-bs-target="/exampleModal"
                                    href="/"
                                  >
                                    <i className="fa fa-eye"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-content">
                            <div className="pro-title-rating-wrap">
                              <div className="product-title">
                                <h3>
                                  <a href="single-product.html">Color Box</a>
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
                            <a href="single-product.html">
                              <img src="assets/img/product/pro-4.jpg" alt="" />
                            </a>
                            <div className="product-action">
                              <ul>
                                <li>
                                  <a title="Add To Cart" href="/">
                                    <i className="fa fa-cart-arrow-down"></i>
                                  </a>
                                </li>
                                <li>
                                  <a title="Compare" href="/">
                                    <i className="fa fa-random"></i>
                                  </a>
                                </li>
                                <li>
                                  <a title="Wishlist" href="/">
                                    <i className="fa fa-heart-o"></i>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    title="Quick View"
                                    data-bs-toggle="modal"
                                    data-bs-target="/exampleModal"
                                    href="/"
                                  >
                                    <i className="fa fa-eye"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-content">
                            <div className="pro-title-rating-wrap">
                              <div className="product-title">
                                <h3>
                                  <a href="single-product.html">Toy mobile</a>
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
                            <a href="single-product.html">
                              <img src="assets/img/product/pro-5.jpg" alt="" />
                            </a>
                            <div className="product-action">
                              <ul>
                                <li>
                                  <a title="Add To Cart" href="/">
                                    <i className="fa fa-cart-arrow-down"></i>
                                  </a>
                                </li>
                                <li>
                                  <a title="Compare" href="/">
                                    <i className="fa fa-random"></i>
                                  </a>
                                </li>
                                <li>
                                  <a title="Wishlist" href="/">
                                    <i className="fa fa-heart-o"></i>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    title="Quick View"
                                    data-bs-toggle="modal"
                                    data-bs-target="/exampleModal"
                                    href="/"
                                  >
                                    <i className="fa fa-eye"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-content">
                            <div className="pro-title-rating-wrap">
                              <div className="product-title">
                                <h3>
                                  <a href="single-product.html">Awesome vase</a>
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
                            <a href="single-product.html">
                              <img src="assets/img/product/pro-6.jpg" alt="" />
                            </a>
                            <span>Sale</span>
                            <div className="product-action">
                              <ul>
                                <li>
                                  <a title="Add To Cart" href="/">
                                    <i className="fa fa-cart-arrow-down"></i>
                                  </a>
                                </li>
                                <li>
                                  <a title="Compare" href="/">
                                    <i className="fa fa-random"></i>
                                  </a>
                                </li>
                                <li>
                                  <a title="Wishlist" href="/">
                                    <i className="fa fa-heart-o"></i>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    title="Quick View"
                                    data-bs-toggle="modal"
                                    data-bs-target="/exampleModal"
                                    href="/"
                                  >
                                    <i className="fa fa-eye"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-content">
                            <div className="pro-title-rating-wrap">
                              <div className="product-title">
                                <h3>
                                  <a href="single-product.html">Ceramic vase</a>
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
                            <a href="single-product.html">
                              <img src="assets/img/product/pro-7.jpg" alt="" />
                            </a>
                            <div className="product-action">
                              <ul>
                                <li>
                                  <a title="Add To Cart" href="/">
                                    <i className="fa fa-cart-arrow-down"></i>
                                  </a>
                                </li>
                                <li>
                                  <a title="Compare" href="/">
                                    <i className="fa fa-random"></i>
                                  </a>
                                </li>
                                <li>
                                  <a title="Wishlist" href="/">
                                    <i className="fa fa-heart-o"></i>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    title="Quick View"
                                    data-bs-toggle="modal"
                                    data-bs-target="/exampleModal"
                                    href="/"
                                  >
                                    <i className="fa fa-eye"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-content">
                            <div className="pro-title-rating-wrap">
                              <div className="product-title">
                                <h3>
                                  <a href="single-product.html">Smart Watch</a>
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
                            <a href="single-product.html">
                              <img src="assets/img/product/pro-8.jpg" alt="" />
                            </a>
                            <div className="product-action">
                              <ul>
                                <li>
                                  <a title="Add To Cart" href="/">
                                    <i className="fa fa-cart-arrow-down"></i>
                                  </a>
                                </li>
                                <li>
                                  <a title="Compare" href="/">
                                    <i className="fa fa-random"></i>
                                  </a>
                                </li>
                                <li>
                                  <a title="Wishlist" href="/">
                                    <i className="fa fa-heart-o"></i>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    title="Quick View"
                                    data-bs-toggle="modal"
                                    data-bs-target="/exampleModal"
                                    href="/"
                                  >
                                    <i className="fa fa-eye"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-content">
                            <div className="pro-title-rating-wrap">
                              <div className="product-title">
                                <h3>
                                  <a href="single-product.html">History Book</a>
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
                            <a href="single-product.html">
                              <img src="assets/img/product/pro-1.jpg" alt="" />
                            </a>
                            <span>Sale</span>
                            <div className="product-action">
                              <ul>
                                <li>
                                  <a title="Add To Cart" href="/">
                                    <i className="fa fa-cart-arrow-down"></i>
                                  </a>
                                </li>
                                <li>
                                  <a title="Compare" href="/">
                                    <i className="fa fa-random"></i>
                                  </a>
                                </li>
                                <li>
                                  <a title="Wishlist" href="/">
                                    <i className="fa fa-heart-o"></i>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    title="Quick View"
                                    data-bs-toggle="modal"
                                    data-bs-target="/exampleModal"
                                    href="/"
                                  >
                                    <i className="fa fa-eye"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-content">
                            <div className="pro-title-rating-wrap">
                              <div className="product-title">
                                <h3>
                                  <a href="single-product.html">Color Box</a>
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
                            <a href="single-product.html">
                              <img src="assets/img/product/pro-12.jpg" alt="" />
                            </a>
                            <div className="product-action">
                              <ul>
                                <li>
                                  <a title="Add To Cart" href="/">
                                    <i className="fa fa-cart-arrow-down"></i>
                                  </a>
                                </li>
                                <li>
                                  <a title="Compare" href="/">
                                    <i className="fa fa-random"></i>
                                  </a>
                                </li>
                                <li>
                                  <a title="Wishlist" href="/">
                                    <i className="fa fa-heart-o"></i>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    title="Quick View"
                                    data-bs-toggle="modal"
                                    data-bs-target="/exampleModal"
                                    href="/"
                                  >
                                    <i className="fa fa-eye"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-content">
                            <div className="pro-title-rating-wrap">
                              <div className="product-title">
                                <h3>
                                  <a href="single-product.html">Marker Pen</a>
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
                            <a href="single-product.html">
                              <img src="assets/img/product/pro-10.jpg" alt="" />
                            </a>
                            <span>New</span>
                            <div className="product-action">
                              <ul>
                                <li>
                                  <a title="Add To Cart" href="/">
                                    <i className="fa fa-cart-arrow-down"></i>
                                  </a>
                                </li>
                                <li>
                                  <a title="Compare" href="/">
                                    <i className="fa fa-random"></i>
                                  </a>
                                </li>
                                <li>
                                  <a title="Wishlist" href="/">
                                    <i className="fa fa-heart-o"></i>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    title="Quick View"
                                    data-bs-toggle="modal"
                                    data-bs-target="/exampleModal"
                                    href="/"
                                  >
                                    <i className="fa fa-eye"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-content">
                            <div className="pro-title-rating-wrap">
                              <div className="product-title">
                                <h3>
                                  <a href="single-product.html">
                                    Softball Gloves
                                  </a>
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
                            <a href="single-product.html">
                              <img src="assets/img/product/pro-11.jpg" alt="" />
                            </a>
                            <div className="product-action">
                              <ul>
                                <li>
                                  <a title="Add To Cart" href="/">
                                    <i className="fa fa-cart-arrow-down"></i>
                                  </a>
                                </li>
                                <li>
                                  <a title="Compare" href="/">
                                    <i className="fa fa-random"></i>
                                  </a>
                                </li>
                                <li>
                                  <a title="Wishlist" href="/">
                                    <i className="fa fa-heart-o"></i>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    title="Quick View"
                                    data-bs-toggle="modal"
                                    data-bs-target="/exampleModal"
                                    href="/"
                                  >
                                    <i className="fa fa-eye"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-content">
                            <div className="pro-title-rating-wrap">
                              <div className="product-title">
                                <h3>
                                  <a href="single-product.html">Color Box</a>
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
                              <span className="pro-category">
                                Skating Shoes
                              </span>
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
                        <a href="single-product.html">
                          <img src="assets/img/product/pro-3.jpg" alt="" />
                        </a>
                      </div>
                      <div className="shop-list-content">
                        <h4>
                          <a href="single-product.html">Color Box</a>
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
                          fringilla posuere sem eu suscipit. Suspendisse non
                          enim in nisi convallis gravida. In vehicula on
                          telit.Suspendisse non enim in nisi convallis gravida
                          posuere sem eu suscipit. In vehicula on telit.
                        </p>
                        <div className="product-action-list">
                          <ul>
                            <li>
                              <a title="Add To Cart" href="/">
                                <i className="fa fa-cart-arrow-down"></i>
                              </a>
                            </li>
                            <li>
                              <a title="Compare" href="/">
                                <i className="fa fa-random"></i>
                              </a>
                            </li>
                            <li>
                              <a title="Wishlist" href="/">
                                <i className="fa fa-heart-o"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                title="Quick View"
                                data-bs-toggle="modal"
                                data-bs-target="/exampleModal"
                                href="/"
                              >
                                <i className="fa fa-eye"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="shop-list-wrap mb-30">
                      <div className="shop-list-img">
                        <a href="single-product.html">
                          <img src="assets/img/product/pro-2.jpg" alt="" />
                        </a>
                      </div>
                      <div className="shop-list-content">
                        <h4>
                          <a href="single-product.html">Color Box</a>
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
                          fringilla posuere sem eu suscipit. Suspendisse non
                          enim in nisi convallis gravida. In vehicula on
                          telit.Suspendisse non enim in nisi convallis gravida
                          posuere sem eu suscipit. In vehicula on telit.
                        </p>
                        <div className="product-action-list">
                          <ul>
                            <li>
                              <a title="Add To Cart" href="/">
                                <i className="fa fa-cart-arrow-down"></i>
                              </a>
                            </li>
                            <li>
                              <a title="Compare" href="/">
                                <i className="fa fa-random"></i>
                              </a>
                            </li>
                            <li>
                              <a title="Wishlist" href="/">
                                <i className="fa fa-heart-o"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                title="Quick View"
                                data-bs-toggle="modal"
                                data-bs-target="/exampleModal"
                                href="/"
                              >
                                <i className="fa fa-eye"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="shop-list-wrap mb-30">
                      <div className="shop-list-img">
                        <a href="single-product.html">
                          <img src="assets/img/product/pro-5.jpg" alt="" />
                        </a>
                      </div>
                      <div className="shop-list-content">
                        <h4>
                          <a href="single-product.html">Color Box</a>
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
                          fringilla posuere sem eu suscipit. Suspendisse non
                          enim in nisi convallis gravida. In vehicula on
                          telit.Suspendisse non enim in nisi convallis gravida
                          posuere sem eu suscipit. In vehicula on telit.
                        </p>
                        <div className="product-action-list">
                          <ul>
                            <li>
                              <a title="Add To Cart" href="/">
                                <i className="fa fa-cart-arrow-down"></i>
                              </a>
                            </li>
                            <li>
                              <a title="Compare" href="/">
                                <i className="fa fa-random"></i>
                              </a>
                            </li>
                            <li>
                              <a title="Wishlist" href="/">
                                <i className="fa fa-heart-o"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                title="Quick View"
                                data-bs-toggle="modal"
                                data-bs-target="/exampleModal"
                                href="/"
                              >
                                <i className="fa fa-eye"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="shop-list-wrap mb-30">
                      <div className="shop-list-img">
                        <a href="single-product.html">
                          <img src="assets/img/product/pro-6.jpg" alt="" />
                        </a>
                      </div>
                      <div className="shop-list-content">
                        <h4>
                          <a href="single-product.html">Color Box</a>
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
                          fringilla posuere sem eu suscipit. Suspendisse non
                          enim in nisi convallis gravida. In vehicula on
                          telit.Suspendisse non enim in nisi convallis gravida
                          posuere sem eu suscipit. In vehicula on telit.
                        </p>
                        <div className="product-action-list">
                          <ul>
                            <li>
                              <a title="Add To Cart" href="/">
                                <i className="fa fa-cart-arrow-down"></i>
                              </a>
                            </li>
                            <li>
                              <a title="Compare" href="/">
                                <i className="fa fa-random"></i>
                              </a>
                            </li>
                            <li>
                              <a title="Wishlist" href="/">
                                <i className="fa fa-heart-o"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                title="Quick View"
                                data-bs-toggle="modal"
                                data-bs-target="/exampleModal"
                                href="/"
                              >
                                <i className="fa fa-eye"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="shop-list-wrap mb-30">
                      <div className="shop-list-img">
                        <a href="single-product.html">
                          <img src="assets/img/product/pro-10.jpg" alt="" />
                        </a>
                      </div>
                      <div className="shop-list-content">
                        <h4>
                          <a href="single-product.html">Color Box</a>
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
                          fringilla posuere sem eu suscipit. Suspendisse non
                          enim in nisi convallis gravida. In vehicula on
                          telit.Suspendisse non enim in nisi convallis gravida
                          posuere sem eu suscipit. In vehicula on telit.
                        </p>
                        <div className="product-action-list">
                          <ul>
                            <li>
                              <a title="Add To Cart" href="/">
                                <i className="fa fa-cart-arrow-down"></i>
                              </a>
                            </li>
                            <li>
                              <a title="Compare" href="/">
                                <i className="fa fa-random"></i>
                              </a>
                            </li>
                            <li>
                              <a title="Wishlist" href="/">
                                <i className="fa fa-heart-o"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                title="Quick View"
                                data-bs-toggle="modal"
                                data-bs-target="/exampleModal"
                                href="/"
                              >
                                <i className="fa fa-eye"></i>
                              </a>
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
                <a className="prev" href="/">
                  <i className="fa fa-angle-double-left"></i>
                </a>
              </li>
              <li>
                <a className="active" href="/">
                  1
                </a>
              </li>
              <li>
                <a href="/">2</a>
              </li>
              <li>
                <a className="next" href="/">
                  <i className="fa fa-angle-double-right"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <BrandCarouselComponent />

      {/* <!-- Modal --> */}
      <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog">
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
                      <a className="active" data-bs-toggle="tab" href="/pro-1">
                        <img src="assets/img/product/quickview-s1.jpg" alt="" />
                      </a>
                      <a data-bs-toggle="tab" href="/pro-2">
                        <img src="assets/img/product/quickview-s2.jpg" alt="" />
                      </a>
                      <a data-bs-toggle="tab" href="/pro-3">
                        <img src="assets/img/product/quickview-s3.jpg" alt="" />
                      </a>
                      <a data-bs-toggle="tab" href="/pro-4">
                        <img src="assets/img/product/quickview-s2.jpg" alt="" />
                      </a>
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
                      mauris. Integer urna libero, aliquet neque posu
                      ullamcorper fringilla dolor. Maecenas id mattis magna.{" "}
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
                              <a href="/">s</a>
                            </li>
                            <li>
                              <a href="/">m</a>
                            </li>
                            <li>
                              <a href="/">l</a>
                            </li>
                            <li>
                              <a href="/">xl</a>
                            </li>
                            <li>
                              <a href="/">xxl</a>
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
                          value="2"
                        />
                      </div>
                      <div className="pro-details-cart">
                        <a className="default-btn btn-hover" href="/">
                          Add To Cart
                        </a>
                      </div>
                      <div className="pro-details-wishlist">
                        <a className=" btn-hover" href="/">
                          <i className="fa fa-heart-o"></i>
                        </a>
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
      {/* <!-- Modal end --> */}
    </Fragment>
  );
}

export default ShopPage;
