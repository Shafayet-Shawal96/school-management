import React, { Fragment } from "react";
import BreadcrumbArea from "../Layout/BreadcrumbArea";
import FooterLayout from "../Layout/FooterLayout";
import HeaderLayout from "../Layout/HeaderLayout";

const breadcrumbObj = {
  title: "Product Details",
  subtitle: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
  eiusmod tempor incididunt ut labore .`,
  pageName: "Product Details",
  overlayClass: "breadcrumb-overly-4",
  breadcrumbImage: {
    backgroundImage: `url(./assets/img/bg/breadcrumb-bg-4.jpg)`,
  },
};

function SingleProductPage() {
  return (
    <Fragment>
      <BreadcrumbArea breadcrumbObj={breadcrumbObj} />
      <div className="single-product-area pt-130 pb-130">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="product-details-img">
                <img
                  className="zoompro"
                  src="assets/img/product-details/product-detalis-l2.jpg"
                  data-zoom-image="assets/img/product-details/single-product-bl2.jpg"
                  alt="zoom"
                />
                <div
                  id="gallery"
                  className="mt-15 product-dec-slider dec-slider-overlay"
                >
                  {/* <a className="active"
                    data-image="assets/img/product-details/product-detalis-l2.jpg"
                    data-zoom-image="assets/img/product-details/single-product-bl2.jpg"
                  >
                    <img
                      src="assets/img/product-details/product-detalis-s1.jpg"
                      alt=""
                    />
                  </a> */}
                  {/* <a
                    data-image="assets/img/product-details/product-detalis-l3.jpg"
                    data-zoom-image="assets/img/product-details/single-product-bl3.jpg"
                  >
                    <img
                      src="assets/img/product-details/product-detalis-s2.jpg"
                      alt=""
                    />
                  </a> */}
                  {/* <a
                    data-image="assets/img/product-details/single-product-l4.jpg"
                    data-zoom-image="assets/img/product-details/single-product-bl1.jpg"
                  >
                    <img
                      src="assets/img/product-details/product-detalis-s3.jpg"
                      alt=""
                    />
                  </a> */}
                  {/* <a
                    data-image="assets/img/product-details/product-detalis-l2.jpg"
                    data-zoom-image="assets/img/product-details/single-product-bl2.jpg"
                  >
                    <img
                      src="assets/img/product-details/product-detalis-s1.jpg"
                      alt=""
                    />
                  </a> */}
                  {/* <a
                    data-image="assets/img/product-details/product-detalis-l3.jpg"
                    data-zoom-image="assets/img/product-details/single-product-bl3.jpg"
                  >
                    <img
                      src="assets/img/product-details/product-detalis-s2.jpg"
                      alt=""
                    />
                  </a> */}
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-7">
              <div className="product-details-content pl-30">
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunca
                  augue quis neque ultrices placerat sit amet quis mauris.
                  Integer urna libero, aliquet neque posu ullamcorper fringilla
                  dolor. Maecenas id mattis magna.{" "}
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
                <div className="pro-details-info-wrap">
                  <div className="pro-details-info-list">
                    <ul>
                      <li className="pro-details-info-title">SKU</li>
                      <li>00010002</li>
                    </ul>
                  </div>
                  <div className="pro-details-info-list">
                    <ul>
                      <li className="pro-details-info-title">Categories</li>
                      <li>
                        <a href="/">Women,</a>
                      </li>
                      <li>
                        <a href="/">Dress</a>
                      </li>
                    </ul>
                  </div>
                  <div className="pro-details-info-list">
                    <ul>
                      <li className="pro-details-info-title">Tags</li>
                      <li>
                        <a href="/">Clothing,</a>
                      </li>
                      <li>
                        <a href="/">Summer</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="pro-details-social">
                  <ul>
                    <li>
                      <a className="facebook" href="/">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a className="youtube" href="/">
                        <i className="fa fa-youtube-play"></i>
                      </a>
                    </li>
                    <li>
                      <a className="twitter" href="/">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a className="google" href="/">
                        <i className="fa fa-google-plus"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="description-review-area pb-120">
        <div className="container">
          <div className="description-review-wrapper">
            <div className="description-review-topbar nav">
              <a className="active" data-bs-toggle="tab" href="/des-details1">
                Description
              </a>
              <a data-bs-toggle="tab" href="/des-details2">
                Additional information
              </a>
              <a data-bs-toggle="tab" href="/des-details3">
                Reviews
              </a>
            </div>
            <div className="tab-content description-review-bottom">
              <div id="des-details1" className="tab-pane active">
                <div className="product-description-wrapper">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas pulvinar massa metus, vitae pharetra lacus sodales
                    sit amet. Morbi accumsan suscipit lacus, sit amet egestas
                    magna elemen tum nec. Mauris urna enim, rutrum in iaculis
                    nec, vehicula ut libero. Etiam sit amet ex orci. Duis eget
                    consectetur libero, eget interdum metus. Aliquam rhoncus
                    porttitor felis, a tincidunt ex scel erisque et. Morbi
                    faucibus venenatis dignissim. Nullam ut facilisis mauris. In
                    hac habitasse platea dictumst.
                  </p>
                  <p>
                    Pellentesque luctus augue ipsum, ut tincidunt odio tempus
                    at. Nullam ac quam venenatis, bibendum eros at, placerat
                    risus. Maecenas cursus elit non nisl finibus congue. Donec
                    posuere fringilla ante eu vehicula. Fusce sed erat quis nisi
                    gravida vehicula id vitae dolor. In at libero pretium,
                    maximus lorem vitae, pharetra turpis feugiat facilisis
                    ullamcorper.{" "}
                  </p>
                </div>
              </div>
              <div id="des-details2" className="tab-pane ">
                <div className="product-anotherinfo-wrapper">
                  <ul>
                    <li>
                      <span>Weight</span> 400 g
                    </li>
                    <li>
                      <span>Dimensions</span>10 x 10 x 15 cm{" "}
                    </li>
                    <li>
                      <span>Materials</span> 60% cotton, 40% polyester
                    </li>
                    <li>
                      <span>Other Info</span> American heirloom jean shorts pug
                      seitan letterpress
                    </li>
                  </ul>
                </div>
              </div>
              <div id="des-details3" className="tab-pane">
                <div className="row">
                  <div className="col-lg-7">
                    <div className="review-wrapper">
                      <div className="single-review">
                        <div className="review-img">
                          <img src="assets/img/blog/recent-post-1.jpg" alt="" />
                        </div>
                        <div className="review-content">
                          <div className="review-top-wrap">
                            <div className="review-left">
                              <div className="review-name">
                                <h4>White Lewis</h4>
                              </div>
                              <div className="review-rating">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                              </div>
                            </div>
                            <div className="review-left">
                              <a href="/">Reply</a>
                            </div>
                          </div>
                          <div className="review-bottom">
                            <p>
                              Vestibulum ante ipsum primis aucibus orci
                              luctustrices posuere cubilia Curae Suspendisse
                              viverra ed viverra. Mauris ullarper euismod
                              vehicula. Phasellus quam nisi, congue id nulla
                              nec, convallis conval lis leo. Maecenas bibendum
                              bibendum larius.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="single-review child-review">
                        <div className="review-img">
                          <img src="assets/img/blog/recent-post-2.jpg" alt="" />
                        </div>
                        <div className="review-content">
                          <div className="review-top-wrap">
                            <div className="review-left">
                              <div className="review-name">
                                <h4>White Lewis</h4>
                              </div>
                              <div className="review-rating">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                              </div>
                            </div>
                            <div className="review-left">
                              <a href="/">Reply</a>
                            </div>
                          </div>
                          <div className="review-bottom">
                            <p>
                              Vestibulum ante ipsum primis aucibus orci
                              luctustrices posuere cubilia Curae Sus pen disse
                              viverra ed viverra. Mauris ullarper euismod
                              vehicula.{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="ratting-form-wrapper pl-50 ratting-nagative-mrg">
                      <h3>Add a Review</h3>
                      <div className="ratting-form">
                        <form action="/">
                          <div className="star-box">
                            <span>Your rating:</span>
                            <div className="ratting-star">
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="rating-form-style mb-10">
                                <input placeholder="Name" type="text" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="rating-form-style mb-10">
                                <input placeholder="Email" type="email" />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="rating-form-style form-submit">
                                <textarea
                                  name="Your Review"
                                  placeholder="Message"
                                ></textarea>
                                <input type="submit" value="Submit" />
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="related-course">
        <div className="container">
          <div className="related-title mb-45 related-mrg-small">
            <h3>Related products</h3>
            <p>
              Hempor incididunt ut labore et dolore mm, itation ullamco laboris
              <br />
              nisi ut aliquip.
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
      <div className="brand-logo-area pt-130 pb-130">
        <div className="container">
          <div className="brand-logo-active owl-carousel">
            <div className="single-brand-logo">
              <a href="/">
                <img src="assets/img/brand-logo/1.png" alt="" />
              </a>
            </div>
            <div className="single-brand-logo">
              <a href="/">
                <img src="assets/img/brand-logo/2.png" alt="" />
              </a>
            </div>
            <div className="single-brand-logo">
              <a href="/">
                <img src="assets/img/brand-logo/3.png" alt="" />
              </a>
            </div>
            <div className="single-brand-logo">
              <a href="/">
                <img src="assets/img/brand-logo/4.png" alt="" />
              </a>
            </div>
            <div className="single-brand-logo">
              <a href="/">
                <img src="assets/img/brand-logo/5.png" alt="" />
              </a>
            </div>
            <div className="single-brand-logo">
              <a href="/">
                <img src="assets/img/brand-logo/6.png" alt="" />
              </a>
            </div>
            <div className="single-brand-logo">
              <a href="/">
                <img src="assets/img/brand-logo/2.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>

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
                <div className="col-md-5 col-sm-5 col-xs-12">
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
                <div className="col-md-7 col-sm-7 col-xs-12">
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

export default SingleProductPage;
