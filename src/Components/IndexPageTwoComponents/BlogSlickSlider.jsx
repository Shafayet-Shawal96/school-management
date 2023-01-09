import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import PrevArrowComponent from "../GlobalComponents/PrevArrowComponent";
import NextArrowComponent from "../GlobalComponents/NextArrowComponent";

function BlogSlickSlider() {
  const settings = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: <PrevArrowComponent />,
    nextArrow: <NextArrowComponent />,
    responsive: [
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings} className="blog-active">
      <div className="single-blog">
        <div className="blog-img">
          <a href="blog-details.html">
            <img src="assets/img/blog/blog-1.jpg" alt="" />
          </a>
        </div>
        <div className="blog-content-wrap">
          <span>Education</span>
          <div className="blog-content">
            <h4>
              <a href="blog-details.html">Testing is a great thing.</a>
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
                    <i className="fa fa-comments-o"></i> 22
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="blog-date">
            <a href="/">
              <i className="fa fa-calendar-o"></i> Jun, 24th 2018
            </a>
          </div>
        </div>
      </div>
      <div className="single-blog">
        <div className="blog-img">
          <a href="blog-details.html">
            <img src="assets/img/blog/blog-2.jpg" alt="" />
          </a>
        </div>
        <div className="blog-content-wrap">
          <span>Education</span>
          <div className="blog-content">
            <h4>
              <a href="blog-details.html">Learn English in ease.</a>
            </h4>
            <p>doloremque laudan tium, totam ersps uns iste natus</p>
            <div className="blog-meta">
              <ul>
                <li>
                  <a href="/">
                    <i className="fa fa-user"></i> Tayeb Jon
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fa fa-comments-o"></i> 12
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="blog-date">
            <a href="/">
              <i className="fa fa-calendar-o"></i> Feb, 10th 2017
            </a>
          </div>
        </div>
      </div>
      <div className="single-blog">
        <div className="blog-img">
          <a href="blog-details.html">
            <img src="assets/img/blog/blog-3.jpg" alt="" />
          </a>
        </div>
        <div className="blog-content-wrap">
          <span>Education</span>
          <div className="blog-content">
            <h4>
              <a href="blog-details.html">In publishing and graphic.</a>
            </h4>
            <p>doloremque laudan tium, totam ersps uns iste natus</p>
            <div className="blog-meta">
              <ul>
                <li>
                  <a href="/">
                    <i className="fa fa-user"></i> Md Tamim
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fa fa-comments-o"></i> 20
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="blog-date">
            <a href="/">
              <i className="fa fa-calendar-o"></i> Oct, 26th 2017
            </a>
          </div>
        </div>
      </div>
    </Slider>
  );
}

export default BlogSlickSlider;
