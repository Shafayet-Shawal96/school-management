import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";

const courseContent = [
  {
    cardBackgroundImage: "assets/img/course/course-1.jpg",
    cardHeading: "Addmission Going On",
    cardBodyHeading: "Apparel Manufacturing",
    cardBodyParagraph:
      "magna aliqua. Ut enim ad minim veniam, nisi ut aliquiptempor incid.",
    cardFooterCredit: "Credits : 125",
    cardFooterTime: "Duration : 4yrs",
  },
  {
    cardBackgroundImage: "assets/img/course/course-1.jpg",
    cardHeading: "Addmission Going On",
    cardBodyHeading: "Apparel Manufacturing",
    cardBodyParagraph:
      "magna aliqua. Ut enim ad minim veniam, nisi ut aliquiptempor incid.",
    cardFooterCredit: "Credits : 125",
    cardFooterTime: "Duration : 4yrs",
  },

  {
    cardBackgroundImage: "assets/img/course/course-1.jpg",
    cardHeading: "Addmission Going On",
    cardBodyHeading: "Apparel Manufacturing",
    cardBodyParagraph:
      "magna aliqua. Ut enim ad minim veniam, nisi ut aliquiptempor incid.",
    cardFooterCredit: "Credits : 125",
    cardFooterTime: "Duration : 4yrs",
  },
  {
    cardBackgroundImage: "assets/img/course/course-1.jpg",
    cardHeading: "Addmission Going On",
    cardBodyHeading: "Apparel Manufacturing",
    cardBodyParagraph:
      "magna aliqua. Ut enim ad minim veniam, nisi ut aliquiptempor incid.",
    cardFooterCredit: "Credits : 125",
    cardFooterTime: "Duration : 4yrs",
  },
];

function SingleCard({ item }) {
  return (
    <div className="single-course">
      <div className="course-img">
        <Link to="course-details.html">
          <img className="animated" src={item.cardBackgroundImage} alt="" />
        </Link>
        <span>{item.cardHeading}</span>
      </div>
      <div className="course-content">
        <h4>
          <Link to="course-details.html">{item.cardBodyHeading}</Link>
        </h4>
        <p>{item.cardBodyParagraph}</p>
      </div>
      <div className="course-position-content">
        <div className="credit-duration-wrap">
          <div className="sin-credit-duration">
            <i className="fa fa-diamond"></i>
            <span>{item.cardFooterCredit}</span>
          </div>
          <div className="sin-credit-duration">
            <i className="fa fa-clock-o"></i>
            <span>{item.cardFooterTime}</span>
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
function CourseOwlSlider() {
  return (
    <OwlCarousel
      className="course-slider-active nav-style-1 owl-carousel"
      loop
      margin={30}
      nav={true}
      autoplay={false}
      autoplayTimeout={5000}
      animateIn={"fadeIn"}
      animateOut={"fadeOut"}
      items={4}
      dots={false}
      navText={[
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>',
      ]}
      responsive={{
        0: {
          items: 1,
        },
        768: {
          items: 2,
        },
        992: {
          items: 3,
        },
        1000: {
          items: 4,
        },
      }}
    >
      {courseContent.map((item) => (
        <SingleCard key={item.id} item={item} />
      ))}
    </OwlCarousel>
  );
}

export default CourseOwlSlider;
