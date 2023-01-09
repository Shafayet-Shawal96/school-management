import React from "react";

function PopularProductArea() {
  return (
    <div className="popular-product-area pb-100">
      <div className="container">
        <div className="section-title mb-75">
          <h2>
            <span>Most</span> Popular{" "}
          </h2>
          <p>
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim{" "}
            <br />
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip{" "}
          </p>
        </div>
        <div className="admission-tab-list tab-list-2 nav pb-50">
          <a className="active" href="/course-categorie-1" data-bs-toggle="tab">
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
  );
}

export default PopularProductArea;