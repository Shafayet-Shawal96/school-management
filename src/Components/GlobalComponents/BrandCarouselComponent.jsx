import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";

function BrandCarouselComponent() {
  return (
    <div className="brand-logo-area pb-130">
      <div className="container">
        <OwlCarousel
          className="brand-logo-active owl-carousel"
          loop
          margin={30}
          nav={false}
          autoplay={false}
          autoplayTimeout={5000}
          animateIn={"fadeIn"}
          animateOut={"fadeOut"}
          items={6}
          dots={false}
          responsive={{
            0: {
              items: 2,
            },
            576: {
              items: 3,
            },
            768: {
              items: 4,
            },
            992: {
              items: 4,
            },
            1000: {
              items: 6,
            },
          }}
        >
          <div className="single-brand-logo">
            <Link to="#">
              <img src="assets/img/brand-logo/1.png" alt="" />
            </Link>
          </div>
          <div className="single-brand-logo">
            <Link to="#">
              <img src="assets/img/brand-logo/2.png" alt="" />
            </Link>
          </div>
          <div className="single-brand-logo">
            <Link to="#">
              <img src="assets/img/brand-logo/3.png" alt="" />
            </Link>
          </div>
          <div className="single-brand-logo">
            <Link to="#">
              <img src="assets/img/brand-logo/4.png" alt="" />
            </Link>
          </div>
          <div className="single-brand-logo">
            <Link to="#">
              <img src="assets/img/brand-logo/5.png" alt="" />
            </Link>
          </div>
          <div className="single-brand-logo">
            <Link to="#">
              <img src="assets/img/brand-logo/6.png" alt="" />
            </Link>
          </div>
          <div className="single-brand-logo">
            <Link to="#">
              <img src="assets/img/brand-logo/2.png" alt="" />
            </Link>
          </div>
        </OwlCarousel>
      </div>
    </div>
  );
}

export default BrandCarouselComponent;
