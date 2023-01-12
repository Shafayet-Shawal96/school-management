import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";

function NextArrowComponent({ onClick }) {
  return (
    <span className="product-dec-icon product-dec-next" onClick={onClick}>
      <i className="fa fa-angle-right"></i>
    </span>
  );
}

function PrevArrowComponent({ onClick }) {
  return (
    <span className="product-dec-icon product-dec-prev " onClick={onClick}>
      <i className="fa fa-angle-left"></i>
    </span>
  );
}

function ProductDecSlickSlider() {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <PrevArrowComponent />,
    nextArrow: <NextArrowComponent />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 479,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider
      {...settings}
      className="mt-15 product-dec-slider dec-slider-overlay"
      id="gallery"
    >
      <Link
        to="#"
        className="active"
        data-image="assets/img/product-details/product-detalis-l2.jpg"
        data-zoom-image="assets/img/product-details/single-product-bl2.jpg"
      >
        <img src="assets/img/product-details/product-detalis-s1.jpg" alt="" />
      </Link>
      <Link
        to="#"
        data-image="assets/img/product-details/product-detalis-l3.jpg"
        data-zoom-image="assets/img/product-details/single-product-bl3.jpg"
      >
        <img src="assets/img/product-details/product-detalis-s2.jpg" alt="" />
      </Link>
      <Link
        to="#"
        data-image="assets/img/product-details/single-product-l4.jpg"
        data-zoom-image="assets/img/product-details/single-product-bl1.jpg"
      >
        <img src="assets/img/product-details/product-detalis-s3.jpg" alt="" />
      </Link>
      <Link
        to="#"
        data-image="assets/img/product-details/product-detalis-l2.jpg"
        data-zoom-image="assets/img/product-details/single-product-bl2.jpg"
      >
        <img src="assets/img/product-details/product-detalis-s1.jpg" alt="" />
      </Link>
      <Link
        to="#"
        data-image="assets/img/product-details/product-detalis-l3.jpg"
        data-zoom-image="assets/img/product-details/single-product-bl3.jpg"
      >
        <img src="assets/img/product-details/product-detalis-s2.jpg" alt="" />
      </Link>
    </Slider>
  );
}

export default ProductDecSlickSlider;
