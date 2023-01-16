import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import PrevArrowComponent from "../GlobalComponents/PrevArrowComponent";
import NextArrowComponent from "../GlobalComponents/NextArrowComponent";

function SingleEvent({ eventObj, authorDetails }) {
  return (
    <div className="single-blog">
      <div className="blog-img">
        <a href="/">
          <img src={eventObj.eventImage} alt="" />
        </a>
      </div>
      <div className="blog-content-wrap">
        <span>{eventObj.category}</span>
        <div className="blog-content">
          <h4>
            <a href="/">{eventObj.title}</a>
          </h4>
          <p>{`${eventObj.text.slice(0, 50)} ...`}</p>
          <div className="blog-meta">
            <ul>
              <li>
                <a href="/">
                  <i className="fa fa-user"></i>
                  {authorDetails.name}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="blog-date">
          <a href="/">
            <i className="fa fa-calendar-o"></i> {eventObj.publishDate}
          </a>
        </div>
      </div>
    </div>
  );
}

function RelatedSliderComponent({ allEvents, authorDetails }) {
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
      {allEvents.map((eventObj) => (
        <SingleEvent
          key={eventObj.id}
          eventObj={eventObj}
          authorDetails={authorDetails}
        />
      ))}
    </Slider>
  );
}

export default RelatedSliderComponent;
