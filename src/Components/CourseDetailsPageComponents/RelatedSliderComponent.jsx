import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import PrevArrowComponent from "../GlobalComponents/PrevArrowComponent";
import NextArrowComponent from "../GlobalComponents/NextArrowComponent";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function SingleCourse({ course }) {
  return (
    <div className="single-course">
      <div className="course-img">
        <Link to={`/courses/${course.id}`}>
          <img className="animated" src={course.cardImg} alt="" />
        </Link>
      </div>
      <div className="course-content">
        <h4>
          <Link to={`/courses/${course.id}`}>{course.name}</Link>
        </h4>
        <p>{course.info}</p>
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
          <Link className="default-btn" to="/">
            APPLY NOW
          </Link>
        </div>
      </div>
    </div>
  );
}

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
  const params = useParams();
  const UIObject = useSelector((state) => state.UISlice.UI);
  const courses = UIObject[0].courses;
  const course = courses.find(
    (course) => course.id === Number(params.courseId)
  );
  const category = course.category;
  const othercourses = courses.filter(
    (singlecourse) =>
      singlecourse.category === category && singlecourse.id !== course.id
  );

  return (
    <Slider {...settings} className="related-slider-active">
      {othercourses.map((course) => (
        <SingleCourse key={course.id} course={course} />
      ))}
    </Slider>
  );
}

export default RelatedSliderComponent;
