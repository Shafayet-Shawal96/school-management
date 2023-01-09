import React, { Fragment } from "react";
import BrandCarouselComponent from "../Components/GlobalComponents/BrandCarouselComponent";
import BannerArea from "../Components/IndexPageThreeComponents/BannerArea";
import BestSaleArea from "../Components/IndexPageThreeComponents/BestSaleArea";
import DiscountArea from "../Components/IndexPageThreeComponents/DiscountArea";
import Modal from "../Components/IndexPageThreeComponents/Modal";
import PopularProductArea from "../Components/IndexPageThreeComponents/PopularProductArea";
import ProductArea from "../Components/IndexPageThreeComponents/ProductArea";
import SliderArea from "../Components/IndexPageThreeComponents/SliderArea";
import FooterLayout from "../Layout/FooterLayout";
import HeaderLayout from "../Layout/HeaderLayout";

function IndexPageThree() {
  return (
    <Fragment>
      <SliderArea />
      <BannerArea />
      <ProductArea />
      <PopularProductArea />
      <DiscountArea />
      <BestSaleArea />
      <BrandCarouselComponent />
      <div className="slider-area ">
        <div className="slider-active-2 owl-carousel nav-style-2">
          <div
            className="single-slider slider-height-3 bg-img pt-170"
            // style="background-image:url(assets/img/slider/slider-bg.jpg);"
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="slider-single-img2 slider-animated-2">
                    <img
                      className="animated"
                      src="assets/img/slider/single-slide-2.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12 col-sm-6">
                  <div className="slider-content-3 slider-animated-2 pt-115 ml-55">
                    <h1 className="animated">
                      <span className="text-blue">S</span>hop
                      <span className="text-pink">P</span>ing Time
                    </h1>
                    <p className="animated">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do tempor eiusmod incididunt ut labore et dolore magna
                      aliqua.{" "}
                    </p>
                    <div className="slider-btn">
                      <a
                        className="animated default-btn btn-green-color"
                        href="cart.html"
                      >
                        ADD TO CART
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="single-slider slider-height-3 bg-img pt-170"
            // style="background-image:url(assets/img/slider/slider-5.jpg);"
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="slider-single-img2 slider-animated-2">
                    <img
                      className="animated"
                      src="assets/img/slider/single-slide-2.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12 col-sm-6">
                  <div className="slider-content-3 slider-animated-2 pt-115 ml-55">
                    <h1 className="animated">
                      <span className="text-blue">S</span>hop
                      <span className="text-pink">P</span>ing Time
                    </h1>
                    <p className="animated">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do tempor eiusmod incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <div className="slider-btn">
                      <a
                        className="animated default-btn btn-green-color"
                        href="cart.html"
                      >
                        ADD TO CART
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="banner-area pt-130 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4">
              <div className="single-banner mb-30">
                <div className="banner-img">
                  <a href="/">
                    <img src="assets/img/banner/book-1.png" alt="" />
                  </a>
                </div>
                <div className="banner-content">
                  <h5>Adventure</h5>
                  <h2>BOOK 2018</h2>
                  <div className="banner-shape">
                    <img src="assets/img/icon-img/banner-shape.png" alt="" />
                  </div>
                  <div className="banner-btn">
                    <a className="default-btn" href="/">
                      ADD TO CART
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="single-banner second-banner mb-30">
                <div className="banner-img">
                  <a href="/">
                    <img src="assets/img/banner/book-2.png" alt="" />
                  </a>
                </div>
                <div className="banner-content">
                  <h5>Adventure</h5>
                  <h2>BOOK 2018</h2>
                  <div className="banner-shape">
                    <img src="assets/img/icon-img/banner-shape.png" alt="" />
                  </div>
                  <div className="banner-btn">
                    <a className="default-btn" href="/">
                      ADD TO CART
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="single-banner mb-30">
                <div className="banner-img">
                  <a href="/">
                    <img src="assets/img/banner/book-3.png" alt="" />
                  </a>
                </div>
                <div className="banner-content">
                  <h5>Adventure</h5>
                  <h2>BOOK 2018</h2>
                  <div className="banner-shape">
                    <img src="assets/img/icon-img/banner-shape.png" alt="" />
                  </div>
                  <div className="banner-btn">
                    <a className="default-btn" href="/">
                      ADD TO CART
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="producta-area pb-130">
        <div className="container">
          <div className="section-title mb-75 mrg-bottom-small">
            <h2>
              New <span>Arrival</span>
            </h2>
            <p>
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim <br />
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip{" "}
            </p>
          </div>
          <div className="producta-active">
            <div className="product-wrap">
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
            <div className="product-wrap">
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
            <div className="product-wrap">
              <div className="product-img">
                <a href="single-product.html">
                  <img src="assets/img/product/pro-3.jpg" alt="" />
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
                  <span className="pro-price">$30</span>
                </div>
              </div>
            </div>
            <div className="product-wrap">
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
            <div className="product-wrap">
              <div className="product-img">
                <a href="single-product.html">
                  <img src="assets/img/product/pro-2.jpg" alt="" />
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
                  <span className="pro-price">$50</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="popular-product-area pb-100">
        <div className="container">
          <div className="section-title mb-75">
            <h2>
              <span>Most</span> Popular{" "}
            </h2>
            <p>
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim <br />
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip{" "}
            </p>
          </div>
          <div className="admission-tab-list tab-list-2 nav pb-50">
            <a
              className="active"
              href="/course-categorie-1"
              data-bs-toggle="tab"
            >
              <h4>all </h4>
            </a>
            <a href="/course-categorie-2" data-bs-toggle="tab">
              <h4> Undergraduate Courses </h4>
            </a>
            <a href="/course-categorie-3" data-bs-toggle="tab">
              <h4>Graduate Courses </h4>
            </a>
            <a href="/course-categorie-4" data-bs-toggle="tab">
              <h4>Diploma Courses </h4>
            </a>
          </div>
          <div className="tab-content jump">
            <div className="tab-pane active" id="course-categorie-1">
              <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6">
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
                        <span className="pro-price">$60</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
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
                        <span className="pro-price">$10</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
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
                        <span className="pro-price">$20</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
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
                        <span className="pro-price">$30</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane" id="course-categorie-2">
              <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6">
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
                        <span className="pro-price">$40</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
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
                        <span className="pro-price">$50</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
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
                        <span className="pro-price">$60</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
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
                        <span className="pro-price">$70</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane" id="course-categorie-3">
              <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6">
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
                        <span className="pro-price">$80</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
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
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="product-wrap mb-30">
                    <div className="product-img">
                      <a href="single-product.html">
                        <img src="assets/img/product/pro-6.jpg" alt="" />
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
                        <span className="pro-category">Drawing</span>
                        <span className="pro-price">$20</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="product-wrap mb-30">
                    <div className="product-img">
                      <a href="single-product.html">
                        <img src="assets/img/product/pro-5.jpg" alt="" />
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
                        <span className="pro-price">$30</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane" id="course-categorie-4">
              <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6">
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
                        <span className="pro-price">$40</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
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
                        <span className="pro-price">$50</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
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
                        <span className="pro-price">$60</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
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
                        <span className="pro-price">$70</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="discount-area bg-img pt-110 pb-90"
        // style="background-image:url(assets/img/bg/bg-7.jpg);"
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
                  <a className="default-btn" href="/">
                    ADD TO CART
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="best-sale-area pt-130 pb-100">
        <div className="container">
          <div className="section-title mb-75">
            <h2>
              Best <span>Sale</span>
            </h2>
            <p>
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim <br />
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip{" "}
            </p>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
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
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="product-wrap mb-30">
                <div className="product-img">
                  <a href="single-product.html">
                    <img src="assets/img/product/pro-9.jpg" alt="" />
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
                    <span className="pro-price">$10</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="product-wrap mb-30">
                <div className="product-img">
                  <a href="single-product.html">
                    <img src="assets/img/product/pro-10.jpg" alt="" />
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
                        <a href="single-product.html">Softball Gloves</a>
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
                        <a href="single-product.html">Skating Shoes</a>
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
      <BrandCarouselComponent />

      {/* <!-- Modal --> */}
      <Modal />
      {/* <!-- Modal end --> */}
    </Fragment>
  );
}

export default IndexPageThree;
