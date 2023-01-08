import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import PrevArrowComponent from "./PrevArrowComponent";
import NextArrowComponent from "./NextArrowComponent";

function RelatedSliderComponent() {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <PrevArrowComponent />,
    nextArrow: <NextArrowComponent />,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
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
    <Slider
      {...settings}
      className="related-slider-active related-blog-slide pb-80"
    >
      <div className="single-blog" style={{ marginRight: "20px" }}>
        <div className="blog-img">
          <a href="/">
            <img src="assets/img/blog/blog-15.jpg" alt="" />
          </a>
        </div>
        <div className="blog-content-wrap">
          <span>Education</span>
          <div className="blog-content">
            <h4>
              <a href="/">Testing is a great thing.</a>
            </h4>
            <p>doloremque laudan tium, totam ersps uns iste natus</p>
            <div className="blog-meta">
              <ul>
                <li>
                  <a href="/">
                    <i className="fa fa-user"></i>Apparel
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fa fa-comments-o"></i> 10
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="blog-date">
            <a href="/">
              <i className="fa fa-calendar-o"></i> June, 24th 2017
            </a>
          </div>
        </div>
      </div>
      <div className="single-blog" style={{ marginRight: "20px" }}>
        <div className="blog-img">
          <a href="/">
            <img src="assets/img/blog/blog-16.jpg" alt="" />
          </a>
        </div>
        <div className="blog-content-wrap">
          <span>Alumini</span>
          <div className="blog-content">
            <h4>
              <a href="/">A variation of the ordinary.</a>
            </h4>
            <p>doloremque laudan tium, totam ersps uns iste natus</p>
            <div className="blog-meta">
              <ul>
                <li>
                  <a href="/">
                    <i className="fa fa-user"></i> Adrin Azra
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fa fa-comments-o"></i> 10
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="blog-date">
            <a href="/">
              <i className="fa fa-calendar-o"></i> June, 24th 2017
            </a>
          </div>
        </div>
      </div>
      <div className="single-blog" style={{ marginRight: "20px" }}>
        <div className="blog-img">
          <a href="/">
            <img src="assets/img/blog/blog-14.jpg" alt="" />
          </a>
        </div>
        <div className="blog-content-wrap">
          <span>Convocation</span>
          <div className="blog-content">
            <h4>
              <a href="/">In publishing and graphic.</a>
            </h4>
            <p>doloremque laudan tium, totam ersps uns iste natus</p>
            <div className="blog-meta">
              <ul>
                <li>
                  <a href="/">
                    <i className="fa fa-user"></i> Adrin Azra
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fa fa-comments-o"></i> 10
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="blog-date">
            <a href="/">
              <i className="fa fa-calendar-o"></i> June, 24th 2017
            </a>
          </div>
        </div>
      </div>
      <div className="single-blog" style={{ marginRight: "20px" }}>
        <div className="blog-img">
          <a href="/">
            <img src="assets/img/blog/blog-15.jpg" alt="" />
          </a>
        </div>
        <div className="blog-content-wrap">
          <span>BBA</span>
          <div className="blog-content">
            <h4>
              <a href="/">Learn English in ease.</a>
            </h4>
            <p>doloremque laudan tium, totam ersps uns iste natus</p>
            <div className="blog-meta">
              <ul>
                <li>
                  <a href="/">
                    <i className="fa fa-user"></i> Adrin Azra
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fa fa-comments-o"></i> 10
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="blog-date">
            <a href="/">
              <i className="fa fa-calendar-o"></i> June, 24th 2017
            </a>
          </div>
        </div>
      </div>
    </Slider>
  );
}

export default RelatedSliderComponent;
