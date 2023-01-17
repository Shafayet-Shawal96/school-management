import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import PrevArrowComponent from "../GlobalComponents/PrevArrowComponent";
import NextArrowComponent from "../GlobalComponents/NextArrowComponent";
import { useSelector } from "react-redux";

function SingleEvent({ notice, authorName }) {
  return (
    <div className="single-blog">
      <div className="blog-img">
        <a href="/">
          <img src={`.${notice.noticeImage}`} alt="" />
        </a>
      </div>
      <div className="blog-content-wrap">
        <span>{notice.category}</span>
        <div className="blog-content">
          <h4>
            <a href="/">{notice.title}</a>
          </h4>
          <p>{`${notice.text.slice(0, 50)} ...`}</p>
          <div className="blog-meta">
            <ul>
              <li>
                <a href="/">
                  <i className="fa fa-user"></i>
                  {authorName}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="blog-date">
          <a href="/">
            <i className="fa fa-calendar-o"></i> {notice.publishDate}
          </a>
        </div>
      </div>
    </div>
  );
}

function RelatedSliderComponent() {
  const UIObject = useSelector((state) => state.UISlice.UI);
  const authorDetails = UIObject[0].authorDetails;
  const notices = UIObject[0].notices;
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <PrevArrowComponent />,
    nextArrow: <NextArrowComponent />,
    responsive: [
      {
        breakpoint: 1200.5,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 991.5,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767.5,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 420.5,
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
      {notices.map((notice) => (
        <SingleEvent
          key={notice.id}
          notice={notice}
          authorName={authorDetails.name}
        />
      ))}
    </Slider>
  );
}

export default RelatedSliderComponent;
