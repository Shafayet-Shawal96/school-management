import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import PrevArrowComponent from "../GlobalComponents/PrevArrowComponent";
import NextArrowComponent from "../GlobalComponents/NextArrowComponent";
import { Link } from "react-router-dom";

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
          <Link to="blog-details.html">
            <img src="assets/img/blog/blog-1.jpg" alt="" />
          </Link>
        </div>
        <div className="blog-content-wrap">
          <span>Education</span>
          <div className="blog-content">
            <h4>
              <Link to="blog-details.html">Testing is a great thing.</Link>
            </h4>
            <p>doloremque laudan tium, totam ersps uns iste natus</p>
            <div className="blog-meta">
              <ul>
                <li>
                  <Link to="#">
                    <i className="fa fa-user"></i> Adrin Azra
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fa fa-comments-o"></i> 22
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="blog-date">
            <Link to="#">
              <i className="fa fa-calendar-o"></i> Jun, 24th 2018
            </Link>
          </div>
        </div>
      </div>
      <div className="single-blog">
        <div className="blog-img">
          <Link to="blog-details.html">
            <img src="assets/img/blog/blog-2.jpg" alt="" />
          </Link>
        </div>
        <div className="blog-content-wrap">
          <span>Education</span>
          <div className="blog-content">
            <h4>
              <Link to="blog-details.html">Learn English in ease.</Link>
            </h4>
            <p>doloremque laudan tium, totam ersps uns iste natus</p>
            <div className="blog-meta">
              <ul>
                <li>
                  <Link to="#">
                    <i className="fa fa-user"></i> Tayeb Jon
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fa fa-comments-o"></i> 12
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="blog-date">
            <Link to="#">
              <i className="fa fa-calendar-o"></i> Feb, 10th 2017
            </Link>
          </div>
        </div>
      </div>
      <div className="single-blog">
        <div className="blog-img">
          <Link to="blog-details.html">
            <img src="assets/img/blog/blog-3.jpg" alt="" />
          </Link>
        </div>
        <div className="blog-content-wrap">
          <span>Education</span>
          <div className="blog-content">
            <h4>
              <Link to="blog-details.html">In publishing and graphic.</Link>
            </h4>
            <p>doloremque laudan tium, totam ersps uns iste natus</p>
            <div className="blog-meta">
              <ul>
                <li>
                  <Link to="#">
                    <i className="fa fa-user"></i> Md Tamim
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fa fa-comments-o"></i> 20
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="blog-date">
            <Link to="#">
              <i className="fa fa-calendar-o"></i> Oct, 26th 2017
            </Link>
          </div>
        </div>
      </div>
    </Slider>
  );
}

export default BlogSlickSlider;
