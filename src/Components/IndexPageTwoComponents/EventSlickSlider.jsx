import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import PrevArrowComponent from "./PrevArrowComponent";
import NextArrowComponent from "./NextArrowComponent";

function EventSlickSlider() {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrowComponent />,
    nextArrow: <NextArrowComponent />,
    responsive: [
      {
        breakpoint: 992,
        settings: {},
      },
      {
        breakpoint: 768,
        settings: {},
      },
      {
        breakpoint: 767,
        settings: {},
      },
      {
        breakpoint: 420,
        settings: {},
      },
    ],
  };
  return (
    <Slider {...settings} className="event-active-2 ml-70">
      <div className="single-event single-event-2">
        <div className="event-img">
          <a href="event-details.html">
            <img src="assets/img/event/event-4.jpg" alt="" />
          </a>
          <div className="event-date-wrap">
            <span className="event-date">1st</span>
            <span>Dec</span>
          </div>
        </div>
        <div className="event-content">
          <h3>
            <a href="event-details.html">Aempor incididunt ut labore ejam.</a>
          </h3>
          <p>
            Pvolupttem accusantium doloremque laudantium, totam erspiciatis unde
            omnis iste natus error .
          </p>
          <div className="event-meta-wrap">
            <div className="event-meta">
              <i className="fa fa-location-arrow"></i>
              <span>Mascot Plaza ,Uttara</span>
            </div>
            <div className="event-meta">
              <i className="fa fa-clock-o"></i>
              <span>10:30 am</span>
            </div>
          </div>
        </div>
      </div>
      <div className="single-event single-event-2">
        <div className="event-img">
          <a href="event-details.html">
            <img src="assets/img/event/event-4.jpg" alt="" />
          </a>
          <div className="event-date-wrap">
            <span className="event-date">1st</span>
            <span>Dec</span>
          </div>
        </div>
        <div className="event-content">
          <h3>
            <a href="event-details.html">Social Sciences & Education.</a>
          </h3>
          <p>
            Pvolupttem accusantium doloremque laudantium, totam erspiciatis unde
            omnis iste natus error .
          </p>
          <div className="event-meta-wrap">
            <div className="event-meta">
              <i className="fa fa-location-arrow"></i>
              <span>Shuvastu ,Badda</span>
            </div>
            <div className="event-meta">
              <i className="fa fa-clock-o"></i>
              <span>10:30 am</span>
            </div>
          </div>
        </div>
      </div>
    </Slider>
  );
}

export default EventSlickSlider;
