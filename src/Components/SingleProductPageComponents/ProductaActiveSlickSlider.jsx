import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";

function NextArrowComponent({ onClick }) {
  return (
    <span className="b-navigation b-navigation-next active" onClick={onClick}>
      <i className="fa fa-angle-right"></i>
    </span>
  );
}

function PrevArrowComponent({ onClick }) {
  return (
    <span className="b-navigation b-navigation-prev " onClick={onClick}>
      <i className="fa fa-angle-left"></i>
    </span>
  );
}

function ProductaActiveSlickSlider() {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <PrevArrowComponent />,
    nextArrow: <NextArrowComponent />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings} className="producta-active mb-100">
      <div className="product-wrap">
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
      <div className="product-wrap">
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
            <span className="pro-price">$20</span>
          </div>
        </div>
      </div>
      <div className="product-wrap">
        <div className="product-img">
          <Link to="single-product.html">
            <img src="assets/img/product/pro-3.jpg" alt="" />
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
                <Link to="single-product.html">Color Pencil</Link>
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
      <div className="product-wrap">
        <div className="product-img">
          <Link to="single-product.html">
            <img src="assets/img/product/pro-2.jpg" alt="" />
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
                <Link to="single-product.html">Color Pencil</Link>
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
    </Slider>
  );
}

export default ProductaActiveSlickSlider;
