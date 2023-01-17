import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import PrevArrowComponent from "../GlobalComponents/PrevArrowComponent";
import NextArrowComponent from "../GlobalComponents/NextArrowComponent";
import { Link } from "react-router-dom";

function SingleCourse({ course }) {
  return (
    <div className="single-course">
      <div className="course-img">
        <Link to={`/courses/${course.id}`}>
          <img className="animated" src={course.cardImg} alt="" />
        </Link>
        {course.status ? <span>{course.status}</span> : ""}
      </div>
      <div className="course-content">
        <h4>
          <Link to={`/courses/${course.id}`}>{course.name}</Link>
        </h4>
        <p>{`${course.info.slice(0, 30)} ...`}</p>
      </div>
      <div className="course-position-content">
        <div className="credit-duration-wrap">
          <div className="sin-credit-duration">
            <i className="fa fa-diamond"></i>
            <span>Credits : {course.credits}</span>
          </div>
          <div className="sin-credit-duration">
            <i className="fa fa-clock-o"></i>
            <span>Duration : {course.duration}</span>
          </div>
        </div>
        <div className="course-btn">
          <Link className="default-btn" to="#">
            APPLY NOW
          </Link>
        </div>
      </div>
    </div>
  );
}

function CourseSlider({ courses }) {
  const settings = {
    infinite: true,
    slidesToShow: 4,
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
        breakpoint: 991.5,
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
    <Slider {...settings} className="course-slider-active-3">
      {courses.map((course) => (
        <SingleCourse key={course.id} course={course} />
      ))}
    </Slider>
  );
}

export default CourseSlider;
