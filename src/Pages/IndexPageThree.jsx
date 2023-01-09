import React, { Fragment } from "react";
import BrandCarouselComponent from "../Components/GlobalComponents/BrandCarouselComponent";
import BannerArea from "../Components/IndexPageThreeComponents/BannerArea";
import PopularProductArea from "../Components/IndexPageThreeComponents/PopularProductArea";
import ProductArea from "../Components/IndexPageThreeComponents/ProductArea";
import SliderArea from "../Components/IndexPageThreeComponents/SliderArea";
import FooterLayout from "../Layout/FooterLayout";
import HeaderLayout from "../Layout/HeaderLayout";

function IndexPageThree() {
  return (
    <Fragment>
      <HeaderLayout />
      <SliderArea />
      <BannerArea />
      <ProductArea />
      <PopularProductArea />
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
      <FooterLayout />

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

export default IndexPageThree;
